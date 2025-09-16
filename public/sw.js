// Service Worker for Performance Optimization
const CACHE_NAME = 'lillybabe-v1';
const STATIC_CACHE = 'lillybabe-static-v1';
const DYNAMIC_CACHE = 'lillybabe-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/images/hero-bg.webp',
  '/images/independent-1.jpg',
  '/images/independent-2.jpg',
  '/images/independent-3.webp',
  '/images/logo.webp',
  '/manifest.json'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE;
            })
            .map((cacheName) => {
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Skip range requests and other problematic request types
  if (request.headers.get('range') || request.headers.get('if-range')) {
    return;
  }

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (request.destination === 'document') {
    event.respondWith(handleDocumentRequest(request));
  } else if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(handleAssetRequest(request));
  } else {
    event.respondWith(handleApiRequest(request));
  }
});

// Handle image requests with cache-first strategy
async function handleImageRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    // Only cache cacheable responses
    if (isCacheableResponse(networkResponse)) {
      await safeCachePut(cache, request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    // Return a placeholder image if network fails
    return new Response(
      '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af">Image not available</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
}

// Handle document requests with network-first strategy
async function handleDocumentRequest(request) {
  try {
    const networkResponse = await fetch(request);
    // Only cache cacheable responses
    if (isCacheableResponse(networkResponse)) {
      const cache = await caches.open(DYNAMIC_CACHE);
      await safeCachePut(cache, request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// Handle asset requests (JS, CSS) with cache-first strategy
async function handleAssetRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    // Only cache cacheable responses
    if (isCacheableResponse(networkResponse)) {
      await safeCachePut(cache, request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return new Response('Asset not available', { status: 503 });
  }
}

// Handle API requests with network-first strategy
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    // Only cache cacheable responses
    if (isCacheableResponse(networkResponse)) {
      const cache = await caches.open(DYNAMIC_CACHE);
      await safeCachePut(cache, request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('API not available', { status: 503 });
  }
}

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Sync any pending analytics data
  try {
    const pendingData = await getPendingAnalytics();
    if (pendingData.length > 0) {
      await sendAnalytics(pendingData);
      await clearPendingAnalytics();
    }
  } catch (error) {
    console.error('Analytics sync failed:', error);
  }
}

// Helper function to check if a response is cacheable
function isCacheableResponse(response) {
  // Only cache successful responses (200-299) and avoid partial content (206)
  return response.ok && response.status !== 206 && response.status < 300;
}

// Helper function to safely cache a response
async function safeCachePut(cache, request, response) {
  try {
    await cache.put(request, response);
  } catch (error) {
    console.warn('Failed to cache response:', error);
    // Don't throw the error, just log it and continue
  }
}

// Helper functions for analytics sync
async function getPendingAnalytics() {
  // Implementation for getting pending analytics data
  return [];
}

async function sendAnalytics(data) {
  // Implementation for sending analytics data
  return Promise.resolve();
}

async function clearPendingAnalytics() {
  // Implementation for clearing pending analytics data
  return Promise.resolve();
}
