import { Metadata } from 'next';
import { TeenEscortsClient } from '@/components/gallery/teen-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Teen Escorts in Chennai | Young & Beautiful Escorts | Lillybabe',
  description: 'Book young and energetic teen escorts in Chennai with Lillybabe. Fresh, beautiful, and professional teen call girls available 24/7. Verified profiles, complete privacy.',
  keywords: 'teen escorts Chennai, young escorts Chennai, Chennai teen escorts, young call girls Chennai, teen independent escorts, teen escorts T Nagar, teen escorts Anna Nagar, teen escorts OMR, teen escorts ECR, teen escorts Nungambakkam, teen escorts Adyar, beautiful teen escorts Chennai, fresh teen escorts Chennai',
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
    title: 'Teen Escorts in Chennai | Young & Beautiful Escorts',
    description: 'Book young and energetic teen escorts in Chennai with Lillybabe. Fresh, beautiful, and professional teen call girls available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/teen-escorts-in-chennai',
    images: [
      {
        url: '/images/teen-1.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Teen Escorts in Chennai - Young and Energetic Escorts Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teen Escorts in Chennai | Young & Beautiful Escorts',
    description: 'Book young and energetic teen escorts in Chennai with Lillybabe. Fresh, beautiful, and professional teen call girls available 24/7.',
    images: ['/images/teen-1.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/teen-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function TeenEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Teen Escorts in Chennai",
    "description": "Professional teen escort services in Chennai featuring young, energetic, and beautiful escorts with fresh vitality and charm.",
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
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City", 
        "name": "T. Nagar"
      },
      {
        "@type": "City",
        "name": "Anna Nagar"
      },
      {
        "@type": "City",
        "name": "OMR"
      },
      {
        "@type": "City",
        "name": "ECR"
      },
      {
        "@type": "City",
        "name": "Nungambakkam"
      },
      {
        "@type": "City",
        "name": "Adyar"
      }
    ],
    "serviceType": "Escort Services",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://lillybabe.com/teen-escorts-in-chennai",
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
        "name": "Are the teen escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our teen escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes teen escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teen escorts bring youthful energy, freshness, and vitality to every meeting. They are full of life, always smiling, and love to have a great time with you. Their young age and enthusiasm make them special companions."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a teen escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified teen escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do teen escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our teen escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location."
        }
      },
      {
        "@type": "Question",
        "name": "Are teen escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our teen escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing."
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
        "name": "Escorts",
        "item": "https://lillybabe.com/escort-girls-chennai"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Teen Escorts Chennai",
        "item": "https://lillybabe.com/teen-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/teen-escorts-in-chennai" pageTitle="Teen Escorts in Chennai | Young & Beautiful Escorts | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Teen Escorts" 
        location="Chennai"
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
      <TeenEscortsClient />
    </>
  );
}