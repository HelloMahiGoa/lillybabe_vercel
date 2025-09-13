'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Heart, Shield, Star, Clock, MessageCircle } from 'lucide-react';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { Header } from '@/components/layout/header';
import { BlogSEO } from '@/components/seo/blog-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function BlogClient() {
  const [isMobile, setIsMobile] = useState(false);

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
      readTime: '5 min read'
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
      readTime: '4 min read'
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
      readTime: '6 min read'
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
      readTime: '7 min read'
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
      readTime: '8 min read'
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
      readTime: '9 min read'
    }
  ];

  const categories = ['All', 'Guide', 'Safety', 'Information', 'Locations', 'History'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* SEO Components */}
      <BlogSEO />
      
      {/* Responsive Header */}
      {isMobile ? <MobileHeader title="Blog" /> : <Header />}
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="text-6xl">📝</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              LillyBabe <span className="text-pink-600">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Stay updated with the latest news, tips, and insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/447452845650"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="#blog-posts"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read Articles
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
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
      <section id="blog-posts" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay informed with our latest insights and updates
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
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
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
