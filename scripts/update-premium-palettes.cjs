const fs = require('fs');
const path = require('path');
const { BUSINESS_CATEGORY_PALETTES } = require('./business-categories-palettes.cjs');

const PREMIUM_PALETTES = BUSINESS_CATEGORY_PALETTES;

const FONT_COMBINATIONS = [
  { heading: 'Playfair Display', body: 'Source Sans 3' },
  { heading: 'Cormorant Garamond', body: 'Manrope' },
  { heading: 'DM Serif Display', body: 'DM Sans' },
  { heading: 'Libre Baskerville', body: 'Inter' },
  { heading: 'Raleway', body: 'Poppins' },
  { heading: 'Josefin Sans', body: 'Nunito Sans' },
  { heading: 'Abril Fatface', body: 'Poppins' },
  { heading: 'Bebas Neue', body: 'Montserrat' },
  { heading: 'Cinzel', body: 'Raleway' },
  { heading: 'Archivo', body: 'Karla' },
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function getCategoryFromSlug(slug) {
  const lower = slug.toLowerCase();

  // Special categories first
  if (lower.includes('architect') || lower.includes('interior')) return 'architect';
  if (lower.includes('agency')) return 'agency';
  if (lower.includes('beauty')) return 'beauty';
  if (lower.includes('shop') || lower.includes('store') || lower.includes('ecom')) return 'ecommerce';
  if (lower.includes('portfolio')) return 'portfolio';

  // Retail & Ecommerce
  if (lower.includes('fashion')) return 'fashion';
  if (lower.includes('footwear') || lower.includes('shoes')) return 'footwear';
  if (lower.includes('jewel')) return 'jewelry';
  if (lower.includes('watch')) return 'watches';
  if (lower.includes('cosmetic')) return 'cosmetics';
  if (lower.includes('skincare')) return 'skincare';
  if (lower.includes('haircare') || lower.includes('hair')) return 'haircare';
  if (lower.includes('perfume') || lower.includes('fragrance')) return 'perfumes';
  if (lower.includes('electronic')) return 'electronics';
  if (lower.includes('mobile') || lower.includes('phone')) return 'mobile';
  if (lower.includes('computer') || lower.includes('laptop')) return 'computers';
  if (lower.includes('appliance')) return 'appliances';
  if (lower.includes('furniture')) return 'furniture';
  if (lower.includes('home-decor') || lower.includes('homedecor')) return 'homedecor';
  if (lower.includes('kitchen')) return 'kitchen';
  if (lower.includes('toy')) return 'toys';
  if (lower.includes('baby')) return 'baby';
  if (lower.includes('sport')) return 'sports';
  if (lower.includes('book')) return 'books';
  if (lower.includes('gift')) return 'gifts';
  if (lower.includes('pet')) return 'pets';
  if (lower.includes('grocery')) return 'grocery';
  if (lower.includes('organic')) return 'organic';
  if (lower.includes('pharmacy') || lower.includes('pharmac')) return 'pharmacy';
  if (lower.includes('auto-part') || lower.includes('autopart')) return 'autoparts';

  // Food & Beverage
  if (lower.includes('restaurant') || lower.includes('cafe') || lower.includes('bakery') || lower.includes('food')) return 'restaurant';
  if (lower.includes('sweet') || lower.includes('candy')) return 'sweetshop';
  if (lower.includes('ice-cream') || lower.includes('icecream')) return 'icecream';
  if (lower.includes('juice') || lower.includes('smoothie')) return 'juicebar';
  if (lower.includes('fast-food') || lower.includes('fastfood')) return 'fastfood';
  if (lower.includes('fine-dining') || lower.includes('finedining')) return 'finedining';
  if (lower.includes('cloud-kitchen') || lower.includes('cloudkitchen')) return 'cloudkitchen';
  if (lower.includes('catering')) return 'catering';
  if (lower.includes('bar') || lower.includes('lounge') || lower.includes('pub')) return 'bar';
  if (lower.includes('tea')) return 'teashop';
  if (lower.includes('health-food') || lower.includes('healthfood')) return 'healthfood';

  // Health & Wellness
  if (lower.includes('clinic') || lower.includes('hospital') || lower.includes('medical') || lower.includes('health')) return 'clinic';
  if (lower.includes('dental') || lower.includes('dentist')) return 'dental';
  if (lower.includes('eye') || lower.includes('optical') || lower.includes('optometrist')) return 'eyeclinic';
  if (lower.includes('physiotherapy') || lower.includes('physio')) return 'physiotherapy';
  if (lower.includes('diagnostic') || lower.includes('lab')) return 'diagnostic';
  if (lower.includes('gym') || lower.includes('fitness') || lower.includes('workout')) return 'gym';
  if (lower.includes('yoga')) return 'yoga';
  if (lower.includes('meditation')) return 'meditation';
  if (lower.includes('nutritionist') || lower.includes('dietitian') || lower.includes('diet')) return 'nutritionist';
  if (lower.includes('mental') || lower.includes('therapy') || lower.includes('counsel')) return 'mentalwellness';
  if (lower.includes('rehab') || lower.includes('rehabilitation')) return 'rehabilitation';

  // Beauty & Personal Care
  if (lower.includes('salon') || lower.includes('spa')) return 'salon';
  if (lower.includes('barber')) return 'barber';
  if (lower.includes('makeup')) return 'makeupartist';
  if (lower.includes('nail')) return 'nailstudio';
  if (lower.includes('bridal')) return 'bridalservices';
  if (lower.includes('beauty-clinic') || lower.includes('beautyclinic')) return 'beautyclinic';
  if (lower.includes('tattoo')) return 'tattoo';
  if (lower.includes('massage')) return 'massagecenter';
  if (lower.includes('grooming')) return 'groomingservices';

  // Professional Services
  if (lower.includes('corporate') || lower.includes('business')) return 'corporate';
  if (lower.includes('accounting') || lower.includes('accountant')) return 'accounting';
  if (lower.includes('tax')) return 'tax';
  if (lower.includes('audit')) return 'audit';
  if (lower.includes('business-consultant') || lower.includes('businessconsultant')) return 'businessconsultant';
  if (lower.includes('financial-advisor') || lower.includes('financialadvisor')) return 'financialadvisor';
  if (lower.includes('insurance')) return 'insurance';
  if (lower.includes('real-estate-consultant') || lower.includes('realestateconsultant')) return 'realestateconsultant';
  if (lower.includes('marketing')) return 'marketing';
  if (lower.includes('branding')) return 'branding';
  if (lower.includes('hr') || lower.includes('recruitment') || lower.includes('recruiter')) return 'hr';
  if (lower.includes('law') || lower.includes('legal') || lower.includes('attorney') || lower.includes('lawyer')) return 'law';

  // Technology & Digital
  if (lower.includes('technology') || lower.includes('tech')) return 'technology';
  if (lower.includes('software')) return 'software';
  if (lower.includes('saas')) return 'saas';
  if (lower.includes('web-dev') || lower.includes('webdev') || lower.includes('web development')) return 'webdev';
  if (lower.includes('app-dev') || lower.includes('appdev') || lower.includes('mobile development')) return 'appdev';
  if (lower.includes('ui-ux') || lower.includes('uiux') || lower.includes('design agency')) return 'uiux';
  if (lower.includes('it-service') || lower.includes('itservice') || lower.includes('it support')) return 'itservices';
  if (lower.includes('cyber') || lower.includes('security')) return 'cybersecurity';
  if (lower.includes('cloud')) return 'cloud';
  if (lower.includes('hosting')) return 'hosting';
  if (lower.includes('seo')) return 'seo';
  if (lower.includes('social-media') || lower.includes('socialmedia')) return 'socialmedia';
  if (lower.includes('ai') || lower.includes('artificial intelligence')) return 'ai';
  if (lower.includes('data-analytic') || lower.includes('dataanalytic') || lower.includes('analytics')) return 'dataanalytics';

  // Education & Training
  if (lower.includes('education') || lower.includes('institute')) return 'education';
  if (lower.includes('school')) return 'school';
  if (lower.includes('college')) return 'college';
  if (lower.includes('university')) return 'university';
  if (lower.includes('coaching')) return 'coaching';
  if (lower.includes('online-course') || lower.includes('onlinecourse') || lower.includes('elearning')) return 'onlinecourse';
  if (lower.includes('edtech')) return 'edtech';

  // Home & Local Services
  if (lower.includes('cleaning')) return 'cleaning';
  if (lower.includes('plumbing') || lower.includes('plumber')) return 'plumbing';
  if (lower.includes('electrical') || lower.includes('electrician')) return 'electrical';
  if (lower.includes('carpentry') || lower.includes('carpenter')) return 'carpentry';
  if (lower.includes('painting') || lower.includes('painter')) return 'painting';
  if (lower.includes('gardening') || lower.includes('landscaping')) return 'gardening';
  if (lower.includes('security')) return 'securityservices';
  if (lower.includes('mover') || lower.includes('moving')) return 'movers';

  // Construction & Real Estate
  if (lower.includes('construction') || lower.includes('builders') || lower.includes('contractor')) return 'construction';
  if (lower.includes('real-estate') || lower.includes('property')) return 'realestate';
  if (lower.includes('architecture') || lower.includes('architect')) return 'architecture';
  if (lower.includes('interior-design') || lower.includes('interiordesign')) return 'interiordesignfirm';
  if (lower.includes('coworking') || lower.includes('cowork')) return 'coworking';

  // Automotive
  if (lower.includes('auto') || lower.includes('car') || lower.includes('vehicle')) return 'automotive';
  if (lower.includes('car-dealer') || lower.includes('carDealer')) return 'carDealer';
  if (lower.includes('auto-repair') || lower.includes('autoRepair') || lower.includes('garage')) return 'autoRepair';
  if (lower.includes('ev-charging') || lower.includes('evCharging') || lower.includes('charging')) return 'evCharging';

  // Travel & Hospitality
  if (lower.includes('hotel') || lower.includes('resort') || lower.includes('hospitality')) return 'hotel';
  if (lower.includes('travel') || lower.includes('tourism') || lower.includes('tour')) return 'travel';
  if (lower.includes('villa')) return 'villaRental';
  if (lower.includes('tour-operator') || lower.includes('tourOperator')) return 'tourOperator';

  // Events & Entertainment
  if (lower.includes('event') || lower.includes('party')) return 'event';
  if (lower.includes('wedding') || lower.includes('wedding-planner')) return 'weddingPlanning';
  if (lower.includes('photograph')) return 'photography';

  // Finance & Insurance
  if (lower.includes('finance') || lower.includes('investment')) return 'finance';
  if (lower.includes('bank') || lower.includes('banking')) return 'banking';
  if (lower.includes('fintech')) return 'fintech';

  // Manufacturing & Industrial
  if (lower.includes('textile') || lower.includes('fabric')) return 'textile';
  if (lower.includes('packaging')) return 'packaging';
  if (lower.includes('wholesale')) return 'wholesale';

  // Agriculture
  if (lower.includes('farm') || lower.includes('farming')) return 'farming';
  if (lower.includes('dairy')) return 'dairyFarm';

  // Logistics
  if (lower.includes('courier') || lower.includes('delivery')) return 'courier';
  if (lower.includes('logistic')) return 'logisticsCompany';

  // Media & Creative
  if (lower.includes('advertising') || lower.includes('ad agency')) return 'advertising';
  if (lower.includes('design-studio') || lower.includes('designStudio')) return 'designStudio';
  if (lower.includes('animation')) return 'animationStudio';

  // Community
  if (lower.includes('nonprofit') || lower.includes('non-profit')) return 'nonprofit';
  if (lower.includes('charity')) return 'charity';

  // Miscellaneous
  if (lower.includes('franchise')) return 'franchise';
  if (lower.includes('sustainability') || lower.includes('eco')) return 'sustainability';

  return 'default';
}

function selectPalette(slug, category) {
  const palettes = PREMIUM_PALETTES[category] || PREMIUM_PALETTES.default;
  const hash = hashString(slug);
  return palettes[hash % palettes.length];
}

function selectFonts(slug) {
  const hash = hashString(slug);
  return FONT_COMBINATIONS[hash % FONT_COMBINATIONS.length];
}

function updateTemplateConfig(configPath) {
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  const slug = config.slug || path.basename(path.dirname(configPath));
  const category = getCategoryFromSlug(slug);
  
  const palette = selectPalette(slug, category);
  const fonts = selectFonts(slug);
  
  config.theme = {
    ...config.theme,
    colors: {
      primary: palette.primary,
      secondary: palette.secondary || palette.primary,
      accent: palette.accent,
      background: palette.background,
      surface: palette.surface,
      text: palette.text,
      textMuted: palette.textMuted || palette.text,
    },
    fonts: {
      heading: fonts.heading,
      body: fonts.body
    }
  };
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  return { slug, category, palette: palette.name, fonts };
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

console.log(`\n✅ Updated ${updated} templates with premium palettes`);
console.log('\nSample updates:');
results.slice(0, 5).forEach(r => {
  console.log(`  ${r.slug} (${r.category}) → ${r.palette} + ${r.fonts.heading}/${r.fonts.body}`);
});