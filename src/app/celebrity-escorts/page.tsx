import { Metadata } from 'next';
import { CelebrityEscortsClient } from '@/components/gallery/celebrity-escorts-client';

export const metadata: Metadata = {
  title: 'Celebrity Escorts in Chennai | Bollywood Actresses & TV Stars | Lillybabe',
  description: 'Book celebrity escorts in Chennai with Lillybabe. Meet Bollywood actresses, TV serial stars, and web series performers. Verified profiles, 24/7 availability, complete privacy.',
  keywords: 'celebrity escorts Chennai, Bollywood actresses Chennai, TV serial stars Chennai, web series performers Chennai, celebrity call girls Chennai, verified escorts Chennai, celebrity escorts T Nagar, celebrity escorts Anna Nagar, celebrity escorts OMR, celebrity escorts ECR, celebrity escorts Nungambakkam, celebrity escorts Adyar',
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
    title: 'Celebrity Escorts in Chennai | Bollywood Actresses & TV Stars',
    description: 'Book celebrity escorts in Chennai with Lillybabe. Meet Bollywood actresses, TV serial stars, and web series performers.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    url: 'https://lillybabe.com/celebrity-escorts',
    images: [
      {
        url: '/images/celebrity.avif',
        width: 1200,
        height: 630,
        alt: 'Beautiful Celebrity Escorts in Chennai - Bollywood Actresses and TV Stars Available 24/7',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celebrity Escorts in Chennai | Bollywood Actresses & TV Stars',
    description: 'Book celebrity escorts in Chennai with Lillybabe. Meet Bollywood actresses, TV serial stars, and web series performers.',
    images: ['/images/celebrity.avif'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/celebrity-escorts',
  },
  other: {
    'theme-color': '#ec4899',
    'msapplication-TileColor': '#ec4899',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

export default function CelebrityEscortsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Celebrity Escorts in Chennai",
    "description": "Professional celebrity escort services in Chennai featuring Bollywood actresses, TV serial stars, and web series performers.",
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
      "serviceUrl": "https://lillybabe.com/celebrity-escorts",
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
        "name": "Are the celebrity escorts in Chennai verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our celebrity escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks."
        }
      },
      {
        "@type": "Question",
        "name": "What makes celebrity escorts different from other escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Celebrity escorts bring real star quality and charm to every meeting. They know how to make you feel special and provide a unique experience. These beautiful lookalikes of famous personalities offer something different from regular escort services."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a celebrity escort in Chennai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified celebrity escorts in Chennai with same-day booking options."
        }
      },
      {
        "@type": "Question",
        "name": "Do celebrity escorts offer both incall and outcall services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our celebrity escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location."
        }
      },
      {
        "@type": "Question",
        "name": "Are celebrity escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our celebrity escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing."
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
        "name": "Celebrity Escorts Chennai",
        "item": "https://lillybabe.com/celebrity-escorts"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <CelebrityEscortsClient />
    </>
  );
}
