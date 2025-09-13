import { Metadata } from 'next';
import ContactUsClient from '@/components/contact/contact-us-client';

export const metadata: Metadata = {
  title: 'Contact Us - Chennai Escorts Service | LillyBabe',
  description: 'Get in touch with LillyBabe Chennai Escorts Service. Contact us for bookings, inquiries, or support. Available 24/7 for your convenience.',
  keywords: [
    'Contact Chennai Escorts',
    'Chennai Escorts Contact',
    'LillyBabe Contact',
    'Escort Service Contact',
    'Chennai Call Girls Contact',
    'Book Chennai Escorts',
    'Chennai Escorts Support',
    'Escort Service Help',
    'Chennai Escorts Inquiry',
    'Contact Escort Agency'
  ],
  openGraph: {
    title: 'Contact Us - Chennai Escorts Service | LillyBabe',
    description: 'Get in touch with LillyBabe Chennai Escorts Service. Contact us for bookings, inquiries, or support. Available 24/7 for your convenience.',
    url: 'https://lillybabe.com/contact-us',
    type: 'website',
    locale: 'en_US',
    siteName: 'LillyBabe Chennai Escorts',
    images: [
      {
        url: '/images/contact-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Chennai Escorts Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Chennai Escorts Service | LillyBabe',
    description: 'Get in touch with LillyBabe Chennai Escorts Service. Contact us for bookings, inquiries, or support. Available 24/7 for your convenience.',
    images: ['/images/contact-banner.webp'],
  },
  alternates: {
    canonical: 'https://lillybabe.com/contact-us',
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
