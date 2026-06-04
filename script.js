/* ==========================================
   ELISON — ATELIER AURORE
   script.js  |  Complete All-in-One
   ========================================== */

/* ── BASE URL ── */
const BASE = "https://github.com/abhishektech10/sketch-23/releases/download/image/";

/* ── GALLERY DATA ── */
const galleryItems = [
  { id:1, title:"Lumière",         category:"figurine", year:"2023", image: BASE+"img1.jpg", description:"Hand-painted resin sculpture." },
  { id:2, title:"Concept Studies", category:"sketch",   year:"2022", image: BASE+"img2.jpg", description:"Graphite concept sketches." },
  { id:3, title:"Amber Portrait",  category:"portrait", year:"2021", image: BASE+"img3.jpg", description:"Oil on linen portrait." },
  { id:4, title:"Solstice",        category:"figurine", year:"2023", image: BASE+"img4.jpg", description:"Cast bronze figurine." },
  { id:5, title:"Aether",          category:"concept",  year:"2024", image: BASE+"img5.jpg", description:"Digital concept artwork." },
  { id:6, title:"Nocturne",        category:"portrait", year:"2024", image: BASE+"img6.jpg", description:"Contemporary portrait study." },
  { id:7, title:"Origins",         category:"sketch",   year:"2024", image: BASE+"img7.jpg", description:"Graphite sketch collection." },
  { id:8, title:"Empress",         category:"figurine", year:"2024", image: BASE+"img8.jpg", description:"Limited edition figurine." }
];

/* ── COMICS DATA ── */
const comicPages = [
  { num:1,  title:"City's Edge",       file:"sketch.1.jpg"  },
  { num:2,  title:"Shadow Watch",      file:"sketch.2.jpg"  },
  { num:3,  title:"First Snow",        file:"sketch.3.jpg"  },
  { num:4,  title:"The Guild Gates",   file:"sketch.4.jpg"  },
  { num:5,  title:"Warmth Within",     file:"sketch.5.jpg"  },
  { num:6,  title:"Notice Board",      file:"sketch.6.jpg"  },
  { num:7,  title:"The Stranger",      file:"sketch.7.jpg"  },
  { num:8,  title:"A Deal in Shadows", file:"sketch.8.jpg"  },
  { num:9,  title:"Uneasy Company",    file:"sketch.9.jpg"  },
  { num:10, title:"Street by Night",   file:"sketch.10.jpg" },
  { num:11, title:"Half-truths",       file:"sketch.11.jpg" },
  { num:12, title:"The Turning Point", file:"sketch.12.jpg" },
  { num:13, title:"Broken Trust",      file:"sketch.13.jpg" },
  { num:14, title:"Revelation",        file:"sketch.14.jpg" },
  { num:15, title:"New Alliance",      file:"sketch.15.jpg" }
];

/* ══════════════════════════════════════════
   LOADER
   ══════════════════════════════════════════ */
window.addEventListener("load", () => {
  const fill   = document.querySelector(".loader-fill");
  const loader = document.getElementById("loader");
  if (fill) fill.style.width = "100%";
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 1800);
  }
});

/* ══════════════════════════════════════════
   NAVBAR SCROLL
   ══════════════════════════════════════════ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ══════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════ */
const hamburger     = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose   = document.getElementById("mobileClose");

if (hamburger)   hamburger.addEventListener("click",   () => mobileOverlay.classList.add("open"));
if (mobileClose) mobileClose.addEventListener("click", () => mobileOverlay.classList.remove("open"));

window.closeMobile = function () {
  if (mobileOverlay) mobileOverlay.classList.remove("open");
};

/* ══════════════════════════════════════════
   CUSTOM CURSOR
   ══════════════════════════════════════════ */
const cursorDot  = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");

document.addEventListener("mousemove", (e) => {
  if (cursorDot)  { cursorDot.style.left  = e.clientX + "px"; cursorDot.style.top  = e.clientY + "px"; }
  if (cursorRing) { cursorRing.style.left = e.clientX + "px"; cursorRing.style.top = e.clientY + "px"; }
});

function addCursorHover(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener("mouseenter", () => cursorRing && cursorRing.classList.add("hovered"));
    el.addEventListener("mouseleave", () => cursorRing && cursorRing.classList.remove("hovered"));
  });
}

/* ══════════════════════════════════════════
   HERO IMAGE
   ══════════════════════════════════════════ */
function initHero() {
  const hero = document.querySelector(".portrait-artist");
  if (!hero) return;
  hero.innerHTML = `
    <img src="${galleryItems[0].image}" alt="Artist" class="hero-real-img">
    <div class="portrait-overlay"></div>
  `;
}

/* ══════════════════════════════════════════
   FEATURED IMAGES
   ══════════════════════════════════════════ */
function initFeatured() {
  const f1 = document.getElementById("featured-img-1");
  const f2 = document.getElementById("featured-img-2");
  const f3 = document.getElementById("featured-img-3");
  if (f1) f1.style.backgroundImage = `url('${galleryItems[2].image}')`;
  if (f2) f2.style.backgroundImage = `url('${galleryItems[3].image}')`;
  if (f3) f3.style.backgroundImage = `url('${galleryItems[1].image}')`;
}

