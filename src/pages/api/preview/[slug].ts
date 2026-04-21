import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const prerender = false;

const TEMPLATES_DIR = '/Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/templates';

export const GET: APIRoute = async ({ params, request }) => {
  const slug = params.slug || '';

  // Load template directly
  const configPath = path.join(TEMPLATES_DIR, slug, 'config.json');

  if (!fs.existsSync(configPath)) {
    return new Response('Template not found', { status: 404 });
  }

  const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  const template = config;

  if (!template) {
    return new Response('Template not found', { status: 404 });
  }

  const colors = template.theme?.colors || {};
  const primary = colors.primary || '#000032';
  const secondary = colors.secondary || '#333333';
  const accent = colors.accent || '#FA5014';
  const background = colors.background || '#ffffff';
  const text = colors.text || '#1a1a1a';
  const fonts = template.theme?.fonts || { heading: 'Playfair Display', body: 'Inter' };

  const categoryColors: Record<string, string> = {
    ecommerce: '#10b981',
    portfolio: '#8b5cf6',
    business: '#3b82f6',
  };
  const categoryColor = categoryColors[template.category] || '#6b7280';

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=${fonts.heading.replace(/ /g, '+')}:wght@400;600;700&amp;family=${fonts.body.replace(/ /g, '+')}:wght@400;500&amp;display=swap');
    </style>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${primary};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${secondary};stop-opacity:1" />
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="${background}"/>

  <!-- Header Bar -->
  <rect width="1200" height="60" fill="url(#bg)"/>
  <text x="40" y="40" font-family="${fonts.heading}, serif" font-size="20" font-weight="600" fill="white">${template.name}</text>
  <rect x="1050" y="15" width="110" height="30" rx="15" fill="${accent}"/>
  <text x="1110" y="35" font-family="${fonts.body}, sans-serif" font-size="12" font-weight="500" fill="white" text-anchor="middle">Preview</text>

  <!-- Category Badge -->
  <rect x="40" y="90" width="100" height="28" rx="14" fill="${categoryColor}"/>
  <text x="90" y="109" font-family="${fonts.body}, sans-serif" font-size="12" font-weight="500" fill="white" text-anchor="middle">${template.category}</text>

  <!-- Tier Badge -->
  <rect x="150" y="90" width="80" height="28" rx="14" fill="${primary}"/>
  <text x="190" y="109" font-family="${fonts.body}, sans-serif" font-size="12" font-weight="500" fill="white" text-anchor="middle">${template.tier}</text>

  <!-- Hero Section Mockup -->
  <rect x="40" y="140" width="720" height="300" rx="8" fill="${primary}" opacity="0.05"/>
  <rect x="60" y="160" width="300" height="40" rx="4" fill="${primary}" opacity="0.3"/>
  <rect x="60" y="210" width="200" height="20" rx="4" fill="${secondary}" opacity="0.2"/>
  <rect x="60" y="240" width="680" height="16" rx="4" fill="${secondary}" opacity="0.1"/>
  <rect x="60" y="265" width="600" height="16" rx="4" fill="${secondary}" opacity="0.1"/>
  <rect x="60" y="300" width="150" height="40" rx="20" fill="${accent}"/>
  <rect x="560" y="180" width="180" height="220" rx="8" fill="${primary}" opacity="0.1"/>

  <!-- Content Cards Mockup -->
  <rect x="40" y="460" width="350" height="150" rx="8" fill="white" stroke="${primary}" stroke-width="2" opacity="0.8"/>
  <rect x="60" y="480" width="100" height="60" rx="4" fill="${primary}" opacity="0.1"/>
  <rect x="60" y="550" width="200" height="16" rx="4" fill="${secondary}" opacity="0.2"/>
  <rect x="60" y="575" width="150" height="12" rx="4" fill="${secondary}" opacity="0.1"/>

  <rect x="410" y="460" width="350" height="150" rx="8" fill="white" stroke="${accent}" stroke-width="2" opacity="0.8"/>
  <rect x="430" y="480" width="100" height="60" rx="4" fill="${accent}" opacity="0.2"/>
  <rect x="430" y="550" width="200" height="16" rx="4" fill="${secondary}" opacity="0.2"/>
  <rect x="430" y="575" width="150" height="12" rx="4" fill="${secondary}" opacity="0.1"/>

  <rect x="780" y="460" width="350" height="150" rx="8" fill="white" stroke="${categoryColor}" stroke-width="2" opacity="0.8"/>
  <rect x="800" y="480" width="100" height="60" rx="4" fill="${categoryColor}" opacity="0.2"/>
  <rect x="800" y="550" width="200" height="16" rx="4" fill="${secondary}" opacity="0.2"/>
  <rect x="800" y="575" width="150" height="12" rx="4" fill="${secondary}" opacity="0.1"/>

  <!-- Footer Mockup -->
  <rect x="40" y="640" width="1120" height="120" rx="8" fill="${primary}" opacity="0.05"/>
  <rect x="60" y="660" width="200" height="20" rx="4" fill="${primary}" opacity="0.3"/>
  <rect x="60" y="690" width="300" height="12" rx="4" fill="${secondary}" opacity="0.1"/>
  <rect x="60" y="710" width="250" height="12" rx="4" fill="${secondary}" opacity="0.1"/>

  <!-- Color Palette -->
  <text x="900" y="670" font-family="${fonts.body}, sans-serif" font-size="14" font-weight="600" fill="${text}">Theme Colors</text>
  <rect x="900" y="685" width="40" height="40" rx="4" fill="${primary}"/>
  <rect x="950" y="685" width="40" height="40" rx="4" fill="${secondary}"/>
  <rect x="1000" y="685" width="40" height="40" rx="4" fill="${accent}"/>
  <rect x="1050" y="685" width="40" height="40" rx="4" fill="${background}" stroke="#e5e5e5"/>
  <rect x="1100" y="685" width="40" height="40" rx="4" fill="${text}"/>

  <!-- Brand -->
  <text x="40" y="780" font-family="${fonts.body}, sans-serif" font-size="12" fill="${text}" opacity="0.5">Powered by Tracewebstudio</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
