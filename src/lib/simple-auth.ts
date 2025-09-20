import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.SUPABASE_JWT_SECRET || process.env.JWT_SECRET || 'your-secret-key';

export interface AdminUser {
  id: number;
  username: string;
  email: string;
  role: string;
  is_active: boolean;
  created_at: string;
  last_login?: string;
}

export interface JWTPayload {
  userId: number;
  username: string;
  role: string;
  iat: number;
  exp: number;
}

// Simple admin user for testing (when database is not available)
const SIMPLE_ADMIN_USER: AdminUser = {
  id: 1,
  username: 'admin',
  email: 'admin@lillybabe.com',
  role: 'admin',
  is_active: true,
  created_at: new Date().toISOString(),
  last_login: new Date().toISOString()
};

// Simple admin password hash (admin123)
const ADMIN_PASSWORD_HASH = '$2b$12$6ovdyJGXnn.Kx/vIguITyO9NuED8K.AhlgsFw.QjXhYjytTDTYKdy';

// Generate JWT token
export function generateToken(user: AdminUser): string {
  return jwt.sign(
    {
      userId: user.id,
      username: user.username,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
}

// Verify JWT token
export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as JWTPayload;
  } catch (error) {
    return null;
  }
}

// Compare password
export async function comparePassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Get current user from cookies (simple version)
export async function getCurrentUser(): Promise<AdminUser | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token')?.value;
    
    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return null;
    }

    // For simple auth, just return the admin user if token is valid
    if (decoded.username === 'admin' && decoded.role === 'admin') {
      return SIMPLE_ADMIN_USER;
    }

    return null;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Authenticate user (simple version)
export async function authenticateUser(username: string, password: string): Promise<AdminUser | null> {
  try {
    // Check if it's the admin user
    if (username === 'admin') {
      const isValidPassword = await comparePassword(password, ADMIN_PASSWORD_HASH);
      if (isValidPassword) {
        return SIMPLE_ADMIN_USER;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error authenticating user:', error);
    return null;
  }
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser();
  return user !== null;
}

// Check if user has specific role
export async function hasRole(requiredRole: string): Promise<boolean> {
  const user = await getCurrentUser();
  return user?.role === requiredRole || user?.role === 'super_admin';
}
