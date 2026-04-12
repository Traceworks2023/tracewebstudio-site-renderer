import { defineMiddleware } from 'astro:middleware';

export interface TenantContext {
  tenantId: string;
  siteId: string;
  siteSlug: string;
  templateId: string;
  defaultLanguage: string;
  enabledLanguages: string[];
}

const PLATFORM_HOST = 'tracewebstudio.com';
const SUBDOMAIN_HOST = 'tracewebstudio.com';

export const tenantMiddleware = defineMiddleware(async (context, next) => {
  const hostname = context.request.headers.get('host') || '';
  
  // Extract tenant context from hostname
  // Patterns:
  // 1. {site-slug}.tracewebstudio.com (subdomain)
  // 2. {custom-domain} (custom domain)
  // 3. localhost:3000 (dev)
  
  let tenantContext: TenantContext | null = null;
  
  if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
    // Development mode - extract from query param or cookie
    const siteSlug = context.url.searchParams.get('site') || 'demo-site';
    tenantContext = {
      tenantId: 'dev-tenant-id',
      siteId: 'dev-site-id',
      siteSlug,
      templateId: 'dev-template-id',
      defaultLanguage: 'en',
      enabledLanguages: ['en', 'fr'],
    };
  } else if (hostname.includes(SUBDOMAIN_HOST)) {
    // Subdomain pattern: {site-slug}.tracewebstudio.com
    const subdomain = hostname.split('.')[0];
    tenantContext = await resolveTenantFromSubdomain(subdomain);
  } else {
    // Custom domain pattern
    tenantContext = await resolveTenantFromDomain(hostname);
  }
  
  // Store in locals for use in pages
  context.locals.tenant = tenantContext;
  context.locals.language = detectLanguage(context.url.pathname, tenantContext?.enabledLanguages || ['en']);
  
  return next();
});

async function resolveTenantFromSubdomain(subdomain: string): Promise<TenantContext | null> {
  // In production, this would call the API gateway or core backend
  // For now, return a mock context
  console.log(`Resolving tenant for subdomain: ${subdomain}`);
  
  return {
    tenantId: `tenant-${subdomain}`,
    siteId: `site-${subdomain}`,
    siteSlug: subdomain,
    templateId: 'template-1',
    defaultLanguage: 'en',
    enabledLanguages: ['en', 'fr', 'ta'],
  };
}

async function resolveTenantFromDomain(domain: string): Promise<TenantContext | null> {
  // Custom domain resolution via domain lookup API
  console.log(`Resolving tenant for domain: ${domain}`);
  
  // TODO: Call API gateway to resolve domain -> tenant/site mapping
  // GET /api/v1/domains/resolve?domain={domain}
  
  return {
    tenantId: `tenant-${domain}`,
    siteId: `site-${domain}`,
    siteSlug: domain,
    templateId: 'template-1',
    defaultLanguage: 'en',
    enabledLanguages: ['en'],
  };
}

function detectLanguage(pathname: string, enabledLanguages: string[]): string {
  // Path-based language detection: /, /fr, /ta
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && enabledLanguages.includes(firstSegment)) {
    return firstSegment;
  }
  
  return enabledLanguages[0] || 'en';
}
