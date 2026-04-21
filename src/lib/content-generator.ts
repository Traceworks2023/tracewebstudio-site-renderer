export interface GeneratedContent {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  categories: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  products: Array<{
    id: string;
    name: string;
    price: number;
    description: string;
    badge?: string;
  }>;
  services: Array<{
    id: string;
    name: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    role: string;
    company: string;
    quote: string;
  }>;
  navigation: Array<{
    label: string;
    href: string;
  }>;
  ctas: {
    primary: string;
    secondary: string;
  };
}

const BRAND_NAMES: Record<string, { names: string[]; taglines: string[] }> = {
  business: {
    names: ['Elevate', 'Apex', 'Nova', 'Vertex', 'Zenith', 'Pinnacle', 'Catalyst', 'Momentum', 'Forge', 'Spark', 'Prime', 'Elite', 'Optima', 'Summit', 'Core', 'Fusion', 'Vision', 'Clarity', 'Horizon', 'Pulse'],
    taglines: ['Excellence in Every Detail', 'Building Tomorrow\'s Leaders', 'Innovation Meets Excellence', 'Your Success Partner', 'Solutions That Scale', 'Transforming Businesses', 'Excellence Redefined', 'Where Strategy Meets Results']
  },
  ecommerce: {
    names: ['Luxe', 'Vogue', 'Aura', 'Bloom', 'Crave', 'Dash', 'Eaze', 'Flair', 'Glow', 'Haven', 'Ivory', 'Jade', 'Knox', 'Lush', 'Mira', 'Nova', 'Opal', 'Pixie', 'Reef', 'Sage'],
    taglines: ['Style Within Reach', 'Curated for You', 'Premium Quality', 'Discover Your Style', 'Luxury Made Accessible', 'Where Quality Meets Value', 'Handpicked Favorites', 'The Art of Living Well']
  },
  portfolio: {
    names: ['Atelier', 'Studio', 'Gallery', 'Workshop', 'Collective', 'House', 'Atelier', 'Studio', 'Canvas', 'Craft', 'Design', 'Draft', 'Frame', 'Hue', 'Image', 'Lens', 'Mode', 'Palette', 'Render', 'Sketch'],
    taglines: ['Creating Masterpieces', 'Design That Inspires', 'Artistry in Every Frame', 'Where Creativity Lives', 'Crafting Digital Experiences', 'Design with Purpose', 'Visual Storytelling', 'Innovation Through Design']
  }
};

const CATEGORY_DATA: Record<string, { names: string[]; descriptions: string[] }> = {
  business: {
    names: ['Consulting', 'Strategy', 'Innovation', 'Leadership', 'Growth', 'Digital', 'Marketing', 'Operations', 'Finance', 'HR Solutions'],
    descriptions: ['Expert guidance for your business transformation', 'Strategic planning for sustainable growth', 'Driving innovation in your organization']
  },
  ecommerce: {
    names: ['New Arrivals', 'Best Sellers', 'Collections', 'Sale', 'Accessories', 'Footwear', 'Apparel', 'Electronics', 'Home & Living', 'Beauty'],
    descriptions: ['Fresh styles just for you', 'Customer favorites', 'Curated collections']
  },
  portfolio: {
    names: ['Branding', 'Web Design', 'Photography', 'Illustration', 'UI/UX', 'Motion', 'Print', 'Packaging', 'Typography', '3D Design'],
    descriptions: ['Creative solutions that stand out', 'Design that tells your story', 'Visual identity excellence']
  }
};

const PRODUCT_DATA: Record<string, { names: string[]; descriptions: string[]; priceRange: { min: number; max: number } }> = {
  ecommerce: {
    names: ['Signature Collection', 'Essential Tee', 'Premium Hoodie', 'Classic Jacket', 'Slim Fit Denim', 'Leather Wallet', 'Canvas Tote', 'Sport Watch', 'Sunglasses', 'Running Shoes', 'Designer Bag', 'Silk Scarf'],
    descriptions: ['Premium quality materials', 'Expert craftsmanship', 'Modern design', 'Timeless style'],
    priceRange: { min: 29, max: 499 }
  },
  business: {
    names: ['Strategy Session', 'Consulting Package', 'Workshop', 'Training Program', 'Masterclass', 'Assessment Tool', 'Blueprint', 'Toolkit', 'Guide', 'Course'],
    descriptions: ['Transform your business', 'Expert-led program', 'Proven methodology', 'Actionable insights'],
    priceRange: { min: 99, max: 2999 }
  },
  portfolio: {
    names: ['Brand Identity', 'Website Design', 'Photo Session', 'Logo Package', 'Marketing Kit', 'Social Media Set', 'Print Collateral', 'Packaging Design', 'App Interface', 'Motion Graphics'],
    descriptions: ['Creative excellence', 'Professional quality', 'Bespoke design', 'Premium finish'],
    priceRange: { min: 299, max: 4999 }
  }
};

