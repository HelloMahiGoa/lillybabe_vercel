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
  id: number;
  image_url: string;
  thumbnail_url?: string;
  is_primary: boolean;
}

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  category: string;
  nationality: string;
  height: string;
  pricing: {
    one_shot?: number;
    two_shot?: number;
    three_shot?: number;
    full_night?: number;
  };
  availability: string;
  rating: number;
  views_count: number;
  is_verified: boolean;
  is_featured: boolean;
  is_active: boolean;
  profile_images: ProfileImage[];
  whatsapp?: string;
  phone?: string;
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
      const params = new URLSearchParams({
        page: '1',
        limit: '12',
        sortBy: 'featured'
      });

      const response = await fetch(`/api/profiles?${params}`);
      const result = await response.json();

      if (result.success) {
        setProfiles(result.data.profiles || []);
      }
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Convert new Profile interface to old Profile interface for compatibility
  const convertProfilesForDisplay = (profiles: Profile[]) => {
    return profiles.map(profile => ({
      id: profile.id,
      name: profile.name,
      age: profile.age,
      location: profile.location,
      photo_url: profile.profile_images?.find(img => img.is_primary)?.image_url || '/placeholder-profile.jpg',
      rating: profile.rating,
      pricing: {
        '1 Shot': profile.pricing?.one_shot ? `₹${profile.pricing.one_shot.toLocaleString()}` : '₹8,000',
        '2 Shots': profile.pricing?.two_shot ? `₹${profile.pricing.two_shot.toLocaleString()}` : '₹12,000',
        '3 Shots': profile.pricing?.three_shot ? `₹${profile.pricing.three_shot.toLocaleString()}` : '₹15,000',
        'Full Night': profile.pricing?.full_night ? `₹${profile.pricing.full_night.toLocaleString()}` : '₹25,000'
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
