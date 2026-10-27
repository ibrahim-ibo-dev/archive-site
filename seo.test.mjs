import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import test from "node:test";
import sharp from "sharp";

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

test("every public page has a unique, fetchable JPEG social preview with Twitter parity", async () => {
  const imageUrls = new Set();
  const manifest = JSON.parse(read("public/images/social/manifest.json"));
  assert.deepEqual(new Set(Object.keys(manifest)), new Set(["home", ...slugs]));
  for (const slug of ["", ...slugs]) {
    const html = slug ? read(`.next/server/app/${slug}.html`) : home;
    const images = [...html.matchAll(/<meta property="og:image" content="([^"]*)"/g)].map(match => match[1]);
    const twitter = [...html.matchAll(/<meta name="twitter:image" content="([^"]*)"/g)].map(match => match[1]);
    assert.equal(images.length, 1, `${slug || "home"} must declare one unambiguous OG image`);
    assert.deepEqual(twitter, images, "Twitter and Open Graph must use the same page preview");
    assert.ok(images[0].startsWith(`${site}/images/social/`));
    assert.ok(!imageUrls.has(images[0]), "Every page must have its own image URL");
    imageUrls.add(images[0]);
    const record = manifest[slug || "home"];
    assert.equal(`${site}${record.image}`, images[0]);
    assert.equal(record.sourceCapture, `archive-social-${slug || "home"}.png`);
    assert.match(record.sourceSha256, /^[a-f0-9]{64}$/, "Capture provenance must be recorded");
    const local = new URL(`public${new URL(images[0]).pathname}`, root);
    assert.ok(existsSync(local), "The social asset must ship with this project");
    const info = await sharp(readFileSync(local)).metadata();
    assert.equal(info.width, 1200);
    assert.equal(info.height, 630);
    assert.equal(info.format, "jpeg");
    assert.ok(html.includes('<meta property="og:image:width" content="1200"'));
    assert.ok(html.includes('<meta property="og:image:height" content="630"'));
    assert.ok(html.includes('<meta property="og:image:type" content="image/jpeg"'));
    assert.ok(html.includes('<meta name="twitter:card" content="summary_large_image"'));
  }
});

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
