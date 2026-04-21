const AI_API_BASE = import.meta.env.PUBLIC_AI_API_URL || 'http://localhost:8085';

export interface AIRetrievalRequest {
  query: string;
  max_results?: number;
  tenant_id?: string;
}

export interface AIRetrievalResult {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  relevance_score: number;
}

export interface AIRetrievalResponse {
  articles: AIRetrievalResult[];
  query: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  tenant_id?: string;
  context?: string;
}

export interface ChatResponse {
  message: ChatMessage;
  conversation_id?: string;
}

async function fetchAI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T | null> {
  try {
    const response = await fetch(`${AI_API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    if (!response.ok) {
      console.error(`AI API error: ${response.status} ${response.statusText}`);
      return null;
    }
    return response.json();
  } catch (error) {
    console.error(`Failed to fetch from AI API:`, error);
    return null;
  }
}

export const aiApi = {
  knowledgeBase: {
    retrieve: (query: string, maxResults: number = 5, tenantId?: string) =>
      fetchAI<AIRetrievalResponse>('/api/v1/ai/knowledge-base/retrieve', {
        method: 'POST',
        body: JSON.stringify({ query, max_results: maxResults, tenant_id: tenantId }),
      }),
  },

  chat: {
    send: (messages: ChatMessage[], tenantId?: string, context?: string) =>
      fetchAI<ChatResponse>('/api/v1/ai/chat', {
        method: 'POST',
        body: JSON.stringify({ messages, tenant_id: tenantId, context }),
      }),
  },
};