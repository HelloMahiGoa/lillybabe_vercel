'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Heart, Shield, Star, Clock, MessageCircle, Search, Filter, BookOpen, TrendingUp, Eye, ThumbsUp, Sparkles, Zap } from 'lucide-react';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { BlogSEO } from '@/components/seo/blog-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function BlogClient() {
  const [isMobile, setIsMobile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to Choosing the Right Chennai Escort',
      excerpt: 'Learn how to select the perfect companion for your needs with our comprehensive guide to choosing Chennai escorts.',
      content: 'Choosing the right escort in Chennai can be overwhelming with so many options available. Our guide helps you understand what to look for, how to verify authenticity, and how to ensure a safe and enjoyable experience.',
      author: 'LillyBabe Team',
      date: '2024-01-15',
      category: 'Guide',
      image: '/images/models/escort-girl-2.webp',
      readTime: '5 min read',
      views: 1250,
      likes: 89,
      featured: true
    },
    {
      id: 2,
      title: 'Safety First: How We Ensure Your Privacy and Security',
      excerpt: 'Discover the comprehensive safety measures we implement to protect your privacy and ensure a secure experience.',
      content: 'Your safety and privacy are our top priorities. Learn about our verification processes, security protocols, and how we maintain complete discretion in all our services.',
      author: 'LillyBabe Team',
      date: '2024-01-10',
      category: 'Safety',
      image: '/images/models/escort-girl-3.webp',
      readTime: '4 min read',
      views: 980,
      likes: 67,
      featured: false
    },
    {
      id: 3,
      title: 'Understanding Different Types of Escort Services in Chennai',
      excerpt: 'Explore the various types of escort services available in Chennai and find the one that best suits your preferences.',
      content: 'From independent escorts to high-class companions, Chennai offers a diverse range of escort services. This article breaks down the different types and what makes each unique.',
      author: 'LillyBabe Team',
      date: '2024-01-05',
      category: 'Information',
      image: '/images/models/escort-girl-4.webp',
      readTime: '6 min read',
      views: 1100,
      likes: 78,
      featured: true
    },
    {
      id: 4,
      title: 'Best Locations in Chennai for Escort Services',
      excerpt: 'Discover the most popular and convenient locations in Chennai for booking escort services.',
      content: 'Chennai has many great locations for escort services. From T Nagar to Anna Nagar, learn about the best areas and what makes each location special for your experience.',
      author: 'LillyBabe Team',
      date: '2024-01-01',
      category: 'Locations',
      image: '/images/models/escort-girl-5.webp',
      readTime: '7 min read',
      views: 850,
      likes: 54,
      featured: false
    },
    {
      id: 5,
      title: 'How to Book Your First Chennai Escort: A Step-by-Step Guide',
      excerpt: 'New to escort services? Follow our simple step-by-step guide to book your first Chennai escort with confidence.',
      content: 'Booking your first escort can be nerve-wracking. Our detailed guide walks you through the entire process, from initial contact to meeting your companion, ensuring a smooth experience.',
      author: 'LillyBabe Team',
      date: '2023-12-28',
      category: 'Guide',
      image: '/images/models/escort-girl-6.webp',
      readTime: '8 min read',
      views: 1400,
      likes: 95,
      featured: true
    },
    {
      id: 6,
      title: 'The Evolution of Escort Services in Chennai',
      excerpt: 'Take a journey through the history and evolution of escort services in Chennai over the years.',
      content: 'Chennai\'s escort industry has evolved significantly over the years. Learn about the changes, improvements, and how modern services have become more professional and client-focused.',
      author: 'LillyBabe Team',
      date: '2023-12-25',
      category: 'History',
      image: '/images/models/escort-girl-7.webp',
      readTime: '9 min read',
      views: 720,
      likes: 42,
      featured: false
    }
  ];

  const categories = ['All', 'Guide', 'Safety', 'Information', 'Locations', 'History'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'views':
          return b.views - a.views;
        case 'likes':
          return b.likes - a.likes;
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* SEO Components */}
      <BlogSEO />
      
      {/* Responsive Header */}
      {isMobile ? <MobileHeader title="Blog" /> : <Header />}
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden" aria-labelledby="hero-heading">
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
                <h1 id="hero-heading" className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    LillyBabe
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                    Blog
                  </span>
                  <span className="block text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-4">
                    Stories & Insights
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
                You know what? We've got some amazing stories to share! From tips on choosing the perfect companion to behind-the-scenes looks at what makes Lillybabe special - it's all here in our blog.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <button
                  onClick={() => window.open('https://wa.me/918121426651', '_blank')}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Contact Us</span>
                  <Zap className="w-4 h-4 group-hover:animate-bounce relative z-10" />
                </button>
                
                <a
                  href="#blog-posts"
                  className="group inline-flex items-center justify-center gap-3 text-white/80 hover:text-white px-8 py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-lg hover:bg-white/10"
                >
                  <span>Read Stories</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              
            </motion.div>
            
            {/* Right Visual - Blog Illustration */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Blog Visual */}
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-24 h-24 text-white/60 mx-auto mb-4" />
                      <div className="text-white/80 text-lg font-semibold">Latest Stories</div>
                      <div className="text-white/60 text-sm">Tips, Guides & Insights</div>
                    </div>
                  </div>
                </div>
                {/* Overlay with stats */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-xs text-gray-300">Articles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">10K+</div>
                      <div className="text-xs text-gray-300">Readers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">Weekly</div>
                      <div className="text-xs text-gray-300">Updates</div>
                    </div>
                  </div>
                </div>
              </motion.div>
                
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-600 px-6 py-3 rounded-full mb-6">
                <Sparkles className="h-5 w-5 text-white" />
                <span className="text-white font-bold text-lg">EXPLORE ARTICLES</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Find Your <span className="text-pink-500">Perfect</span> Read
              </h2>
            </motion.div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              >
                <option value="date">Sort by Date</option>
                <option value="views">Sort by Views</option>
                <option value="likes">Sort by Likes</option>
                <option value="title">Sort by Title</option>
              </select>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full mb-6">
              <BookOpen className="h-5 w-5 text-white" />
              <span className="text-white font-bold text-lg">LATEST ARTICLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Stories That <span className="text-purple-500">Matter</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              You know what? We've got some amazing stories to share! From tips on choosing the perfect companion to behind-the-scenes looks at what makes Lillybabe special.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </span>
                    )}
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views.toLocaleString()} views
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {post.likes} likes
                    </div>
                  </div>
                  
                  <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest updates and tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Need Help or Have Questions?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team is here to help you with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/447452845650"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us
              </motion.a>
              <motion.a
                href="tel:+447452845650"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
