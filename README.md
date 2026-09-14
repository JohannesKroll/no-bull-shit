# No Bullshit Services

An independent open-source discovery site for **www.no-bullshit-services.com**. A bold software zine with 20 researched projects, honest switching advice, a searchable directory, and an alternative finder.

Built with vanilla JavaScript, CSS, and Vite. The homepage is progressively enhanced; the directory and all 20 project guides are generated as static HTML. Fonts, project icons, and the social image are served locally. No analytics, accounts, backend, or Firebase app SDK.

## Run locally

Requires Node.js 22.12+.

```sh
npm ci
npm run dev
```

To preview the deployable production output:

```sh
npm run build
npm run preview
```

The website is generated in `dist/`. Project pages are also available directly in development, for example `/projects/nextcloud/`.

## Firebase Hosting

The project is configured for `no-bull-shit-bb344`. Hosting alone is sufficient.

```sh
npm run firebase:login -- --reauth
npm run deploy
```

The deploy command builds automatically and publishes only Hosting. See [DEPLOYMENT.md](DEPLOYMENT.md) for initial setup, connecting the domain, Search Console submission, and local Hosting validation. Deployment is left to the owner as requested.

## Validation

```sh
npx playwright install chromium
npm test
npm run hosting:check
```

To use an existing system Chromium, set `CHROMIUM_PATH` to its executable instead of installing a Playwright browser. Browser tests run at 320, 390, 768, and 1440 pixels. They cover search and filter flows, alternative-finder choices, dialog keyboard behavior, overflow, local assets, automated accessibility, generated SEO metadata, sitemap completeness, and browsing without JavaScript. The Firebase emulator check verifies hosting behavior without publishing.

Automated accessibility and local performance checks are useful validation, not a complete audit or field performance measurement.

## Content and SEO

- `src/projects.js`: project descriptions, alternatives, impact, trade-offs, setup links, and official sources.
- `src/render.js`: shared project-card renderer for browser and generated pages.
- `scripts/pages.js`: static directory, project guides, 404 page, and structured data.
- `vite.config.js`: pre-rendered homepage cards, development routes, generated pages, and sitemap.
- `src/site.js`: canonical origin and shared site metadata.
- `index.html`: homepage copy, metadata, and layout.
- `src/style.css`: responsive visual design, including project guides.

The original research was checked against official project websites on **September 13, 2026**. This is an editorial selection based on usefulness, capability, community relevance, and impact on software development, not an objective global ranking. [RESEARCH.md](RESEARCH.md) contains the source index.

The initial homepage highlights six projects; all 20 can be shown or searched. Each project has a permanent URL with a title, description, canonical URL, social metadata, and structured data. `/projects/` links to the complete collection without JavaScript. The generated sitemap includes all 22 indexable pages, and nonexistent paths return 404 on Firebase Hosting.

If changing the number of projects, update homepage prose and labels that explicitly say “20”; generated directory pages and sitemap derive their counts from the data. If changing the domain, update `src/site.js`, `index.html`, and `public/robots.txt` together.

## Social image

`public/social-card.png` is the 1200 × 630 sharing image. Its original HTML/CSS design can be regenerated using:

```sh
npm run social-image
```

This requires a Playwright browser or `CHROMIUM_PATH`. It starts a temporary local server and writes the image; normal builds do not need a browser.

## Site notes

Before publishing, add your applicable operator/contact details to the site notes. Update privacy wording if you introduce analytics or other services. No operator identity or contact address was invented.

Fonts are bundled from Fontsource. Project icons come from Simple Icons (CC0); project trademarks remain with their owners. The /e/ label is text. The crossed-out BS mark, typographic hero, and sharing image are original vector/HTML/CSS designs. This repository does not assign a license to your original site code; choose one if publishing its source.
