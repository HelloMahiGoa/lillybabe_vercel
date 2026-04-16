'use client';

import { getHomepageLastUpdatedIso } from '@/lib/homepage-content';
import { StructuredData } from './structured-data';

const ORG_DESC =
  'LillyBabe is a Chennai escort agency with verified profiles, WhatsApp booking, incall and hotel outcall across the city, and cash payment after the meet — no advance.';
const HOMEPAGE_LAST_UPDATED_ISO = getHomepageLastUpdatedIso();

export const HomepageSEO = () => {
  const faqData = {
    faqs: [
      {
        '@type': 'Question',
        name: 'Why book Chennai escorts through LillyBabe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We only list escorts we have met in person, keep photos current, and take bookings on WhatsApp. You pay cash after you meet — we do not ask for advance UPI or wallet transfers. Lines stay open around the clock for messages.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are the escorts on LillyBabe verified?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. A profile goes live only after we have checked the person against her photos. If her look or availability changes, we update or remove the listing. We do not recycle stock images.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which areas in Chennai do you cover?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We arrange outcall and incall across major areas including Anna Nagar, T. Nagar, Teynampet, OMR, ECR, Nungambakkam, Adyar, Guindy, Kilpauk, Mahabalipuram, and Mylapore. Long distances may need cab fare clarified on WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book a Chennai escort safely?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Message us on WhatsApp with your area, timing, and whether you need hotel or home outcall. We confirm who is free, agree the rate in chat, and settle in cash only after the escort arrives — not before.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of escorts can I request?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We coordinate independent escorts, Russian and Tamil companions, model and VIP tiers, housewife and teen-age-range categories, mallu profiles, and celebrity-style bookings when available. Availability changes daily; ask on WhatsApp for tonight’s roster.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my privacy protected?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do not sell or share client phone numbers. Chats stay on our booking lines, and we expect the same discretion from you toward our escorts. Hotel visits work best when you confirm guest policies upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are typical Chennai escort rates?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rates depend on duration, category (standard versus VIP), and incall versus outcall with cab. We give a clear band on WhatsApp before anyone travels — see the session grid on the homepage as a guide, then confirm the exact figure in chat.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I book late at night or same day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We handle late-night and same-day requests whenever someone on our roster is free. Rush-hour or long outcall distances may shift ETA — we quote honestly instead of promising impossible times.',
        },
      },
    ],
  };

  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/images/hero-bg.webp" as="image" type="image/webp" />
      <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />
      
      {/* Enhanced Structured Data for SEO + GEO */}
      <StructuredData 
        type="Organization" 
        data={{
          name: "LillyBabe",
          url: "https://lillybabe.com",
          logo: "https://lillybabe.com/images/logo.webp",
          description: ORG_DESC,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu", 
            addressCountry: "IN"
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+91-81214-26651",
            contactType: "customer service",
            availableLanguage: ["English", "Tamil", "Hindi"]
          },
          areaServed: [
            "Chennai", "Anna Nagar", "T. Nagar", "OMR", "ECR", 
            "Nungambakkam", "Adyar", "Mahabalipuram", "Kilpauk", "Guindy", "Mylapore"
          ],
          serviceType: "Escort Service",
          sameAs: ["https://wa.me/918121426651"]
        }} 
      />
      
      <StructuredData 
        type="Service" 
        data={{
          name: "Chennai Escort Service",
          description: ORG_DESC,
          provider: {
            "@type": "Organization",
            name: "LillyBabe"
          },
          areaServed: [
            { "@type": "City", name: "Chennai" },
            { "@type": "Place", name: "Anna Nagar" },
            { "@type": "Place", name: "T. Nagar" },
            { "@type": "Place", name: "OMR" },
            { "@type": "Place", name: "ECR" },
            { "@type": "Place", name: "Nungambakkam" },
            { "@type": "Place", name: "Adyar" },
            { "@type": "Place", name: "Mahabalipuram" }
          ],
          serviceType: "Escort Service",
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: "https://lillybabe.com/escorts",
            serviceSmsNumber: "+91-81214-26651"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Chennai Escort Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Independent Chennai Escorts"
                }
              },
              {
                "@type": "Offer", 
                itemOffered: {
                  "@type": "Service",
                  name: "Russian Escorts Chennai"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service", 
                  name: "VIP Escorts Chennai"
                }
              }
            ]
          }
        }} 
      />
      
      {/* FAQ Structured Data for GEO optimization */}
      <StructuredData type="FAQPage" data={faqData} />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            '@id': 'https://lillybabe.com/#webpage',
            url: 'https://lillybabe.com',
            name: 'Chennai Escorts — Verified Bookings | LillyBabe',
            description: ORG_DESC,
            dateModified: HOMEPAGE_LAST_UPDATED_ISO,
            isPartOf: { '@type': 'WebSite', '@id': 'https://lillybabe.com/#website', url: 'https://lillybabe.com' },
          }),
        }}
      />

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://lillybabe.com/#localbusiness",
            "name": "LillyBabe - Chennai Escort Service",
            "description": ORG_DESC,
            "url": "https://lillybabe.com",
            "telephone": "+91-81214-26651",
            "dateModified": HOMEPAGE_LAST_UPDATED_ISO,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chennai",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0827",
              "longitude": "80.2707"
            },
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 00:00-23:59",
            "priceRange": "₹₹",
            "paymentAccepted": "Cash",
            "currenciesAccepted": "INR",
            "areaServed": [
              {
                "@type": "City",
                "name": "Chennai"
              },
              {
                "@type": "Place", 
                "name": "Anna Nagar"
              },
              {
                "@type": "Place",
                "name": "T. Nagar"
              },
              {
                "@type": "Place",
                "name": "OMR"
              },
              {
                "@type": "Place",
                "name": "ECR"
              }
            ]
          })
        }}
      />
    </>
  );
};
