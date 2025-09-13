// Offline handling utilities for PWA
export interface CachedData {
  data: any;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

export class OfflineHandler {
  private static instance: OfflineHandler;
  private cache = new Map<string, CachedData>();
  private isOnline = true; // Default to true for SSR

  private constructor() {
    // Only initialize client-side features if we're in the browser
    if (typeof window !== 'undefined') {
      this.isOnline = navigator.onLine;
      
      // Listen for online/offline events
      window.addEventListener('online', () => {
        this.isOnline = true;
        console.log('[OfflineHandler] Back online');
      });

      window.addEventListener('offline', () => {
        this.isOnline = false;
        console.log('[OfflineHandler] Gone offline');
      });
    }
  }

  public static getInstance(): OfflineHandler {
    if (!OfflineHandler.instance) {
      OfflineHandler.instance = new OfflineHandler();
    }
    return OfflineHandler.instance;
  }

  public isOnlineStatus(): boolean {
    return this.isOnline;
  }

  public setCache(key: string, data: any, ttl: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
    console.log(`[OfflineHandler] Cached data for key: ${key}`);
  }

  public getCache(key: string): any | null {
    const cached = this.cache.get(key);
    if (!cached) {
      return null;
    }

    const isExpired = Date.now() - cached.timestamp > cached.ttl;
    if (isExpired) {
      this.cache.delete(key);
      console.log(`[OfflineHandler] Cache expired for key: ${key}`);
      return null;
    }

    console.log(`[OfflineHandler] Retrieved cached data for key: ${key}`);
    return cached.data;
  }

  public clearCache(): void {
    this.cache.clear();
    console.log('[OfflineHandler] Cache cleared');
  }

  public getCacheSize(): number {
    return this.cache.size;
  }

  public async fetchWithOfflineSupport(
    url: string,
    options: RequestInit = {},
    cacheKey: string,
    ttl: number = 5 * 60 * 1000
  ): Promise<{ data: any; fromCache: boolean; isOffline: boolean }> {
    const isOffline = !this.isOnlineStatus();

    // Try to get from cache first
    const cachedData = this.getCache(cacheKey);
    if (cachedData) {
      return {
        data: cachedData,
        fromCache: true,
        isOffline
      };
    }

    // If offline and no cache, return offline message
    if (isOffline) {
      return {
        data: {
          profiles: [],
          offline: true,
          message: 'You are currently offline. Please check your internet connection and try again.',
          cachedProfiles: this.getCachedProfiles()
        },
        fromCache: false,
        isOffline: true
      };
    }

    try {
      // Try to fetch from network
      const response = await fetch(url, {
        ...options,
        cache: 'no-cache' // Always try to get fresh data when online
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Cache the successful response
      this.setCache(cacheKey, data, ttl);

      return {
        data,
        fromCache: false,
        isOffline: false
      };

    } catch (error) {
      console.error('[OfflineHandler] Network error:', error);
      
      // If network fails, try to return cached data
      const cachedData = this.getCache(cacheKey);
      if (cachedData) {
        return {
          data: cachedData,
          fromCache: true,
          isOffline: false
        };
      }

      // If no cache and network fails, return offline message
      return {
        data: {
          profiles: [],
          offline: true,
          message: 'Unable to connect to the server. Please check your internet connection.',
          cachedProfiles: this.getCachedProfiles()
        },
        fromCache: false,
        isOffline: true
      };
    }
  }

  private getCachedProfiles(): any[] {
    const profiles: any[] = [];
    
    // Collect all cached profile data
    for (const [key, cached] of this.cache.entries()) {
      if (key.startsWith('profiles-') && cached.data?.profiles) {
        profiles.push(...cached.data.profiles);
      }
    }

    // Remove duplicates based on ID
    const uniqueProfiles = profiles.filter((profile, index, self) => 
      index === self.findIndex(p => p.id === profile.id)
    );

    return uniqueProfiles;
  }
}

// Export singleton instance (lazy initialization)
export const offlineHandler = (() => {
  if (typeof window !== 'undefined') {
    return OfflineHandler.getInstance();
  }
  // Return a mock instance for SSR
  return {
    isOnlineStatus: () => true,
    setCache: () => {},
    getCache: () => null,
    clearCache: () => {},
    fetchWithOfflineSupport: async (url: string, options: RequestInit = {}, cacheKey: string, ttl: number = 5 * 60 * 1000) => {
      // During SSR, just return empty data
      return {
        data: { profiles: [], offline: true, message: 'Server-side rendering' },
        fromCache: false,
        isOffline: false
      };
    },
    getCachedProfiles: () => []
  };
})();

// Utility function to check if we're offline
export const isOffline = (): boolean => {
  if (typeof window === 'undefined') {
    return false; // Default to online during SSR
  }
  return !navigator.onLine;
};

// Utility function to get offline message
export const getOfflineMessage = (): string => {
  return 'You are currently offline. Some features may not be available.';
};
