"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Heart, MapPin, Clock, Phone, Zap, ChevronDown, Shield, Users, Eye } from 'lucide-react';
import { Profile } from '@/types';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallBanner } from '@/components/ui/pwa-install-banner';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import PullToRefresh from '@/components/ui/pull-to-refresh';
import { StructuredData } from '@/components/seo/structured-data';
import { SEOMonitoring } from '@/components/seo/seo-monitoring';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';
import Image from 'next/image';
import Link from 'next/link';
import { trackEvent, trackPageView } from '@/components/analytics';

export default function EscortsPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isClient, setIsClient] = useState(false);

  // Track page view on component mount
  useEffect(() => {
    if (isClient) {
      trackPageView('/escorts', 'Chennai Escorts - Premium Call Girls & Escort Services');
      trackEvent('page_view', 'escorts', 'escorts_listing_page');
    }
  }, [isClient]);

  // Track escort interactions
  const handleEscortClick = (profileId: string, profileName: string) => {
    trackEvent('click', 'escort_profile', profileName);
    trackEvent('engagement', 'escort_view', profileId);
  };

  // Track search and filter interactions
  const handleSearch = (searchQuery: string) => {
    trackEvent('search', 'escorts', searchQuery);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    trackEvent('filter', 'escorts', `${filterType}_${value}`);
  };

  // Track view mode changes
  const handleViewModeChange = (mode: 'grid' | 'list') => {
    trackEvent('view_mode_change', 'escorts', mode);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // PWA Install
  const { showInstallBanner, installApp, closeModal, showModal, canShowModal } = usePWAInstall('banner');

  const categories = [
    'Russian', 'Tamil', 'Telugu', 'Kannada', 'Independent', 
    'Housewife', 'Airhostess', 'College Girl', 'Model', 'Celebrity', 'Teen', 'VIP'
  ];

  const locations = [
    'Adyar', 'Anna Nagar', 'ECR', 'Guindy', 
    'Kilpauk', 'Nungambakkam', 'OMR', 'T-Nagar'
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/api/profiles-list');
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setProfiles(data.profiles || []);
        setError(null);

      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    // Use requestIdleCallback for non-critical data fetching
    if ('requestIdleCallback' in window) {
      requestIdleCallback(fetchData);
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(fetchData, 100);
    }
  }, []);

  // Preload critical images
  useEffect(() => {
    if (isClient) {
      const criticalImages = [
        '/images/escort-bg.webp',
        '/images/hero-bg.webp'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    }
  }, [isClient]);

  const handleRefresh = async () => {
    setRefreshing(true);
    setError(null);
    
    try {
      const response = await fetch('/api/profiles-list', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProfiles(data.profiles || []);
      setError(null);
    } catch (err) {
      console.error('Error refreshing data:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh data');
    } finally {
      setRefreshing(false);
    }
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         profile.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || profile.category === selectedCategory;
    const matchesLocation = !selectedLocation || profile.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chennai Escorts & Call Girls",
    "description": "Premium escort services in Chennai with verified and beautiful companions",
    "provider": {
      "@type": "Organization",
      "name": "LillyBabe",
      "url": "https://lillybabe.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Chennai"
    },
    "serviceType": "Escort Services"
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profiles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">⚠️</div>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <CriticalCSS />
      <StructuredData type="Service" data={structuredData} />
      
      {/* SEO Monitoring */}
      <SEOMonitoring pageType="escorts" pageUrl="https://lillybabe.com/escorts" pageTitle="Chennai Escorts - Verified Call Girls & Independent Escorts | LillyBabe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header />

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-pink-600 font-medium">Our Escorts</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Creative Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Content */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1 
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Main heading with modern styling */}
                  <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight">
                    <span className="block relative">
                      <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl">
                        Chennai
                      </span>
                      {/* Glow effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 bg-clip-text text-transparent blur-sm opacity-60">
                        Chennai
                      </span>
                    </span>
                    
                    <span className="block relative mt-2 sm:mt-3">
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                        Escorts & Call Girls
                      </span>
                      {/* Subtle underline effect */}
                      <div className="absolute -bottom-2 left-0 h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </span>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-sm opacity-60"></div>
                  <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-sm opacity-40"></div>
                </motion.h1>

                {/* Description */}
                <motion.p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  We update our available profiles every day, so you see exactly which escort girls are available right now. 
                  Real girls, real photos, real availability - no surprises, just genuine companions ready to meet you.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link
                    href="tel:+918121426651"
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden min-h-[44px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Call Now</span>
                  </Link>
                  
                  <Link
                    href="#profiles"
                    className="group inline-flex items-center justify-center gap-2 sm:gap-3 text-white/80 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg hover:bg-white/10 min-h-[44px]"
                  >
                    <span>View Profiles</span>
                    <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </motion.div>
              </motion.div>
              
              {/* Right Visual - Hero Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="relative">
                  <Image
                    src="/images/escort-bg.webp"
                    alt="Chennai Escorts"
                    width={600}
                    height={800}
                    className="w-full h-auto rounded-3xl shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Profile Cards Section */}
        <section id="profiles" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Find Your Perfect <span className="text-pink-600">Companion</span> Today
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                All profiles are updated daily - see exactly who's available right now and ready to meet
              </p>

              {/* Search and Filters */}
              <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Find your girl by name or area..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">All Categories</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>

                  {/* Location Filter */}
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">All Locations</option>
                      {locations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                  </div>

                  {/* View Mode */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                        viewMode === 'grid' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                      Grid
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all ${
                        viewMode === 'list' 
                          ? 'bg-pink-500 text-white' 
                          : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      <List className="h-5 w-5" />
                      List
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 font-medium">
                  {filteredProfiles.length} girls available right now - updated daily so you know who's actually free
                </p>
              </div>
            </motion.div>

            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredProfiles.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 hover:border-pink-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <Link href={`/escorts/${profile.slug}`}>
                    <div className="relative overflow-hidden">
                      <OptimizedImage
                        src={profile.photo_url}
                        alt={profile.name}
                        width={300}
                        height={400}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        quality={85}
                        priority={index < 8} // Prioritize first 8 images
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm font-medium">{profile.rating}</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-green-400" />
                            <span className="text-white text-sm font-medium">Verified</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-white" />
                            <span className="text-white text-sm">Available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-gray-900 font-bold text-xl group-hover:text-pink-600 transition-colors">
                          {profile.name}
                        </h3>
                        <span className="text-gray-500 text-lg font-medium">{profile.age} years</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-4 w-4 text-pink-500" />
                        <span className="text-gray-600 text-sm">{profile.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Heart className="h-4 w-4 text-pink-500" />
                        <span className="text-gray-600 text-sm">{profile.category}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-col">
                          <span className="text-gray-500 text-xs">Starting from</span>
                          <span className="text-pink-600 font-bold text-xl">
                            ₹{profile.pricing['1 Shot']}
                          </span>
                        </div>
                        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/25">
                          View Profile
                        </button>
                      </div>
                      
                      {/* Views, Reviews, and Response Rate */}
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4 text-blue-500" />
                          <span>{profile.views_count || 0} views</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span>{profile.reviews_count || 0} reviews</span>
                        </div>
                        <span className="text-green-600 font-medium">
                          {profile.response_rate || 90}% Response
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProfiles.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No girls available with those filters</h3>
                <p className="text-gray-600">Try different search terms or check back later - we update daily!</p>
              </div>
            )}
          </div>
        </section>

        {/* SEO Content Section */}
        <EscortsSEOContent profileCount={profiles.length} />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Meet Your Perfect Companion?
              </h2>
              <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
                Contact us now for a discreet and professional service. 
                We're available 24/7 to help you find the perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+918121426651"
                  className="inline-flex items-center justify-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call Now</span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
                >
                  <span>Contact Us</span>
                  <Zap className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Floating Action Buttons */}
        <FloatingButtons />
        
        {/* PWA Install Banner */}
        <PWAInstallBanner
          isOpen={showInstallBanner}
          onClose={closeModal}
          onInstall={installApp}
        />
        
      </div>
    </>
  );
}