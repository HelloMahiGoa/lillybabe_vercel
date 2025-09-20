import { readdir } from 'fs/promises'
import { join } from 'path'

/**
 * Dynamically discover location pages from the app directory
 * Looks for directories that end with '-escorts' pattern
 */
export async function getLocationPages(): Promise<string[]> {
  try {
    const appDir = join(process.cwd(), 'src', 'app')
    const entries = await readdir(appDir, { withFileTypes: true })
    
    // Filter for directories that end with '-escorts'
    const locationDirs = entries
      .filter(entry => entry.isDirectory() && entry.name.endsWith('-escorts'))
      .map(entry => entry.name)
    
    return locationDirs
  } catch (error) {
    console.error('Error discovering location pages:', error)
    return []
  }
}

/**
 * Dynamically discover blog pages from the blog directory
 */
export async function getBlogPages(): Promise<string[]> {
  try {
    const blogDir = join(process.cwd(), 'src', 'app', 'blog')
    const entries = await readdir(blogDir, { withFileTypes: true })
    
    // Filter for directories (blog posts)
    const blogDirs = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
    
    return blogDirs
  } catch (error) {
    console.error('Error discovering blog pages:', error)
    return []
  }
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
    }
  ]
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
    'model-escorts-in-chennai'
  ]

  return categories.map(category => ({
    url: `${baseUrl}/${category}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))
}
