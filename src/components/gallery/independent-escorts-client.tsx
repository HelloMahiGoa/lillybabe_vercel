'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Globe, Coffee, BookOpen, Briefcase, UserCheck } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';

export function IndependentEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Briefcase,
      title: 'Professional Business Approach',
      description: 'Look, here\'s the thing about <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> - they\'re running their own business, and they take it seriously. These women understand professionalism, punctuality, and customer service. They know that their reputation is everything, so they go above and beyond to make sure you\'re completely satisfied. No drama, no complications - just a smooth, professional experience.'
    },
    {
      icon: Shield,
      title: 'Complete Discretion & Privacy',
      description: 'When you\'re dealing with <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>, you\'re dealing with someone who understands the importance of privacy. These women are experienced professionals who know how to be discreet. They understand that you might be a business owner, a professional, or just someone who values their privacy. Your information stays between you and them - no exceptions.'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling & Availability',
      description: 'One of the biggest advantages of <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> is their flexibility. They\'re not bound by agency schedules or rules. If you need someone at 2 AM for a business trip, they can make it work. If you need someone for a weekend getaway, they\'re available. They understand that your time is valuable, and they work around your schedule, not the other way around.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Service & Experience',
      description: 'Here\'s what really sets <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> apart - they provide a personalized experience. They take the time to understand what you want, what you need, and how to make your time together perfect. They\'re not just going through the motions - they genuinely care about providing you with an experience that you\'ll remember and want to repeat.'
    }
  ];

  const faqData = [
    {
      question: "What makes independent escorts different from agency escorts?",
      answer: "Independent escorts in Chennai are self-employed professionals who run their own business. They're more experienced, have better communication skills, and offer a more personalized service. They understand the business side of things and know how to provide exactly what you need without any middleman complications. They're also more flexible with scheduling and pricing."
    },
    {
      question: "Are independent escorts in Chennai more reliable?",
      answer: "Absolutely. Independent escorts are running their own business, so their reputation is everything to them. They're more professional, punctual, and committed to providing excellent service. They understand that one bad experience can hurt their business, so they go the extra mile to ensure you're completely satisfied. They also have more control over their schedule and availability."
    },
    {
      question: "How do I book an independent escort in Chennai?",
      answer: "Booking is straightforward - just call us or send a message. We'll discuss your requirements, timing, and preferences. Independent escorts are usually more flexible with scheduling and can often accommodate last-minute requests. Everything is handled with complete discretion and professionalism. They understand that your time is valuable and will work around your schedule."
    },
    {
      question: "What kind of services do independent escorts provide?",
      answer: "Independent escorts in Chennai provide companionship services for social events, business dinners, travel, and private time. They're perfect for when you need someone professional and sophisticated on your arm. They understand boundaries and will be exactly what you need for your specific situation. They're also great for ongoing arrangements if you find someone you really connect with."
    },
    {
      question: "Do independent escorts offer better rates?",
      answer: "Independent escorts often provide better value for money because they don't have agency fees to cover. They can offer competitive rates while still maintaining high service standards. Plus, they're more flexible with pricing and can work within your budget to provide the best possible experience. They understand that building long-term relationships is more valuable than short-term profits."
    },
    {
      question: "Are independent escorts available 24/7?",
      answer: "Yes, most independent escorts in Chennai are available around the clock. They understand that business professionals and busy individuals need flexible scheduling. Whether it's early morning meetings, late-night company, or weekend companionship, they're there when you need them. They're also more likely to accommodate last-minute requests and special occasions."
    },
    {
      question: "How do you protect my privacy with independent escorts?",
      answer: "Your privacy is everything to us. We know you might be a business owner, professional, or just someone who values discretion. We never share your information with anyone, and our independent escorts are trained to be completely discreet. What happens stays between you and them. They understand the importance of confidentiality and will never compromise your privacy."
    },
    {
      question: "What should I expect from an independent escort?",
      answer: "Expect someone who actually knows how to run a business and provide excellent customer service. These women understand what you need - whether that's someone to talk to, someone to go out with, or someone to spend intimate time with. They're not just going through the motions - they genuinely want to make your time together enjoyable and memorable."
    },
    {
      question: "Do independent escorts offer both incall and outcall services?",
      answer: "Yes, independent escorts in Chennai are flexible and can provide both incall and outcall services. They understand that sometimes you want the comfort of your own space, and sometimes you want to get out of the house. They can meet you at your place, a hotel, or come to theirs - whatever works best for your situation and comfort level."
    },
    {
      question: "Are independent escorts more experienced?",
      answer: "Generally, yes. Independent escorts in Chennai are usually more experienced because they've been in the business longer and have learned what works and what doesn't. They understand the nuances of providing excellent service and know how to handle different situations professionally. They're also more likely to have developed their own style and approach that sets them apart."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul M.",
      location: "Anna Nagar, Chennai",
      service: "Independent Escort",
      rating: 5,
      date: "2 days ago",
      text: "The independent escort I met was incredibly professional and experienced. She understood exactly what I needed for my business dinner and made the whole evening perfect. Her communication was excellent, and she was punctual and discreet. Highly recommended."
    },
    {
      id: 2,
      name: "Suresh K.",
      location: "OMR, Chennai",
      service: "Independent Escort",
      rating: 5,
      date: "1 week ago",
      text: "I've been using independent escorts for a while now, and this one was exceptional. She was flexible with timing, professional in her approach, and really understood how to provide personalized service. The experience was exactly what I was looking for."
    },
    {
      id: 3,
      name: "Vikram R.",
      location: "T. Nagar, Chennai",
      service: "Independent Escort",
      rating: 5,
      date: "2 weeks ago",
      text: "What I love about independent escorts is their business approach. This woman was professional, reliable, and really knew how to make me feel comfortable. She understood boundaries and provided exactly the kind of companionship I needed. Will definitely book again."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <CriticalCSS />
      <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/independent2.avif"
            alt="Professional Independent Escorts in Chennai"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="text-pink-300">Professional Independent</span><br />
              <span className="text-white">Escorts in Chennai</span>
            </h1>
            
            <motion.p
              className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Looking for <strong><Link href="/independent-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">independent escorts in Chennai</Link></strong>? You've come to the right place. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we connect you with experienced, professional, and discreet independent escorts who understand the business and know how to provide exactly what you need.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="tel:+918121426651"
                className="group bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now: +91 81214 26651
              </Link>
              <Link
                href="https://wa.me/918121426651"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Link>
            </motion.div>
          </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Meet Our <span className="text-pink-600">Professional Independent Escorts</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a look at some of our experienced <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>. These women are the real deal - professional, experienced, and they know how to run their own business. Each one has her own unique style and approach to providing excellent service.
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
              <Briefcase className="h-4 w-4 text-pink-600" />
              <span className="text-pink-800 font-semibold text-sm">Why Choose Independent Escorts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Professional</span> Meets <span className="text-pink-600">Personal</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Look, here's the thing about <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> - they're running their own business, and they take it seriously. These women understand professionalism, punctuality, and customer service. They know that their reputation is everything, so they go above and beyond to make sure you're completely satisfied.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }}>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Makes <span className="text-pink-600">Independent Escorts in Chennai</span> Special
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              You know what? There's a big difference between spending time with a regular escort and an <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort in Chennai</Link></strong>. These women bring something different to the table - business experience, personal touch, and that professional approach that you just can't find anywhere else.
            </p>
          </motion.div>

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
                  <span className="text-pink-600">Business Mindset</span> That Gets Results
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Let's be honest - when you're dealing with <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>, you're dealing with someone who understands business. These women aren't just pretty faces - they're entrepreneurs who know how to run their own operation. They understand customer service, they know how to communicate professionally, and they know that their reputation is everything.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts treat every client like a valuable customer because that's exactly what you are. They understand that happy clients become repeat clients, and repeat clients are the foundation of a successful business. When you book an <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort</Link></strong>, you're getting someone who's invested in making sure you have an amazing experience.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they're not just going through the motions. They genuinely care about providing excellent service because their business depends on it. They've learned what works and what doesn't, and they've refined their approach to give you exactly what you need. It's like the difference between a chain restaurant and a family-owned place - the personal touch makes all the difference.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/independent1.avif"
                  alt="Professional Business Approach"
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
                  src="/images/independent2.avif"
                  alt="Experienced and Discreet"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Experience</span> and <span className="text-pink-600">Discretion</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here's what really sets <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> apart - they're experienced professionals who know how to handle any situation. They've been in the business long enough to understand what clients really want, and they've developed the skills to provide it. They know how to read a room, they know how to adapt to different personalities, and they know how to make you feel comfortable.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts understand discretion better than anyone because their business depends on it. They know that your privacy is paramount, and they've learned how to be completely discreet in any situation. Whether it's a business dinner, a social event, or private time, they know how to handle themselves professionally and keep everything confidential.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And let's talk about experience - these women have learned what works and what doesn't. They know how to communicate effectively, they understand boundaries, and they know how to provide exactly the kind of companionship you're looking for. They're not learning on the job - they're professionals who know their craft inside and out.
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
                  <span className="text-pink-600">Flexibility</span> That Works for You
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    One of the biggest advantages of <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> is their flexibility. They're not bound by agency schedules or rules. If you need someone at 2 AM for a business trip, they can make it work. If you need someone for a weekend getaway, they're available. They understand that your time is valuable, and they work around your schedule, not the other way around.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts can also be more flexible with services and arrangements. They understand that every client is different, and they're willing to work with you to create the perfect experience. Whether you need someone for a specific event, ongoing companionship, or just occasional company, they can adapt to your needs and preferences.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they're also more flexible with pricing and arrangements. They understand that building long-term relationships is more valuable than short-term profits, so they're often willing to work within your budget to provide the best possible experience. They're businesswomen who understand the value of customer satisfaction and repeat business.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/independent3.avif"
                  alt="Flexible and Adaptable"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Left Image > Right Content */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/independent4.avif"
                  alt="Personalized Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Personalized</span> Service That Matters
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here's what really makes <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> special - they provide personalized service. They take the time to understand what you want, what you need, and how to make your time together perfect. They're not just going through the motions - they genuinely care about providing you with an experience that you'll remember and want to repeat.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts understand that every client is unique, and they tailor their approach accordingly. They remember your preferences, they understand your personality, and they know how to make you feel comfortable and special. They're not just providing a service - they're creating a connection that makes the whole experience more meaningful.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they're also more likely to develop ongoing relationships with clients. They understand that building trust and rapport takes time, and they're willing to invest in that process. When you find an <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort</Link></strong> you really connect with, you can develop a long-term arrangement that works for both of you.
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
              We Cover <span className="text-pink-600">All of Chennai</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              No matter where you are in Chennai, we've got you covered. Our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> are available in <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, <strong>Adyar</strong>, <strong>Velachery</strong>, <strong>Guindy</strong>, and pretty much anywhere else you might be. Whether you're in the city center or out in the IT corridor, we can get someone to you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'T. Nagar', description: 'Right in the heart of Chennai - easy to get to from anywhere' },
              { name: 'Anna Nagar', description: 'Upscale area with great restaurants and hotels' },
              { name: 'OMR', description: 'IT corridor - perfect for busy professionals' },
              { name: 'ECR', description: 'Beach road with nice hotels and privacy' },
              { name: 'Nungambakkam', description: 'Commercial area with lots of options' },
              { name: 'Adyar', description: 'Quiet residential area with maximum discretion' },
              { name: 'Velachery', description: 'IT hub - we know the area well' },
              { name: 'Guindy', description: 'Business district with corporate-friendly locations' }
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
                <p className="text-gray-600">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What <span className="text-pink-600">Real Guys</span> Are Saying
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what actual clients have to say about their experiences with our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>. These are real reviews from real guys who've been there.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Questions You <span className="text-pink-600">Might Have</span>
            </h2>
            <p className="text-gray-600">
              Look, we know you probably have some questions. Here are the things guys usually ask us about our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>. We've got straight answers for you.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Meet a <span className="text-pink-200">Professional Independent Escort</span>?
            </h2>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
              Look, the best <strong><Link href="/independent-escorts-in-chennai" className="text-pink-200 hover:text-white transition-colors">independent escorts in Chennai</Link></strong> are just a phone call away. Don't waste time thinking about it - these women are professional, experienced, and they're waiting to meet you. Give us a call and let's make it happen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="tel:+918121426651"
                className="group bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now: +91 81214 26651
              </Link>
              <Link
                href="https://wa.me/918121426651"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Link>
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