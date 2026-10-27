# Project Archive — Ibrahim Hussein

Standalone Next.js project for [case-study.ibrahim-eng.dev](https://case-study.ibrahim-eng.dev)

## Setup

```bash
npm install
npm run dev
```

## Deploy

Push to GitHub and connect to Vercel/Netlify. Set the custom domain to `case-study.ibrahim-eng.dev`.

## Images

Project images live in `public/images/projects/`. Replace placeholder images with real screenshots as needed:

| File | Project |
|------|---------|
| `csai.jpg` | CSAI — Customer Service AI |
| `ashti-library.jpg` | Ashti Library |
| `face-track-pro.jpg` | Face Track Pro |
| `id-kurdm.jpg` | ID Kurdm — AI Platform |
| `ai-social-responder.jpg` | AI Social Media Responder |
| `home-system.jpg` | Home System |
| `water-level.jpg` | Water Level Monitoring |
| `hand-drones.jpg` | Hand Drones |
| `glove-talk.jpg` | Glove Talk |
| `portfolio-v2.jpg` | Portfolio v2 |
| `erbil-chess.jpg` | Erbil Chess Academy |
| `ctf-tools.jpg` | Kurdistan CTF Tools |
| `codex-prep.jpg` | CodeX Examination Prep |

## Link previews

Each public case-study route has its own 1200 × 630 JPEG preview in `public/images/social/`, captured from that actual case-study page in a browser. The archive homepage uses a capture of the archive homepage itself. The sibling server `layout.tsx` files provide the page's title, description, canonical URL, Open Graph image and matching Twitter image; they do not inherit the portfolio homepage cover.

To refresh previews, capture each real page at 1200 × 630: name the homepage `archive-social-home.png` and each case study `archive-social-<route-slug>.png`. Run `node scripts/generate-social-previews.mjs <absolute-capture-directory>`, then `npm run build` followed by `npm run test:seo`. The importer validates all dimensions and rejects duplicate captures before updating assets. It encodes the real captures and normalizes only tiny display-scaling size differences to 1200 × 630, without cropping, composing a replacement layout, adding labels or redrawing the website. A provenance manifest records each capture's filename and SHA-256 digest. Generation is not required at runtime.

Social platforms must be able to fetch the deployed HTTPS page and image. Localhost URLs cannot produce public previews, and previously shared links may retain the platform's cached preview until that platform refreshes it.
