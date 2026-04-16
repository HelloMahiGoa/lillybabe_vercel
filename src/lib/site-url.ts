/** Canonical site origin for absolute OG URLs and metadata. */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://lillybabe.com'
  );
}
