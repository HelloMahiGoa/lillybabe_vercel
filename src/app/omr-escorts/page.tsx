import { Metadata } from 'next';
import { OMREscortsClient } from '@/components/locations/omr-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'OMR Escorts | Premium Escort Services in OMR Chennai | Lillybabe',
  description: 'Book beautiful and professional escorts in OMR Chennai with Lillybabe. Premium escort services in OMR IT corridor with verified profiles, complete privacy, and 24/7 availability.',
  keywords: 'OMR escorts, OMR call girls, escorts OMR Chennai, OMR escort service, call girls OMR, OMR independent escorts, OMR escort agency, premium escorts OMR, OMR escort girls, OMR escort booking, IT corridor escorts',
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
    title: 'OMR Escorts | Premium Escort Services in OMR Chennai',
    description: 'Book beautiful and professional escorts in OMR Chennai with Lillybabe. Premium escort services with verified profiles and complete privacy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/omr-escorts',
    images: [
      {
        url: '/images/omr-1.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Escorts in OMR Chennai - Premium Escort Services Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMR Escorts | Premium Escort Services in OMR Chennai',
    description: 'Book beautiful and professional escorts in OMR Chennai with Lillybabe. Premium escort services with verified profiles.',
    images: ['/images/omr-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/omr-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function OMREscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "OMR Escorts",
    "description": "Professional escort services in OMR Chennai featuring beautiful, verified, and experienced escorts with premium service quality in the IT corridor.",
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
        "addressLocality": "OMR",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "OMR"
      },
      {
        "@type": "City", 
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/omr-escorts",
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
        "name": "Are the escorts in OMR verified and safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our OMR escorts are thoroughly verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper background checks and safety measures."
        }
      },
      {
        "@type": "Question",
        "name": "What makes OMR escorts special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OMR escorts are known for their professionalism, intelligence, and ability to provide exceptional service in Chennai's IT corridor. Located in the heart of the technology district, they offer convenience and sophisticated companionship for IT professionals."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an escort in OMR?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified escorts in OMR with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do OMR escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our OMR escorts are available for both incall and outcall services. You can choose what works best for you and your location within OMR or nearby IT companies."
        }
      },
      {
        "@type": "Question",
        "name": "Are OMR escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our OMR escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing."
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
        "name": "OMR Escorts",
        "item": "https://lillybabe.com/omr-escorts"
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
      <SEOMonitoring pageType="location" pageUrl="https://lillybabe.com/omr-escorts" pageTitle="OMR Escorts | Premium Escort Services in OMR Chennai | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="location" 
        topic="OMR Escorts" 
        location="OMR Chennai"
        authorName="LillyBabe Team"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <OMREscortsClient />
    </>
  );
}
