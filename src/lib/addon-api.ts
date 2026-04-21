const ADDON_API_BASE = import.meta.env.PUBLIC_ADDON_API_URL || 'http://localhost:8084';

export interface Lead {
  id: string;
  tenant_id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';
  owner_id?: string;
  qualification_score?: number;
  created_at: string;
  updated_at: string;
}

export interface CreateLeadRequest {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
}

export interface Service {
  id: string;
  tenant_id: string;
  name: string;
  description?: string;
  duration_minutes: number;
  price: number;
  is_active: boolean;
  created_at: string;
}

export interface BookingSlot {
  id: string;
  tenant_id: string;
  service_id: string;
  start_time: string;
  end_time: string;
  is_available: boolean;
}

export interface CreateBookingRequest {
  service_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  start_time: string;
  notes?: string;
}

export interface Booking {
  id: string;
  tenant_id: string;
  service_id: string;
  customer_name: string;
  customer_email: string;
  status: 'requested' | 'confirmed' | 'completed' | 'cancelled' | 'no_show';
  start_time: string;
  end_time: string;
  notes?: string;
  created_at: string;
}

export interface Quote {
  id: string;
  tenant_id: string;
  quote_number: string;
  customer_name: string;
  customer_email?: string;
  status: 'draft' | 'sent' | 'viewed' | 'accepted' | 'rejected' | 'expired';
  subtotal: number;
  discount_amount: number;
  total: number;
  valid_until?: string;
  items: QuoteItem[];
  created_at: string;
}

