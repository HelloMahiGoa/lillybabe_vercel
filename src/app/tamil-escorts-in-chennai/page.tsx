import { Metadata } from 'next';
import { TamilEscortsPageClient } from '@/components/gallery/tamil-escorts-page-client';

export const metadata: Metadata = {
  title: 'Tamil Escorts in Chennai | Local Companions | LillyBabe',
  description:
    'Explore a focused gallery of Tamil escorts in Chennai with LillyBabe. See reference photos, understand how matching, areas and pricing work, and know what to expect before you book.',
  keywords: [
    'Tamil escorts Chennai',
    'Tamil escorts in Chennai',
    'local escorts Chennai',
    'Chennai escort gallery',
  ],
  openGraph: {
    title: 'Tamil Escorts in Chennai | Local Companions | LillyBabe',
    description:
      'Tamil escorts in Chennai — how they generally look, how we match you, and what the booking flow usually feels like.',
    url: 'https://lillybabe.com/tamil-escorts-in-chennai',
    images: [
      {
        url: '/images/tamil-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Tamil escorts in Chennai — LillyBabe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamil Escorts in Chennai | Local Companions | LillyBabe',
    description:
      'A clear, neutral overview of our Tamil escorts in Chennai, with example photos and straightforward booking steps.',
    images: ['/images/tamil-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/tamil-escorts-in-chennai',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://lillybabe.com/tamil-escorts-in-chennai#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://lillybabe.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Gallery',
          item: 'https://lillybabe.com/gallery',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Tamil Escorts in Chennai',
          item: 'https://lillybabe.com/tamil-escorts-in-chennai',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://lillybabe.com/tamil-escorts-in-chennai#service',
      name: 'Tamil Escorts in Chennai',
      description:
        'A focused category page that explains how Tamil escorts in Chennai are matched, which areas are usually covered, and how pricing is shared clearly before confirmation.',
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      provider: {
        '@type': 'Organization',
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
      },
      url: 'https://lillybabe.com/tamil-escorts-in-chennai',
      serviceType: 'Companionship booking coordination',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lillybabe.com/tamil-escorts-in-chennai#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the Tamil escorts in Chennai verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work only with Tamil escorts in Chennai whose profiles and photos have been checked so you know who you are meeting and what to expect.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a Tamil escort in Chennai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through WhatsApp or Telegram with your area, rough time, and that you prefer a Tamil escort. We suggest realistic options and only move ahead if they feel right for you.',
          },
        },
      ],
    },
  ],
} as const;

export default function TamilEscortsPage() {
  return (
    <>
      <TamilEscortsPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
