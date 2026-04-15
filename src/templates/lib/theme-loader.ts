/**
 * Theme Configuration Loader
 * Loads and applies theme configurations at runtime
 */

export interface ThemeConfig {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory?: string;
  isPremium: boolean;
  isActive: boolean;
  description?: string;
  previewImage?: string;
  structure: StructureConfig;
  theme: ThemeConfigColors;
  components?: ComponentsConfig;
  fonts?: FontsConfig;
  spacing?: SpacingConfig;
  effects?: EffectsConfig;
  metadata?: MetadataConfig;
}

export interface StructureConfig {
  home: HomeStructure;
  category: CategoryStructure;
  product: ProductStructure;
  cart: CartStructure;
  checkout: CheckoutStructure;
  account: AccountStructure;
  auth: AuthStructure;
  search: SearchStructure;
  tenant: TenantStructure;
}

export interface HomeStructure {
  layout: string;
  sections: string[];
  heroStyle?: {
    height?: string;
    textAlignment?: string;
    showOverlay?: boolean;
    overlayOpacity?: number;
    showScrollIndicator?: boolean;
  };
  productGrid?: {
    columns?: number;
    aspectRatio?: string;
    showQuickView?: boolean;
    showAddToCart?: boolean;
  };
  navigation?: {
    style?: string;
    sticky?: boolean;
    showSearch?: boolean;
    showCart?: boolean;
    showWishlist?: boolean;
  };
  footer?: {
    style?: string;
    columns?: number;
    showSocial?: boolean;
    showPayment?: boolean;
  };
}

export interface CategoryStructure {
  layout: string;
  grid?: {
    columns?: number;
    style?: string;
    showImage?: boolean;
    aspectRatio?: string;
  };
  sidebar?: {
    width?: string;
    collapsible?: boolean;
    showClearAll?: boolean;
  };
  pagination?: {
    style?: string;
    position?: string;
  };
  hero?: {
    showBanner?: boolean;
    bannerStyle?: string;
  };
  sortOptions?: {
    position?: string;
    showResultCount?: boolean;
  };
}

export interface ProductStructure {
  layout: string;
  gallery?: {
    thumbnailPosition?: string;
    showZoom?: boolean;
    showThumbnails?: boolean;
    thumbnailColumns?: number;
  };
  info?: {
    showRating?: boolean;
    showPrice?: boolean;
    showStock?: boolean;
    showSku?: boolean;
    showShare?: boolean;
    showWishlist?: boolean;
  };
  variants?: {
    showColorSwatches?: boolean;
    showSizeSelector?: boolean;
    swatchStyle?: string;
  };
  addToCart?: {
    showQuantity?: boolean;
    buttonStyle?: string;
  };
  tabs?: {
    style?: string;
    position?: string;
  };
  relatedProducts?: {
    show?: boolean;
    style?: string;
    columns?: number;
  };
}

export interface CartStructure {
  layout: string;
  showImages?: boolean;
  showQuantities?: boolean;
  showRemove?: boolean;
  showCoupon?: boolean;
  showSummary?: boolean;
  continueShoppingUrl?: string;
}

export interface CheckoutStructure {
  layout: string;
  steps?: string[];
  showOrderSummary?: boolean;
  summaryPosition?: string;
  expressCheckout?: boolean;
}

export interface AccountStructure {
  layout: string;
  sidebar?: {
    width?: string;
    collapsible?: boolean;
  };
  showAvatar?: boolean;
  showQuickStats?: boolean;
}

export interface AuthStructure {
  layout: string;
  showSocialLogin?: boolean;
  showRememberMe?: boolean;
  showForgotPassword?: boolean;
}

export interface SearchStructure {
  layout: string;
  showFilters?: boolean;
  showRecent?: boolean;
  showSuggestions?: boolean;
  autocomplete?: boolean;
}

export interface TenantStructure {
  layout: string;
  sidebar?: {
    width?: string;
    collapsible?: boolean;
    showLogo?: boolean;
    showStoreName?: boolean;
  };
  header?: {
    showSearch?: boolean;
    showNotifications?: boolean;
    showProfile?: boolean;
  };
  dashboard?: {
    showStats?: boolean;
    showRecentOrders?: boolean;
    showQuickActions?: boolean;
    showRevenueChart?: boolean;
    showTopProducts?: boolean;
  };
  products?: {
    showGrid?: boolean;
    showFilters?: boolean;
    showBulkActions?: boolean;
    showImportExport?: boolean;
  };
  orders?: {
    showStatusFilters?: boolean;
    showDateRange?: boolean;
    showExport?: boolean;
    showBulkActions?: boolean;
  };
}