export interface QuoteItem {
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface CreateQuoteRequest {
  customer_name: string;
  customer_email?: string;
  items: QuoteItem[];
  subtotal: number;
  discount_amount?: number;
  valid_until?: string;
  notes?: string;
}

export interface Invoice {
  id: string;
  tenant_id: string;
  invoice_number: string;
  customer_name: string;
  customer_email?: string;
  status: 'draft' | 'sent' | 'viewed' | 'paid' | 'partial' | 'overdue' | 'cancelled';
  subtotal: number;
  tax_amount: number;
  total: number;
  due_date?: string;
  items: InvoiceItem[];
  created_at: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface SupportTicket {
  id: string;
  tenant_id: string;
  ticket_number: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'open' | 'in_progress' | 'pending_customer' | 'resolved' | 'closed';
  category?: string;
  customer_name: string;
  customer_email: string;
  assigned_to?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateTicketRequest {
  subject: string;
  description: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  category?: string;
  customer_name: string;
  customer_email: string;
}

export interface KBCategory {
  id: string;
  tenant_id: string;
  name: string;
  description?: string;
  slug: string;
  sort_order: number;
  articles_count?: number;
}

export interface KBArticle {
  id: string;
  tenant_id: string;
  category_id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: 'draft' | 'review' | 'published' | 'archived';
  tags?: string[];
  created_at: string;
  updated_at: string;
}

export interface Form {
  id: string;
  tenant_id: string;
  name: string;
  description?: string;
  fields: FormField[];
  created_at: string;
}

export interface FormField {
  field_type: 'text' | 'email' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox';
  label: string;
  name: string;
  required?: boolean;
  options?: string[];
}

export interface FormSubmission {
  id: string;
  form_id: string;
  fields: Record<string, string>;
  submitted_at: string;
}

export interface CreateFormSubmissionRequest {
  form_id: string;
  fields: Record<string, string>;
}

async function fetchAddon<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  try {
    const response = await fetch(`${ADDON_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!response.ok) {
      console.error(`Addon API error: ${response.status} ${response.statusText}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch from addon API:`, error);
    return null;
  }
}

export const addonApi = {
  leads: {
    create: (tenantId: string, data: CreateLeadRequest) =>
      fetchAddon<Lead>(`/api/v1 addon/leads`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),

    list: (tenantId: string) =>
      fetchAddon<Lead[]>(`/api/v1 addon/leads?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Lead>(`/api/v1 addon/leads/${tenantId}/${id}`),
  },

  services: {
    list: (tenantId: string) =>
      fetchAddon<Service[]>(`/api/v1 addon/services?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Service>(`/api/v1 addon/services/${tenantId}/${id}`),
  },

  bookings: {
    create: (tenantId: string, data: CreateBookingRequest) =>
      fetchAddon<Booking>(`/api/v1 addon/bookings`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),

    list: (tenantId: string) =>
      fetchAddon<Booking[]>(`/api/v1 addon/bookings?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Booking>(`/api/v1 addon/bookings/${tenantId}/${id}`),
  },

  slots: {
    list: (tenantId: string, serviceId?: string) => {
      const url = serviceId
        ? `/api/v1 addon/slots?tenant_id=${tenantId}&service_id=${serviceId}`
        : `/api/v1 addon/slots?tenant_id=${tenantId}`;
      return fetchAddon<BookingSlot[]>(url);
    },
  },

  quotes: {
    create: (tenantId: string, data: CreateQuoteRequest) =>
      fetchAddon<Quote>(`/api/v1 addon/quotes`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),

    list: (tenantId: string) =>
      fetchAddon<Quote[]>(`/api/v1 addon/quotes?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Quote>(`/api/v1 addon/quotes/${tenantId}/${id}`),
  },

  invoices: {
    list: (tenantId: string) =>
      fetchAddon<Invoice[]>(`/api/v1 addon/invoices?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Invoice>(`/api/v1 addon/invoices/${tenantId}/${id}`),
  },

  tickets: {
    create: (tenantId: string, data: CreateTicketRequest) =>
      fetchAddon<SupportTicket>(`/api/v1 addon/tickets`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),

    list: (tenantId: string, status?: string) => {
      const url = status
        ? `/api/v1 addon/tickets?tenant_id=${tenantId}&status=${status}`
        : `/api/v1 addon/tickets?tenant_id=${tenantId}`;
      return fetchAddon<SupportTicket[]>(url);
    },

    get: (tenantId: string, id: string) =>
      fetchAddon<SupportTicket>(`/api/v1 addon/tickets/${tenantId}/${id}`),
  },

  knowledgeBase: {
    categories: {
      list: (tenantId: string) =>
        fetchAddon<KBCategory[]>(`/api/v1 addon/knowledge-base/categories?tenant_id=${tenantId}`),

      get: (tenantId: string, id: string) =>
        fetchAddon<KBCategory>(`/api/v1 addon/knowledge-base/categories/${tenantId}/${id}`),
    },

    articles: {
      list: (tenantId: string, status?: string) => {
        const url = status
          ? `/api/v1 addon/knowledge-base/articles?tenant_id=${tenantId}&status=${status}`
          : `/api/v1 addon/knowledge-base/articles?tenant_id=${tenantId}`;
        return fetchAddon<KBArticle[]>(url);
      },

      get: (tenantId: string, id: string) =>
        fetchAddon<KBArticle>(`/api/v1 addon/knowledge-base/articles/${tenantId}/${id}`),

      search: (tenantId: string, query: string) =>
        fetchAddon<KBArticle[]>(`/api/v1 addon/knowledge-base/search?tenant_id=${tenantId}&q=${encodeURIComponent(query)}`),
    },
  },

  forms: {
    list: (tenantId: string) =>
      fetchAddon<Form[]>(`/api/v1 addon/forms?tenant_id=${tenantId}`),

    get: (tenantId: string, id: string) =>
      fetchAddon<Form>(`/api/v1 addon/forms/${tenantId}/${id}`),

    submit: (tenantId: string, data: CreateFormSubmissionRequest) =>
      fetchAddon<FormSubmission>(`/api/v1 addon/form-submissions`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),
  },

  analytics: {
    trackPageView: (tenantId: string, data: { page_url: string; visitor_id?: string }) =>
      fetchAddon<void>(`/api/v1 addon/analytics/page-views`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),

    trackFormSubmission: (tenantId: string, data: { form_id: string; fields: Record<string, string> }) =>
      fetchAddon<void>(`/api/v1 addon/analytics/form-submissions`, {
        method: 'POST',
        body: JSON.stringify({ ...data, tenant_id: tenantId }),
      }),
  },
};