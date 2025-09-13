'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Filter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { MobileNavigation } from '@/components/mobile/mobile-navigation';
import { FloatingButtons } from '@/components/ui/floating-buttons';

interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  availability: string;
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
    image: '/images/location/tnagar.webp',
    features: ['Shopping Area', 'Business District', 'Premium Service', 'Easy Access'],
    availability: 'Available Now',
    rating: 4.8,
    distance: '5 km from Center',
    popular: true
  },
  {
    id: '3',
    name: 'Anna Nagar',
    slug: 'anna-nagar',
    description: 'A well-planned residential and commercial area with broad avenues, modern amenities, and professional escort services.',
    image: '/images/location/anna-nagar.webp',
    features: ['Residential Area', 'Modern Amenities', 'Safe Environment', 'Quality Service'],
    availability: 'Available Now',
    rating: 4.7,
    distance: '8 km from Center',
    popular: true
  },
  {
    id: '4',
    name: 'OMR',
    slug: 'omr',
    description: 'The IT corridor of Chennai with numerous software companies, IT parks, and premium escort services for professionals.',
    image: '/images/location/omr.webp',
    features: ['IT Corridor', 'Professional Service', 'Modern Facilities', '24/7 Available'],
    availability: 'Available Now',
    rating: 4.8,
    distance: '15 km from Center',
    popular: true
  },
  {
    id: '5',
    name: 'ECR',
    slug: 'ecr',
    description: 'East Coast Road offering beautiful sea views, resorts, beaches, and romantic escort services for couples.',
    image: '/images/location/ecr.webp',
    features: ['Sea View', 'Resorts & Beaches', 'Romantic Setting', 'Premium Service'],
    availability: 'Available Now',
    rating: 4.6,
    distance: '20 km from Center',
    popular: false
  },
  {
    id: '6',
    name: 'Adyar',
    slug: 'adyar',
    description: 'A peaceful residential area near the Adyar River with traditional and contemporary elements, offering discreet escort services.',
    image: '/images/location/adyar.webp',
    features: ['Peaceful Area', 'River View', 'Discreet Service', 'Cultural Heritage'],
    availability: 'Available Now',
    rating: 4.5,
    distance: '10 km from Center',
    popular: false
  },
  {
    id: '7',
    name: 'Nungambakkam',
    slug: 'nungambakkam',
    description: 'A business and residential locality with multi-storied buildings, hotels, and professional escort services.',
    image: '/images/location/nungambakkam.webp',
    features: ['Business District', 'Hotels & Offices', 'Professional Service', 'Easy Access'],
    availability: 'Available Now',
    rating: 4.7,
    distance: '6 km from Center',
    popular: false
  },
  {
    id: '8',
    name: 'Mahabalipuram',
    slug: 'mahabalipuram',
    description: 'A UNESCO World Heritage Site with ancient temples and sculptures, offering unique escort experiences.',
    image: '/images/location/mahabalipuram.webp',
    features: ['Heritage Site', 'Tourist Destination', 'Unique Experience', 'Cultural Setting'],
    availability: 'Available Now',
    rating: 4.4,
    distance: '60 km from Center',
    popular: false
  },
  {
    id: '9',
    name: 'Besant Nagar',
    slug: 'besant-nagar',
    description: 'A coastal residential area with beautiful beaches, parks, and premium escort services for beachside experiences.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Beach Area', 'Coastal View', 'Premium Service', 'Scenic Location'],
    availability: 'Available Now',
    rating: 4.5,
    distance: '12 km from Center',
    popular: false
  },
  {
    id: '10',
    name: 'Guindy',
    slug: 'guindy',
    description: 'A business district with government offices, IT companies, and professional escort services for corporate clients.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Business District', 'Government Offices', 'Professional Service', 'Corporate Area'],
    availability: 'Available Now',
    rating: 4.4,
    distance: '8 km from Center',
    popular: false
  },
  {
    id: '11',
    name: 'Mylapore',
    slug: 'mylapore',
    description: 'A traditional neighborhood with temples, cultural heritage, and discreet escort services in a heritage setting.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Cultural Heritage', 'Temple Area', 'Traditional Setting', 'Discreet Service'],
    availability: 'Available Now',
    rating: 4.3,
    distance: '7 km from Center',
    popular: false
  },
  {
    id: '12',
    name: 'Kotturpuram',
    slug: 'kotturpuram',
    description: 'A residential area with modern apartments and professional escort services for local residents.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Residential Area', 'Modern Apartments', 'Local Service', 'Safe Environment'],
    availability: 'Available Now',
    rating: 4.2,
    distance: '9 km from Center',
    popular: false
  },
  {
    id: '13',
    name: 'Kilpauk',
    slug: 'kilpauk',
    description: 'A mixed residential and commercial area with hospitals, schools, and reliable escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Mixed Area', 'Hospitals Nearby', 'Reliable Service', 'Educational Hub'],
    availability: 'Available Now',
    rating: 4.3,
    distance: '6 km from Center',
    popular: false
  },
  {
    id: '14',
    name: 'Thiruvanmiyur',
    slug: 'thiruvanmiyur',
    description: 'A coastal area with beaches, temples, and premium escort services for beachside experiences.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Coastal Area', 'Beach Access', 'Temple Area', 'Premium Service'],
    availability: 'Available Now',
    rating: 4.4,
    distance: '15 km from Center',
    popular: false
  },
  {
    id: '15',
    name: 'Teynampet',
    slug: 'teynampet',
    description: 'A commercial area with shopping malls, restaurants, and professional escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Commercial Area', 'Shopping Malls', 'Restaurants', 'Professional Service'],
    availability: 'Available Now',
    rating: 4.3,
    distance: '5 km from Center',
    popular: false
  },
  {
    id: '16',
    name: 'Vadapalani',
    slug: 'vadapalani',
    description: 'A residential and commercial area with temples, markets, and reliable escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Temple Area', 'Local Markets', 'Reliable Service', 'Mixed Development'],
    availability: 'Available Now',
    rating: 4.2,
    distance: '7 km from Center',
    popular: false
  },
  {
    id: '17',
    name: 'Avadi',
    slug: 'avadi',
    description: 'An industrial and residential area with defense establishments and professional escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Industrial Area', 'Defense Hub', 'Professional Service', 'Residential'],
    availability: 'Available Now',
    rating: 4.1,
    distance: '25 km from Center',
    popular: false
  },
  {
    id: '18',
    name: 'Gopalapuram',
    slug: 'gopalapuram',
    description: 'A residential area with heritage buildings and discreet escort services in a traditional setting.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Heritage Buildings', 'Residential Area', 'Discreet Service', 'Traditional Setting'],
    availability: 'Available Now',
    rating: 4.2,
    distance: '4 km from Center',
    popular: false
  },
  {
    id: '19',
    name: 'Royapettah',
    slug: 'royapettah',
    description: 'A commercial area with markets, hospitals, and professional escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Commercial Area', 'Local Markets', 'Hospitals', 'Professional Service'],
    availability: 'Available Now',
    rating: 4.3,
    distance: '3 km from Center',
    popular: false
  },
  {
    id: '20',
    name: 'Sholinganallur',
    slug: 'sholinganallur',
    description: 'An IT hub with software companies, tech parks, and premium escort services for professionals.',
    image: '/images/models/escort-girl-3.webp',
    features: ['IT Hub', 'Tech Parks', 'Professional Service', 'Modern Facilities'],
    availability: 'Available Now',
    rating: 4.5,
    distance: '18 km from Center',
    popular: false
  },
  {
    id: '21',
    name: 'Porur',
    slug: 'porur',
    description: 'A residential and commercial area with shopping centers and reliable escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['Shopping Centers', 'Residential Area', 'Reliable Service', 'Commercial Hub'],
    availability: 'Available Now',
    rating: 4.2,
    distance: '12 km from Center',
    popular: false
  },
  {
    id: '22',
    name: 'Velachery',
    slug: 'velachery',
    description: 'A rapidly developing area with IT companies, malls, and premium escort services.',
    image: '/images/models/escort-girl-3.webp',
    features: ['IT Companies', 'Shopping Malls', 'Premium Service', 'Rapid Development'],
    availability: 'Available Now',
    rating: 4.4,
    distance: '14 km from Center',
    popular: false
  }
];

