/* ============================================================================
   MAIN.JS  —  builds the page from js/content.js and adds the interactions.

   You normally do not need to edit this file. To change text, edit
   js/content.js. To change colours, edit the top of css/style.css.

   CONTENTS
     0. Safety net (message if content.js has a typo)
     1. Small helpers and icons
     2. Building each section
     3. Interactions: theme switch, magnetic buttons, project filter,
        switching between pages
   ========================================================================= */

(function () {
  "use strict";

  /* ---------- 0. Safety net ------------------------------------------------ */

  if (typeof CONTENT === "undefined") {
    var box = document.createElement("div");
    box.className = "content-error";
    box.innerHTML =
      "<strong>The page content could not be loaded.</strong><br>" +
      "There is probably a typo in <code>js/content.js</code> (a missing comma, quote or bracket). " +
      "Press F12 and open the <em>Console</em> tab to see the line number.";
    document.querySelector("main").prepend(box);
    return;
  }

  const C = CONTENT;

  /* ---------- 1. Helpers ---------------------------------------------------- */

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasMouse = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Creates an HTML element.  h("p", { class: "x", text: "Hello" }, child, child) */
  function h(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs || {})) {
      if (value === null || value === undefined || value === false) continue;
      if (key === "class") node.className = value;
      else if (key === "text") node.textContent = value;
      else node.setAttribute(key, value === true ? "" : value);
    }
    for (const child of children.flat(Infinity)) {
      if (child === null || child === undefined || child === false) continue;
      node.append(child);
    }
    return node;
  }

  const ICONS = {
    arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    arrowLeft: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    external: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
    chevron: '<polyline points="6 9 12 15 18 9"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="16" y2="17"/>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    sun: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  };

  function icon(name, extraClass) {
    const span = h("span", { class: "icon" + (extraClass ? " " + extraClass : ""), "aria-hidden": "true" });
    span.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
      ICONS[name] + "</svg>";
    return span;
  }

  /* Picks a fitting icon for a link from its label and address. */
  function iconNameFor(link) {
    const label = link.label.toLowerCase();
    const url = link.url.toLowerCase();
    if (url.startsWith("mailto:")) return "mail";
    if (url.includes("github.com")) return "github";
    if (url.includes("linkedin.com")) return "linkedin";
    if (url.endsWith(".pdf") || label === "cv") return "file";
    if (label.includes("publication") || label.includes("paper")) return "book";
    return "external";
  }

  function linkButton(link, extraClass) {
    const isWeb = /^https?:/i.test(link.url);
    return h("a", {
      class: "btn" + (extraClass ? " " + extraClass : ""),
      href: link.url,
      target: isWeb ? "_blank" : null,
      rel: isWeb ? "noopener noreferrer" : null,
      "data-magnetic": "0.2",
    }, icon(iconNameFor(link)), h("span", { text: link.label }));
  }

  function pointList(points) {
    if (!points || !points.length) return null;
    return h("ul", { class: "points" }, points.map((text) => h("li", { text })));
  }

  function tagList(tags) {
    if (!tags || !tags.length) return null;
    return h("ul", { class: "tags", "aria-label": "Technologies" }, tags.map((text) => h("li", { class: "tag", text })));
  }

  function countLabel(list, word) {
    const n = (list || []).length;
    return n + " " + word + (n === 1 ? "" : "s");
  }

  /* Email, CV and profile links — used in the introduction and in Contact. */
  function profileLinks() {
    const p = C.profile;
    const links = [];
    if (p.email) links.push({ label: "Email", url: "mailto:" + p.email });
    (p.links || []).forEach((link) => links.push(link));
    if (p.cv) links.push({ label: "CV", url: p.cv });
    return links;
  }

  /* ---------- 2. Building each section -------------------------------------- */

  function renderHero() {
    const p = C.profile;

    // The big buttons on the home page are copies of the nav links.
    const smallText = {
      about: "Background",
      experience: countLabel(C.experience, "role"),
      projects: countLabel(C.projects, "project"),
      skills: "Tools & languages",
      contact: "Say hello",
    };
    const jumps = $$(".nav__link").map((navLink) => {
      const id = navLink.getAttribute("href").slice(1);
      const number = $("#" + id + " .section__num");
      return h("a", { class: "jump", href: "#" + id, "data-magnetic": "0.12" },
        h("span", { class: "jump__num", text: number ? number.textContent : "" }),
        icon("arrowRight", "jump__arrow"),
        h("span", { class: "jump__label", text: navLink.textContent.trim() }),
        h("span", { class: "jump__meta", text: smallText[id] || "" }));
    });

    const photo = p.photo
      ? h("img", { class: "badge__photo", src: p.photo, alt: "Portrait of " + p.name, width: "128", height: "128" })
      : h("div", { class: "badge__photo badge__photo--initials", text: p.initials, "aria-hidden": "true" });

    $("#top").append(
      h("div", { class: "hero__text" },
        h("p", { class: "eyebrow enter", style: "--i:0" },
          h("span", { text: p.role }),
          p.location ? h("span", { class: "eyebrow__sep", text: "//", "aria-hidden": "true" }) : null,
          p.location ? h("span", { class: "eyebrow__place", text: p.location }) : null),
        h("h1", { class: "hero__name enter", style: "--i:1", text: p.name }),
        h("p", { class: "hero__headline enter", style: "--i:2", text: p.headline }),
        p.intro ? h("p", { class: "hero__intro enter", style: "--i:3", text: p.intro }) : null,
        h("div", { class: "hero__links enter", style: "--i:4" }, profileLinks().map((link) => linkButton(link, "btn--small")))),

      h("aside", { class: "badge enter", style: "--i:3", "aria-label": "Quick facts" },
        h("div", { class: "badge__top" },
          h("div", { class: "badge__frame" }, photo),
          h("div", {},
            h("p", { class: "badge__name", text: p.name }),
            h("p", { class: "badge__role", text: p.role }),
            p.availability ? h("p", { class: "status", text: p.availability }) : null)),
        h("dl", { class: "facts" }, (p.facts || []).map((fact) =>
          h("div", { class: "facts__row" }, h("dt", { text: fact.label }), h("dd", { text: fact.value }))))),

      h("nav", { class: "hero__jumps enter", style: "--i:5", "aria-label": "Pages" }, jumps)
    );

    $("#brand-mark").textContent = p.initials;
    document.title = p.name + " — " + p.role;
  }

  function renderAbout() {
    $("#about-body").append(
      h("div", { class: "about__text" },
        C.about.paragraphs.map((text, i) => h("p", { class: i === 0 ? "lead" : null, text }))),
      h("div", { class: "about__edu" },
        h("h3", { class: "label", text: "Education" }),
        h("ol", { class: "edu" }, C.education.map((e) =>
          h("li", { class: "edu__item" },
            h("p", { class: "edu__when", text: e.period }),
            h("h4", { class: "edu__degree", text: e.degree }),
            h("p", { class: "edu__school", text: [e.school, e.location].filter(Boolean).join(" · ") }),
            pointList(e.notes)))))
    );
  }

  function renderExperience() {
    $("#experience-body").append(
      h("ol", { class: "timeline" }, C.experience.map((job) =>
        h("li", { class: "entry" },
          h("p", { class: "entry__when", text: job.period }),
          h("div", { class: "entry__body" },
            h("h3", { class: "entry__role", text: job.role }),
            h("p", { class: "entry__org" },
              h("strong", { text: job.company }),
              job.location ? " · " + job.location : null),
            pointList(job.points),
            tagList(job.tags)))))
    );
  }

  function projectCard(p) {
    const hasPoints = p.points && p.points.length;
    let details = null;
    if (hasPoints && p.featured) {
      details = h("div", { class: "project__points" },
        h("p", { class: "label", text: "What I did" }),
        pointList(p.points));
    } else if (hasPoints) {
      details = h("details", { class: "project__details" },
        h("summary", {}, h("span", { text: "What I did" }), icon("chevron")),
        pointList(p.points));
    }

    const hasLinks = p.links && p.links.length;
    const hasTags = p.tags && p.tags.length;

    return h("article", {
      class: "project" + (p.featured ? " project--featured" : ""),
      "data-category": p.category || "",
      "data-spotlight": true,
    },
      p.image ? h("img", { class: "project__image", src: p.image, alt: "", loading: "lazy" }) : null,
      h("div", { class: "project__main" },
        h("p", { class: "project__top" },
          h("span", { class: "project__category", text: p.category || "" }),
          h("span", { class: "project__date", text: p.period || "" })),
        h("h3", { class: "project__title", text: p.title }),
        p.context ? h("p", { class: "project__context", text: p.context }) : null,
        h("p", { class: "project__summary", text: p.summary })),
      details,
      hasTags || hasLinks
        ? h("div", { class: "project__foot" },
            tagList(p.tags),
            hasLinks ? h("div", { class: "project__links" }, p.links.map((link) => linkButton(link, "btn--small"))) : null)
        : null);
  }

  function renderProjects() {
    const body = $("#projects-body");
    const categories = Array.from(new Set(C.projects.map((p) => p.category).filter(Boolean)));

    // Filter buttons are only useful when there is more than one category.
    if (categories.length > 1) {
      const names = ["All"].concat(categories);
      body.append(h("div", { class: "filters", role: "group", "aria-label": "Filter projects by category" },
        names.map((name, i) => {
          const count = i === 0 ? C.projects.length : C.projects.filter((p) => p.category === name).length;
          return h("button", {
            class: "filter", type: "button",
            "data-filter": i === 0 ? "*" : name,
            "aria-pressed": i === 0 ? "true" : "false",
            "data-magnetic": "0.2",
          }, name, h("span", { class: "filter__count", text: String(count) }));
        })));
    }

    body.append(h("div", { class: "projects" }, C.projects.map(projectCard)));
  }

  function renderSkills() {
    $("#skills-body").append(...C.skills.map((group) =>
      h("div", { class: "skill-group" },
        h("h3", { class: "label", text: group.group }),
        h("ul", { class: "chips" }, group.items.map((text) => h("li", { class: "chip", text }))))));
  }

  function renderContact() {
    const p = C.profile;
    const buttons = profileLinks().map((link, i) => linkButton(link, i === 0 ? "btn--primary" : ""));
    // The first button shows the address itself, so it can be read and copied.
    if (p.email && buttons.length) $("span:last-child", buttons[0]).textContent = p.email;

    $("#contact-body").append(
      h("div", { class: "contact" },
        h("div", {},
          h("h3", { class: "contact__title", text: C.contact.title }),
          h("p", { class: "contact__text", text: C.contact.text }),
          p.location ? h("p", { class: "contact__place" }, icon("pin"), h("span", { text: p.location })) : null),
        h("div", { class: "contact__actions" }, buttons)));
  }

  function renderFooter() {
    $("#footer-copy").textContent = "© " + new Date().getFullYear() + " " + C.profile.name;
  }

  /* "Previous / next" buttons at the bottom of each page, in nav order. */
  function renderPagers() {
    const stops = [{ href: "#top", label: "Home" }].concat(
      $$(".nav__link").map((link) => ({ href: link.getAttribute("href"), label: link.textContent.trim() })));

    stops.forEach((stop, i) => {
      if (i === 0) return;
      const page = $(stop.href);
      if (!page) return;
      const previous = stops[i - 1];
      const next = stops[i + 1];
      page.append(h("nav", { class: "pager", "aria-label": "Previous and next page" },
        h("a", { class: "btn", href: previous.href, "data-magnetic": "0.2" },
          icon("arrowLeft"), h("span", { text: previous.label })),
        next
          ? h("a", { class: "btn", href: next.href, "data-magnetic": "0.2" },
              h("span", { text: next.label }), icon("arrowRight"))
          : null));
    });
  }

  /* ---------- 3. Interactions ------------------------------------------------ */

  /* Dark / light switch. The choice is remembered in the browser. */
  function initTheme() {
    const button = $("#theme-toggle");
    const root = document.documentElement;
    button.append(icon("sun", "icon--sun"), icon("moon", "icon--moon"));

    function describe() {
      const isDark = root.getAttribute("data-theme") !== "light";
      button.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
      button.setAttribute("title", isDark ? "Light theme" : "Dark theme");
    }
    describe();

    button.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) { /* private mode: not remembered */ }
      describe();
    });
  }

  /* Magnetic buttons: anything with data-magnetic="0.2" leans towards the
     mouse. The number is the strength — 0.1 is subtle, 0.4 is strong. */
  function initMagnetic() {
    if (!hasMouse || prefersReducedMotion) return;

    $$("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic) || 0.2;

      el.addEventListener("pointermove", (event) => {
        // Find the button's resting centre (its position without the shift).
        const box = el.getBoundingClientRect();
        const shift = new DOMMatrixReadOnly(getComputedStyle(el).transform);
        const centreX = box.left + box.width / 2 - shift.m41;
        const centreY = box.top + box.height / 2 - shift.m42;

        el.classList.add("is-tracking");
        el.style.setProperty("--mx", ((event.clientX - centreX) * strength).toFixed(1) + "px");
        el.style.setProperty("--my", ((event.clientY - centreY) * strength).toFixed(1) + "px");
      });

      el.addEventListener("pointerleave", () => {
        el.classList.remove("is-tracking");
        el.style.setProperty("--mx", "0px");
        el.style.setProperty("--my", "0px");
      });
    });
  }

  /* The soft light that follows the mouse inside buttons and project cards. */
  function initSpotlight() {
    if (!hasMouse) return;
    $$(".btn, .jump, [data-spotlight]").forEach((el) => {
      el.addEventListener("pointermove", (event) => {
        const box = el.getBoundingClientRect();
        el.style.setProperty("--gx", (event.clientX - box.left).toFixed(0) + "px");
        el.style.setProperty("--gy", (event.clientY - box.top).toFixed(0) + "px");
      });
    });
  }

  /* Project filter buttons. */
  function initFilters() {
    const filters = $(".filters");
    if (!filters) return;
    const cards = $$(".project");

    filters.addEventListener("click", (event) => {
      const button = event.target.closest(".filter");
      if (!button) return;
      const wanted = button.dataset.filter;

      $$(".filter", filters).forEach((b) => b.setAttribute("aria-pressed", b === button ? "true" : "false"));

      cards.forEach((card) => {
        const show = wanted === "*" || card.dataset.category === wanted;
        card.hidden = !show;
        card.classList.remove("is-entering");
        if (show) {
          void card.offsetWidth;               // restarts the little entrance animation
          card.classList.add("is-entering");
        }
      });
    });
  }

  /* Pages. The site is one file, but only one page is shown at a time:
     the home page, or the page named in the address (index.html#projects).
     Clicking a nav button changes the address, and this shows the right page.
     The browser's Back button works as usual. */
  function initPages() {
    const header = $("#site-header");
    const nav = $("#nav");
    const links = $$(".nav__link", nav);
    const home = $("#top");
    const pages = [home].concat($$("main > .section"));
    const homeTitle = document.title;

    function show() {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const page = pages.find((p) => p.id === id) || home;

      pages.forEach((p) => {
        p.hidden = p !== page;
        p.classList.remove("is-entering");
      });
      void page.offsetWidth;                   // restarts the entrance animation
      page.classList.add("is-entering");

      links.forEach((link) => {
        const active = link.getAttribute("href") === "#" + page.id;
        link.classList.toggle("is-active", active);
        if (active) {
          link.setAttribute("aria-current", "page");
          // On phones the nav scrolls sideways: keep the active button in view.
          if (nav.scrollWidth > nav.clientWidth) {
            nav.scrollTo({ left: link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }
        } else {
          link.removeAttribute("aria-current");
        }
      });

      const heading = $(".section__title", page);
      document.title = heading ? heading.textContent + " — " + C.profile.name : homeTitle;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }

    window.addEventListener("hashchange", show);
    show();

    // A thin line appears under the top bar once you scroll down.
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- Start ---------------------------------------------------------- */

  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();
  renderPagers();

  initTheme();
  initMagnetic();
  initSpotlight();
  initFilters();
  initPages();
})();
