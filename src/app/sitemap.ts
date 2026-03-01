import { MetadataRoute } from 'next'
import { getStaticPages } from '@/lib/sitemap-utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lillybabe.com'
  const currentDate = new Date()
  const staticPages = getStaticPages(baseUrl, currentDate)
  return staticPages
}