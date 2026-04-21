// Single Entity API - GET /api/entities/[type]/[slug]
// Returns a single entity by type and slug

import type { APIRoute } from 'astro';
import { getProductBySlug, getCollectionBySlug, getBlogPostBySlug, getProjectBySlug } from '../../../../lib/entities/store';
import type { EntityType } from '../../../../lib/entities/types';

export const GET: APIRoute = async ({ params }) => {
  const { type, slug } = params;

  if (!type || !slug) {
    return new Response(JSON.stringify({ error: 'Missing type or slug parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  let item = null;
  let entityType: EntityType | null = null;

  switch (type) {
    case 'product':
      item = getProductBySlug(slug);
      entityType = 'product';
      break;
    case 'collection':
      item = getCollectionBySlug(slug);
      entityType = 'collection';
      break;
    case 'blog':
      item = getBlogPostBySlug(slug);
      entityType = 'blog';
      break;
    case 'project':
      item = getProjectBySlug(slug);
      entityType = 'project';
      break;
    default:
      return new Response(JSON.stringify({ error: `Unknown entity type: ${type}` }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
  }

  if (!item) {
    return new Response(JSON.stringify({ error: `${type} not found: ${slug}` }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  return new Response(JSON.stringify({
    item,
    type: entityType
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
