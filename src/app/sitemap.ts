import { MetadataRoute } from 'next';
import { getStaticPages } from '@/lib/sitemap-utils';
import { getEnabledProfileSlugRows } from '@/lib/profiles/queries';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://lillybabe.com';
  const currentDate = new Date();
  const staticPages = getStaticPages(baseUrl, currentDate);

  const rows = await getEnabledProfileSlugRows();
  const profilePages: MetadataRoute.Sitemap = rows.map((row) => ({
    url: `${baseUrl}/profiles/${row.slug}`,
    lastModified: row.updated_at ? new Date(row.updated_at) : currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...profilePages];
}