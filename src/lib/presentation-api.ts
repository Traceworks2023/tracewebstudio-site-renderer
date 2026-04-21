const PRESENTATION_API_BASE = import.meta.env.PUBLIC_PRESENTATION_API_URL || 'http://localhost:8086';

export interface InvoicePdfRequest {
  invoice_id: string;
  tenant_id: string;
  customer_name: string;
  customer_email?: string;
  invoice_number: string;
  items: Array<{
    description: string;
    quantity: number;
    unit_price: number;
    total: number;
  }>;
  subtotal: number;
  tax_amount: number;
  total: number;
  due_date?: string;
  notes?: string;
}

export interface QuotePdfRequest {
  quote_id: string;
  tenant_id: string;
  customer_name: string;
  customer_email?: string;
  quote_number: string;
  items: Array<{
    description: string;
    quantity: number;
    unit_price: number;
    total: number;
  }>;
  subtotal: number;
  discount_amount: number;
  total: number;
  valid_until?: string;
  notes?: string;
}

export interface CatalogPdfRequest {
  tenant_id: string;
  title: string;
  description?: string;
  products: Array<{
    name: string;
    description?: string;
    price?: number;
    image_url?: string;
    sku?: string;
  }>;
  cover_image?: string;
}

export interface BrochurePdfRequest {
  tenant_id: string;
  title: string;
  subtitle?: string;
  content: string;
  cover_image?: string;
  contact_info?: {
    email?: string;
    phone?: string;
    address?: string;
    website?: string;
  };
}

export interface QrCodeRequest {
  tenant_id: string;
  content: string;
  size?: number;
  format?: string;
}

export interface SlidesRequest {
  tenant_id: string;
  template_id?: string;
  title: string;
  content: Record<string, unknown>;
  output_format: string;
}

async function fetchPresentation<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  try {
    const response = await fetch(`${PRESENTATION_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!response.ok) {
      console.error(`Presentation API error: ${response.status} ${response.statusText}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch from presentation API:`, error);
    return null;
  }
}

export const presentationApi = {
  pdf: {
    generateInvoice: (data: InvoicePdfRequest) =>
      fetchPresentation<{ success: boolean; file_url: string; file_name: string }>(`/api/v1/present/pdf/invoice`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    generateQuote: (data: QuotePdfRequest) =>
      fetchPresentation<{ success: boolean; file_url: string; file_name: string }>(`/api/v1/present/pdf/quote`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    generateCatalog: (data: CatalogPdfRequest) =>
      fetchPresentation<{ success: boolean; file_url: string; file_name: string }>(`/api/v1/present/pdf/catalog`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    generateBrochure: (data: BrochurePdfRequest) =>
      fetchPresentation<{ success: boolean; file_url: string; file_name: string }>(`/api/v1/present/pdf/brochure`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  qr: {
    generate: (data: QrCodeRequest) =>
      fetchPresentation<{ success: boolean; qr_code_url: string; file_name: string }>(`/api/v1/present/qr/generate`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },

  slides: {
    generate: (data: SlidesRequest) =>
      fetchPresentation<{ success: boolean; presentation_url: string; file_name: string }>(`/api/v1/present/slides/generate`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),

    getTemplate: (templateId: string) =>
      fetchPresentation<{ id: string; name: string; description: string; category: string; slides_count: number }>(`/api/v1/present/slides/template/${templateId}`),
  },

  templates: {
    list: () =>
      fetchPresentation<{ templates: Array<{ id: string; name: string; template_type: string; description: string }>; total: number }>(`/api/v1/present/templates`),

    get: (templateId: string) =>
      fetchPresentation<{ id: string; name: string; template_type: string; description: string; category: string }>(`/api/v1/present/templates/${templateId}`),
  },
};