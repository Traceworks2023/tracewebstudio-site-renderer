// Entity API - GET /api/entities
// Returns list of entities with optional filtering

import type { APIRoute } from 'astro';
import { mockProducts, mockCollections, mockBlogPosts, mockProjects, searchEntities } from '../../../lib/entities/store';
import type { EntityType } from '../../../lib/entities/types';

export const GET: APIRoute = async ({ url }) => {
  const type = url.searchParams.get('type') as EntityType | null;
  const search = url.searchParams.get('search') || '';
  const limit = parseInt(url.searchParams.get('limit') || '20');
  const offset = parseInt(url.searchParams.get('offset') || '0');

  let items: any[] = [];

  // Collect entities by type
  if (!type || type === 'product') {
    items = [...items, ...mockProducts];
  }
  if (!type || type === 'collection') {
    items = [...items, ...mockCollections];
  }
  if (!type || type === 'blog') {
    items = [...items, ...mockBlogPosts];
  }
  if (!type || type === 'project') {
    items = [...items, ...mockProjects];
  }

  // Apply search filter
  if (search) {
    if (type === 'product' || !type) {
      const searchResults = searchEntities(mockProducts, search, ['name', 'description', 'tags']);
      items = items.filter(i => !('name' in i) || searchResults.some((p: any) => p.id === i.id));
    }
    if (type === 'collection' || !type) {
      const searchResults = searchEntities(mockCollections, search, ['name', 'description']);
      items = items.filter(i => !('name' in i) || searchResults.some((c: any) => c.id === i.id));
    }
    if (type === 'blog' || !type) {
      const searchResults = searchEntities(mockBlogPosts, search, ['title', 'excerpt', 'content']);
      items = items.filter(i => !('title' in i) || searchResults.some((b: any) => b.id === i.id));
    }
    if (type === 'project' || !type) {
      const searchResults = searchEntities(mockProjects, search, ['title', 'excerpt', 'content']);
      items = items.filter(i => !('title' in i) || searchResults.some((p: any) => p.id === i.id));
    }
  }

  // Filter by type if specified
  if (type) {
    items = items.filter(item => item.type === type);
  }

  const total = items.length;
  const paginatedItems = items.slice(offset, offset + limit);

  return new Response(JSON.stringify({
    items: paginatedItems,
    total,
    limit,
    offset,
    hasMore: offset + limit < total
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
