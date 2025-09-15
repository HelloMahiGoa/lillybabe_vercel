import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lillybabe.com'
  const currentDate = new Date()
  
  // Static pages
  const staticPages = [
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
  ]

  // Main locations page
  const locationPages = [
    {
      url: `${baseUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }
  ]

  // Category-based pages
  const categories = [
    'celebrity-escorts-in-chennai',
    'teen-escorts-in-chennai', 
    'chennai-escort-girls', 
    'housewife-escorts-in-chennai', 
    'russian-escorts-in-chennai'
  ]

  const categoryPages = categories.map(category => ({
    url: `${baseUrl}/${category}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))

  // Blog pages
  const blogPages = [
    'best-areas-chennai-escort-services-locations',
    'chennai-escort-industry-evolution-history',
    'chennai-escort-privacy-protection-guide',
    'chennai-escort-rates-pricing-guide',
    'chennai-escort-services-types-explained',
    'first-time-booking-chennai-escort-guide',
    'how-to-find-perfect-chennai-escort-guide',
    'russian-escorts-chennai-exotic-beauties',
    'tamil-escorts-chennai-local-beauty-guide'
  ]

  const blogPagesList = blogPages.map(blog => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Additional important pages
  const additionalPages = [
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
    }
  ]

  return [...staticPages, ...locationPages, ...categoryPages, ...blogPagesList, ...additionalPages]
}