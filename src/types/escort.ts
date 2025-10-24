// Escort Types for displaying both admin profiles and user ads

export interface Escort {
  id: number;
  name: string;
  slug: string;
  age: number;
  location: string;
  category: string;
  main_photo_url?: string;
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  views_count: number;
  clicks_count: number;
  created_at: string;
  
  // Source and badge info
  badge: string; // 'Admin Verified', 'Independent', 'Agency', 'Featured'
  source: 'admin' | 'user'; // Source of the listing
  user_id?: string; // Only for user ads
  is_featured?: boolean;
}

export interface EscortsResponse {
  escorts: Escort[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

export interface EscortFilters {
  category?: string;
  location?: string;
  limit?: number;
  offset?: number;
}
