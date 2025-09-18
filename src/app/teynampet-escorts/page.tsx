import { Metadata } from 'next';
import { TeynampetEscortsClient } from '@/components/locations/teynampet-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Teynampet Escorts | Premium Escort Services in Teynampet Chennai | Lillybabe',
  description: 'Discover premium and verified Teynampet Escorts in Chennai with Lillybabe. Professional call girls available 24/7 in Chennai\'s industrial and business hub. Discreet and unforgettable experiences.',
  keywords: 'Teynampet Escorts, escorts in Teynampet Chennai, Teynampet call girls, premium escorts Teynampet, independent escorts Teynampet, verified escorts Teynampet, Chennai escorts Teynampet, luxury escorts Teynampet',
  authors: [{ name: 'Lillybabe Chennai Escorts' }],
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
    title: 'Teynampet Escorts | Premium Escort Services in Teynampet Chennai',
    description: 'Discover premium and verified Teynampet Escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/teynampet-escorts',
    images: [
      {
        url: '/images/teynampet-1.avif', // Placeholder image, replace with actual Teynampet image
        width: 1200,
        height: 630,
        alt: 'Beautiful Teynampet Escorts in Chennai - Premium and Professional Escorts Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teynampet Escorts | Premium Escort Services in Teynampet Chennai',
    description: 'Discover premium and verified Teynampet Escorts in Chennai with Lillybabe. Professional call girls available 24/7.',
    images: ['/images/teynampet-1.avif'], // Placeholder image
  },
  alternates: {
    canonical: 'https://lillybabe.com/teynampet-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function TeynampetEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Teynampet Escorts in Chennai",
    "description": "Professional escort services in Teynampet, Chennai featuring beautiful, discreet, and professional escorts in the industrial and business district.",
    "provider": {
      "@type": "Organization",
      "name": "Lillybabe",
      "url": "https://lillybabe.com",
      "logo": "https://lillybabe.com/images/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918121426651",
        "contactType": "customer service",
        "availableLanguage": ["English", "Tamil", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Teynampet",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Teynampet"
      },
      {
        "@type": "City",
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/teynampet-escorts",
      "servicePhone": "+918121426651"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are the Teynampet Escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Teynampet Escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Teynampet Escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teynampet Escorts offer a premium experience in Chennai's industrial and business district. They are sophisticated, discreet, and understand the needs of clients seeking high-class companionship in a professional business environment."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a Teynampet escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified Teynampet Escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do Teynampet Escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Teynampet Escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location within Teynampet or nearby areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are Teynampet Escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Teynampet Escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing to suit your schedule in Teynampet."
        }
      }
    ]
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://lillybabe.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://lillybabe.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teynampet Escorts Chennai",
        "item": "https://lillybabe.com/teynampet-escorts"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* SEO Monitoring */}
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/teynampet-escorts" pageTitle="Teynampet Escorts | Premium Escort Services in Teynampet Chennai | Lillybabe" />

      {/* Content Authority Builder */}
      <ContentAuthorityBuilder
        contentType="category"
        topic="Teynampet Escorts"
        location="Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <TeynampetEscortsClient />
    </>
  );
}
