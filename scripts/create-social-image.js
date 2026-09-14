// Regenerate the social preview after changing the visual identity.
// Run: CHROMIUM_PATH=/usr/bin/chromium npm run social-image
import { chromium } from "@playwright/test";
import { createServer } from "vite";
import { mkdir } from "node:fs/promises";

const server = await createServer({ server: { port: 5199, strictPort: true } });
let browser;
try {
  await server.listen();
  browser = await chromium.launch(
    process.env.CHROMIUM_PATH
      ? { executablePath: process.env.CHROMIUM_PATH }
      : {},
  );
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto("http://localhost:5199/");
  await page.setContent(
    `<html><head><style>@font-face{font-family:Anton;src:url('http://localhost:5199/node_modules/@fontsource/anton/files/anton-latin-400-normal.woff2')}*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#2442ed;color:#f3f0e5;padding:36px 50px;font-family:Anton,sans-serif}.top{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #ffffff80;padding-bottom:20px;font:15px monospace}.top span:last-child{background:#eaff79;color:#171713;padding:10px;transform:rotate(3deg)}h1{font-size:117px;line-height:1.1;margin:32px 0 0;font-weight:400}.second{font-size:165px;white-space:nowrap;margin-top:16px;line-height:1.2}.cut{display:inline-block;position:relative;background:#ff7049;color:#171713;transform:rotate(-3deg);padding:0 10px;line-height:1.08}.cut:after{content:'';position:absolute;left:-2%;right:-2%;height:6px;top:53%;background:#f3f0e5;transform:rotate(-4deg)}.bottom{display:flex;justify-content:space-between;font:17px monospace;margin-top:35px;align-items:center}.bottom img{width:50px;background:#f3f0e5;padding:4px}</style></head><body><div class="top"><span>NO BULLSHIT SERVICES / OPEN-SOURCE ALTERNATIVES</span><span>YOUR SOFTWARE. YOUR RULES.</span></div><h1>GOOD SOFTWARE.</h1><div class="second">ZERO <span class="cut">BULLSHIT.</span></div><div class="bottom"><span>20 projects. Real choice. No sales pitch.</span><img src="http://localhost:5199/brand-mark.svg" alt=""></div></body></html>`,
  );
  await page.evaluate(() => document.fonts.ready);
  await mkdir("public", { recursive: true });
  await page.screenshot({ path: "public/social-card.png" });
} finally {
  await browser?.close();
  await server.close();
}
