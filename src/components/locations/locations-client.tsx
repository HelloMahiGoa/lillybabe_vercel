'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';

interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  rating: number;
  distance: string;
  popular: boolean;
}

const locations: Location[] = [
  {
    id: '1',
    name: 'T Nagar',
    slug: 't-nagar',
    description: 'A bustling commercial area famous for shopping, textiles, and jewelry with premium escort services available.',
    rating: 4.8,
    distance: '5 km from Center',
    popular: true
  },
  {
    id: '2',
    name: 'Anna Nagar',
    slug: 'anna-nagar',
    description: 'A well-planned residential and commercial area with broad avenues, modern amenities, and professional escort services.',
    rating: 4.7,
    distance: '8 km from Center',
    popular: true
  },
  {
    id: '3',
    name: 'OMR',
    slug: 'omr',
    description: 'The IT corridor of Chennai with numerous software companies, IT parks, and premium escort services for professionals.',
    rating: 4.8,
    distance: '15 km from Center',
    popular: true
  },
  {
    id: '4',
    name: 'ECR',
    slug: 'ecr',
    description: 'East Coast Road offering beautiful sea views, resorts, beaches, and romantic escort services for couples.',
    rating: 4.6,
    distance: '20 km from Center',
    popular: false
  },
  {
    id: '5',
    name: 'Adyar',
    slug: 'adyar',
    description: 'A peaceful residential area near the Adyar River with traditional and contemporary elements, offering discreet escort services.',
    rating: 4.5,
    distance: '10 km from Center',
    popular: false
  },
  {
    id: '6',
    name: 'Nungambakkam',
    slug: 'nungambakkam',
    description: 'A business and residential locality with multi-storied buildings, hotels, and professional escort services.',
    rating: 4.7,
    distance: '6 km from Center',
    popular: false
  },
  {
    id: '7',
    name: 'Guindy',
    slug: 'guindy',
    description: 'A business district with government offices, IT companies, and professional escort services for corporate clients.',
    rating: 4.4,
    distance: '8 km from Center',
    popular: false
  },
  {
    id: '8',
    name: 'Egmore',
    slug: 'egmore',
    description: 'A central Chennai landmark area with heritage streets, hotels, and reliable escort services for flexible schedules.',
    rating: 4.6,
    distance: '4 km from Center',
    popular: false
  },
  {
    id: '9',
    name: 'Kilpauk',
    slug: 'kilpauk',
    description: 'A mixed residential and commercial area with hospitals, schools, and reliable escort services.',
    rating: 4.3,
    distance: '6 km from Center',
    popular: false
  },
  {
    id: '10',
    name: 'Teynampet',
    slug: 'teynampet',
    description: 'A commercial area with shopping malls, restaurants, and professional escort services.',
    rating: 4.3,
    distance: '5 km from Center',
    popular: false
  },
];

