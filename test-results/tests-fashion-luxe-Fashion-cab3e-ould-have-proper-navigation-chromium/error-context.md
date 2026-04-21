# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/fashion-luxe.spec.ts >> Fashion Luxe Template >> should have proper navigation
- Location: tests/fashion-luxe.spec.ts:8:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=New Arrivals')
Expected: visible
Error: strict mode violation: locator('text=New Arrivals') resolved to 2 elements:
    1) <span> 'New Arrivals'</span> aka getByText('\'New Arrivals\'', { exact: true })
    2) <span class="line">…</span> aka getByText('title: \'New Arrivals\'')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=New Arrivals')

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - checkbox "Use dark theme" [ref=e6]
    - generic [ref=e7] [cursor=pointer]:
      - img [ref=e8]
      - img [ref=e12]
      - generic [ref=e16]: Use dark theme
  - banner [ref=e17]:
    - generic [ref=e18]:
      - heading "FailedToLoadModuleSSR" [level=2] [ref=e19]
      - heading "Could not import file." [level=1] [ref=e20]
    - img [ref=e23]
  - generic [ref=e26]:
    - generic [ref=e27]:
      - img [ref=e29]
      - generic [ref=e31]:
        - text: Could not import
        - code [ref=e32]: ../../templates/fashion-luxe/sections/HeroSection.astro
        - text: .
      - link "See Docs Reference" [ref=e34] [cursor=pointer]:
        - /url: https://docs.astro.build/en/reference/errors/failed-to-load-module-ssr/
        - text: See Docs Reference
        - img [ref=e35]
    - generic [ref=e38]:
      - img [ref=e40]
      - generic [ref=e42]: This is often caused by a typo in the import path. Please make sure the file exists.
  - generic [ref=e43]:
    - generic [ref=e44]:
      - heading "fashion-luxe/index.astro:3:25" [level=2] [ref=e45]
      - button "Open in editor" [ref=e47]:
        - text: Open in editor
        - img [ref=e48]
    - code [ref=e53]:
      - generic [ref=e54]: "---"
      - generic [ref=e55]: // Fashion Luxe Homepage
      - generic [ref=e56]: import HeroSection from '../../templates/fashion-luxe/sections/HeroSection.astro';
      - generic [ref=e57]: ^
      - generic [ref=e58]: import FeaturedCategories from '../../templates/fashion-luxe/sections/FeaturedCategories.astro';
      - generic [ref=e59]: import FeaturedProducts from '../../templates/fashion-luxe/sections/FeaturedProducts.astro';
      - generic [ref=e60]: import PromoBanner from '../../templates/fashion-luxe/sections/PromoBanner.astro';
      - generic [ref=e61]: import TrustIndicators from '../../templates/fashion-luxe/sections/TrustIndicators.astro';
      - generic [ref=e62]: import NewsletterSection from '../../templates/fashion-luxe/sections/NewsletterSection.astro';
      - generic [ref=e63]: import FooterSection from '../../templates/fashion-luxe/sections/FooterSection.astro';
      - generic [ref=e64]: import Header from '../../templates/fashion-luxe/sections/Header.astro';
      - generic [ref=e65]: "import { fetchSiteBySlug, fetchPageContent } from '../../lib/api';"
      - generic [ref=e67]: const siteSlug = 'demo';
      - generic [ref=e68]: const site = await fetchSiteBySlug(siteSlug);
      - generic [ref=e69]: const siteId = site?.id || 'demo-site';
      - generic [ref=e71]: const pageContent = await fetchPageContent(siteId, 'home');
      - generic [ref=e72]: "const heroContent = pageContent?.content || {};"
      - generic [ref=e74]: "const siteConfig = {"
      - generic [ref=e75]: "site_id: siteId,"
      - generic [ref=e76]: "site_name: site?.name || 'LUXE',"
      - generic [ref=e77]: "site_tagline: 'Premium Fashion & Accessories',"
      - generic [ref=e78]: "logo_url: '',"
      - generic [ref=e79]: "theme: {"
      - generic [ref=e80]: "mode: 'light' as const,"
      - generic [ref=e81]: "primary_color: '#000000',"
      - generic [ref=e82]: "secondary_color: '#333333',"
      - generic [ref=e83]: "accent_color: '#FA5014',"
      - generic [ref=e84]: "background_color: '#FFFFFF',"
      - generic [ref=e85]: "surface_color: '#F9FAFB',"
      - generic [ref=e86]: "text_primary: '#111827',"
      - generic [ref=e87]: "text_secondary: '#6B7280',"
      - generic [ref=e88]: "border_color: '#E5E7EB'"
      - generic [ref=e89]: "},"
      - generic [ref=e90]: "navigation: ["
      - generic [ref=e91]: "{ id: '1', label: 'New Arrivals', url: '/new', is_visible: true },"
      - generic [ref=e92]: "{ id: '2', label: 'Women', url: '/category/women', is_visible: true },"
      - generic [ref=e93]: "{ id: '3', label: 'Men', url: '/category/men', is_visible: true },"
      - generic [ref=e94]: "{ id: '4', label: 'Accessories', url: '/category/accessories', is_visible: true },"
      - generic [ref=e95]: "{ id: '5', label: 'Sale', url: '/sale', is_visible: true }"
      - generic [ref=e96]: "]"
      - generic [ref=e97]: "};"
      - generic [ref=e98]: "---"
      - generic [ref=e100]: <!DOCTYPE html>
      - generic [ref=e101]: <html lang="en">
      - generic [ref=e102]: <head>
      - generic [ref=e103]: <meta charset="UTF-8">
      - generic [ref=e104]: <meta name="viewport" content="width=device-width, initial-scale=1.0">
      - generic [ref=e105]: "<title>{siteConfig.site_name} - {siteConfig.site_tagline}</title>"
      - generic [ref=e106]: <meta name="description" content="Discover our curated collection of premium fashion and accessories">
      - generic [ref=e108]: <link rel="preconnect" href="https://fonts.googleapis.com">
      - generic [ref=e109]: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      - generic [ref=e110]: <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      - generic [ref=e112]: <script src="https://cdn.tailwindcss.com"></script>
      - generic [ref=e114]: <style>
      - generic [ref=e115]: "* { margin: 0; padding: 0; box-sizing: border-box; }"
      - generic [ref=e116]: "body { font-family: 'Inter', sans-serif; }"
      - generic [ref=e117]: "h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }"
      - generic [ref=e118]: </style>
      - generic [ref=e119]: </head>
      - generic [ref=e120]: <body class="min-h-screen flex flex-col">
      - generic [ref=e121]: "<Header siteConfig={siteConfig} />"
      - generic [ref=e123]: <main class="flex-1">
      - generic [ref=e124]: "<HeroSection content={{"
      - generic [ref=e125]: "heading: heroContent.hero_title || 'Elevate Your Style',"
      - generic [ref=e126]: "subheading: heroContent.hero_subtitle || 'Discover the latest collection of premium fashion and accessories',"
      - generic [ref=e127]: "cta_text: heroContent.hero_button_text || 'Shop Now',"
      - generic [ref=e128]: "cta_url: '/fashion-luxe/products',"
      - generic [ref=e129]: "background_image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920',"
      - generic [ref=e130]: "overlay_opacity: 0.5,"
      - generic [ref=e131]: "text_alignment: 'center',"
      - generic [ref=e132]: "height: 'large'"
      - generic [ref=e133]: "}} />"
      - generic [ref=e135]: "<FeaturedCategories content={{"
      - generic [ref=e136]: "title: heroContent.categories_title || 'Shop by Category',"
      - generic [ref=e137]: "columns: 4,"
      - generic [ref=e138]: "categories: ["
      - generic [ref=e139]: "{ name: 'Women', slug: 'women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600' },"
      - generic [ref=e140]: "{ name: 'Men', slug: 'men', image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600' },"
      - generic [ref=e141]: "{ name: 'Accessories', slug: 'accessories', image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600' },"
      - generic [ref=e142]: "{ name: 'Shoes', slug: 'shoes', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600' }"
      - generic [ref=e143]: "]"
      - generic [ref=e144]: "}} />"
      - generic [ref=e146]: "<FeaturedProducts content={{"
      - generic [ref=e147]: "title: heroContent.featured_products_title || 'Featured Products',"
      - generic [ref=e148]: "subtitle: 'Our most loved pieces this season',"
      - generic [ref=e149]: "columns: 4,"
      - generic [ref=e150]: "show_prices: true,"
      - generic [ref=e151]: "show_ratings: true,"
      - generic [ref=e152]: "products: ["
      - generic [ref=e153]: "{ id: '1', name: 'Elegant Silk Dress', price: 4999, original_price: 7999, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', badge: '50% OFF', rating: 4.5 },"
      - generic [ref=e154]: "{ id: '2', name: 'Designer Handbag', price: 4999, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400', badge: 'NEW', rating: 4.8 },"
      - generic [ref=e155]: "{ id: '3', name: 'Classic Watch', price: 7999, original_price: 9999, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', badge: 'BESTSELLER', rating: 4.6 },"
      - generic [ref=e156]: "{ id: '4', name: 'Gold Necklace', price: 12999, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400', rating: 4.9 }"
      - generic [ref=e157]: "]"
      - generic [ref=e158]: "}} />"
      - generic [ref=e160]: "<PromoBanner content={{"
      - generic [ref=e161]: "heading: 'Summer Sale',"
      - generic [ref=e162]: "subheading: 'Up to 50% off on selected items',"
      - generic [ref=e163]: "cta_text: 'Shop Sale',"
      - generic [ref=e164]: "cta_url: '/fashion-luxe/sale',"
      - generic [ref=e165]: "background_color: '#000000',"
      - generic [ref=e166]: "text_color: '#ffffff',"
      - generic [ref=e167]: "height: 'medium'"
      - generic [ref=e168]: "}} />"
      - generic [ref=e170]: "<TrustIndicators content={{}} />"
      - generic [ref=e172]: "<FeaturedProducts content={{"
      - generic [ref=e173]: "title: 'New Arrivals',"
      - generic [ref=e174]: "subtitle: 'Fresh styles just landed',"
      - generic [ref=e175]: "columns: 4,"
      - generic [ref=e176]: "show_prices: true,"
      - generic [ref=e177]: "show_ratings: true,"
      - generic [ref=e178]: "products: ["
      - generic [ref=e179]: "{ id: '5', name: 'Silk Scarf', price: 1999, original_price: 2999, image: 'https://images.unsplash.com/photo-1601370690183-1c7796ecec61?w=400', badge: 'SALE', rating: 4.3 },"
      - generic [ref=e180]: "{ id: '6', name: 'Leather Belt', price: 1499, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400', rating: 4.4 },"
      - generic [ref=e181]: "{ id: '7', name: 'Sunglasses', price: 2499, original_price: 3999, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400', badge: 'HOT', rating: 4.7 },"
      - generic [ref=e182]: "{ id: '8', name: 'Premium Wallet', price: 3499, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400', rating: 4.5 }"
      - generic [ref=e183]: "]"
      - generic [ref=e184]: "}} />"
      - generic [ref=e186]: "<NewsletterSection content={{"
      - generic [ref=e187]: "heading: 'Join Our Newsletter',"
      - generic [ref=e188]: "description: 'Subscribe to get special offers, free giveaways, and exclusive deals.',"
      - generic [ref=e189]: "placeholder_text: 'Enter your email',"
      - generic [ref=e190]: "button_text: 'Subscribe',"
      - generic [ref=e191]: "background_color: '#f9fafb'"
      - generic [ref=e192]: "}} />"
      - generic [ref=e193]: </main>
      - generic [ref=e195]: "<FooterSection siteConfig={siteConfig} />"
      - generic [ref=e196]: </body>
      - generic [ref=e197]: </html>
  - generic [ref=e199]:
    - heading "Stack Trace" [level=2] [ref=e200]
    - generic [ref=e201]: "Error: Failed to load url ../../templates/fashion-luxe/sections/HeroSection.astro (resolved id: ../../templates/fashion-luxe/sections/HeroSection.astro) in /Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/src/pages/fashion-luxe/index.astro. Does the file exist? at loadAndTransform (file:///Users/ashwin/Tracewebstudio/repos/tracewebstudio-site-renderer/node_modules/vite/dist/node/chunks/dep-BK3b2jBa.js:51969:17)"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Fashion Luxe Template', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('http://localhost:4321/fashion-luxe');
  6  |   });
  7  | 
  8  |   test('should have proper navigation', async ({ page }) => {
> 9  |     await expect(page.locator('text=New Arrivals')).toBeVisible();
     |                                                     ^ Error: expect(locator).toBeVisible() failed
  10 |     await expect(page.locator('text=Women')).toBeVisible();
  11 |     await expect(page.locator('text=Men')).toBeVisible();
  12 |   });
  13 | 
  14 |   test('should show hero section', async ({ page }) => {
  15 |     await expect(page.locator('text=Elevate Your Style')).toBeVisible();
  16 |     await expect(page.locator('text=Shop Now')).toBeVisible();
  17 |   });
  18 | 
  19 |   test('should show featured categories', async ({ page }) => {
  20 |     await expect(page.locator('text=Shop by Category')).toBeVisible();
  21 |     await expect(page.locator('text=Women')).toBeVisible();
  22 |     await expect(page.locator('text=Men')).toBeVisible();
  23 |   });
  24 | });
  25 | 
```