'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Globe, Coffee, BookOpen, Briefcase, UserCheck, Flower2, Home } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';

export function TamilEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/tamil-escorts-in-chennai', 'Tamil Escorts in Chennai | Local Beauty & Cultural Companions');
    trackEvent('page_view', 'category_page', 'tamil_escorts');
  }, []);

  // Track category-specific interactions
  const handleCategoryInteraction = (action: string, element: string) => {
    trackEvent('category_interaction', action, element);
    trackEvent('engagement', 'tamil_escorts_page', `${action}_${element}`);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 'tamil_escorts_cta', ctaType);
  };

  const features = [
    {
      icon: Flower2,
      title: 'Authentic Tamil Beauty',
      description: 'Look, there\'s something special about <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> - they bring that authentic South Indian beauty that you just can\'t find anywhere else. These women have that natural grace, those beautiful features, and that traditional charm that makes them absolutely irresistible. When you\'re with a Tamil escort, you\'re experiencing real local beauty at its finest.'
    },
    {
      icon: Home,
      title: 'Cultural Understanding & Local Knowledge',
      description: 'Here\'s what really sets <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> apart - they understand the local culture, traditions, and way of life. They know the city inside and out, they understand Tamil customs, and they can make you feel completely at home in Chennai. Whether you\'re a local or visiting from out of town, they\'ll help you experience the city like a true Chennaite.'
    },
    {
      icon: Heart,
      title: 'Traditional Values with Modern Approach',
      description: 'Our <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> bring the best of both worlds - they have traditional Tamil values and respect for culture, but they also understand modern life and what you need. They know how to be respectful, caring, and genuine while still being fun and exciting. It\'s that perfect balance that makes spending time with them so special.'
    },
    {
      icon: Users,
      title: 'Fluent in Tamil & English',
      description: 'Communication is everything, and our <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> are fluent in both Tamil and English. Whether you want to chat in Tamil, English, or mix both languages, they\'ll make sure you feel comfortable and understood. They can switch between languages naturally, making the conversation flow perfectly.'
    }
  ];

  const faqData = [
    {
      question: "What makes Tamil escorts in Chennai special?",
      answer: "Tamil escorts in Chennai bring authentic local beauty, cultural understanding, and traditional values. They understand the local culture, speak Tamil fluently, and can provide companionship that feels natural and comfortable. They know the city, understand local customs, and can make you feel at home in Chennai. It's like having a local friend who knows all the best places and understands your needs."
    },
    {
      question: "Do Tamil escorts speak Tamil and English?",
      answer: "Yes, all our Tamil escorts in Chennai are fluent in both Tamil and English. They can communicate comfortably in either language, making it easy for you to express yourself and feel understood. Whether you prefer Tamil or English, they'll make sure the conversation flows naturally. They can even help you learn some Tamil phrases if you're interested."
    },
    {
      question: "Are Tamil escorts familiar with Chennai culture?",
      answer: "Absolutely. Our Tamil escorts in Chennai are locals who understand the city's culture, traditions, and way of life. They know the best places to visit, understand local customs, and can help you experience Chennai like a local. They bring that authentic Tamil cultural touch to every meeting, making your time together more meaningful and enjoyable."
    },
    {
      question: "How do I book a Tamil escort in Chennai?",
      answer: "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect Tamil escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential. You can also specify if you have any particular preferences or requirements."
    },
    {
      question: "What kind of services do Tamil escorts provide?",
      answer: "Our Tamil escorts in Chennai provide companionship services for social events, business dinners, travel, and private time. They're perfect for when you need someone who understands local culture and can make you feel comfortable. They understand boundaries and will be exactly what you need for your specific situation. They're also great for showing you around the city if you're new to Chennai."
    },
    {
      question: "Do Tamil escorts offer both incall and outcall services?",
      answer: "Yes, our Tamil escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience. They're also familiar with the city, so they can suggest good locations if you need recommendations."
    },
    {
      question: "Are Tamil escorts available 24/7?",
      answer: "Yes, most Tamil escorts in Chennai are available around the clock. They understand that your schedule might be busy, and they're flexible with timing. Whether it's early morning meetings, late-night company, or weekend companionship, they're there when you need them. They're also more likely to accommodate last-minute requests since they're local and familiar with the area."
    },
    {
      question: "What should I expect from a Tamil escort?",
      answer: "Expect someone who actually understands your culture and background. These women know how to be respectful, caring, and genuine. They understand Tamil traditions and values, and they can provide companionship that feels natural and comfortable. They're not just going through the motions - they genuinely want to make your time together enjoyable and meaningful."
    },
    {
      question: "Do Tamil escorts understand local customs and traditions?",
      answer: "Yes, absolutely. Our Tamil escorts in Chennai are well-versed in local customs, traditions, and cultural practices. They understand Tamil festivals, family values, and social norms. This cultural understanding makes them perfect companions for any occasion, whether it's a family event, business meeting, or casual outing. They know how to behave appropriately in different situations."
    },
    {
      question: "Are Tamil escorts more affordable than other escorts?",
      answer: "Tamil escorts in Chennai often provide excellent value for money. They understand the local market and can offer competitive rates while maintaining high service standards. Plus, they're more flexible with pricing and can work within your budget to provide the best possible experience. They understand that building long-term relationships is more valuable than short-term profits."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      location: "Anna Nagar, Chennai",
      service: "Tamil Escort",
      rating: 5,
      date: "3 days ago",
      text: "The Tamil escort I met was absolutely wonderful. She understood my culture, spoke Tamil beautifully, and made me feel completely at home. Her knowledge of Chennai and local customs was impressive. It was like spending time with a local friend who really understood me."
    },
    {
      id: 2,
      name: "Suresh M.",
      location: "OMR, Chennai",
      service: "Tamil Escort",
      rating: 5,
      date: "1 week ago",
      text: "I've been with other escorts before, but this Tamil escort was different. She had that authentic local charm and understanding that made the whole experience special. She knew all the best places in Chennai and could switch between Tamil and English effortlessly. Highly recommended."
    },
    {
      id: 3,
      name: "Vikram R.",
      location: "T. Nagar, Chennai",
      service: "Tamil Escort",
      rating: 5,
      date: "2 weeks ago",
      text: "What I loved about this Tamil escort was her cultural understanding and traditional values. She was respectful, caring, and genuinely interested in making me comfortable. She understood my background and made me feel like I was spending time with someone who truly got me. Will definitely book again."
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
            src="/images/tamil-escorts.avif"
            alt="Beautiful Tamil Escorts in Chennai"
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
              <span className="text-pink-300">Beautiful Tamil</span><br />
              <span className="text-white">Escorts in Chennai</span>
            </h1>
            
            <motion.p
              className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Looking for <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Tamil escorts in Chennai</Link></strong>? You've come to the right place. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we connect you with beautiful, authentic Tamil women who understand local culture and bring that traditional charm to every meeting.
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
                Meet Our <span className="text-pink-600">Beautiful Tamil Escorts</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Take a look at some of our gorgeous <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong>. These women are the real deal - authentic Tamil beauty, cultural understanding, and that traditional charm that makes them special. Each one has her own unique personality and style.
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
              <Flower2 className="h-4 w-4 text-pink-600" />
              <span className="text-pink-800 font-semibold text-sm">Why Choose Tamil Escorts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Authentic Beauty</span> Meets <span className="text-pink-600">Cultural Understanding</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Look, there's something special about <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> - they bring that authentic South Indian beauty and cultural understanding that you just can't find anywhere else. These women understand your background, speak your language, and know how to make you feel completely at home.
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
              What Makes <span className="text-pink-600">Tamil Escorts in Chennai</span> Special
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              You know what? There's a big difference between spending time with a regular escort and a <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escort in Chennai</Link></strong>. These women bring something different to the table - authentic local beauty, cultural understanding, and that traditional charm that you just can't find anywhere else.
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
                  <span className="text-pink-600">Authentic Tamil Beauty</span> That Captivates
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Let's be honest - there's something about Tamil women that just stops you in your tracks. Their natural grace, those beautiful features, and that traditional charm that makes them absolutely irresistible. When you're with a <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escort in Chennai</Link></strong>, you're experiencing real South Indian beauty at its finest.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tamil women have this natural elegance that comes from their cultural heritage. They know how to dress, they know how to carry themselves, and they have that traditional grace that makes them stand out. Whether it's a business dinner, a social event, or just a night out, having a beautiful <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escort</Link></strong> on your arm is going to get you noticed in all the right ways.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And it's not just about looks - Tamil women have this natural confidence and sophistication that comes from their culture. They're not shy, they're not awkward, and they definitely know how to make an entrance. When you walk into a room with a <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escort in Chennai</Link></strong>, people are going to remember it.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tamil1.avif"
                  alt="Authentic Tamil Beauty"
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
                  src="/images/tamil2.avif"
                  alt="Cultural Understanding"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Cultural Understanding</span> That Connects
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here's what really sets <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> apart - they understand your culture, your background, and your way of life. They know Tamil traditions, they understand family values, and they can relate to your experiences in a way that other escorts simply can't. It's like having a conversation with someone who truly gets you.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tamil women are known for their strong family values and cultural understanding. They know how to behave in different situations, they understand social norms, and they can make you feel comfortable in any setting. Whether it's a formal business dinner or a casual social gathering, they know how to handle themselves appropriately and make you look good.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And let's talk about language - when you're with a <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escort</Link></strong>, you can communicate in Tamil, English, or mix both languages naturally. They understand the nuances of both languages and can make the conversation flow perfectly. It's that cultural connection that makes the whole experience more meaningful.
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
                  <span className="text-pink-600">Local Knowledge</span> That Enhances Your Experience
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    One of the biggest advantages of <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> is their local knowledge. They know the city inside and out - the best restaurants, the hidden gems, the cultural spots, and the places that tourists never find. They can show you a side of Chennai that you never knew existed.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tamil escorts understand the local way of life, the traffic patterns, the best times to visit places, and the cultural significance of different locations. They can take you to authentic Tamil restaurants, show you traditional markets, or help you experience local festivals and events. It's like having a local guide who also happens to be beautiful and charming.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they understand the local business culture too. If you're in Chennai for work, they know the corporate scene, understand business etiquette, and can help you navigate professional situations. They're not just pretty faces - they're intelligent women who understand the local business environment and can be valuable companions for work-related events.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/tamil3.avif"
                  alt="Local Knowledge and Experience"
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
                  src="/images/tamil4.avif"
                  alt="Traditional Values with Modern Approach"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Traditional Values</span> with <span className="text-pink-600">Modern Approach</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here's what really makes <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong> special - they bring the best of both worlds. They have traditional Tamil values, respect for culture, and understanding of family importance, but they also understand modern life and what you need. They know how to be respectful, caring, and genuine while still being fun and exciting.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Tamil women understand the importance of respect, loyalty, and genuine care. They know how to be supportive, understanding, and patient. But they also know how to have fun, be adventurous, and make your time together exciting. It's that perfect balance between traditional values and modern approach that makes spending time with them so special.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they understand the importance of discretion and privacy. They know that your reputation and family are important, and they'll never do anything that could embarrass you or put you in an awkward situation. They're professional, they're trustworthy, and they know how to keep things between you and them. That's the kind of reliability you can count on.
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
              No matter where you are in Chennai, we've got you covered. Our <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts</Link></strong> are available in <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, <strong>Adyar</strong>, <strong>Velachery</strong>, <strong>Guindy</strong>, and pretty much anywhere else you might be. Whether you're in the city center or out in the IT corridor, we can get someone to you.
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
              Don't just take our word for it. Here's what actual clients have to say about their experiences with our <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong>. These are real reviews from real guys who've been there.
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
              Look, we know you probably have some questions. Here are the things guys usually ask us about our <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Tamil escorts in Chennai</Link></strong>. We've got straight answers for you.
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
              Ready to Meet a <span className="text-pink-200">Beautiful Tamil Escort</span>?
            </h2>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
              Look, the best <strong><Link href="/tamil-escorts-in-chennai" className="text-pink-200 hover:text-white transition-colors">Tamil escorts in Chennai</Link></strong> are just a phone call away. Don't waste time thinking about it - these women are beautiful, culturally aware, and they're waiting to meet you. Give us a call and let's make it happen.
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