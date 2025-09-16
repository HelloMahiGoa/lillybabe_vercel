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
      title: 'Self-Employed Professional Escorts',
      description: 'Chennai\'s <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> are business owners who manage their own operations. These professional companions understand customer service, maintain high standards, and build lasting relationships. Unlike agency escorts, they have direct control over their schedule, rates, and service quality. Every interaction is handled with business professionalism and personal attention.'
    },
    {
      icon: Shield,
      title: 'Maximum Privacy & Discretion',
      description: 'Privacy is paramount with <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>. These discreet companions understand confidentiality requirements for business executives, professionals, and high-profile clients. Your personal information, meeting details, and preferences remain completely confidential. No third-party involvement means enhanced privacy protection and peace of mind for every encounter.'
    },
    {
      icon: Clock,
      title: '24/7 Flexible Availability',
      description: 'Independent escorts offer unmatched flexibility for busy professionals. Whether you need late-night companionship after business meetings, weekend travel companions, or last-minute arrangements, these escorts adapt to your schedule. No agency restrictions mean they can accommodate emergency bookings, extended sessions, and custom timing that fits your lifestyle.'
    },
    {
      icon: UserCheck,
      title: 'Customized Companion Services',
      description: 'Each <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort</Link></strong> provides tailored experiences based on your specific needs. These experienced companions offer personalized service for business dinners, social events, travel companionship, or private time. They remember your preferences, understand your personality, and create meaningful connections that go beyond basic escort services.'
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
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Creative Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  <span className="text-pink-600">Independent</span><br />
                  <span className="text-white">Escorts</span><br />
                  <span className="text-green-600">in Chennai</span>
                </h1>
              </motion.div>
              
              {/* Description */}
              <motion.p
                className="text-xl text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Discover Chennai's most <strong><Link href="/independent-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">professional independent escorts</Link></strong> who run their own business with complete discretion. These experienced companions offer personalized service without agency complications. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we connect you with verified independent escorts who understand what busy professionals really need.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  href="tel:+918121426651"
                  className="group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Call Now: +91 81214 26651
                </Link>
                <Link
                  href="https://wa.me/918121426651"
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  WhatsApp
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
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Hero Image */}
                <Image
                  src="/images/independent.avif"
                  alt="Professional Independent Escort"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-indigo-600/30 rounded-full blur-xl"></div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Meet Our <span className="text-pink-600">Professional Independent Escorts</span>
              </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our curated selection of <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">verified independent escorts in Chennai</Link></strong>. Each professional companion is a self-employed business owner with years of experience in providing discreet escort services. These independent call girls offer premium companionship with complete privacy and personalized attention.
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
              Chennai's <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> operate as self-employed professionals with complete control over their business operations. These experienced companions prioritize customer satisfaction, maintain professional standards, and build long-term client relationships. Their business acumen ensures reliable, high-quality escort services tailored to your specific needs.
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
              Chennai's <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> offer a unique advantage over agency-based services. These self-employed professionals combine business expertise with personalized attention, creating premium escort experiences that cater to discerning clients. Their entrepreneurial approach ensures higher service quality and greater flexibility in meeting your specific requirements.
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
                  <span className="text-pink-600">Entrepreneurial Excellence</span> in Escort Services
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chennai's <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> operate as successful entrepreneurs with deep understanding of business operations and client management. These professional companions have built their reputation through consistent service quality, reliable availability, and client satisfaction. Their business acumen translates into superior escort services.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts prioritize long-term client relationships over short-term profits. They understand that repeat business and client referrals are essential for sustainable success. When you book an <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort</Link></strong>, you're engaging with someone who has a vested interest in your complete satisfaction and future bookings.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These self-employed professionals continuously refine their service offerings based on client feedback and market demands. They invest in their professional development, maintain high standards, and adapt their approach to meet evolving client needs. This business-oriented mindset ensures you receive premium escort services that exceed expectations.
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
                  <span className="text-pink-600">Professional Expertise</span> & <span className="text-pink-600">Absolute Privacy</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chennai's <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> bring years of professional experience to every encounter. These seasoned companions have mastered the art of social interaction, business etiquette, and personal companionship. They excel at reading social cues, adapting to different environments, and creating comfortable experiences for diverse client personalities.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Privacy protection is fundamental to independent escort operations. These discreet professionals understand the importance of confidentiality for business executives, professionals, and high-profile clients. They maintain strict privacy protocols during business dinners, social events, and private meetings, ensuring your personal information and meeting details remain completely confidential.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts have refined their service delivery through extensive experience and client feedback. They understand effective communication, boundary management, and companion preferences. These professional escorts are not beginners - they are experienced specialists who deliver consistent, high-quality services tailored to your specific needs.
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
                  <span className="text-pink-600">Unmatched Flexibility</span> for Busy Professionals
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Independent escorts in Chennai</Link></strong> offer unprecedented scheduling flexibility without agency restrictions. These self-employed professionals can accommodate late-night business meetings, early morning travel, weekend getaways, and last-minute arrangements. They understand that professional schedules are unpredictable and adapt to your timing requirements.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts provide customized service packages tailored to your specific needs. Whether you require business dinner companions, travel escorts, social event partners, or ongoing arrangements, they can adapt their services to match your preferences. Their flexible approach ensures you receive exactly the type of companionship you're seeking.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These business-minded escorts understand the value of long-term client relationships and often offer competitive pricing and flexible payment arrangements. They prioritize client satisfaction over short-term profits, making them more willing to work within your budget while maintaining high service standards. Their entrepreneurial mindset focuses on building lasting business relationships.
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
                  <span className="text-pink-600">Tailored Companion Services</span> for Every Need
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Independent escorts in Chennai</Link></strong> excel at providing personalized companion services that cater to your specific requirements. These professional escorts invest time in understanding your preferences, personality, and expectations to create customized experiences that exceed your expectations. Their attention to detail ensures every encounter is memorable and satisfying.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Independent escorts recognize that each client has unique needs and preferences. They maintain detailed records of your companion preferences, social requirements, and personal interests to provide consistent, high-quality service. This personalized approach creates meaningful connections that go beyond basic escort services, resulting in genuine companionship and lasting relationships.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These self-employed professionals are committed to building long-term client relationships based on trust, respect, and mutual satisfaction. They understand that relationship development requires investment and patience. When you find an <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escort</Link></strong> who matches your personality and needs, you can establish ongoing arrangements that provide consistent, reliable companionship.
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
              Our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts</Link></strong> provide citywide coverage across all major Chennai locations. We serve T. Nagar, Anna Nagar, OMR, ECR, Nungambakkam, Adyar, Velachery, Guindy, and surrounding areas. Whether you're in the commercial district, IT corridor, or residential zones, our professional companions can reach you quickly and discreetly.
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
              Discover why clients choose our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong> through authentic testimonials from satisfied clients. These real client reviews showcase the professional service quality and personalized attention that sets our independent escorts apart from agency-based services.
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
              Find answers to common questions about our <strong><Link href="/independent-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">independent escorts in Chennai</Link></strong>. Our comprehensive FAQ section addresses client concerns about booking procedures, service quality, privacy protection, and pricing options to help you make informed decisions about independent escort services.
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
              Connect with Chennai's most <strong><Link href="/independent-escorts-in-chennai" className="text-pink-200 hover:text-white transition-colors">professional independent escorts</Link></strong> today. Our verified companions are ready to provide discreet, high-quality services tailored to your needs. Experience the difference that independent escort services can make in your life. Contact us now for immediate assistance.
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