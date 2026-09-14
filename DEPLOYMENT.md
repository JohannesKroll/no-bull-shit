# Deploy to Firebase Hosting

This website needs **Firebase Hosting only**. Its output is static HTML, CSS, images, and a small browser script. There are no server functions, databases, user accounts, or Firebase SDK calls. Your supplied app configuration and `getAnalytics()` are not needed for hosting. Analytics would be a separate product decision, and has not been added.

Firebase Hosting serves static content through a CDN, supports custom domains, and provides HTTPS. [Official Hosting guide](https://firebase.google.com/docs/hosting/quickstart).

## 1. Sign in again

Run these commands from this project folder with Node.js 22.12 or newer:

```sh
npm ci
npm run firebase:login -- --reauth
```

Use the Google account that owns or can deploy to `no-bull-shit-bb344`. The saved local sign-in was expired when checked on September 14, 2026. The web app configuration is not a deployment credential.

## 2. Publish

Open the [project’s Hosting console](https://console.firebase.google.com/project/no-bull-shit-bb344/hosting). If Hosting has never been enabled, complete its **Get started** wizard. The repository already includes `firebase.json` and `.firebaserc`, so you do not need to run `firebase init` or replace the existing files.

```sh
npm run deploy
```

This explicitly selects `no-bull-shit-bb344` and deploys **only Hosting**. A predeploy hook creates a fresh production build in `dist/` automatically. The configured Hosting site ID is `no-bull-shit-bb344`, the expected default for this project; live access could not be verified with the expired credentials. If your console shows a different site ID, update `hosting.site` in `firebase.json` to match it.

After a successful deployment, the CLI prints the live URL. For the configured site, it is expected to be:

```text
https://no-bull-shit-bb344.web.app
```

No production deployment was performed during this work; you chose to publish it yourself later.

## 3. Connect your domain

1. In Firebase Hosting, choose **Add custom domain** and enter `www.no-bullshit-services.com`.
2. At your domain registrar/DNS provider, add the exact verification and routing records Firebase displays. The required records depend on the domain setup; do not guess an IP address.
3. Keep any verification TXT record Firebase tells you to retain, and wait for DNS verification and the HTTPS certificate to finish provisioning.
4. Add `no-bullshit-services.com` as a redirect domain pointing to `www.no-bullshit-services.com`, so both addresses lead to the same canonical site.

The canonical URLs, social metadata, `robots.txt`, and sitemap are configured for the **www** address. If you choose another primary domain, update `src/site.js`, the homepage metadata in `index.html`, and `public/robots.txt`, then rebuild.

Firebase documents the domain verification, DNS, and certificate process in its [custom-domain guide](https://firebase.google.com/docs/hosting/custom-domain).

## 4. Submit the site to search engines

Once the custom domain is live:

1. Add and verify the domain in [Google Search Console](https://search.google.com/search-console/).
2. Submit `https://www.no-bullshit-services.com/sitemap.xml` under **Sitemaps**.
3. Use URL Inspection on the homepage and a project page to check whether Google can retrieve and index them.
4. Review indexing and Core Web Vitals as real visitors arrive. Local test scores are not field measurements or a guarantee of rankings.

The generated sitemap contains the homepage, directory, and 20 project pages. Google explains sitemap submission in its [sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

## Local validation

```sh
npm run hosting:check
```

This runs the Hosting emulator against a demo project and verifies served HTML, permanent project URLs, trailing-slash redirects, real 404 responses, and cache headers. It does not deploy. An expired saved login can produce a metadata warning, but local Hosting tests still run.

The Hosting configuration has no catch-all SPA rewrite: nonexistent pages return 404 instead of a successful homepage response. Fingerprinted assets cache for a year; HTML revalidates; the sitemap and robots file cache for one hour. See [Firebase’s configuration reference](https://firebase.google.com/docs/hosting/full-config).
