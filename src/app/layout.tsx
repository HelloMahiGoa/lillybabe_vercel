import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LillyBabe - Chennai Escorts Service | Premium Escort Agency",
  description: "Looking for genuine Chennai Escorts? We're your trusted friends who happen to be amazing companions! 13+ years of experience, 500+ verified escorts, 24/7 availability.",
  keywords: "Chennai Escorts, Escort Service Chennai, Independent Escorts, VIP Escorts, Corporate Escorts",
  authors: [{ name: "LillyBabe" }],
  creator: "LillyBabe",
  publisher: "LillyBabe",
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
    title: "LillyBabe - Chennai Escorts Service",
    description: "Looking for genuine Chennai Escorts? We're your trusted friends who happen to be amazing companions!",
    url: 'https://lillybabe.com',
    siteName: 'LillyBabe',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LillyBabe Chennai Escorts Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "LillyBabe - Chennai Escorts Service",
    description: "Looking for genuine Chennai Escorts? We're your trusted friends who happen to be amazing companions!",
    images: ['/images/og-image.jpg'],
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
