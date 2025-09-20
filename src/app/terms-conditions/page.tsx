import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TermsConditionsClient } from '@/components/terms/terms-conditions-client';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export const metadata: Metadata = {
  title: 'Terms & Conditions - LillyBabe Chennai Escorts | Service Terms',
  description: 'Read our terms and conditions for using LillyBabe Chennai escort services. Understand your rights, responsibilities, and our service policies.',
  keywords: 'terms and conditions, service terms, Chennai escorts terms, LillyBabe terms, legal terms',
  openGraph: {
    title: 'Terms & Conditions - LillyBabe Chennai Escorts',
    description: 'Service terms and conditions for LillyBabe Chennai escort services.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <TermsConditionsClient />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
