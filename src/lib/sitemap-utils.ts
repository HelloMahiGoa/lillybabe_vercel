/**
 * Sitemap URL lists.
 *
 * Do not use fs.readdir() for routes: on Vercel the sitemap handler runs in a
 * traced serverless bundle where `src/app` may not be fully present on disk,
 * so dynamic discovery returns missing entries in production while dev works.
 *
 * When you add a `*-escorts` route or a blog post folder, update the arrays below.
 */

/** Folders under `src/app` that are location escort pages (`/{slug}`). */
export const LOCATION_ESCORT_SLUGS = [
  'adyar-escorts',
  'anna-nagar-escorts',
  'ecr-escorts',
  'egmore-escorts',
  'guindy-escorts',
  'kilpauk-escorts',
  'nungambakkam-escorts',
  'omr-escorts',
  'teynampet-escorts',
  't-nagar-escorts',
] as const;

/** Blog post folders under `src/app/blog` (not `/blog` itself). */
export const BLOG_POST_SLUGS = [
  'best-areas-chennai-escort-services-locations',
  'chennai-escort-industry-evolution-history',
  'chennai-escort-privacy-protection-guide',
  'chennai-escort-rates-pricing-guide',
  'chennai-escort-safety-tips-guide',
  'chennai-escort-services-types-explained',
  'first-time-booking-chennai-escort-guide',
  'how-to-find-perfect-chennai-escort-guide',
  'russian-escorts-chennai-exotic-beauties',
  'tamil-escorts-chennai-local-beauty-guide',
] as const;

export function getLocationPages(): string[] {
  return [...LOCATION_ESCORT_SLUGS];
}

export function getBlogPages(): string[] {
  return [...BLOG_POST_SLUGS];
}

/**
 * Get all static pages that should be included in sitemap
 */
export function getStaticPages(baseUrl: string, currentDate: Date) {
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/escorts`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lillybabe`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
}

/**
 * Get all category pages
 */
export function getCategoryPages(baseUrl: string, currentDate: Date) {
  const categories = [
    'celebrity-escorts-in-chennai',
    'teen-escorts-in-chennai',
    'chennai-escort-girls',
    'housewife-escorts-in-chennai',
    'russian-escorts-in-chennai',
    'independent-escorts-in-chennai',
    'tamil-escorts-in-chennai',
    'mallu-escorts-in-chennai',
    'model-escorts-in-chennai',
  ];

  return categories.map((category) => ({
    url: `${baseUrl}/${category}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));
}
