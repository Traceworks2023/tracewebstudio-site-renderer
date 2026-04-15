// Section Content Types - defines all editable fields per section type

export interface HeroContent {
  heading: string;
  subheading?: string;
  cta_text?: string;
  cta_url?: string;
  secondary_cta_text?: string;
  secondary_cta_url?: string;
  background_image?: string;
  background_video?: string;
  overlay_opacity?: number;
  overlay_color?: string;
  alignment?: 'left' | 'center' | 'right';
  height?: 'full' | 'large' | 'medium' | 'small';
  parallax_enabled?: boolean;
  badge_text?: string;
  badge_color?: string;
}

export interface FeaturedCategoriesContent {
  title: string;
  subtitle?: string;
  section_id: string;
  categories: CategoryItem[];
  layout: 'grid' | 'carousel' | 'masonry';
  columns: 2 | 3 | 4 | 5 | 6;
  show_images: boolean;
  show_names: boolean;
  image_aspect_ratio?: '1:1' | '4:3' | '16:9' | '3:2';
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image?: string;
  description?: string;
  product_count?: number;
}

export interface FeaturedProductsContent {
  title: string;
  subtitle?: string;
  section_id: string;
  products: ProductItem[];
  layout: 'grid' | 'carousel' | 'list';
  columns: 2 | 3 | 4 | 5 | 6;
  show_prices: boolean;
  show_ratings: boolean;
  show_add_to_cart: boolean;
  show_wishlist: boolean;
  limit?: number;
  sort_by?: 'featured' | 'newest' | 'price-asc' | 'price-desc' | 'rating';
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  image?: string;
  hover_image?: string;
  price: number;
  original_price?: number;
  currency?: string;
  rating?: number;
  review_count?: number;
  badge?: string;
  badge_color?: string;
  in_stock?: boolean;
  stock_count?: number;
  is_featured?: boolean;
  is_new?: boolean;
  url?: string;
}

export interface PromoBannerContent {
  heading: string;
  subheading?: string;
  description?: string;
  cta_text?: string;
  cta_url?: string;
  background_type: 'color' | 'image' | 'gradient';
  background_value?: string;
  background_image?: string;
  text_alignment?: 'left' | 'center' | 'right';
  text_color?: string;
  height?: 'full' | 'large' | 'medium' | 'small';
  border_radius?: number;
  margin?: string;
  padding?: string;
}

export interface TrustIndicatorsContent {
  title?: string;
  section_id: string;
  indicators: TrustIndicator[];
  layout: 'row' | 'grid' | 'columns';
  icon_style: 'solid' | 'outline' | 'fill';
  icon_size?: 'small' | 'medium' | 'large';
}

export interface TrustIndicator {
  id: string;
  icon: string;
  title: string;
  description?: string;
  link?: string;
}

export interface TestimonialsContent {
  title: string;
  subtitle?: string;
  section_id: string;
  testimonials: Testimonial[];
  layout: 'grid' | 'carousel' | 'single';
  columns: 1 | 2 | 3 | 4;
  show_ratings: boolean;
  show_avatars: boolean;
  auto_play?: boolean;
  interval?: number;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number;
  product_name?: string;
}

export interface NewsletterContent {
  heading: string;
  description?: string;
  placeholder_text?: string;
  button_text?: string;
  success_message?: string;
  error_message?: string;
  background_color?: string;
  background_image?: string;
  text_color?: string;
  form_layout: 'inline' | 'stacked' | 'minimal';
  show_social_proof?: string;
  privacy_text?: string;
  privacy_url?: string;
}

export interface ProductGalleryContent {
  section_id: string;
  images: GalleryImage[];
  thumbnail_position: 'bottom' | 'left' | 'right';
  show_zoom: boolean;
  zoom_type: 'hover' | 'click' | 'none';
  show_thumbnails: boolean;
  thumbnail_columns?: number;
  aspect_ratio?: '1:1' | '4:3' | '3:2' | '16:9';
  auto_play?: boolean;
  interval?: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt_text?: string;
  thumbnail_url?: string;
  width?: number;
  height?: number;
}

export interface ProductInfoContent {
  section_id: string;
  show_breadcrumb: boolean;
  show_title: boolean;
  show_price: boolean;
  show_original_price: boolean;
  show_description: boolean;
  show_sku: boolean;
  show_stock_status: boolean;
  show_rating: boolean;
  show_share_buttons: boolean;
  show_wishlist: boolean;
  show_short_description: boolean;
}

export interface ProductTabsContent {
  section_id: string;
  tabs: ProductTab[];
  default_tab?: string;
  tab_style: 'underline' | 'box' | 'pills';
  show_border: boolean;
}

export interface ProductTab {
  id: string;
  title: string;
  content: string;
  content_type: 'html' | 'markdown' | 'richtext';
}

export interface RelatedProductsContent {
  title: string;
  subtitle?: string;
  section_id: string;
  products: ProductItem[];
  layout: 'grid' | 'carousel';
  columns: 2 | 3 | 4 | 5;
  limit?: number;
  show_prices: boolean;
  show_ratings: boolean;
}

export interface FilterSidebarContent {
  section_id: string;
  filters: FilterGroup[];
  show_price_range: boolean;
  show_clear_all: boolean;
  show_result_count: boolean;
  filter_style: 'sidebar' | 'drawer' | 'top-bar';
  sort_options: SortOption[];
  default_sort?: string;
}

export interface FilterGroup {
  id: string;
  name: string;
  type: 'checkbox' | 'radio' | 'color' | 'size' | 'range';
  options: FilterOption[];
  is_expanded?: boolean;
  is_visible?: boolean;
}

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  color?: string;
  image?: string;
}

