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

export function TeenEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/teen-escorts-in-chennai', 'Teen Escorts in Chennai | Young & Energetic Companions');
    trackEvent('page_view', 'category_page', 'teen_escorts');
  }, []);

  // Track category-specific interactions
  const handleCategoryInteraction = (action: string, element: string) => {
    trackEvent('category_interaction', action, element);
    trackEvent('engagement', 'teen_escorts_page', `${action}_${element}`);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 'teen_escorts_cta', ctaType);
  };


  const features = [
    {
      icon: Heart,
      title: 'Young & Energetic',
      description: 'Our teen escorts bring youthful energy and excitement to every encounter. They are full of life, always smiling, and love to have a great time with you.'
    },
    {
      icon: Shield,
      title: 'Professional & Reliable',
      description: 'Every escort and call girl in our agency is a specialist and they make sure that the people who come to our agency are fully satisfied.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Our teen escorts are available round the clock. Whether it\'s day or night, we\'re here for you.'
    },
    {
      icon: Users,
      title: 'Fresh & New',
      description: 'Experience the freshness and vitality of youth with our beautiful teen escorts who bring a spark to your evening.'
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
              <Link href="/gallery" className="hover:text-pink-600 transition-colors">
                Gallery
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-pink-600 font-medium">Teen Escorts Chennai</span>
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
                    Teen
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
                Elevate your social life by booking <span className="text-pink-400 font-semibold">  teen escorts in Chennai </span> with Lillybabe. Fun, flirty, and unforgettable experiences are just a click away!
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
                    alt="Verified Teen Escorts in Chennai"
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
                Our Beautiful Teen Escorts
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
              Searching for excitement in Chennai? Look no further! Book teen escorts at Lillybabe for a fun and memorable outing. Let the good times roll!
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
                Why Choose Our Teen Escorts?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our premium teen escort services in Chennai
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
                    Experience the Youthful Energy with Our Teen Escorts in Chennai
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our teen escorts in Chennai bring a fresh, vibrant energy that's unmatched. These young, beautiful girls are full of life and enthusiasm, ready to make your time with them truly memorable.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      They understand the art of companionship and know how to make you feel special and desired. With their youthful charm and natural beauty, they can turn any ordinary evening into an extraordinary experience.
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
                        alt="Teen Escorts Youthful Energy"
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
                        alt="Book Teen Escorts Chennai"
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
                    Book Teen Escorts in Chennai for Ultimate Satisfaction
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      When you book our teen escorts in Chennai, you're not just getting a companion - you're getting someone who will listen to your desires and fulfill them with passion and dedication.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These young beauties are well-trained in the art of seduction and know exactly how to please a man. They are adventurous, open-minded, and always ready to try new things to keep the excitement alive.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

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
                    Spend Quality Time with Genuine Teen Escort Girls in Chennai
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our teen escort girls in Chennai are carefully selected for their beauty, intelligence, and ability to provide exceptional service. They come from good backgrounds and are well-educated.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Making them perfect companions for both social events and intimate encounters. These young ladies know how to carry themselves with grace and elegance while still maintaining that playful, youthful spirit that makes them so appealing.
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
                        alt="Quality Time with Teen Escorts"
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
                        alt="Independent Teen Escorts Chennai"
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
                    Connect Direct with The Hot Independent Teen Escorts Chennai
                  </h3>
                  
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Here you have the freedom to choose the independent teen escorts Chennai who are relatively affordable and provide exceptional service. There are so many beautiful and professional independent teen escorts in this city working for you.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      All of them can be booked through our website, they are extremely popular among local clients because of their youthful energy and enthusiasm. Those girls used to be extremely intimate and comfortable with their clients and once you are with them; you will be back for more.
                    </p>
                  </div>
                </div>
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
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real experiences from satisfied clients who chose our teen escorts in Chennai. Discover why thousands trust Lillybabe for their premium escort needs.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh K.",
                  location: "Chennai",
                  rating: 5,
                  text: "Amazing experience with the teen escorts. They were professional, beautiful, and made my evening unforgettable. Highly recommended!",
                  service: "Premium Service",
                  date: "2 days ago"
                },
                {
                  name: "Arun S.",
                  location: "T. Nagar",
                  rating: 5,
                  text: "The youthful energy and enthusiasm of these girls is incredible. They know how to make you feel special and desired.",
                  service: "VIP Experience",
                  date: "1 week ago"
                },
                {
                  name: "Vikram M.",
                  location: "OMR",
                  rating: 5,
                  text: "Best teen escort service in Chennai. The girls are verified, beautiful, and provide exceptional service. Will definitely book again!",
                  service: "Verified Girls",
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
                  <div className="text-2xl font-bold text-pink-400">500+</div>
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
                Everything you need to know about our premium teen escort services in Chennai. Find quick answers to common questions and book with confidence.
              </p>
            </motion.div>
            
            <div className="space-y-4">
              {[
                {
                  category: "Verification & Safety",
                  question: "Are the teen escorts in Chennai verified and safe?",
                  answer: "Yes, absolutely! All our teen escorts in Chennai undergo thorough verification including genuine photo verification, age verification, and background checks. We ensure every profile is legitimate and trustworthy with authentic reviews and real client testimonials. Your safety and satisfaction are our top priorities."
                },
                {
                  category: "Services",
                  question: "What makes teen escorts different from other escorts?",
                  answer: "Teen escorts bring youthful energy, fresh perspectives, and natural enthusiasm to every encounter. They are full of life, always eager to please, and bring a unique spark that makes every moment memorable and exciting. Their natural beauty and vibrant personality create unforgettable experiences."
                },
                {
                  category: "Booking",
                  question: "How can I book a teen escort in Chennai?",
                  answer: "Booking is simple and discreet! You can call our number directly or use WhatsApp for instant booking. All bookings are handled with complete privacy and discretion. We offer immediate availability for verified teen escorts in Chennai with same-day booking options and flexible scheduling."
                },
                {
                  category: "Services",
                  question: "Do teen escorts offer both incall and outcall services?",
                  answer: "Yes, our teen escorts in Chennai are available for both incall and outcall services. You can choose the service that suits your preference and location. We provide complete flexibility and convenience with professional service delivery at your preferred location."
                },
                {
                  category: "Availability",
                  question: "Are teen escorts available 24/7?",
                  answer: "Yes, our teen escorts are available round the clock! Whether it's day or night, we're here for you with immediate booking options and flexible scheduling to meet your needs. Our 24/7 availability ensures you can book whenever you need companionship."
                },
                {
                  category: "Pricing",
                  question: "What are the rates for teen escorts in Chennai?",
                  answer: "Our teen escort rates in Chennai are competitive and transparent. Pricing varies based on duration, services, and location. We offer various packages to suit different budgets while maintaining the highest quality service. Contact us for detailed pricing information tailored to your needs."
                },
                {
                  category: "Privacy",
                  question: "Is my privacy protected when booking teen escorts?",
                  answer: "Absolutely! We take privacy and discretion very seriously. All your personal information and booking details are kept completely confidential. We use secure communication channels and never share your information with third parties. Your privacy is our commitment."
                },
                {
                  category: "Quality",
                  question: "What can I expect from teen escort services?",
                  answer: "You can expect professional, high-quality service with beautiful, well-groomed teen escorts who are intelligent, charming, and skilled in the art of companionship. They provide genuine care, attention, and create memorable experiences that exceed your expectations."
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
                  Still Have Questions?
                </h3>
                <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                  Our friendly team is here to help! Contact us directly for personalized assistance and immediate answers to your questions.
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