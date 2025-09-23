import type { Metadata } from 'next';
import Script from 'next/script';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

async function fetchProfile(slug: string) {
  try {
    // Use absolute URL with NEXT_PUBLIC_SITE_URL
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';
    const apiUrl = `${baseUrl}/api/profiles/${slug}`;
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const res = await fetch(apiUrl, { 
      next: { revalidate: 300 },
      headers: { 'Connection': 'close' },
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) return null;
    const data = await res.json();
    return data.profile as any;
  } catch (error) {
    console.error('[Layout] Error fetching profile:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const profile = await fetchProfile(slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';

  if (!profile) {
    return {
      title: 'Profile not found | LillyBabe',
      description: 'This profile could not be found.',
      robots: { index: false }
    };
  }

  const title = profile.meta_title || `${profile.name} - ${profile.category} in ${profile.location} | LillyBabe`;
  const description = profile.meta_description || `Meet ${profile.name} in ${profile.location}.`;
  const ogImage = profile.og_image ? (profile.og_image.startsWith('http') ? profile.og_image : `${siteUrl}${profile.og_image}`) : undefined;
  const twImage = profile.twitter_image ? (profile.twitter_image.startsWith('http') ? profile.twitter_image : `${siteUrl}${profile.twitter_image}`) : ogImage;
  const canonical = profile.canonical_url || `${siteUrl}/escorts/${profile.slug}`;

  return {
    title,
    description,
    keywords: profile.meta_keywords,
    alternates: { canonical },
    openGraph: {
      title: profile.og_title || title,
      description: profile.og_description || description,
      type: 'website',
      url: canonical,
      images: ogImage ? [{ url: ogImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: profile.twitter_title || title,
      description: profile.twitter_description || description,
      images: twImage ? [twImage] : undefined
    }
  };
}

export default async function ProfileLayout({ children, params }: LayoutProps) {
  const { slug } = await params;
  const profile = await fetchProfile(slug);
  const schema = profile?.schema_markup ? JSON.stringify(profile.schema_markup) : null;

  return (
    <>
      {schema ? (
        <Script id="profile-schema" type="application/ld+json">
          {schema}
        </Script>
      ) : null}
      {children}
    </>
  );
}


