'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Home, Coffee, BookOpen } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export function HousewifeEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Heart,
      title: 'Mature & Experienced',
      description: 'Our housewife escorts bring real-life wisdom and emotional depth to every encounter. They understand relationships, know how to make you feel comfortable, and provide genuine companionship.'
    },
    {
      icon: Shield,
      title: 'Professional & Reliable',
      description: 'Every escort and call girl in our agency is a specialist and they make sure that the people who come to our agency are fully satisfied with their experience.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Our housewife escorts are available round the clock. Whether it\'s day or night, we\'re here for you with flexible scheduling.'
    },
    {
      icon: Home,
      title: 'Real-Life Experience',
      description: 'Experience the warmth and understanding that comes from real-life experience. Our housewife escorts know how to create meaningful connections.'
    }
  ];

  const faqData = [
    {
      question: "Are the housewife escorts in Chennai verified?",
      answer: "Yes, all our housewife escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks. Our housewife escorts are mature, experienced women who understand discretion and professionalism."
    },
    {
      question: "What makes housewife escorts different from other escorts?",
      answer: "Housewife escorts bring maturity, experience, and real-life wisdom to every encounter. They understand relationships, know how to make you feel comfortable, and provide genuine companionship with emotional depth. They're not just beautiful - they're experienced in life and love."
    },
    {
      question: "How can I book a housewife escort in Chennai?",
      answer: "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified housewife escorts in Chennai with same-day booking options. We offer both incall and outcall services for your convenience."
    },
    {
      question: "Do housewife escorts offer both incall and outcall services?",
      answer: "Yes, our housewife escorts in Chennai are available for both incall and outcall services. You can choose what works best for you and your location. Whether you prefer to meet at our place or have them come to you, we can arrange it with complete discretion."
    },
    {
      question: "What can I expect from a housewife escort experience?",
      answer: "Expect genuine warmth, understanding, and real companionship. Our housewife escorts are experienced in making men feel comfortable and valued. They bring emotional intelligence, conversation skills, and the kind of attention that comes from real-life experience in relationships."
    },
    {
      question: "Are housewife escorts available 24/7?",
      answer: "Yes, our housewife escorts are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing. Many of our housewife escorts have flexible schedules that allow them to be available when you need them most."
    },
    {
      question: "Is my privacy protected when booking housewife escorts?",
      answer: "Absolutely. We understand that discretion is crucial, especially for our mature clients. We respect your privacy completely and will not share your information with any third party. Your personal details and booking information are kept strictly confidential."
    },
    {
      question: "Can I meet housewife escorts for social events?",
      answer: "Yes, our housewife escorts are perfect companions for social events, dinners, and gatherings. They're well-mannered, articulate, and can represent you beautifully in any social setting. Their maturity and experience make them ideal for sophisticated social occasions."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      location: "T. Nagar, Chennai",
      service: "Housewife Escort",
      rating: 5,
      date: "2 days ago",
      text: "Amazing experience with the housewife escorts. They were mature, understanding, and made me feel truly comfortable. The emotional connection and genuine warmth was exactly what I was looking for!"
    },
    {
      id: 2,
      name: "Vikram S.",
      location: "Anna Nagar, Chennai",
      service: "Mature Companion",
      rating: 5,
      date: "1 week ago",
      text: "The housewife escort I met was incredible. She understood what I needed and provided the kind of companionship that comes from real life experience. Highly recommended!"
    },
    {
      id: 3,
      name: "Arun M.",
      location: "OMR, Chennai",
      service: "Experienced Escort",
      rating: 5,
      date: "3 days ago",
      text: "Perfect service! The housewife escort was sophisticated, intelligent, and knew how to make me feel special. The conversation was as good as the company."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
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
              <span className="text-pink-600 font-medium">Housewife Escorts Chennai</span>
            </div>
          </div>
        </nav>

        {/* Creative Portfolio Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 text-white overflow-hidden">
          {/* Creative Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
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
                    <span className="block bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                      Housewife
                    </span>
                    <span className="block text-white">
                      Escorts
                    </span>
                    <span className="block text-3xl lg:text-5xl text-pink-200">
                      in Chennai
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-xl text-pink-100 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Book <strong><Link href="/housewife-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">housewife escorts in Chennai</Link></strong> with <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>. Meet mature, experienced, and passionate women who bring real-life wisdom and genuine warmth to your evening!
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link
                    href="tel:+918121426651"
                    className="group relative inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Phone className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </Link>
                  <Link
                    href="https://wa.me/918121426651"
                    className="group relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">WhatsApp</span>
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
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife.avif"
                    alt="Beautiful Housewife Escorts in Chennai"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Mature & Experienced</h3>
                    <p className="text-pink-200">Real-life wisdom and genuine warmth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Our <span className="text-pink-600">Housewife Escorts</span> Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our collection of beautiful, mature, and experienced housewife escorts in Chennai. Each one brings her own unique charm and life experience.
              </p>
            </motion.div>
            {/* Combined Portfolio Gallery */}
            <div className="mb-8">
              <RandomImageGallery 
                count={12} 
                imageHeight="h-64 md:h-80" 
                showRefreshButton={true}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-pink-700">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Why Choose Our <span className="text-pink-600">Housewife Escorts</span>?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the difference that maturity, experience, and real-life wisdom can make. Our housewife escorts bring genuine warmth and understanding to every encounter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content Sections */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section 1: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    The <span className="text-pink-600">Housewife Experience</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      You know, there's something special about spending time with a housewife escort. These are women who've lived life, who understand relationships, and who know what it means to make a man feel truly valued and appreciated.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our housewife escorts in Chennai aren't just beautiful - they're experienced in life and love. They bring emotional intelligence, conversation skills, and the kind of attention that comes from real-life experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-1.png"
                    alt="Housewife Escorts Experience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-2.png"
                    alt="Mature and Experienced Companions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Mature & Experienced</span> Companions
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you're looking for someone to talk to, someone to share a meal with, or someone to provide intimate companionship, our housewife escorts understand what you need.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      They're mature, sophisticated, and passionate about providing you with an experience that goes beyond the ordinary. They know how to make you feel comfortable, understood, and genuinely cared for.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Emotional Intelligence</span> & Understanding
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our housewife escorts understand emotions, relationships, and what makes a man feel truly appreciated. They know how to read situations and respond with genuine care and understanding.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These are women who can hold intelligent conversations, share interesting stories, and make you feel intellectually stimulated. They're well-read, experienced, and genuinely interesting to talk to.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-3.png"
                    alt="Emotional Intelligence and Understanding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife.webp"
                    alt="Real-Life Experience and Wisdom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Real-Life Experience</span> & Wisdom
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our housewife escorts bring real-life wisdom and experience to every encounter. They understand what it means to be in a relationship, to care for someone, and to make them feel special.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Experience the warmth and understanding that comes from real-life experience. Our housewife escorts know how to create meaningful connections that last beyond just the moment.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location-Specific Content Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="text-pink-600">Housewife Escorts</span> are Available Across Chennai
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our housewife escorts are available across all major locations in Chennai including <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, and <strong>Adyar</strong>.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'T. Nagar', description: 'Central location with easy access' },
                { name: 'Anna Nagar', description: 'Upscale area with premium services' },
                { name: 'OMR', description: 'IT corridor with modern amenities' },
                { name: 'ECR', description: 'Beach road with scenic views' },
                { name: 'Nungambakkam', description: 'Commercial hub with convenience' },
                { name: 'Adyar', description: 'Residential area with privacy' }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                      <p className="text-gray-600 text-sm">{location.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                What Our <span className="text-pink-300">Clients Say</span>
              </h2>
              <p className="text-pink-100 max-w-3xl mx-auto text-lg">
                Real feedback from clients who booked our <strong><Link href="/housewife-escorts-in-chennai" className="text-pink-300 hover:text-pink-200 transition-colors">housewife escorts in Chennai</Link></strong>. See why people choose <strong><Link href="/" className="text-pink-300 hover:text-pink-200 transition-colors">Lillybabe</Link></strong> for their escort needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:bg-white/15"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-pink-200">{testimonial.service}</span>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-200 mb-8 leading-relaxed text-lg relative">
                      <div className="absolute -top-2 -left-2 text-6xl text-pink-400/20 font-serif">"</div>
                      <p className="relative z-10 italic">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-6xl text-rose-400/20 font-serif">"</div>
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">
                          {testimonial.name}
                          <span className="text-pink-200 text-sm ml-2">{testimonial.location}</span>
                        </div>
                        <div className="text-gray-400 text-xs mt-1">{testimonial.date}</div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">500+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-400">4.9/5</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Frequently Asked <span className="text-pink-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our housewife escort services in Chennai.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <button
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300 relative z-10"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-pink-600 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-pink-500 transition-colors duration-300 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 pb-6">
                          <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
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
    </>
  );
}