// CSRF Protection implementation
import { createHmac, randomBytes } from 'crypto';
import { cookies } from 'next/headers';

const CSRF_COOKIE_NAME = 'csrf_token';
const CSRF_HEADER_NAME = 'x-csrf-token';
const CSRF_SECRET = process.env.CSRF_SECRET || 'default_csrf_secret_key_change_me';

/**
 * Generate a random CSRF token and store it in a cookie
 * @returns The generated CSRF token
 */
export async function generateCsrfToken(): Promise<string> {
  // Generate a random token
  const csrfToken = randomBytes(32).toString('hex');
  
  // Create an HMAC for the token
  const hmac = createHmac('sha256', CSRF_SECRET)
    .update(csrfToken)
    .digest('hex');
  
  // The actual token is a combination of the random value and its HMAC
  const token = `${csrfToken}|${hmac}`;
  
  // Store the token in a cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: CSRF_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60 * 24 // 24 hours
  });
  
  return token;
}

/**
 * Validate a CSRF token against the one stored in the cookie
 * @param providedToken The token provided in the request header
 * @returns True if the token is valid, false otherwise
 */
export async function validateCsrfToken(providedToken: string | null): Promise<boolean> {
  if (!providedToken) {
    return false;
  }
  
  // Get the token from the cookie
  const cookieStore = await cookies();
  const storedToken = cookieStore.get(CSRF_COOKIE_NAME)?.value;
  
  if (!storedToken) {
    return false;
  }
  
  // Compare the provided token with the stored token
  // This is a constant-time comparison to prevent timing attacks
  return providedToken === storedToken && validateTokenHmac(providedToken);
}

/**
 * Validate the HMAC of a token
 * @param token The token to validate
 * @returns True if the HMAC is valid, false otherwise
 */
function validateTokenHmac(token: string): boolean {
  // Split the token into the random value and its HMAC
  const [csrfToken, storedHmac] = token.split('|');
  
  if (!csrfToken || !storedHmac) {
    return false;
  }
  
  // Compute the HMAC for the random value
  const computedHmac = createHmac('sha256', CSRF_SECRET)
    .update(csrfToken)
    .digest('hex');
  
  // Compare the computed HMAC with the stored one
  // This is a constant-time comparison to prevent timing attacks
  return storedHmac === computedHmac;
}

/**
 * Create a middleware function that validates CSRF tokens
 * @param handler The next.js route handler
 * @returns A new handler with CSRF protection
 */
export function withCsrfProtection(handler: Function) {
  return async (req: Request, params: any) => {
    // Skip CSRF check for GET, HEAD, OPTIONS requests
    const method = req.method.toUpperCase();
    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
      return handler(req, params);
    }
    
    // Check for the CSRF token in the headers
    const csrfToken = req.headers.get(CSRF_HEADER_NAME);
    
    if (!(await validateCsrfToken(csrfToken))) {
      return Response.json(
        { error: 'Invalid or missing CSRF token' },
        { status: 403 }
      );
    }
    
    return handler(req, params);
  };
}
