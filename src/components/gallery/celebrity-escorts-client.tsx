'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus } from 'lucide-react';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { MobileNavigation } from '@/components/mobile/mobile-navigation';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export function CelebrityEscortsClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const features = [
    {
      icon: Crown,
      title: 'Celebrity Lookalikes',
      description: 'Our celebrity escorts are stunning lookalikes of famous personalities. They bring the glamour and sophistication of celebrities to your experience.'
    },
    {
      icon: Shield,
      title: 'Professional & Reliable',
      description: 'Every escort and call girl in our agency is a specialist and they make sure that the people who come to our agency are fully satisfied.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Our celebrity escorts are available round the clock. Whether it\'s day or night, we\'re here for you.'
    },
    {
      icon: Award,
      title: 'VIP Companions',
      description: 'Experience the VIP treatment with our beautiful celebrity escorts who can be your perfect companions for any special occasion.'
    }
  ];

  const faqData = [
    {
      question: "Are the celebrity escorts in Chennai verified?",
      answer: "Yes, all our celebrity escorts in Chennai are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper background checks and celebrity verification."
    },
    {
      question: "What types of celebrity escorts are available?",
      answer: "We offer Bollywood actresses, TV serial actresses, web series performers, and celebrity lookalikes. Each category brings unique charm and sophistication to provide you with an authentic celebrity experience."
    },
    {
      question: "How can I book a celebrity escort in Chennai?",
      answer: "You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified celebrity escorts in Chennai with same-day booking options."
    },
    {
      question: "Do celebrity escorts offer both incall and outcall services?",
      answer: "Yes, our celebrity escorts in Chennai are available for both incall and outcall services. You can choose the service that suits your preference and location, with complete flexibility and convenience."
    },
    {
      question: "Are celebrity escorts available 24/7?",
      answer: "Yes, our celebrity escorts are available round the clock. Whether it's day or night, we're here for you with immediate booking options and flexible scheduling to meet your needs."
    },
    {
      question: "What makes celebrity escorts different from regular escorts?",
      answer: "Celebrity escorts bring the glamour, sophistication, and star quality of famous personalities. They are trained to provide VIP treatment and can be perfect companions for high-profile events and special occasions."
    },
    {
      question: "Is my privacy protected when booking celebrity escorts?",
      answer: "Absolutely. We respect the privacy of our guests and will not share your information with any third party. We understand that discretion is crucial when dealing with celebrity services."
    },
    {
      question: "Can I meet celebrity escorts for business events?",
      answer: "Yes, our celebrity escorts are perfect companions for business meetings, corporate events, and social gatherings. They are well-educated, articulate, and can represent you professionally in any setting."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

    return (
    <>
      
      <div className="min-h-screen bg-gray-50">
        {isMobile ? <MobileHeader /> : <Header />}

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
              <span className="text-pink-600 font-medium">Celebrity Escorts Chennai</span>
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
                    Celebrity
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
                Book <strong><Link href="/celebrity-escorts" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">celebrity escorts in Chennai</Link></strong> with <strong><Link href="/" className="text-pink-400 font-semibold hover:text-pink-300 transition-colors">Lillybabe</Link></strong>. Meet beautiful <strong>Bollywood actresses</strong>, <strong>TV stars</strong>, and <strong>web series performers</strong> who bring real star quality to your evening!
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
                <div className="relative h-96 lg:h-[32rem] rounded-2xl overflow-hidden">
                <Image
                    src="/images/celebrity.avif"
                    alt="Beautiful Celebrity Escorts in Chennai - Bollywood Actresses and TV Stars Available 24/7"
                  fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
              Beautiful <strong>Celebrity Escorts in Chennai</strong>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet beautiful <strong>Bollywood actresses</strong>, <strong>TV serial stars</strong>, and <strong>web series performers</strong> in Chennai. Book <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts</Link></strong> with <strong><Link href="/" className="text-pink-600 hover:text-pink-700 transition-colors">Lillybabe</Link></strong> for a memorable experience!
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
              Why Choose Our <strong>Celebrity Escorts in Chennai</strong>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Why choose our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escort services in Chennai</Link></strong>
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Crown,
                title: 'Celebrity Lookalikes',
                description: (
                  <>
                    Our <strong>celebrity escorts</strong> are stunning lookalikes of famous <strong>Bollywood actresses</strong>, <strong>TV stars</strong>, and <strong>web series performers</strong>. They bring the glamour and sophistication of celebrities to your experience.
                  </>
                )
              },
              {
                icon: Shield,
                title: 'Professional & Reliable',
                description: (
                  <>
                    Every <strong><Link href="/escort-girls-chennai" className="text-pink-600 hover:text-pink-700 transition-colors">escort and call girl</Link></strong> in our agency is a specialist and they make sure that the people who come to our agency are fully satisfied with complete discretion and privacy.
                  </>
                )
              },
              {
                icon: Clock,
                title: '24/7 Availability',
                description: (
                  <>
                    Our <strong>celebrity escorts in Chennai</strong> are available round the clock. Whether it's day or night, we're here for you with immediate booking options and flexible scheduling.
                  </>
                )
              },
              {
                icon: Users,
                title: 'Special Occasion Companions',
                description: (
                  <>
                    Our beautiful <strong>celebrity escorts</strong> make perfect companions for special occasions, business meetings, or social events. They know how to make you feel special and comfortable in any setting.
                  </>
                )
              }
            ].map((feature, index) => (
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
                  Introducing Our Celebrity Escorts in Chennai
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    What about the rich cultural legacy and the fast pace of life in Chennai? One might expect that it will have plenty of interesting and unique features. What if we told you that the city is also home to some of the classiest and most demanded celebrity escorts?
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Lilly Babe is the home of Chennai celebrity escorts, specifically offering you the chance to meet brilliant call girls in the city. We have included all your favorite hot glamour models from all fields including Bollywood actresses, TV serial stars and web series performers.
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
                <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity1.avif"
                      alt="Celebrity Escorts in Chennai"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-cyan-500 to-teal-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity2.avif"
                      alt="Why Choose Celebrity Escorts in Chennai - Professional Bollywood Actresses and TV Stars"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                  Why Celebrity Escorts Chennai?
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Choosing <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts in Chennai</Link></strong> means getting a companion who brings real star quality to your evening. These are people you see on screen, and now you can spend time with them personally. <strong>Chennai's</strong> mix of tradition and modern lifestyle makes it the perfect place for these special encounters.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong>Chennai</strong> is and always has been quite traditional, but at the same time, has embraced the modern world, which means that it is the right setting for your meeting with beautiful <strong><Link href="/escort-girls-chennai" className="text-pink-600 hover:text-pink-700 transition-colors">Chennai escorts</Link></strong>.
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
                  The Types of Celebrity Escorts Available
                </h3>
                
                <div className="space-y-6">
              <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800">Bollywood Actresses</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      The beauty of Bollywood actresses is a type of charm and style. They are not only beauties, but rather the stars of the screen who are fashion and cultural representatives. At Lilly babe, we only have the most beautiful and graceful Indian actresses who dazzle and entice in so many ways.
                    </p>
              </div>
              <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800">TV Serial Actresses</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      TV serials are quite special for Indian families and people are very much addicted to watching these serials. A number of Chennai celebrity escorts belong to this category; the familiarity that they provide makes them charming.
                    </p>
              </div>
              <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800">Web Series Actresses</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      With the progress of web series, the scope of storytelling has opened new talent and fresh ideas. Meet friendly personalities who are not only fine performers but also intelligent personalities of today's world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[28rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity5.avif"
                      alt="Types of Celebrity Escorts in Chennai - Bollywood Actresses, TV Stars, Web Series Performers"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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

          {/* Section 4: Right Image > Left Content - Why do Celebrities Decide to Escort? */}
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="order-2 lg:order-1">
              <div className="relative">
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-text text-transparent leading-tight">
                  Why do Celebrities Decide to Escort?
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Financial Independence and Mobility</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      As to why would celebrities risk everything they have in order to work as escorts when they could continue enjoying their modeling careers or even working in movies and web series, the answers can be as numerous as the celebrities in question. Many find that engaging in the service provision of escorts Chennai enables them to acquire capital status thereby enabling them flexibility in attaining career independence.
                    </p>
              </div>
                  
              <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Pursuing New Experiences</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      To many celebrities in the escort profession, this is not just a business venture where they aimed at making big profits. Others use the site to interact with other different people and engage in new activities they would not normally do. This profession gives an opportunity to meet people from different layers of society, to broaden own visions, and enrich people's experiences.
                    </p>
              </div>
                  
              <div>
                    <h4 className="text-xl font-semibold mb-3 text-gray-800">Empowerment and Independence</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      It also provides a kind of empowering experience while working as an escort. A lot of the women indicated that they feel empowered in how they tell their stories or make decisions regarding the subject matter. They simply employ or do not employ whichever people they prefer, and they can set parameters as far as what they consider acceptable.
                    </p>
              </div>
              </div>
              </div>
              </div>
            
            <div className="order-1 lg:order-2">
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-[28rem] lg:h-[36rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-teal-500 via-emerald-500 to-green-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity6.avif"
                      alt="Why Celebrities Choose Escorting in Chennai - Professional Celebrity Escort Services"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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

          {/* Section 5: Left Image > Right Content - Experience Celebrity Escorts With LillyBabe */}
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
                <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity4.avif"
                      alt="Experience Celebrity Escorts with LillyBabe in Chennai - Premium Bollywood Actresses and TV Stars"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
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
                  Experience Celebrity Escorts With LillyBabe
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    At LillyBabe, we love the idea of being able to provide you with the best experiences that align with your likes and wants. Not only are our Chennai escorts easy on the eyes, but they are also great talkers, exciting listeners, and sweet company ready to give you the adventure of your lifetime.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Whether you are planning a night on the town, a business meeting or some quality time at home, with our escorts you are in the right place.
                  </p>
                </div>
              </div>
          </div>
              </motion.div>

          {/* Section 6: Right Image > Left Content - Discretion and Privacy */}
              <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="order-2 lg:order-1">
              <div className="relative">
                <h3 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight">
                  Discretion and Privacy
                </h3>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We respect the privacy of our guests and will not share your information with any third party. We know that some of the celebrities need their identity kept secret while seeking the services of an escort.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here at LillyBabe, we guarantee that all our clients are safe and private so that you can have fun with no worries. Your confidentiality is our top priority, and we maintain the highest standards of discretion in all our services.
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
                <div className="relative h-96 lg:h-[32rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-border p-1">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/celebrity2.avif"
                      alt="Discretion and Privacy with Celebrity Escorts in Chennai - Complete Confidentiality Guaranteed"
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"
                  animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>
                </div>
              </motion.div>
          </div>
        </section>

        {/* Location-Specific Content Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Celebrity Escorts Available in All Major Areas of <strong>Chennai</strong>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts</Link></strong> are available across all major locations in Chennai including <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, and <strong>Adyar</strong>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  location: "T. Nagar",
                  description: "Premium celebrity escorts in T. Nagar for business meetings and social events. Bollywood actresses and TV stars available for incall and outcall services.",
                  services: ["Bollywood Actresses", "TV Stars", "Business Companions"]
                },
                {
                  location: "Anna Nagar", 
                  description: "Beautiful celebrity escorts in Anna Nagar offering VIP companionship. Web series performers and celebrity lookalikes available 24/7.",
                  services: ["Web Series Performers", "Celebrity Lookalikes", "VIP Companions"]
                },
                {
                  location: "OMR",
                  description: "Professional celebrity escorts in OMR for corporate events and special occasions. Verified Bollywood actresses with complete discretion.",
                  services: ["Corporate Events", "Special Occasions", "Verified Profiles"]
                },
                {
                  location: "ECR",
                  description: "Luxury celebrity escorts in ECR for beach parties and high-profile gatherings. TV serial stars and web series performers available.",
                  services: ["Beach Parties", "High-Profile Events", "Luxury Services"]
                },
                {
                  location: "Nungambakkam",
                  description: "Elite celebrity escorts in Nungambakkam for business meetings and social functions. Bollywood actresses with professional demeanor.",
                  services: ["Business Meetings", "Social Functions", "Professional Service"]
                },
                {
                  location: "Adyar",
                  description: "Exclusive celebrity escorts in Adyar for VIP events and private parties. Celebrity lookalikes and TV stars with complete privacy.",
                  services: ["VIP Events", "Private Parties", "Complete Privacy"]
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    <strong>Celebrity Escorts in {area.location}</strong>
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.services.map((service, serviceIndex) => (
                      <span
                        key={serviceIndex}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
              Real feedback from clients who booked our <strong><Link href="/celebrity-escorts" className="text-pink-400 hover:text-pink-300 transition-colors">celebrity escorts in Chennai</Link></strong>. See why people choose <strong><Link href="/" className="text-pink-400 hover:text-pink-300 transition-colors">Lillybabe</Link></strong> for their escort needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh K.",
                location: "Chennai",
                rating: 5,
                text: (
                  <>
                    Amazing experience with the <strong>celebrity escorts</strong>. They were professional, beautiful, and made my evening unforgettable. The glamour and sophistication was exactly what I was looking for!
                  </>
                ),
                service: "Celebrity Service",
                date: "2 days ago"
              },
              {
                name: "Arun S.",
                location: "T. Nagar",
                rating: 5,
                text: (
                  <>
                    The <strong>celebrity escorts</strong> brought the charm and star quality I was looking for. They made me feel special and provided a great experience. Highly recommended!
                  </>
                ),
                service: "Star Experience",
                date: "1 week ago"
              },
              {
                name: "Vikram M.",
                location: "OMR",
                rating: 5,
                text: (
                  <>
                    Best <strong>celebrity escort service in Chennai</strong>. The girls are verified, beautiful, and provide great service with complete privacy. Will definitely book again!
                  </>
                ),
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

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full px-4 py-2 mb-4">
              <MessageCircle className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-700">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about booking celebrity escorts in Chennai, Tamil Nadu
            </p>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                question: "Are the celebrity escorts in Chennai verified?",
                answer: (
                  <>
                    Yes, all our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts in Chennai</Link></strong> are verified with genuine photos, authentic reviews, and real client testimonials. We ensure every profile is legitimate and trustworthy, with proper age verification and background checks. Our celebrity escorts include <strong>Bollywood actresses</strong>, <strong>TV serial stars</strong>, and <strong>web series performers</strong>.
                  </>
                )
              },
              {
                question: "What makes celebrity escorts different from other escorts?",
                answer: (
                  <>
                    <strong>Celebrity escorts</strong> bring real star quality and charm to every meeting. They know how to make you feel special and provide a unique experience. These beautiful lookalikes of famous personalities offer something different from regular <strong><Link href="/escort-girls-chennai" className="text-pink-600 hover:text-pink-700 transition-colors">escort services</Link></strong>.
                  </>
                )
              },
              {
                question: "How can I book a celebrity escort in Chennai?",
                answer: (
                  <>
                    You can book by calling our number or using WhatsApp. All bookings are handled with complete privacy and discretion. Immediate availability for verified <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts in Chennai</Link></strong> with same-day booking options. We offer both incall and outcall services for your convenience.
                  </>
                )
              },
              {
                question: "Do celebrity escorts offer both incall and outcall services?",
                answer: (
                  <>
                    Yes, our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts in Chennai</Link></strong> are available for both incall and outcall services. You can choose what works best for you and your location. Whether you prefer to meet at our place or have them come to you, we can arrange it.
                  </>
                )
              },
              {
                question: "Are celebrity escorts available 24/7?",
                answer: (
                  <>
                    Yes, our <strong>celebrity escorts</strong> are available round the clock. Whether it's day or night, we're here for you with quick booking options and flexible timing to meet your needs. You can enjoy <strong>celebrity companionship</strong> whenever you want.
                  </>
                )
              },
              {
                question: "What types of celebrity escorts are available?",
                answer: (
                  <>
                    We offer different types of <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts</Link></strong> including <strong>Bollywood actresses</strong>, <strong>TV serial stars</strong>, and <strong>web series performers</strong>. Each brings their own charm and style to give you a real celebrity experience. All our escorts are chosen for their beauty, intelligence, and ability to provide good service.
                  </>
                )
              },
              {
                question: "Is my privacy guaranteed with celebrity escorts?",
                answer: (
                  <>
                    Absolutely! We respect the privacy of our guests and will not share your information with any third party. We know that some celebrities need their identity kept secret while seeking <strong><Link href="/escort-girls-chennai" className="text-pink-600 hover:text-pink-700 transition-colors">escort services</Link></strong>. Here at <strong><Link href="/" className="text-pink-600 hover:text-pink-700 transition-colors">LillyBabe</Link></strong>, we guarantee that all our clients are safe and private so you can have fun with no worries.
                  </>
                )
              },
              {
                question: "What should I expect from a celebrity escort experience?",
                answer: (
                  <>
                    Expect a great experience with charm, style, and special treatment. Our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts</Link></strong> are good talkers, great listeners, and sweet company ready to give you a memorable time. Whether you're planning a night out, a business meeting, or quality time at home, you're in the right place.
                  </>
                )
              },
              {
                question: "Are celebrity escorts available in all areas of Chennai?",
                answer: (
                  <>
                    Yes, our <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escorts</Link></strong> are available in all major areas of <strong>Chennai</strong> including <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, <strong>Adyar</strong>, and other locations. We provide both incall and outcall services throughout Chennai city.
                  </>
                )
              },
              {
                question: "How much does it cost to book a celebrity escort in Chennai?",
                answer: (
                  <>
                    Pricing varies depending on the type of <strong><Link href="/celebrity-escorts" className="text-pink-600 hover:text-pink-700 transition-colors">celebrity escort</Link></strong> and duration of service. Contact us directly for current rates and special packages. We offer competitive pricing for all our <strong>celebrity escort services in Chennai</strong>.
                  </>
                )
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 rounded-2xl"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <motion.div
                        animate={{ rotate: openFAQ === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {openFAQ === index ? (
                          <Minus className="w-5 h-5 text-pink-600" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-400 group-hover:text-pink-600 transition-colors duration-300" />
                        )}
                      </motion.div>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="ml-12">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
    </>
  );
}
