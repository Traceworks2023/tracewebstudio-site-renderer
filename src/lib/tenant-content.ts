import type { TemplateConfig, PageConfig, SectionInstance } from '../templates/schema';

export interface TenantContent {
  siteId: string;
  tenantId: string;
  templateSlug: string;
  pages: {
    [pageType: string]: {
      [sectionId: string]: Record<string, any>;
    };
  };
  theme?: Partial<TemplateConfig['theme']>;
  updatedAt: string;
}

const API_BASE = import.meta.env.PUBLIC_API_URL || 'http://localhost:8081';

export async function loadTemplateWithTenant(
  slug: string,
  siteId?: string,
  tenantId?: string
): Promise<{ template: TemplateConfig | null; tenantContent: TenantContent | null }> {
  const [template, tenantContent] = await Promise.all([
    loadTemplateFromFile(slug),
    siteId ? loadTenantContent(siteId, tenantId) : Promise.resolve(null),
  ]);

  return { template, tenantContent };
}

async function loadTemplateFromFile(slug: string): Promise<TemplateConfig | null> {
  try {
    const response = await fetch(`/templates/${slug}/config.json`);
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.warn(`Failed to load template ${slug}:`, e);
  }
  return null;
}

export async function loadTenantContent(
  siteId: string,
  tenantId?: string
): Promise<TenantContent | null> {
  if (!siteId) return null;

  try {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (tenantId) {
      headers['x-tenant-id'] = tenantId;
      headers['x-actor-type'] = 'tenant_admin';
    }

    const response = await fetch(`${API_BASE}/api/v1/sites/${siteId}/content`, {
      headers,
    });

    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.warn(`Failed to load tenant content for site ${siteId}:`, e);
  }
  return null;
}

export function mergeContentWithTemplate(
  template: TemplateConfig,
  tenantContent: TenantContent | null
): TemplateConfig {
  if (!tenantContent) return template;

  const merged = { ...template };

  if (tenantContent.theme) {
    merged.theme = {
      ...template.theme,
      ...tenantContent.theme,
    };
  }

  if (tenantContent.pages) {
    merged.pages = template.pages.map((page) => {
      const pageContent = tenantContent.pages[page.type] || tenantContent.pages[page.id];
      if (!pageContent) return page;

      return {
        ...page,
        sections: page.sections.map((section) => {
          const sectionContent = pageContent[section.id];
          if (!sectionContent) return section;

          return {
            ...section,
            content: sectionContent,
          };
        }),
      };
    });
  }

  return merged;
}

export function getSectionContent(
  section: SectionInstance,
  defaultContent: Record<string, any>
): Record<string, any> {
  return {
    ...defaultContent,
    ...(section.content || {}),
  };
}

export function getPageById(template: TemplateConfig, pageIdOrType: string): PageConfig | undefined {
  return template.pages?.find((p) => p.id === pageIdOrType || p.type === pageIdOrType);
}

export function getVisibleSections(page: PageConfig): SectionInstance[] {
  return page.sections
    .filter((s) => s.visible !== false)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}