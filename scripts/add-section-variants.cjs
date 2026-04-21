const fs = require('fs');
const path = require('path');

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function pickRandom(arr, seed) {
  return arr[(seed) % arr.length];
}

function pickMultiple(arr, count, seed) {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[(seed + i * 7) % arr.length]);
  }
  return result;
}

// Section variant definitions per section type
const SECTION_VARIANTS = {
  'hero-cinematic': ['center', 'left', 'right', 'split', 'video', 'carousel', 'cinematic'],
  'hero-editorial': ['minimal', 'boxed', 'center', 'left', 'split'],
  'hero-section': ['center', 'left', 'right', 'split', 'video', 'carousel', 'cinematic', 'minimal', 'boxed'],
  'category-grid': ['default', 'large', 'compact', 'featured'],
  'product-carousel': ['default', 'compact', 'large', 'featured'],
  'advanced-carousel': ['classic', 'cinematic', 'stackedCard', 'centerMode', 'splitContent', 'vertical', 'filmstrip', 'logoMarquee', 'testimonialQuote', 'productRail', 'editorialStory', 'beforeAfter', 'coverflow', 'continuousRail', 'thumbnailGallery'],
  'split-media': ['default', 'image-left', 'image-right', 'overlap', 'minimal'],
  'gallery-grid': ['default', 'masonry', 'featured', 'grid'],
  'features': ['grid', 'cards', 'icons', 'minimal', 'featured'],
  'faq': ['accordion', 'cards', 'minimal', 'two-column'],
  'stats': ['default', 'minimal', 'highlight', 'grid'],
  'logo-strip': ['default', 'marquee', 'grid', 'featured'],
  'cta-banner': ['default', 'minimal', 'featured', 'boxed'],
  'testimonials-slider': ['default', 'minimal', 'featured', 'grid'],
  'testimonials': ['grid', 'cards', 'slider', 'featured', 'minimal'],
  'newsletter': ['default', 'minimal', 'featured', 'boxed'],
  'contact-form': ['default', 'minimal', 'featured'],
  'motion-section': ['fadeUp', 'fadeIn', 'subtleSlide', 'staggeredCards', 'maskedReveal', 'splitHeadline'],
};

// Tier-based motion levels
const TIER_MOTION_LEVELS = {
  'starter': 1,
  'growth': 2,
  'advanced': 3,
  'signature': 4,
  // Aliases
  'basic': 1,
  'medium': 2,
  'premium': 3,
};

// Fallback variants for sections not in our map
const FALLBACK_VARIANTS = ['default', 'standard', 'classic'];

function getVariantForSection(sectionType, templateSlug, tier, style, sectionIndex) {
  const variants = SECTION_VARIANTS[sectionType] || FALLBACK_VARIANTS;
  const hash = hashString(templateSlug + sectionType + sectionIndex);

  // For tier-based selection, use higher tier = more variants
  const tierLevel = TIER_MOTION_LEVELS[tier] || 2;
  const maxVariantIndex = Math.min(tierLevel + 1, variants.length);

  return variants[hash % maxVariantIndex];
}

function getMotionLevel(tier) {
  return TIER_MOTION_LEVELS[tier] || 2;
}

function shouldAddNewSections(sectionType, templateTier) {
  const tierLevel = TIER_MOTION_LEVELS[templateTier] || 2;
  // Only advanced and signature tiers get additional sections
  return tierLevel >= 3;
}

function updateSectionWithVariant(section, sectionType, templateSlug, tier, style, sectionIndex, templateCategory) {
  const variant = getVariantForSection(sectionType, templateSlug, tier, style, sectionIndex);
  const motionLevel = getMotionLevel(tier);
  const tierLevel = TIER_MOTION_LEVELS[tier] || 2;

  section.settings = section.settings || {};
  section.settings.variant = variant;
  section.settings.motionLevel = motionLevel;

  // Add background style based on section type and index
  const bgStyles = ['light', 'dark', 'gradient', 'surface'];
  section.settings.backgroundStyle = bgStyles[sectionIndex % bgStyles.length];

  // For higher tiers, add animation preset
  if (tierLevel >= 2 && sectionType !== 'hero-cinematic' && sectionType !== 'hero-section') {
    const animationPresets = ['fadeUp', 'fadeIn', 'subtleSlide'];
    section.settings.animationPreset = animationPresets[sectionIndex % animationPresets.length];
  }

  return section;
}

