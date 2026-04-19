import { MetadataRoute } from 'next';
import {
  getBlogPages,
  getCategoryPages,
  getLocationPages,
  getStaticPages,
} from '@/lib/sitemap-utils';
import { getEnabledProfileSlugRows } from '@/lib/profiles/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lillybabe.com';
  const currentDate = new Date();
  const staticPages = getStaticPages(baseUrl, currentDate);
  const categoryPages = getCategoryPages(baseUrl, currentDate);
  const locationSlugs = getLocationPages();
  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogSlugs = getBlogPages();
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];

  const rows = await getEnabledProfileSlugRows();
  const profilePages: MetadataRoute.Sitemap = rows.map((row) => ({
    url: `${baseUrl}/profiles/${row.slug}`,
    lastModified: row.updated_at ? new Date(row.updated_at) : currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...locationPages, ...blogPages, ...profilePages];
}