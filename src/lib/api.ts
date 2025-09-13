// API utility functions to replace JSON imports

export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  photo_url: string;
  rating: number;
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  availability: string;
  distance: string;
  category: string;
  slug: string;
  featured: boolean;
  views_count: number;
  clicks_count: number;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
  is_verified: boolean;
  created_at: string;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

// Fetch profiles from API
export async function fetchProfiles(options?: {
  category?: string;
  location?: string;
  featured?: boolean;
  limit?: number;
  offset?: number;
}): Promise<{ profiles: Profile[]; total: number; limit: number; offset: number }> {
  try {
    const params = new URLSearchParams();
    
    if (options?.category) params.append('category', options.category);
    if (options?.location) params.append('location', options.location);
    if (options?.featured !== undefined) params.append('featured', options.featured.toString());
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.offset) params.append('offset', options.offset.toString());

    const response = await fetch(`/api/profiles?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching profiles:', error);
    // Fallback to empty data
    return {
      profiles: [],
      total: 0,
      limit: options?.limit || 50,
      offset: options?.offset || 0
    };
  }
}

// Fetch testimonials from API
export async function fetchTestimonials(options?: {
  limit?: number;
  verified?: boolean;
}): Promise<{ testimonials: Testimonial[]; total: number }> {
  try {
    const params = new URLSearchParams();
    
    if (options?.limit) params.append('limit', options.limit.toString());
    if (options?.verified !== undefined) params.append('verified', options.verified.toString());

    const response = await fetch(`/api/testimonials?${params.toString()}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    // Fallback to empty data
    return {
      testimonials: [],
      total: 0
    };
  }
}

// Fetch featured profiles
export async function fetchFeaturedProfiles(limit: number = 6): Promise<Profile[]> {
  const { profiles } = await fetchProfiles({ featured: true, limit });
  return profiles;
}

// Fetch profiles by category
export async function fetchProfilesByCategory(category: string, limit: number = 12): Promise<Profile[]> {
  const { profiles } = await fetchProfiles({ category, limit });
  return profiles;
}

// Fetch profiles by location
export async function fetchProfilesByLocation(location: string, limit: number = 12): Promise<Profile[]> {
  const { profiles } = await fetchProfiles({ location, limit });
  return profiles;
}

// Track profile view
export async function trackProfileView(profileId: number): Promise<void> {
  try {
    await fetch(`/api/profiles/${profileId}/view`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error tracking profile view:', error);
  }
}

// Track profile click
export async function trackProfileClick(profileId: number): Promise<void> {
  try {
    await fetch(`/api/profiles/${profileId}/click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error tracking profile click:', error);
  }
}
