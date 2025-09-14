'use client';

import { StructuredData } from './structured-data';

export const HomepageSEO = () => {
  // Comprehensive FAQ data for GEO optimization
  const faqData = {
    faqs: [
      {
        "@type": "Question",
        "name": "What makes LillyBabe the best Chennai escort service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LillyBabe is Chennai's most trusted escort service because we offer verified profiles, genuine photos, authentic reviews, 24/7 availability, and complete privacy. All our escorts are thoroughly vetted for safety and professionalism."
        }
      },
      {
        "@type": "Question", 
        "name": "Are all Chennai escorts on your site verified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every escort on LillyBabe is verified with genuine photos, authentic reviews, and thorough background checks. We ensure complete authenticity and safety for all our clients."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Chennai do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve all major areas in Chennai including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, Mahabalipuram, Kilpauk, Guindy, and Mylapore. Our escorts are available throughout the city."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book a Chennai escort safely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is simple and secure. Contact us via phone or WhatsApp, discuss your requirements, and we'll arrange everything with complete privacy and discretion. All payments are handled safely."
        }
      },
      {
        "@type": "Question",
        "name": "What types of Chennai escorts do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer diverse categories including Independent escorts, Russian escorts, Tamil escorts, Model escorts, Celebrity escorts, Teen escorts, VIP escorts, and Housewife escorts to match every preference."
        }
      },
      {
        "@type": "Question",
        "name": "Is my privacy guaranteed with Chennai escort service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Complete privacy and discretion are our top priorities. All interactions are confidential, and we never share client information with anyone."
        }
      },
      {
        "@type": "Question",
        "name": "What are the rates for Chennai escorts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rates vary based on escort type, duration, and services. We offer competitive pricing for all budgets, from budget-friendly options to premium VIP services. Contact us for specific pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Are your Chennai escorts available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our Chennai escort service operates 24/7. You can book appointments at any time, day or night, for immediate or advance bookings."
        }
      }
    ]
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
          description: "Chennai's most trusted escort service offering verified profiles, genuine photos, and authentic reviews",
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
          description: "Professional escort services in Chennai with verified profiles, genuine photos, and authentic reviews",
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
      
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://lillybabe.com",
            "name": "LillyBabe - Chennai Escort Service",
            "description": "Chennai's premier escort service with verified profiles and authentic reviews",
            "url": "https://lillybabe.com",
            "telephone": "+91-81214-26651",
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
            "priceRange": "$$",
            "paymentAccepted": "Cash, Digital Payment",
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
