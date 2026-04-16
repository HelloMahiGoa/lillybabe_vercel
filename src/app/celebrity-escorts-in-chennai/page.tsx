import { Metadata } from 'next';
import { CelebrityEscortsPageClient } from '@/components/gallery/celebrity-escorts-page-client';

export const metadata: Metadata = {
  title: 'Celebrity Escorts in Chennai | Premium Companions | LillyBabe',
  description:
    'Explore a focused gallery of celebrity-style escorts in Chennai with LillyBabe. See reference photos, understand how matching, areas and pricing work, and know what to expect before you book.',
  keywords: [
    'celebrity escorts Chennai',
    'celebrity escorts in Chennai',
    'premium escorts Chennai',
    'Chennai escort gallery',
  ],
  openGraph: {
    title: 'Celebrity Escorts in Chennai | Premium Companions | LillyBabe',
    description:
      'Celebrity-style escorts in Chennai — how they generally look, how we match you, and what the booking flow usually feels like.',
    url: 'https://lillybabe.com/celebrity-escorts-in-chennai',
    images: [
      {
        url: '/images/celebrity.avif',
        width: 1200,
        height: 630,
        alt: 'Celebrity escorts in Chennai — LillyBabe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrity Escorts in Chennai | Premium Companions | LillyBabe',
    description:
      'A clear, neutral overview of our celebrity-style escorts in Chennai, with example photos and straightforward booking steps.',
    images: ['/images/celebrity.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/celebrity-escorts-in-chennai',
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
      '@id': 'https://lillybabe.com/celebrity-escorts-in-chennai#breadcrumb',
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
          name: 'Celebrity Escorts in Chennai',
          item: 'https://lillybabe.com/celebrity-escorts-in-chennai',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://lillybabe.com/celebrity-escorts-in-chennai#service',
      name: 'Celebrity Escorts in Chennai',
      description:
        'A focused category page that explains how celebrity-style escorts in Chennai are matched, which areas are usually covered, and how pricing is shared clearly before confirmation.',
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      provider: {
        '@type': 'Organization',
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
      },
      url: 'https://lillybabe.com/celebrity-escorts-in-chennai',
      serviceType: 'Companionship booking coordination',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lillybabe.com/celebrity-escorts-in-chennai#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the celebrity escorts in Chennai verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work only with celebrity-style escorts in Chennai whose profiles and photos have been checked so you know who you are meeting and what to expect.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a celebrity escort in Chennai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through WhatsApp with your area, rough time, and that you prefer a celebrity-style escort. We suggest realistic options and only move ahead if they feel right for you.',
          },
        },
      ],
    },
  ],
} as const;

export default function CelebrityEscortsPage() {
  return (
    <>
      <CelebrityEscortsPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