export const LocationsClient = () => {
  // Track page view on component mount
  useEffect(() => {
    trackPageView('/locations', 'Chennai Locations - Escort Services');
    trackEvent('page_view', 'locations', 'locations_page');
  }, []);

  // Track location card clicks
  const handleLocationClick = (locationName: string, locationSlug: string) => {
    trackEvent('click', 'location_card', locationName);
    trackEvent('navigation', 'location_page', locationSlug);
  };

  // Track CTA button clicks
  const handleCTAClick = (ctaType: string, location?: string) => {
    trackEvent('click', 'cta_button', ctaType);
    if (location) {
      trackEvent('engagement', 'location_cta', location);
    }
  };

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header />
        
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-pink-600 transition-colors" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <span className="text-gray-400" aria-hidden="true">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-pink-600 font-medium" itemProp="name">Locations</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>
        
        {/* Enhanced Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[80vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Creative Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.3),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:min-h-[80vh] md:py-20">
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
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                    <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      Chennai
                    </span>
                    <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                      Locations
                    </span>
                    <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-2 sm:mt-4">
                      Escort Services
                    </span>
                  </h1>
                </motion.div>
                
                {/* Description */}
              <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-full md:max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Find <span className="text-pink-400 font-semibold">professional escort services</span> in all major Chennai locations. Our verified escorts are available across the city with 24/7 service.
                </motion.p>
              </motion.div>
              
              {/* Service Coverage Visualization */}
              <motion.div 
                className="relative hidden lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src="/images/map.avif"
                      alt="Chennai Service Coverage Map"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Chennai Info Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.2),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.2),transparent_50%)]"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:30px_30px]"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full mb-8 shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">CHENNAI ESCORTS</span>
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Chennai
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                  Main Service Area
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                The capital city of Tamil Nadu, Chennai offers a perfect blend of <span className="text-pink-400 font-semibold">traditional culture</span> and <span className="text-purple-400 font-semibold">modern lifestyle</span> with excellent escort services across all major areas.
              </motion.p>
              
              {/* Stats Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">22+</div>
                  <div className="text-sm text-gray-300">Service Areas</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-gray-300">Verified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Available</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">5★</div>
                  <div className="text-sm text-gray-300">Rating</div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Link
                  href="/"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25"
                >
                  <span>View Chennai Escorts</span>
                  <motion.span
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  >
                    →
                  </motion.span>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
  
        {/* Enhanced Search, Filter and Locations Grid */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full mb-6">
                <MapPin className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">CHENNAI LOCATIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Available <span className="text-purple-500">Locations</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                Professional escort services available in all major Chennai areas. Choose your preferred location.
              </p>
            </motion.div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locations.map((location, index) => {
                // Define unique gradient combinations for different location types
                const getGradientBorder = () => {
                  if (location.popular) {
                    return {
                      border: 'from-pink-500 via-purple-500 to-indigo-500',
                      shadow: 'shadow-pink-500/20',
                      hoverShadow: 'hover:shadow-pink-500/30'
                    };
                  } else if (location.rating >= 4.7) {
                    return {
                      border: 'from-emerald-500 via-teal-500 to-cyan-500',
                      shadow: 'shadow-emerald-500/20',
                      hoverShadow: 'hover:shadow-emerald-500/30'
                    };
                  } else if (location.rating >= 4.5) {
                    return {
                      border: 'from-orange-500 via-red-500 to-pink-500',
                      shadow: 'shadow-orange-500/20',
                      hoverShadow: 'hover:shadow-orange-500/30'
                    };
                  } else {
                    return {
                      border: 'from-blue-500 via-indigo-500 to-purple-500',
                      shadow: 'shadow-blue-500/20',
                      hoverShadow: 'hover:shadow-blue-500/30'
                    };
                  }
                };

                const gradientStyle = getGradientBorder();

                return (
                  <motion.div
                    key={location.id}
                    className="group relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Enhanced Animated Gradient Border */}
                    <div className={`relative bg-gradient-to-r ${gradientStyle.border} rounded-2xl p-[3px] shadow-lg hover:shadow-2xl transition-all duration-500`} style={{
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 3s ease infinite'
                    }}>
                      {/* Inner Card Content */}
                      <div className="relative bg-white rounded-2xl overflow-hidden">
                        {/* Gradient Overlay on Hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradientStyle.border} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        {/* Card Header */}
                        <div className="relative p-6 pb-0">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                                {location.name}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className="text-gray-500 text-sm">{location.distance}</span>
                                <div className="flex items-center gap-1">
                                  <span className="text-yellow-500">★</span>
                                  <span className="text-gray-600 text-sm font-medium">{location.rating}</span>
                                </div>
                              </div>
                            </div>
                            
                            {location.popular && (
                              <motion.div 
                                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white/20"
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                ⭐ Popular
                              </motion.div>
                            )}
                          </div>
                        </div>
                        
                        {/* Card Body */}
                        <div className="relative px-6 pb-6">
                          <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed line-clamp-2">
                            {location.description}
                          </p>
                          
                          {/* Action Button */}
                          <Link
                          href={location.slug === 't-nagar' ? '/t-nagar-escorts' : location.slug === 'anna-nagar' ? '/anna-nagar-escorts' : location.slug === 'omr' ? '/omr-escorts' : location.slug === 'ecr' ? '/ecr-escorts' : location.slug === 'adyar' ? '/adyar-escorts' : location.slug === 'nungambakkam' ? '/nungambakkam-escorts' : location.slug === 'guindy' ? '/guindy-escorts' : location.slug === 'egmore' ? '/egmore-escorts' : location.slug === 'teynampet' ? '/teynampet-escorts' : location.slug === 'kilpauk' ? '/kilpauk-escorts' : '/escorts'}
                            className={`group/btn block w-full bg-gradient-to-r ${gradientStyle.border} hover:opacity-90 text-white text-center py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${gradientStyle.hoverShadow} border-2 border-transparent hover:border-white/20`}
                            onClick={() => handleLocationClick(location.name, location.slug)}
                          >
                            <span className="flex items-center justify-center gap-2">
                              View {location.name} Escorts
                              <motion.span
                                className="group-hover/btn:translate-x-1 transition-transform duration-300"
                              >
                                →
                              </motion.span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Content Sections */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-purple-600">Chennai Escorts</span> for Your Perfect Evening?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Chennai's vibrant nightlife and business culture create the perfect backdrop for memorable encounters. 
                  Whether you're a busy professional looking to unwind after a long day or a visitor wanting to explore 
                  the city's hidden gems, our escort services offer more than just companionship.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our carefully selected escorts understand the local culture and can guide you through Chennai's best 
                  restaurants, entertainment venues, and scenic spots. They're not just beautiful companions but also 
                  knowledgeable locals who can make your time in Chennai truly unforgettable.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">💫</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Experience</h3>
                    <p className="text-gray-600">Every moment crafted with care and attention to detail</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">🏙️</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">City-Wide Coverage</h3>
                    <p className="text-gray-600">Available in all major Chennai locations</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Exploring Chennai's <span className="text-indigo-600">Diverse Neighborhoods</span> Together
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  From the bustling streets of T-Nagar to the serene beaches of ECR, Chennai offers a unique blend 
                  of traditional charm and modern sophistication. Each area has its own character and attractions, 
                  and our escorts know exactly how to make the most of your time in any location.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Whether you prefer the upscale shopping districts of Anna Nagar, the IT hub atmosphere of OMR, 
                  or the cultural richness of Adyar, we have companions who can enhance your experience in every 
                  corner of this magnificent city.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Our <span className="text-pink-600">Chennai Escort Service</span> Different?
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                We've been serving Chennai's discerning clients for years, building a reputation based on trust, 
                discretion, and exceptional service quality that goes beyond expectations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Discretion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your privacy is our top priority. Every interaction is handled with the utmost confidentiality, 
                  ensuring your personal information and activities remain completely private.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">⭐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Companions</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our escorts undergo thorough verification processes. We ensure they meet our high standards 
                  for professionalism, safety, and service quality before joining our network.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our streamlined booking process makes it simple to connect with the perfect companion. 
                  Quick, secure, and hassle-free arrangements that fit your schedule and preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Experience <span className="text-pink-400">Chennai Like Never Before</span>?
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Don't let another evening pass by without experiencing the magic that Chennai has to offer. 
                  Our professional escort services are designed to create memorable moments that you'll cherish 
                  long after your time together ends.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're planning a romantic dinner date, need a companion for a business event, 
                  or simply want to explore the city with someone special, we're here to make it happen. 
                  Your perfect evening in Chennai is just a call away.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25"
                    onClick={() => handleCTAClick('get_started_today')}
                  >
                    <span>Get Started Today</span>
                    <motion.span
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.span>
                  </Link>
                  <Link
                    href="/gallery"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 border border-white/20 hover:border-white/30"
                    onClick={() => handleCTAClick('view_gallery')}
                  >
                    View Our Gallery
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-8 h-80 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">💖</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Your Perfect Match</h3>
                    <p className="text-gray-300">Finding the right companion for your special moments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Floating Action Buttons */}
        <FloatingButtons />
        
        {/* Footer */}
        <Footer />
      </div>
    );
};