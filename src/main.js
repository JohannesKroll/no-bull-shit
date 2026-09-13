import "@fontsource-variable/dm-sans";
import "@fontsource/anton/latin-400.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./style.css";
import { projects } from "./projects.js";
import {
  siNextcloud,
  siJellyfin,
  siLibreoffice,
  siLinuxmint,
  siBlender,
  siOnlyoffice,
  siFirefox,
  siBitwarden,
  siSignal,
  siThunderbird,
  siGimp,
  siInkscape,
  siVlcmediaplayer,
  siObsstudio,
  siKrita,
  siDebian,
  siGit,
  siPostgresql,
  siPython,
} from "simple-icons";

const icons = {
  nextcloud: siNextcloud,
  jellyfin: siJellyfin,
  libreoffice: siLibreoffice,
  linuxmint: siLinuxmint,
  blender: siBlender,
  onlyoffice: siOnlyoffice,
  firefox: siFirefox,
  bitwarden: siBitwarden,
  signal: siSignal,
  thunderbird: siThunderbird,
  gimp: siGimp,
  inkscape: siInkscape,
  vlc: siVlcmediaplayer,
  obs: siObsstudio,
  krita: siKrita,
  debian: siDebian,
  git: siGit,
  postgresql: siPostgresql,
  python: siPython,
};
const categories = [
  "All projects",
  "Everyday tools",
  "Operating systems",
  "Media & creativity",
  "Developer tools",
];
const grid = document.querySelector("#project-grid");
const search = document.querySelector("#project-search");
const dialog = document.querySelector("#project-dialog");
const showAll = document.querySelector("#show-all");
let category = "All projects";
let expanded = false;

