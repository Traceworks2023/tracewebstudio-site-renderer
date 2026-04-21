// Plan Entitlements System
// Defines feature access by subscription tier

export type PlanTier = 'free' | 'starter' | 'growth' | 'professional' | 'enterprise';

export interface PlanEntitlements {
  tier: PlanTier;
  name: string;
  pages: {
    maxPages: number;
    maxLandingPages: number;
    hasBlog: boolean;
    hasBookings: boolean;
    hasSupportPortal: boolean;
  };
  sections: {
    maxSectionsPerPage: number;
    advancedVariants: boolean;
    premiumCarousels: boolean;
    customAnimations: boolean;
  };
  features: {
    customDomain: boolean;
    analytics: boolean;
    seoTools: boolean;
    apiAccess: boolean;
    whiteLabel: boolean;
    prioritySupport: boolean;
    sso: boolean;
  };
  storage: {
    maxProducts: number;
    maxImages: number;
    maxStorageMB: number;
  };
}

export const PLAN_ENTITLEMENTS: Record<PlanTier, PlanEntitlements> = {
  free: {
    tier: 'free',
    name: 'Free',
    pages: {
      maxPages: 3,
      maxLandingPages: 0,
      hasBlog: false,
      hasBookings: false,
      hasSupportPortal: false
    },
    sections: {
      maxSectionsPerPage: 10,
      advancedVariants: false,
      premiumCarousels: false,
      customAnimations: false
    },
    features: {
      customDomain: false,
      analytics: false,
      seoTools: false,
      apiAccess: false,
      whiteLabel: false,
      prioritySupport: false,
      sso: false
    },
    storage: {
      maxProducts: 10,
      maxImages: 50,
      maxStorageMB: 100
    }
  },
  starter: {
    tier: 'starter',
    name: 'Starter',
    pages: {
      maxPages: 10,
      maxLandingPages: 2,
      hasBlog: true,
      hasBookings: false,
      hasSupportPortal: false
    },
    sections: {
      maxSectionsPerPage: 20,
      advancedVariants: false,
      premiumCarousels: false,
      customAnimations: false
    },
    features: {
      customDomain: false,
      analytics: true,
      seoTools: true,
      apiAccess: false,
      whiteLabel: false,
      prioritySupport: false,
      sso: false
    },
    storage: {
      maxProducts: 100,
      maxImages: 500,
      maxStorageMB: 1000
    }
  },
  growth: {
    tier: 'growth',
    name: 'Growth',
    pages: {
      maxPages: 25,
      maxLandingPages: 5,
      hasBlog: true,
      hasBookings: true,
      hasSupportPortal: false
    },
    sections: {
      maxSectionsPerPage: 40,
      advancedVariants: true,
      premiumCarousels: true,
      customAnimations: false
    },
    features: {
      customDomain: true,
      analytics: true,
      seoTools: true,
      apiAccess: true,
      whiteLabel: false,
      prioritySupport: false,
      sso: false
    },
    storage: {
      maxProducts: 1000,
      maxImages: 5000,
      maxStorageMB: 10000
    }
  },
  professional: {
    tier: 'professional',
    name: 'Professional',
    pages: {
      maxPages: 50,
      maxLandingPages: 15,
      hasBlog: true,
      hasBookings: true,
      hasSupportPortal: true
    },
    sections: {
      maxSectionsPerPage: 100,
      advancedVariants: true,
      premiumCarousels: true,
      customAnimations: true
    },
    features: {
      customDomain: true,
      analytics: true,
      seoTools: true,
      apiAccess: true,
      whiteLabel: true,
      prioritySupport: true,
      sso: false
    },
    storage: {
      maxProducts: 10000,
      maxImages: 50000,
      maxStorageMB: 100000
    }
  },
  enterprise: {
    tier: 'enterprise',
    name: 'Enterprise',
    pages: {
      maxPages: -1, // Unlimited
      maxLandingPages: -1,
      hasBlog: true,
      hasBookings: true,
      hasSupportPortal: true
    },
    sections: {
      maxSectionsPerPage: -1,
      advancedVariants: true,
      premiumCarousels: true,
      customAnimations: true
    },
    features: {
      customDomain: true,
      analytics: true,
      seoTools: true,
      apiAccess: true,
      whiteLabel: true,
      prioritySupport: true,
      sso: true
    },
    storage: {
      maxProducts: -1,
      maxImages: -1,
      maxStorageMB: -1
    }
  }
};

export function getEntitlements(plan: PlanTier): PlanEntitlements {
  return PLAN_ENTITLEMENTS[plan];
}

export function canAccessFeature(plan: PlanTier, feature: keyof PlanEntitlements['features']): boolean {
  const entitlements = PLAN_ENTITLEMENTS[plan];
  return entitlements.features[feature];
}

export function canUseSectionVariant(plan: PlanTier, variantType: 'basic' | 'advanced' | 'premium'): boolean {
  if (variantType === 'basic') return true;
  if (variantType === 'advanced') {
    return ['growth', 'professional', 'enterprise'].includes(plan);
  }
  if (variantType === 'premium') {
    return ['professional', 'enterprise'].includes(plan);
  }
  return false;
}

export function isWithinPageLimit(plan: PlanTier, currentPageCount: number): boolean {
  const limit = PLAN_ENTITLEMENTS[plan].pages.maxPages;
  return limit === -1 || currentPageCount < limit;
}

export function isWithinStorageLimit(plan: PlanTier, currentStorageMB: number): boolean {
  const limit = PLAN_ENTITLEMENTS[plan].storage.maxStorageMB;
  return limit === -1 || currentStorageMB < limit;
}
