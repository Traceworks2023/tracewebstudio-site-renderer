/// <reference path="../.astro/types.d.ts" />
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

interface ImportMetaEnv {
  readonly PUBLIC_API_GATEWAY_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}