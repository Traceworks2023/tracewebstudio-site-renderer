// Category-specific sections
// Each category has its own unique components

export const RestaurantSections = {
  Hero: () => import('./restaurant/HeroRestaurant.astro'),
};

export const BeautySections = {
  Hero: () => import('./beauty/HeroBeauty.astro'),
};

export const FashionSections = {
  Hero: () => import('./fashion/HeroFashion.astro'),
};

export const FitnessSections = {
  Hero: () => import('./fitness/HeroFitness.astro'),
};

export const HotelSections = {
  Hero: () => import('./hotel/HeroHotel.astro'),
};

export const AgencySections = {
  Hero: () => import('./agency/HeroAgency.astro'),
};

export const PhotographerSections = {
  Hero: () => import('./photographer/HeroPhotographer.astro'),
};

export const JewelrySections = {
  Hero: () => import('./jewelry/HeroJewelry.astro'),
};

// Map template slugs to category sections
export function getCategoryForTemplate(slug: string): string {
  const slugLower = slug.toLowerCase();

  // Restaurant category
  if (slugLower.includes('restaurant') || slugLower.includes('cafe') || slugLower.includes('food')) {
    return 'restaurant';
  }

  // Beauty category
  if (slugLower.includes('beauty') || slugLower.includes('makeup')) {
    return 'beauty';
  }

  // Fashion category
  if (slugLower.includes('fashion') || slugLower.includes('clothing') || slugLower.includes('apparel')) {
    return 'fashion';
  }

  // Fitness category
  if (slugLower.includes('gym') || slugLower.includes('fitness') || slugLower.includes('workout')) {
    return 'fitness';
  }

  // Hotel category
  if (slugLower.includes('hotel') || slugLower.includes('resort') || slugLower.includes('travel')) {
    return 'hotel';
  }

  // Agency/Portfolio category
  if (slugLower.includes('agency') || slugLower.includes('portfolio') || slugLower.includes('designer') || slugLower.includes('developer') || slugLower.includes('freelancer')) {
    return 'agency';
  }

  // Photographer category
  if (slugLower.includes('photographer') || slugLower.includes('photo') || slugLower.includes('videographer')) {
    return 'photographer';
  }

  // Jewelry category
  if (slugLower.includes('jewelry') || slugLower.includes('jewel')) {
    return 'jewelry';
  }

  // Corporate/Business category
  if (slugLower.includes('corporate') || slugLower.includes('business') || slugLower.includes('consulting') || slugLower.includes('corporate')) {
    return 'corporate';
  }

  // Healthcare category
  if (slugLower.includes('clinic') || slugLower.includes('hospital') || slugLower.includes('medical') || slugLower.includes('pharmacy') || slugLower.includes('health')) {
    return 'healthcare';
  }

  // Default to generic
  return 'generic';
}
