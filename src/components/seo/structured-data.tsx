'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'Service' | 'WebPage' | 'BreadcrumbList' | 'FAQPage';
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LillyBabe",
          "url": "https://lillybabe.com",
          "logo": "https://lillybabe.com/images/logo.webp",
          "description": "Genuine Chennai escorts and call girls with verified profiles, real photos, and authentic reviews",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "availableLanguage": ["English", "Tamil", "Hindi"]
          },
          "sameAs": [
            "https://lillybabe.com"
          ]
        };
        break;
        
      case 'Service':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Chennai Escort Service",
          "description": "Professional escort services in Chennai with verified profiles and genuine reviews",
          "provider": {
            "@type": "Organization",
            "name": "LillyBabe"
          },
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
          ],
          "serviceType": "Escort Service",
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": "https://lillybabe.com/escorts",
            "serviceSmsNumber": "+91-XXXXXXXXXX"
          }
        };
        break;
        
      case 'WebPage':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": data.title || "Chennai Escorts - Verified Call Girls & Independent Escorts",
          "description": data.description || "Meet genuine Chennai escorts with verified profiles, real photos, and authentic reviews",
          "url": data.url || "https://lillybabe.com/escorts",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Chennai Escorts",
            "description": "List of verified Chennai escorts and call girls",
            "numberOfItems": data.profileCount || 0
          },
          "breadcrumb": {
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
                "item": "https://lillybabe.com/escorts"
              }
            ]
          }
        };
        break;
        
      case 'BreadcrumbList':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumbs || [
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
              "item": "https://lillybabe.com/escorts"
            }
          ]
        };
        break;
        
      case 'FAQPage':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.faqs || [
            {
              "@type": "Question",
              "name": "Are the Chennai escorts verified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, all our Chennai escorts are verified with genuine photos and authentic reviews from real clients."
              }
            },
            {
              "@type": "Question",
              "name": "What areas in Chennai do you serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We serve all major areas in Chennai including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, and Mahabalipuram."
              }
            },
            {
              "@type": "Question",
              "name": "How can I book a Chennai escort?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion."
              }
            }
          ]
        };
        break;
        
      default:
        structuredData = data;
    }
    
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);
  
  return null;
};
