import { defineConfig } from "vite";
import { projects } from "./src/projects.js";
import { renderCards } from "./src/render.js";
import { site } from "./src/site.js";
import {
  directoryPage,
  projectPage,
  notFoundPage,
  homeSchema,
  pagePaths,
} from "./scripts/pages.js";

// All project content ships as HTML. JavaScript enhances the homepage only.
export default defineConfig({
  appType: "mpa",
  plugins: [
    {
      name: "static-project-pages",
      transformIndexHtml(html) {
        if (!html.includes("<!-- PROJECT_CARDS -->")) return html;
        return html
          .replace("<!-- PROJECT_CARDS -->", renderCards(projects.slice(0, 6)))
          .replace("</head>", `${homeSchema()}</head>`);
      },
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const path = new URL(req.url, "http://localhost").pathname;
          const styles =
            '<link rel="stylesheet" href="/src/fonts.css"><link rel="stylesheet" href="/src/style.css">';
          let html;
          if (path === "/projects/" || path === "/projects")
            html = directoryPage(styles);
          else {
            const project = projects.find(
              (p) =>
                path === `/projects/${p.id}/` || path === `/projects/${p.id}`,
            );
            if (project) html = projectPage(project, styles);
            else if (path.startsWith("/projects/")) {
              html = notFoundPage(styles);
              res.statusCode = 404;
            }
          }
          if (!html) return next();
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(html);
        });
      },
      generateBundle(_, bundle) {
        const styles = Object.values(bundle)
          .filter(
            (file) => file.type === "asset" && file.fileName.endsWith(".css"),
          )
          .map((file) => `<link rel="stylesheet" href="/${file.fileName}">`)
          .join("");
        this.emitFile({
          type: "asset",
          fileName: "projects/index.html",
          source: directoryPage(styles),
        });
        for (const p of projects)
          this.emitFile({
            type: "asset",
            fileName: `projects/${p.id}/index.html`,
            source: projectPage(p, styles),
          });
        this.emitFile({
          type: "asset",
          fileName: "404.html",
          source: notFoundPage(styles),
        });
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pagePaths.map((path) => `<url><loc>${site.origin}${path}</loc></url>`).join("")}</urlset>`,
        });
      },
    },
  ],
});
