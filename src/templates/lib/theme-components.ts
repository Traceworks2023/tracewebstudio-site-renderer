/**
 * Theme-aware Section Renderer
 * Renders sections based on theme configuration
 */

import { getCurrentTheme, type ThemeConfig } from './theme-loader';

export interface SectionProps {
  theme?: ThemeConfig;
  className?: string;
  style?: Record<string, string>;
}

export interface HeroSectionProps extends SectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaUrl?: string;
  backgroundImage?: string;
}

export interface ProductGridProps extends SectionProps {
  products?: any[];
  columns?: number;
  showQuickView?: boolean;
  showAddToCart?: boolean;
  aspectRatio?: string;
}

export interface ProductCardProps extends SectionProps {
  product?: {
    id: string;
    name: string;
    price: number;
    image: string;
    hoverImage?: string;
    badge?: string;
    rating?: number;
    reviewCount?: number;
  };
  showQuickView?: boolean;
  showAddToCart?: boolean;
  showWishlist?: boolean;
  showRating?: boolean;
  hoverEffect?: string;
  imageAspectRatio?: string;
}

export interface HeaderProps extends SectionProps {
  logo?: string;
  logoText?: string;
  navItems?: Array<{ label: string; url: string }>;
  showSearch?: boolean;
  showCart?: boolean;
  showWishlist?: boolean;
  sticky?: boolean;
}

export interface FooterProps extends SectionProps {
  columns?: Array<{
    title: string;
    links: Array<{ label: string; url: string }>;
  }>;
  showSocial?: boolean;
  showPayment?: boolean;
  copyrightText?: string;
}

/**
 * Get effective theme (from config or current theme)
 */
export function getEffectiveTheme(theme?: ThemeConfig): ThemeConfig | null {
  if (theme) return theme;
  return getCurrentTheme();
}

/**
 * Generate section classes based on theme config
 */
export function getSectionClasses(
  sectionType: string,
  theme?: ThemeConfig
): string {
  const effectiveTheme = getEffectiveTheme(theme);
  const classes = [`section-${sectionType}`];

  if (effectiveTheme?.components?.cards?.hoverEffect) {
    classes.push(`hover-${effectiveTheme.components.cards.hoverEffect}`);
  }

  return classes.join(' ');
}

/**
 * Get spacing value from theme
 */
export function getSpacing(spacingKey: string, theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  return effectiveTheme?.spacing?.[spacingKey as keyof typeof effectiveTheme.spacing] as string || '16px';
}

/**
 * Get color value from theme
 */
export function getColor(colorKey: string, theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  const colors = effectiveTheme?.theme?.colors || {};
  
  const colorMap: Record<string, string> = {
    primary: colors.primary || '#000000',
    secondary: colors.secondary || '#333333',
    accent: colors.accent || '#D4AF37',
    background: colors.background || '#FFFFFF',
    surface: colors.surface || '#F9FAFB',
    text: colors.textPrimary || '#111827',
    textMuted: colors.textSecondary || '#6B7280',
    border: colors.border || '#E5E7EB',
    success: colors.success || '#10B981',
    warning: colors.warning || '#F59E0B',
    error: colors.error || '#EF4444',
  };

  return colorMap[colorKey] || colorKey;
}

/**
 * Get grid columns from theme config
 */
export function getGridColumns(
  pageType: 'home' | 'category' | 'related',
  theme?: ThemeConfig
): number {
  const effectiveTheme = getEffectiveTheme(theme);
  
  if (pageType === 'home' && effectiveTheme?.structure?.home?.productGrid?.columns) {
    return effectiveTheme.structure.home.productGrid.columns;
  }
  if (pageType === 'category' && effectiveTheme?.structure?.category?.grid?.columns) {
    return effectiveTheme.structure.category.grid.columns;
  }
  if (pageType === 'related' && effectiveTheme?.structure?.product?.relatedProducts?.columns) {
    return effectiveTheme.structure.product.relatedProducts.columns;
  }
  
  return 4;
}

/**
 * Get aspect ratio from theme config
 */
export function getAspectRatio(pageType: string, theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  
  if (pageType === 'productGrid' && effectiveTheme?.structure?.home?.productGrid?.aspectRatio) {
    return effectiveTheme.structure.home.productGrid.aspectRatio;
  }
  if (pageType === 'categoryGrid' && effectiveTheme?.structure?.category?.grid?.aspectRatio) {
    return effectiveTheme.structure.category.grid.aspectRatio;
  }
  if (pageType === 'productCard' && effectiveTheme?.components?.productCard?.imageAspectRatio) {
    return effectiveTheme.components.productCard.imageAspectRatio;
  }
  
  return '3/4';
}

/**
 * Build CSS custom properties object from theme
 */
