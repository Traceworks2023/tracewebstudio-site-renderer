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

export const VideographerSections = {
  Hero: () => import('./videographer/HeroVideographer.astro'),
};

export const HairStylistSections = {
  Hero: () => import('./hair_stylist/HeroHairStylist.astro'),
};

export const FashionDesignerSections = {
  Hero: () => import('./fashion_designer/HeroFashionDesigner.astro'),
};

export const ModelSections = {
  Hero: () => import('./model/HeroModel.astro'),
};

export const InteriorDesignerSections = {
  Hero: () => import('./interior_designer/HeroInteriorDesigner.astro'),
};

export const ArchitectSections = {
  Hero: () => import('./architect/HeroArchitect.astro'),
};

export const ArtistPainterSections = {
  Hero: () => import('./artist_painter/HeroArtistPainter.astro'),
};

export const IllustratorSections = {
  Hero: () => import('./illustrator/HeroIllustrator.astro'),
};

export const CalligrapherSections = {
  Hero: () => import('./calligrapher/HeroCalligrapher.astro'),
};

export const CraftArtistSections = {
  Hero: () => import('./craft_artist/HeroCraftArtist.astro'),
};

export const FloralDesignerSections = {
  Hero: () => import('./floral_designer/HeroFloralDesigner.astro'),
};

export const WeddingPlannerSections = {
  Hero: () => import('./wedding_planner/HeroWeddingPlanner.astro'),
};

export const EventPlannerSections = {
  Hero: () => import('./event_planner/HeroEventPlanner.astro'),
};

export const DecorStylistSections = {
  Hero: () => import('./decor_stylist/HeroDecorStylist.astro'),
};

export const BakerSections = {
  Hero: () => import('./baker/HeroBaker.astro'),
};

export const ChefSections = {
  Hero: () => import('./chef/HeroChef.astro'),
};

export const FitnessTrainerSections = {
  Hero: () => import('./fitness_trainer/HeroFitnessTrainer.astro'),
};

export const YogaInstructorSections = {
  Hero: () => import('./yoga_instructor/HeroYogaInstructor.astro'),
};

export const PersonalCoachSections = {
  Hero: () => import('./personal_coach/HeroPersonalCoach.astro'),
};

export const TutorSections = {
  Hero: () => import('./tutor/HeroTutor.astro'),
};

export const ContentCreatorSections = {
  Hero: () => import('./content_creator/HeroContentCreator.astro'),
};

export const InfluencerSections = {
  Hero: () => import('./influencer/HeroInfluencer.astro'),
};

export const NutritionistSections = {
  Hero: () => import('./nutritionist/HeroNutritionist.astro'),
};

export const SkincareSpecialistSections = {
  Hero: () => import('./skincare_specialist/HeroSkincareSpecialist.astro'),
};

export const NailArtistSections = {
  Hero: () => import('./nail_artist/HeroNailArtist.astro'),
};

export const BoutiqueOwnerSections = {
  Hero: () => import('./boutique_owner/HeroBoutiqueOwner.astro'),
};

export const CreativeConsultantSections = {
  Hero: () => import('./creative_consultant/HeroCreativeConsultant.astro'),
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