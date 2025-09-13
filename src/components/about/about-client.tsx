'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Phone, Star, Heart, Shield, Clock, Users, Sparkles, Award, MessageCircle, CheckCircle, Crown, Globe, Zap, Mail, ArrowRight } from 'lucide-react';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

export function AboutClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Performance optimization: Preload critical images
  useEffect(() => {
    const preloadImages = [
      '/images/about-hero1.avif',
      '/images/about-story.avif'
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = '+918121426651';
    const message = 'Hi, I would like to know more about your escort services. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Lillybabe Chennai Escorts",
    "description": "Premium escort service in Chennai since 2010, providing exceptional companionship with beautiful, professional escorts.",
    "url": "https://lillybabe.com",
    "logo": "https://lillybabe.com/images/logo.png",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8121426651",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil", "Hindi"]
    },
    "sameAs": [
      "https://lillybabe.com"
    ],
    "serviceArea": {
      "@type": "City",
      "name": "Chennai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Escort Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Independent Escorts",
            "description": "Free-spirited, confident, and professional escorts"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Russian Escorts",
            "description": "Exotic beauty and charm from Russia"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Model Escorts",
            "description": "Fashion and fitness models with stunning looks"
          }
        }
      ]
    }
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {isMobile ? <MobileHeader /> : <Header />}

      {/* Breadcrumb Navigation - Desktop Only */}
      {!isMobile && (
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
                <span className="text-pink-600 font-medium" itemProp="name">About Us</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <main>
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden" aria-labelledby="hero-heading">
        {/* Creative Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-20">
            {/* Left Content */}
            <motion.div 
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
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
                <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    About
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    Lillybabe
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-2 sm:mt-4">
                    Chennai Escorts
                  </span>
                </h1>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                You know what? We started this journey back in 2010 with one simple idea - what if we could create something real, something genuine in Chennai? Fast forward to today, and we're not just another escort service. We're your friends who happen to be amazing companions!
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button
                  onClick={openWhatsApp}
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Contact Us</span>
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce relative z-10" />
                </button>
                
                <Link
                  href="#our-story"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 text-white/80 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg hover:bg-white/10"
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
            </motion.div>
            
            {/* Right Visual - Hero Image */}
            <motion.div 
              className="relative order-1 lg:order-2"
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
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-hero1.avif"
                    alt="About Lillybabe Chennai Escorts - Premium escort service in Chennai since 2010, featuring beautiful professional escorts"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
                {/* Overlay with stats */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">13+</div>
                      <div className="text-xs text-gray-300">Years</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">500+</div>
                      <div className="text-xs text-gray-300">Escorts</div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-300">Service</div>
                    </div>
                  </div>
                </div>
              </motion.div>
                
            </motion.div>
          </div>
        </div>
        
        </section>
      </main>

{/* Our Story Section */}
<section id="our-story" className="py-12 sm:py-16 lg:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center gap-2 bg-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          <span className="text-white font-bold text-sm sm:text-lg">OUR STORY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
          <span className="text-pink-500">Excellence</span> in Every <span className="text-purple-500">Encounter</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
          Look, I'll be honest with you - when we started Lillybabe in 2010, we had no idea it would become what it is today. We just wanted to do things differently, you know? No fake promises, no hidden charges, just real people providing real companionship.
        </p>
      </motion.div>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">How We Got Here</h3>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">It All Started in 2010</h4>
              <p className="text-gray-600 text-sm sm:text-base">Honestly, we were just tired of all the fake promises and bad experiences out there. So we decided to build something real - a place where people could find genuine companionship without all the drama.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Award className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Quality Over Everything</h4>
              <p className="text-gray-600 text-sm sm:text-base">We don't just pick any girl - we actually get to know them. Every single one of our escorts is someone we'd trust with our own friends. That's how we know they'll treat you right.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Shield className="h-3 w-3 sm:h-5 sm:w-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Your Privacy Matters</h4>
              <p className="text-gray-600 text-sm sm:text-base">Look, we get it - this is personal stuff. That's why we've never had a single privacy breach in all these years. Your business stays your business, period.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/about-story.avif"
            alt="Lillybabe Story - Premium Escort Service in Chennai since 2010, trusted by thousands of satisfied clients"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
            <h4 className="text-white text-lg sm:text-xl font-bold mb-1 sm:mb-2">Chennai's #1 Choice</h4>
            <p className="text-gray-200 text-sm sm:text-base">Trusted by thousands of satisfied clients</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

{/* Values Section */}
<section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Our <span className="text-pink-500">Core Values</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                You know what? These aren't just fancy words we put on a website. These are the real values that got us where we are today - and they're what keep our clients coming back year after year.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Shield,
                title: "Discretion",
                description: "Look, we get it - this is personal stuff. Your business stays your business, and we've never had a single privacy issue in all these years.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "We don't just pick any girl - we actually get to know them. Every single one is someone we'd trust with our own friends.",
                color: "from-yellow-500 to-yellow-600"
              },
              {
                icon: Heart,
                title: "Satisfaction",
                description: "Here's the thing - you only pay when you're completely happy. No advance payments, no hidden charges, just honest service.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: Clock,
                title: "Reliability",
                description: "Whether it's 2 AM or 2 PM, we're just a call away. Life doesn't follow a schedule, and neither do we!",
                color: "from-green-500 to-green-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">OUR TEAM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Meet the <span className="text-purple-500">People</span> Behind <span className="text-pink-500">Lillybabe</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                You know what makes us different? It's the people behind Lillybabe. We're not some big corporate machine - we're real people who actually care about making your experience amazing.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Lilly",
                role: "Founder & CEO",
                description: "You know what? Lilly started this whole thing because she was tired of seeing people get ripped off by fake agencies. She wanted to build something real, something people could actually trust. And that's exactly what she did.",
                image: "/images/about-team-1.avif"
              },
              {
                name: "Management Team",
                role: "Operations & Quality",
                description: "These are the people who make sure everything runs smoothly. They're the ones who actually talk to our girls, check on our clients, and make sure everyone's happy. They're like the backbone of everything we do.",
                image: "/images/about-team-2.avif"
              },
              {
                name: "Support Staff",
                role: "24/7 Customer Care",
                description: "These guys are amazing! They're the ones who answer your calls at 3 AM, help you find the perfect girl, and make sure everything goes smoothly. They genuinely care about making your experience great.",
                image: "/images/about-team-3.avif"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-4 sm:mb-6">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Lillybabe Chennai Escorts`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Crown className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">OUR SERVICES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
                Premium <span className="text-pink-400">Escort Services</span> in <span className="text-purple-400">Chennai</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Look, we get it - everyone's different, and everyone has their own preferences. That's why we've got such a variety of amazing girls. Whether you want someone local, someone exotic, or someone with a specific look - we've got you covered.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Independent Escorts",
                description: "These girls are amazing! They're confident, smart, and they know exactly what they want. They're not just beautiful - they're actually fun to be around and great conversationalists.",
                icon: Heart,
                color: "from-pink-500 to-rose-500"
              },
              {
                title: "Russian Escorts",
                description: "You want something exotic? Our Russian girls are absolutely stunning and bring that international flair to Chennai. They're elegant, sophisticated, and totally unforgettable.",
                icon: Globe,
                color: "from-blue-500 to-indigo-500"
              },
              {
                title: "Model Escorts",
                description: "These are the girls you see in magazines! Fashion models, fitness models - they're all gorgeous and know how to carry themselves. Perfect for when you want to make an impression.",
                icon: Star,
                color: "from-yellow-500 to-orange-500"
              },
              {
                title: "Celebrity Escorts",
                description: "Want the VIP treatment? Our celebrity escorts are the cream of the crop. These are high-profile girls who know how to make you feel like a king.",
                icon: Crown,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Housewife Escorts",
                description: "Sometimes you want someone with a bit more experience, you know? These mature, caring women bring warmth and genuine affection to every meeting.",
                icon: Users,
                color: "from-green-500 to-teal-500"
              },
              {
                title: "Tamil Escorts",
                description: "Local beauties who understand Chennai's culture and vibe. They're authentic, down-to-earth, and they know how to make you feel at home in the city.",
                icon: Sparkles,
                color: "from-red-500 to-pink-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <Link 
                  href={`/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-3 sm:mt-4 text-xs sm:text-sm font-medium transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">CLIENT TESTIMONIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                What Our <span className="text-green-500">Happy Clients</span> Say
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Don't just take our word for it - here's what some of our amazing clients have to say about their experiences with us. These are real people with real stories!
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Rahul L.",
                location: "Chennai",
                rating: 5,
                content: "Wow! The booking process was so easy and the Chennai Escort Girl was exactly as described - even more beautiful in person! The whole experience was amazing and I can't wait to book again. Highly recommended!",
                icon: Users,
                color: "from-pink-400 to-purple-500"
              },
              {
                name: "Surya S.",
                location: "Bangalore",
                rating: 5,
                content: "I was visiting Chennai for business and decided to try the Chennai Escorts Service. The girl was so professional and made such a great impression! She was smart, beautiful, and really made my trip special!",
                icon: Heart,
                color: "from-blue-400 to-indigo-500"
              },
              {
                name: "Arjun K.",
                location: "Mumbai",
                rating: 5,
                content: "I've tried many escort services, but the Chennai Escorts from LillyBabe are in a league of their own! The girl was not just beautiful but also incredibly caring and professional. Best experience ever!",
                icon: Star,
                color: "from-green-400 to-teal-500"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center mr-3 sm:mr-4 animate-pulse`}>
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <testimonial.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm">{testimonial.location}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic text-sm sm:text-base">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">SERVICE LOCATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Serving All <span className="text-indigo-500">Major Areas</span> of <span className="text-purple-500">Chennai</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                You know what's great about Chennai? It's got so many amazing areas, and we're everywhere! Whether you're in the heart of the city or out by the beach, we've got you covered.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Anna Nagar", description: "This is where the fancy people live! Great hotels, amazing restaurants, and our girls love this area." },
              { name: "T. Nagar", description: "The shopping capital of Chennai! Busy, vibrant, and perfect for a fun night out." },
              { name: "OMR", description: "All the IT companies are here, so lots of business travelers. We know this area really well!" },
              { name: "ECR", description: "Beach vibes and resorts! Perfect for a romantic getaway or just chilling by the sea." },
              { name: "Nungambakkam", description: "Right in the center of everything! Great hotels, nightlife, and super convenient." },
              { name: "Adyar", description: "Nice residential area with parks and cultural spots. Our girls love the peaceful vibe here." },
              { name: "Mahabalipuram", description: "Historic and beautiful! Great for a day trip with some amazing company." },
              { name: "Chennai Central", description: "The heart of the city! Train station, hotels, and everything you need right here." }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                  <Link 
                    href={`/escort-girls-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-pink-600 transition-colors"
                  >
                    {location.name}
                  </Link>
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">BOOKING PROCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
                How to <span className="text-green-400">Book</span> Your <span className="text-pink-400">Perfect Escort</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Look, we've made this super simple for you. No complicated forms, no waiting around - just 4 easy steps and you're all set!
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Say Hello!",
                description: "Just drop us a WhatsApp message or give us a call. We're here 24/7, so don't worry about the time - we're always ready to help!",
                icon: Phone,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Pick Your Perfect Girl",
                description: "Take a look at our beautiful girls and choose the one who catches your eye! All our photos are real, so what you see is what you get.",
                icon: Heart,
                color: "from-pink-500 to-pink-600"
              },
              {
                step: "03",
                title: "Tell Us the Details",
                description: "Just let us know where and when you want to meet. We'll take care of everything else - it's that simple!",
                icon: CheckCircle,
                color: "from-green-500 to-green-600"
              },
              {
                step: "04",
                title: "Have Fun & Pay Later",
                description: "Meet your amazing girl and have the time of your life! You only pay when you're completely happy - that's our promise to you.",
                icon: Star,
                color: "from-yellow-500 to-yellow-600"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8">
                  <div className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm`}>
                    {process.step}
                  </div>
                </div>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <process.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{process.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{process.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Process Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Super Quick Response</h3>
                <p className="text-gray-300 text-sm sm:text-base">We'll get back to you within 5 minutes - no waiting around!</p>
              </div>
              <div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">100% Safe & Secure</h3>
                <p className="text-gray-300 text-sm sm:text-base">Your privacy is sacred to us - we've never had a single breach</p>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Happy or Your Money Back</h3>
                <p className="text-gray-300 text-sm sm:text-base">You only pay when you're completely satisfied - that's our promise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Statistics Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">OUR ACHIEVEMENTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
                Numbers That <span className="text-yellow-300">Speak</span> for <span className="text-pink-300">Themselves</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                These aren't just numbers - they represent real experiences, real people, and real trust that we've built over the years.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                number: "13+",
                label: "Years of Excellence",
                description: "Trusted by Chennai since 2010",
                icon: Award,
                color: "from-yellow-400 to-orange-500"
              },
              {
                number: "500+",
                label: "Beautiful Escorts",
                description: "Carefully selected and verified",
                icon: Heart,
                color: "from-pink-400 to-rose-500"
              },
              {
                number: "24/7",
                label: "Always Available",
                description: "Round the clock service",
                icon: Clock,
                color: "from-green-400 to-teal-500"
              },
              {
                number: "5.0",
                label: "Client Rating",
                description: "Consistently excellent reviews",
                icon: Star,
                color: "from-blue-400 to-indigo-500"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <stat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.number}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-200 text-xs sm:text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-indigo-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Got <span className="text-indigo-500">Questions</span>? We've Got <span className="text-purple-500">Answers</span>!
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Here are the most common questions we get from our clients. If you don't see your question here, just ask us directly!
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                question: "Are your Chennai Escort Girls real and verified?",
                answer: "Absolutely! All our Chennai Escort Girls go through a thorough verification process. We personally meet and verify every single girl to ensure they're genuine, professional, and meet our high standards. No fake profiles, no fake photos - just real, beautiful women."
              },
              {
                question: "How do you ensure my privacy and safety?",
                answer: "Your privacy is sacred to us! We've never had a single privacy breach in all these years. All our communications are encrypted, your personal information stays confidential, and we have strict protocols in place to protect both you and our escorts."
              },
              {
                question: "Can I see photos before booking?",
                answer: "Of course! All our photos are 100% real and recent. You can browse through our gallery to see exactly what each girl looks like. What you see is what you get - no surprises, no disappointments."
              },
              {
                question: "Do you offer overnight or travel companionship?",
                answer: "Yes! Our Chennai Escorts offer overnight services and can accompany you on business trips or vacations. Just let us know your requirements and we'll arrange everything perfectly for you."
              },
              {
                question: "What if I'm not satisfied with the service?",
                answer: "Here's the thing - you only pay when you're completely happy! We believe in our service so much that we guarantee your satisfaction. If you're not happy, you don't pay. It's that simple."
              },
              {
                question: "How quickly can I book an escort?",
                answer: "Super quick! We respond within 5 minutes of your inquiry, and most bookings can be arranged within 30 minutes to 1 hour. We're available 24/7, so whenever you need us, we're here!"
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-start gap-2 sm:gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs sm:text-sm font-bold">?</span>
                  </div>
                  <span className="text-sm sm:text-base">{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed pl-7 sm:pl-9 text-sm sm:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">SATISFACTION GUARANTEE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
                Your <span className="text-yellow-300">Happiness</span> is Our <span className="text-green-300">Promise</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                We're so confident in our service that we guarantee your complete satisfaction. Here's our promise to you:
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "Pay Only When Happy",
                description: "You don't pay until you're completely satisfied with your experience. No advance payments, no hidden charges.",
                icon: CheckCircle,
                color: "from-green-400 to-emerald-500"
              },
              {
                title: "100% Real Photos",
                description: "What you see is what you get. All our photos are genuine and recent - no fake profiles or misleading images.",
                icon: Star,
                color: "from-yellow-400 to-orange-500"
              },
              {
                title: "24/7 Support",
                description: "We're here whenever you need us. Any issues, questions, or concerns - just reach out and we'll help immediately.",
                icon: Clock,
                color: "from-blue-400 to-indigo-500"
              }
            ].map((guarantee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${guarantee.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6`}>
                  <guarantee.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{guarantee.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm sm:text-base">{guarantee.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Experience the Difference?</h3>
            <p className="text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of satisfied clients who trust Lillybabe for their escort needs in Chennai. 
              Your perfect companion is just a message away!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Now - WhatsApp</span>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce" />
              </button>
              <Link
                href="/gallery"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg hover:bg-white/10"
              >
                <span>View Our Gallery</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white font-bold text-sm sm:text-lg">CONTACT US</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
                Get in <span className="text-pink-500">Touch</span> with <span className="text-purple-500">Lillybabe</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to have an amazing time? Just pick your favorite way to reach us - we're here and ready to help you find the perfect girl!
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                title: "WhatsApp",
                description: "This is the easiest way! Just send us a message and we'll get back to you super quick.",
                contact: "+91 8121426651",
                icon: MessageCircle,
                color: "from-green-500 to-green-600",
                action: "Chat Now",
                href: "https://wa.me/918121426651"
              },
              {
                title: "Phone Call",
                description: "Want to talk to a real person? Give us a call and we'll help you find exactly what you're looking for.",
                contact: "+91 8121426651",
                icon: Phone,
                color: "from-blue-500 to-blue-600",
                action: "Call Now",
                href: "tel:+918121426651"
              },
              {
                title: "Email",
                description: "Got specific requirements? Drop us an email and we'll make sure everything is perfect for you.",
                contact: "info@lillybabe.com",
                icon: Mail,
                color: "from-purple-500 to-purple-600",
                action: "Email Us",
                href: "mailto:info@lillybabe.com"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <contact.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{contact.description}</p>
                <p className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">{contact.contact}</p>
                <a
                  href={contact.href}
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${contact.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base`}
                >
                  <span>{contact.action}</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Contact Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-pink-200"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Lillybabe?</h3>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
                Look, we're not perfect, but we're real. And that's what makes us different from all the other services out there. 
                Here's what you can count on:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Shield, text: "Your Privacy is Sacred" },
                { icon: Clock, text: "We're Here When You Need Us" },
                { icon: Star, text: "Real Girls, Real Photos" },
                { icon: Heart, text: "We Actually Care About You" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <FloatingButtons />
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}
      
      <Footer />
      
      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
      </div>
    </>
  );
}