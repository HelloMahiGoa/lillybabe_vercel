import { MetadataRoute } from 'next'
import { 
  getLocationPages, 
  getBlogPages, 
  getStaticPages, 
  getCategoryPages 
} from '@/lib/sitemap-utils'

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

  // Fetch user ads slugs dynamically
  let userAdsPages: MetadataRoute.Sitemap = []
  try {
    const response = await fetch(`${baseUrl}/api/ads?limit=1000`, {
      next: { revalidate: 3600 } // Revalidate every hour
    })
    if (response.ok) {
      const data = await response.json()
      userAdsPages = data.ads.map((ad: any) => ({
        url: `${baseUrl}/ads/${ad.slug}`,
        lastModified: new Date(ad.updated_at || ad.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching user ads for sitemap:', error)
  }
  
  // Get static pages
  const staticPages = getStaticPages(baseUrl, currentDate)
  
  // Dynamically discover location pages
  const locationSlugs = await getLocationPages()
  const locationPages = locationSlugs.map(location => ({
    url: `${baseUrl}/${location}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Get category pages
  const categoryPages = getCategoryPages(baseUrl, currentDate)

  // Dynamically discover blog pages
  const blogSlugs = await getBlogPages()
  const blogPagesList = blogSlugs.map(blog => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...locationPages, ...categoryPages, ...blogPagesList, ...profilePages, ...userAdsPages]
}