// Type definitions for the Ads Posting System

export interface UserType {
  id: number;
  name: 'independent' | 'agency';
  description: string | null;
  created_at: string;
}

export interface PlatformUser {
  id: string;
  email: string;
  full_name: string;
  phone_number: string;
  whatsapp_number?: string;
  user_type_id: number;
  is_verified: boolean;
  is_active: boolean;
  profile_image_url?: string;
  created_at: string;
  updated_at: string;
  
  // Joined data
  user_type?: UserType;
}

export interface AdPlan {
  id: number;
  name: string;
  duration_days: number;
  price: number;
  features: {
    ad_limit: number; // Always 1 for pay-per-ad system
    video_required: boolean;
    featured?: boolean;
    [key: string]: any;
  };
  is_active: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export interface UserSubscription {
  id: number;
  user_id: string;
  plan_id: number;
  start_date: string;
  end_date: string;
  payment_id?: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  
  // Joined data
  plan?: AdPlan;
  payment?: Payment;
}

export interface UserAd {
  id: number;
  user_id: string;
  name: string;
  slug: string;
  age: number;
  location: string;
  category: string;
  whatsapp_number: string;
  phone_number: string;
  main_photo_url?: string;
  gallery_images?: string[];
  video_verification_url?: string;
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  profile_description?: string;
  
  // Payment & Plan
  plan_id: number;
  payment_id?: number;
  
  // Status & Approval
  approval_status: 'pending' | 'approved' | 'rejected';
  approved_by?: number;
  approval_date?: string;
  rejection_reason?: string;
  
  // Activity flags
  is_active: boolean;
  is_featured: boolean;
  
  // Expiry
  start_date?: string;
  end_date?: string;
  is_expired: boolean;
  
  // Analytics
  views_count: number;
  clicks_count: number;
  
  created_at: string;
  updated_at: string;
  
  // Joined data
  user?: PlatformUser;
  plan?: AdPlan;
  payment?: Payment;
}

export interface Payment {
  id: number;
  user_id: string;
  plan_id: number;
  ad_id?: number;
  
  // Payment details
  amount: number;
  upi_id: string;
  payment_proof_url?: string;
  transaction_id?: string;
  
  // Status
  payment_status: 'pending' | 'verified' | 'rejected';
  verified_by?: number;
  verification_date?: string;
  rejection_reason?: string;
  
  // Metadata
  payment_notes?: string;
  created_at: string;
  updated_at: string;
  
  // Joined data
  user?: PlatformUser;
  plan?: AdPlan;
  ad?: UserAd;
}

export interface UpiQrCode {
  id: number;
  upi_id: string;
  qr_code_url: string;
  merchant_name: string;
  is_active: boolean;
  created_at: string;
}

// Form Data Types
export interface UserRegistrationData {
  email: string;
  password: string;
  confirmPassword?: string;
  full_name: string;
  phone_number: string;
  whatsapp_number?: string;
  user_type_id: number;
  terms_accepted: boolean;
}

export interface UserLoginData {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface AdCreationData {
  // Step 1: Plan Selection
  plan_id: number;
  
  // Step 2: Basic Information
  name: string;
  age: number;
  location: string;
  category: string;
  whatsapp_number: string;
  phone_number: string;
  
  // Step 3: Photos (handled separately via file upload)
  // main_photo_url will be set after upload
  // gallery_images will be set after upload
  
  // Step 4: Video Verification (handled separately via file upload)
  // video_verification_url will be set after upload
  
  // Step 5: Pricing & Description
  pricing: {
    "1 Shot": string;
    "2 Shots": string;
    "3 Shots": string;
    "Full Night": string;
  };
  profile_description: string;
}

export interface PaymentProofData {
  ad_id: number;
  transaction_id: string;
  payment_proof_file: File;
}

// API Response Types
export interface AuthResponse {
  success: boolean;
  user?: PlatformUser;
  session?: string;
  error?: string;
  message?: string;
}

export interface AdResponse {
  success: boolean;
  ad?: UserAd;
  error?: string;
  message?: string;
}

export interface PaymentResponse {
  success: boolean;
  payment?: Payment;
  upi_qr?: UpiQrCode;
  error?: string;
  message?: string;
}

export interface ListResponse<T> {
  success: boolean;
  data: T[];
  pagination?: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
  error?: string;
}

// Dashboard Stats Types
export interface UserDashboardStats {
  total_ads: number;
  active_ads: number;
  pending_ads: number;
  rejected_ads: number;
  expired_ads: number;
  total_views: number;
  total_clicks: number;
  active_ad_plans?: Array<{
    id: number;
    name: string;
    end_date: string;
    plan: AdPlan;
  }>;
}

// Admin Stats Types
export interface AdminAdsStats {
  total_users: number;
  independent_users: number;
  agency_users: number;
  total_ads: number;
  pending_ads: number;
  approved_ads: number;
  rejected_ads: number;
  active_ads: number;
  pending_payments: number;
  verified_payments: number;
  total_revenue: number;
  monthly_revenue: number;
}

