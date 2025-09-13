'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Clock, Share2, MessageCircle, Phone, CheckCircle, Star, Shield, Heart, Home, Users, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function TamilEscortsChennaiLocalBeautyGuide() {
  const [readingProgress, setReadingProgress] = useState(0);

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
    id: 8,
    slug: 'tamil-escorts-chennai-local-beauty-guide',
    title: 'Tamil Escorts in Chennai: Celebrating Local Beauty and Authentic Charm',
    excerpt: 'Experience the authentic charm of Tamil escorts in Chennai. From their natural beauty to cultural understanding, discover why local Tamil companions are so special.',
    content: `There's something incredibly special about Tamil escorts in Chennai. As the heart of Tamil culture, Chennai offers some of the most beautiful, intelligent, and culturally rich Tamil women who understand both traditional values and modern companionship needs.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Information',
    image: '/images/tamil.webp',
    readTime: '9 min read',
    metaTitle: 'Tamil Escorts in Chennai - Local Beauty and Cultural Guide | LillyBabe',
    metaDescription: 'Discover Tamil escorts in Chennai. Guide to local beauty, cultural understanding, and authentic Tamil companionship experiences.',
    metaKeywords: 'Tamil escorts Chennai, local escorts Chennai, Chennai Tamil girls, Tamil companions, local Chennai escorts'
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
      title: 'Best Areas in Chennai for Escort Services',
      excerpt: 'Complete guide to the best locations in Chennai for escort services.',
      image: '/images/models/escort-girl-3.webp',
      slug: 'best-areas-chennai-escort-services-locations',
      category: 'Locations'
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
      
      <Header />
      
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
                Tamil Escorts in Chennai
              </span>
              <br />
              <span className="text-gray-900">Local Beauty & Authentic Charm</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the authentic charm of Tamil escorts in Chennai - natural beauty, cultural understanding, and local expertise
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
                  <p className="text-sm text-gray-500">Local Expert</p>
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
                <Home className="w-5 h-5" />
                <span className="text-sm font-medium">Local Guide</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Tamil Escorts in Chennai</h2>
              <p className="text-lg opacity-90">Authentic local beauty and cultural charm</p>
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
                <span className="text-pink-600 font-bold">🏠</span>
              </div>
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#what-makes-unique" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">1.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">What Makes Them Unique</span>
                </a>
                <a href="#what-to-expect" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">2.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">What to Expect</span>
                </a>
                <a href="#types-available" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">3.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Types Available</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#how-to-find" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">4.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">How to Find Quality</span>
                </a>
                <a href="#services-offered" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">5.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Services Offered</span>
                </a>
                <a href="#booking-tips" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">6.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Booking Tips</span>
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
              <p>There's something incredibly special about <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Tamil escorts in Chennai</strong></Link>. As the heart of Tamil culture, Chennai offers some of the most beautiful, intelligent, and culturally rich Tamil women who understand both traditional values and modern companionship needs.</p>

              <p>I've been working with Tamil escorts in Chennai for years, and I can tell you that there's nothing quite like the experience of spending time with a woman who truly understands your culture, speaks your language, and shares your background while still maintaining professional service standards.</p>

              <p>Before we explore Tamil escorts, I recommend reading our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">how to find the perfect escort guide</Link> to understand the basics of choosing the right companion.</p>

              <h2 id="what-makes-unique" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                What Makes Tamil Escorts in Chennai Unique
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cultural Understanding</h3>
              <p>Tamil escorts understand local customs, traditions, and social nuances in ways that foreign escorts simply can't. They know how to navigate Chennai's social scene with grace and authenticity.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Language Comfort</h3>
              <p>Being able to communicate in Tamil (or at least understand it) creates a level of comfort and connection that's hard to achieve with escorts from other backgrounds.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Local Knowledge</h3>
              <p>They know the best restaurants, cultural sites, and hidden gems in Chennai. They can show you parts of the city that tourists never see.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Authentic Beauty</h3>
              <p>Tamil women are known for their natural beauty, expressive eyes, and graceful movements. They don't need heavy makeup or artificial enhancements to look stunning.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Family Values</h3>
              <p>Many Tamil escorts come from traditional backgrounds and understand the importance of discretion and respect for family values.</p>

              <h2 id="what-to-expect" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                What to Expect from Tamil Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Natural Beauty</h3>
              <p>Tamil escorts typically have a more natural, less artificial approach to beauty. They focus on healthy skin, good grooming, and natural grace rather than heavy makeup or cosmetic procedures.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cultural Sensitivity</h3>
              <p>They understand the importance of discretion in Indian society and are skilled at maintaining privacy and respect for your personal life.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Local Expertise</h3>
              <p>They can recommend the best local restaurants, cultural events, and activities that you might not discover on your own.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Language Skills</h3>
              <p>Most are fluent in Tamil, English, and often other Indian languages, making communication comfortable and natural.</p>

              <h2 id="types-available" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                Types of Tamil Escorts Available
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Traditional Tamil Escorts</h3>
              <p>Women who maintain traditional values while providing professional companionship services.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Modern Tamil Escorts</h3>
              <p>Younger women who are more Westernized but still maintain their cultural identity and local knowledge.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Tamil Escorts</h3>
              <p>Career-oriented women who work as escorts part-time while pursuing other professional goals.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cultural Tamil Escorts</h3>
              <p>Women who specialize in cultural experiences, temple visits, and traditional activities.</p>

              <h2 id="how-to-find" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                How to Find Quality Tamil Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Look for Local Agencies</h3>
              <p>Agencies that specialize in local talent often have the best selection of Tamil escorts.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Check Cultural References</h3>
              <p>Look for escorts who are recommended by other Tamil clients or who have experience with local cultural events.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Verify Local Knowledge</h3>
              <p>Ask about their knowledge of Chennai, local customs, and cultural sites to ensure they're genuinely local.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Consider Your Needs</h3>
              <p>Think about whether you want someone more traditional or more modern in their approach.</p>

              <h2 id="services-offered" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                What Tamil Escorts Typically Offer
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cultural Experiences</h3>
              <p>Temple visits and religious sites, traditional festivals and celebrations, local cuisine and dining experiences, and cultural performances and events.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Social Services</h3>
              <p>Business meeting accompaniment, social event attendance, family function support (where appropriate), and networking and professional events.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Qualities</h3>
              <p>Cultural understanding and sensitivity, local knowledge and expertise, natural beauty and grace, and professional service standards.</p>

              <h2 id="booking-tips" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                Tips for Booking Tamil Escorts in Chennai
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Respect Cultural Sensitivities</h3>
              <p>Be mindful of cultural boundaries and respect their traditional values.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communicate Clearly</h3>
              <p>Be clear about your expectations while being respectful of cultural considerations.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Consider Cultural Activities</h3>
              <p>Take advantage of their local knowledge to explore Chennai's cultural side.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Patient</h3>
              <p>Some Tamil escorts may have more traditional approaches to certain aspects of the service.</p>

              <p>Tamil escorts in Chennai offer a unique combination of cultural authenticity, local expertise, and professional service that's hard to find elsewhere. They provide the comfort of cultural understanding while maintaining the professional standards you expect from quality escort services.</p>

              <p>If you're looking for an authentic Chennai experience with someone who truly understands the local culture and can show you the city from an insider's perspective, Tamil escorts are an excellent choice.</p>

              <p>Ready to experience authentic Tamil charm? Check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available escorts</Link> or learn more about our <Link href="/blog/best-areas-chennai-escort-services-locations" className="text-pink-600 hover:text-pink-700 underline">best areas guide</Link>.</p>
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
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Local Knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Authentic</h3>
                <p className="text-gray-600">Cultural Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5★</h3>
                <p className="text-gray-600">Local Expertise</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Experience Authentic Tamil Charm
              </span>
              <br />
              <span className="text-gray-900">in Chennai Today</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover the authentic charm of Tamil escorts in Chennai. Local beauty, cultural understanding, 
              and genuine companionship await you.
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
                <span>Local Knowledge</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Cultural Understanding</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Authentic Experience</span>
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
    </>
  );
}
