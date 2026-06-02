/* ==========================================
ATELIER AURORE - script.js
Clean Working Version
========================================== */

/* ---------- IMAGE DATA ---------- */

const BASE =
"https://github.com/abhishektech10/sketch-23/releases/download/image/";

const galleryItems = [
{
id: 1,
title: "Lumière",
category: "figurine",
year: "2023",
image: BASE + "img1.jpg",
description: "Hand-painted resin sculpture."
},
{
id: 2,
title: "Concept Studies",
category: "sketch",
year: "2022",
image: BASE + "img2.jpg",
description: "Graphite concept sketches."
},
{
id: 3,
title: "Amber Portrait",
category: "portrait",
year: "2021",
image: BASE + "img3.jpg",
description: "Oil on linen portrait."
},
{
id: 4,
title: "Solstice",
category: "figurine",
year: "2023",
image: BASE + "img4.jpg",
description: "Cast bronze figurine."
}
];

/* ---------- LOADER ---------- */

window.addEventListener("load", () => {
const loader = document.getElementById("loader");

if (loader) {
setTimeout(() => {
loader.classList.add("hidden");
}, 1000);
}
});

/* ---------- NAVBAR ---------- */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
if (!navbar) return;

if (window.scrollY > 50) {
navbar.classList.add("scrolled");
} else {
navbar.classList.remove("scrolled");
}
});

/* ---------- MOBILE MENU ---------- */

const hamburger = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");

if (hamburger && mobileOverlay) {
hamburger.addEventListener("click", () => {
mobileOverlay.classList.add("open");
});
}

if (mobileClose && mobileOverlay) {
mobileClose.addEventListener("click", () => {
mobileOverlay.classList.remove("open");
});
}

/* ---------- GALLERY ---------- */

function renderGallery(filter = "all") {
const grid = document.getElementById("galleryGrid");

if (!grid) return;

const filtered =
filter === "all"
? galleryItems
: galleryItems.filter(item => item.category === filter);

grid.innerHTML = "";

filtered.forEach(item => {
const card = document.createElement("div");

```
card.className = "gallery-item";

card.innerHTML = `
  <div class="gallery-image">
    <img src="${item.image}" alt="${item.title}">
  </div>

  <div class="gallery-content">
    <span>${item.year}</span>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
  </div>
`;

card.addEventListener("click", () => {
  openLightbox(item);
});

grid.appendChild(card);
```

});
}

/* ---------- FILTER BUTTONS ---------- */

const filterContainer = document.getElementById("filterTabs");

if (filterContainer) {
filterContainer.addEventListener("click", e => {
const button = e.target.closest(".filter-btn");

```
if (!button) return;

document
  .querySelectorAll(".filter-btn")
  .forEach(btn => btn.classList.remove("active"));

button.classList.add("active");

renderGallery(button.dataset.filter);
```

});
}

/* ---------- LIGHTBOX ---------- */

function openLightbox(item) {
const lightbox = document.getElementById("lightbox");
const content = document.getElementById("lbContent");

if (!lightbox || !content) return;

content.innerHTML = ` <img
   src="${item.image}"
   alt="${item.title}"
   style="width:100%;border-radius:12px;"
 >

```
<h2>${item.title}</h2>

<p>${item.description}</p>

<small>${item.year}</small>
```

`;

lightbox.classList.add("open");
}

function closeLightbox() {
const lightbox = document.getElementById("lightbox");

if (lightbox) {
lightbox.classList.remove("open");
}
}

const lightbox = document.getElementById("lightbox");

if (lightbox) {
lightbox.addEventListener("click", e => {
if (e.target === lightbox) {
closeLightbox();
}
});
}

document.addEventListener("keydown", e => {
if (e.key === "Escape") {
closeLightbox();
}
});

/* ---------- REVEAL ANIMATION ---------- */

const revealObserver = new IntersectionObserver(
entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add("visible");
}
});
},
{
threshold: 0.1
}
);

function initReveal() {
document.querySelectorAll(".reveal").forEach(el => {
revealObserver.observe(el);
});
}

/* ---------- SMOOTH SCROLL ---------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener("click", e => {
const target = document.querySelector(
link.getAttribute("href")
);

```
if (!target) return;

e.preventDefault();

target.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
```

});
});

/* ---------- CONTACT FORM ---------- */

window.submitForm = function (button) {
if (!button) return;

const originalText = button.textContent;

button.disabled = true;
button.textContent = "✓ Inquiry Received";

setTimeout(() => {
button.disabled = false;
button.textContent = originalText;
}, 3000);
};

/* ---------- START ---------- */

document.addEventListener("DOMContentLoaded", () => {
renderGallery();
initReveal();
});
