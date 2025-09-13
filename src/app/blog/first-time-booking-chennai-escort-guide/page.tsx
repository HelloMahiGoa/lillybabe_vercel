'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Eye, ThumbsUp, Share2, Bookmark, Heart, Star, MessageCircle, Phone, MapPin, Shield, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';

export default function BlogPostPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const blogPost = {
    id: 5,
    slug: 'first-time-booking-chennai-escort-guide',
    title: 'Your First Time Booking a Chennai Escort: A Step-by-Step Guide That Actually Works',
    excerpt: 'Nervous about booking your first Chennai escort? Don\'t be. Here\'s exactly what to expect, how to prepare, and how to make sure your first experience is amazing.',
    content: `Let me tell you something - booking your first **Chennai escort** can feel overwhelming. I've talked to hundreds of first-time clients, and they all have the same concerns: What if I do something wrong? What if I get scammed? What if the experience is awkward?

Here's the truth: your first time doesn't have to be nerve-wracking. With the right preparation and knowledge, it can be exactly what you're hoping for. Let me walk you through the entire process, step by step.

Before we start, I recommend reading our [how to find the perfect escort guide](/blog/how-to-find-perfect-chennai-escort-guide) to understand what to look for in a **Chennai escort**.

**Step 1: Know What You Want (But Don't Overthink It)**

Before you even start looking, take some time to think about what you're actually looking for. This isn't about creating a detailed checklist - it's about understanding your basic needs.

**Ask Yourself**:
- Are you looking for conversation and companionship?
- Do you want someone to accompany you to an event?
- Are you interested in intimate services?
- How much time do you want to spend together?
- What's your budget range?

Don't stress about getting this perfect. You can always adjust your preferences as you learn more about what's available.

**Step 2: Do Your Research (But Don't Get Lost in It)**

Research is important, but don't let it become an excuse to never take action. Here's what you actually need to know:

**Look for Reputable Services**: Find established agencies or well-reviewed independent escorts. Look for consistent reviews and professional presentation.

**Check Verification**: Make sure the service has some form of verification process. This protects both you and the escort.

**Read Reviews Carefully**: Look for detailed, specific reviews rather than generic praise. Real clients will mention specific details about their experience.

**Trust Your Instincts**: If something feels off, it probably is. Don't ignore red flags.

**Step 3: Make Initial Contact (Keep It Simple)**

When you're ready to make contact, keep it simple and professional:

**Be Direct**: "Hi, I'm interested in booking your services. Can you tell me about your availability and rates?"

**Be Respectful**: Remember, you're talking to a real person who's providing a professional service.

**Ask Questions**: Don't be afraid to ask about services, rates, and availability. A professional escort will be happy to answer your questions.

**Be Patient**: Don't expect immediate responses. Give people time to reply.

**Step 4: The Verification Process (It's for Your Safety Too)**

Most reputable Chennai escort services will have some form of verification process. This might include:

**Age Verification**: Confirming you're of legal age
**Identity Confirmation**: Basic verification that you are who you say you are
**Reference Checks**: Sometimes they'll ask for references from other services

Don't be offended by this process. It's designed to protect everyone involved, including you.

**Step 5: Discuss Your Needs (Be Honest but Respectful)**

Once you've passed verification, you can discuss your specific needs:

**Be Clear About Your Expectations**: What are you looking for? What's important to you?

**Ask About Services**: What does the escort offer? What are her boundaries?

**Discuss Timing**: How long do you want to spend together? When works for both of you?

**Talk About Location**: Where would you like to meet? Do you have a preference?

**Step 6: Confirm the Details (Get Everything in Writing)**

Before you meet, make sure you have all the details confirmed:

**Time and Date**: When exactly are you meeting?
**Location**: Where are you meeting? Do you have the address?
**Duration**: How long is the appointment?
**Services**: What services are included?
**Rates**: What's the total cost? What's included?

**Step 7: Prepare for Your Meeting (The Practical Stuff)**

**Personal Hygiene**: This should go without saying, but make sure you're clean and well-groomed.

**Dress Appropriately**: Dress for the occasion. If you're going to a nice restaurant, dress accordingly.

**Bring What You Need**: Cash (if required), condoms (if applicable), and any other items you might need.

**Plan Your Transportation**: How are you getting there? How are you getting home?

**Step 8: The Meeting (Relax and Be Yourself)**

**Arrive on Time**: Punctuality shows respect and professionalism.

**Be Yourself**: Don't try to be someone you're not. Authenticity is more attractive than pretense.

**Communicate**: If you're uncomfortable with something, say so. If you're enjoying something, let them know.

**Respect Boundaries**: Remember, this is a professional service with clear boundaries.

**Step 9: After the Meeting (Handle It Professionally)**

**Pay What Was Agreed**: Make sure you pay the agreed amount promptly.

**Be Respectful**: Thank them for their time and service.

**Leave When Expected**: Don't overstay your welcome.

**Follow Up Appropriately**: If you had a good experience, you can mention that you'd like to book again in the future.

**Common First-Time Mistakes to Avoid**

**Overthinking Everything**: Don't analyze every detail to death. Sometimes the best experiences happen when you just go with the flow.

**Being Unrealistic**: Don't expect a perfect, movie-like experience. Real life is messier and more human.

**Ignoring Red Flags**: If something feels wrong, trust your instincts and walk away.

**Being Disrespectful**: Remember, you're dealing with a real person providing a professional service.

**Not Communicating**: If you're not enjoying something, say so. If you are enjoying something, let them know.

**What to Expect from Your First Experience**

**It Might Be Awkward at First**: That's normal. Most first-time experiences are a bit awkward initially.

**It Gets Better**: Once you relax and start communicating, the experience usually improves significantly.

**It's a Learning Experience**: You'll learn what you like, what you don't like, and what you want to try next time.

**It's Just the Beginning**: If you have a good experience, you'll know what to look for in future bookings.

**The Bottom Line**

Booking your first Chennai escort doesn't have to be scary or overwhelming. With the right preparation and approach, it can be exactly what you're looking for.

The key is to be honest about what you want, respectful in your communication, and realistic in your expectations. Don't try to be perfect - just be yourself and let the experience unfold naturally.

Remember, everyone was a first-time client once. The escorts you'll meet understand this and are usually very patient and understanding with new clients.

Your first experience is just the beginning. Once you've had a good experience, you'll know what to look for and how to make future bookings even better.

The most important thing is to choose a reputable service, communicate clearly, and approach the experience with respect and openness. Do that, and you're likely to have a great time.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Guide',
    image: '/images/models/escort-girl-6.webp',
    readTime: '12 min read',
    views: 2756,
    likes: 187,
    featured: true,
    metaTitle: 'First Time Booking Chennai Escort - Complete Beginner Guide 2024 | LillyBabe',
    metaDescription: 'Complete guide for first-time Chennai escort bookings. Step-by-step process, what to expect, and tips for a great first experience.',
    metaKeywords: 'first time escort booking, Chennai escort beginner guide, how to book escort, escort booking tips, first escort experience'
  };

  const relatedPosts = [
    {
      id: 1,
      slug: 'how-to-find-perfect-chennai-escort-guide',
      title: 'How to Find the Perfect Chennai Escort: A Real Guide from Someone Who Knows',
      excerpt: 'After years in Chennai\'s escort scene, I\'ve learned what really matters when choosing a companion.',
      image: '/images/models/escort-girl-2.webp',
      readTime: '8 min read',
      date: '2024-01-15'
    },
    {
      id: 2,
      slug: 'chennai-escort-privacy-protection-guide',
      title: 'Your Privacy Matters: How We Keep Your Chennai Escort Experience Completely Discreet',
      excerpt: 'Privacy isn\'t just a promise - it\'s our commitment. Here\'s exactly how we protect your personal information.',
      image: '/images/models/escort-girl-3.webp',
      readTime: '7 min read',
      date: '2024-01-10'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* SEO Components */}
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
      
      {/* Header Navigation */}
      {isMobile ? <MobileHeader title="Blog" /> : <Header />}
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/blog" className="hover:text-pink-600 transition-colors">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-pink-600 font-medium line-clamp-1">{blogPost.title}</span>
          </div>
        </div>
      </nav>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Article Header */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            {/* Category and Featured Badge */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                {blogPost.category}
              </span>
              {blogPost.featured && (
                <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-sm">
                  <Star className="w-4 h-4 mr-2 fill-current" />
                  Featured Article
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Your First Time Booking
              </span>
              <br />
              <span className="text-gray-900">a Chennai Escort</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              A step-by-step guide that actually works
            </p>

            {/* Author Card */}
            <Link href="/lillybabe" className="block max-w-md mx-auto mb-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img 
                      src="/images/nightlife2.jpg" 
                      alt="LillyBabe - Chennai Escort Expert"
                      className="w-16 h-16 rounded-full object-cover border-2 border-pink-200"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                        if (nextElement) {
                          nextElement.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hidden">
                      <span className="text-white font-bold text-xl">L</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 hover:text-pink-600 transition-colors">{blogPost.author}</p>
                    <p className="text-sm text-gray-600">Chennai Escort Expert & Founder</p>
                    <p className="text-xs text-pink-600 font-medium mt-1">Click to learn more about LillyBabe</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Meta Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-5 h-5 text-pink-600" />
                </div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="font-semibold text-gray-900">{new Date(blogPost.date).toLocaleDateString()}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600">Read Time</p>
                <p className="font-semibold text-gray-900">{blogPost.readTime}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">Beginner Guide</p>
                <p className="font-semibold text-gray-900">Verified</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  isBookmarked 
                    ? 'bg-pink-100 text-pink-600 shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <Bookmark className="w-5 h-5 mr-2" />
                {isBookmarked ? 'Bookmarked' : 'Bookmark Guide'}
              </button>
              <button
                onClick={handleShare}
                className="flex items-center px-6 py-3 bg-white text-gray-600 hover:bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share Guide
              </button>
            </div>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Your First Time Booking a Chennai Escort</h2>
              <p className="text-lg opacity-90">A step-by-step guide that actually works</p>
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
                <span className="text-pink-600 font-bold">📋</span>
              </div>
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#know-what-you-want" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">1.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Know What You Want</span>
                </a>
                <a href="#research-options" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">2.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Research Your Options</span>
                </a>
                <a href="#make-contact" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">3.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Make Initial Contact</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#arrange-meeting" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">4.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Arrange the Meeting</span>
                </a>
                <a href="#prepare-yourself" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">5.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Prepare Yourself</span>
                </a>
                <a href="#conclusion" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">6.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Conclusion & Next Steps</span>
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
              <p>Let me tell you something - booking your first <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Chennai escort</strong></Link> can feel overwhelming. I've talked to hundreds of first-time clients, and they all have the same concerns: What if I do something wrong? What if I get scammed? What if the experience is awkward?</p>

              <p>Here's the truth: your first time doesn't have to be nerve-wracking. With the right preparation and knowledge, it can be exactly what you're hoping for. Let me walk you through the entire process, step by step.</p>

              <p>Before we start, I recommend reading our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">how to find the perfect escort guide</Link> to understand what to look for in a <strong>Chennai escort</strong>.</p>

              <h2 id="know-what-you-want" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                Know What You Want (But Don't Overthink It)
              </h2>

              <p>Before you even start looking, take some time to think about what you're actually looking for. This isn't about creating a detailed checklist - it's about understanding your basic needs.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ask Yourself</h3>
              <p>Are you looking for conversation and companionship? Do you want someone to accompany you to an event? Are you interested in intimate services? How much time do you want to spend together? What's your budget range?</p>

              <p>Don't stress about getting this perfect. You can always adjust your preferences as you learn more about what's available.</p>

              <h2 id="research-options" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                Research Your Options
              </h2>

              <p>Once you have a basic idea of what you want, it's time to research your options. This is where most people make their first mistake - they don't do enough research.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What to Look For</h3>
              <p>Look for <strong>Chennai escorts</strong> who have good reviews, clear communication, and professional presentation. Check their photos, read their profiles, and look for any red flags.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Red Flags to Avoid</h3>
              <p>Be wary of escorts who ask for money upfront, have no reviews, or seem unprofessional. Trust your instincts - if something feels off, it probably is.</p>

              <h2 id="make-contact" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                Make Initial Contact
              </h2>

              <p>Once you've found a few <strong>Chennai escorts</strong> you're interested in, it's time to make contact. This is where many first-time clients get nervous, but it doesn't have to be complicated.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How to Contact</h3>
              <p>Most escorts prefer WhatsApp or phone calls for initial contact. Be polite, professional, and clear about what you're looking for. Don't be overly explicit in your first message.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What to Say</h3>
              <p>Introduce yourself briefly, mention that you're interested in their services, and ask if they're available. Keep it simple and respectful.</p>

              <h2 id="arrange-meeting" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                Arrange the Meeting
              </h2>

              <p>Once you've established contact and confirmed availability, it's time to arrange the meeting. This is where you'll discuss details like time, location, and services.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Discuss Details</h3>
              <p>Be clear about what you want, how long you want to spend together, and where you'd like to meet. Most <strong>Chennai escorts</strong> are flexible and will work with you to arrange something that works for both of you.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Confirm Everything</h3>
              <p>Make sure you both understand the arrangement before the meeting. This includes time, location, duration, and any special requests.</p>

              <h2 id="prepare-yourself" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                Prepare Yourself
              </h2>

              <p>On the day of your meeting, take some time to prepare yourself. This isn't just about physical preparation - it's about being mentally ready for the experience.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Physical Preparation</h3>
              <p>Take a shower, dress appropriately, and make sure you're presentable. You want to make a good impression and show respect for your escort.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mental Preparation</h3>
              <p>Relax, be yourself, and remember that this is supposed to be enjoyable. Don't put too much pressure on yourself or the experience.</p>

              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                Conclusion & Next Steps
              </h2>

              <p>Booking your first <strong>Chennai escort</strong> doesn't have to be complicated or stressful. With the right preparation and knowledge, it can be a smooth and enjoyable experience.</p>

              <p>Remember to be respectful, communicate clearly, and trust your instincts. The best experiences come from mutual respect and clear communication.</p>

              <p>Ready to take the next step? Check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available escorts</Link> or learn more about our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">selection process</Link>.</p>
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
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">First-Time Friendly</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Happy First-Timers</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Book Your First
              </span>
              <br />
              <span className="text-gray-900">Chennai Escort?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us now and let us guide you through your first booking experience. 
              We specialize in making first-time clients feel comfortable and confident.
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
                <span>First-Time Friendly</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Step-by-Step Guidance</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>No Pressure</span>
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

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNavigation />}
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
