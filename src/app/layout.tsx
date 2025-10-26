import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnalyticsProvider } from '@/components/analytics'
import { ServiceWorkerRegister } from '@/components/ui/service-worker-register'
import { ContentProtection } from '@/components/protection/ContentProtection'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'Chennai Escorts - Verified Call Girls & Independent Escorts',
    template: '%s | Chennai Escorts - LillyBabe'
  },
  description: 'Genuine Chennai escorts and call girls with verified profiles, real photos, and authentic reviews. Independent, Russian, Model escorts available 24/7 across Chennai locations.',
  icons: {
    icon: '/images/kiss.png',
    apple: '/images/kiss.png',
    shortcut: '/images/kiss.png',
  },
  keywords: [
    'Chennai Escorts',
    'Call Girls Chennai',
    'Escort Service Chennai',
    'Russian Escorts Chennai',
    'Independent Escorts Chennai',
    'VIP Escorts Chennai',
    'Chennai Escort Girls',
    'Best Escorts Chennai',
    'Anna Nagar Escorts',
    'T Nagar Escorts',
    'Adyar Escorts',
    'OMR Escorts',
    'Chennai Escort Agency',
    'Beautiful Escorts Chennai',
    'Professional Escorts Chennai'
  ],
  authors: [{ name: 'Chennai Escorts Service' }],
  creator: 'Chennai Escorts Service',
  publisher: 'Chennai Escorts Service',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lillybabe.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chennai Escorts - Genuine Escort Service Provider | Hot Call Girls in Chennai',
    description: 'Genuine Chennai Escorts Service Provider with beautiful, verified call girls. 24/7 availability, complete privacy, and professional service.',
    url: 'https://lillybabe.com',
    siteName: 'Chennai Escorts Service',
    images: [
      {
        url: '/images/hero-bg.webp',
        width: 1200,
        height: 630,
        alt: 'Beautiful Chennai Escort Girls - Best Escort Service',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts - Best Escort Service',
    description: 'Best Chennai Escorts Service with beautiful, verified call girls. 24/7 availability and complete privacy.',
    images: ['/images/hero-bg.webp'],
  },
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
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION || 'E2cg-G7rhtaAK5j3HMLuv7HhmsW0azIIMWKwTkB1Tl4',
  },
  category: 'adult services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme and Viewport */}
        <meta name="theme-color" content="#1e1b4b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && process.env.NEXT_PUBLIC_GA_ID !== 'G-VRM6HCHZHX' && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                    send_page_view: true,
                  });
                `,
              }}
            />
          </>
        )}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preload critical resources - moved to specific pages where used */}
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Chennai Escorts Service",
              "url": "https://lillybabe.com",
              "logo": "https://lillybabe.com/images/logo.webp",
              "description": "Best Chennai Escorts Service with beautiful, verified call girls",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Chennai",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-81214-26651",
                "contactType": "customer service",
                "availableLanguage": ["English", "Tamil", "Hindi"]
              },
              "sameAs": [
                "https://wa.me/918121426651"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ContentProtection />
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}