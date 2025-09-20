import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PrivacyPolicyClient } from '@/components/privacy/privacy-policy-client';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export const metadata: Metadata = {
  title: 'Privacy Policy - LillyBabe Chennai Escorts | Your Privacy is Our Priority',
  description: 'Learn how LillyBabe protects your privacy and personal information. Complete transparency about data collection, usage, and protection policies for our Chennai escort services.',
  keywords: 'privacy policy, data protection, Chennai escorts privacy, personal information, LillyBabe privacy',
  openGraph: {
    title: 'Privacy Policy - LillyBabe Chennai Escorts',
    description: 'Your privacy is our priority. Learn how we protect your personal information.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <PrivacyPolicyClient />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
