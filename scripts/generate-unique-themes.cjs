// Generate unique themes for all templates
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = path.join(__dirname, '..', 'src', 'templates');

// 3 Categories: Business, Portfolio, Ecommerce
const CATEGORIES = {
  ecommerce: ['beauty', 'fashion', 'jewelry', 'furniture', 'books-stationery', 'food-cafe', 'grocery', 'electronics', 'sports', 'toys'],
  portfolio: ['photographer', 'agency-portfolio', 'artist', 'architect', 'designer', 'writer', 'musician', 'film', 'model', 'creative'],
  business: ['restaurant', 'hotel', 'real-estate', 'medical', 'consulting', 'automotive', 'gym-fitness', 'salon', 'spa', 'education']
};

// Unique color palettes - 50 distinct palettes
const COLOR_PALETTES = [
  // Warm & Earthy
  { primary: '#92400e', accent: '#ea580c', background: '#fff7ed', surface: '#ffffff', text: '#431407', textMuted: '#9a3412' },
  { primary: '#78350f', accent: '#d97706', background: '#fef3c7', surface: '#ffffff', text: '#451a03', textMuted: '#b45309' },
  { primary: '#9a3412', accent: '#c2410c', background: '#ffedd5', surface: '#fffbf0', text: '#431407', textMuted: '#c2410c' },
  { primary: '#a16207', accent: '#ca8a04', background: '#fefce8', surface: '#ffffff', text: '#422006', textMuted: '#854d0e' },
  { primary: '#b45309', accent: '#f59e0b', background: '#fffbeb', surface: '#ffffff', text: '#451a03', textMuted: '#d97706' },

  // Cool Blues
  { primary: '#1e3a8a', accent: '#3b82f6', background: '#eff6ff', surface: '#ffffff', text: '#1e3a8a', textMuted: '#3b82f6' },
  { primary: '#1e40af', accent: '#6366f1', background: '#eef2ff', surface: '#ffffff', text: '#1e3a8a', textMuted: '#6366f1' },
  { primary: '#1d4ed8', accent: '#0ea5e9', background: '#f0f9ff', surface: '#ffffff', text: '#1e3a8a', textMuted: '#0284c7' },
  { primary: '#0f172a', accent: '#38bdf8', background: '#f8fafc', surface: '#ffffff', text: '#0f172a', textMuted: '#475569' },
  { primary: '#172554', accent: '#0ea5e9', background: '#f0f9ff', surface: '#f8fafc', text: '#172554', textMuted: '#1e40af' },

  // Luxe Purples
  { primary: '#581c87', accent: '#9333ea', background: '#faf5ff', surface: '#ffffff', text: '#581c87', textMuted: '#9333ea' },
  { primary: '#4c1d95', accent: '#c026d3', background: '#fdf4ff', surface: '#ffffff', text: '#4c1d95', textMuted: '#c026d3' },
  { primary: '#6b21a8', accent: '#e879f9', background: '#fdf2f8', surface: '#ffffff', text: '#6b21a8', textMuted: '#c026d3' },
  { primary: '#7e22ce', accent: '#a855f7', background: '#faf5ff', surface: '#ffffff', text: '#7e22ce', textMuted: '#a855f7' },
  { primary: '#581c87', accent: '#d946ef', background: '#fdf4ff', surface: '#faf5ff', text: '#581c87', textMuted: '#d946ef' },

  // Fresh Greens
  { primary: '#14532d', accent: '#22c55e', background: '#f0fdf4', surface: '#ffffff', text: '#14532d', textMuted: '#16a34a' },
  { primary: '#166534', accent: '#4ade80', background: '#forntend/f0fdf4', surface: '#ffffff', text: '#166534', textMuted: '#22c55e' },
  { primary: '#15803d', accent: '#86efac', background: '#f0fdf4', surface: '#ffffff', text: '#15803d', textMuted: '#4ade80' },
  { primary: '#1a4a2e', accent: '#10b981', background: '#ecfdf5', surface: '#ffffff', text: '#1a4a2e', textMuted: '#10b981' },
  { primary: '#064e3b', accent: '#34d399', background: '#ecfdf5', surface: '#f0fdf4', text: '#064e3b', textMuted: '#059669' },

  // Bold Reds & Pinks
  { primary: '#881337', accent: '#f43f5e', background: '#fff1f2', surface: '#ffffff', text: '#881337', textMuted: '#f43f5e' },
  { primary: '#9f1239', accent: '#fb7185', background: '#fff1f2', surface: '#fffbfc', text: '#9f1239', textMuted: '#fb7185' },
  { primary: '#be123c', accent: '#f972bb', background: '#fdf2f8', surface: '#ffffff', text: '#be123c', textMuted: '#f472b6' },
  { primary: '#831843', accent: '#ec4899', background: '#fdf2f8', surface: '#ffffff', text: '#831843', textMuted: '#ec4899' },
  { primary: '#701a3a', accent: '#db2777', background: '#fdf2f8', surface: '#fff1f2', text: '#701a3a', textMuted: '#db2777' },

  // Elegant Blacks & Grays
  { primary: '#0a0a0a', accent: '#71717a', background: '#fafafa', surface: '#ffffff', text: '#0a0a0a', textMuted: '#71717a' },
  { primary: '#18181b', accent: '#a1a1aa', background: '#f4f4f5', surface: '#ffffff', text: '#18181b', textMuted: '#71717a' },
  { primary: '#09090b', accent: '#52525b', background: '#fafafa', surface: '#ffffff', text: '#09090b', textMuted: '#52525b' },
  { primary: '#1c1917', accent: '#78716c', background: '#faf9f6', surface: '#ffffff', text: '#1c1917', textMuted: '#78716c' },
  { primary: '#292524', accent: '#a8a29e', background: '#fafaf9', surface: '#ffffff', text: '#292524', textMuted: '#78716c' },

  // Ocean & Teals
  { primary: '#134e4a', accent: '#14b8a6', background: '#f0fdfa', surface: '#ffffff', text: '#134e4a', textMuted: '#14b8a6' },
  { primary: '#115e59', accent: '#2dd4bf', background: '#f0fdfa', surface: '#ffffff', text: '#115e59', textMuted: '#2dd4bf' },
  { primary: '#0f766e', accent: '#5eead4', background: '#f0fdfa', surface: '#ffffff', text: '#0f766e', textMuted: '#5eead4' },
  { primary: '#15524a', accent: '#0d9488', background: '#f0fdfa', surface: '#f5fffe', text: '#15524a', textMuted: '#0d9488' },
  { primary: '#0d3d36', accent: '#06b6d4', background: '#ecfeff', surface: '#ffffff', text: '#0d3d36', textMuted: '#06b6d4' },

  // Sunset Oranges & Corals
  { primary: '#7c2d12', accent: '#fb923c', background: '#fff7ed', surface: '#ffffff', text: '#7c2d12', textMuted: '#f97316' },
  { primary: '#9a3412', accent: '#fbbf24', background: '#fffbeb', surface: '#ffffff', text: '#9a3412', textMuted: '#f59e0b' },
  { primary: '#8b2c16', accent: '#f97316', background: '#fff7ed', surface: '#ffffff', text: '#8b2c16', textMuted: '#ea580c' },
  { primary: '#6b21a8', accent: '#f472b6', background: '#fdf2f8', surface: '#ffffff', text: '#6b21a8', textMuted: '#ec4899' },
  { primary: '#c2410c', accent: '#fbbf24', background: '#fffbeb', surface: '#ffffff', text: '#9a3412', textMuted: '#f59e0b' },

  // Midnight Blues
  { primary: '#1e293b', accent: '#3b82f6', background: '#f8fafc', surface: '#ffffff', text: '#1e293b', textMuted: '#64748b' },
  { primary: '#0f172a', accent: '#0ea5e9', background: '#f0f9ff', surface: '#ffffff', text: '#0f172a', textMuted: '#38bdf8' },
  { primary: '#1a365d', accent: '#4299e1', background: '#ebf8ff', surface: '#ffffff', text: '#1a365d', textMuted: '#4299e1' },
  { primary: '#1e3a5f', accent: '#63b3ed', background: '#ebf8ff', surface: '#ffffff', text: '#1e3a5f', textMuted: '#63b3ed' },
  { primary: '#2a4365', accent: '#76e4f7', background: '#e0f7fa', surface: '#ffffff', text: '#2a4365', textMuted: '#76e4f7' },

  // Rose & Blush
  { primary: '#9f1239', accent: '#fb7185', background: '#fff1f2', surface: '#ffffff', text: '#9f1239', textMuted: '#fb7185' },
  { primary: '#be185d', accent: '#f472b6', background: '#fdf2f8', surface: '#ffffff', text: '#be185d', textMuted: '#f472b6' },
  { primary: '#831843', accent: '#fb7185', background: '#fff1f2', surface: '#ffffff', text: '#831843', textMuted: '#fb7185' },
  { primary: '#9d174d', accent: '#ec4899', background: '#fdf2f8', surface: '#ffffff', text: '#9d174d', textMuted: '#ec4899' },
  { primary: '#83171a', accent: '#f87171', background: '#fef2f2', surface: '#ffffff', text: '#83171a', textMuted: '#ef4444' },

  // Sophisticated Navy & Gold
  { primary: '#000032', accent: '#FA5014', background: '#f8f9ff', surface: '#ffffff', text: '#000032', textMuted: '#4a5568' },
  { primary: '#0c1929', accent: '#f59e0b', background: '#fefce8', surface: '#ffffff', text: '#0c1929', textMuted: '#92400e' },
  { primary: '#1a1a2e', accent: '#eab308', background: '#fefce8', surface: '#ffffff', text: '#1a1a2e', textMuted: '#ca8a04' },
  { primary: '#172554', accent: '#fbbf24', background: '#fffbeb', surface: '#ffffff', text: '#172554', textMuted: '#f59e0b' },
  { primary: '#0f172a', accent: '#fcd34d', background: '#fefce8', surface: '#ffffff', text: '#0f172a', textMuted: '#eab308' },
];