export interface SortOption {
  value: string;
  label: string;
}

export interface CartItemsContent {
  section_id: string;
  show_images: boolean;
  show_prices: boolean;
  show_quantities: boolean;
  show_remove: boolean;
  show_subtotal: boolean;
  allow_update_quantity: boolean;
  continue_shopping_url?: string;
}

export interface CartSummaryContent {
  section_id: string;
  show_subtotal: boolean;
  show_shipping: boolean;
  show_tax: boolean;
  show_discount: boolean;
  show_total: boolean;
  show_checkout_button: boolean;
  show_continue_shopping: boolean;
  show_coupon_input: boolean;
  coupon_placeholder?: string;
  coupon_button_text?: string;
}

export interface CheckoutSummaryContent {
  section_id: string;
  show_images: boolean;
  show_item_names: boolean;
  show_quantities: boolean;
  show_prices: boolean;
  show_subtotal: boolean;
  show_shipping: boolean;
  show_tax: boolean;
  show_discount: boolean;
  show_total: boolean;
}

export interface ShippingFormContent {
  section_id: string;
  fields: FormField[];
  show_address_line_2: boolean;
  show_landmark: boolean;
  show_alternate_phone: boolean;
  address_labels?: AddressLabels;
}

export interface FormField {
  id: string;
  name: string;
  label: string;
  type: 'text' | 'email' | 'phone' | 'select' | 'checkbox' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  width?: 'full' | 'half';
}

export interface AddressLabels {
  address_line_1?: string;
  address_line_2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
  country?: string;
  landmark?: string;
  phone?: string;
  alternate_phone?: string;
}

export interface PaymentOptionsContent {
  section_id: string;
  payment_methods: PaymentMethod[];
  show_icons: boolean;
  default_method?: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  is_enabled?: boolean;
}

export interface FooterContent {
  section_id: string;
  logo_url?: string;
  tagline?: string;
  description?: string;
  columns: FooterColumnContent[];
  bottom_text?: string;
  social_links: SocialLinkContent[];
  show_payment_icons: boolean;
  show_certifications: boolean;
}

export interface FooterColumnContent {
  title: string;
  links: FooterLinkContent[];
}

export interface FooterLinkContent {
  label: string;
  url: string;
  is_external?: boolean;
  is_new_tab?: boolean;
}

export interface SocialLinkContent {
  platform: string;
  url: string;
  icon?: string;
}

export interface CTAContent {
  heading: string;
  subheading?: string;
  description?: string;
  button_text?: string;
  button_url?: string;
  button_style: 'solid' | 'outline' | 'gradient';
  button_color?: string;
  background_type: 'color' | 'image' | 'gradient';
  background_value?: string;
  text_alignment?: 'left' | 'center' | 'right';
  height?: 'full' | 'large' | 'medium' | 'small';
}

export interface FAQContent {
  title: string;
  subtitle?: string;
  section_id: string;
  faqs: FAQ[];
  layout: 'accordion' | 'tabs' | 'two-column';
  allow_multiple_open?: boolean;
  show_search?: boolean;
  style?: 'minimal' | 'cards' | 'bordered';
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface StatsContent {
  title?: string;
  subtitle?: string;
  section_id: string;
  stats: Stat[];
  layout: 'row' | 'grid';
  columns: 2 | 3 | 4 | 5;
  show_icons: boolean;
  counter_animation?: boolean;
}

export interface Stat {
  id: string;
  value: string;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface AboutContent {
  heading: string;
  subheading?: string;
  description: string;
  image?: string;
  image_position?: 'left' | 'right';
  image_ratio?: '1:1' | '4:3' | '16:9';
  show_button: boolean;
  button_text?: string;
  button_url?: string;
  background_color?: string;
}

export interface GalleryGridContent {
  title: string;
  subtitle?: string;
  section_id: string;
  images: GalleryImage[];
  layout: 'grid' | 'masonry' | 'carousel';
  columns: 2 | 3 | 4 | 5;
  spacing?: 'none' | 'small' | 'medium' | 'large';
  show_lightbox: boolean;
  show_captions: boolean;
  aspect_ratio?: '1:1' | '4:3' | '3:2' | '16:9' | 'original';
}

export interface ContactFormContent {
  section_id: string;
  title: string;
  subtitle?: string;
  fields: FormField[];
  show_map: boolean;
  map_embed_url?: string;
  map_address?: string;
  contact_info?: ContactInfo[];
  success_message?: string;
  button_text?: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  is_link?: boolean;
}

export interface TeamContent {
  title: string;
  subtitle?: string;
  section_id: string;
  members: TeamMember[];
  layout: 'grid' | 'carousel' | 'list';
  columns: 2 | 3 | 4 | 5;
  show_bio: boolean;
  show_social: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image?: string;
  social_links?: { platform: string; url: string }[];
}

export interface BlogPostsContent {
  title: string;
  subtitle?: string;
  section_id: string;
  posts: BlogPost[];
  layout: 'grid' | 'list' | 'carousel';
  columns: 2 | 3 | 4;
  show_excerpt: boolean;
  show_author: boolean;
  show_date: boolean;
  show_category: boolean;
  limit?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  author?: string;
  date?: string;
  category?: string;
  url?: string;
}

export interface CustomHTMLContent {
  section_id: string;
  html_content: string;
  css_styles?: string;
  js_code?: string;
  max_width?: string;
  content_alignment?: 'left' | 'center' | 'right';
}
