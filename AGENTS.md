# Project verification

- Run `npm run build && npm run test:seo` after changing page metadata, routes, homepage links, or the sitemap. The SEO tests read generated HTML and sitemap output from `.next/server/app`, so build first.
- Case-study pages are client components. Their sibling server `layout.tsx` files provide unique titles, descriptions, canonical URLs, and social metadata without changing the interactive page.
- Case-study canonical URLs have no trailing slash and must match sitemap entries. Do not let child routes inherit the homepage canonical.
