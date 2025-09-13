'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Clock, Share2, MessageCircle, Phone, CheckCircle, Star, Shield, Globe, Heart, Crown, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function RussianEscortsChennaiExoticBeauties() {
  const [isMobile, setIsMobile] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  const blogPost = {
    id: 7,
    slug: 'russian-escorts-chennai-exotic-beauties',
    title: 'Russian Escorts in Chennai: Your Guide to Exotic International Beauty',
    excerpt: 'Discover the allure of Russian escorts in Chennai. From their exotic charm to professional service standards, here\'s everything you need to know about booking Russian companions.',
    content: `There's something undeniably captivating about Russian escorts in Chennai. Their exotic beauty, sophisticated charm, and international appeal make them some of the most sought-after companions in the city. But what makes Russian escorts so special, and how do you find the right one for you?`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Information',
    image: '/images/russian1.webp',
    readTime: '8 min read',
    metaTitle: 'Russian Escorts in Chennai - Exotic International Beauty Guide | LillyBabe',
    metaDescription: 'Discover Russian escorts in Chennai. Guide to exotic international beauty, professional service standards, and booking Russian companions.',
    metaKeywords: 'Russian escorts Chennai, exotic escorts Chennai, international escorts, Russian companions Chennai, foreign escorts Chennai'
  };

  const handleShare = async () => {
    const shareData = {
      title: blogPost.title,
      text: blogPost.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (clipboardError) {
        console.error('Failed to copy to clipboard:', clipboardError);
        alert('Unable to share. Please copy the URL manually.');
      }
    }
  };

  const relatedPosts = [
    {
      id: 1,
      title: 'How to Find the Perfect Chennai Escort',
      excerpt: 'A real guide from someone who knows the industry inside and out.',
      image: '/images/models/escort-girl-2.webp',
      slug: 'how-to-find-perfect-chennai-escort-guide',
      category: 'Guide'
    },
    {
      id: 2,
      title: 'Chennai Escort Services Types Explained',
      excerpt: 'Complete guide to different types of escort services available in Chennai.',
      image: '/images/models/escort-girl-3.webp',
      slug: 'chennai-escort-services-types-explained',
      category: 'Guide'
    }
  ];

  return (
    <>
      <BlogPostSEO
        title={blogPost.metaTitle}
        description={blogPost.metaDescription}
        keywords={blogPost.metaKeywords}
        author={blogPost.author}
        date={blogPost.date}
        image={blogPost.image}
        slug={blogPost.slug}
        category={blogPost.category}
        readTime={blogPost.readTime}
      />
      
      {isMobile ? <MobileHeader /> : <Header />}
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Russian Escorts in Chennai
              </span>
              <br />
              <span className="text-gray-900">Exotic International Beauty</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Discover the allure of Russian escorts in Chennai - exotic charm, professional service, and unforgettable experiences
            </p>

            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center justify-center mb-8"
            >
              <Link href="/lillybabe" className="flex items-center space-x-4 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src="/images/nightlife2.jpg"
                    alt="LillyBabe"
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg hidden">
                    L
                  </div>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">LillyBabe</p>
                  <p className="text-sm text-gray-500">International Expert</p>
                </div>
              </Link>
            </motion.div>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8"
            >
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">Published {new Date(blogPost.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">{blogPost.readTime}</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">International</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={handleShare}
                className="flex items-center px-6 py-3 bg-white text-gray-600 hover:bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Guide
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Article Image */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Russian Escorts in Chennai</h2>
              <p className="text-lg opacity-90">Exotic beauty meets professional service</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-pink-600 font-bold">👑</span>
              </div>
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#what-makes-special" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">1.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">What Makes Them Special</span>
                </a>
                <a href="#what-to-expect" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">2.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">What to Expect</span>
                </a>
                <a href="#how-to-find" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">3.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">How to Find Quality</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#services-offered" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">4.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Services Offered</span>
                </a>
                <a href="#booking-tips" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">5.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Booking Tips</span>
                </a>
                <a href="#conclusion" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">6.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Conclusion</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>There's something undeniably captivating about <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Russian escorts in Chennai</strong></Link>. Their exotic beauty, sophisticated charm, and international appeal make them some of the most sought-after companions in the city. But what makes Russian escorts so special, and how do you find the right one for you?</p>

              <p>I've been working with Russian escorts in Chennai for years, and I can tell you that the experience is unlike anything else. These women bring a unique blend of European elegance, professional service standards, and genuine warmth that creates unforgettable experiences.</p>

              <p>Before we dive in, I recommend reading our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">how to find the perfect escort guide</Link> to understand the basics of choosing the right companion.</p>

              <h2 id="what-makes-special" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                What Makes Russian Escorts in Chennai Special
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Exotic Beauty</h3>
              <p>Russian women are known worldwide for their striking features - tall, elegant figures, beautiful eyes, and natural grace that turns heads wherever they go.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sophisticated Conversation</h3>
              <p>Most Russian escorts in Chennai are well-educated and worldly. They can discuss art, culture, business, or travel with intelligence and charm.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Standards</h3>
              <p>Russian escorts typically maintain very high professional standards. They're punctual, well-groomed, and understand the importance of discretion.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">International Experience</h3>
              <p>Many Russian escorts have traveled extensively and can relate to business travelers and international clients in ways that local escorts might not.</p>

              <h2 id="what-to-expect" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                What to Expect from Russian Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Physical Appearance</h3>
              <p>Russian escorts are typically tall (5'6" to 5'10"), with natural beauty that doesn't require heavy makeup. They maintain their figures through healthy lifestyles.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communication</h3>
              <p>Most speak excellent English, though some may have charming accents. They're articulate and can hold sophisticated conversations.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Style</h3>
              <p>Russian escorts tend to be more direct and honest about what they offer. They're not shy about discussing boundaries and expectations upfront.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professionalism</h3>
              <p>They treat escorting as a serious business and maintain professional standards throughout the interaction.</p>

              <h2 id="how-to-find" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                How to Find Quality Russian Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Look for Established Agencies</h3>
              <p>The best Russian escorts work through reputable agencies that handle verification, safety, and professional standards.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Check Reviews and References</h3>
              <p>Look for detailed reviews from other clients who have experienced Russian escort services.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Verify Authenticity</h3>
              <p>Make sure you're dealing with genuine Russian escorts, not just women claiming to be Russian.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ask About Experience</h3>
              <p>Inquire about their background, how long they've been in Chennai, and their experience with international clients.</p>

              <h2 id="services-offered" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                What Russian Escorts Typically Offer
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Companionship Services</h3>
              <p>Dinner dates and social events, business meeting accompaniment, travel companionship, and cultural experiences and sightseeing.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Standards</h3>
              <p>Punctuality and reliability, discretion and privacy, professional communication, and clear boundaries and expectations.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Qualities</h3>
              <p>Intelligence and conversation skills, cultural awareness and sensitivity, professional appearance and grooming, and genuine interest in making your time special.</p>

              <h2 id="booking-tips" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                Tips for Booking Russian Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Clear About Your Expectations</h3>
              <p>Russian escorts appreciate direct communication about what you're looking for.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Respect Their Boundaries</h3>
              <p>They're professionals who have clear boundaries. Respect them, and you'll have a much better experience.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Plan Ahead</h3>
              <p>Russian escorts are often in high demand, so book in advance when possible.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Prepared to Pay Premium Rates</h3>
              <p>Quality Russian escorts command higher rates, but the experience is usually worth it.</p>

              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                The Bottom Line
              </h2>

              <p>Russian escorts in Chennai offer a unique combination of exotic beauty, professional service, and international sophistication that's hard to find elsewhere. They bring a different perspective and cultural background that can make your experience more interesting and memorable.</p>

              <p>If you're looking for something different from the typical escort experience, Russian escorts might be exactly what you need. Just make sure you're working with a reputable agency, have realistic expectations, and are prepared to pay for quality service.</p>

              <p>Remember, the best Russian escort experiences happen when you approach the situation with respect, clear communication, and realistic expectations. These women are professionals who take their work seriously, and they deserve to be treated with the same respect and professionalism they bring to their work.</p>

              <p>Ready to experience the exotic charm of Russian escorts? Check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available escorts</Link> or learn more about our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">selection process</Link>.</p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Success Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Exotic Beauty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Premium</h3>
                <p className="text-gray-600">Service Quality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5★</h3>
                <p className="text-gray-600">International Standards</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Experience Exotic Russian Beauty
              </span>
              <br />
              <span className="text-gray-900">in Chennai Today</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the allure of Russian escorts in Chennai. Exotic beauty, professional service, 
              and unforgettable experiences await you.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <motion.a
                href="https://wa.me/918121426651"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-full font-semibold hover:from-pink-700 hover:to-pink-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us Now
              </motion.a>
              <motion.a
                href="tel:+918121426651"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 border-2 border-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
            </div>

            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Exotic Beauty</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Professional Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>International Standards</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingButtons />
      {isMobile && <MobileBottomNavigation />}
    </>
  );
}
