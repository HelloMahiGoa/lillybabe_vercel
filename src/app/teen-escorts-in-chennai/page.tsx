import { Metadata } from 'next';
import { TeenEscortsPageClient } from '@/components/gallery/teen-escorts-page-client';

export const metadata: Metadata = {
  title: 'Teen Escorts in Chennai (18+) | Younger Escorts | LillyBabe',
  description:
    'Explore a focused gallery of teen escorts in Chennai (18+) and younger adult escorts with LillyBabe. See reference photos, understand how matching, areas and pricing work, and know what to expect before you book.',
  keywords: [
    'teen escorts Chennai',
    'teen escorts in Chennai 18+',
    'younger escorts Chennai',
    'Chennai escort gallery',
    'verified escorts Chennai',
    'Chennai companionship booking',
  ],
  openGraph: {
    title: 'Teen Escorts in Chennai (18+) | Younger Escorts | LillyBabe',
    description:
      'Teen escorts in Chennai (18+) and younger adult companions — how they generally look, how we match you, and what the booking flow usually feels like.',
    url: 'https://lillybabe.com/teen-escorts-in-chennai',
    images: [
      {
        url: '/images/18+.avif',
        width: 1200,
        height: 630,
        alt: 'Younger Escorts in Chennai (18+) — LillyBabe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Escorts in Chennai (18+) | Younger Escorts | LillyBabe',
    description:
      'A clear, neutral overview of our teen escorts in Chennai (18+) and younger escorts, with example photos and straightforward booking steps.',
    images: ['/images/teen-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/teen-escorts-in-chennai',
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
      '@id': 'https://lillybabe.com/teen-escorts-in-chennai#breadcrumb',
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
          name: 'Younger Escorts in Chennai (18+)',
          item: 'https://lillybabe.com/teen-escorts-in-chennai',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://lillybabe.com/teen-escorts-in-chennai#service',
      name: 'Younger Escorts in Chennai (18+)',
      description:
        'A focused category page that explains how younger (18+) escorts in Chennai are matched, what bookings usually look like, and how pricing is shared clearly before confirmation.',
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      provider: {
        '@type': 'Organization',
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
      },
      url: 'https://lillybabe.com/teen-escorts-in-chennai',
      serviceType: 'Companionship booking coordination',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lillybabe.com/teen-escorts-in-chennai#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I ask for the exact person in a photo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sometimes this is possible and sometimes not — it depends on whether she is actually on shift and free for your time. It is safer to treat photos as a reference for style and look, and then confirm who is realistically available for your slot.',
          },
        },
        {
          '@type': 'Question',
          name: 'How early should I contact you if I want someone younger?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'On most weekdays, a few hours notice is often enough. For weekends, holidays, or busy days in Chennai, it helps if you reach out earlier so there is more choice and less waiting.',
          },
        },
      ],
    },
  ],
} as const;

export default function TeenEscortsPage() {
  return (
    <>
      <TeenEscortsPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}