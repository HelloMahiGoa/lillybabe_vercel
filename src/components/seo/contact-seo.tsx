'use client';

import { StructuredData } from './structured-data';

export const ContactSEO = () => {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/images/contact-bg.webp" as="image" type="image/webp" />
      
      {/* Structured Data */}
      <StructuredData 
        type="WebPage" 
        data={{
          title: "Contact Chennai Escorts - Get in Touch | LillyBabe",
          description: "Contact LillyBabe for Chennai escort services. Get in touch via WhatsApp, phone, or email. 24/7 customer support for all your escort booking needs.",
          url: "https://lillybabe.com/contact-us",
          profileCount: 0
        }} 
      />
      
      <StructuredData 
        type="BreadcrumbList" 
        data={{
          breadcrumbs: [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://lillybabe.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Contact Us",
              "item": "https://lillybabe.com/contact-us"
            }
          ]
        }} 
      />
      
      <StructuredData 
        type="Organization" 
        data={{
          name: "LillyBabe",
          url: "https://lillybabe.com",
          logo: "https://lillybabe.com/images/logo.webp",
          description: "Genuine Chennai escorts and call girls with verified profiles, real photos, and authentic reviews",
          address: {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "IN"
          },
          contactPoint: {
            "@type": "ContactPoint",
            "telephone": "+918121426651",
            "contactType": "customer service",
            "availableLanguage": ["English", "Tamil", "Hindi"],
            "areaServed": "Chennai",
            "serviceType": "Escort Service"
          }
        }} 
      />
      
      <StructuredData 
        type="FAQPage" 
        data={{
          faqs: [
            {
              "@type": "Question",
              "name": "How can I contact LillyBabe for Chennai escort services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can contact us via WhatsApp at +918121426651, phone call, or through our contact form. We're available 24/7 for all your booking needs."
              }
            },
            {
              "@type": "Question",
              "name": "What are your business hours?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We operate 24/7 to provide Chennai escort services whenever you need them. Our customer support team is always available to assist you."
              }
            },
            {
              "@type": "Question",
              "name": "Is my personal information kept confidential?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we maintain complete confidentiality and privacy. All your personal information and booking details are kept secure and never shared with third parties."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide services in all areas of Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide Chennai escort services in all major areas including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, and Mahabalipuram."
              }
            }
          ]
        }} 
      />
    </>
  );
};
