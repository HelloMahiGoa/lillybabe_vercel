import { Metadata } from 'next';
import { TNagarEscortsClient } from '@/components/locations/t-nagar-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'T Nagar Escorts | Premium Escort Services in T Nagar Chennai | Lillybabe',
  description: 'Book beautiful and professional escorts in T Nagar Chennai with Lillybabe. Premium escort services in T Nagar with verified profiles, complete privacy, and 24/7 availability.',
  keywords: 'T Nagar escorts, T Nagar call girls, escorts T Nagar Chennai, T Nagar escort service, call girls T Nagar, T Nagar independent escorts, T Nagar escort agency, premium escorts T Nagar, T Nagar escort girls, T Nagar escort booking',
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
    title: 'T Nagar Escorts | Premium Escort Services in T Nagar Chennai',
    description: 'Book beautiful and professional escorts in T Nagar Chennai with Lillybabe. Premium escort services with verified profiles and complete privacy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/t-nagar-escorts',
    images: [
      {
        url: '/images/t-nagar-1.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Escorts in T Nagar Chennai - Premium Escort Services Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T Nagar Escorts | Premium Escort Services in T Nagar Chennai',
    description: 'Book beautiful and professional escorts in T Nagar Chennai with Lillybabe. Premium escort services with verified profiles.',
    images: ['/images/t-nagar-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/t-nagar-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function TNagarEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "T Nagar Escorts",
    "description": "Professional escort services in T Nagar Chennai featuring beautiful, verified, and experienced escorts with premium service quality.",
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
        "addressLocality": "T Nagar",
        "addressRegion": "Chennai",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "T Nagar"
      },
      {
        "@type": "City", 
        "name": "Chennai"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/t-nagar-escorts",
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
        "name": "Are the escorts in T Nagar verified and safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our T Nagar escorts are thoroughly verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper background checks and safety measures."
        }
      },
      {
        "@type": "Question",
        "name": "What makes T Nagar escorts special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "T Nagar escorts are known for their beauty, professionalism, and ability to provide exceptional service. Located in Chennai's premier shopping and business district, they offer convenience and premium quality service."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an escort in T Nagar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified escorts in T Nagar with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do T Nagar escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our T Nagar escorts are available for both incall and outcall services. You can choose what works best for you and your location within T Nagar or nearby areas."
        }
      },
      {
        "@type": "Question",
        "name": "Are T Nagar escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our T Nagar escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing."
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
        "name": "T Nagar Escorts",
        "item": "https://lillybabe.com/t-nagar-escorts"
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
      <SEOMonitoring pageType="location" pageUrl="https://lillybabe.com/t-nagar-escorts" pageTitle="T Nagar Escorts | Premium Escort Services in T Nagar Chennai | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="location" 
        topic="T Nagar Escorts" 
        location="T Nagar Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <TNagarEscortsClient />
    </>
  );
}
