---
// Site Configuration Schema - defines all editable content
export interface SiteConfig {
  site_id: string;
  site_name: string;
  site_tagline?: string;
  logo_url?: string;
  favicon_url?: string;
  theme: ThemeConfig;
  pages: PageConfig[];
  navigation: NavigationItem[];
  footer: FooterConfig;
  custom_code?: {
    head?: string;
    body_start?: string;
    body_end?: string;
  };
}

export interface ThemeConfig {
  mode: 'light' | 'dark';
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  background_color: string;
  surface_color: string;
  text_primary: string;
  text_secondary: string;
  border_color: string;
  font_family?: string;
  font_heading?: string;
  font_body?: string;
}

export interface PageConfig {
  page_id: string;
  slug: string;
  title: string;
  is_homepage: boolean;
  sections: SectionConfig[];
  seo: SEOConfig;
  status: 'draft' | 'published';
}

export interface SectionConfig {
  id: string;
  type: string;
  order: number;
  is_visible: boolean;
  content: Record<string, any>;
  style?: Record<string, any>;
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
  children?: NavigationItem[];
  is_visible: boolean;
}

export interface FooterConfig {
  columns: FooterColumn[];
  copyright_text: string;
  social_links: SocialLink[];
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  url: string;
  is_external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  og_image?: string;
  no_index?: boolean;
  canonical_url?: string;
}

// Section Types
export type SectionType =
  | 'hero'
  | 'featured-categories'
  | 'featured-products'
  | 'promo-banner'
  | 'trust-indicators'
  | 'testimonials'
  | 'newsletter'
  | 'footer'
  | 'category-hero'
  | 'filter-sidebar'
  | 'product-grid'
  | 'product-gallery'
  | 'product-info'
  | 'product-tabs'
  | 'related-products'
  | 'cart-items'
  | 'cart-summary'
  | 'shipping-form'
  | 'payment-options'
  | 'checkout-summary'
  | 'contact-form'
  | 'gallery'
  | 'faq'
  | 'team'
  | 'cta'
  | 'stats'
  | 'about'
  | 'blog-posts'
  | 'video'
  | 'map'
  | 'custom-html';