export interface ThemeConfigColors {
  mode?: string;
  defaultMode?: string;
  colors: {
    primary?: string;
    primaryHover?: string;
    secondary?: string;
    secondaryHover?: string;
    accent?: string;
    accentHover?: string;
    background?: string;
    surface?: string;
    surfaceAlt?: string;
    textPrimary?: string;
    textSecondary?: string;
    textMuted?: string;
    border?: string;
    borderLight?: string;
    success?: string;
    warning?: string;
    error?: string;
    info?: string;
  };
  dark?: {
    background?: string;
    surface?: string;
    textPrimary?: string;
    textSecondary?: string;
  };
}

export interface ComponentsConfig {
  buttons?: {
    primary?: ComponentStyle;
    secondary?: ComponentStyle;
    outline?: ComponentStyle;
    ghost?: ComponentStyle;
  };
  cards?: {
    borderRadius?: string;
    shadow?: string;
    shadowHover?: string;
    border?: string;
    padding?: string;
    hoverEffect?: string;
  };
  inputs?: {
    borderRadius?: string;
    border?: string;
    focusBorder?: string;
    padding?: string;
    background?: string;
  };
  badges?: {
    borderRadius?: string;
    padding?: string;
    fontSize?: string;
    fontWeight?: string;
  };
  navigation?: {
    itemSpacing?: string;
    activeIndicator?: string;
    dropdownStyle?: string;
  };
  productCard?: {
    imageAspectRatio?: string;
    showBadges?: boolean;
    showQuickView?: boolean;
    showAddToCart?: boolean;
    showWishlist?: boolean;
    showRating?: boolean;
    hoverEffect?: string;
  };
}

export interface ComponentStyle {
  borderRadius?: string;
  padding?: string;
  fontWeight?: string;
  textTransform?: string;
  shadow?: string;
  hoverEffect?: string;
}

export interface FontsConfig {
  heading?: {
    family?: string;
    weight?: string;
    transform?: string;
    letterSpacing?: string;
  };
  body?: {
    family?: string;
    weight?: string;
    size?: string;
    lineHeight?: string;
  };
  accent?: {
    family?: string;
    weight?: string;
  };
}

export interface SpacingConfig {
  sectionPadding?: string;
  containerWidth?: string;
  gridGap?: string;
  cardGap?: string;
}

export interface EffectsConfig {
  shadows?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  borderRadius?: {
    none?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    full?: string;
  };
  transitions?: {
    fast?: string;
    normal?: string;
    slow?: string;
  };
  animations?: {
    entrance?: string;
    hover?: string;
  };
}

export interface MetadataConfig {
  author?: string;
  version?: string;
  createdAt?: string;
  updatedAt?: string;
  tags?: string[];
  compatibility?: {
    minVersion?: string;
    features?: string[];
  };
}

// Theme registry - stores all available themes
const themeRegistry: Map<string, ThemeConfig> = new Map();

// Default theme
let currentTheme: ThemeConfig | null = null;

/**
 * Register a theme in the registry
 */
export function registerTheme(theme: ThemeConfig): void {
  themeRegistry.set(theme.id, theme);
}

/**
 * Get a theme by ID
 */
export function getTheme(themeId: string): ThemeConfig | undefined {
  return themeRegistry.get(themeId);
}

/**
 * Get all registered themes
 */
export function getAllThemes(): ThemeConfig[] {
  return Array.from(themeRegistry.values());
}

/**
 * Get themes by category
 */
export function getThemesByCategory(category: string): ThemeConfig[] {
  return getAllThemes().filter(t => t.category === category);
}

/**
 * Get themes by subcategory
 */
export function getThemesBySubcategory(subcategory: string): ThemeConfig[] {
  return getAllThemes().filter(t => t.subcategory === subcategory);
}

/**
 * Set current active theme
 */
export function setCurrentTheme(themeId: string): boolean {
  const theme = getTheme(themeId);
  if (theme) {
    currentTheme = theme;
    return true;
  }
  return false;
}

/**
 * Get current active theme
 */
export function getCurrentTheme(): ThemeConfig | null {
  return currentTheme;
}

/**
 * Apply theme CSS variables to document
 */
