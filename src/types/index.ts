// Centralized type definitions for the entire application

export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  category: string;
  photo_url: string;
  gallery_urls: string[];
  whatsapp_number: string;
  phone_number: string;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  rating: number;
  reviews_count: number;
  response_rate: number;
  is_featured: boolean;
  is_active: boolean;
  views_count: number;
  clicks_count: number;
  created_at: string;
  updated_at: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string;
  // Newly added SEO and content fields
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  canonical_url?: string;
  schema_markup?: any;
  profile_description?: string;
  // User ad specific fields
  source?: 'admin' | 'user_ad';
  user_type_id?: number;
  badge?: string;
}

// Extended Profile interface for gallery with additional fields
export interface GalleryProfile extends Profile {
  description?: string;
  ethnicity?: string;
  price_per_hour?: number;
  availability?: string;
  is_verified?: boolean;
  profile_photos?: Array<{
    photo_url: string;
    is_primary: boolean;
  }>;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Legacy interface for backward compatibility
export interface LegacyTestimonial {
  id: number;
  client_name: string;
  client_location: string;
  rating: number;
  content: string;
  is_featured: boolean;
  profile_image: string;
}

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export interface SEOData {
  id: number;
  page_type: string;
  page_id?: number;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  schema_markup?: string;
  canonical_url?: string;
  created_at: string;
  updated_at: string;
}

export interface AnalyticsData {
  id: number;
  profile_id?: number;
  event_type: 'view' | 'click' | 'whatsapp' | 'phone';
  user_agent?: string;
  ip_address?: string;
  referrer?: string;
  created_at: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Location {
  id: number;
  name: string;
  slug: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  total?: number;
  limit?: number;
  offset?: number;
}
