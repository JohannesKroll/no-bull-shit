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
export function logo(project) {
  return `<span class="project-logo" style="--logo-color:${project.color}" aria-hidden="true">${project.id === "eos" ? '<span class="eos-logo">/e/</span>' : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="${icons[project.id].path}"/></svg>`}</span>`;
}

export function renderCards(items, { interactive = true } = {}) {
  return items
    .map((p) => {
      const href = `/projects/${p.id}/`;
      const action = interactive ? ` data-project="${p.id}"` : "";
      return `<article class="project-card" data-number="${String(projects.indexOf(p) + 1).padStart(2, "0")}" style="--card-bg:${p.background};--project-color:${p.color}"><div class="card-top">${logo(p)}<span class="card-category">${p.category}</span><a class="card-arrow" href="${href}"${action} aria-label="Explore ${p.name}">↗</a></div><h3><a href="${href}"${action}>${p.name}</a></h3><div class="tagline">${p.tagline}</div><p class="card-description">${p.description}</p><div class="alternative"><span>INSTEAD OF</span><span>${p.alternative}</span></div><div class="card-bottom"><span><i class="setup-dot${p.setup === "Easy first switch" ? " easy" : ""}"></i>${p.setup}</span></div></article>`;
    })
    .join("");
}
