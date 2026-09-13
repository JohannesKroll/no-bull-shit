# No Bullshit Services

A static, responsive open-source discovery site for **www.no-bullshit-services.com**. Built with vanilla JavaScript, CSS, and Vite. No backend, tracking, remote fonts, or API keys.

## Development

Requires Node.js 22.12+ (or another Node version supported by Vite 7).

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The deployable website is in `dist/`. Serve that folder with your chosen static host. Hosting and deployment are left to the owner. No Firebase project has been created or configured.

## Checks

```sh
npx playwright install chromium
npm test
```

If using a system Chromium installation, set `CHROMIUM_PATH` to its executable instead of installing a Playwright browser. The browser tests cover desktop and mobile search/filter flows, all alternative-finder choices, dialog keyboard behavior, layout overflow, locally served assets, and automated accessibility checks. Automated checks do not replace a full accessibility audit.

## Content

Edit `src/projects.js` to maintain the 20-project shortlist. Each entry includes a category, proprietary alternatives, official URL, research source, impact rationale, switching limitations, and a getting-started link. Update the visible project totals in `index.html` and `src/main.js` if the collection changes.

The initial research was checked against official project websites and documentation on **September 13, 2026**. This is an editorial selection based on practical usefulness, breadth of capability, community relevance, and impact on software development, not an objective ranking. Sources and limitations are available in each project’s detail dialog. See `RESEARCH.md` for the source index.

Search matches project names, descriptions, categories, and proprietary alternatives. Category filters combine with search. The alternative finder opens matching project details. The initial view highlights six favourites; all 20 can be shown with one click.

## Before publication

The canonical URL, sitemap, and social metadata use the supplied domain. Add your actual site operator and hosting information to the privacy/site notes in `src/main.js` as applicable. No operator identity or contact address was invented. The privacy text describes the shipped site code; update it if adding analytics, forms, or other services.

Fonts are bundled from Fontsource. Project icons come from Simple Icons (CC0); project trademarks remain with their owners. The /e/ label is rendered as text. The decorative hero is original HTML/CSS. This repository does not assign a license to your original site code; select one if you decide to publish its source.