// Unique font combinations - 30 heading + body pairs
const FONT_COMBOS = [
  { heading: 'Playfair Display', body: 'Urbanist' },
  { heading: 'Bodoni Moda', body: 'Manrope' },
  { heading: 'Cormorant Garamond', body: 'Inter' },
  { heading: 'DM Serif Display', body: 'Poppins' },
  { heading: 'Prata', body: 'Nunito' },
  { heading: 'Oswald', body: 'Open Sans' },
  { heading: 'Space Grotesk', body: 'Work Sans' },
  { heading: 'Syne', body: 'Outfit' },
  { heading: 'Sora', body: 'Figtree' },
  { heading: 'Bricolage Grotesque', body: 'Plus Jakarta Sans' },
  { heading: 'Cabinet Grotesk', body: 'Satoshi' },
  { heading: 'Clash Display', body: 'General Sans' },
  { heading: 'Automotive', body: 'Inter' },
  { heading: 'Libre Baskerville', body: 'Source Sans Pro' },
  { heading: 'Crimson Pro', body: 'Lato' },
  { heading: 'Fraunces', body: 'Karla' },
  { heading: 'Lora', body: 'Merriweather Sans' },
  { heading: 'Merriweather', body: 'Open Sans' },
  { heading: 'PT Serif', body: 'PT Sans' },
  { heading: 'Roboto Slab', body: 'Roboto' },
  { heading: 'Montserrat', body: 'Raleway' },
  { heading: 'Raleway', body: 'Poppins' },
  { heading: 'Work Sans', body: 'IBM Plex Sans' },
  { heading: 'Epilogue', body: 'Inter' },
  { heading: 'Plus Jakarta Sans', body: 'IBM Plex Sans' },
  { heading: 'Be Vietnam Pro', body: 'IBM Plex Sans' },
  { heading: 'Albert Sans', body: 'Inter' },
  { heading: 'Hanken Grotesk', body: 'Inter' },
  { heading: 'Instrument Sans', body: 'Inter' },
  { heading: 'Geist Sans', body: 'Geist Mono' },
];