export function applyThemeToDocument(theme: ThemeConfig, mode?: 'light' | 'dark'): void {
  const colors = mode === 'dark' && theme.theme.dark 
    ? { ...theme.theme.colors, ...theme.theme.dark }
    : theme.theme.colors;
  
  const root = document.documentElement;
  
  // Apply colors
  if (colors.primary) root.style.setProperty('--theme-primary', colors.primary);
  if (colors.primaryHover) root.style.setProperty('--theme-primary-hover', colors.primaryHover);
  if (colors.secondary) root.style.setProperty('--theme-secondary', colors.secondary);
  if (colors.accent) root.style.setProperty('--theme-accent', colors.accent);
  if (colors.background) root.style.setProperty('--theme-background', colors.background);
  if (colors.surface) root.style.setProperty('--theme-surface', colors.surface);
  if (colors.textPrimary) root.style.setProperty('--theme-text-primary', colors.textPrimary);
  if (colors.textSecondary) root.style.setProperty('--theme-text-secondary', colors.textSecondary);
  if (colors.border) root.style.setProperty('--theme-border', colors.border);
  if (colors.success) root.style.setProperty('--theme-success', colors.success);
  if (colors.warning) root.style.setProperty('--theme-warning', colors.warning);
  if (colors.error) root.style.setProperty('--theme-error', colors.error);
  
  // Apply component styles
  if (theme.components?.buttons?.primary) {
    const btn = theme.components.buttons.primary;
    if (btn.borderRadius) root.style.setProperty('--btn-radius', btn.borderRadius);
    if (btn.padding) root.style.setProperty('--btn-padding', btn.padding);
  }
  
  if (theme.components?.cards) {
    const card = theme.components.cards;
    if (card.borderRadius) root.style.setProperty('--card-radius', card.borderRadius);
    if (card.shadow) root.style.setProperty('--card-shadow', card.shadow);
    if (card.shadowHover) root.style.setProperty('--card-shadow-hover', card.shadowHover);
  }
  
  // Apply spacing
  if (theme.spacing) {
    if (theme.spacing.sectionPadding) root.style.setProperty('--section-padding', theme.spacing.sectionPadding);
    if (theme.spacing.containerWidth) root.style.setProperty('--container-width', theme.spacing.containerWidth);
    if (theme.spacing.gridGap) root.style.setProperty('--grid-gap', theme.spacing.gridGap);
  }
  
  // Apply fonts
  if (theme.fonts) {
    if (theme.fonts.heading?.family) root.style.setProperty('--font-heading', theme.fonts.heading.family);
    if (theme.fonts.body?.family) root.style.setProperty('--font-body', theme.fonts.body.family);
  }
  
  // Add theme class to body
  document.body.classList.remove('theme-light', 'theme-dark');
  document.body.classList.add(`theme-${mode || theme.theme.defaultMode || 'light'}`);
}

/**
 * Load theme from JSON config
 */
export async function loadThemeFromConfig(config: ThemeConfig): Promise<void> {
  registerTheme(config);
  setCurrentTheme(config.id);
  applyThemeToDocument(config);
}

/**
 * Generate CSS from theme config
 */
export function generateThemeCSS(theme: ThemeConfig): string {
  const colors = theme.theme.colors;
  
  return `
    :root {
      --theme-primary: ${colors.primary || '#000000'};
      --theme-primary-hover: ${colors.primaryHover || colors.primary || '#000000'};
      --theme-secondary: ${colors.secondary || '#333333'};
      --theme-accent: ${colors.accent || '#FA5014'};
      --theme-background: ${colors.background || '#FFFFFF'};
      --theme-surface: ${colors.surface || '#F9FAFB'};
      --theme-text-primary: ${colors.textPrimary || '#111827'};
      --theme-text-secondary: ${colors.textSecondary || '#6B7280'};
      --theme-border: ${colors.border || '#E5E7EB'};
      --theme-success: ${colors.success || '#10B981'};
      --theme-warning: ${colors.warning || '#F59E0B'};
      --theme-error: ${colors.error || '#EF4444'};
      
      ${theme.spacing?.sectionPadding ? `--section-padding: ${theme.spacing.sectionPadding};` : ''}
      ${theme.spacing?.containerWidth ? `--container-width: ${theme.spacing.containerWidth};` : ''}
      ${theme.spacing?.gridGap ? `--grid-gap: ${theme.spacing.gridGap};` : ''}
      
      ${theme.fonts?.heading?.family ? `--font-heading: ${theme.fonts.heading.family}, sans-serif;` : ''}
      ${theme.fonts?.body?.family ? `--font-body: ${theme.fonts.body.family}, sans-serif;` : ''}
      
      ${theme.components?.buttons?.primary?.borderRadius ? `--btn-radius: ${theme.components.buttons.primary.borderRadius};` : ''}
      ${theme.components?.cards?.borderRadius ? `--card-radius: ${theme.components.cards.borderRadius};` : ''}
    }
    
    ${theme.components?.cards?.shadow ? `.card { box-shadow: ${theme.components.cards.shadow}; }` : ''}
  `;
}

export default {
  registerTheme,
  getTheme,
  getAllThemes,
  getThemesByCategory,
  getThemesBySubcategory,
  setCurrentTheme,
  getCurrentTheme,
  applyThemeToDocument,
  loadThemeFromConfig,
  generateThemeCSS
};
