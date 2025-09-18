'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';

export function GuindyEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/guindy-escorts', 'Guindy Escorts | Premium Escort Services in Guindy Chennai');
    trackEvent('page_view', 'location_page', 'guindy_escorts');
  }, []);

  // Track location-specific interactions
  const handleLocationInteraction = (action: string, element: string) => {
    trackEvent('location_interaction', action, element);
    trackEvent('engagement', 'guindy_page', `${action}_${element}`);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 'guindy_cta', ctaType);
  };

  const features = [
    {
      icon: Heart,
      title: 'Amazing Business Hub',
      description: 'Guindy is Chennai\'s most happening business district with awesome corporate offices, cool tech parks, and great hotels. Our girls love working here because it\'s always buzzing with business activity!'
    },
    {
      icon: Shield,
      title: 'Trusted & Reliable',
      description: 'We\'ve been working in Guindy for years and know what makes a great business experience. Our girls are handpicked and genuinely care about making your time special.'
    },
    {
      icon: Clock,
      title: 'Always Available',
      description: 'Whether you need someone for lunch meetings, dinner events, or late night fun, we\'re here whenever you need us. Guindy never sleeps, and neither do we!'
    },
    {
      icon: Users,
      title: 'Real & Verified',
      description: 'No fake profiles or surprises here. Every girl you see is real, verified, and excited to meet you. What you see is exactly what you get!'
    }
  ];

    return (
      <div className="min-h-screen bg-gray-50">
      <Header />

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/locations" className="hover:text-pink-600 transition-colors">
                Locations
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-pink-600 font-medium">Guindy Escorts</span>
            </div>
          </div>
        </nav>
        
        {/* Creative Portfolio Hero Section */}
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
              
              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Guindy
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                    Escorts
                  </span>
                  <span className="block text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-4">
                    In Chennai
                  </span>
                </h1>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Looking for amazing company in <span className="text-pink-400 font-semibold">Guindy</span>? You've come to the right place! Our girls know this bustling business district like the back of their hand and will make your time here truly special.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <Link
                  href="tel:+918121426651"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <Phone className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Call Now</span>
                  <Zap className="w-4 h-4 group-hover:animate-bounce relative z-10" />
                </Link>
                
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center justify-center gap-3 text-white/80 hover:text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-lg hover:bg-white/10"
                >
                  <span>View Gallery</span>
                  <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* Right Visual - Hero Image */}
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
                    src="/images/verified-girls.png"
                    alt="Verified Escorts in Guindy Chennai"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </motion.div>
                
            </motion.div>
          </div>
        </div>
        
      </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Our Beautiful Guindy Escorts
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
              Meet some of our most beautiful girls who love working in Guindy. They're all real, verified, and ready to show you a great time in Chennai's most vibrant business district!
              </p>
            </motion.div>
            
                        {/* Combined Portfolio Gallery */}
                        <div className="mb-8">
              <RandomImageGallery 
                count={20} 
                imageHeight="h-64"
                showRefreshButton={true}
                className="mb-8"
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-pink-600" />
                <span className="text-sm font-medium text-pink-700">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Why Guindy Girls Are Special
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Here's what makes our Guindy experience different from the rest
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
                        </div>
          </div>
        </section>

        {/* Detailed Content Sections */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            
            {/* Section 1: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent leading-tight">
                    Why Guindy is Perfect for Escorts
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Guindy is where Chennai's most happening business action is! It's got everything - amazing corporate offices, cool tech parks, and a vibe that's just perfect for business fun. Our girls love working here because there's always something exciting happening in the business world.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you're here for business meetings or just want to explore the area, our Guindy girls know all the best places. They can take you to the coolest corporate events, show you around the tech parks, or just hang out and have a great time in this vibrant business neighborhood.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-border p-1">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        src="/images/escort-bg.webp"
                        alt="Professional Guindy Escort Services"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Section 2: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="order-1">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-500 bg-clip-border p-1">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        src="/images/background.jpg"
                        alt="Book Guindy Escorts Chennai"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
              </div>
              
              <div className="order-2">
                <div className="relative">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent leading-tight">
                    What Makes Our Guindy Girls Special
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our Guindy girls aren't just pretty faces - they're smart, fun, and know how to make any business situation comfortable. They've got that perfect mix of being professional when needed and totally relaxed when you want to just have a great time.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you want to hit the corporate events, try some amazing business networking, or just chill in your hotel room or office, they're up for anything. They know Guindy inside out and will make sure you have the best time possible.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* New Content Section 1 */}
            <section className="py-20 px-4 bg-white relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-20 w-40 h-40 bg-gradient-to-br from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"></div>
              </div>
              
              <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                  className="grid lg:grid-cols-2 gap-16 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Left Content */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Guindy Escorts Know All The Business Spots
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
                            Local Guindy Escort Girls Show You Corporate Life
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            You know what's amazing about our Guindy escorts? They're not just beautiful - they're like having a local friend who knows all the business hotspots! These girls have been around Guindy for years and know where to find the best corporate events, the most happening tech parks, and all those little spots that only business insiders know about. It's like getting VIP access to the real Guindy!
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                            Guindy Call Girls Know The Perfect Business Timing
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Guindy has its own business rhythm, and our call girls know it perfectly! Want to avoid the rush at the tech parks? They'll tell you exactly when to go. Looking for the best time to visit the corporate offices? They know when it's quiet and perfect for a business meeting. It's like having a personal Guindy expert who's always got your back!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Content */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent leading-tight">
                        Why Our Guindy Escort Service Is Different
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                            Guindy Escort Girls Who Actually Love This Place
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Here's what makes our Guindy escort girls special - they genuinely love this area! Most of them work here or have been living here for years, so they know all the amazing stories about every tech park and corporate building. When you're with them, you can feel their excitement about showing you around. It's like hanging out with a friend who's super proud of their bustling business district!
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-2 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
                            Independent Guindy Escorts Make Real Connections
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Our independent Guindy escorts are different because they actually remember you! They'll ask about your work, remember your favorite business spots, and suggest places based on what you like. It's not just about the money - these girls genuinely want you to have an amazing time. That's why people keep coming back to our Guindy escort service!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Section 3: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center mb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent leading-tight">
                    Guindy Girls Know How to Have Fun
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Guindy is famous for being the most happening business area of Chennai, and our girls are just as amazing! They know all the best corporate events, the coolest tech parks, and the most fun places to hang out. It's like having your own personal guide to the best of Chennai's business scene.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These girls are perfect for any occasion - whether you need someone for a business meeting, want to explore the area, or just want to relax and have a good time. They're confident, charming, and know how to fit right into Guindy's vibrant business vibe.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-border p-1">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        src="/images/header.jpg"
                        alt="Excellence Guindy Escort Girls"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-18 h-18 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* New Content Section 2 */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
              {/* Background Decorative Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-36 h-36 bg-gradient-to-br from-green-100/50 to-teal-100/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-44 h-44 bg-gradient-to-br from-orange-100/50 to-yellow-100/50 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-full blur-2xl"></div>
              </div>
              
              <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                  className="grid lg:grid-cols-2 gap-16 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Left Content */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                        Guindy Escorts Show You The Best Business Lifestyle
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                            Guindy Call Girls Are Corporate Event Experts
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            You know what's awesome about our Guindy call girls? They're corporate event pros! These girls know exactly which tech parks have the best networking events, when the big business conferences happen, and how to navigate the corporate world like a pro. They'll help you make the right connections while having an amazing time. It's like having a personal business buddy who knows all the tricks!
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full"></div>
                            Guindy Escort Girls Know All The Best Business Spots
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            The business scene in Guindy is absolutely amazing, and our escort girls are total corporate insiders! They know where to find the most happening tech companies, which offices have the best views, and where you can get authentic South Indian food that'll make your taste buds dance. They'll take you on a business adventure you'll be talking about for months!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Right Content */}
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                        Guindy Escort Service Creates Amazing Business Memories
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                            Guindy Escort Girls Help You Make Unforgettable Business Stories
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Every time you hang out with our Guindy escort girls, you're making memories that'll stick with you forever! Whether it's finally finding that perfect business connection after networking all day, discovering a cool tech company, or just laughing over some amazing food, these moments turn into stories you'll be telling your colleagues for years to come.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                            <div className="w-3 h-3 bg-gradient-to-b from-red-500 to-pink-500 rounded-full"></div>
                            Guindy Call Girls Are More Than Just Business Companions
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            Our Guindy call girls don't just tag along - they become part of your whole business experience! They get excited when you find something cool, they celebrate your great deals, and they really care about making sure you have the best time ever. It's the difference between exploring alone and having a real friend who knows all the awesome business places and people!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Section 4: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="order-1">
                <motion.div 
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-border p-1">
                    <div className="relative h-full w-full rounded-2xl overflow-hidden">
                      <Image
                        src="/images/vip-girl1.png"
                        alt="Independent Guindy Escorts"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-22 h-22 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl"
                    animate={{ scale: [1.3, 1, 1.3], opacity: [0.7, 0.3, 0.7] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>
                </motion.div>
              </div>
              
              <div className="order-2">
                <div className="relative">
                  <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                    Meet Our Independent Guindy Girls
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our independent Guindy girls work for themselves, which means they really care about making you happy. They're not just doing a job - they genuinely want to give you an amazing experience and build a real connection.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you want to meet once or become a regular, these girls are super flexible and will work around your schedule. They're all about making things easy and fun for you, while keeping everything completely private and discreet.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Content Section 3 */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-16 right-16 w-40 h-40 bg-gradient-to-br from-purple-100/60 to-pink-100/60 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-indigo-100/60 to-purple-100/60 rounded-full blur-2xl"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-pink-100/60 to-rose-100/60 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                    Guindy Escorts Make Every Business Visit An Adventure
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        Guindy Escort Girls Know All The Latest Business Happenings
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Guindy is always buzzing with something new in the business world, and our escort girls are always in the know! They know about the newest tech companies opening up, the coolest corporate events happening, and all the latest business spots that are trending. Whether it's a startup launch, a new office building, or just some amazing business networking event, they'll make sure you don't miss any of the fun stuff!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-4 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
                        Guindy Call Girls Match Your Business Energy Perfectly
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Feeling super energetic for networking? Let's go explore all the tech parks and meet new people! Want to just chill and relax after a long day? We'll find a cozy café and hang out. Our Guindy call girls are really good at reading your mood and matching your energy. They'll make sure your day goes exactly how you want it - whether that's action-packed business meetings or totally laid back!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                    Guindy Escort Service Builds Real Business Friendships
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-4 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        Guindy Escort Girls Remember All The Business Details
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Here's what makes our Guindy escort girls so special - they actually listen and remember stuff about your work! They'll remember your favorite business spots, which companies you loved, and all the stories you shared with them. When you come back to visit, they'll ask about your projects, remember what you like, and make you feel like you're catching up with an old business friend!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                        Independent Guindy Escorts Give You Real Business Care
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our independent Guindy escorts aren't just working for a paycheck - they genuinely want you to have an amazing business experience! They'll go the extra mile to make sure you're comfortable, happy, and having tons of fun. It's that personal attention and real care that makes the difference between just okay and absolutely unforgettable!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

         {/* Testimonials Section */}
         <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-teal-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-white tracking-wide">CLIENT TESTIMONIALS</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-200 via-white to-purple-200 bg-clip-text text-transparent">
                What Our Guindy Clients Say
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real experiences from satisfied clients who chose our Guindy escorts. Discover why thousands trust Lillybabe for their premium escort needs in Chennai's industrial and business district.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Arjun K.",
                  location: "Guindy",
                  rating: 5,
                  text: "Amazing experience with the Guindy escorts. They were professional, sophisticated, and perfectly suited for the business environment. Perfect companions for corporate events and business dinners!",
                  service: "Corporate Event",
                  date: "2 days ago"
                },
                {
                  name: "Priya S.",
                  location: "Guindy",
                  rating: 5,
                  text: "The escorts in Guindy are absolutely stunning and know how to blend into the professional business environment. Perfect companions for business meetings and corporate dinners.",
                  service: "Business Meeting",
                  date: "1 week ago"
                },
                {
                  name: "Rajesh M.",
                  location: "Guindy",
                  rating: 5,
                  text: "Best escort service in Guindy. The girls are verified, professional, and understand the business standards of the industrial district. Will definitely book again!",
                  service: "Professional Service",
                  date: "3 days ago"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Gradient Border */}
                  <div className="relative p-1 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Service Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-3 py-1 border border-pink-400/30">
                          <span className="text-xs font-medium text-pink-200">{testimonial.service}</span>
                        </div>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current drop-shadow-lg" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-gray-200 mb-8 leading-relaxed text-lg relative">
                        <div className="absolute -top-2 -left-2 text-6xl text-pink-400/20 font-serif">"</div>
                        <p className="relative z-10 italic">
                          {testimonial.text}
                        </p>
                        <div className="absolute -bottom-4 -right-2 text-6xl text-purple-400/20 font-serif">"</div>
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                          <div className="flex items-center gap-2 text-gray-300 text-sm">
                            <MapPin className="w-3 h-3" />
                            <span>{testimonial.location}</span>
                          </div>
                          <div className="text-gray-400 text-xs mt-1">{testimonial.date}</div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-sm"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="inline-flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">950+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">4.9/5</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* New Content Section 4 */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-12 left-12 w-48 h-48 bg-gradient-to-br from-emerald-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
            <div className="absolute bottom-12 right-12 w-36 h-36 bg-gradient-to-br from-amber-100/40 to-orange-100/40 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-violet-100/40 to-purple-100/40 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Left Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                    Guindy Escorts Show You The Rich Business Culture
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        Guindy Call Girls Know All The Tech Culture
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Guindy isn't just about business - it's packed with amazing tech culture and innovation! Our call girls know all the cool startup events, what different tech companies do, and all the interesting stories behind the innovation. They'll take you to places that regular visitors never get to see and share the real heart of Chennai's tech culture with you!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        Guindy Escort Girls Know The Best Business Artisans
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        The business craftsmanship in Guindy is absolutely mind-blowing! From amazing corporate presentations to traditional business networking, our escort girls know exactly where to find the most talented business professionals. They'll show you how everything works, introduce you to the actual business people, and help you appreciate all the incredible skill that goes into every single business deal!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Content */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
                    Guindy Escort Service - Your Perfect Business Partner
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        Guindy Escort Girls Are Always There For You
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Need help finding your way around the tech parks? Want to know the best time to visit somewhere? Or just want someone cool to chat with while you explore? Our Guindy escort girls are always ready to help! They're like having a local business best friend who knows everything about the area and is always excited to show you around!
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        Guindy Call Girls Make Every Business Second Count
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Our Guindy call girls totally get that your time here is super valuable, and they make sure every single moment is absolutely amazing! They'll plan your day perfectly, make sure you see everything you want to see, and create experiences that you'll remember forever. It's not just about visiting places - it's about making business memories that'll last a lifetime!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-indigo-200/30 to-cyan-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-teal-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100 via-purple-100 to-indigo-100 rounded-full px-6 py-3 mb-6 border border-pink-200/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                <MessageCircle className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-semibold text-pink-700 tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Got Questions? We Have Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about our premium Guindy escort services. Find quick answers to common questions and book with confidence.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  category: "Location & Service",
                  question: "Why choose Guindy for escort services?",
                  answer: "Guindy is Chennai's prominent industrial and business district with corporate offices, tech parks, and premium hotels. Our Guindy escorts are perfectly suited for this professional environment, providing premium service that matches the area's business standards."
                },
                {
                  category: "Verification & Safety",
                  question: "Are the Guindy escorts verified and safe?",
                  answer: "Yes, absolutely! All our Guindy escorts undergo thorough verification including genuine photo verification, background checks, and client testimonials. We ensure every profile is legitimate and trustworthy, with complete safety measures in place."
                },
                {
                  category: "Booking Process",
                  question: "How can I book an escort in Guindy?",
                  answer: "Booking is simple and discreet! You can call our number directly or use WhatsApp for instant booking. All bookings are handled with complete privacy and discretion. We offer immediate availability for verified escorts in Guindy with same-day booking options."
                },
                {
                  category: "Services Available",
                  question: "What services do Guindy escorts offer?",
                  answer: "Our Guindy escorts offer both incall and outcall services. They can accompany you to Guindy's finest corporate events, business dinners, or provide intimate companionship in your hotel room or office space. Services are tailored to your preferences and needs."
                },
                {
                  category: "Availability",
                  question: "Are Guindy escorts available 24/7?",
                  answer: "Yes, our Guindy escorts are available round the clock! Whether it's day or night, we're here for you with immediate booking options and flexible scheduling to meet your needs in Chennai's bustling business district."
                },
                {
                  category: "Pricing",
                  question: "What are the rates for Guindy escorts?",
                  answer: "Our Guindy escort rates are competitive and transparent, reflecting the premium business location and quality of service. Pricing varies based on duration, services, and specific requirements. Contact us for detailed pricing information tailored to your needs."
                },
                {
                  category: "Privacy & Discretion",
                  question: "Is my privacy protected when booking Guindy escorts?",
                  answer: "Absolutely! We take privacy and discretion very seriously, especially in Guindy's professional business environment. All your personal information and booking details are kept completely confidential. We use secure communication channels and never share your information with third parties."
                },
                {
                  category: "Quality Assurance",
                  question: "What can I expect from Guindy escort services?",
                  answer: "You can expect professional, high-quality service with beautiful, well-groomed escorts who are intelligent, charming, and skilled in the art of companionship. They understand Guindy's sophisticated business environment and provide genuine care and attention that exceeds your expectations."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Gradient Border */}
                  <div className="relative p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                    <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <button
                        className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-pink-500/50 rounded-2xl"
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        aria-expanded={openFAQ === index}
                        aria-controls={`faq-answer-${index}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <span className="text-white font-bold text-sm">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-semibold text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
                                  {faq.category}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 leading-tight">
                                {faq.question}
                              </h3>
                            </div>
                          </div>
                          
                          <motion.div
                            className="flex-shrink-0 ml-4"
                            animate={{ rotate: openFAQ === index ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              {openFAQ === index ? (
                                <Minus className="w-4 h-4 text-white" />
                              ) : (
                                <Plus className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </motion.div>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openFAQ === index && (
                          <motion.div
                            id={`faq-answer-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="ml-14">
                                <div className="w-full h-px bg-gradient-to-r from-pink-200 to-purple-200 mb-4"></div>
                                <p className="text-gray-600 leading-relaxed text-base">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Floating Elements */}
                      <motion.div 
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-sm"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Contact CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Still Have Questions About Guindy Escorts?
                </h3>
                <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                  Our friendly team is here to help! Contact us directly for personalized assistance and immediate answers to your questions about Guindy escort services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="tel:+918121426651"
                    className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </Link>
                  <Link
                    href="https://wa.me/918121426651"
                    className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}