function logo(project) {
  return `<span class="project-logo" style="--logo-color:${project.color}" aria-hidden="true">${project.id === "eos" ? '<span class="eos-logo">/e/</span>' : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${icons[project.id].path}"/></svg>`}</span>`;
}

document.querySelector(".filters").innerHTML = categories
  .map(
    (name, i) =>
      `<button class="filter${i === 0 ? " active" : ""}" aria-pressed="${i === 0}" data-category="${name}">${name === "All projects" ? "All projects <span>20</span>" : name}</button>`,
  )
  .join("");

function render() {
  const query = search.value.toLowerCase().trim();
  const filtered = projects.filter(
    (p) =>
      (category === "All projects" || p.category === category) &&
      [p.name, p.category, p.tagline, p.description, ...p.replaces]
        .join(" ")
        .toLowerCase()
        .includes(query),
  );
  const visible =
    !expanded && !query && category === "All projects"
      ? filtered.slice(0, 6)
      : filtered;
  grid.innerHTML = visible
    .map(
      (p) =>
        `<article class="project-card" data-number="${String(projects.indexOf(p) + 1).padStart(2, "0")}" style="--card-bg:${p.background};--project-color:${p.color}"><div class="card-top">${logo(p)}<span class="card-category">${p.category}</span><button class="card-arrow" data-project="${p.id}" aria-label="Explore ${p.name}">↗</button></div><h3><button data-project="${p.id}">${p.name}</button></h3><div class="tagline">${p.tagline}</div><p class="card-description">${p.description}</p><div class="alternative"><span>INSTEAD OF</span><span>${p.alternative}</span></div><div class="card-bottom"><span><i class="setup-dot${p.setup === "Easy first switch" ? " easy" : ""}"></i>${p.setup}</span><button data-project="${p.id}">Meet ${p.id === "onlyoffice" ? "ONLYOFFICE" : p.name} <span aria-hidden="true">↗</span></button></div></article>`,
    )
    .join("");
  document.querySelector("#result-count").textContent =
    `${visible.length === 6 && filtered.length === 20 ? "6 favourites to get you started" : `${filtered.length} project${filtered.length === 1 ? "" : "s"} to explore`}`;
  document.querySelector("#empty-state").hidden = filtered.length !== 0;
  showAll.hidden = !!query || category !== "All projects";
  showAll.innerHTML = expanded
    ? 'Back to the shortlist <span aria-hidden="true">↑</span>'
    : 'Meet all 20 projects <span aria-hidden="true">↓</span>';
  document.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.category === category;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

document.querySelector(".filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) {
    category = button.dataset.category;
    render();
  }
});
search.addEventListener("input", render);
showAll.addEventListener("click", () => {
  expanded = !expanded;
  render();
  if (!expanded)
    document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#clear-search").addEventListener("click", () => {
  category = "All projects";
  search.value = "";
  expanded = false;
  render();
  search.focus();
});

function openDialog(content) {
  document.querySelector("#dialog-content").innerHTML = content;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function openProject(id) {
  const p = projects.find((project) => project.id === id);
  if (!p) return;
  openDialog(
    `<div class="dialog-project-header" style="--card-bg:${p.background}">${logo(p)}<div class="eyebrow">${p.category}</div><h2 id="dialog-title">${p.name}</h2><p>${p.tagline}</p></div><div class="dialog-body"><p class="dialog-intro">${p.description}</p><div class="dialog-facts"><div><span>AN ALTERNATIVE TO</span><strong>${p.alternative}</strong></div><div><span>GETTING STARTED</span><strong>${p.setup}</strong></div></div><h3>Why it matters</h3><p>${p.impact}</p><h3>The honest heads-up</h3><p>${p.caveat}</p><h3>Your first small step</h3><p>${p.start}</p><div class="dialog-actions"><a class="button primary" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit ${p.id === "onlyoffice" ? "ONLYOFFICE" : p.name} ↗</a><a class="quiet-link" href="${p.guide}" target="_blank" rel="noopener noreferrer">Getting-started guide ↗</a></div><p class="source-note">Checked September 2026 · <a href="${p.source}" target="_blank" rel="noopener noreferrer">Official project source ↗</a></p></div>`,
  );
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-project]");
  if (button) openProject(button.dataset.project);
});
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () =>
  document.body.classList.remove("dialog-open"),
);

function renderSwitch() {
  const selected = document.querySelector("#replace-select").value;
  const matches = projects.filter((p) => p.replaces.includes(selected));
  document.querySelector("#switch-result").innerHTML =
    `<div class="switch-result-label">MEET YOUR OPEN-SOURCE OPTIONS <span aria-hidden="true">↓</span></div>${matches.map((p) => `<button class="switch-option" data-project="${p.id}">${logo(p)}<span><strong>${p.name}</strong><small>${p.setup}</small></span><span class="switch-arrow" aria-hidden="true">↗</span></button>`).join("")}`;
}
document
  .querySelector("#replace-select")
  .addEventListener("change", renderSwitch);
document
  .querySelector("#methodology-button")
  .addEventListener("click", () =>
    openDialog(
      `<div class="dialog-body info-dialog"><div class="eyebrow">CURATED WITH INTENT</div><h2 id="dialog-title">Useful beats hype.</h2><p>These 20 projects are an editorial starting point, not a measured ranking of the world’s most impactful software.</p><h3>What earns a spot?</h3><p>Practical usefulness, a meaningful open-source offering, relevance to a broad community, and an important role in everyday computing or software development.</p><h3>Why this mix?</h3><p>/e/OS, Nextcloud, Jellyfin, office suites, and Linux are the starting point. Creative tools show what open source makes possible; Git, PostgreSQL, and Python show what people can build with it.</p><h3>Where do the facts come from?</h3><p>Official project websites and documentation, reviewed on September 13, 2026. Each project detail includes its source. Alternatives are editorial comparisons, not promises of feature parity. Capabilities and licensing can change; verify your requirements with the project.</p><p>There are no sponsored rankings or affiliate links.</p></div>`,
    ),
  );
document
  .querySelector("#privacy-button")
  .addEventListener("click", () =>
    openDialog(
      `<div class="dialog-body info-dialog"><div class="eyebrow">SMALL SITE. PLAIN ENGLISH.</div><h2 id="dialog-title">Privacy & site notes.</h2><p>This site includes no analytics, advertising scripts, tracking cookies, accounts, or newsletter forms. Search and filters run in your browser; your search text is not sent to a server.</p><p>Fonts and project icons are bundled locally. Following an external link takes you to that project’s website, where its own privacy policy applies.</p><p>Your hosting provider may process technical request data, such as IP addresses and access logs, to serve the site.</p><p>This is an independent discovery project. Names and logos identify the projects and belong to their respective owners; listing does not imply endorsement.</p></div>`,
    ),
  );
render();
renderSwitch();
