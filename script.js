/* ══════════════════════════════════════════
   ATELIER AURORE — script-new.js
   Comics section + theme cursor fix
   ══════════════════════════════════════════ */

/* ---------- COMICS DATA ---------- */

const COMIC_BASE =
  "https://github.com/abhishektech10/sketch-23/releases/download/image/";

const comicPages = [
  { num: 1,  title: "City's Edge",        file: "sketch.1.jpg"  },
  { num: 2,  title: "Shadow Watch",        file: "sketch.2.jpg"  },
  { num: 3,  title: "First Snow",          file: "sketch.3.jpg"  },
  { num: 4,  title: "The Guild Gates",     file: "sketch.4.jpg"  },
  { num: 5,  title: "Warmth Within",       file: "sketch.5.jpg"  },
  { num: 6,  title: "Notice Board",        file: "sketch.6.jpg"  },
  { num: 7,  title: "The Stranger",        file: "sketch.7.jpg"  },
  { num: 8,  title: "A Deal in Shadows",   file: "sketch.8.jpg"  },
  { num: 9,  title: "Uneasy Company",      file: "sketch.9.jpg"  },
  { num: 10, title: "Street by Night",     file: "sketch.10.jpg" },
  { num: 11, title: "Half-truths",         file: "sketch.11.jpg" },
  { num: 12, title: "The Turning Point",   file: "sketch.12.jpg" },
  { num: 13, title: "Broken Trust",        file: "sketch.13.jpg" },
  { num: 14, title: "Revelation",          file: "sketch.14.jpg" },
  { num: 15, title: "New Alliance",        file: "sketch.15.jpg" },
];

/* ---------- RENDER COMICS ---------- */

function renderComics() {
  const grid = document.getElementById("comicsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  comicPages.forEach(page => {
    const card = document.createElement("div");
    card.className = "comic-card reveal";

    card.innerHTML = `
      <div class="comic-card-img">
        <img
          src="${COMIC_BASE}${page.file}"
          alt="${page.title}"
          loading="lazy"
        >
        <div class="comic-overlay">
          <span class="comic-overlay-label">View Page</span>
        </div>
      </div>
      <div class="comic-card-body">
        <div class="comic-page-num">Page ${String(page.num).padStart(2, "0")}</div>
        <div class="comic-page-title">${page.title}</div>
      </div>
    `;

    card.addEventListener("click", () => {
      openComicLightbox(page);
    });

    grid.appendChild(card);
  });

  // Re-observe new reveal elements added to DOM
  document.querySelectorAll(".comic-card.reveal").forEach(el => {
    revealObserver.observe(el);
  });
}

/* ---------- COMIC LIGHTBOX ---------- */

function openComicLightbox(page) {
  const lightbox = document.getElementById("lightbox");
  const content  = document.getElementById("lbContent");
  if (!lightbox || !content) return;

  content.innerHTML = `
    <div class="lb-img">
      <div class="lb-img-real">
        <img src="${COMIC_BASE}${page.file}" alt="${page.title}">
      </div>
    </div>
    <div class="lb-body">
      <div class="lb-cat">Comics · Fantasy Adventure</div>
      <h2 class="lb-title">${page.title}</h2>
      <p class="lb-desc">Page ${page.num} of The Encounter series — a fantasy adventure story following unlikely allies through a city of secrets, shadows, and old wounds.</p>
      <div class="lb-tags">
        <span class="lb-tag">Page ${String(page.num).padStart(2, "0")}</span>
        <span class="lb-tag">The Encounter</span>
        <span class="lb-tag">2024</span>
      </div>
    </div>
  `;

  lightbox.classList.add("open");
}

/* ---------- CURSOR FIX FOR LIGHT THEME ---------- */
// Re-wire cursor for white background theme
(function() {
  const dot  = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");

  if (!dot || !ring) return;

  document.addEventListener("mousemove", e => {
    dot.style.left  = e.clientX + "px";
    dot.style.top   = e.clientY + "px";
    ring.style.left = e.clientX + "px";
    ring.style.top  = e.clientY + "px";
  });

  document.querySelectorAll("a, button, .gallery-item, .figurine-card, .comic-card").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("hovered"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hovered"));
  });
})();

/* ---------- LOADER BAR FIX ---------- */
// Trigger fill animation immediately
window.addEventListener("DOMContentLoaded", () => {
  const fill = document.querySelector(".loader-fill");
  if (fill) {
    requestAnimationFrame(() => {
      fill.style.width = "100%";
    });
  }
});

/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderComics();
});
