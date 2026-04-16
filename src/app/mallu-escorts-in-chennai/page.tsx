import { Metadata } from 'next';
import { MalluEscortsPageClient } from '@/components/gallery/mallu-escorts-page-client';

export const metadata: Metadata = {
  title: 'Mallu Escorts in Chennai | Kerala Beauty & South Indian Charm | LillyBabe',
  description:
    'Explore Mallu escorts in Chennai with LillyBabe. Kerala beauty, Malayalam-speaking companionship, and South Indian charm. See how we match you, areas we cover, and what to expect.',
  keywords: [
    'Mallu escorts Chennai',
    'Mallu escorts in Chennai',
    'Kerala escorts Chennai',
    'Chennai Mallu escorts',
  ],
  openGraph: {
    title: 'Mallu Escorts in Chennai | Kerala Beauty & South Indian Charm | LillyBabe',
    description:
      'Mallu escorts in Chennai — Kerala beauty, Malayalam and English, and how we match you. Areas, pricing, and what to expect.',
    url: 'https://lillybabe.com/mallu-escorts-in-chennai',
    images: [
      {
        url: '/images/mallu-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Mallu escorts in Chennai — LillyBabe',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mallu Escorts in Chennai | Kerala Beauty & South Indian Charm | LillyBabe',
    description:
      'A clear overview of our Mallu escorts in Chennai, with example photos and straightforward booking steps.',
    images: ['/images/mallu-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/mallu-escorts-in-chennai',
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
      '@id': 'https://lillybabe.com/mallu-escorts-in-chennai#breadcrumb',
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
          name: 'Mallu Escorts in Chennai',
          item: 'https://lillybabe.com/mallu-escorts-in-chennai',
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://lillybabe.com/mallu-escorts-in-chennai#service',
      name: 'Mallu Escorts in Chennai',
      description:
        'Mallu escorts in Chennai — Kerala beauty, Malayalam and English, how we match you, areas covered, and how pricing is shared before confirmation.',
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      provider: {
        '@type': 'Organization',
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
      },
      url: 'https://lillybabe.com/mallu-escorts-in-chennai',
      serviceType: 'Companionship booking coordination',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://lillybabe.com/mallu-escorts-in-chennai#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Are the Mallu escorts in Chennai verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work only with Mallu escorts in Chennai whose profiles and photos have been checked so you know who you are meeting and what to expect.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I book a Mallu escort in Chennai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can contact us through WhatsApp with your area, rough time, and that you prefer a Mallu escort. We suggest realistic options and only move ahead if they feel right for you.',
          },
        },
      ],
    },
  ],
} as const;

export default function MalluEscortsPage() {
  return (
    <>
      <MalluEscortsPageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}
