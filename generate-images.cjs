const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const OUT = path.resolve(__dirname, 'public/assets/generated');
function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

const weddingImages = [
  {
    slug: 'wedding-photographer-growth',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'SHAADI SHOTS', subtitle: 'Wedding Photography', p: ['#1a0b12','#2d131e','#c78d6e'] },
      'work-01': { w: 800, h: 1000, type: 'p', label: 'HALDI', p: ['#1a0b12','#4a1c2a','#f59e0b'] },
      'work-02': { w: 800, h: 600, type: 'p', label: 'SANGEET', p: ['#1a0b12','#4a1c2a','#e11d48'] },
      'work-03': { w: 800, h: 800, type: 'p', label: 'BARAAT', p: ['#1a0b12','#4a1c2a','#3b82f6'] },
      'work-04': { w: 800, h: 1000, type: 'p', label: 'MANDAP', p: ['#1a0b12','#4a1c2a','#10b981'] },
      'work-05': { w: 800, h: 600, type: 'p', label: 'RECEPTION', p: ['#1a0b12','#4a1c2a','#8b5cf6'] },
      'work-06': { w: 800, h: 800, type: 'p', label: 'GOA', p: ['#1a0b12','#4a1c2a','#f97316'] },
      'portfolio-01': { w: 800, h: 600, type: 'p', label: 'EDITORIAL', p: ['#2d131e','#3d1f2b','#c78d6e'] },
      'portfolio-02': { w: 800, h: 1000, type: 'p', label: 'PORTRAIT', p: ['#2d131e','#3d1f2b','#e8d5c4'] },
      'portfolio-03': { w: 800, h: 800, type: 'p', label: 'CANDID', p: ['#2d131e','#3d1f2b','#b8a99a'] },
      'portfolio-04': { w: 800, h: 600, type: 'p', label: 'DRONE', p: ['#2d131e','#3d1f2b','#c78d6e'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'S', p: ['#2d131e','#4a1c2a','#c78d6e'] },
    }
  },
  {
    slug: 'wedding-photographer-pro',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'ETERNAL VOWS', subtitle: 'Capturing Sacred Moments', p: ['#1a0b12','#3d1f2b','#c78d6e'] },
      'work-01': { w: 800, h: 1000, type: 'p', label: 'HALDI', p: ['#1a0b12','#3d1f2b','#fbbf24'] },
      'work-02': { w: 800, h: 600, type: 'p', label: 'SANGEET', p: ['#1a0b12','#3d1f2b','#ec4899'] },
      'work-03': { w: 800, h: 800, type: 'p', label: 'BARAAT', p: ['#1a0b12','#3d1f2b','#6366f1'] },
      'work-04': { w: 800, h: 1000, type: 'p', label: 'MANDAP', p: ['#1a0b12','#3d1f2b','#14b8a6'] },
      'work-05': { w: 800, h: 600, type: 'p', label: 'RECEPTION', p: ['#1a0b12','#3d1f2b','#a855f7'] },
      'work-06': { w: 800, h: 800, type: 'p', label: 'PRE-WEDDING', p: ['#1a0b12','#3d1f2b','#f97316'] },
      'baraat-01': { w: 1200, h: 700, type: 'p', label: "GROOM'S ARRIVAL", p: ['#1a0b12','#2d131e','#ffd700'] },
      'baraat-02': { w: 1200, h: 700, type: 'p', label: 'THE HORSE', p: ['#2c1810','#3d1f2b','#c9a962'] },
      'baraat-03': { w: 1200, h: 700, type: 'p', label: 'DANCING', p: ['#0f172a','#1e3a5f','#fbbf24'] },
      'baraat-04': { w: 1200, h: 700, type: 'p', label: 'FAMILY', p: ['#1a2e1a','#2d5a27','#86efac'] },
      'baraat-05': { w: 1200, h: 700, type: 'p', label: 'MANDAP', p: ['#312e81','#4338ca','#e0e7ff'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'E', p: ['#2d131e','#4a1c2a','#c78d6e'] },
    }
  },
  {
    slug: 'mehndi-artist-growth',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'HENNA HERITAGE', subtitle: 'Traditional Bridal Mehndi', p: ['#f5f0e6','#ebe4d4','#c17817'] },
      'work-01': { w: 600, h: 800, type: 'hand', label: 'BRIDAL', p: ['#0d1f0d','#1a3a1a','#c17817'] },
      'work-02': { w: 600, h: 800, type: 'hand', label: 'FEET', p: ['#0d1f0d','#1a3a1a','#c17817'] },
      'work-03': { w: 600, h: 800, type: 'hand', label: 'ARABIC', p: ['#1a3a1a','#2d5a27','#e8c86a'] },
      'work-04': { w: 600, h: 800, type: 'hand', label: 'FUSION', p: ['#2d131e','#4a1c2a','#c17817'] },
      'work-05': { w: 600, h: 800, type: 'hand', label: 'MINIMAL', p: ['#f5f0e6','#ebe4d4','#0d1f0d'] },
      'work-06': { w: 600, h: 800, type: 'hand', label: 'RAJASTHANI', p: ['#7c2d12','#9a3412','#e8c86a'] },
      'about-main': { w: 600, h: 600, type: 'portrait', label: 'A', p: ['#0d1f0d','#1a3a1a','#c17817'] },
    }
  },
  {
    slug: 'mehndi-artist-pro',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'MEHNDI BY AISHA', subtitle: 'Precision. Soul. Twelve Years.', p: ['#f5f0e6','#ebe4d4','#c17817'] },
      'work-01': { w: 600, h: 800, type: 'hand', label: 'BRIDAL', p: ['#0d1f0d','#1a3a1a','#c17817'] },
      'work-02': { w: 600, h: 800, type: 'hand', label: 'FEET', p: ['#0d1f0d','#1a3a1a','#c17817'] },
      'work-03': { w: 600, h: 800, type: 'hand', label: 'ARABIC', p: ['#1a3a1a','#2d5a27','#e8c86a'] },
      'work-04': { w: 600, h: 800, type: 'hand', label: 'FUSION', p: ['#2d131e','#4a1c2a','#c17817'] },
      'work-05': { w: 600, h: 800, type: 'hand', label: 'MINIMAL', p: ['#f5f0e6','#ebe4d4','#0d1f0d'] },
      'work-06': { w: 600, h: 800, type: 'hand', label: 'RAJASTHANI', p: ['#7c2d12','#9a3412','#e8c86a'] },
      'about-main': { w: 600, h: 600, type: 'portrait', label: 'A', p: ['#0d1f0d','#1a3a1a','#c17817'] },
    }
  },
  {
    slug: 'food-photographer-growth',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'PLATED', subtitle: 'Food Photography', p: ['#1a1412','#2d1f1a','#c17817'] },
      'work-01': { w: 800, h: 600, type: 'p', label: 'BIRYANI', p: ['#2d1f1a','#3d2b1f','#e8a84a'] },
      'work-02': { w: 800, h: 800, type: 'p', label: 'PAV BHAJI', p: ['#2d1f1a','#3d2b1f','#f97316'] },
      'work-03': { w: 800, h: 1000, type: 'p', label: 'THALI', p: ['#2d1f1a','#3d2b1f','#22c55e'] },
      'work-04': { w: 800, h: 600, type: 'p', label: 'DOSA', p: ['#2d1f1a','#3d2b1f','#fbbf24'] },
      'work-05': { w: 800, h: 800, type: 'p', label: 'CHAAT', p: ['#2d1f1a','#3d2b1f','#ef4444'] },
      'work-06': { w: 800, h: 600, type: 'p', label: 'DESSERT', p: ['#2d1f1a','#3d2b1f','#a855f7'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'P', p: ['#2d1f1a','#3d2b1f','#c17817'] },
    }
  },
  {
    slug: 'food-photographer-pro',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'CUISINE LENS', subtitle: 'Storytelling on a Plate', p: ['#1a1412','#2d1f1a','#c17817'] },
      'work-01': { w: 800, h: 600, type: 'p', label: 'BIRYANI', p: ['#2d1f1a','#3d2b1f','#e8a84a'] },
      'work-02': { w: 800, h: 800, type: 'p', label: 'PAV BHAJI', p: ['#2d1f1a','#3d2b1f','#f97316'] },
      'work-03': { w: 800, h: 1000, type: 'p', label: 'THALI', p: ['#2d1f1a','#3d2b1f','#22c55e'] },
      'work-04': { w: 800, h: 600, type: 'p', label: 'DOSA', p: ['#2d1f1a','#3d2b1f','#fbbf24'] },
      'work-05': { w: 800, h: 800, type: 'p', label: 'CHAAT', p: ['#2d1f1a','#3d2b1f','#ef4444'] },
      'work-06': { w: 800, h: 600, type: 'p', label: 'DESSERT', p: ['#2d1f1a','#3d2b1f','#a855f7'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'C', p: ['#2d1f1a','#3d2b1f','#c17817'] },
    }
  },
  {
    slug: 'tattoo-artist-growth',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'IRON & INK', subtitle: 'Tattoo Studio', p: ['#0a0a0a','#141414','#aaaaaa'] },
      'work-01': { w: 800, h: 800, type: 'p', label: 'PORTRAIT', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-02': { w: 800, h: 600, type: 'p', label: 'GEOMETRY', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'work-03': { w: 800, h: 1000, type: 'p', label: 'FLORAL', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-04': { w: 800, h: 800, type: 'p', label: 'MINIMAL', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'work-05': { w: 800, h: 600, type: 'p', label: 'SCRIPT', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-06': { w: 800, h: 1000, type: 'p', label: 'BACKPIECE', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'V', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
    }
  },
  {
    slug: 'tattoo-artist-pro',
    images: {
      'hero-main': { w: 1920, h: 1080, type: 'g', title: 'SKIN STORIES', subtitle: 'Ink that lives with you', p: ['#0a0a0a','#141414','#aaaaaa'] },
      'work-01': { w: 800, h: 800, type: 'p', label: 'PORTRAIT', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-02': { w: 800, h: 600, type: 'p', label: 'GEOMETRY', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'work-03': { w: 800, h: 1000, type: 'p', label: 'FLORAL', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-04': { w: 800, h: 800, type: 'p', label: 'MINIMAL', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'work-05': { w: 800, h: 600, type: 'p', label: 'SCRIPT', p: ['#0a0a0a','#1a1a1a','#888888'] },
      'work-06': { w: 800, h: 1000, type: 'p', label: 'BACKPIECE', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
      'about-main': { w: 600, h: 800, type: 'portrait', label: 'S', p: ['#0a0a0a','#1a1a1a','#aaaaaa'] },
    }
  }
];

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function svg(type, w, h, data) {
  const [c1,c2,c3] = data.p;
  if (type === 'g') {
    const title = escapeXml(data.title || '');
    const subtitle = escapeXml(data.subtitle || '');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="${c1}"/><stop offset="50%" stop-color="${c2}"/><stop offset="100%" stop-color="${c1}"/></linearGradient><radialGradient id="rg" cx="30%" cy="30%" r="60%"><stop offset="0%" stop-color="${c3}" stop-opacity="0.15"/><stop offset="100%" stop-color="${c1}" stop-opacity="0"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/><rect width="${w}" height="${h}" fill="url(#rg)"/><circle cx="${w*0.15}" cy="${h*0.8}" r="${Math.min(w,h)*0.25}" fill="${c3}" opacity="0.08"/><circle cx="${w*0.85}" cy="${h*0.2}" r="${Math.min(w,h)*0.2}" fill="${c3}" opacity="0.05"/><text x="${w/2}" y="${h/2 - 20}" text-anchor="middle" fill="${c3}" font-family="Georgia,serif" font-size="${Math.min(w,h)*0.08}" font-weight="300" letter-spacing="0.15em">${title}</text><text x="${w/2}" y="${h/2 + 40}" text-anchor="middle" fill="${c3}" font-family="Georgia,serif" font-size="${Math.min(w,h)*0.025}" font-style="italic" opacity="0.7" letter-spacing="0.1em">${subtitle}</text><line x1="${w/2 - 60}" y1="${h/2 + 70}" x2="${w/2 + 60}" y2="${h/2 + 70}" stroke="${c3}" stroke-width="1" opacity="0.3"/></svg>`;
  }
  if (type === 'portrait') {
    const label = escapeXml(data.label || '');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><defs><radialGradient id="pg" cx="30%" cy="30%" r="70%"><stop offset="0%" stop-color="${c2}"/><stop offset="100%" stop-color="${c1}"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#pg)"/><text x="${w/2}" y="${h/2 + 15}" text-anchor="middle" fill="${c3}" font-family="Georgia,serif" font-size="${Math.min(w,h)*0.35}" font-weight="300" opacity="0.4">${label}</text></svg>`;
  }
  if (type === 'hand') {
    const label = escapeXml(data.label || '');
    let border = '';
    for (let i = 0; i < Math.floor(w / 40); i++) {
      border += `<circle cx="${i * 40 + 20}" cy="10" r="3" fill="${c3}" opacity="0.4"/>`;
      border += `<circle cx="${i * 40 + 20}" cy="${h - 10}" r="3" fill="${c3}" opacity="0.4"/>`;
    }
    for (let i = 0; i < Math.floor(h / 40); i++) {
      border += `<circle cx="10" cy="${i * 40 + 20}" r="3" fill="${c3}" opacity="0.4"/>`;
      border += `<circle cx="${w - 10}" cy="${i * 40 + 20}" r="3" fill="${c3}" opacity="0.4"/>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${c1}"/>${border}<g transform="translate(${w/2},${h/2})"><circle cx="0" cy="0" r="60" fill="none" stroke="${c3}" stroke-width="1" opacity="0.3"/><circle cx="0" cy="0" r="40" fill="none" stroke="${c3}" stroke-width="1" opacity="0.3"/><circle cx="0" cy="0" r="20" fill="${c3}" opacity="0.15"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(0)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(45)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(90)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(135)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(180)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(225)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(270)"/><path d="M0-50 C4-35,10-25,0-15 C-10-25,-4-35,0-50" fill="${c3}" opacity="0.2" transform="rotate(315)"/></g><text x="${w/2}" y="${h - 40}" text-anchor="middle" fill="${c3}" font-family="Georgia,serif" font-size="14" font-style="italic" opacity="0.7" letter-spacing="0.1em">${label}</text></svg>`;
  }
  // Default pattern
  const label = escapeXml(data.label || '');
  let shapes = '';
  const seed = data.label.split('').reduce((a,b) => a + b.charCodeAt(0), 0);
  const rng = (i) => { const x = Math.sin(seed + i * 93.7) * 43758.5453; return x - Math.floor(x); };
  for (let i = 0; i < 20; i++) {
    shapes += `<circle cx="${(rng(i*3)*w).toFixed(0)}" cy="${(rng(i*3+1)*h).toFixed(0)}" r="${(20+rng(i*3+2)*80).toFixed(0)}" fill="${c2}" opacity="${(0.03+rng(i)*0.08).toFixed(3)}"/>`;
  }
  for (let i = 0; i < 8; i++) {
    shapes += `<rect x="${(rng(i*5)*w).toFixed(0)}" y="${(rng(i*5+1)*h).toFixed(0)}" width="${(40+rng(i*5+2)*100).toFixed(0)}" height="${(40+rng(i*5+3)*100).toFixed(0)}" rx="20" fill="${c3}" opacity="0.04"/>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${c1}"/>${shapes}<text x="${w/2}" y="${h/2}" text-anchor="middle" fill="${c3}" font-family="Georgia,serif" font-size="${Math.min(w,h)*0.08}" font-weight="300" opacity="0.5" letter-spacing="0.05em">${label}</text></svg>`;
}

async function generate() {
  let total = 0;
  for (const tmpl of weddingImages) {
    const parts = tmpl.slug.split('-');
    const variant = parts.pop();
    const baseSlug = parts.join('-');
    const variantDir = path.join(OUT, baseSlug, variant);
    ensureDir(variantDir);
    for (const [imgName, def] of Object.entries(tmpl.images)) {
      const s = svg(def.type, def.w, def.h, def);
      await sharp(Buffer.from(s)).resize(def.w, def.h).png().toFile(path.join(variantDir, `${imgName}.png`));
      total++;
      console.log(`✓ ${baseSlug}/${variant}/${imgName}.png`);
    }
  }
  console.log(`\nTotal: ${total} images`);
}

generate().catch(err => { console.error(err); process.exit(1); });
