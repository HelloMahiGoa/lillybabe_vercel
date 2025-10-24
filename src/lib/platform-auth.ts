// Platform User Authentication Library
// Handles authentication for Independent Escorts and Agency users

import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PlatformUser, UserRegistrationData, AuthResponse } from '@/types/user-ads';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const COOKIE_NAME = 'platform_session';

// Create Supabase client with service role for admin operations
function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase credentials');
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

// Register a new platform user
export async function registerUser(data: UserRegistrationData): Promise<AuthResponse> {
  try {
    const supabase = createAdminClient();

    // Check if user already exists
    const { data: existing } = await supabase
      .from('platform_users')
      .select('email')
      .eq('email', data.email)
      .single();

    if (existing) {
      return {
        success: false,
        error: 'User with this email already exists'
      };
    }

    // Hash password
    const password_hash = await bcrypt.hash(data.password, 10);

    // Create user
    const { data: user, error } = await supabase
      .from('platform_users')
      .insert({
        email: data.email,
        password_hash,
        full_name: data.full_name,
        phone_number: data.phone_number,
        whatsapp_number: data.whatsapp_number || data.phone_number,
        user_type_id: data.user_type_id,
        is_verified: false,
        is_active: true
      })
      .select('*')
      .single();

    if (error || !user) {
      return {
        success: false,
        error: error?.message || 'Failed to create user'
      };
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        userType: user.user_type_id
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      success: true,
      user: user as PlatformUser,
      session: token,
      message: 'Registration successful'
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred'
    };
  }
}

// Login user
export async function loginUser(email: string, password: string): Promise<AuthResponse> {
  try {
    const supabase = createAdminClient();

    // Get user by email
    const { data: user, error } = await supabase
      .from('platform_users')
      .select('*, user_type:user_types(*)')
      .eq('email', email)
      .single();

    if (error || !user) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    // Check if user is active
    if (!user.is_active) {
      return {
        success: false,
        error: 'Your account has been deactivated. Please contact support.'
      };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password_hash);
    if (!isValidPassword) {
      return {
        success: false,
        error: 'Invalid email or password'
      };
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        userType: user.user_type_id
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    // Remove password hash from response
    const { password_hash, ...userWithoutPassword } = user;

    return {
      success: true,
      user: userWithoutPassword as PlatformUser,
      session: token,
      message: 'Login successful'
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred'
    };
  }
}

// Get current user from session
export async function getCurrentUser(): Promise<PlatformUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) {
      console.log('No platform session token found');
      return null;
    }

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      userId: string;
      email: string;
      userType: number;
    };

    // Get user from database
    const supabase = createAdminClient();
    const { data: user, error } = await supabase
      .from('platform_users')
      .select('*, user_type:user_types(*)')
      .eq('id', decoded.userId)
      .eq('is_active', true)
      .single();

    if (error) {
      // If table doesn't exist, return null gracefully
      if (error.code === '42P01' || error.message.includes('does not exist')) {
        console.warn('platform_users table does not exist');
        return null;
      }
      console.error('Error fetching user:', error);
      return null;
    }

    if (!user) {
      console.log('User not found or inactive');
      return null;
    }

    const { password_hash, ...userWithoutPassword } = user;
    return userWithoutPassword as PlatformUser;
  } catch (error: any) {
    console.error('Get current user error:', error.message || error);
    return null;
  }
}

// Set session cookie
export async function setSessionCookie(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set({
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax', // Changed from 'strict' to 'lax' for better compatibility
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/'
  });
}

// Clear session cookie
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

// DEPRECATED: Subscription system is no longer used
// All users now use pay-per-ad system
// Kept for backward compatibility only
export async function hasActiveSubscription(userId: string): Promise<boolean> {
  return false;
}

// DEPRECATED: Subscription system is no longer used
// All users now use pay-per-ad system
// Kept for backward compatibility only
export async function getActiveSubscription(userId: string) {
  return null;
}

// Request password reset
export async function requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = createAdminClient();
    
    // Check if user exists
    const { data: user } = await supabase
      .from('platform_users')
      .select('id, email, full_name')
      .eq('email', email)
      .single();

    if (!user) {
      // Don't reveal if user exists or not for security
      return {
        success: true,
        message: 'If an account exists with this email, you will receive password reset instructions.'
      };
    }

    // Generate reset token
    const resetToken = jwt.sign(
      { userId: user.id, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // TODO: Send email with reset link
    // For now, just return success
    console.log(`Password reset token for ${email}: ${resetToken}`);

    return {
      success: true,
      message: 'If an account exists with this email, you will receive password reset instructions.'
    };
  } catch (error) {
    console.error('Password reset request error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.'
    };
  }
}

// Reset password
export async function resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };

    // Hash new password
    const password_hash = await bcrypt.hash(newPassword, 10);

    // Update password
    const supabase = createAdminClient();
    const { error } = await supabase
      .from('platform_users')
      .update({ password_hash, updated_at: new Date().toISOString() })
      .eq('id', decoded.userId);

    if (error) {
      return {
        success: false,
        message: 'Failed to reset password'
      };
    }

    return {
      success: true,
      message: 'Password reset successful. You can now login with your new password.'
    };
  } catch (error) {
    console.error('Password reset error:', error);
    return {
      success: false,
      message: 'Invalid or expired reset token'
    };
  }
}

// Change password (for logged-in users)
export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  try {
    const supabase = createAdminClient();

    // Get current user
    const { data: user } = await supabase
      .from('platform_users')
      .select('password_hash')
      .eq('id', userId)
      .single();

    if (!user) {
      return {
        success: false,
        message: 'User not found'
      };
    }

    // Verify current password
    const isValid = await bcrypt.compare(currentPassword, user.password_hash);
    if (!isValid) {
      return {
        success: false,
        message: 'Current password is incorrect'
      };
    }

    // Hash new password
    const password_hash = await bcrypt.hash(newPassword, 10);

    // Update password
    const { error } = await supabase
      .from('platform_users')
      .update({ password_hash, updated_at: new Date().toISOString() })
      .eq('id', userId);

    if (error) {
      return {
        success: false,
        message: 'Failed to change password'
      };
    }

    return {
      success: true,
      message: 'Password changed successfully'
    };
  } catch (error) {
    console.error('Change password error:', error);
    return {
      success: false,
      message: 'An error occurred'
    };
  }
}

