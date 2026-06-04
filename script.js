/* ==========================================
   ATELIER AURORE - script.js
========================================== */

/* ---------- IMAGE DATA ---------- */

const BASE =
  "https://github.com/abhishektech10/sketch-23/releases/download/image/";

const galleryItems = [
  { id:1, title:"Lumière",        category:"figurine", year:"2023", image:BASE+"img1.jpg", description:"Hand-painted resin sculpture." },
  { id:2, title:"Concept Studies",category:"sketch",   year:"2022", image:BASE+"img2.jpg", description:"Graphite concept sketches." },
  { id:3, title:"Amber Portrait", category:"portrait", year:"2021", image:BASE+"img3.jpg", description:"Oil on linen portrait." },
  { id:4, title:"Solstice",       category:"figurine", year:"2023", image:BASE+"img4.jpg", description:"Cast bronze figurine." },
  { id:5, title:"Aether",         category:"concept",  year:"2024", image:BASE+"img5.jpg", description:"Digital concept artwork." },
  { id:6, title:"Nocturne",       category:"portrait", year:"2024", image:BASE+"img6.jpg", description:"Contemporary portrait study." },
  { id:7, title:"Origins",        category:"sketch",   year:"2024", image:BASE+"img7.jpg", description:"Graphite sketch collection." },
  { id:8, title:"Empress",        category:"figurine", year:"2024", image:BASE+"img8.jpg", description:"Limited edition figurine." }
];

/* ---------- LOADER ---------- */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) setTimeout(() => { loader.classList.add("hidden"); }, 1000);
});

/* ---------- NAVBAR ---------- */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (!navbar) return;
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/* ---------- MOBILE MENU ---------- */
const hamburger     = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose   = document.getElementById("mobileClose");

if (hamburger && mobileOverlay) {
  hamburger.addEventListener("click", () => mobileOverlay.classList.add("open"));
}
if (mobileClose && mobileOverlay) {
  mobileClose.addEventListener("click", () => mobileOverlay.classList.remove("open"));
}
window.closeMobile = function() {
  if (mobileOverlay) mobileOverlay.classList.remove("open");
};

/* ---------- HERO IMAGE ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".portrait-artist");
  if (hero) {
    hero.innerHTML = `
      <img src="${galleryItems[0].image}" alt="Artist" class="hero-real-img">
      <div class="portrait-overlay"></div>
    `;
  }
});

/* ---------- FEATURED IMAGES ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const f1 = document.getElementById("featured-img-1");
  const f2 = document.getElementById("featured-img-2");
  const f3 = document.getElementById("featured-img-3");
  if (f1) f1.style.backgroundImage = `url('${galleryItems[2].image}')`;
  if (f2) f2.style.backgroundImage = `url('${galleryItems[3].image}')`;
  if (f3) f3.style.backgroundImage = `url('${galleryItems[1].image}')`;
});

/* ---------- GALLERY ---------- */
function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const filtered = filter === "all" ? galleryItems : galleryItems.filter(i => i.category === filter);
  grid.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-item";
    card.innerHTML = `
      <div class="gallery-item-img">
        <img class="gi-photo" src="${item.image}" alt="${item.title}">
        <div class="gallery-badge">${item.year}</div>
        <div class="gi-overlay"><span class="overlay-text">View Artwork</span></div>
      </div>
      <div class="gallery-item-body">
        <div class="gallery-cat">${item.category}</div>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.description}</p>
      </div>
    `;
    card.addEventListener("click", () => openLightbox(item));
    grid.appendChild(card);
  });
}

/* ---------- FIGURINES ---------- */
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
        <img class="fc-photo" src="${item.image}" alt="${item.title}">
        <div class="fc-spotlight"></div>
        <div class="fc-badge">${item.year}</div>
      </div>
      <div class="fc-body">
        <div class="fc-cat">Figurine</div>
        <div class="fc-name">${item.title}</div>
        <div class="fc-edition">Limited Collection</div>
      </div>
    `;
    card.addEventListener("click", () => openLightbox(item));
    grid.appendChild(card);
  });
}

/* ---------- FILTERS ---------- */
const filterTabs = document.getElementById("filterTabs");
if (filterTabs) {
  filterTabs.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.filter);
  });
}

/* ---------- LIGHTBOX ---------- */
function openLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  const content  = document.getElementById("lbContent");
  if (!lightbox || !content) return;

  content.innerHTML = `
    <div class="lb-img">
      <div class="lb-img-real"><img src="${item.image}" alt="${item.title}"></div>
    </div>
    <div class="lb-body">
      <div class="lb-cat">${item.category}</div>
      <h2 class="lb-title">${item.title}</h2>
      <p class="lb-desc">${item.description}</p>
      <div class="lb-tags"><span class="lb-tag">${item.year}</span></div>
    </div>
  `;

  lightbox.classList.add("open");
}

window.closeLightbox = function() {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) lightbox.classList.remove("open");
};

const lightbox = document.getElementById("lightbox");
if (lightbox) {
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
}
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

/* ---------- REVEAL ---------- */
const revealObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  }),
  { threshold: 0.1 }
);

function initReveal() {
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

/* ---------- FORM ---------- */
window.submitForm = function(button) {
  const original = button.textContent;
  button.disabled = true;
  button.textContent = "✓ Inquiry Received";
  setTimeout(() => { button.disabled = false; button.textContent = original; }, 3000);
};

/* ---------- START ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  renderFigurines();
  initReveal();
});
