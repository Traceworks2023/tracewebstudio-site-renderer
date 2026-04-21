// Content Mapper - Maps entity data to template sections
// Bridges the gap between entity system and template rendering

import type { Product, Collection, BlogPost, Project } from './types';
import { getProductBySlug, getCollectionBySlug, getBlogPostBySlug, getProjectBySlug, getRelatedProducts, getProductsByCollection } from './store';

export interface TemplateSection {
  type: string;
  variant?: string;
  content: Record<string, any>;
  settings?: Record<string, any>;
}

export interface ProductPageContent {
  hero: TemplateSection;
  productGallery: TemplateSection;
  productInfo: TemplateSection;
  relatedProducts: TemplateSection;
}

export interface CollectionPageContent {
  hero: TemplateSection;
  productGrid: TemplateSection;
  featuredProducts: TemplateSection;
}

export interface BlogPageContent {
  hero: TemplateSection;
  featuredPost: TemplateSection;
  recentPosts: TemplateSection;
}

export interface ProjectPageContent {
  hero: TemplateSection;
  projectDetails: TemplateSection;
  results: TemplateSection;
  gallery: TemplateSection;
  relatedProjects: TemplateSection;
}

export function mapProductToSections(product: Product): ProductPageContent {
  const relatedProducts = getRelatedProducts(product.id, 4);

  return {
    hero: {
      type: 'hero-section',
      variant: 'minimal',
      content: {
        title: product.name,
        subtitle: product.shortDescription || '',
        ctaText: 'Add to Cart'
      }
    },
    productGallery: {
      type: 'advanced-carousel',
      variant: 'thumbnailGallery',
      content: {
        title: '',
        items: product.images.map((img, i) => ({
          id: img.id,
          image: img.url,
          imageAlt: img.alt,
          title: i === 0 ? product.name : undefined
        }))
      },
      settings: {
        carouselType: 'thumbnailGallery'
      }
    },
    productInfo: {
      type: 'product-details',
      content: {
        name: product.name,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
        description: product.description,
        sku: product.sku,
        options: product.options,
        rating: product.rating,
        inventory: product.inventory.quantity,
        vendor: product.vendor
      }
    },
    relatedProducts: {
      type: 'product-carousel',
      variant: 'productRail',
      content: {
        title: 'You May Also Like',
        products: relatedProducts.map(p => ({
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.images[0]?.url,
          badge: p.compareAtPrice ? 'Sale' : p.tags?.includes('new') ? 'New' : undefined
        }))
      },
      settings: {
        carouselType: 'productRail',
        slidesPerView: 4
      }
    }
  };
}

export function mapCollectionToSections(collection: Collection): CollectionPageContent {
  const products = getProductsByCollection(collection.id);

  return {
    hero: {
      type: 'hero-section',
      variant: 'center',
      content: {
        title: collection.name,
        subtitle: collection.description,
        backgroundImage: collection.image
      }
    },
    productGrid: {
      type: 'product-grid',
      variant: 'grid',
      content: {
        title: `Shop ${collection.name}`,
        products: products.map(p => ({
          id: p.id,
          name: p.name,
          price: p.price,
          originalPrice: p.compareAtPrice,
          image: p.images[0]?.url,
          badge: p.compareAtPrice ? 'Sale' : undefined,
          rating: p.rating?.average,
          category: collection.slug
        })),
        columns: 4
      }
    },
    featuredProducts: {
      type: 'product-carousel',
      variant: 'featured',
      content: {
        title: 'Featured in this Collection',
        products: products.slice(0, 4).map(p => ({
          id: p.id,
          name: p.name,
          price: p.price,
          image: p.images[0]?.url,
          badge: p.compareAtPrice ? 'Sale' : undefined,
          rating: p.rating?.average
        }))
      },
      settings: {
        carouselType: 'centerMode',
        slidesPerView: 3
      }
    }
  };
}

export function mapBlogPostToSections(post: BlogPost): BlogPageContent {
  return {
    hero: {
      type: 'hero-section',
      variant: 'minimal',
      content: {
        title: post.title,
        subtitle: post.excerpt,
        backgroundImage: post.featuredImage
      }
    },
    featuredPost: {
      type: 'blog-featured',
      content: {
        title: post.title,
        excerpt: post.excerpt,
        author: post.author.name,
        authorImage: post.author.image,
        date: post.publishedAt,
        category: post.category,
        readingTime: post.readingTime,
        featuredImage: post.featuredImage,
        content: post.content
      }
    },
    recentPosts: {
      type: 'blog-grid',
      content: {
        title: 'More Articles',
        posts: [] // Would be populated with related posts
      }
    }
  };
}

export function mapProjectToSections(project: Project): ProjectPageContent {
  return {
    hero: {
      type: 'hero-section',
      variant: 'cinematic',
      content: {
        title: project.title,
        subtitle: project.client,
        backgroundImage: project.featuredImage
      }
    },
    projectDetails: {
      type: 'project-details',
      content: {
        title: project.title,
        excerpt: project.excerpt,
        content: project.content,
        client: project.client,
        industry: project.industry,
        services: project.services,
        timeline: project.timeline,
        budget: project.budget
      }
    },
    results: {
      type: 'stats',
      content: {
        title: 'Project Results',
        stats: project.results?.map(r => ({
          value: r.value,
          label: r.metric,
          description: r.description
        })) || []
      }
    },
    gallery: {
      type: 'gallery-grid',
      content: {
        title: 'Project Gallery',
        images: project.gallery || []
      }
    },
    relatedProjects: {
      type: 'projects-grid',
      content: {
        title: 'More Projects',
        projects: [] // Would be populated with related projects
      }
    }
  };
}

export function mapEntityToTemplateContent(
  entityType: 'product' | 'collection' | 'blog' | 'project',
  slug: string
): ProductPageContent | CollectionPageContent | BlogPageContent | ProjectPageContent | null {
  switch (entityType) {
    case 'product': {
      const product = getProductBySlug(slug);
      return product ? mapProductToSections(product) : null;
    }
    case 'collection': {
      const collection = getCollectionBySlug(slug);
      return collection ? mapCollectionToSections(collection) : null;
    }
    case 'blog': {
      const post = getBlogPostBySlug(slug);
      return post ? mapBlogPostToSections(post) : null;
    }
    case 'project': {
      const project = getProjectBySlug(slug);
      return project ? mapProjectToSections(project) : null;
    }
    default:
      return null;
  }
}

export function getEntityMeta(
  entityType: 'product' | 'collection' | 'blog' | 'project',
  slug: string
): { title: string; description: string; image?: string } | null {
  const content = mapEntityToTemplateContent(entityType, slug);
  if (!content) return null;

  if (entityType === 'product') {
    const c = content as ProductPageContent;
    return { title: c.hero.content.title, description: c.productInfo.content.description };
  }
  if (entityType === 'collection') {
    const c = content as CollectionPageContent;
    return { title: c.hero.content.title, description: c.hero.content.subtitle };
  }
  if (entityType === 'blog') {
    const c = content as BlogPageContent;
    return { title: c.hero.content.title, description: c.featuredPost.content.excerpt, image: c.featuredPost.content.featuredImage };
  }
  if (entityType === 'project') {
    const c = content as ProjectPageContent;
    return { title: c.hero.content.title, description: c.projectDetails.content.excerpt, image: c.hero.content.backgroundImage };
  }

  return null;
}
