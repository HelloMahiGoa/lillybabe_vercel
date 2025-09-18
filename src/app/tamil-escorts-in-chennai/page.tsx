import { Metadata } from 'next';
import { TamilEscortsClient } from '@/components/gallery/tamil-escorts-client';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { ContentAuthorityBuilder } from '@/components/seo/content-authority-builder';

export const metadata: Metadata = {
  title: 'Tamil Escorts in Chennai | Beautiful Tamil Girls & Cultural Companions | Lillybabe',
  description: 'Book beautiful Tamil escorts in Chennai with Lillybabe. Authentic Tamil beauty, cultural understanding, and local charm available 24/7. Verified profiles, complete privacy.',
  keywords: 'Tamil escorts Chennai, Tamil call girls Chennai, Chennai Tamil escorts, Tamil independent escorts Chennai, Tamil escorts T Nagar, Tamil escorts Anna Nagar, Tamil escorts OMR, Tamil escorts ECR, Tamil escorts Nungambakkam, Tamil escorts Adyar, beautiful Tamil escorts Chennai, local Tamil escorts Chennai, Tamil cultural escorts Chennai',
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
    title: 'Tamil Escorts in Chennai | Beautiful Tamil Girls & Cultural Companions',
    description: 'Book beautiful Tamil escorts in Chennai with Lillybabe. Authentic Tamil beauty, cultural understanding, and local charm available 24/7.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/tamil-escorts-in-chennai',
    images: [
      {
        url: '/images/tamil-escorts.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Tamil Escorts in Chennai - Authentic Tamil Beauty and Cultural Companions Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tamil Escorts in Chennai | Beautiful Tamil Girls & Cultural Companions',
    description: 'Book beautiful Tamil escorts in Chennai with Lillybabe. Authentic Tamil beauty, cultural understanding, and local charm available 24/7.',
    images: ['/images/tamil-escorts.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/tamil-escorts-in-chennai',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function TamilEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Tamil Escorts in Chennai",
    "description": "Professional Tamil escort services in Chennai featuring authentic Tamil beauty, cultural understanding, and local charm with traditional values.",
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
      "serviceUrl": "https://lillybabe.com/tamil-escorts-in-chennai",
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
        "name": "What makes Tamil escorts in Chennai special?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tamil escorts in Chennai bring authentic local beauty, cultural understanding, and traditional values. They understand the local culture, speak Tamil fluently, and can provide companionship that feels natural and comfortable. They know the city, understand local customs, and can make you feel at home in Chennai."
        }
      },
      {
        "@type": "Question",
        "name": "Do Tamil escorts speak Tamil and English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our Tamil escorts in Chennai are fluent in both Tamil and English. They can communicate comfortably in either language, making it easy for you to express yourself and feel understood. Whether you prefer Tamil or English, they'll make sure the conversation flows naturally."
        }
      },
      {
        "@type": "Question",
        "name": "Are Tamil escorts familiar with Chennai culture?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our Tamil escorts in Chennai are locals who understand the city's culture, traditions, and way of life. They know the best places to visit, understand local customs, and can help you experience Chennai like a local. They bring that authentic Tamil cultural touch to every meeting."
        }
      },
      {
        "@type": "Question",
        "name": "How do I book a Tamil escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect Tamil escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential."
        }
      },
      {
        "@type": "Question",
        "name": "Do Tamil escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Tamil escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience."
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
        "name": "Tamil Escorts Chennai",
        "item": "https://lillybabe.com/tamil-escorts-in-chennai"
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
      <SEOMonitoring pageType="category" pageUrl="https://lillybabe.com/tamil-escorts-in-chennai" pageTitle="Tamil Escorts in Chennai | Beautiful Tamil Girls & Cultural Companions | Lillybabe" />
      
      {/* Content Authority Builder */}
      <ContentAuthorityBuilder 
        contentType="category" 
        topic="Tamil Escorts" 
        location="Chennai"
        authorName="LillyBabe Team"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <TamilEscortsClient />
    </>
  );
}
