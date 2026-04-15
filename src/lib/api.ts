const API_BASE = import.meta.env.PUBLIC_API_GATEWAY_URL || 'http://localhost:8081';

export interface Site {
  id: string;
  tenant_id: string;
  name: string;
  slug: string;
  template_id: string;
  is_published: boolean;
  metadata: Record<string, unknown>;
}

export interface Page {
  id: string;
  site_id: string;
  title: string;
  slug: string;
  page_type: string;
  sections: Section[];
  metadata: Record<string, unknown>;
}

export interface Section {
  id: string;
  section_type: string;
  content: Record<string, unknown>;
  order: number;
}

export interface PageContent {
  id: string;
  tenant_id: string;
  site_id: string;
  page_type: string;
  language: string;
  content: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface SectionContent {
  hero?: {
    heading: string;
    subheading: string;
    cta_text: string;
    cta_link: string;
  };
  features?: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
  contact?: {
    title: string;
    email: string;
    phone?: string;
    address?: string;
  };
}

export async function fetchSite(siteId: string): Promise<Site | null> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/sites/${siteId}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Failed to fetch site:', error);
    return null;
  }
}

export async function fetchSiteBySlug(slug: string): Promise<Site | null> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/sites?slug=${slug}`);
    if (!response.ok) return null;
    const sites = await response.json();
    return sites[0] || null;
  } catch (error) {
    console.error('Failed to fetch site by slug:', error);
    return null;
  }
}

export async function fetchPages(siteId: string): Promise<Page[]> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/sites/${siteId}/pages`);
    if (!response.ok) return [];
    return response.json();
  } catch (error) {
    console.error('Failed to fetch pages:', error);
    return [];
  }
}

export async function fetchPage(pageId: string): Promise<Page | null> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/pages/${pageId}`);
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error('Failed to fetch page:', error);
    return null;
  }
}

export async function fetchHomePage(siteId: string, language: string = 'en'): Promise<Page | null> {
  try {
    const pages = await fetchPages(siteId);
    const homePage = pages.find(p => p.page_type === 'home' || p.slug === 'index');
    return homePage || pages[0] || null;
  } catch (error) {
    console.error('Failed to fetch home page:', error);
    return null;
  }
}

export async function fetchPageContent(siteId: string, pageType: string, language: string = 'en'): Promise<PageContent | null> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/sites/${siteId}/page-content/${pageType}?language=${language}`);
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Failed to fetch page content:', error);
    return null;
  }
}