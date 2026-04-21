import fs from 'fs';
import path from 'path';

export const prerender = false;

const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');

interface TemplateSummary {
  id: string;
  name: string;
  slug: string;
  category: string;
  tier: string;
  style: string;
  description: string;
  thumbnail_url: string;
  is_published: boolean;
  supported_pages: string[];
  default_sections: string[];
  plan_visibility: string[];
  supports_commerce: boolean;
}

function parseTemplateSlug(slug: string): { family: string; tier: string; style: string } {
  const parts = slug.split('-');
  const family = parts[0];
  const tier = parts[1] || 'starter';
  const style = parts.slice(2).join('-') || 'minimal';
  return { family, tier, style };
}

function getCategoryFromFamily(family: string): string {
  const categories: Record<string, string> = {
    'beauty': 'ecommerce',
    'books-stationery': 'ecommerce',
    'electronics': 'ecommerce',
    'fashion': 'ecommerce',
    'furniture': 'ecommerce',
    'gifts': 'ecommerce',
    'grocery': 'ecommerce',
    'home-decor': 'ecommerce',
    'jewelry': 'ecommerce',
    'pet-store': 'ecommerce',
    'pharmacy': 'ecommerce',
    'single-product': 'ecommerce',
    'agency-portfolio': 'portfolio',
    'architect-interior': 'portfolio',
    'coach-personal-brand': 'portfolio',
    'designer': 'portfolio',
    'developer-freelancer': 'portfolio',
    'makeup-artist': 'portfolio',
    'photographer': 'portfolio',
    'videographer': 'portfolio',
    'clinic-hospital': 'business',
    'construction-builders': 'business',
    'consulting-accounting': 'business',
    'corporate-b2b': 'business',
    'education-institute': 'business',
    'event-management': 'business',
    'gym-fitness': 'business',
    'hotel-resort': 'business',
    'law-firm': 'business',
    'real-estate': 'business',
    'restaurant-cafe': 'business',
    'salon-spa': 'business',
    'travel-agency': 'business',
  };
  return categories[family] || 'business';
}

function slugToName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export async function GET() {
  try {
    const entries = fs.readdirSync(TEMPLATES_DIR, { withFileTypes: true });
    const templates: TemplateSummary[] = [];

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const configPath = path.join(TEMPLATES_DIR, entry.name, 'config.json');
        
        if (fs.existsSync(configPath)) {
          try {
            const configContent = fs.readFileSync(configPath, 'utf-8');
            const config = JSON.parse(configContent);
            const { family, tier, style } = parseTemplateSlug(entry.name);
            
            templates.push({
              id: config.id || entry.name,
              name: config.name || slugToName(entry.name),
              slug: entry.name,
              category: config.category || getCategoryFromFamily(family),
              tier,
              style,
              description: config.description || `${tier.charAt(0).toUpperCase() + tier.slice(1)} ${style} template`,
              thumbnail_url: config.thumbnail_url || `/previews/${entry.name}.jpg`,
              is_published: config.is_published ?? true,
              supported_pages: config.supported_pages || ['home', 'about', 'contact', 'product', 'category', 'cart', 'checkout'],
              default_sections: config.default_sections || ['hero-cinematic', 'category-grid', 'product-carousel'],
              plan_visibility: config.plan_visibility || ['starter', 'growth', 'enterprise'],
              supports_commerce: config.supports_commerce ?? ['fashion', 'beauty', 'electronics', 'grocery', 'jewelry', 'pharmacy'].includes(family),
            });
          } catch (e) {
            console.error(`Failed to parse config for ${entry.name}:`, e);
          }
        }
      }
    }

    return new Response(JSON.stringify(templates), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (e) {
    console.error('Failed to list templates:', e);
    return new Response(JSON.stringify({ error: 'Failed to list templates' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}