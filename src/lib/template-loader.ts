export interface TemplateConfig {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: 'portfolio' | 'business' | 'ecommerce';
  tier: 'basic' | 'medium' | 'premium';
  thumbnail_url?: string;
  pages: PageConfig[];
  theme: ThemeConfig;
  sections: SectionLibrary;
}

export interface PageConfig {
  id: string;
  type: 'home' | 'product' | 'category' | 'cart' | 'checkout' | 'about' | 'contact' | 'blog';
  name: string;
  sections: SectionInstance[];
}

export interface SectionInstance {
  id: string;
  type: string;
  visible: boolean;
  sortOrder: number;
  content?: Record<string, any>;
}

export interface ThemeConfig {
  colors: {
    primary?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    surface?: string;
    text?: string;
    textMuted?: string;
    border?: string;
    error?: string;
    success?: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  spacing?: {
    section?: string;
    container?: string;
  };
}

export interface SectionLibrary {
  [sectionType: string]: SectionDefinition;
}

export interface SectionDefinition {
  name: string;
  icon?: string;
  fields: Field[];
  defaultContent?: Record<string, any>;
}

export interface Field {
  id: string;
  type: 'text' | 'textarea' | 'image' | 'color' | 'select' | 'boolean' | 'array' | 'url' | 'number';
  label: string;
  placeholder?: string;
  defaultValue?: any;
  required?: boolean;
  translatable?: boolean;
  options?: { label: string; value: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

import fs from 'fs';
import path from 'path';

const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:8081';

// Load template config - first from local filesystem (development), then from core-backend API
export async function loadTemplate(slug: string): Promise<TemplateConfig | null> {
  // 1. Try loading from local filesystem (primary for development)
  try {
    const configPath = path.join(TEMPLATES_DIR, slug, 'config.json');
    if (fs.existsSync(configPath)) {
      const content = fs.readFileSync(configPath, 'utf-8');
      return JSON.parse(content);
    }
  } catch (e) {
    console.warn(`Failed to load local template config for ${slug}:`, e);
  }

  // 2. Try loading from core-backend API (production)
  try {
    const apiResponse = await fetch(`${API_URL}/api/v1/templates/slug/${slug}`);
    if (apiResponse.ok) {
      const data = await apiResponse.json();
      if (data) {
        // Core-backend returns structure_json and theme_json separately
        if (data.structure_json) {
          const config = typeof data.structure_json === 'string'
            ? JSON.parse(data.structure_json)
            : data.structure_json;
          config.theme = typeof data.theme_json === 'string'
            ? JSON.parse(data.theme_json)
            : data.theme_json || {};
          config.id = slug;
          return config;
        }
        return data;
      }
    }
  } catch (e) {
    console.warn(`Failed to load template from API for ${slug}:`, e);
  }

  return null;
}

// Get merged content for a section (default + tenant overrides)
export function getSectionContent(
  sectionInstance: SectionInstance,
  sectionDef: SectionDefinition,
  tenantOverrides?: Record<string, any>
): Record<string, any> {
  const defaults = sectionDef.defaultContent || {};
  const sectionOverrides = sectionInstance.content || {};
  const tenant = tenantOverrides || {};
  
  return {
    ...defaults,
    ...sectionOverrides,
    ...tenant
  };
}

// Get all pages for a template
export function getTemplatePages(template: TemplateConfig): PageConfig[] {
  return template.pages || [];
}

// Get page by ID or type
export function getPageById(template: TemplateConfig, pageIdOrType: string): PageConfig | undefined {
  return template.pages?.find(p => p.id === pageIdOrType || p.type === pageIdOrType);
}

// Get visible sections for a page, sorted by sortOrder
export function getVisibleSections(page: PageConfig): SectionInstance[] {
  return page.sections
    .filter(s => s.visible !== false)
    .sort((a, b) => (a.sortOrder || 0) - (b.sortOrder || 0));
}