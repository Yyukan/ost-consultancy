/*
 * /apps/ page: renders the left app menu, the app catalogue grouped by category, the shared
 * FAQ, Buy Me a Coffee and the combined privacy policy from window.OST_APPS (apps-data.js).
 * Deep links: /apps/#<id> jumps to an app, /apps/#privacy-<id> to its privacy row.
 */
(() => {
  "use strict";

  const D = window.OST_APPS;
  const COFFEE_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M7 3.5c0 .8.9 1 .9 1.8"/><path d="M11 3.5c0 .8.9 1 .9 1.8"/></svg>';

  const APPLE_SVG = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M16.37 12.7c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.48.83-.72 0-1.83-.81-3-.79-1.55.02-2.97.9-3.77 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.41-3.65ZM14.1 5.95c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.1 1.76-.96 2.8 1.01.08 2.05-.52 2.68-1.28Z"/></svg>';
  const byCategory = (id) => D.apps.filter((a) => a.category === id);
  const categoryTitle = (id) => D.categories.find((c) => c.id === id).title;
  const mailto = (a) => `mailto:${D.contactEmail}?subject=${encodeURIComponent(a.name)}`;
  const coffeeButton = () =>
    `<a class="coffee" href="${D.coffeeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Buy me a coffee (opens buymeacoffee.com in a new tab)">${COFFEE_SVG}<span>Buy me a coffee</span></a>`;

  function renderSideNav() {
    document.getElementById("sideNav").innerHTML = D.categories.map((c) =>
      `<h3>${c.title}</h3>` + byCategory(c.id).map((a) =>
        `<a href="#${a.id}" data-id="${a.id}"><img src="${a.icon}" alt="" width="28" height="28">${a.name}</a>`).join("")).join("")
      + '<div class="extra"><a href="#faq">FAQ</a><a href="#privacy">Privacy policy</a><a href="#contact">Contact</a></div>';
  }

  function appHtml(a) {
    const store = a.appStore
      ? `<a class="primary" href="${a.appStore}" target="_blank" rel="noopener noreferrer" aria-label="${a.name} on the App Store (opens in a new tab)">${APPLE_SVG}App Store</a>`
      : "";
    const tags = [a.platforms, a.privacy.network ? "Needs internet" : "Works offline", "No ads"];
    return `
      <article class="app-card timeline-content" id="${a.id}">
        <div class="app-card-head">
          <img class="app-icon" src="${a.icon}" alt="${a.name} app icon" width="72" height="72">
          <div class="timeline-header">
            <h3>${a.name}</h3>
            <span class="company">${a.tagline}</span>
            <span class="period">${categoryTitle(a.category)}</span>
          </div>
        </div>
        <p>${a.description}</p>
        <div class="tech-stack">${tags.map((t) => `<span class="tech-tag">${t}</span>`).join("")}</div>
        <div class="timeline-details">
          <h4>Help &amp; tips</h4>
          <ul>${a.tips.map(([q, t]) => `<li><strong>${q}</strong>${t}</li>`).join("")}</ul>
        </div>
        <div class="row-links">${store}<a href="${mailto(a)}">Email support</a><a href="#privacy-${a.id}">Privacy</a></div>
      </article>`;
  }

  function renderCatalogue() {
    document.getElementById("catalogue").innerHTML = D.categories.map((c) => `
      <section class="cat-block" id="cat-${c.id}" aria-labelledby="h-${c.id}">
        <h2 class="section-title" id="h-${c.id}">${c.title}</h2>
        <p class="section-subtitle">${c.blurb}</p>
        <div class="app-grid">${byCategory(c.id).map(appHtml).join("")}</div>
      </section>`).join("");
  }

  function renderFaq() {
    document.getElementById("faqList").innerHTML = `<div class="faq-list">${D.faq
      .map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
  }

  function renderPrivacy() {
    const rows = D.apps.map((a) => `
          <tr id="privacy-${a.id}">
            <td><span class="app-cell"><img class="app-icon" src="${a.icon}" alt="" width="28" height="28">${a.name}</span></td>
            <td data-label="Internet">${a.privacy.network ? '<span class="pill pill-on">Yes</span>' : '<span class="pill pill-off">Offline</span>'}</td>
            <td data-label="Stored">${a.privacy.stores}</td>
            <td data-label="Notes" class="${a.privacy.note ? "" : "empty"}">${a.privacy.note || "—"}</td>
          </tr>`).join("");
    document.getElementById("privacyBody").innerHTML = `
      <div class="privacy-wrap">
        <p><strong>Effective date: ${D.privacyEffective}.</strong> This policy covers every app on this page:
          ${D.apps.map((a) => a.name).join(", ")}.</p>
        <p>None of these apps collect, store or share personal data with the developer.</p>
        <ul>
          <li>No accounts, no ads, no analytics and no tracking.</li>
          <li>Everything an app remembers is saved only on your device and is deleted when you delete the app.</li>
          <li>Purchases are handled by Apple through the App Store; the developer receives no personal information about buyers.</li>
          <li>No data is collected from children.</li>
        </ul>
        <table class="privacy-table">
          <thead><tr><th scope="col">App</th><th scope="col">Internet</th><th scope="col">Stored on your device</th><th scope="col">Notes</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
        <p>If this policy changes, the new version is published here with a new effective date.
          Questions about privacy: <a href="mailto:${D.contactEmail}">${D.contactEmail}</a>.</p>
      </div>`;
  }

  function renderCredits() {
    document.getElementById("credits").innerHTML = D.apps.filter((a) => a.credits)
      .map((a) => `<strong>${a.name}</strong>: ${a.credits}`).join(" · ");
  }

  // Highlights the current app in the left menu while scrolling.
  function initScrollSpy() {
    const links = [...document.querySelectorAll(".side-nav a[data-id]")];
    if (!("IntersectionObserver" in window)) return;
    const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => {
        const on = l.dataset.id === e.target.id;
        l.classList.toggle("current", on);
        if (on && window.matchMedia("(max-width: 991.98px)").matches) {
          l.scrollIntoView({ block: "nearest", inline: "center" });
        }
      });
    }), { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll(".app-card").forEach((row) => spy.observe(row));
  }

  function initNavToggle() {
    const toggler = document.querySelector(".navbar-toggler");
    const menu = document.querySelector(".navbar-collapse");
    if (!toggler || !menu) return;
    toggler.addEventListener("click", () => {
      toggler.setAttribute("aria-expanded", String(menu.classList.toggle("show")));
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) { menu.classList.remove("show"); toggler.setAttribute("aria-expanded", "false"); }
    });
  }

  // Old App Store URLs (/<id>/) redirect here as /apps/#<id>. The targets are rendered by
  // JS, so the browser's own jump-to-anchor misses them: scroll once they exist.
  function applyHash() {
    const id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ block: id.startsWith("privacy-") ? "center" : "start" });
    target.classList.remove("flash");
    void target.offsetWidth;
    target.classList.add("flash");
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderSideNav();
    renderCatalogue();
    document.getElementById("coffee").innerHTML = coffeeButton();
    document.getElementById("coffeeMobile").innerHTML = coffeeButton();
    renderFaq();
    renderPrivacy();
    renderCredits();
    initScrollSpy();
    initNavToggle();
    applyHash();
    window.addEventListener("hashchange", applyHash);
  });
})();
