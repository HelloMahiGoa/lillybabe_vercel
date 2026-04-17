'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Eye, ThumbsUp, Share2, Bookmark, Heart, Star, MessageCircle, Phone, MapPin, Shield, CheckCircle, Award, Users, Sparkles, Crown } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';
import { trackEvent, trackPageView } from '@/components/analytics';

export default function LillyBabePage() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/lillybabe', 'LillyBabe - Founder & Lead Escort | Chennai Premier Companion');
    trackEvent('page_view', 'lillybabe', 'lillybabe_profile_page');
  }, []);

  // Track lillybabe page interactions
  const handleLillyBabeInteraction = (action: string, element: string) => {
    trackEvent('lillybabe_interaction', action, element);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('engagement', 'lillybabe_cta', ctaType);
  };

  const lillyBabeProfile = {
    id: 'lillybabe',
    name: 'LillyBabe',
    title: 'Founder & Lead Escort - Chennai\'s Premier Companion',
    excerpt: 'Meet LillyBabe, the visionary behind Chennai\'s most trusted escort service. With years of experience and a passion for providing exceptional companionship, she has redefined what it means to be a professional escort in Chennai.',
    content: `Welcome to my world. I'm LillyBabe, and I'm not just the founder of this service - I'm someone who has dedicated her life to providing exceptional companionship and redefining what it means to be a professional escort in Chennai.

My journey in this industry began over a decade ago, not out of necessity, but out of a genuine passion for connecting with people and providing them with experiences that go beyond the ordinary. I've always believed that companionship is an art form, and I've spent years perfecting that art.

**My Story: From Vision to Reality**

I started LillyBabe with a simple but powerful vision: to create a service where clients could find genuine companionship, where escorts could work safely and professionally, and where both parties could have experiences that were meaningful, respectful, and memorable.

In the early days, I worked independently, learning the ins and outs of the industry, understanding what clients really wanted, and developing the skills that would later define our service standards. I quickly realized that this industry needed a different approach - one that prioritized safety, discretion, and genuine care.

**Building a Legacy of Trust**

Over the years, I've built LillyBabe into Chennai's most trusted escort service, not through marketing gimmicks or false promises, but through consistent delivery of exceptional experiences. Every client who books with us knows they're getting the real deal - professional, verified, and genuinely caring companions.

My approach has always been simple: treat every client with respect, provide services that exceed expectations, and maintain the highest standards of professionalism and discretion. This philosophy has earned us a reputation that speaks for itself.

**What Sets Me Apart**

As the founder and lead escort, I bring a unique combination of experience, professionalism, and genuine care to every interaction. I understand that every client is different, with different needs, expectations, and desires. My ability to adapt, connect, and provide exactly what each person is looking for is what has made me successful in this industry.

I'm not just an escort - I'm a companion, a confidante, and someone who genuinely cares about providing positive experiences. Whether you're looking for someone to accompany you to a business event, provide companionship during travel, or simply spend quality time together, I approach every situation with the same level of care and professionalism.

**My Philosophy on Companionship**

I believe that true companionship goes beyond physical attraction or services rendered. It's about creating genuine connections, providing emotional support, and being someone who can make your time truly special. This philosophy is at the heart of everything we do at LillyBabe.

Every escort who works with us is carefully selected and trained to embody these same values. They're not just service providers - they're companions who understand the art of making people feel valued, respected, and genuinely cared for.

**Safety and Discretion: My Top Priorities**

From day one, safety and discretion have been my top priorities. I've implemented comprehensive safety protocols, established clear boundaries, and created an environment where both clients and escorts can feel secure and comfortable.

Every client who books with us can rest assured that their privacy is protected, their safety is guaranteed, and their experience will be handled with the utmost professionalism and discretion.

**The LillyBabe Experience**

When you book with LillyBabe, you're not just hiring an escort - you're entering into a relationship with someone who genuinely cares about your experience. I take pride in getting to know my clients, understanding their needs, and providing services that exceed their expectations.

Whether you're a first-time client or someone who has been with us for years, you'll always receive the same level of care, attention, and professionalism. That's the LillyBabe promise.

**Looking to the Future**

As I look to the future, I'm excited about the possibilities that lie ahead. I'm constantly working to improve our services, expand our offerings, and ensure that LillyBabe remains Chennai's premier escort service.

My goal is not just to maintain our current standards, but to continue raising the bar for what clients can expect from escort services in Chennai. I want every person who books with us to have an experience that they'll remember fondly for years to come.

**Why Choose LillyBabe?**

Choosing LillyBabe means choosing experience, professionalism, and genuine care. It means choosing someone who has dedicated her life to perfecting the art of companionship and who genuinely wants to provide you with an exceptional experience.

Whether you're looking for a one-time encounter or ongoing companionship, I'm here to provide you with an experience that exceeds your expectations and leaves you feeling valued, respected, and genuinely cared for.

**Ready to Experience the LillyBabe Difference?**

If you're ready to experience what makes LillyBabe special, I invite you to reach out and start a conversation. I'm always happy to discuss your needs, answer your questions, and help you understand how we can provide you with the perfect experience.

Remember, at LillyBabe, you're not just a client - you're someone whose happiness and satisfaction matter to us. That's the difference that experience, care, and genuine passion can make.

I look forward to the opportunity to provide you with an experience that you'll treasure for years to come.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'About',
    image: '/images/nightlife2.jpg',
    readTime: '12 min read',
    views: 3421,
    likes: 287,
    featured: true,
    metaTitle: 'Meet LillyBabe - Founder & Lead Escort | Chennai\'s Premier Companion',
    metaDescription: 'Discover the story of LillyBabe, founder of Chennai\'s most trusted escort service. Learn about her journey, philosophy, and commitment to exceptional companionship.',
    metaKeywords: 'LillyBabe, Chennai escort founder, professional escort Chennai, LillyBabe story, Chennai escort service founder'
  };

  const relatedPosts = [
    {
      id: 1,
      slug: 'how-to-find-perfect-chennai-escort-guide',
      title: 'How to Find the Perfect Chennai Escort: A Real Guide from Someone Who Knows',
      excerpt: 'After years in Chennai\'s escort scene, I\'ve learned what really matters when choosing a companion.',
      image: '/images/escorts-guide.avif',
      readTime: '15 min read',
      date: new Date().toISOString().split('T')[0]
    },
    {
      id: 2,
      slug: 'chennai-escort-privacy-protection-guide',
      title: 'Your Privacy Matters: How We Keep Your Chennai Escort Experience Completely Discreet',
      excerpt: 'Privacy isn\'t just a promise - it\'s our commitment. Here\'s exactly how we protect your personal information.',
      image: '/images/privacy-protection.avif',
      readTime: '7 min read',
      date: '2024-01-10'
    }
  ];

  const WA_URL = 'https://wa.me/918121426651?text=Hi%2C%20I%20want%20to%20connect%20with%20LillyBabe.%20Please%20share%20availability.';
  const TRUST_BADGES = [
    'Founder-led verified service',
    'Discreet one-to-one coordination',
    'Clear, respectful communication',
    'Premium Chennai experience',
  ];
  const STATS = [
    { value: '10+', label: 'Years' },
    { value: '1000+', label: 'Clients' },
    { value: '24/7', label: 'Support' },
    { value: '100%', label: 'Discreet' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* SEO Components */}
      <BlogPostSEO 
        title={lillyBabeProfile.metaTitle}
        description={lillyBabeProfile.metaDescription}
        keywords={lillyBabeProfile.metaKeywords}
        author={lillyBabeProfile.author}
        date={lillyBabeProfile.date}
        image={lillyBabeProfile.image}
        slug="lillybabe"
        category={lillyBabeProfile.category}
        readTime={lillyBabeProfile.readTime}
      />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Breadcrumb */}
      <nav className="bg-zinc-950/80 border-b border-white/8 py-3 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-400 font-semibold">Meet LillyBabe</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -top-20">
          <img
            src="/images/hero-bg.webp"
            alt="Meet LillyBabe - Chennai Founder and Lead Escort"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 min-h-[calc(100vh-8rem)] flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6 sm:mb-8"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  <span className="text-amber-400 text-[11px] font-bold uppercase tracking-[0.18em]">
                    Founder Profile - Verified and Discreet
                  </span>
                </motion.div>

                <motion.h1
                  className="font-black leading-[0.9] tracking-tight mb-5 sm:mb-6 text-white text-[clamp(2.5rem,9vw,6rem)]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Meet <span className="text-amber-400">LillyBabe</span>
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3 mb-5 sm:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <div className="h-px w-10 bg-amber-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base font-medium">
                    <strong className="text-white">Founder and lead companion</strong> trusted by Chennai clients for premium, respectful experiences.
                  </p>
                </motion.div>

                <motion.p
                  className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-7 sm:mb-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {lillyBabeProfile.excerpt}
                </motion.p>

                <motion.div
                  className="flex flex-wrap gap-2 mb-8 sm:mb-10"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  {TRUST_BADGES.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      <span className="text-white/80 text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 min-h-[52px]"
                    onClick={() => handleCTAClick('whatsapp_hero')}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat with LillyBabe
                  </a>
                  <a
                    href="tel:+918121426651"
                    className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/25 min-h-[52px]"
                    onClick={() => handleCTAClick('call_hero')}
                  >
                    <Phone className="h-5 w-5" />
                    Contact Now
                  </a>
                </motion.div>
              </div>

              <motion.div
                className="hidden lg:flex flex-col gap-4"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-5">
                  <div className="grid grid-cols-2 gap-3">
                    {STATS.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-4 rounded-xl bg-white/5 border border-white/8"
                      >
                        <div className="text-2xl font-black text-amber-400 leading-none">{stat.value}</div>
                        <div className="text-gray-500 text-xs mt-1.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={lillyBabeProfile.image}
                    alt={lillyBabeProfile.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h2 className="text-lg font-bold">{lillyBabeProfile.name}</h2>
                    <p className="text-amber-200 text-xs leading-relaxed">{lillyBabeProfile.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 lg:hidden grid grid-cols-4 gap-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl py-3"
                >
                  <div className="text-sm font-black text-amber-400 leading-none">{stat.value}</div>
                  <div className="text-gray-500 text-[10px] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Image */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={lillyBabeProfile.image}
              alt={lillyBabeProfile.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{lillyBabeProfile.name}</h2>
              <p className="text-pink-200">{lillyBabeProfile.title}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-gray-700 leading-relaxed space-y-6">
              <p>Welcome to my world. I'm <strong>LillyBabe</strong>, and I'm not just the founder of this service - I'm someone who has dedicated her life to providing exceptional companionship and redefining what it means to be a professional escort in Chennai.</p>

              <p>My journey in this industry began over a decade ago, not out of necessity, but out of a genuine passion for connecting with people and providing them with experiences that go beyond the ordinary. I've always believed that companionship is an art form, and I've spent years perfecting that art.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">My Story: From Vision to Reality</h2>

              <p>I started <strong>LillyBabe</strong> with a simple but powerful vision: to create a service where clients could find genuine companionship, where escorts could work safely and professionally, and where both parties could have experiences that were meaningful, respectful, and memorable.</p>

              <p>In the early days, I worked independently, learning the ins and outs of the industry, understanding what clients really wanted, and developing the skills that would later define our service standards. I quickly realized that this industry needed a different approach - one that prioritized safety, discretion, and genuine care.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building a Legacy of Trust</h2>

              <p>Over the years, I've built <strong>LillyBabe</strong> into Chennai's most trusted escort service, not through marketing gimmicks or false promises, but through consistent delivery of exceptional experiences. Every client who books with us knows they're getting the real deal - professional, verified, and genuinely caring companions.</p>

              <p>My approach has always been simple: treat every client with respect, provide services that exceed expectations, and maintain the highest standards of professionalism and discretion. This philosophy has earned us a reputation that speaks for itself.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Sets Me Apart</h2>

              <p>As the founder and lead escort, I bring a unique combination of experience, professionalism, and genuine care to every interaction. I understand that every client is different, with different needs, expectations, and desires. My ability to adapt, connect, and provide exactly what each person is looking for is what has made me successful in this industry.</p>

              <p>I'm not just an escort - I'm a companion, a confidante, and someone who genuinely cares about providing positive experiences. Whether you're looking for someone to accompany you to a business event, provide companionship during travel, or simply spend quality time together, I approach every situation with the same level of care and professionalism.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">My Philosophy on Companionship</h2>

              <p>I believe that true companionship goes beyond physical attraction or services rendered. It's about creating genuine connections, providing emotional support, and being someone who can make your time truly special. This philosophy is at the heart of everything we do at <strong>LillyBabe</strong>.</p>

              <p>Every escort who works with us is carefully selected and trained to embody these same values. They're not just service providers - they're companions who understand the art of making people feel valued, respected, and genuinely cared for.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Safety and Discretion: My Top Priorities</h2>

              <p>From day one, safety and discretion have been my top priorities. I've implemented comprehensive safety protocols, established clear boundaries, and created an environment where both clients and escorts can feel secure and comfortable.</p>

              <p>Every client who books with us can rest assured that their privacy is protected, their safety is guaranteed, and their experience will be handled with the utmost professionalism and discretion.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The LillyBabe Experience</h2>

              <p>When you book with <strong>LillyBabe</strong>, you're not just hiring an escort - you're entering into a relationship with someone who genuinely cares about your experience. I take pride in getting to know my clients, understanding their needs, and providing services that exceed their expectations.</p>

              <p>Whether you're a first-time client or someone who has been with us for years, you'll always receive the same level of care, attention, and professionalism. That's the <strong>LillyBabe</strong> promise.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking to the Future</h2>

              <p>As I look to the future, I'm excited about the possibilities that lie ahead. I'm constantly working to improve our services, expand our offerings, and ensure that <strong>LillyBabe</strong> remains Chennai's premier escort service.</p>

              <p>My goal is not just to maintain our current standards, but to continue raising the bar for what clients can expect from escort services in Chennai. I want every person who books with us to have an experience that they'll remember fondly for years to come.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose LillyBabe?</h2>

              <p>Choosing <strong>LillyBabe</strong> means choosing experience, professionalism, and genuine care. It means choosing someone who has dedicated her life to perfecting the art of companionship and who genuinely wants to provide you with an exceptional experience.</p>

              <p>Whether you're looking for a one-time encounter or ongoing companionship, I'm here to provide you with an experience that exceeds your expectations and leaves you feeling valued, respected, and genuinely cared for.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Ready to Experience the LillyBabe Difference?</h2>

              <p>If you're ready to experience what makes <strong>LillyBabe</strong> special, I invite you to reach out and start a conversation. I'm always happy to discuss your needs, answer your questions, and help you understand how we can provide you with the perfect experience.</p>

              <p>Remember, at <strong>LillyBabe</strong>, you're not just a client - you're someone whose happiness and satisfaction matter to us. That's the difference that experience, care, and genuine passion can make.</p>

              <p>I look forward to the opportunity to provide you with an experience that you'll treasure for years to come.</p>
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Experience the LillyBabe Difference
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to discover what makes LillyBabe Chennai's most trusted escort service?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/918121426651"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with LillyBabe
              </motion.a>
              <motion.a
                href="tel:+918121426651"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </motion.a>
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
              Learn More About Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="h-48 overflow-hidden cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-pink-600 transition-colors cursor-pointer line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
