/* ==========================================
ATELIER AURORE - script.js
========================================== */

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

window.closeMobile = function () {
  if (mobileOverlay) {
    mobileOverlay.classList.remove("open");
  }
};

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

    card.className = "gallery-item";

    card.innerHTML = `
      <div class="gallery-item-img">
        <img class="gi-photo" src="${item.image}" alt="${item.title}">
        <div class="gi-overlay">
          <span class="overlay-text">View Work</span>
        </div>
      </div>

      <div class="gallery-item-body">
        <div class="gallery-cat">${item.category}</div>
        <h3 class="gallery-title">${item.title}</h3>
        <p class="gallery-desc">${item.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openLightbox(item);
    });

    grid.appendChild(card);
  });
}

/* ---------- FILTERS ---------- */

const filterTabs = document.getElementById("filterTabs");

if (filterTabs) {
  filterTabs.addEventListener("click", e => {
    const btn = e.target.closest(".filter-btn");

    if (!btn) return;

    document.querySelectorAll(".filter-btn").forEach(button => {
      button.classList.remove("active");
    });

    btn.classList.add("active");

    renderGallery(btn.dataset.filter);
  });
}

/* ---------- LIGHTBOX ---------- */

function openLightbox(item) {
  const lightbox = document.getElementById("lightbox");
  const content = document.getElementById("lbContent");

  if (!lightbox || !content) return;

  content.innerHTML = `
    <div class="lb-img">
      <div class="lb-img-real">
        <img src="${item.image}" alt="${item.title}">
      </div>
    </div>

    <div class="lb-body">
      <div class="lb-cat">${item.category}</div>
      <h2 class="lb-title">${item.title}</h2>
      <p class="lb-desc">${item.description}</p>

      <div class="lb-tags">
        <span class="lb-tag">${item.year}</span>
      </div>
    </div>
  `;

  lightbox.classList.add("open");
}

window.closeLightbox = function () {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.classList.remove("open");
  }
};

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

/* ---------- REVEAL ---------- */

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

/* ---------- FORM ---------- */

window.submitForm = function (button) {
  const original = button.textContent;

  button.disabled = true;
  button.textContent = "✓ Inquiry Received";

  setTimeout(() => {
    button.disabled = false;
    button.textContent = original;
  }, 3000);
};

/* ---------- START ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderGallery();
  initReveal();
});