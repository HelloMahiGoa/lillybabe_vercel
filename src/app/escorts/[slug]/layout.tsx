import type { Metadata } from 'next';
import Script from 'next/script';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lillybabe.com';

  const title = `Escort profile ${slug} | LillyBabe`;
  const description = `Escort profile page for ${slug}.`;
  const canonical = `${siteUrl}/escorts/${slug}`;

  return {
    title,
    description,
    keywords: profile.meta_keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      images: ogImage ? [{ url: ogImage }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function ProfileLayout({ children, params }: LayoutProps) {
  const { slug } = await params;

  return (
    <>
      {children}
    </>
  );
}


