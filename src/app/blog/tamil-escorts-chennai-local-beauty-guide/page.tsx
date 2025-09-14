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
    title: 'Tamil Escorts in Chennai: Real Talk About Local Girls',
    excerpt: 'Thinking about booking a Tamil escort in Chennai? Here\'s the honest truth about local girls from someone who\'s been in this business for years.',
    content: `Let me be straight with you about Tamil escorts in Chennai. I've been running this business for years, and I can tell you that there's something special about local Tamil girls that you won't find with foreign escorts.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Information',
    image: '/images/tamil-escorts.avif',
    readTime: '9 min read',
    metaTitle: 'Tamil Escorts in Chennai - Honest Guide to Local Girls | LillyBabe',
    metaDescription: 'Real talk about Tamil escorts in Chennai. What to expect from local girls, how to find quality, and why they might be perfect for you.',
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
              <span className="text-gray-900">Real Talk About Local Girls</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Thinking about booking a Tamil escort? Here's the honest truth about local girls from someone who's been in this business for years
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
              <p>Let me be straight with you about <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Tamil escorts in Chennai</strong></Link>. I've been running this business for years, and I can tell you that there's something special about local Tamil girls that you won't find with foreign escorts.</p>

              <p>Look, I'm not saying foreign girls aren't great - they absolutely are. But there's something different about being with a Tamil girl who actually gets your culture, speaks your language, and understands what it's like to be from here. It's just... easier, you know?</p>

              <p>If you're new to this whole thing, you might want to check out our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">basic guide to finding escorts</Link> first. But if you're specifically curious about Tamil girls, keep reading.</p>

              <h2 id="what-makes-unique" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                Why Tamil Girls Are Different
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Actually Get Your Culture</h3>
              <p>Look, I've worked with all types of girls, but Tamil girls just understand things that foreign girls don't. They know the family dynamics, the social pressures, the little things that matter in our culture. It's not something you can learn from a book.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">You Can Talk to Them in Tamil</h3>
              <p>This might sound obvious, but being able to switch between Tamil and English makes everything more comfortable. Sometimes you just want to express something in your own language, you know?</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Know Chennai Like the Back of Their Hand</h3>
              <p>These girls grew up here. They know the best places to eat, the hidden spots, the shortcuts. They can show you a side of Chennai that you probably never knew existed.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They're Naturally Beautiful</h3>
              <p>Tamil girls have this natural beauty that doesn't need a ton of makeup. Their eyes, their skin, their whole vibe - it's just naturally attractive. They don't need to try too hard.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Understand Discretion</h3>
              <p>Most Tamil girls come from families where reputation matters. They get why you need to be careful, why privacy is important. They're not going to do anything that could cause problems for you or them.</p>

              <h2 id="what-to-expect" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                What You're Actually Getting
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Look Good Without Trying Too Hard</h3>
              <p>Tamil girls usually have this natural look that's just... right. They don't need layers of makeup or fake stuff. They take care of themselves, but they don't overdo it. It's refreshing, honestly.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Won't Embarrass You</h3>
              <p>This is huge. Tamil girls understand that your reputation matters. They're not going to do anything that could get you in trouble or make you look bad. They know how to be discreet.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Can Show You Real Chennai</h3>
              <p>These girls know the city inside and out. They can take you to places you've never heard of, introduce you to food you didn't know existed, and show you a side of Chennai that's not in any tourist guide.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communication Is Easy</h3>
              <p>Most Tamil girls speak Tamil, English, and often Hindi too. You can switch between languages depending on what you're talking about. It just makes everything flow better.</p>

              <h2 id="types-available" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                Different Types of Tamil Girls
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Traditional Ones</h3>
              <p>These girls are more conservative, come from traditional families, and are very careful about their reputation. They're usually older and more experienced with handling sensitive situations.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Modern Ones</h3>
              <p>Younger girls who are more open-minded but still understand Tamil culture. They're usually more fun and adventurous while still being respectful of traditions.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Working Girls</h3>
              <p>These are girls who have other jobs or are studying but do this on the side. They're usually more professional and treat it like a business.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Cultural Guides</h3>
              <p>Some girls specialize in showing you around Chennai, taking you to temples, cultural sites, and local experiences. They're more like tour guides who also provide companionship.</p>

              <h2 id="how-to-find" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                How to Actually Find Good Tamil Girls
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Go With Local Agencies</h3>
              <p>I'm not going to lie - finding good Tamil girls on your own is tough. Most of them work through agencies because it's safer and more professional. Look for agencies that actually specialize in local girls, not just foreign ones.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ask Other Tamil Guys</h3>
              <p>If you know other Tamil guys who've used escort services, ask them. Word of mouth is still the best way to find quality girls. People will tell you who's good and who to avoid.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Make Sure They're Actually Local</h3>
              <p>Some girls will claim to be Tamil just because they think it sounds good. Ask them about Chennai, about local places, about Tamil culture. If they can't answer basic questions, they're probably not who they say they are.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Know What You Want</h3>
              <p>Are you looking for someone traditional or more modern? Someone who can show you around the city or just someone to spend time with? Be clear about what you want before you start looking.</p>

              <h2 id="services-offered" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                What You Can Actually Expect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They'll Show You Real Chennai</h3>
              <p>These girls can take you to temples, local festivals, hidden restaurants, and places that tourists never see. They know the city better than any guidebook.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Can Handle Social Situations</h3>
              <p>Need someone for a business meeting, a social event, or even a family function? Tamil girls know how to behave in different social situations without causing any awkwardness.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They're Just Easy to Be Around</h3>
              <p>This is the thing about Tamil girls - they're comfortable to be with. They understand the culture, they know how to have a conversation, and they won't make you feel awkward or out of place.</p>

              <h2 id="booking-tips" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                How to Book Without Screwing It Up
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Don't Be a Jerk About Their Culture</h3>
              <p>Look, these girls come from traditional backgrounds. Don't make jokes about their culture, don't pressure them to do things they're not comfortable with, and don't be disrespectful. It's not that hard.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Clear About What You Want</h3>
              <p>Tamil girls appreciate when you're direct but respectful. Tell them what you're looking for, but don't be crude about it. They understand the business, but they also have boundaries.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Take Advantage of Their Local Knowledge</h3>
              <p>If you're booking a Tamil girl, ask her to show you around. They know the best places to eat, the coolest spots to visit, and the most interesting things to do in Chennai.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Patient and Understanding</h3>
              <p>Some Tamil girls might be more conservative than others. Don't rush them or pressure them. They'll open up when they're comfortable, and the experience will be much better for both of you.</p>

              <p>Look, I'm not going to lie - Tamil escorts aren't for everyone. Some guys prefer the exotic factor of foreign girls, and that's totally fine. But if you want someone who actually gets your culture, who can show you the real Chennai, and who won't make you feel awkward about being Tamil, then local girls are probably your best bet.</p>

              <p>The thing is, you're not just getting an escort - you're getting someone who understands where you're coming from, who can relate to your background, and who can make you feel comfortable in a way that foreign girls just can't.</p>

              <p>If you're ready to try something different, check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available girls</Link> or read our <Link href="/blog/best-areas-chennai-escort-services-locations" className="text-pink-600 hover:text-pink-700 underline">guide to the best areas in Chennai</Link> for more tips.</p>
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
                Ready to Try Local Girls?
              </span>
              <br />
              <span className="text-gray-900">Tamil Escorts Are Waiting</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              If you're curious about Tamil escorts in Chennai, now's the time to find out what all the fuss is about. 
              Local beauty, cultural understanding, and no awkwardness - just comfortable, easy companionship.
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
