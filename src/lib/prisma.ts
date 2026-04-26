// Stub for prisma client — site-renderer loads from filesystem, not DB
export const prisma = {
  template: {
    findMany: async (opts?: any) => [],
    findUnique: async (opts?: any) => null,
    create: async (opts?: any) => opts?.data,
    update: async (opts?: any) => opts?.data,
    delete: async (opts?: any) => null,
  },
  website: {
    findMany: async () => [],
    findUnique: async () => null,
  },
  order: {
    findMany: async () => [],
  },
  product: {
    findMany: async () => [],
  },
  customer: {
    findMany: async () => [],
  },
  tenant: {
    findUnique: async () => null,
  },
} as any;
