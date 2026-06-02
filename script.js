cp /mnt/user-data/uploads/script.js /mnt/user-data/outputs/script.js 2>/dev/null || cat > /mnt/user-data/outputs/script.js << 'JSEOF'
/* ══════════════════════════════════════════
   ATELIER AURORE — script.js
   Images: github.com/abhishektech10/sketch-23
   ══════════════════════════════════════════ */

const BASE = 'https://github.com/abhishektech10/sketch-23/releases/download/image/';
const imgs = {
  img1: BASE + 'img1.jpg',
  img2: BASE + 'img2.jpg',
  img3: BASE + 'img3.jpg',
  img4: BASE + 'img4.jpg',
  img5: BASE + 'img5.jpg',
  img6: BASE + 'img6.jpg',
  img7: BASE + 'img7.jpg',
  img8: BASE + 'img8.jpg',
};

const galleryItems = [
  { id:1, cat:'figurine', label:'Figurine',    img:imgs.img1, title:'Lumière',                     year:'2023', desc:'Hand-painted resin sculpture with gold-leaf detailing. 34cm standing figure capturing ethereal grace.',                                tags:['Resin','Gold Leaf','Original'], featured:true,  height:'tall'   },
  { id:2, cat:'sketch',   label:'Sketch',      img:imgs.img2, title:'Concept Studies — Series IV', year:'2022', desc:'Graphite sketches exploring proportion and dynamic gesture in figurine design.',                                                      tags:['Graphite','A3','Studies'],      featured:false, height:'medium' },
  { id:3, cat:'portrait', label:'Portrait',    img:imgs.img3, title:'Self Portrait in Amber',      year:'2021', desc:'Oil on linen, 60×80cm. A meditative self-examination in warm amber light.',                                                         tags:['Oil','Linen','Original'],       featured:false, height:'tall'   },
  { id:4, cat:'figurine', label:'Figurine',    img:imgs.img4, title:'Solstice',                    year:'2023', desc:'Limited edition piece from the Celestial Bodies series. Cast bronze with oxidised patina.',                                          tags:['Bronze','Patina','Limited'],    featured:true,  height:'medium' },
  { id:5, cat:'concept',  label:'Concept Art', img:imgs.img5, title:'Empress — Draft Sequence',    year:'2024', desc:'Digital concept art exploring twelve variations of crown, posture and robes for the Empress commission.',                            tags:['Digital','Process','Series'],   featured:false, height:'short'  },
  { id:6, cat:'sketch',   label:'Sketch',      img:imgs.img6, title:'Anatomy Studies',             year:'2020', desc:'Technical sketches exploring skeletal proportion as the architectural foundation for figurine work.',                                 tags:['Graphite','Technical','A2'],    featured:false, height:'medium' },
  { id:7, cat:'figurine', label:'Figurine',    img:imgs.img7, title:'Vesper',                      year:'2022', desc:'Dusk-toned resin figure with hand-applied translucent glaze. Wing elements micro-sculpted.',                                         tags:['Resin','Glaze','Ed. 30'],       featured:false, height:'tall'   },
  { id:8, cat:'portrait', label:'Portrait',    img:imgs.img8, title:'Study of Light, New York',    year:'2019', desc:'Charcoal on archival paper. Exploring the relationship between natural light and human form.',                                       tags:['Charcoal','A1','Original'],     featured:false, height:'short'  },
];

const figurineCards = [
  { name:'Aurora',   edition:'Ed. 01/50', year:'2022', material:'Resin & Enamel',    img:imgs.img1, badge:'Bestseller'  },
  { name:'Lumière',  edition:'Ed. 02/12', year:'2023', material:'Resin & Gold Leaf', img:imgs.img2, badge:'Limited'     },
  { name:'Solstice', edition:'Ed. 03/25', year:'2023', material:'Cast Bronze',        img:imgs.img3, badge:null          },
  { name:'Empress',  edition:'Unique',    year:'2024', material:'Resin & Gold',       img:imgs.img4, badge:'Masterpiece' },
  { name:'Vesper',   edition:'Ed. 07/30', year:'2022', material:'Resin & Glaze',      img:imgs.img5, badge:null          },
  { name:'Sage',     edition:'Ed. 02/40', year:'2021', material:'Painted Resin',      img:imgs.img6, badge:null          },
  { name:'Zephyr',   edition:'Ed. 01/20', year:'2024', material:'Bronze & Enamel',    img:imgs.img7, badge:'New'         },
  { name:'Solara',   edition:'Ed. 04/15', year:'2023', material:'Hand-Fired Clay',    img:imgs.img8, badge:null          },
];

