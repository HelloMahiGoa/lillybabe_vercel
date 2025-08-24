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

// Import sample data for testimonials
import testimonialsData from '../data/testimonials.json';

interface ProfileImage {
  photo_url: string;
  is_primary: boolean;
}

interface Profile {
  id: string;
  name: string;
  age: number;
  ethnicity: string;
  rating: number;
  response_rate: number;
  availability: string;
  price_per_hour: number;
  description: string;
  is_featured: boolean;
  is_verified: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  profile_photos: ProfileImage[];
}

interface DisplayProfile {
  id: number;
  name: string;
  age: number;
  location: string;
  photo_url: string;
  rating: number;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  distance: string;
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    loadProfiles();
  }, []);

  const loadProfiles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/data/profiles.json');
      const result = await response.json();

      if (result.profiles) {
        setProfiles(result.profiles || []);
      }
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Convert Profile interface to display format for compatibility
  const convertProfilesForDisplay = (profiles: Profile[]): DisplayProfile[] => {
    return profiles.map((profile, index) => ({
      id: index + 1, // Convert string id to number for display
      name: profile.name,
      age: profile.age,
      location: 'Chennai', // Default location since it's not in the JSON
      photo_url: profile.profile_photos?.find(img => img.is_primary)?.photo_url || '/placeholder-profile.jpg',
      rating: profile.rating,
      pricing: {
        '1 Shot': `₹${profile.price_per_hour.toLocaleString()}`,
        '2 Shots': `₹${(profile.price_per_hour * 1.5).toLocaleString()}`,
        '3 Shots': `₹${(profile.price_per_hour * 2).toLocaleString()}`,
        'Full Night': `₹${(profile.price_per_hour * 3).toLocaleString()}`
      },
      availability: profile.availability,
      distance: 'Nearby'
    }));
  };

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
            <MobileProfiles profiles={convertProfilesForDisplay(profiles)} />
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
      <AvailableProfiles profiles={convertProfilesForDisplay(profiles)} />
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
