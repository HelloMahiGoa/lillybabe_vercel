'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Globe, Coffee, BookOpen, Briefcase, UserCheck, Flower2, Home, Mountain } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';

export function MalluEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const portfolioImages = [
    '/images/mallu1.avif',
    '/images/mallu2.avif',
    '/images/mallu3.avif',
    '/images/mallu4.avif',
    '/images/mallu1.avif',
    '/images/mallu2.avif',
    '/images/mallu3.avif',
    '/images/mallu4.avif',
    '/images/mallu1.avif',
    '/images/mallu2.avif',
    '/images/mallu3.avif'
  ];

  const features = [
    {
      icon: Mountain,
      title: 'Authentic Kerala Beauty',
      description: 'Look, there\'s something special about <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> - they bring that authentic Kerala beauty that you just can\'t find anywhere else. These women have that natural grace, those beautiful features, and that traditional South Indian charm that makes them absolutely irresistible. When you\'re with a Mallu escort, you\'re experiencing real Kerala beauty at its finest.'
    },
    {
      icon: Home,
      title: 'South Indian Cultural Understanding',
      description: 'Here\'s what really sets <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> apart - they understand South Indian culture, traditions, and way of life. They know the local customs, they understand family values, and they can make you feel completely at home in Chennai. Whether you\'re a local or visiting from out of town, they\'ll help you experience the city like a true South Indian.'
    },
    {
      icon: Heart,
      title: 'Traditional Elegance with Modern Charm',
      description: 'Our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> bring the best of both worlds - they have traditional Kerala values and respect for culture, but they also understand modern life and what you need. They know how to be respectful, caring, and genuine while still being fun and exciting. It\'s that perfect balance that makes spending time with them so special.'
    },
    {
      icon: Users,
      title: 'Fluent in Malayalam & English',
      description: 'Communication is everything, and our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> are fluent in both Malayalam and English. Whether you want to chat in Malayalam, English, or mix both languages, they\'ll make sure you feel comfortable and understood. They can switch between languages naturally, making the conversation flow perfectly.'
    }
  ];

  const faqData = [
    {
      question: "What makes Mallu escorts in Chennai special?",
      answer: "Mallu escorts in Chennai bring authentic Kerala beauty, South Indian charm, and traditional elegance. They understand South Indian culture, speak Malayalam fluently, and can provide companionship that feels natural and comfortable. They know the local culture, understand traditions, and can make you feel at home in Chennai. It's like having a local friend who knows all the best places and understands your needs."
    },
    {
      question: "Do Mallu escorts speak Malayalam and English?",
      answer: "Yes, all our Mallu escorts in Chennai are fluent in both Malayalam and English. They can communicate comfortably in either language, making it easy for you to express yourself and feel understood. Whether you prefer Malayalam or English, they'll make sure the conversation flows naturally. They can even help you learn some Malayalam phrases if you're interested."
    },
    {
      question: "Are Mallu escorts familiar with South Indian culture?",
      answer: "Absolutely. Our Mallu escorts in Chennai are from Kerala and understand South Indian culture, traditions, and way of life. They know the best places to visit, understand local customs, and can help you experience Chennai like a local. They bring that authentic Kerala cultural touch to every meeting, making your time together more meaningful and enjoyable."
    },
    {
      question: "How do I book a Mallu escort in Chennai?",
      answer: "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect Mallu escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential. You can also specify if you have any particular preferences or requirements."
    },
    {
      question: "What kind of services do Mallu escorts provide?",
      answer: "Our Mallu escorts in Chennai provide companionship services for social events, business dinners, travel, and private time. They're perfect for when you need someone who understands South Indian culture and can make you feel comfortable. They understand boundaries and will be exactly what you need for your specific situation. They're also great for showing you around the city if you're new to Chennai."
    },
    {
      question: "Do Mallu escorts offer both incall and outcall services?",
      answer: "Yes, our Mallu escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience. They're also familiar with the city, so they can suggest good locations if you need recommendations."
    },
    {
      question: "Are Mallu escorts available 24/7?",
      answer: "Yes, most Mallu escorts in Chennai are available around the clock. They understand that your schedule might be busy, and they're flexible with timing. Whether it's early morning meetings, late-night company, or weekend companionship, they're there when you need them. They're also more likely to accommodate last-minute requests since they're local and familiar with the area."
    },
    {
      question: "What should I expect from a Mallu escort?",
      answer: "Expect someone who actually understands your culture and background. These women know how to be respectful, caring, and genuine. They understand Kerala traditions and values, and they can provide companionship that feels natural and comfortable. They're not just going through the motions - they genuinely want to make your time together enjoyable and meaningful."
    },
    {
      question: "Do Mallu escorts understand local customs and traditions?",
      answer: "Yes, absolutely. Our Mallu escorts in Chennai are well-versed in South Indian customs, traditions, and cultural practices. They understand Kerala festivals, family values, and social norms. This cultural understanding makes them perfect companions for any occasion, whether it's a family event, business meeting, or casual outing. They know how to behave appropriately in different situations."
    },
    {
      question: "Are Mallu escorts more affordable than other escorts?",
      answer: "Mallu escorts in Chennai often provide excellent value for money. They understand the local market and can offer competitive rates while maintaining high service standards. Plus, they're more flexible with pricing and can work within your budget to provide the best possible experience. They understand that building long-term relationships is more valuable than short-term profits."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      location: "Anna Nagar, Chennai",
      service: "Mallu Escort",
      rating: 5,
      date: "3 days ago",
      text: "The Mallu escort I met was absolutely wonderful. She understood my culture, spoke Malayalam beautifully, and made me feel completely at home. Her knowledge of South Indian traditions and Chennai was impressive. It was like spending time with a local friend who really understood me."
    },
    {
      id: 2,
      name: "Suresh M.",
      location: "OMR, Chennai",
      service: "Mallu Escort",
      rating: 5,
      date: "1 week ago",
      text: "I've been with other escorts before, but this Mallu escort was different. She had that authentic Kerala charm and understanding that made the whole experience special. She knew all the best places in Chennai and could switch between Malayalam and English effortlessly. Highly recommended."
    },
    {
      id: 3,
      name: "Vikram R.",
      location: "T. Nagar, Chennai",
      service: "Mallu Escort",
      rating: 5,
      date: "2 weeks ago",
      text: "What I loved about this Mallu escort was her cultural understanding and traditional values. She was respectful, caring, and genuinely interested in making me comfortable. She understood my background and made me feel like I was spending time with someone who truly got me. Will definitely book again."
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
            <span className="text-pink-600 font-medium">Mallu Escorts Chennai</span>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/mallu-escorts.avif"
            alt="Beautiful Mallu Escorts in Chennai"
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
              <span className="text-pink-300">Beautiful Mallu</span><br />
              <span className="text-white">Escorts in Chennai</span>
            </h1>
            
            <motion.p
              className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Looking for <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Mallu escorts in Chennai</Link></strong>? You've come to the right place. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we connect you with beautiful, authentic Kerala women who understand South Indian culture and bring that traditional charm to every meeting.
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

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Beautiful <span className="text-pink-600">Mallu Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our stunning <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> - each one bringing authentic Kerala beauty, South Indian charm, and traditional elegance to every meeting. These women understand your culture and know how to make you feel completely at home.
            </p>
          </motion.div>
          
          <RandomImageGallery />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="text-pink-600">Mallu Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> bring something special that you won't find with other escorts - authentic Kerala beauty, cultural understanding, and traditional values that make every meeting meaningful and comfortable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-pink-600 rounded-full mb-6 mx-auto">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section 1 */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Authentic Kerala Beauty That <span className="text-pink-600">Captivates</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                There's something magical about <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> - they bring that authentic Kerala beauty that you just can't find anywhere else. These women have that natural grace, those beautiful features, and that traditional South Indian charm that makes them absolutely irresistible.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When you're with a Mallu escort, you're experiencing real Kerala beauty at its finest. They understand traditional values, they know how to carry themselves with dignity, and they bring that special something that only Kerala women have. It's not just about looks - it's about that inner beauty and cultural understanding that makes every moment special.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women are proud of their heritage, they understand their culture, and they know how to make you feel completely at home. Whether you're from Kerala yourself or just appreciate authentic beauty, you'll find that spending time with a Mallu escort is an experience you'll never forget.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/mallu1.avif"
                  alt="Authentic Kerala Beauty - Mallu Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/mallu2.avif"
                  alt="South Indian Cultural Understanding - Mallu Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Cultural Understanding That <span className="text-pink-600">Connects</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Here's what really sets <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> apart - they understand South Indian culture, traditions, and way of life. They know the local customs, they understand family values, and they can make you feel completely at home in Chennai.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you're a local or visiting from out of town, they'll help you experience the city like a true South Indian. They know the best places to visit, they understand the local food culture, and they can introduce you to authentic South Indian experiences that you won't find in tourist guides.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women understand the importance of family, they respect traditional values, and they know how to behave appropriately in different social situations. They can be your guide to South Indian culture while providing the companionship you're looking for.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 3 */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Local Knowledge That <span className="text-pink-600">Enhances</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> aren't just beautiful - they're also incredibly knowledgeable about the city. They know all the best places to visit, the most authentic restaurants, and the hidden gems that only locals know about.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Whether you want to explore Chennai's rich history, discover amazing food spots, or find the perfect places for a romantic evening, they'll be your perfect guide. They understand the local culture, they know how to navigate the city, and they can make your time in Chennai truly memorable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women are like having a local friend who knows all the best spots and can show you the real Chennai. They understand what makes the city special, and they'll help you experience it in the most authentic way possible.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/mallu3.avif"
                  alt="Local Knowledge and Chennai Expertise - Mallu Escorts"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 4 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/mallu4.avif"
                  alt="Traditional Values with Modern Approach - Mallu Escorts"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Traditional Values with <span className="text-pink-600">Modern Approach</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> bring the best of both worlds - they have traditional Kerala values and respect for culture, but they also understand modern life and what you need. They know how to be respectful, caring, and genuine while still being fun and exciting.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                It's that perfect balance that makes spending time with them so special. They understand traditional family values, they respect cultural norms, but they also know how to adapt to modern situations and make you feel completely comfortable. They're not stuck in the past - they're modern women who appreciate their heritage.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women know how to be sophisticated and worldly while maintaining that traditional charm that makes them so appealing. They can handle any social situation with grace and confidence, making them perfect companions for any occasion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location-Specific Content Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Mallu Escorts</span> Available Across Chennai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our beautiful <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong> are available in all major areas of the city. Whether you're in the heart of the city or the outskirts, we can connect you with authentic Kerala beauty wherever you are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "T. Nagar", description: "In the heart of Chennai's shopping district, our Mallu escorts understand the local culture and can show you the best of this vibrant area." },
              { area: "Anna Nagar", description: "In this upscale residential area, our Mallu escorts provide discreet and professional service with authentic Kerala charm." },
              { area: "OMR", description: "Along the IT corridor, our Mallu escorts are perfect for business professionals who appreciate cultural understanding and local knowledge." },
              { area: "ECR", description: "Near the beautiful beaches, our Mallu escorts can be your perfect companions for romantic evenings and coastal adventures." },
              { area: "Nungambakkam", description: "In this commercial hub, our Mallu escorts understand the business environment and can provide sophisticated companionship." },
              { area: "Adyar", description: "In this cultural center, our Mallu escorts appreciate the arts and can provide intellectually stimulating companionship." }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {location.area}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Our Clients Say About <span className="text-pink-600">Mallu Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied clients who have experienced the authentic beauty and cultural understanding of our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-pink-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">500+</div>
                <div className="text-sm text-pink-100">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">4.9/5</div>
                <div className="text-sm text-purple-100">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-300">24/7</div>
                <div className="text-sm text-indigo-100">Support</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">100%</div>
                <div className="text-sm text-pink-100">Discrete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions About <span className="text-pink-600">Mallu Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions about our <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Mallu escorts in Chennai</Link></strong>? We've got answers. Here are the most common questions we receive from our clients.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-pink-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-pink-600 transition-transform duration-200 ${
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
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Meet Our Beautiful <span className="text-pink-300">Mallu Escorts</span>?
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed max-w-3xl mx-auto mb-12">
              Don't wait - our authentic <strong><Link href="/mallu-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Mallu escorts in Chennai</Link></strong> are ready to provide you with an unforgettable experience. Book now and discover the beauty, culture, and charm that only Kerala women can offer.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="tel:+918121426651"
                className="group bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
    </>
  );
}