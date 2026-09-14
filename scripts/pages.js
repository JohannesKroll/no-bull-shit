import { projects } from "../src/projects.js";
import { logo, renderCards } from "../src/render.js";
import { site } from "../src/site.js";

const escape = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const jsonLd = (value) =>
  `<script type="application/ld+json">${JSON.stringify(value).replace(/</g, "\\u003c")}</script>`;
export const projectPath = (p) => `/projects/${p.id}/`;
export const pagePaths = ["/", "/projects/", ...projects.map(projectPath)];

function itemList() {
  return {
    "@type": "ItemList",
    name: "Open-source software alternatives",
    numberOfItems: projects.length,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: site.origin + projectPath(p),
    })),
  };
}

export function homeSchema() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.origin}/#website`,
    name: "Open-Source Software Alternatives",
    url: `${site.origin}/`,
    description: site.description,
    inLanguage: "en",
    mainEntity: itemList(),
  });
}

const brand = `<a class="brand" href="/"><img class="brand-mark" src="/brand-mark.svg" alt="" width="52" height="52"><span class="brand-name">NO BULLSHIT <span class="brand-sub">SERVICES</span></span></a>`;
const external = (url, label, className = "quiet-link") =>
  `<a class="${className}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)} ↗</a>`;

function shell({
  title,
  description,
  path,
  body,
  schema,
  styles,
  noindex = false,
}) {
  return `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#2442ed"><title>${escape(title)}</title><meta name="description" content="${escape(description)}">${noindex ? '<meta name="robots" content="noindex,follow">' : `<link rel="canonical" href="${site.origin}${path}">`}<meta property="og:type" content="website"><meta property="og:site_name" content="${site.name}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${site.origin}${path}"><meta property="og:image" content="${site.origin}/social-card.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Good software. Zero bullshit. An independent guide to open-source alternatives."><meta name="twitter:card" content="summary_large_image"><link rel="icon" type="image/svg+xml" href="/favicon.svg">${styles}${schema || ""}</head><body><a class="skip-link" href="#content">Skip to content</a><header class="site-header wrap">${brand}<nav aria-label="Main navigation"><a href="/projects/">All projects</a><a href="/#why-open-source">Why open source?</a></nav><a class="header-cta" href="/#switch">Find your alternative ↗</a></header><main id="content" class="standalone wrap">${body}</main><footer class="wrap">${brand}<p>A small corner of the internet.<br>A little more freedom.</p><div><a href="/projects/">Explore all ${projects.length} projects ↗</a><a href="/#get-involved">Get involved ↗</a></div></footer></body></html>`;
}

export function directoryPage(styles) {
  return shell({
    title:
      "20 Open-Source Software Alternatives — Directory | No Bullshit Services",
    description: site.description,
    path: "/projects/",
    styles,
    schema: jsonLd({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Open-source project directory",
      url: `${site.origin}/projects/`,
      mainEntity: itemList(),
    }),
    body: `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Projects</span></nav><div class="standalone-intro"><div class="eyebrow">THE WHOLE OPEN-SOURCE SHORTLIST</div><h1>GOOD SOFTWARE.<br>ALL ${projects.length} PICKS.</h1><p>Open-source alternatives for your phone, computer, cloud, creative work, and code. Each guide explains what the project does, what it can replace, and what to check before switching.</p><p class="editorial-note">An independent editorial selection, not a measured popularity ranking. Sources checked September 2026.</p><a class="quiet-link" href="/#projects">Search and filter the shortlist ↗</a></div><div class="project-grid">${renderCards(projects, { interactive: false })}</div>`,
  });
}

export function projectPage(p, styles) {
  const path = projectPath(p);
  const related = projects
    .filter((other) => other.id !== p.id && other.category === p.category)
    .slice(0, 3);
  const title = `${p.name}: Open-Source Alternative | No Bullshit Services`;
  const schema = jsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        url: site.origin + path,
        description: p.description,
        inLanguage: "en",
        about: {
          "@type": "SoftwareApplication",
          name: p.name,
          url: p.url,
          description: p.description,
          applicationCategory: p.category,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.origin + "/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: site.origin + "/projects/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: p.name,
            item: site.origin + path,
          },
        ],
      },
    ],
  });
  return shell({
    title,
    description: `${p.name}: ${p.description}`,
    path,
    styles,
    schema,
    body: `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/projects/">Projects</a><span aria-hidden="true">/</span><span>${escape(p.name)}</span></nav><article class="project-guide"><header class="guide-heading">${logo(p)}<div class="eyebrow">${escape(p.category)} / OPEN-SOURCE PROJECT GUIDE</div><h1>${escape(p.name)}</h1><p class="guide-tagline">${escape(p.tagline)}</p><p class="guide-description">${escape(p.description)}</p></header><div class="guide-layout"><aside class="guide-facts" aria-label="At a glance"><div><span>AN ALTERNATIVE TO</span><strong>${escape(p.alternative)}</strong></div><div><span>GETTING STARTED</span><strong>${escape(p.setup)}</strong></div>${external(p.url, "Official website", "button primary")}<p>Independent recommendation. No paid placement or affiliate link.</p></aside><div class="guide-content"><section><h2>Why it matters</h2><p>${escape(p.impact)}</p></section><section><h2>The honest heads-up</h2><p>${escape(p.caveat)}</p></section><section><h2>Your first small step</h2><p>${escape(p.start)}</p>${external(p.guide, "Getting-started guide")}</section><p class="source-note">Checked September 2026 · ${external(p.source, "Official project source")}<br>Capabilities can change. Check the project’s current documentation for your setup.</p></div></div></article><section class="related-projects" aria-labelledby="related-title"><div class="eyebrow">KEEP EXPLORING / ${escape(p.category)}</div><h2 id="related-title">MORE GOOD STUFF.</h2><div class="project-grid">${renderCards(related, { interactive: false })}</div><a class="button secondary" href="/projects/">Browse all projects ↗</a></section>`,
  });
}

export function notFoundPage(styles) {
  return shell({
    title: "Page Not Found | No Bullshit Services",
    description:
      "That page is missing. Explore the open-source project directory instead.",
    path: "/404.html",
    styles,
    noindex: true,
    body: `<div class="standalone-intro error-page"><div class="eyebrow">ERROR 404 / NO SOFTWARE HERE</div><h1>WELL, THAT’S<br>NOT IDEAL.</h1><p>This page doesn’t exist. The good stuff is still here.</p><a class="button primary" href="/projects/">Find an open-source alternative ↗</a></div>`,
  });
}