function updateTemplateSections(config, configPath) {
  const slug = config.slug || path.basename(path.dirname(configPath));
  const tier = config.tier || config.theme?.tier || 'growth';
  const style = config.theme?.style || '';
  const category = config.category || 'business';
  const tierLevel = TIER_MOTION_LEVELS[tier] || 2;

  let sectionsUpdated = 0;

  for (const page of config.pages || []) {
    for (let i = 0; i < page.sections.length; i++) {
      const section = page.sections[i];
      const sectionType = section.type;

      // Update existing section with variant
      updateSectionWithVariant(section, sectionType, slug, tier, style, i, category);
      sectionsUpdated++;

      // For advanced/signature tiers, add additional sections between existing ones
      // This creates richer page compositions
      if (tierLevel >= 3 && sectionType === 'hero-cinematic') {
        // Add logo strip after hero for these tiers
        const logoStripExists = page.sections.some(s => s.type === 'logo-strip');
        if (!logoStripExists) {
          const logoStripSection = {
            id: `logo-strip-${Date.now()}`,
            type: 'logo-strip',
            visible: true,
            sortOrder: i + 0.5,
            content: {
              title: 'Trusted by Industry Leaders',
              logos: []
            },
            settings: {
              variant: tierLevel >= 4 ? 'featured' : 'default',
              backgroundStyle: 'surface',
              motionLevel: tierLevel
            }
          };
          page.sections.push(logoStripSection);
          sectionsUpdated++;
        }
      }

      if (tierLevel >= 4 && sectionType === 'split-media') {
        // Add stats section after split-media for signature tiers
        const statsExists = page.sections.some(s => s.type === 'stats');
        if (!statsExists) {
          const statsSection = {
            id: `stats-${Date.now()}`,
            type: 'stats',
            visible: true,
            sortOrder: i + 0.5,
            content: {
              title: 'Our Impact',
              stats: []
            },
            settings: {
              variant: 'highlight',
              backgroundStyle: 'dark',
              motionLevel: 4
            }
          };
          page.sections.push(statsSection);
          sectionsUpdated++;
        }
      }
    }

    // Sort sections by sortOrder after adding new ones
    page.sections.sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));

    // Renumber sortOrder after sort
    page.sections.forEach((section, idx) => {
      section.sortOrder = idx + 1;
    });
  }

  // Update theme motion level
  config.theme = config.theme || {};
  config.theme.motion = config.theme.motion || {};
  config.theme.motion.level = tierLevel;

  return sectionsUpdated;
}

function updateTemplateConfig(configPath) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const slug = config.slug || path.basename(path.dirname(configPath));
  const tier = config.tier || config.theme?.tier || 'growth';

  const sectionsUpdated = updateTemplateSections(config, configPath);

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

  return { slug, tier, sectionsUpdated };
}

const templatesDir = path.join(__dirname, '../src/templates');
const categories = fs.readdirSync(templatesDir);

let updated = 0;
const results = [];

for (const category of categories) {
  const categoryPath = path.join(templatesDir, category);
  if (!fs.statSync(categoryPath).isDirectory()) continue;

  const configs = fs.readdirSync(categoryPath).filter(f => f === 'config.json');

  for (const configFile of configs) {
    const configPath = path.join(categoryPath, configFile);
    try {
      const result = updateTemplateConfig(configPath);
      results.push(result);
      updated++;
    } catch (err) {
      console.error(`Error updating ${configPath}:`, err.message);
    }
  }
}

console.log(`\n✅ Updated ${updated} templates with section variants`);
console.log('\nSample updates:');
results.slice(0, 5).forEach(r => {
  console.log(`  ${r.slug} (${r.tier}) → ${r.sectionsUpdated} sections configured`);
});

// Summary by tier
const byTier = {};
results.forEach(r => {
  byTier[r.tier] = (byTier[r.tier] || 0) + 1;
});
console.log('\nBy tier:');
Object.entries(byTier).forEach(([tier, count]) => {
  console.log(`  ${tier}: ${count} templates`);
});