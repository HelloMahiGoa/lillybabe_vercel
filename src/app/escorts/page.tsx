'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Grid, List, Star, Heart, MapPin, Clock, Phone, Zap, ChevronDown, Shield, Users } from 'lucide-react';
import { Profile } from '@/types';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { PWAInstallModal } from '@/components/ui/pwa-install-modal';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import PullToRefresh from '@/components/ui/pull-to-refresh';
import { StructuredData } from '@/components/seo/structured-data';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Image from 'next/image';
import Link from 'next/link';

export default function EscortsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // PWA Install
  const { showInstallModal, installApp, closeModal } = usePWAInstall();

  const categories = [
    'Russian', 'Tamil', 'Telugu', 'Kannada', 'Independent', 
    'Housewife', 'Airhostess', 'College Girl', 'Model', 'Celebrity', 'Teen', 'VIP'
  ];

  const locations = [
    'Adyar', 'Anna Nagar', 'Chennai Central', 'ECR', 'Guindy', 
    'Kilpauk', 'Mylapore', 'Nungambakkam', 'OMR', 'T-Nagar'
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const params = new URLSearchParams();
        params.append('limit', '20');
        params.append('offset', String((currentPage - 1) * 20));
        
        if (selectedCategory) {
          params.append('category', selectedCategory);
        }
        if (selectedLocation) {
          params.append('location', selectedLocation);
        }

        console.log('Fetching profiles from API with params:', params.toString());
        const response = await fetch(`/api/profiles-list?${params.toString()}`);
        console.log('API Response status:', response.status);
        console.log('API Response ok:', response.ok);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error response:', errorText);
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('API Response data:', data);
        const profiles = data.profiles || [];
        console.log('Profiles count:', profiles.length);
        
        if (currentPage === 1) {
          setProfiles(profiles);
        } else {
          setProfiles(prev => [...prev, ...profiles]);
        }
        setError(null);
        setHasMore(profiles.length === 20);
        
      } catch (err) {
        console.error('Error fetching profiles:', err);
        setError(err instanceof Error ? err.message : 'Failed to load profiles');
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [currentPage, selectedCategory, selectedLocation]);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      setCurrentPage(1);
      setError(null);
      
      const params = new URLSearchParams();
      params.append('limit', '20');
      params.append('offset', '0');
      
      if (selectedCategory) {
        params.append('category', selectedCategory);
      }
      if (selectedLocation) {
        params.append('location', selectedLocation);
      }

      const response = await fetch(`/api/profiles-list?${params.toString()}`, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setProfiles(data.profiles || []);
      setError(null);
      setHasMore(data.profiles && data.profiles.length === 20);
    } catch (err) {
      console.error('Error refreshing profiles:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh profiles');
    } finally {
      setRefreshing(false);
    }
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedLocation('');
    setCurrentPage(1);
  };

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const content = (
    <>
      <StructuredData 
        type="WebPage" 
        data={{
          title: "Chennai Escorts - Verified Call Girls & Independent Escorts",
          description: "Meet genuine Chennai escorts with verified profiles, real photos, and authentic reviews",
          url: "https://lillybabe.com/escorts",
          profileCount: profiles.length
        }} 
      />
      <StructuredData type="Organization" data={{}} />
      <StructuredData type="Service" data={{}} />
      <StructuredData type="FAQPage" data={{}} />
      
      {/* Responsive Header */}
      {isMobile ? <MobileHeader title="Our Escorts" /> : <Header />}


      {/* Breadcrumb Navigation - Desktop Only */}
      {!isMobile && (
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
      )}

      {/* Hero Section */}
      <section className={`relative ${isMobile ? 'min-h-[80vh]' : 'min-h-screen'} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden`}>
        {/* Creative Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-12 items-center ${isMobile ? 'py-12' : 'min-h-screen py-20'}`}>
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className={`${isMobile ? 'text-4xl' : 'text-5xl lg:text-7xl'} font-black leading-tight`}>
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Chennai
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                    Escorts
                  </span>
                  <span className={`block ${isMobile ? 'text-2xl' : 'text-3xl lg:text-4xl'} font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-4`}>
                    & Call Girls
                  </span>
                </h1>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className={`${isMobile ? 'text-base' : 'text-lg lg:text-xl'} text-gray-300 leading-relaxed ${isMobile ? 'max-w-full' : 'max-w-lg'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Meet genuine <span className="text-pink-400 font-semibold">Chennai escorts</span> with verified profiles, real photos, and authentic reviews. Your perfect companion is just a click away!
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className={`flex ${isMobile ? 'flex-col' : 'flex-col sm:flex-row'} gap-4`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  href="tel:+918121426651"
                  className={`group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white ${isMobile ? 'px-6 py-3' : 'px-8 py-4'} rounded-full font-semibold ${isMobile ? 'text-base' : 'text-lg'} transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Phone className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Call Now</span>
                  <Zap className="w-4 h-4 group-hover:animate-bounce relative z-10" />
                </Link>
                
                <Link
                  href="#profiles"
                  className={`group inline-flex items-center justify-center gap-3 text-white/80 hover:text-white ${isMobile ? 'px-6 py-3' : 'px-8 py-4'} rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm ${isMobile ? 'text-base' : 'text-lg'} hover:bg-white/10`}
                >
                  <span>View Profiles</span>
                  <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* Right Visual - Hero Image */}
            {!isMobile && (
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Main Hero Image */}
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/verified-girls.avif"
                      alt="Verified Chennai Escorts - Premium escort service with beautiful professional escorts"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={85}
                    />
                  </div>
                  {/* Overlay with stats */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-white">500+</div>
                        <div className="text-xs text-gray-300">Escorts</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-gray-300">Service</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">5.0</div>
                        <div className="text-xs text-gray-300">Rating</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
        
      </section>

      {/* Search & Filter Section */}
      <section className={`${isMobile ? 'py-8' : 'py-12'} ${isMobile ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isMobile && (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-600 px-6 py-3 rounded-full mb-6">
                <Search className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">FIND YOUR PERFECT MATCH</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Browse Our <span className="text-pink-500">Beautiful Escorts</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Use our advanced filters to find the perfect companion for your needs. All our escorts are verified, professional, and ready to make your time unforgettable.
              </p>
            </motion.div>
          )}

          {/* Mobile Filters */}
          {isMobile ? (
            <div className="p-4 space-y-4 mb-6">
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full mb-4">
                  <Search className="h-4 w-4 text-white" />
                  <span className="text-white font-bold text-sm">FIND YOUR MATCH</span>
                </div>
                <h2 className="text-2xl font-black text-white mb-2">
                  Browse Our <span className="text-pink-400">Escorts</span>
                </h2>
                <p className="text-gray-300 text-sm">
                  Use filters to find your perfect companion
                </p>
              </motion.div>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search escorts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium whitespace-nowrap shadow-lg"
                >
                  All
                </button>
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shadow-sm ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-pink-500/25'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center bg-white/5 rounded-2xl p-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  <p className="text-white font-medium text-sm">
                    {filteredProfiles.length} Escorts Found
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'grid' ? 'bg-purple-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 border border-white/20'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === 'list' ? 'bg-purple-500 text-white shadow-lg' : 'bg-white/10 text-gray-400 border border-white/20'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by name, location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 shadow-sm"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 shadow-sm"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 shadow-sm"
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <div className="flex gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 p-4 rounded-2xl transition-all shadow-sm ${
                      viewMode === 'grid' 
                        ? 'bg-pink-500 text-white shadow-pink-500/25' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Grid className="h-5 w-5 mx-auto" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 p-4 rounded-2xl transition-all shadow-sm ${
                      viewMode === 'list' 
                        ? 'bg-pink-500 text-white shadow-pink-500/25' 
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <List className="h-5 w-5 mx-auto" />
                  </button>
                </div>
              </div>
            
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">
                      {filteredProfiles.length} Escorts Found
                    </span>
                  </div>
                  {(selectedCategory || selectedLocation || searchTerm) && (
                    <button
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('');
                        setSelectedLocation('');
                      }}
                      className="text-pink-600 hover:text-pink-700 font-medium text-sm"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  Showing {filteredProfiles.length} of {profiles.length} profiles
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Profile Cards Section */}
      <section id="profiles" className={`${isMobile ? 'py-8' : 'py-20'} ${isMobile ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isMobile && (
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full mb-6">
                <Users className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">OUR BEAUTIFUL ESCORTS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Meet Our <span className="text-purple-500">Verified Escorts</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Browse through our collection of beautiful, verified escorts. Each profile is carefully curated with real photos, authentic reviews, and detailed information to help you find your perfect match.
              </p>
            </motion.div>
          )}

          <div className={`grid ${isMobile ? 'gap-4' : 'gap-8'} ${
            viewMode === 'grid' 
              ? `${isMobile ? 'grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}` 
              : 'grid-cols-1'
          }`}>
            {filteredProfiles.map((profile, index) => (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group ${isMobile ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/50' : 'bg-white border border-gray-100 hover:border-pink-200'} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2`}
              >
                <Link href={`/escorts/${profile.slug}`}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={profile.photo_url}
                      alt={`${profile.name} - ${profile.category} escort in ${profile.location}`}
                      width={300}
                      height={400}
                      className={`w-full ${isMobile ? 'h-48' : 'h-80'} object-cover group-hover:scale-110 transition-transform duration-500`}
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      quality={85}
                      loading="lazy"
                    />
                    
                    {/* Overlay badges */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-gray-900 text-sm font-bold">{profile.rating}</span>
                      </div>
                    </div>
                    
                    {profile.is_featured && (
                      <div className="absolute top-4 left-4">
                        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full px-3 py-1 shadow-lg">
                          <span className="text-white text-xs font-bold">FEATURED</span>
                        </div>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                          <p className="text-white text-sm font-medium">Click to view full profile</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${isMobile ? 'p-4' : 'p-6'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`${isMobile ? 'text-white' : 'text-gray-900'} font-bold ${isMobile ? 'text-lg' : 'text-xl'} ${isMobile ? 'group-hover:text-purple-400' : 'group-hover:text-pink-600'} transition-colors`}>
                        {profile.name}
                      </h3>
                      <span className={`${isMobile ? 'text-gray-400' : 'text-gray-500'} ${isMobile ? 'text-sm' : 'text-lg'} font-medium`}>{profile.age} years</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className={`h-4 w-4 ${isMobile ? 'text-purple-400' : 'text-pink-500'}`} />
                      <span className={`${isMobile ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{profile.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className={`h-4 w-4 ${isMobile ? 'text-purple-400' : 'text-pink-500'}`} />
                      <span className={`${isMobile ? 'text-gray-300' : 'text-gray-600'} text-sm`}>{profile.category}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className={`${isMobile ? 'text-gray-400' : 'text-gray-500'} text-xs`}>Starting from</span>
                        <span className={`${isMobile ? 'text-green-400' : 'text-pink-600'} font-bold ${isMobile ? 'text-lg' : 'text-xl'}`}>
                          ₹{profile.pricing['1 Shot']}
                        </span>
                      </div>
                      <button className={`bg-gradient-to-r from-pink-500 to-purple-500 text-white ${isMobile ? 'px-4 py-2' : 'px-6 py-3'} rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 ${isMobile ? 'text-sm' : ''}`}>
                        View Profile
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  disabled={loading}
                  className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-pink-500/25"
                >
                  {loading ? 'Loading...' : 'Load More Escorts'}
                </button>
              </div>
            )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-600 px-6 py-3 rounded-full mb-6">
                <Star className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">WHY CHOOSE LILLYBABE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                Premium <span className="text-pink-400">Escort Service</span> in <span className="text-purple-400">Chennai</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're not just another escort service - we're your trusted companions for unforgettable experiences in Chennai.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Verified Escorts",
                description: "All our escorts are personally verified and background checked for your safety and peace of mind.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Shield,
                title: "100% Discretion",
                description: "Your privacy is our top priority. We maintain complete confidentiality in all our services.",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Whether it's day or night, we're here for you. Round-the-clock service for your convenience.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "We handpick only the most beautiful, professional, and experienced escorts for our clients.",
                color: "from-yellow-500 to-orange-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full mb-6">
                <Heart className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">CLIENT TESTIMONIALS</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                What Our <span className="text-green-500">Happy Clients</span> Say
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Don't just take our word for it - here's what some of our amazing clients have to say about their experiences with us.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh K.",
                location: "Chennai",
                rating: 5,
                content: "Amazing experience! The escort was exactly as described - beautiful, professional, and made my evening unforgettable. Highly recommended!",
                icon: Star,
                color: "from-pink-400 to-purple-500"
              },
              {
                name: "Vikram S.",
                location: "Bangalore",
                rating: 5,
                content: "I was visiting Chennai for business and decided to try Lillybabe. The service was exceptional and the girl was absolutely stunning!",
                icon: Heart,
                color: "from-blue-400 to-indigo-500"
              },
              {
                name: "Arjun M.",
                location: "Mumbai",
                rating: 5,
                content: "Best escort service in Chennai! Professional, discreet, and the girls are gorgeous. Will definitely book again on my next visit.",
                icon: Zap,
                color: "from-green-400 to-teal-500"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mr-4 animate-pulse`}>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <testimonial.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-600 px-6 py-3 rounded-full mb-6">
              <Search className="h-5 w-5 text-white" />
              <span className="text-white font-bold text-lg">SEO CONTENT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Everything About <span className="text-indigo-400">Chennai Escorts</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive information about our escort services, locations, and categories to help you make the best choice.
            </p>
          </motion.div>

          <EscortsSEOContent profileCount={profiles.length} />
        </div>
      </section>

      {isClient && <FloatingButtons />}
      
      <PWAInstallModal
        isOpen={showInstallModal}
        onClose={closeModal}
        onInstall={installApp}
      />

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}
      
      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
    </>
  );

  return (
    <div className={`min-h-screen ${isMobile ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-black' : 'bg-gray-50'}`}>
      {isMobile ? (
        <PullToRefresh onRefresh={handleRefresh} disabled={loading || refreshing}>
          {content}
        </PullToRefresh>
      ) : (
        content
      )}
    </div>
  );
}
