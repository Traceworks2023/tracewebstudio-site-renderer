// Entity Types for Dynamic Routes
// Based on docs: 08_PUBLIC_WEBSITE_DESIGN_AND_PAGE_DEFINITIONS.md

export interface BaseEntity {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  status: 'draft' | 'published' | 'archived';
  templateId?: string;
  category?: string;
  tags?: string[];
  seo?: SEOMetadata;
}

export interface SEOMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface Product extends BaseEntity {
  type: 'product';
  name: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  costPrice?: number;
  sku?: string;
  barcode?: string;
  inventory: {
    quantity: number;
    trackQuantity: boolean;
    allowBackorder: boolean;
  };
  images: ProductImage[];
  thumbnails?: string[];
  video?: string;
  options: ProductOption[];
  variants: ProductVariant[];
  collections?: string[];
  tags?: string[];
  vendor?: string;
  weight?: number;
  dimensions?: {
    length?: number;
    width?: number;
    height?: number;
  };
  shipping?: ShippingMethod;
  tax?: TaxSettings;
  rating?: {
    average: number;
    count: number;
  };
  reviews?: Review[];
  relatedProducts?: string[];
  upsellProducts?: string[];
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
  position?: number;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  sku?: string;
  price?: number;
  compareAtPrice?: number;
  options: Record<string, string>;
  inventory: number;
  image?: string;
  weight?: number;
}

export interface ShippingMethod {
  weightBased?: boolean;
  priceBased?: boolean;
  flatRate?: number;
  freeShipping?: boolean;
  shippingClass?: string;
}

export interface TaxSettings {
  taxable: boolean;
  taxRate?: number;
  taxClass?: string;
}

export interface Review {
  id: string;
  authorId: string;
  authorName: string;
  authorImage?: string;
  rating: number;
  title?: string;
  content: string;
  verified: boolean;
  helpful?: number;
  createdAt: string;
  replies?: ReviewReply[];
}

export interface ReviewReply {
  id: string;
  authorId: string;
  authorName: string;
  authorImage?: string;
  content: string;
  createdAt: string;
}

export interface Collection extends BaseEntity {
  type: 'collection';
  name: string;
  description: string;
  handle: string;
  image?: string;
  bannerImage?: string;
  products?: string[];
  productCount?: number;
  sortOrder?: 'best-selling' | 'created' | 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc' | 'manual';
  filters?: CollectionFilter[];
  meta?: Record<string, string>;
}

export interface CollectionFilter {
  attribute: string;
  values: string[];
}

export interface BlogPost extends BaseEntity {
  type: 'blog';
  title: string;
  excerpt: string;
  content: string;
  author: Author;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  images?: string[];
  readingTime?: number;
  publishedAt: string;
  seo?: SEOMetadata & {
    ogType?: 'article';
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  socialLinks?: {
    website?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface Project extends BaseEntity {
  type: 'project';
  title: string;
  excerpt: string;
  content: string;
  client?: string;
  industry?: string;
  services?: string[];
  team?: string[];
  timeline?: {
    start: string;
    end?: string;
    duration?: string;
  };
  budget?: string;
  results?: ProjectResult[];
  testimonial?: ProjectTestimonial;
  featuredImage?: string;
  gallery?: string[];
  video?: string;
  liveUrl?: string;
  caseStudy?: boolean;
  featured?: boolean;
}

export interface ProjectResult {
  metric: string;
  value: string;
  description?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

export interface CaseStudy extends Project {
  type: 'case-study';
  challenge: string;
  solution: string;
  process: string[];
  outcomes: ProjectResult[];
  keyLearnings?: string[];
  timeline?: string;
  budget?: string;
}

export interface Page extends BaseEntity {
  type: 'page';
  title: string;
  content: string;
  template?: string;
  sections?: PageSection[];
}

export interface PageSection {
  id: string;
  type: string;
  order: number;
  visible: boolean;
  content?: Record<string, any>;
  settings?: Record<string, any>;
}

export type EntityType = 'product' | 'collection' | 'blog' | 'project' | 'case-study' | 'page';

export interface EntityFilter {
  type: EntityType;
  category?: string;
  tags?: string[];
  status?: 'draft' | 'published' | 'archived';
  search?: string;
  limit?: number;
  offset?: number;
  sort?: string;
}

export interface EntityListResponse<T> {
  items: T[];
  total: number;
  limit: number;
  offset: number;
  hasMore: boolean;
}

export interface EntitySingleResponse<T> {
  item: T | null;
  related?: {
    products?: Product[];
    collections?: Collection[];
    blogPosts?: BlogPost[];
    projects?: Project[];
  };
}