export const LocationsClient = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredLocations, setFilteredLocations] = useState(locations);
  const [showPopularOnly, setShowPopularOnly] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    let filtered = locations;

    if (searchTerm) {
      filtered = filtered.filter(location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (showPopularOnly) {
      filtered = filtered.filter(location => location.popular);
    }

    setFilteredLocations(filtered);
  }, [searchTerm, showPopularOnly]);

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Responsive Header */}
        {isMobile ? <MobileHeader title="Locations" /> : <Header />}
        
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
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                    <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                      Chennai
                    </span>
                    <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                      Locations
                    </span>
                    <span className="block text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-4">
                      Escort Services
                    </span>
                  </h1>
                </motion.div>
                
                {/* Description */}
              <motion.p
                  className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-full md:max-w-lg"
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
  
        {/* Enhanced Search and Filter */}
        <section className="py-8 md:py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Find Your <span className="text-purple-600">Perfect Location</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Search and filter through our extensive list of Chennai locations
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col md:flex-row gap-6 items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
              <div className="relative flex-1 max-w-lg">
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-purple-500 transition-colors" />
                <input
                  type="text"
                    placeholder="Search locations like T-Nagar, Anna Nagar, OMR..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 text-base bg-gray-50 focus:bg-white"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={() => setShowPopularOnly(!showPopularOnly)}
                  className={`group flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    showPopularOnly 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border-2 border-transparent hover:border-purple-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Filter className={`w-5 h-5 transition-colors ${
                    showPopularOnly ? 'text-white' : 'text-gray-500 group-hover:text-purple-500'
                  }`} />
                  <span>Popular Only</span>
                  {showPopularOnly && (
                    <motion.div
                      className="w-2 h-2 bg-yellow-400 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.div>
            
            {/* Results Summary */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <p className="text-gray-600 text-sm">
                Showing <span className="font-semibold text-purple-600">{filteredLocations.length}</span> locations
                {searchTerm && (
                  <span> for "<span className="font-semibold">{searchTerm}</span>"</span>
                )}
                {showPopularOnly && (
                  <span> (Popular locations only)</span>
                )}
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Enhanced Locations Grid */}
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
              {filteredLocations.map((location, index) => (
                <motion.div
                  key={location.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {location.popular && (
                      <motion.div 
                        className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                      >
                        ⭐ Popular
                      </motion.div>
                    )}
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-pink-300 transition-colors">
                        {location.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-white/80 text-sm">{location.distance}</span>
                  </div>
                      </div>
                    </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed line-clamp-2">
                      {location.description}
                    </p>
                    
                    <Link
                      href="/escorts"
                      className="group/btn block w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Mobile Bottom Navigation */}
        {isMobile && <MobileBottomNavigation />}
        
        {/* Floating Action Buttons */}
        <FloatingButtons />
      </div>
    );
};