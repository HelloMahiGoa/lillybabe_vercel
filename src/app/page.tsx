"use client";

import { useState, useEffect } from 'react';
import { Layout } from '@/components/layout/layout';
import { Hero } from '@/components/home/hero';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { AvailableProfiles } from '@/components/home/featured-profiles';
import { MainContent } from '@/components/home/main-content';
import { WhyChooseOurEscorts } from '@/components/home/why-choose-our-escorts';
import { WhyChooseLillyBabe } from '@/components/home/why-choose-lillybabe';
import { GallerySection } from '@/components/home/gallery-section';
import { ChennaiEscortsGallery } from '@/components/home/chennai-escorts-gallery';
import { ServiceAreas } from '@/components/home/service-areas';
import { Testimonials } from '@/components/home/testimonials';
import { FAQSection } from '@/components/home/faq-section';
import { ContactSection } from '@/components/home/contact-section';
import { SEOContent } from '@/components/home/seo-content';

// Mobile Components
import { MobileHero } from '@/components/mobile/mobile-hero';
import { MobileCategories } from '@/components/mobile/mobile-categories';
import { MobileProfiles } from '@/components/mobile/mobile-profiles';
import { MobileFeatures } from '@/components/mobile/mobile-features';
import { MobileQuickActions } from '@/components/mobile/mobile-quick-actions';
import { MobilePullRefresh } from '@/components/mobile/mobile-pull-refresh';

// Import sample data
import profilesData from '../data/profiles.json';
import testimonialsData from '../data/testimonials.json';

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const profiles = profilesData.profiles;
  const testimonials = testimonialsData.testimonials;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleRefresh = async () => {
    // Simulate refresh delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // You can add actual refresh logic here
    console.log('Refreshing...');
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <MobilePullRefresh onRefresh={handleRefresh}>
          {/* Main Content */}
          <main className="pb-6">
            <MobileHero />
            <MobileCategories />
            <MobileProfiles />
            <MobileFeatures />
          </main>
        </MobilePullRefresh>

        {/* Quick Actions */}
        <MobileQuickActions />
      </div>
    );
  }

  // Desktop Layout
  return (
    <Layout>
      <Hero />
      <WhyChooseUs />
      <AvailableProfiles profiles={profiles} />
      <MainContent />
      <WhyChooseOurEscorts />
      <WhyChooseLillyBabe />
      <GallerySection />
      <ChennaiEscortsGallery />
      <ServiceAreas />
      <Testimonials testimonials={testimonials} />
      <FAQSection />
      <SEOContent />
      <ContactSection />
    </Layout>
  );
}
