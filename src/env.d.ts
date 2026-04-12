/// <reference types="astro/client" />

interface TenantContext {
  tenantId: string;
  siteId: string;
  siteSlug: string;
  templateId: string;
  defaultLanguage: string;
  enabledLanguages: string[];
}

declare namespace App {
  interface Locals {
    tenant: TenantContext | null;
    language: string;
  }
}
