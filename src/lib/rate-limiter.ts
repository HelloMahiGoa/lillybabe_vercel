// Rate limiting implementation for API routes

// In-memory store for rate limiting
// In production, this should use Redis or similar
const ipRequests: Record<string, { count: number; resetTime: number }> = {};

interface RateLimitConfig {
  maxRequests: number;  // Maximum requests within window
  windowMs: number;     // Time window in milliseconds
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
}

// Default configurations
const DEFAULT_CONFIGS: Record<string, RateLimitConfig> = {
  // For authentication endpoints
  auth: {
    maxRequests: 5,      // 5 requests
    windowMs: 60 * 1000  // per 1 minute
  },
  // For standard API endpoints
  standard: {
    maxRequests: 60,      // 60 requests
    windowMs: 60 * 1000   // per 1 minute
  },
  // For sensitive operations
  sensitive: {
    maxRequests: 10,       // 10 requests
    windowMs: 60 * 1000    // per 1 minute
  }
};

/**
 * Check if a request from the given IP should be rate limited
 * @param ip The IP address to check
 * @param configType The rate limit configuration to use
 * @returns Result of the rate limit check
 */
export function checkRateLimit(ip: string, configType: keyof typeof DEFAULT_CONFIGS = 'standard'): RateLimitResult {
  const config = DEFAULT_CONFIGS[configType];
  const now = Date.now();
  
  // Clean up expired entries periodically
  if (Math.random() < 0.01) { // 1% chance to trigger cleanup
    cleanupExpiredEntries();
  }
  
  // Initialize or reset if needed
  if (!ipRequests[ip] || ipRequests[ip].resetTime < now) {
    ipRequests[ip] = {
      count: 0,
      resetTime: now + config.windowMs
    };
  }
  
  // Increment and check
  ipRequests[ip].count += 1;
  
  const result: RateLimitResult = {
    success: ipRequests[ip].count <= config.maxRequests,
    limit: config.maxRequests,
    remaining: Math.max(0, config.maxRequests - ipRequests[ip].count),
    resetTime: ipRequests[ip].resetTime
  };
  
  return result;
}

/**
 * Apply rate limiting to a request
 * @param ip The IP address of the requester
 * @param configType The rate limit configuration to use
 * @returns Object with success status and headers
 */
export function applyRateLimit(ip: string, configType: keyof typeof DEFAULT_CONFIGS = 'standard'): {
  limited: boolean;
  headers: Record<string, string>;
} {
  const result = checkRateLimit(ip, configType);
  
  return {
    limited: !result.success,
    headers: {
      'X-RateLimit-Limit': result.limit.toString(),
      'X-RateLimit-Remaining': result.remaining.toString(),
      'X-RateLimit-Reset': Math.ceil(result.resetTime / 1000).toString()
    }
  };
}

/**
 * Clean up expired rate limit entries
 */
function cleanupExpiredEntries(): void {
  const now = Date.now();
  
  for (const ip in ipRequests) {
    if (ipRequests[ip].resetTime < now) {
      delete ipRequests[ip];
    }
  }
}