const SERVICE_DATA: Record<string, { names: string[]; descriptions: string[] }> = {
  business: {
    names: ['Business Consulting', 'Digital Transformation', 'Market Research', 'Brand Strategy', 'Process Optimization', 'Leadership Development', 'Change Management', 'Financial Advisory'],
    descriptions: ['Comprehensive consulting services to drive your business forward', 'Expert guidance from seasoned professionals', 'Customized solutions for your unique challenges']
  },
  portfolio: {
    names: ['Brand Identity', 'Web Development', 'Photography', 'Videography', 'Social Media', 'Content Creation', 'Print Design', 'UI/UX Design'],
    descriptions: ['Creative services tailored to your vision', 'Bringing your brand story to life', 'Professional results that exceed expectations']
  },
  ecommerce: {
    names: ['Personal Shopping', 'Style Consultation', 'Custom Orders', 'Gift Wrapping', 'Express Shipping', 'Returns & Exchanges', 'Size Guide', 'Loyalty Program'],
    descriptions: ['Enhanced shopping experience', 'Personalized service', 'Premium customer care']
  }
};

const FIRST_NAMES = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Quinn', 'Avery', 'Cameron', 'Dakota', 'Emery', 'Finley', 'Harper', 'Jamie', 'Kendall', 'Logan', 'Mackenzie', 'Parker', 'Reese', 'Sage', 'Skyler', 'Sydney', 'Tatum', 'Blake', 'Charlie', 'Drew', 'Ellis', 'Frankie', 'Gray', 'Hayden'];
const LAST_NAMES = ['Anderson', 'Brown', 'Chen', 'Davis', 'Evans', 'Foster', 'Garcia', 'Hayes', 'Irving', 'Johnson', 'Kim', 'Lee', 'Martinez', 'Nelson', 'Owens', 'Patel', 'Quinn', 'Roberts', 'Smith', 'Thompson', 'Upton', 'Valdez', 'Walsh', 'Xu', 'Young', 'Zimmerman'];
const ROLES = ['CEO', 'Founder', 'Director', 'Manager', 'Creative Director', 'Marketing Lead', 'Design Director', 'Head of Product', 'VP of Operations', 'Chief Strategist'];
const COMPANIES = ['TechCorp', 'Innovate Inc', 'Design Studio', 'Creative Agency', 'Digital First', 'BrandWorks', 'NextGen Solutions', 'Visionary Labs', 'Momentum Partners', 'Apex Ventures'];

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

function pick<T>(arr: T[], hash: number): T {
  return arr[hash % arr.length];
}

function pickMultiple<T>(arr: T[], count: number, baseHash: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < count; i++) {
    result.push(arr[(baseHash + i * 7) % arr.length]);
  }
  return result;
}

