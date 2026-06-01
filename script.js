/* ══════════════════════════════════════════
   ATELIER AURORE — script.js
   ══════════════════════════════════════════ */

/* ── GALLERY DATA ── */
const galleryItems = [
  {
    id: 1, cat: 'figurine', label: 'Figurine',
    emoji: '🎨', title: 'Lumière', year: '2023',
    desc: 'Hand-painted resin sculpture with gold-leaf detailing. 34cm standing figure capturing ethereal grace.',
    tags: ['Resin', 'Gold Leaf', 'Original'], featured: true,
    bg: 'linear-gradient(145deg,#fff8ee,#ffe8c8)', height: 'tall',
  },
  {
    id: 2, cat: 'sketch', label: 'Sketch',
    emoji: '✏️', title: 'Concept Studies — Series IV', year: '2022',
    desc: 'Graphite sketches exploring proportion and dynamic gesture in figurine design.',
    tags: ['Graphite', 'A3', 'Studies'], featured: false,
    bg: 'linear-gradient(145deg,#f8f4ec,#ede8de)', height: 'medium',
  },
  {
    id: 3, cat: 'portrait', label: 'Portrait',
    emoji: '🖼️', title: 'Self Portrait in Amber', year: '2021',
    desc: 'Oil on linen, 60×80cm. A meditative self-examination in warm amber light.',
    tags: ['Oil', 'Linen', 'Original'], featured: false,
    bg: 'linear-gradient(145deg,#fff4e0,#ffdea0)', height: 'tall',
  },
  {
    id: 4, cat: 'figurine', label: 'Figurine',
    emoji: '⚱️', title: 'Solstice', year: '2023',
    desc: 'Limited edition piece from the Celestial Bodies series. Cast bronze with oxidized patina.',
    tags: ['Bronze', 'Patina', 'Limited'], featured: true,
    bg: 'linear-gradient(145deg,#fde8d8,#fac8a0)', height: 'medium',
  },
  {
    id: 5, cat: 'concept', label: 'Concept Art',
    emoji: '🌸', title: 'The Empress — Draft Sequence', year: '2024',
    desc: 'Digital concept art exploring twelve variations of the crown, posture, and robes for the Empress commission.',
    tags: ['Digital', 'Process', 'Series'], featured: false,
    bg: 'linear-gradient(145deg,#fef0e8,#fdd8c0)', height: 'short',
  },
  {
    id: 6, cat: 'sketch', label: 'Sketch',
    emoji: '📐', title: 'Anatomy Studies', year: '2020',
    desc: 'Technical sketches exploring skeletal proportion as the architectural foundation for figurine work.',
    tags: ['Graphite', 'Technical', 'A2'], featured: false,
    bg: 'linear-gradient(145deg,#f5f0e8,#e8e0d0)', height: 'medium',
  },
  {
    id: 7, cat: 'figurine', label: 'Figurine',
    emoji: '🌙', title: 'Vesper', year: '2022',
    desc: 'Dusk-toned resin figure with hand-applied translucent glaze. Wing elements micro-sculpted.',
    tags: ['Resin', 'Glaze', 'Ed. 30'], featured: false,
    bg: 'linear-gradient(145deg,#fce8d8,#f8c8a8)', height: 'tall',
  },
  {
    id: 8, cat: 'portrait', label: 'Portrait',
    emoji: '🖌️', title: 'Study of Light, New York', year: '2019',
    desc: 'Charcoal on archival paper. Exploring the relationship between natural light and human form.',
    tags: ['Charcoal', 'A1', 'Original'], featured: false,
    bg: 'linear-gradient(145deg,#f0ede5,#e0dace)', height: 'short',
  },
  {
    id: 9, cat: 'concept', label: 'Concept Art',
    emoji: '🎭', title: 'The Trinity — Conceptual Phase', year: '2021',
    desc: 'Initial concept explorations for the three-piece Trinity Collection, establishing character and emotional register.',
    tags: ['Mixed Media', 'Series', 'Process'], featured: true,
    bg: 'linear-gradient(145deg,#fff0e4,#ffd8b0)', height: 'medium',
  },
];

