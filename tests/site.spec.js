import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("discover, filter, search, and recover from no results", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".project-card")).toHaveCount(6);
  await page.getByRole("button", { name: "Meet all 20 projects" }).click();
  await expect(page.locator(".project-card")).toHaveCount(20);
  await page
    .getByRole("button", { name: "Developer tools", exact: true })
    .click();
  await expect(page.locator(".project-card")).toHaveCount(3);
  const search = page.getByRole("searchbox");
  await search.fill("sql server");
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card h3")).toHaveText("PostgreSQL");
  await search.fill("nothing like this exists");
  await expect(page.getByText("No matches. No nonsense.")).toBeVisible();
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.locator(".project-card")).toHaveCount(6);
  await search.fill("photoshop");
  await expect(page.locator(".project-card")).toHaveCount(2);
  expect(errors).toEqual([]);
});

test("alternative finder gives relevant projects with caveats and official links", async ({
  page,
}) => {
  await page.goto("/");
  const finder = page.locator("#switch-result");
  await expect(finder.getByRole("button")).toHaveCount(2);
  await page
    .getByLabel("I’m looking for an alternative to…")
    .selectOption("Plex");
  await finder.getByRole("button", { name: /Jellyfin/ }).click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(
    dialog.getByRole("heading", { name: "Jellyfin", exact: true }),
  ).toBeVisible();
  await expect(dialog.getByText(/does not supply movies/)).toBeVisible();
  await expect(
    dialog.getByRole("link", { name: "Visit Jellyfin" }),
  ).toHaveAttribute("href", "https://jellyfin.org/");
  await expect(
    dialog.getByRole("link", { name: "Official project source" }),
  ).toHaveAttribute("href", "https://jellyfin.org/docs/general/about/");
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(finder.getByRole("button", { name: /Jellyfin/ })).toBeFocused();
  const values = await page
    .locator("#replace-select option")
    .evaluateAll((options) => options.map((option) => option.value));
  for (const value of values) {
    await page.locator("#replace-select").selectOption(value);
    expect(await finder.getByRole("button").count()).toBeGreaterThan(0);
  }
});

test("layout, local assets, and accessibility", async ({ page }, testInfo) => {
  const externalRequests = [];
  page.on("request", (request) => {
    if (!request.url().startsWith("http://127.0.0.1:4173"))
      externalRequests.push(request.url());
  });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  expect(externalRequests).toEqual([]);
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    results.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  ).toEqual([]);
  await page.screenshot({
    path: testInfo.outputPath("homepage.png"),
    fullPage: true,
  });
  await page
    .getByRole("button", { name: "Explore /e/OS", exact: true })
    .click();
  const modalResults = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(modalResults.violations.map((v) => v.id)).toEqual([]);
});