// Tier configurations
const TIERS = ['starter', 'growth', 'advanced', 'signature'];

// Motion levels by tier
const MOTION_BY_TIER = {
  starter: { level: 1, parallax: 'subtle hover', carousel: 'basic fade' },
  growth: { level: 2, parallax: 'scroll reveal', carousel: 'slide transition' },
  advanced: { level: 3, parallax: 'mouse tracking', carousel: 'infinite scroll' },
  signature: { level: 4, parallax: 'pinned storytelling', carousel: 'parallax quote carousel' },
};

// Get all template folders
function getAllTemplates() {
  if (!fs.existsSync(TEMPLATES_DIR)) return [];
  return fs.readdirSync(TEMPLATES_DIR).filter(f =>
    fs.statSync(path.join(TEMPLATES_DIR, f)).isDirectory()
  );
}

// Parse template family and tier from slug
function parseTemplateSlug(slug) {
  const parts = slug.split('-');
  const tier = TIERS.find(t => parts.includes(t)) || 'starter';
  const family = parts.filter(p => !TIERS.includes(p) && p !== 'luxe' && p !== 'modern' && p !== 'bold' && p !== 'editorial' && p !== 'minimal' && p !== 'interactive' && p !== 'cinematic').join('-');
  return { family, tier };
}

