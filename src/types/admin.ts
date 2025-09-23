// Admin Panel Types

export interface Profile {
  id: number;
  name: string;
  slug: string;
  age: number;
  location: string;
  category: string;
  whatsapp_number: string;
  phone_number: string;
  main_photo_url?: string;
  gallery_images?: string[];
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  featured: boolean;
  is_active: boolean;
  views_count: number;
  clicks_count: number;
  
  // Profile Description
  profile_description?: string;
  
  // SEO Fields
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  schema_markup?: any;
  
  created_at: string;
  updated_at: string;
}

export interface ProfileAnalytics {
  id: number;
  profile_id: number;
  action_type: 'view' | 'click' | 'whatsapp_click' | 'phone_click';
  ip_address?: string;
  user_agent?: string;
  referrer?: string;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active: boolean;
  created_at: string;
}

export interface Location {
  id: number;
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active: boolean;
  created_at: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location?: string;
  profile_id?: number;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
}

export interface SeoSettings {
  id: number;
  page_type: 'home' | 'profile' | 'category' | 'location';
  page_slug?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  schema_markup?: any;
  robots_txt?: string;
  sitemap_priority: number;
  sitemap_changefreq: string;
  created_at: string;
  updated_at: string;
}

export interface SeoAnalytics {
  id: number;
  page_url: string;
  search_query?: string;
  keyword?: string;
  position?: number;
  impressions: number;
  clicks: number;
  ctr?: number;
  date: string;
  created_at: string;
}

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  role: string;
  is_active: boolean;
  created_at: string;
  last_login?: string;
}

// Form Types
export interface ProfileFormData {
  name: string;
  slug: string;
  age: number;
  location: string;
  category: string;
  whatsapp_number: string;
  phone_number: string;
  main_photo_url?: string;
  gallery_images?: string[];
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  featured: boolean;
  is_active: boolean;
  
  // Profile Description
  profile_description?: string;
  
  // SEO Fields
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  schema_markup?: any;
}

export interface CategoryFormData {
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active: boolean;
}

export interface LocationFormData {
  name: string;
  slug: string;
  description?: string;
  sort_order?: number;
  is_active: boolean;
}

export interface TestimonialFormData {
  name: string;
  rating: number;
  comment: string;
  location?: string;
  profile_id?: number;
  is_verified: boolean;
  is_active: boolean;
}

export interface SeoSettingsFormData {
  page_type: 'home' | 'profile' | 'category' | 'location';
  page_slug?: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  schema_markup?: any;
  robots_txt?: string;
  sitemap_priority: number;
  sitemap_changefreq: string;
}

// Dashboard Types
export interface DashboardStats {
  totalProfiles: number;
  activeProfiles: number;
  featuredProfiles: number;
  totalViews: number;
  totalClicks: number;
  totalTestimonials: number;
  verifiedTestimonials: number;
  totalCategories: number;
  totalLocations: number;
}

export interface RecentActivity {
  id: number;
  type: 'profile_created' | 'profile_updated' | 'testimonial_added' | 'analytics_recorded';
  description: string;
  created_at: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter Types
export interface ProfileFilters {
  search?: string;
  category?: string;
  location?: string;
  featured?: boolean;
  is_active?: boolean;
  sortBy?: 'name' | 'age' | 'created_at' | 'views_count';
  sortOrder?: 'asc' | 'desc';
}

export interface TestimonialFilters {
  search?: string;
  rating?: number;
  profile_id?: number;
  is_verified?: boolean;
  is_active?: boolean;
  sortBy?: 'name' | 'rating' | 'created_at';
  sortOrder?: 'asc' | 'desc';
}

// Upload Types
export interface UploadResponse {
  success: boolean;
  url?: string;
  error?: string;
}

export interface ImageUploadData {
  file: File;
  type: 'main' | 'gallery';
  profileId?: number;
}
