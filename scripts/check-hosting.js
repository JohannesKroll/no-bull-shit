import assert from "node:assert/strict";

const origin = "http://127.0.0.1:5000";
const home = await fetch(origin);
assert.equal(home.status, 200);
const html = await home.text();
assert.match(html, /Open-Source Software Alternatives/);
assert.match(home.headers.get("cache-control"), /max-age=0/);
assert.equal(home.headers.get("x-content-type-options"), "nosniff");
const css = html.match(/href="(\/assets\/[^\"]+\.css)"/)[1];
const asset = await fetch(origin + css);
assert.equal(asset.status, 200);
assert.match(asset.headers.get("cache-control"), /max-age=31536000/);
const guide = await fetch(origin + "/projects/nextcloud/");
assert.equal(guide.status, 200);
assert.match(await guide.text(), /<h1>Nextcloud<\/h1>/);
assert.match(guide.headers.get("cache-control"), /max-age=0/);
const canonical = await fetch(origin + "/projects/nextcloud", {
  redirect: "manual",
});
assert.equal(canonical.status, 301);
assert.equal(canonical.headers.get("location"), "/projects/nextcloud/");
const missing = await fetch(origin + "/projects/does-not-exist/");
assert.equal(missing.status, 404);
assert.match(await missing.text(), /WELL, THAT’S/);
const sitemap = await fetch(origin + "/sitemap.xml");
assert.equal(sitemap.status, 200);
assert.match(sitemap.headers.get("cache-control"), /max-age=3600/);
console.log(
  "Firebase Hosting emulator: pages, real 404, canonical redirect, and caching passed.",
);