// Generate deterministic but unique values from template slug
function generateFromSlug(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Update a single template's config.json
function updateTemplateTheme(templateDir) {
  const configPath = path.join(TEMPLATES_DIR, templateDir, 'config.json');

  if (!fs.existsSync(configPath)) {
    console.log(`Skipping ${templateDir} - no config.json`);
    return false;
  }

  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const slug = templateDir;
    const { family, tier } = parseTemplateSlug(slug);
    const hash = generateFromSlug(slug);

    // Select unique palette based on hash
    const paletteIndex = hash % COLOR_PALETTES.length;
    const fontIndex = (hash >> 4) % FONT_COMBOS.length;
    const motion = MOTION_BY_TIER[tier] || MOTION_BY_TIER.starter;

    // Override with category-appropriate palette
    let palette = COLOR_PALETTES[paletteIndex];

    // Category-specific palette overrides for consistency
    if (family.includes('beauty')) {
      palette = COLOR_PALETTES[(hash + 5) % 5]; // Warm earthy
    } else if (family.includes('fashion')) {
      palette = COLOR_PALETTES[15 + (hash % 5)]; // Elegant blacks/grays
    } else if (family.includes('restaurant') || family.includes('food')) {
      palette = COLOR_PALETTES[(hash + 10) % 10]; // Warm reds/oranges
    } else if (family.includes('photographer') || family.includes('artist')) {
      palette = COLOR_PALETTES[5 + (hash % 5)]; // Cool blues/blacks
    } else if (family.includes('medical')) {
      palette = COLOR_PALETTES[25 + (hash % 5)]; // Clean teals
    } else if (family.includes('real-estate')) {
      palette = COLOR_PALETTES[30 + (hash % 5)]; // Navy/gold
    }

    // Update theme
    config.theme = {
      ...config.theme,
      colors: palette,
      fonts: FONT_COMBOS[fontIndex],
      motion: motion,
      tier: tier
    };

    // Update category
    if (family.includes('beauty') || family.includes('fashion') || family.includes('jewelry') ||
        family.includes('furniture') || family.includes('food') || family.includes('grocery') ||
        family.includes('electronics') || family.includes('sports') || family.includes('toys')) {
      config.category = 'ecommerce';
    } else if (family.includes('photographer') || family.includes('artist') ||
               family.includes('architect') || family.includes('designer') ||
               family.includes('writer') || family.includes('musician') ||
               family.includes('film') || family.includes('model') || family.includes('agency')) {
      config.category = 'portfolio';
    } else {
      config.category = 'business';
    }

    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`Updated ${templateDir}: ${config.category} - ${tier}`);
    return true;
  } catch (err) {
    console.error(`Error updating ${templateDir}:`, err.message);
    return false;
  }
}

// Main
console.log('Generating unique themes for all templates...\n');
const templates = getAllTemplates();
let success = 0;
let failed = 0;

templates.forEach(template => {
  if (updateTemplateTheme(template)) {
    success++;
  } else {
    failed++;
  }
});

console.log(`\n✅ Done! ${success} templates updated, ${failed} failed`);
console.log(`Total templates: ${templates.length}`);