/* ── FIGURINE CARDS DATA ── */
const figurineCards = [
  { name: 'Aurora', edition: 'Ed. 01/50', year: '2022', material: 'Resin & Enamel', emoji: '🌟', bg: 'linear-gradient(145deg,#fff8ee,#ffe0b0)', badge: 'Bestseller' },
  { name: 'Lumière', edition: 'Ed. 02/12', year: '2023', material: 'Resin & Gold Leaf', emoji: '✨', bg: 'linear-gradient(145deg,#fff4e0,#ffc880)', badge: 'Limited' },
  { name: 'Solstice', edition: 'Ed. 03/25', year: '2023', material: 'Cast Bronze', emoji: '🌙', bg: 'linear-gradient(145deg,#fce8d8,#f8c0a0)', badge: null },
  { name: 'Empress', edition: 'Unique', year: '2024', material: 'Resin & Gold', emoji: '👑', bg: 'linear-gradient(145deg,#fffae0,#ffd060)', badge: 'Masterpiece' },
  { name: 'Vesper', edition: 'Ed. 07/30', year: '2022', material: 'Resin & Glaze', emoji: '🌸', bg: 'linear-gradient(145deg,#fde8d8,#fab890)', badge: null },
  { name: 'Sage', edition: 'Ed. 02/40', year: '2021', material: 'Painted Resin', emoji: '📚', bg: 'linear-gradient(145deg,#fff0e4,#ffd0a0)', badge: null },
  { name: 'Zephyr', edition: 'Ed. 01/20', year: '2024', material: 'Bronze & Enamel', emoji: '💨', bg: 'linear-gradient(145deg,#fce8d8,#f8c090)', badge: 'New' },
  { name: 'Solara', edition: 'Ed. 04/15', year: '2023', material: 'Hand-Fired Clay', emoji: '🌅', bg: 'linear-gradient(145deg,#fff4e0,#ffc870)', badge: null },
];

/* ══════════════════════════════════════════
   LOADER
   ══════════════════════════════════════════ */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const fill   = document.querySelector('.loader-fill');

  fill.style.width = '100%';
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    triggerReveal();
  }, 2600);
});

document.body.style.overflow = 'hidden';

/* ══════════════════════════════════════════
   CUSTOM CURSOR
   ══════════════════════════════════════════ */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .filter-btn, .gallery-item, .figurine-card, .glass-case, .project-card, .spotlight-card, .award-card, input, textarea, select').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

/* ══════════════════════════════════════════
   NAVIGATION
   ══════════════════════════════════════════ */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);

  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
});

/* ══════════════════════════════════════════
   MOBILE MENU
   ══════════════════════════════════════════ */
const hamburger    = document.getElementById('hamburger');
const mobileOverlay = document.getElementById('mobileOverlay');
const mobileClose  = document.getElementById('mobileClose');

hamburger.addEventListener('click', () => {
  mobileOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
});
mobileClose.addEventListener('click', closeMobile);

function closeMobile() {
  mobileOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════
   INTERSECTION OBSERVER — reveal animations
   ══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

function triggerReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ══════════════════════════════════════════
   GALLERY — render & filter
   ══════════════════════════════════════════ */
function heightClass(h) {
  if (h === 'tall') return '420px';
  if (h === 'short') return '220px';
  return '300px';
}

function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  const items = filter === 'all' ? galleryItems : galleryItems.filter(p => p.cat === filter);

  grid.innerHTML = '';

  items.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'gallery-item reveal';
    el.setAttribute('data-delay', i % 3);
    el.innerHTML = `
      <div class="gallery-item-img" style="height:${heightClass(item.height)}">
        <div class="gallery-item-bg" style="background:${item.bg}; height:100%">
          ${item.emoji}
        </div>
        <div class="gallery-overlay">
          <span class="overlay-text">View Work →</span>
        </div>
        ${item.featured ? '<span class="gallery-badge">Featured</span>' : ''}
      </div>
      <div class="gallery-item-body">
        <div class="gallery-cat">${item.label} · ${item.year}</div>
        <div class="gallery-title">${item.title}</div>
        <div class="gallery-desc">${item.desc}</div>
      </div>`;
    el.addEventListener('click', () => openLightbox(item));
    grid.appendChild(el);
    setTimeout(() => revealObserver.observe(el), 50);
  });
}

document.getElementById('filterTabs').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(btn.dataset.filter);
});

renderGallery();

/* ══════════════════════════════════════════
   FIGURINE CARDS — render
   ══════════════════════════════════════════ */
