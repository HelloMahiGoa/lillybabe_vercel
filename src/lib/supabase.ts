import { createClient } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client for frontend (browser)
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

// Admin client with service role (server-side only)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          age: number;
          ethnicity: string;
          rating: number;
          response_rate: number;
          availability: string;
          price_per_hour: number;
          description: string;
          is_featured: boolean;
          is_verified: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          age: number;
          ethnicity: string;
          rating?: number;
          response_rate?: number;
          availability?: string;
          price_per_hour: number;
          description?: string;
          is_featured?: boolean;
          is_verified?: boolean;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          age?: number;
          ethnicity?: string;
          rating?: number;
          response_rate?: number;
          availability?: string;
          price_per_hour?: number;
          description?: string;
          is_featured?: boolean;
          is_verified?: boolean;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      profile_photos: {
        Row: {
          id: string;
          profile_id: string;
          photo_url: string;
          is_primary: boolean;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          profile_id: string;
          photo_url: string;
          is_primary?: boolean;
          order_index?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          profile_id?: string;
          photo_url?: string;
          is_primary?: boolean;
          order_index?: number;
          created_at?: string;
        };
      };
      service_areas: {
        Row: {
          id: string;
          name: string;
          description: string;
          response_time: string;
          features: string[];
          image_url: string;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string;
          response_time?: string;
          features?: string[];
          image_url?: string;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          response_time?: string;
          features?: string[];
          image_url?: string;
          is_active?: boolean;
          created_at?: string;
        };
      };
      testimonials: {
        Row: {
          id: string;
          client_name: string;
          client_location: string;
          rating: number;
          content: string;
          is_featured: boolean;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          client_name: string;
          client_location?: string;
          rating: number;
          content: string;
          is_featured?: boolean;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          client_name?: string;
          client_location?: string;
          rating?: number;
          content?: string;
          is_featured?: boolean;
          is_active?: boolean;
          created_at?: string;
        };
      };
      faqs: {
        Row: {
          id: string;
          question: string;
          answer: string;
          category: string;
          order_index: number;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          question: string;
          answer: string;
          category?: string;
          order_index?: number;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          question?: string;
          answer?: string;
          category?: string;
          order_index?: number;
          is_active?: boolean;
          created_at?: string;
        };
      };
    };
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ServiceArea = Database['public']['Tables']['service_areas']['Row'];
export type Testimonial = Database['public']['Tables']['testimonials']['Row'];
export type FAQ = Database['public']['Tables']['faqs']['Row'];
