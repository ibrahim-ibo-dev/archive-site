import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import test from "node:test";

const root = new URL("./", import.meta.url);
const read = (path) => readFileSync(new URL(path, root), "utf8");
const site = "https://case-study.ibrahim-eng.dev";
const slugs = readdirSync(new URL("src/app/", root), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(new URL(`src/app/${entry.name}/page.tsx`, root)))
  .map((entry) => entry.name);
const sitemap = read(".next/server/app/sitemap.xml.body");
const home = read(".next/server/app/index.html");
const titles = new Set([home.match(/<title>(.*?)<\/title>/)?.[1]]);
const descriptions = new Set([home.match(/<meta name="description" content="([^"]*)"/)?.[1]]);

for (const slug of slugs) {
  test(`${slug} has unique, self-canonical metadata in the generated HTML`, () => {
    const html = read(`.next/server/app/${slug}.html`);
    const url = `${site}/${slug}`;
    const canonicals = [...html.matchAll(/<link rel="canonical" href="([^"]*)"/g)];
    assert.deepEqual(canonicals.map((match) => match[1]), [url]);
    assert.ok(html.includes(`<meta property="og:url" content="${url}"`));
    assert.ok(html.includes('<meta name="robots" content="index, follow"'));
    assert.ok(!html.includes("noindex"));
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    assert.ok(title && !titles.has(title), "Title must be nonempty and unique");
    assert.ok(description && !descriptions.has(description), "Description must be nonempty and unique");
    titles.add(title);
    descriptions.add(description);
    assert.ok(sitemap.includes(`<loc>${url}</loc>`));
    assert.ok(home.includes(`href="/${slug}"`), "Homepage must link to the case study");
  });
}

test("sitemap covers exactly the public pages", () => {
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(new Set(urls), new Set([site, ...slugs.map((slug) => `${site}/${slug}`)]));
  assert.equal(urls.length, slugs.length + 1);
});
