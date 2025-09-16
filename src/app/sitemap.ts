import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lillybabe.com'
  const currentDate = new Date()
  
  // Fetch profile slugs dynamically
  let profilePages: MetadataRoute.Sitemap = []
  try {
    const response = await fetch(`${baseUrl}/api/profiles-list?limit=1000`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    if (response.ok) {
      const data = await response.json()
      profilePages = data.profiles.map((profile: any) => ({
        url: `${baseUrl}/escorts/${profile.slug}`,
        lastModified: new Date(profile.updated_at || profile.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching profiles for sitemap:', error)
  }
  
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
    'russian-escorts-in-chennai',
    'independent-escorts-in-chennai',
    'tamil-escorts-in-chennai',
    'mallu-escorts-in-chennai',
    'model-escorts-in-chennai'
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

  return [...staticPages, ...locationPages, ...categoryPages, ...blogPagesList, ...additionalPages, ...profilePages]
}