export function buildThemeCSSVars(theme?: ThemeConfig): Record<string, string> {
  const effectiveTheme = getEffectiveTheme(theme);
  if (!effectiveTheme) return {};

  const colors = effectiveTheme.theme?.colors || {};
  const fonts = effectiveTheme.fonts || {};
  const spacing = effectiveTheme.spacing || {};
  const effects = effectiveTheme.effects || {};
  const components = effectiveTheme.components || {};

  return {
    '--theme-primary': colors.primary || '#000000',
    '--theme-primary-hover': colors.primaryHover || colors.primary || '#000000',
    '--theme-secondary': colors.secondary || '#333333',
    '--theme-accent': colors.accent || '#D4AF37',
    '--theme-background': colors.background || '#FFFFFF',
    '--theme-surface': colors.surface || '#F9FAFB',
    '--theme-text': colors.textPrimary || '#111827',
    '--theme-text-muted': colors.textSecondary || '#6B7280',
    '--theme-border': colors.border || '#E5E7EB',
    '--theme-success': colors.success || '#10B981',
    '--theme-warning': colors.warning || '#F59E0B',
    '--theme-error': colors.error || '#EF4444',
    '--theme-font-heading': fonts.heading?.family || 'Playfair Display',
    '--theme-font-body': fonts.body?.family || 'Inter',
    '--theme-font-accent': fonts.accent?.family || 'Cormorant Garamond',
    '--theme-section-padding': spacing.sectionPadding || '80px 0',
    '--theme-container-width': spacing.containerWidth || '1280px',
    '--theme-grid-gap': spacing.gridGap || '24px',
    '--theme-card-radius': components.cards?.borderRadius || '8px',
    '--theme-card-shadow': components.cards?.shadow || '0 1px 3px rgba(0,0,0,0.1)',
    '--theme-card-shadow-hover': components.cards?.shadowHover || '0 10px 25px rgba(0,0,0,0.15)',
    '--theme-btn-radius': components.buttons?.primary?.borderRadius || '4px',
    '--theme-transition': effects.transitions?.normal || '300ms ease',
  };
}

/**
 * Get navigation style from theme
 */
export function getNavigationStyle(theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  return effectiveTheme?.structure?.home?.navigation?.style || 'top-bar';
}

/**
 * Get footer style from theme
 */
export function getFooterStyle(theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  return effectiveTheme?.structure?.home?.footer?.style || 'detailed';
}

/**
 * Get product gallery layout from theme
 */
export function getProductGalleryLayout(theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  return effectiveTheme?.structure?.product?.layout || 'gallery-left-info-right';
}

/**
 * Get category layout from theme
 */
export function getCategoryLayout(theme?: ThemeConfig): string {
  const effectiveTheme = getEffectiveTheme(theme);
  return effectiveTheme?.structure?.category?.layout || 'sidebar-filter-left';
}

/**
 * Check if feature is enabled in theme
 */
export function isFeatureEnabled(
  feature: string,
  pageType: 'home' | 'category' | 'product' | 'cart' | 'checkout' | 'account' | 'auth' | 'search',
  theme?: ThemeConfig
): boolean {
  const effectiveTheme = getEffectiveTheme(theme);
  if (!effectiveTheme) return true;

  const structure = effectiveTheme.structure || {};

  switch (pageType) {
    case 'home':
      if (feature === 'quickView') return structure.home?.productGrid?.showQuickView || false;
      if (feature === 'addToCart') return structure.home?.productGrid?.showAddToCart || false;
      if (feature === 'search') return structure.home?.navigation?.showSearch !== false;
      if (feature === 'cart') return structure.home?.navigation?.showCart !== false;
      if (feature === 'wishlist') return structure.home?.navigation?.showWishlist || false;
      break;
    case 'product':
      if (feature === 'rating') return structure.product?.info?.showRating !== false;
      if (feature === 'price') return structure.product?.info?.showPrice !== false;
      if (feature === 'stock') return structure.product?.info?.showStock || false;
      if (feature === 'sku') return structure.product?.info?.showSku || false;
      if (feature === 'share') return structure.product?.info?.showShare || false;
      if (feature === 'wishlist') return structure.product?.info?.showWishlist || false;
      if (feature === 'colorSwatches') return structure.product?.variants?.showColorSwatches !== false;
      if (feature === 'sizeSelector') return structure.product?.variants?.showSizeSelector !== false;
      if (feature === 'quantity') return structure.product?.addToCart?.showQuantity !== false;
      if (feature === 'relatedProducts') return structure.product?.relatedProducts?.show !== false;
      break;
    case 'category':
      if (feature === 'sidebar') return structure.category?.sidebar !== undefined;
      if (feature === 'pagination') return structure.category?.pagination !== undefined;
      if (feature === 'heroBanner') return structure.category?.hero?.showBanner !== false;
      if (feature === 'resultCount') return structure.category?.sortOptions?.showResultCount || false;
      break;
    case 'cart':
      if (feature === 'images') return structure.cart?.showImages !== false;
      if (feature === 'quantities') return structure.cart?.showQuantities !== false;
      if (feature === 'remove') return structure.cart?.showRemove !== false;
      if (feature === 'coupon') return structure.cart?.showCoupon !== false;
      if (feature === 'summary') return structure.cart?.showSummary !== false;
      break;
    case 'checkout':
      if (feature === 'orderSummary') return structure.checkout?.showOrderSummary !== false;
      if (feature === 'expressCheckout') return structure.checkout?.expressCheckout || false;
      break;
  }

  return true;
}
