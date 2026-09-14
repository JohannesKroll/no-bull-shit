import { test, expect } from "@playwright/test";
import { projects } from "../src/projects.js";
import AxeBuilder from "@axe-core/playwright";

test("every project ships readable HTML, unique metadata, canonical links, and valid structured data", async ({
  request,
}) => {
  const titles = new Set();
  for (const p of projects) {
    const response = await request.get(`/projects/${p.id}/`);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain(`<h1>${p.name.replaceAll("&", "&amp;")}</h1>`);
    expect(html).toContain(
      `href="https://www.no-bullshit-services.com/projects/${p.id}/"`,
    );
    expect(html).toContain("The honest heads-up");
    expect(html).toContain(p.source);
    expect(html).toContain('rel="stylesheet"');
    const title = html.match(/<title>(.*?)<\/title>/)[1];
    expect(titles.has(title)).toBe(false);
    titles.add(title);
    const structuredData = JSON.parse(
      html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1],
    );
    expect(structuredData["@graph"][0].about.name).toBe(p.name);
  }
  const home = await (await request.get("/")).text();
  expect(home).toContain('href="/projects/eos/"');
  expect(home).not.toContain("<!-- PROJECT_CARDS -->");
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap.match(/<loc>/g)).toHaveLength(22);
  for (const p of projects) expect(sitemap).toContain(`/projects/${p.id}/`);
  expect(sitemap).not.toContain("/404");
  expect((await request.get("/projects/not-a-project/")).status()).toBe(404);
  expect(await (await request.get("/404.html")).text()).toContain(
    "noindex,follow",
  );
  expect(
    (await request.get("/social-card.png")).headers()["content-type"],
  ).toContain("image/png");
});

test("directory and project guides work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4173/");
  await expect(page.locator(".project-card")).toHaveCount(6);
  await page
    .getByRole("link", { name: "Browse the complete directory" })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(20);
  await page
    .getByRole("link", { name: "Explore Nextcloud", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Nextcloud", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Official website" }),
  ).toHaveAttribute("href", "https://nextcloud.com/");
  await context.close();
});

test("project pages remain readable and accessible on this screen", async ({
  page,
}) => {
  await page.goto("/projects/onlyoffice/");
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "ONLYOFFICE Desktop Editors",
  );
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});