/* ── LOADER ── */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const fill   = document.querySelector('.loader-fill');
  fill.style.width = '100%';
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    triggerReveal();
    injectHeroImage();
    setFeaturedImages();
  }, 2600);
});
document.body.style.overflow = 'hidden';

/* ── CURSOR ── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
(function animR(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animR); })();
function addHover(sel){ document.querySelectorAll(sel).forEach(el=>{ el.addEventListener('mouseenter',()=>ring.classList.add('hovered')); el.addEventListener('mouseleave',()=>ring.classList.remove('hovered')); }); }
addHover('a,button,.filter-btn,.gallery-item,.figurine-card,.glass-case,.award-card,input,textarea,select');

/* ── NAV ── */
const navbar = document.getElementById('navbar');
const navLinksAll = document.querySelectorAll('.nav-links a');
const allSections = document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  navbar.classList.toggle('scrolled',window.scrollY>30);
  let cur='';
  allSections.forEach(s=>{ if(window.scrollY>=s.offsetTop-120) cur=s.id; });
  navLinksAll.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

/* ── MOBILE MENU ── */
document.getElementById('hamburger').addEventListener('click',()=>{ document.getElementById('mobileOverlay').classList.add('open'); document.body.style.overflow='hidden'; });
document.getElementById('mobileClose').addEventListener('click',closeMobile);
function closeMobile(){ document.getElementById('mobileOverlay').classList.remove('open'); document.body.style.overflow=''; }

/* ── REVEAL OBSERVER ── */
const revealObs = new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); }); },{ threshold:0.10 });
function triggerReveal(){ document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el)); }

/* ── HERO PORTRAIT — inject real image ── */
function injectHeroImage(){
  const wrap = document.querySelector('.portrait-artist');
  if(!wrap) return;
  const existing = wrap.querySelector('.hero-real-img');
  if(existing) return;
  const img = document.createElement('img');
  img.src = imgs.img1;
  img.alt = 'Abhishek — Artist portrait';
  img.className = 'hero-real-img';
  wrap.insertBefore(img, wrap.firstChild);
}

/* ── FEATURED SECTION REAL IMAGES ── */
function setFeaturedImages(){
  const pairs = [['featured-img-1',imgs.img3],['featured-img-2',imgs.img7],['featured-img-3',imgs.img2]];
  pairs.forEach(([id,url])=>{ const el=document.getElementById(id); if(el){ el.style.backgroundImage=`url(${url})`; el.style.backgroundSize='cover'; el.style.backgroundPosition='center'; } });
}

/* ── GALLERY RENDER ── */
function heightPx(h){ return h==='tall'?'420px':h==='short'?'220px':'310px'; }

function renderGallery(filter='all'){
  const grid = document.getElementById('galleryGrid');
  const items = filter==='all'?galleryItems:galleryItems.filter(p=>p.cat===filter);
  grid.innerHTML='';
  items.forEach((item,i)=>{
    const el=document.createElement('div');
    el.className='gallery-item reveal';
    el.setAttribute('data-delay',i%3);
    el.innerHTML=`
      <div class="gallery-item-img" style="height:${heightPx(item.height)}">
        <img src="${item.img}" alt="${item.title}" class="gi-photo" loading="lazy">
        <div class="gi-overlay"><span class="overlay-text">View Work →</span></div>
        ${item.featured?'<span class="gallery-badge">Featured</span>':''}
      </div>
      <div class="gallery-item-body">
        <div class="gallery-cat">${item.label} · ${item.year}</div>
        <div class="gallery-title">${item.title}</div>
        <div class="gallery-desc">${item.desc}</div>
      </div>`;
    el.addEventListener('click',()=>openLightbox(item));
    grid.appendChild(el);
    setTimeout(()=>revealObs.observe(el),50);
  });
  setTimeout(()=>addHover('.gallery-item'),100);
}