export function generateUniqueContent(slug: string, templateCategory: string = 'business'): GeneratedContent {
  const hash = hashString(slug);
  const category = templateCategory.toLowerCase();
  
  const brandData = BRAND_NAMES[category] || BRAND_NAMES.business;
  const categoryData = CATEGORY_DATA[category] || CATEGORY_DATA.business;
  const productData = PRODUCT_DATA[category] || PRODUCT_DATA.business;
  const serviceData = SERVICE_DATA[category] || SERVICE_DATA.business;

  const brandName = pick(brandData.names, hash);
  const tagline = pick(brandData.taglines, hash + 1);

  const categories = pickMultiple(
    categoryData.names.map((name, i) => ({
      id: `${name.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
      name,
      description: categoryData.descriptions[i % categoryData.descriptions.length]
    })),
    6,
    hash
  );

  const products = pickMultiple(
    productData.names.map((name, i) => ({
      id: `product-${i + 1}`,
      name,
      price: Math.round((productData.priceRange.min + ((hash * (i + 1)) % (productData.priceRange.max - productData.priceRange.min))) / 10) * 10,
      description: productData.descriptions[i % productData.descriptions.length],
      badge: i === 0 ? 'New' : i === 3 ? 'Popular' : i === 5 ? 'Sale' : undefined
    })),
    8,
    hash
  );

  const services = pickMultiple(
    serviceData.names.map((name, i) => ({
      id: `service-${i + 1}`,
      name,
      description: serviceData.descriptions[i % serviceData.descriptions.length]
    })),
    6,
    hash
  );

  const testimonials = pickMultiple(
    Array.from({ length: 20 }, (_, i) => ({
      name: `${pick(FIRST_NAMES, hash + i * 3)} ${pick(LAST_NAMES, hash + i * 5)}`,
      role: pick(ROLES, hash + i * 7),
      company: pick(COMPANIES, hash + i * 11),
      quote: [
        'Exceptional quality and outstanding service. Will definitely work with them again.',
        'Transformed our business with their innovative solutions. Highly recommended!',
        'Professional, creative, and incredibly efficient. Exceeded all expectations.',
        'The attention to detail is remarkable. They truly understand our needs.',
        'Outstanding results and great communication throughout the project.',
        'A true partner in success. Their expertise is invaluable.',
        'Remarkable creativity and flawless execution. Couldn\'t be happier.',
        'They delivered beyond our expectations. Exceptional work!'
      ][i % 8]
    })),
    4,
    hash
  );

  const navigationLabels = category === 'portfolio' 
    ? ['Home', 'Work', 'Services', 'About', 'Studio', 'Journal', 'Contact']
    : category === 'ecommerce'
    ? ['Home', 'Shop', 'Collections', 'About', 'Contact']
    : ['Home', 'Services', 'About', 'Team', 'Contact'];

  const navigation = navigationLabels.map((label, i) => ({
    label,
    href: `/${label.toLowerCase().replace(/\s+/g, '-')}`
  }));

  const ctaTexts = category === 'portfolio'
    ? { primary: 'View Our Work', secondary: 'Get in Touch' }
    : category === 'ecommerce'
    ? { primary: 'Shop Now', secondary: 'Learn More' }
    : { primary: 'Get Started', secondary: 'Learn More' };

  return {
    brand: {
      name: brandName,
      tagline,
      description: `Welcome to ${brandName}. ${tagline}. We are dedicated to providing exceptional products/services with a focus on quality and customer satisfaction.`
    },
    categories,
    products,
    services,
    testimonials,
    navigation,
    ctas: ctaTexts
  };
}

const SECTION_BG_STYLES = ['light', 'dark', 'gradient', 'surface', 'muted'];

function getSectionBgStyle(sectionIndex: number, sectionType: string): string {
  if (sectionType.includes('hero') || sectionType.includes('Hero')) {
    return 'dark';
  }
  if (sectionType.includes('cta') || sectionType.includes('CTA')) {
    return sectionIndex % 2 === 0 ? 'gradient' : 'dark';
  }
  if (sectionType.includes('newsletter')) {
    return 'gradient';
  }
  if (sectionType.includes('stats')) {
    return sectionIndex % 2 === 0 ? 'dark' : 'gradient';
  }
  if (sectionType.includes('logo-strip')) {
    return 'surface';
  }
  if (sectionType.includes('testimonials')) {
    return sectionIndex % 2 === 0 ? 'light' : 'surface';
  }
  const styleIndex = sectionIndex % 3;
  return SECTION_BG_STYLES[styleIndex];
}

export function applyGeneratedContentToSection(
  section: any,
  content: GeneratedContent,
  sectionType: string,
  sectionIndex: number = 0,
  templateColors?: any
): any {
  const updatedSection = { ...section };
  const bgStyle = getSectionBgStyle(sectionIndex, sectionType);

  updatedSection.settings = {
    ...updatedSection.settings,
    backgroundStyle: bgStyle,
    useDarkText: bgStyle === 'light' || bgStyle === 'surface',
    useDarkBg: bgStyle === 'dark' || bgStyle === 'gradient'
  };

  if (templateColors) {
    updatedSection.settings.themeColors = templateColors;
  }

  if (sectionType === 'category-grid' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: content.brand.tagline,
      categories: content.categories.slice(0, 6).map((cat, i) => ({
        id: cat.id,
        name: cat.name,
        image: section.content.categories?.[i]?.image || `https://picsum.photos/seed/${cat.id}/600/800`,
        itemCount: Math.floor(Math.abs(hashString(cat.id)) % 200) + 10,
        link: `/category/${cat.id}`
      }))
    };
  }

  if (sectionType === 'product-carousel' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Featured Collection',
      products: content.products.slice(0, 6).map((prod, i) => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        badge: prod.badge,
        rating: 4 + (Math.abs(hashString(prod.id)) % 2),
        reviews: Math.floor(Math.abs(hashString(prod.id + 'rev')) % 500) + 20,
        image: section.content.products?.[i]?.image || `https://picsum.photos/seed/${prod.id}/400/400`
      }))
    };
  }

  if (sectionType === 'product-grid' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Shop All Products',
      subtitle: 'Browse our complete collection',
      products: content.products.slice(0, 12).map((prod, i) => ({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        originalPrice: prod.badge === 'Sale' ? Math.round(prod.price * 1.25) : undefined,
        badge: prod.badge,
        rating: 4 + (Math.abs(hashString(prod.id)) % 2),
        reviews: Math.floor(Math.abs(hashString(prod.id + 'rev')) % 500) + 20,
        category: content.categories[i % content.categories.length]?.id || 'all',
        image: section.content.products?.[i]?.image || `https://picsum.photos/seed/${prod.id}/400/400`,
        link: `/product/${prod.id}`
      })),
      categories: content.categories.slice(0, 6).map((cat) => ({
        id: cat.id,
        label: cat.name,
        count: Math.floor(Math.abs(hashString(cat.id)) % 50) + 10
      })),
      activeCategory: 'all',
      productsPerPage: 12
    };
  }

  if (sectionType === 'collection-grid' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Shop by Collection',
      subtitle: 'Explore curated collections for every style',
      collections: content.categories.slice(0, 6).map((cat, i) => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        image: section.content.collections?.[i]?.image || `https://picsum.photos/seed/${cat.id}/600/800`,
        itemCount: Math.floor(Math.abs(hashString(cat.id)) % 100) + 20,
        link: `/collection/${cat.id}`
      }))
    };
  }

  if (sectionType === 'testimonials-slider' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'What Our Clients Say',
      testimonials: content.testimonials.slice(0, 4).map((test, i) => ({
        ...test,
        image: section.content.testimonials?.[i]?.image || `https://i.pravatar.cc/100?u=${test.name.replace(/\s+/g, '')}`
      }))
    };
  }

  if (sectionType === 'cta-banner' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: `Ready to ${content.ctas.primary.toLowerCase()}?`,
      ctaText: content.ctas.primary,
      secondaryCtaText: content.ctas.secondary
    };
  }

  if (sectionType === 'hero-cinematic' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: content.brand.name,
      subtitle: content.brand.tagline,
      ctaText: content.ctas.primary
    };
  }

  if (sectionType === 'hero-editorial' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: content.brand.name,
      subtitle: content.brand.tagline,
      description: content.brand.description,
      ctaText: content.ctas.primary,
      secondaryCtaText: content.ctas.secondary
    };
  }

  if (sectionType === 'split-media' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: content.services[0]?.name || 'Our Services',
      description: content.services[0]?.description || content.brand.description
    };
  }

  if (sectionType === 'newsletter' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Stay Updated',
      subtitle: `Subscribe to ${content.brand.name} news and exclusive offers.`
    };
  }

  if (sectionType === 'gallery-grid' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: `${content.brand.name} Portfolio`
    };
  }

  if (sectionType === 'contact-form' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: `Contact ${content.brand.name}`
    };
  }

  if (sectionType === 'features' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: `Why Choose ${content.brand.name}`,
      subtitle: 'Everything you need to succeed',
      features: content.services.slice(0, 4).map((svc, i) => ({
        icon: ['🚀', '🎨', '📱', '🔒'][i] || '✓',
        title: svc.name,
        description: svc.description
      }))
    };
  }

  if (sectionType === 'faq' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions',
      faqs: [
        { question: 'How do I get started?', answer: 'Simply sign up for a free account and you can start building immediately. No credit card required.' },
        { question: 'Can I use my own domain?', answer: 'Yes! You can connect any domain you own to your website. We provide free SSL certificates.' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.' },
        { question: 'Can I cancel anytime?', answer: 'Yes, you can cancel your subscription at any time. No long-term contracts required.' },
        { question: 'Do you offer support?', answer: 'We offer 24/7 email support for all plans. Priority support available for professional accounts.' }
      ]
    };
  }

  if (sectionType === 'stats' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Our Impact',
      subtitle: 'Key metrics that define our success',
      stats: [
        { value: '500', suffix: '+', label: 'Projects Completed' },
        { value: '98', suffix: '%', label: 'Client Satisfaction' },
        { value: '15', suffix: '+', label: 'Years Experience' },
        { value: '50', suffix: '+', label: 'Team Members' }
      ]
    };
  }

  if (sectionType === 'logo-strip' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'Trusted by Industry Leaders',
      subtitle: 'Partnering with brands that share our vision',
      logos: content.categories.slice(0, 6).map((cat) => ({
        name: cat.name,
        image: `https://picsum.photos/seed/${cat.id}/200/80`
      }))
    };
  }

  if (sectionType === 'testimonials' && section.content) {
    updatedSection.content = {
      ...section.content,
      title: 'What Our Clients Say',
      subtitle: 'Join thousands of satisfied customers',
      testimonials: content.testimonials.slice(0, 3).map((test, i) => ({
        name: test.name,
        role: test.role,
        company: test.company,
        quote: test.quote,
        rating: 5
      }))
    };
  }

  return updatedSection;
}