function renderFigurines() {
  const grid = document.getElementById('figurinesGrid');
  if (!grid) return;

  figurineCards.forEach((fc, i) => {
    const el = document.createElement('div');
    el.className = 'figurine-card reveal';
    el.setAttribute('data-delay', i % 4);
    el.innerHTML = `
      <div class="fc-img" style="background:${fc.bg}">
        <span style="font-size:3.5rem;position:relative;z-index:2">${fc.emoji}</span>
        <div class="fc-spotlight"></div>
        ${fc.badge ? `<span class="fc-badge">${fc.badge}</span>` : ''}
      </div>
      <div class="fc-body">
        <div class="fc-cat">${fc.material}</div>
        <div class="fc-name">${fc.name}</div>
        <div class="fc-edition">${fc.edition} · ${fc.year}</div>
      </div>`;
    el.addEventListener('click', () => openFigurineLightbox(fc));
    grid.appendChild(el);
    setTimeout(() => revealObserver.observe(el), 60);
  });
}

renderFigurines();

/* ══════════════════════════════════════════
   LIGHTBOX — Gallery items
   ══════════════════════════════════════════ */
function openLightbox(item) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lbContent').innerHTML = `
    <div class="lb-img" style="background:${item.bg}">${item.emoji}</div>
    <div class="lb-body">
      <div class="lb-cat">${item.label} · ${item.year}</div>
      <div class="lb-title">${item.title}</div>
      <div class="lb-desc">${item.desc} This work represents a defining moment in the artist's practice, exploring the intersection of classical form and contemporary expression with extraordinary technical mastery.</div>
      <div class="lb-tags">${item.tags.map(t => `<span class="lb-tag">${t}</span>`).join('')}</div>
      <a href="#contact" class="btn-primary" onclick="closeLightbox()" style="font-size:0.7rem;padding:0.75rem 1.8rem;letter-spacing:0.14em">
        Inquire About This Work →
      </a>
    </div>`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openFigurineLightbox(fc) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lbContent').innerHTML = `
    <div class="lb-img" style="background:${fc.bg}">${fc.emoji}</div>
    <div class="lb-body">
      <div class="lb-cat">Figurine · ${fc.year}</div>
      <div class="lb-title">${fc.name}</div>
      <div class="lb-desc">A signature piece from the Atelier Aurore collection. ${fc.material} construction with hand-finishing applied to every surface. ${fc.edition} — each piece individually authenticated and signed by the artist.</div>
      <div class="lb-tags">
        <span class="lb-tag">${fc.material}</span>
        <span class="lb-tag">${fc.edition}</span>
        ${fc.badge ? `<span class="lb-tag">${fc.badge}</span>` : ''}
      </div>
      <a href="#contact" class="btn-primary" onclick="closeLightbox()" style="font-size:0.7rem;padding:0.75rem 1.8rem;letter-spacing:0.14em">
        Commission or Inquire →
      </a>
    </div>`;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});

/* ══════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════ */
function submitForm(btn) {
  const original = btn.textContent;
  btn.textContent = '✓ Inquiry Received';
  btn.style.background = '#22c55e';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = '';
    btn.disabled = false;
  }, 3500);
}

/* ══════════════════════════════════════════
   PARALLAX — subtle depth on hero
   ══════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const scrollY = window.scrollY;
  if (scrollY < window.innerHeight) {
    const portrait = document.querySelector('.hero-portrait-frame');
    const left     = document.querySelector('.hero-left');
    if (portrait) portrait.style.transform = `translateY(${scrollY * 0.15}px)`;
    if (left)     left.style.transform     = `translateY(${scrollY * 0.08}px)`;
  }
});

/* ══════════════════════════════════════════
   GLASS CASE — hover glow effect
   ══════════════════════════════════════════ */
document.querySelectorAll('.glass-case').forEach(gc => {
  gc.addEventListener('mouseenter', () => {
    const glow = gc.querySelector('.case-glow');
    if (glow) glow.style.opacity = '1.5';
  });
  gc.addEventListener('mouseleave', () => {
    const glow = gc.querySelector('.case-glow');
    if (glow) glow.style.opacity = '1';
  });
});

/* ══════════════════════════════════════════
   SMOOTH LINK SCROLL
   ══════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ══════════════════════════════════════════
   CURSOR HOVER REFRESH after dynamic content
   ══════════════════════════════════════════ */
function refreshCursorHovers() {
  document.querySelectorAll('.gallery-item, .figurine-card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}
setTimeout(refreshCursorHovers, 500);