document.getElementById('filterTabs').addEventListener('click',e=>{
  const btn=e.target.closest('.filter-btn');
  if(!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery(btn.dataset.filter);
});
renderGallery();

/* ── FIGURINE CARDS ── */
function renderFigurines(){
  const grid=document.getElementById('figurinesGrid');
  if(!grid) return;
  figurineCards.forEach((fc,i)=>{
    const el=document.createElement('div');
    el.className='figurine-card reveal';
    el.setAttribute('data-delay',i%4);
    el.innerHTML=`
      <div class="fc-img">
        <img src="${fc.img}" alt="${fc.name}" class="fc-photo" loading="lazy">
        <div class="fc-spotlight"></div>
        ${fc.badge?`<span class="fc-badge">${fc.badge}</span>`:''}
      </div>
      <div class="fc-body">
        <div class="fc-cat">${fc.material}</div>
        <div class="fc-name">${fc.name}</div>
        <div class="fc-edition">${fc.edition} · ${fc.year}</div>
      </div>`;
    el.addEventListener('click',()=>openFigurineLightbox(fc));
    grid.appendChild(el);
    setTimeout(()=>revealObs.observe(el),60);
  });
  setTimeout(()=>addHover('.figurine-card'),100);
}
renderFigurines();

/* ── LIGHTBOX ── */
const GH_REPO = 'https://github.com/abhishektech10/sketch-23';
const GH_RELEASES = 'https://github.com/abhishektech10/sketch-23/releases/latest';

function openLightbox(item){
  const lb=document.getElementById('lightbox');
  document.getElementById('lbContent').innerHTML=`
    <div class="lb-img lb-img-real"><img src="${item.img}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
    <div class="lb-body">
      <div class="lb-cat">${item.label} · ${item.year}</div>
      <div class="lb-title">${item.title}</div>
      <div class="lb-desc">${item.desc} This work represents a defining moment in the artist's practice, exploring the intersection of classical form and contemporary expression with extraordinary technical mastery.</div>
      <div class="lb-tags">${item.tags.map(t=>`<span class="lb-tag">${t}</span>`).join('')}</div>
      <div class="lb-actions">
        <a href="${GH_RELEASES}" target="_blank" rel="noopener" class="btn-github">View on GitHub ↗</a>
        <a href="#contact" class="btn-primary" onclick="closeLightbox()" style="font-size:0.7rem;padding:0.75rem 1.8rem;letter-spacing:0.14em">Inquire →</a>
      </div>
    </div>`;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}

function openFigurineLightbox(fc){
  const lb=document.getElementById('lightbox');
  document.getElementById('lbContent').innerHTML=`
    <div class="lb-img lb-img-real"><img src="${fc.img}" alt="${fc.name}" style="width:100%;height:100%;object-fit:cover;display:block;"></div>
    <div class="lb-body">
      <div class="lb-cat">Figurine · ${fc.year}</div>
      <div class="lb-title">${fc.name}</div>
      <div class="lb-desc">${fc.material} construction with hand-finishing on every surface. ${fc.edition} — each piece individually authenticated and signed by the artist.</div>
      <div class="lb-tags">
        <span class="lb-tag">${fc.material}</span>
        <span class="lb-tag">${fc.edition}</span>
        ${fc.badge?`<span class="lb-tag">${fc.badge}</span>`:''}
      </div>
      <div class="lb-actions">
        <a href="${GH_RELEASES}" target="_blank" rel="noopener" class="btn-github">View on GitHub ↗</a>
        <a href="#contact" class="btn-primary" onclick="closeLightbox()" style="font-size:0.7rem;padding:0.75rem 1.8rem;letter-spacing:0.14em">Commission →</a>
      </div>
    </div>`;
  lb.classList.add('open');
  document.body.style.overflow='hidden';
}

function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow='';
}
document.getElementById('lightbox').addEventListener('click',e=>{ if(e.target===e.currentTarget) closeLightbox(); });
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLightbox(); });

/* ── FORM ── */
function submitForm(btn){
  const orig=btn.textContent; btn.textContent='✓ Inquiry Received'; btn.style.background='#22c55e'; btn.disabled=true;
  setTimeout(()=>{ btn.textContent=orig; btn.style.background=''; btn.disabled=false; },3500);
}

/* ── PARALLAX ── */
window.addEventListener('scroll',()=>{
  const sy=window.scrollY;
  if(sy<window.innerHeight){
    const p=document.querySelector('.hero-portrait-frame'); const l=document.querySelector('.hero-left');
    if(p) p.style.transform=`translateY(${sy*0.14}px)`; if(l) l.style.transform=`translateY(${sy*0.07}px)`;
  }
});

/* ── SMOOTH SCROLL ── */
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{ const t=document.querySelector(link.getAttribute('href')); if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth',block:'start'}); } });
});
JSEOF
Output

exit code 0
Done


