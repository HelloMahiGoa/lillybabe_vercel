import { Metadata } from 'next';
import { AnnaNagarEscortsClient } from '@/components/locations/anna-nagar-escorts-client';
import { ANNA_NAGAR_ESCORTS_FAQ } from '@/constants/anna-nagar-faq';

const PAGE_URL = 'https://lillybabe.com/anna-nagar-escorts';
const OG_IMAGE_PATH = '/images/anna-nagar-1.avif';

const PAGE_TITLE =
  'Anna Nagar Escorts Chennai | Verified Girls, No Advance | LillyBabe';

const PAGE_DESCRIPTION =
  'Book verified Anna Nagar escorts in Chennai with LillyBabe: direct WhatsApp coordination, hotel-friendly options where policy allows, and pay after you meet — no advance on our standard flow.';

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    'Anna Nagar escorts',
    'escorts in Anna Nagar Chennai',
    'Anna Nagar call girls',
    'Chennai escorts Anna Nagar',
    'verified escorts Anna Nagar',
    'no advance escorts Chennai',
    'LillyBabe Anna Nagar',
    'pay after meet escorts Chennai',
    'WhatsApp escort booking Chennai',
    'north Chennai escorts',
    'Kilpauk escorts near Anna Nagar',
  ],
  authors: [{ name: 'LillyBabe Chennai Escorts', url: 'https://lillybabe.com' }],
  creator: 'LillyBabe',
  publisher: 'LillyBabe',
  category: 'adult services',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'website',
    locale: 'en_IN',
    siteName: 'LillyBabe Chennai Escorts',
    url: PAGE_URL,
    images: [
      {
        url: OG_IMAGE_PATH,
        width: 1200,
        height: 630,
        alt: 'Anna Nagar escorts Chennai — LillyBabe verified escort service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE_PATH],
  },
  alternates: {
    canonical: '/anna-nagar-escorts',
    languages: {
      'en-IN': '/anna-nagar-escorts',
    },
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai',
  },
};

export default function AnnaNagarEscortsPage() {
  const orgId = 'https://lillybabe.com/#organization';
  const websiteId = 'https://lillybabe.com/#website';
  const webpageId = `${PAGE_URL}#webpage`;
  const serviceId = `${PAGE_URL}#service`;
  const breadcrumbId = `${PAGE_URL}#breadcrumb`;
  const faqId = `${PAGE_URL}#faq`;

  const structuredDataGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://lillybabe.com/images/logo.webp',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+918121426651',
          contactType: 'customer service',
          availableLanguage: ['English', 'Tamil', 'Hindi'],
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Anna Nagar',
          addressRegion: 'Tamil Nadu',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: 'LillyBabe',
        url: 'https://lillybabe.com',
        publisher: { '@id': orgId },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'WebPage',
        '@id': webpageId,
        url: PAGE_URL,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { '@id': websiteId },
        about: { '@id': serviceId },
        mainEntity: { '@id': faqId },
        breadcrumb: { '@id': breadcrumbId },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `https://lillybabe.com${OG_IMAGE_PATH}`,
          width: 1200,
          height: 630,
        },
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Service',
        '@id': serviceId,
        name: 'Anna Nagar Escorts in Chennai',
        description: PAGE_DESCRIPTION,
        url: PAGE_URL,
        image: `https://lillybabe.com${OG_IMAGE_PATH}`,
        provider: { '@id': orgId },
        areaServed: [
          {
            '@type': 'Place',
            name: 'Anna Nagar',
            containedInPlace: { '@type': 'City', name: 'Chennai' },
          },
          { '@type': 'City', name: 'Chennai' },
        ],
        serviceType: 'Escort booking and companionship referral',
        availableChannel: {
          '@type': 'ServiceChannel',
          serviceUrl: PAGE_URL,
          servicePhone: '+918121426651',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': breadcrumbId,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://lillybabe.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://lillybabe.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Anna Nagar Escorts Chennai',
            item: PAGE_URL,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        url: PAGE_URL,
        isPartOf: { '@id': webpageId },
        mainEntity: ANNA_NAGAR_ESCORTS_FAQ.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
      />
      <AnnaNagarEscortsClient />
    </>
  );
}
