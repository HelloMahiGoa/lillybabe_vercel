import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chennai Escorts - Verified Call Girls & Independent Escorts | LillyBabe',
  description: 'Meet genuine Chennai escorts and call girls with verified profiles, real photos, and authentic reviews. 24/7 availability across Anna Nagar, T.Nagar, OMR, ECR. Independent, Russian, Model escorts in Chennai.',
  keywords: [
    'Chennai escorts',
    'Chennai call girls', 
    'independent escorts Chennai',
    'Russian escorts Chennai',
    'model escorts Chennai',
    'celebrity escorts Chennai',
    'Anna Nagar escorts',
    'T.Nagar escorts',
    'OMR escorts',
    'ECR escorts',
    'verified escorts Chennai',
    'genuine escorts Chennai',
    'Chennai escort service',
    'call girls Chennai',
    'high class escorts Chennai',
    'Nungambakkam escorts',
    'Adyar escorts',
    'Mahabalipuram escorts',
    'housewife escorts Chennai',
    'teen escorts Chennai',
    'VIP escorts Chennai',
    'Tamil escorts Chennai',
    'Mallu escorts Chennai',
    'Chennai escort agency',
    'best escorts Chennai',
    'beautiful escorts Chennai',
    'professional escorts Chennai',
    'Chennai escort girls',
    'escort service in Chennai',
    'Chennai escorts near me'
  ],
  openGraph: {
    title: 'Chennai Escorts - Verified Call Girls & Independent Escorts | LillyBabe',
    description: 'Meet genuine Chennai escorts and call girls. Verified profiles with real photos, genuine reviews, and 24/7 availability. Independent, Russian, Model escorts in Anna Nagar, T.Nagar, OMR.',
    type: 'website',
    url: 'https://lillybabe.com/escorts',
    siteName: 'LillyBabe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chennai Escorts - Verified Call Girls & Independent Escorts | LillyBabe',
    description: 'Meet genuine Chennai escorts and call girls. Verified profiles with real photos, genuine reviews, and 24/7 availability. Independent, Russian, Model escorts in Anna Nagar, T.Nagar, OMR.',
  },
  alternates: {
    canonical: 'https://lillybabe.com/escorts',
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
};

export default function EscortsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}