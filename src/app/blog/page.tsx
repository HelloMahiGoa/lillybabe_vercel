import { Metadata } from 'next';
import BlogClient from '@/components/blog/blog-client';

export const metadata: Metadata = {
  title: 'Blog - Chennai Escorts News & Updates | LillyBabe',
  description: 'Stay updated with the latest news, tips, and insights about Chennai escorts service. Read our blog for helpful information and updates from LillyBabe.',
  keywords: [
    'Chennai Escorts Blog',
    'Escort Service News',
    'Chennai Escorts Updates',
    'LillyBabe Blog',
    'Escort Service Tips',
    'Chennai Call Girls News',
    'Escort Service Information',
    'Chennai Escorts Guide',
    'Escort Service Blog',
    'Chennai Escorts Articles'
  ],
  openGraph: {
    title: 'Blog - Chennai Escorts News & Updates | LillyBabe',
    description: 'Stay updated with the latest news, tips, and insights about Chennai escorts service. Read our blog for helpful information and updates from LillyBabe.',
    url: 'https://lillybabe.com/blog',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    images: [
      {
        url: '/images/blog-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Blog - Chennai Escorts News & Updates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Chennai Escorts News & Updates | LillyBabe',
    description: 'Stay updated with the latest news, tips, and insights about Chennai escorts service. Read our blog for helpful information and updates from LillyBabe.',
    images: ['/images/blog-banner.webp'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