/* ══════════════════════════════════════════
   RENDER GALLERY
   ══════════════════════════════════════════ */
function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const items = filter === "all"
    ? galleryItems
    : galleryItems.filter(i => i.category === filter);

  grid.innerHTML = "";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `
      <div class="gallery-item-img">
        <img class="gi-photo" src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="gallery-badge">${item.year}</div>
        <div class="gi-overlay"><span class="overlay-text">View Artwork</span></div>
      </div>
      <div class="gallery-item-body">
        <div class="gallery-cat">${item.category}</div>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.description}</p>
      </div>
    `;
    card.addEventListener("click", () => openLightbox({
      image: item.image,
      title: item.title,
      cat: item.category,
      desc: item.description,
      year: item.year
    }));
    grid.appendChild(card);
  });

  addCursorHover(".gallery-item");
}

/* ══════════════════════════════════════════
   RENDER FIGURINES
   ══════════════════════════════════════════ */
function renderFigurines() {
  const grid = document.getElementById("figurinesGrid");
  if (!grid) return;

  const figurines = galleryItems.filter(i => i.category === "figurine");
  grid.innerHTML = "";

  figurines.forEach(item => {
    const card = document.createElement("div");
    card.className = "figurine-card";
    card.innerHTML = `
      <div class="fc-img">
        <img class="fc-photo" src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="fc-spotlight"></div>
        <div class="fc-badge">${item.year}</div>
      </div>
      <div class="fc-body">
        <div class="fc-cat">Figurine</div>
        <div class="fc-name">${item.title}</div>
        <div class="fc-edition">Limited Collection</div>
      </div>
    `;
    card.addEventListener("click", () => openLightbox({
      image: item.image,
      title: item.title,
      cat: "Figurine",
      desc: item.description,
      year: item.year
    }));
    grid.appendChild(card);
  });

  addCursorHover(".figurine-card");
}

/* ══════════════════════════════════════════
   FILTER TABS
   ══════════════════════════════════════════ */
function initFilters() {
  const filterTabs = document.getElementById("filterTabs");
  if (!filterTabs) return;

  filterTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
}

/* ══════════════════════════════════════════
   RENDER COMICS
   ══════════════════════════════════════════ */
function renderComics() {
  const grid = document.getElementById("comicsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  comicPages.forEach(page => {
    const card = document.createElement("div");
    card.className = "comic-card reveal";
    card.innerHTML = `
      <div class="comic-card-img">
        <img src="${BASE}${page.file}" alt="${page.title}" loading="lazy">
        <div class="comic-overlay">
          <span class="comic-overlay-label">View Page</span>
        </div>
      </div>
      <div class="comic-card-body">
        <div class="comic-page-num">Page ${String(page.num).padStart(2,"0")}</div>
        <div class="comic-page-title">${page.title}</div>
      </div>
    `;
    card.addEventListener("click", () => openLightbox({
      image: BASE + page.file,
      title: page.title,
      cat: "Comics · Fantasy Adventure",
      desc: `Page ${page.num} of The Encounter — a fantasy adventure series following unlikely allies through a city of secrets, shadows, and old wounds.`,
      year: "2024",
      extraTags: [`Page ${String(page.num).padStart(2,"0")}`, "The Encounter"]
    }));
    grid.appendChild(card);
  });

  // Observe newly added reveal elements
  document.querySelectorAll(".comic-card.reveal").forEach(el => revealObserver.observe(el));
  addCursorHover(".comic-card");
}

/* ══════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════ */
function openLightbox({ image, title, cat, desc, year, extraTags = [] }) {
  const lightbox = document.getElementById("lightbox");
  const content  = document.getElementById("lbContent");
  if (!lightbox || !content) return;

  const allTags = [year, ...extraTags].filter(Boolean);
  const tagsHtml = allTags.map(t => `<span class="lb-tag">${t}</span>`).join("");

  content.innerHTML = `
    <div class="lb-img">
      <div class="lb-img-real">
        <img src="${image}" alt="${title}">
      </div>
    </div>
    <div class="lb-body">
      <div class="lb-cat">${cat}</div>
      <h2 class="lb-title">${title}</h2>
      <p class="lb-desc">${desc}</p>
      <div class="lb-tags">${tagsHtml}</div>
    </div>
  `;

  lightbox.classList.add("open");
}

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("open");
};

// Close on backdrop click
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

/* ══════════════════════════════════════════
   REVEAL ON SCROLL
   ══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.08 }
);

function initReveal() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

/* ══════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════ */
window.submitForm = function (button) {
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "✓ Inquiry Received";
  setTimeout(() => {
    button.disabled = false;
    button.textContent = original;
  }, 3000);
};

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  initHero();
  initFeatured();
  renderGallery();
  renderFigurines();
  renderComics();
  initFilters();
  initReveal();

  // Cursor hover on static elements
  addCursorHover("a, button, .featured-card");
});
