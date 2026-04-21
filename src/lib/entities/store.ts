// Mock Entity Data Store
// Provides realistic sample data for development and preview

import type { Product, Collection, BlogPost, Project, Author } from './types';

export const mockAuthors: Author[] = [
  {
    id: 'author-1',
    name: 'Sarah Mitchell',
    bio: 'Fashion editor and trend analyst with over 10 years of experience in the industry.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
    socialLinks: {
      twitter: 'https://twitter.com/sarahmitchell',
      instagram: 'https://instagram.com/sarahmitchell'
    }
  },
  {
    id: 'author-2',
    name: 'Michael Chen',
    bio: 'Tech writer and product reviewer specializing in consumer electronics.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200'
  },
  {
    id: 'author-3',
    name: 'Jessica Park',
    bio: 'Interior design consultant and home decor enthusiast.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    socialLinks: {
      instagram: 'https://instagram.com/jessicapark',
      website: 'https://jessicapark.design'
    }
  }
];

export const mockProducts: Product[] = [
  {
    id: 'prod-1',
    slug: 'premium-wireless-headphones',
    type: 'product',
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our flagship wireless headphones. Featuring active noise cancellation, 30-hour battery life, and premium leather cushions for all-day comfort.',
    shortDescription: 'Flagship wireless headphones with ANC and 30-hour battery.',
    price: 349,
    compareAtPrice: 399,
    sku: 'WH-PRO-001',
    inventory: { quantity: 45, trackQuantity: true, allowBackorder: false },
    images: [
      { id: 'img-1', url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', alt: 'Premium Wireless Headphones', width: 800, height: 800 }
    ],
    options: [
      { id: 'opt-1', name: 'Color', values: ['Matte Black', 'Silver', 'Rose Gold'] }
    ],
    variants: [
      { id: 'var-1', sku: 'WH-PRO-001-MB', price: 349, options: { Color: 'Matte Black' }, inventory: 20 },
      { id: 'var-2', sku: 'WH-PRO-001-SL', price: 349, options: { Color: 'Silver' }, inventory: 15 },
      { id: 'var-3', sku: 'WH-PRO-001-RG', price: 369, options: { Color: 'Rose Gold' }, inventory: 10 }
    ],
    tags: ['electronics', 'audio', 'wireless', 'premium'],
    vendor: 'AudioTech',
    rating: { average: 4.8, count: 234 },
    collections: ['coll-electronics', 'coll-audio'],
    relatedProducts: ['prod-2', 'prod-3']
  },
  {
    id: 'prod-2',
    slug: 'minimalist-leather-watch',
    type: 'product',
    name: 'Minimalist Leather Watch',
    description: 'Timeless design meets modern craftsmanship. This minimalist watch features a genuine Italian leather strap and Swiss movement.',
    shortDescription: 'Classic minimalist design with Swiss movement.',
    price: 299,
    sku: 'LW-MIN-002',
    inventory: { quantity: 32, trackQuantity: true, allowBackorder: false },
    images: [
      { id: 'img-2', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', alt: 'Minimalist Leather Watch', width: 800, height: 800 }
    ],
    options: [
      { id: 'opt-1', name: 'Strap', values: ['Brown Leather', 'Black Leather', 'Navy Canvas'] }
    ],
    variants: [
      { id: 'var-1', sku: 'LW-MIN-002-BL', price: 299, options: { Strap: 'Brown Leather' }, inventory: 12 },
      { id: 'var-2', sku: 'LW-MIN-002-BK', price: 299, options: { Strap: 'Black Leather' }, inventory: 10 },
      { id: 'var-3', sku: 'LW-MIN-002-NV', price: 279, options: { Strap: 'Navy Canvas' }, inventory: 10 }
    ],
    tags: ['fashion', 'accessories', 'watches'],
    vendor: 'TimeKeeper',
    rating: { average: 4.6, count: 156 },
    collections: ['coll-fashion', 'coll-accessories']
  },
  {
    id: 'prod-3',
    slug: 'designer-ceramic-vase',
    type: 'product',
    name: 'Designer Ceramic Vase',
    description: 'Hand-crafted ceramic vase with a modern organic shape. Perfect for fresh flowers or as a standalone decorative piece.',
    shortDescription: 'Hand-crafted ceramic vase with organic design.',
    price: 189,
    sku: 'CV-DES-003',
    inventory: { quantity: 18, trackQuantity: true, allowBackorder: true },
    images: [
      { id: 'img-3', url: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=800', alt: 'Designer Ceramic Vase', width: 800, height: 800 }
    ],
    options: [],
    variants: [
      { id: 'var-1', sku: 'CV-DES-003', price: 189, options: {}, inventory: 18 }
    ],
    tags: ['home-decor', 'vases', 'ceramics', 'handmade'],
    rating: { average: 4.9, count: 89 },
    collections: ['coll-home-decor', 'coll-ceramics']
  },
  {
    id: 'prod-4',
    slug: 'organic-cotton-tee',
    type: 'product',
    name: 'Organic Cotton T-Shirt',
    description: 'Ultra-soft organic cotton t-shirt in a relaxed fit. Sustainably sourced and ethically made.',
    price: 49,
    compareAtPrice: 65,
    sku: 'OC-TEE-004',
    inventory: { quantity: 200, trackQuantity: true, allowBackorder: false },
    images: [
      { id: 'img-4', url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800', alt: 'Organic Cotton T-Shirt', width: 800, height: 800 }
    ],
    options: [
      { id: 'opt-1', name: 'Size', values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'opt-2', name: 'Color', values: ['White', 'Black', 'Navy', 'Sage'] }
    ],
    variants: [
      { id: 'var-1', sku: 'OC-TEE-004-WH-M', price: 49, options: { Size: 'M', Color: 'White' }, inventory: 35 },
      { id: 'var-2', sku: 'OC-TEE-004-BK-M', price: 49, options: { Size: 'M', Color: 'Black' }, inventory: 28 }
    ],
    tags: ['fashion', 'sustainable', 'basics', 'organic'],
    rating: { average: 4.7, count: 312 },
    collections: ['coll-fashion', 'coll-sustainable']
  }
];

export const mockCollections: Collection[] = [
  {
    id: 'coll-1',
    slug: 'electronics',
    type: 'collection',
    name: 'Electronics',
    description: 'Cutting-edge electronics for the modern lifestyle.',
    handle: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780af7234ab?w=800',
    productCount: 24,
    sortOrder: 'best-selling',
    status: 'published',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-03-15T00:00:00Z'
  },
  {
    id: 'coll-2',
    slug: 'fashion',
    type: 'collection',
    name: 'Fashion',
    description: 'Curated styles for every occasion.',
    handle: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    productCount: 48,
    sortOrder: 'created',
    status: 'published',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-03-15T00:00:00Z'
  },
  {
    id: 'coll-3',
    slug: 'home-decor',
    type: 'collection',
    name: 'Home & Living',
    description: 'Transform your space with our curated home collection.',
    handle: 'home-decor',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    productCount: 36,
    sortOrder: 'title-asc',
    status: 'published',
    createdAt: '2026-01-01T00:00:00Z',
    updatedAt: '2026-03-15T00:00:00Z'
  }
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'spring-2026-fashion-trends',
    type: 'blog',
    title: 'Spring 2026 Fashion Trends You Need to Know',
    excerpt: 'From bold colors to sustainable fabrics, discover the key trends shaping fashion this spring season.',
    content: '<p>Fashion week has come and gone, and the trends for Spring 2026 are finally here...</p>',
    author: mockAuthors[0],
    category: 'Fashion',
    tags: ['trends', 'spring', '2026', 'fashion'],
    featuredImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    readingTime: 8,
    publishedAt: '2026-03-10T00:00:00Z',
    status: 'published',
    createdAt: '2026-03-10T00:00:00Z',
    updatedAt: '2026-03-10T00:00:00Z'
  },
  {
    id: 'blog-2',
    slug: 'smart-home-setup-guide',
    type: 'blog',
    title: 'The Ultimate Smart Home Setup Guide for 2026',
    excerpt: 'Transform your living space into a connected haven with our comprehensive smart home guide.',
    content: '<p>Smart home technology has evolved dramatically...</p>',
    author: mockAuthors[1],
    category: 'Technology',
    tags: ['smart-home', 'technology', 'guide', 'iot'],
    featuredImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200',
    readingTime: 15,
    publishedAt: '2026-03-05T00:00:00Z',
    status: 'published',
    createdAt: '2026-03-05T00:00:00Z',
    updatedAt: '2026-03-05T00:00:00Z'
  },
  {
    id: 'blog-3',
    slug: 'minimalist-interior-design-tips',
    type: 'blog',
    title: 'Minimalist Interior Design: Less is More',
    excerpt: 'Learn the principles of minimalist design and how to apply them to create serene, clutter-free spaces.',
    content: '<p>Minimalism in interior design is more than just a trend...</p>',
    author: mockAuthors[2],
    category: 'Interior Design',
    tags: ['minimalism', 'interior', 'design', 'home'],
    featuredImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200',
    readingTime: 10,
    publishedAt: '2026-02-28T00:00:00Z',
    status: 'published',
    createdAt: '2026-02-28T00:00:00Z',
    updatedAt: '2026-02-28T00:00:00Z'
  }
];

export const mockProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'techcorp-brand-refresh',
    type: 'project',
    title: 'TechCorp Brand Refresh',
    excerpt: 'A complete brand identity overhaul for a leading tech company.',
    content: '<p>TechCorp approached us seeking a modern brand identity...</p>',
    client: 'TechCorp Inc.',
    industry: 'Technology',
    services: ['Brand Strategy', 'Visual Identity', 'Web Design'],
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    timeline: { start: '2025-09-01', end: '2025-12-15', duration: '4 months' },
    budget: '150k',
    results: [
      { metric: 'Brand Recognition', value: '+85%', description: 'Increase in brand awareness' },
      { metric: 'Website Traffic', value: '+120%', description: 'Growth in organic visitors' },
      { metric: 'Social Engagement', value: '+200%', description: 'Improvement in social metrics' }
    ],
    featured: true,
    status: 'published',
    createdAt: '2026-01-15T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z'
  },
  {
    id: 'proj-2',
    slug: 'luxury-hotel-campaign',
    type: 'project',
    title: 'Luxury Hotel Marketing Campaign',
    excerpt: 'An award-winning marketing campaign for a 5-star resort.',
    content: '<p>Creating awareness for a luxury hotel brand...</p>',
    client: 'Grand Resort & Spa',
    industry: 'Hospitality',
    services: ['Campaign Strategy', 'Photography', 'Content Marketing'],
    featuredImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    testimonial: {
      quote: 'The campaign exceeded all our expectations and helped us achieve record bookings.',
      author: 'Maria Rodriguez',
      role: 'Marketing Director',
      company: 'Grand Resort & Spa'
    },
    results: [
      { metric: 'Booking Revenue', value: '+95%', description: 'Year-over-year growth' },
      { metric: 'Social Reach', value: '5M+', description: 'Total impressions' }
    ],
    status: 'published',
    createdAt: '2026-02-01T00:00:00Z',
    updatedAt: '2026-03-01T00:00:00Z'
  }
];

// Entity lookup functions
export function getProductBySlug(slug: string): Product | undefined {
  return mockProducts.find(p => p.slug === slug);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return mockCollections.find(c => c.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return mockBlogPosts.find(b => b.slug === slug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find(p => p.slug === slug);
}

export function getProductsByCollection(collectionId: string): Product[] {
  return mockProducts.filter(p => p.collections?.includes(collectionId));
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const product = mockProducts.find(p => p.id === productId);
  if (!product?.relatedProducts) return mockProducts.slice(0, limit);
  return mockProducts.filter(p => product.relatedProducts?.includes(p.id)).slice(0, limit);
}

export function searchEntities<T>(entities: T[], query: string, fields: (keyof T)[]): T[] {
  const lowerQuery = query.toLowerCase();
  return entities.filter(entity =>
    fields.some(field => {
      const value = entity[field];
      return typeof value === 'string' && value.toLowerCase().includes(lowerQuery);
    })
  );
}
