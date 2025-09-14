'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Clock, Share2, MessageCircle, Phone, CheckCircle, Star, Shield, TrendingUp, History, Smartphone, Globe, Lock, Users, Zap, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function ChennaiEscortIndustryEvolutionHistory() {
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
    id: 6,
    slug: 'chennai-escort-industry-evolution-history',
    title: 'How Chennai\'s Escort Industry Actually Changed: The Real Story from Someone Who Was There',
    excerpt: 'I\'ve been in this business for over 20 years. Let me tell you the real story of how things changed - the good, the bad, and the stuff nobody talks about.',
    content: `Let me tell you a story about how Chennai's escort industry has transformed over the years. I've been around long enough to see the changes firsthand, and let me tell you - it's been quite a journey.

Back in the early 2000s, when I first started in this business, things were very different. The internet was still new, most bookings happened through word of mouth, and the whole industry operated in the shadows. Fast forward to today, and it's almost unrecognizable.

But here's the thing - not all the changes have been good, and not all the old ways were bad. Let me give you the real story of how Chennai's escort industry has evolved, what's better now, and what we might have lost along the way.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'History',
    image: '/images/sex-industry.avif',
    readTime: '11 min read',
    metaTitle: 'Chennai Escort Industry Evolution - Real History from an Insider | LillyBabe',
    metaDescription: 'The real story of how Chennai\'s escort industry changed over 20+ years. From word-of-mouth to digital platforms - what actually happened.',
    metaKeywords: 'Chennai escort industry history, escort industry evolution, Chennai escort changes, escort industry future, escort industry trends'
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
      title: 'Chennai Escort Privacy Protection Guide',
      excerpt: 'Complete guide to protecting your privacy when booking escorts.',
      image: '/images/models/escort-girl-3.webp',
      slug: 'chennai-escort-privacy-protection-guide',
      category: 'Privacy'
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
                How Chennai's Escort Industry
              </span>
              <br />
              <span className="text-gray-900">Actually Changed Over the Years</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              I've been in this business for over 20 years. Let me tell you the real story of how things changed - the good, the bad, and the stuff nobody talks about
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
                  <p className="text-sm text-gray-500">Industry Expert</p>
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
                <History className="w-5 h-5" />
                <span className="text-sm font-medium">Industry History</span>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Chennai Escort Industry Evolution</h2>
              <p className="text-lg opacity-90">From past to present - the real story</p>
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
                <span className="text-pink-600 font-bold">📚</span>
              </div>
              Table of Contents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#early-days" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">1.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">The Early Days (2000s)</span>
                </a>
                <a href="#internet-revolution" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">2.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Internet Revolution</span>
                </a>
                <a href="#mobile-era" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">3.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Mobile Era</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#current-state" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">4.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Current State</span>
                </a>
                <a href="#technology-impact" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">5.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Technology Impact</span>
                </a>
                <a href="#future-outlook" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">6.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Future Outlook</span>
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
              <p>Look, I've been in this <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Chennai escort business</strong></Link> for over two decades now, and let me tell you - the changes I've seen are absolutely insane. When I started, we were basically operating in the dark ages compared to today.</p>

              <p>Back in the early 2000s, when I first got into this, things were completely different. The internet was this weird new thing that most people didn't even understand, everything happened through word of mouth, and we basically operated like some secret society. Now? It's like a completely different world.</p>

              <p>But here's what nobody tells you - not every change was for the better. Some of the old ways were actually pretty good, and some of the new stuff? Well, let's just say it's complicated. Let me give you the real, unfiltered story of what actually happened.</p>

              <h2 id="early-days" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                The Early Days: When We Were Basically a Secret Society
              </h2>

              <p>In the early 2000s, <strong>Chennai's escort industry</strong> was basically invisible. No websites, no online reviews, no digital anything. If you didn't know someone who knew someone, you were out of luck. It was like this whole underground network that most people didn't even know existed.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">How It Actually Worked</h3>
              <p>Everything was personal connections. You'd hear about someone through a friend, or a friend of a friend. Bookings happened over phone calls or you'd meet in person to discuss things. Cash only, always. No verification, no reviews, no guarantees. You basically had to trust that the person you were talking to wasn't lying to you.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually Good About It</h3>
              <p>It was incredibly personal. You built real relationships with people. There was this sense of community, and everyone knew everyone. The discretion was absolute - nobody was posting anything online or leaving digital trails. And the local knowledge was incredible - people really knew the city and the scene.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually Terrible</h3>
              <p>Finding reliable services was a nightmare. You had no way to know if someone was legit or just trying to scam you. Service quality was all over the place - some people were amazing, others were terrible, and you had no way to know which was which. Your options were super limited, and safety? Well, let's just say you were on your own.</p>

              <h2 id="internet-revolution" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                The Internet Hit: And Everything Went Crazy
              </h2>

              <p>When the internet became mainstream in the mid-2000s, it was like someone flipped a switch. Suddenly, escorts could advertise online, clients could actually read reviews, and the whole industry went from being this secret thing to being... well, not so secret anymore.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Actually Changed</h3>
              <p>Online advertising became a thing - people could actually see who was available. Review systems started popping up, which was huge. Digital communication became the norm instead of phone calls. Suddenly, way more people could get into the business, and clients had way more options than ever before.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually Great</h3>
              <p>Finding services became so much easier. You could actually read reviews and know what you were getting into. More options meant more variety. Communication got better - no more playing phone tag. And safety improved because you could actually verify who you were dealing with.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually Terrible</h3>
              <p>We lost that personal connection that made the old days special. Competition got insane - everyone was trying to outdo everyone else. Scams and fake profiles became a real problem. The market got oversaturated with people who didn't know what they were doing. And discretion? Well, that went out the window.</p>

              <h2 id="mobile-era" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                The Smartphone Era: When Everything Got Even More Complicated
              </h2>

              <p>Then smartphones happened, and everything got even crazier. Now clients could browse, book, and communicate literally anywhere, anytime. But this also brought a whole new set of problems that nobody saw coming.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Actually Changed</h3>
              <p>Mobile apps and websites became the norm. Instant messaging and video calls replaced phone calls. GPS made location services possible. Social media integration became a thing. And real-time booking systems meant people could book literally on the spot.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually Amazing</h3>
              <p>The convenience was incredible - people could browse and book from anywhere. Real-time communication meant no more waiting around. Location services made meeting up so much easier. More verification options meant better safety. And the booking process became lightning fast.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What Was Actually a Nightmare</h3>
              <p>Privacy became a real concern - everything was being tracked. The pressure for instant responses was insane. Digital footprints became a huge problem. People became completely dependent on technology. And personal interaction? That basically disappeared.</p>

              <h2 id="current-state" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                Where We Are Now: Professional But Complicated
              </h2>

              <p>Today, <strong>Chennai's escort industry</strong> is more professional than it's ever been, but it's also way more complicated and regulated than anyone could have imagined back in the day.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's Actually Better Now</h3>
              <p>Professional agencies with real verification systems. Clear service standards and boundaries that everyone understands. Better safety measures that actually work. More diverse options than ever before. And way better client protection than we had in the old days.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">What's Actually More Challenging</h3>
              <p>The competition is insane - everyone's trying to outdo everyone else. Operating costs have gone through the roof. There are way more regulations and restrictions than before. People are completely dependent on technology. And privacy concerns are bigger than ever.</p>

              <h2 id="technology-impact" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                How Technology Completely Changed Everything
              </h2>

              <p>Technology didn't just change the industry - it completely revolutionized every single aspect of how we do business:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Communication</h3>
              <p>We went from phone calls to instant messaging, video calls, and social media. Now people expect responses within minutes, not hours.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Verification</h3>
              <p>From "trust me, I know someone" to actual digital verification systems. Now you can actually prove who you are and what you offer.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment</h3>
              <p>From cash-only to digital payment options. Now people can pay online, through apps, or even with cryptocurrency.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Booking</h3>
              <p>From in-person meetings to online booking systems. Now people can book appointments at 2 AM from their phone.</p>

              <h2 id="future-outlook" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                What's Coming Next: The Future Looks... Interesting
              </h2>

              <p>Looking ahead, I can see even more changes coming, and honestly, some of them are pretty wild:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Artificial Intelligence</h3>
              <p>AI is already starting to change how we match clients with escorts and verify people. It's going to get way more sophisticated.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Virtual Reality</h3>
              <p>VR might completely change how clients and escorts interact. I'm not sure if that's good or bad, but it's definitely coming.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Blockchain</h3>
              <p>Could provide way better privacy and payment security. This might actually solve some of the problems we've created with all this digital stuff.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">More Regulation</h3>
              <p>Formal regulation is probably coming to the industry, whether we like it or not. It might actually help clean things up.</p>

              <p>Look, <strong>Chennai's escort industry</strong> has changed dramatically over the years, and honestly, most of those changes have been positive. We have better safety, more options, higher quality, and way more convenience than we ever had before.</p>

              <p>But we've also lost some things along the way - the personal connections, the community feel, and the complete discretion of the early days. The industry has become more professional, but it's also become way more commercial.</p>

              <p>The key is finding the right balance - taking advantage of all the improvements while keeping the personal touch and discretion that made this industry special in the first place.</p>

              <p>Ready to see what the modern <strong>Chennai escort</strong> experience is like? Check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available girls</Link> or read our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">guide to finding the right escort</Link>.</p>
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Industry Evolution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Future</h3>
                <p className="text-gray-600">Ready</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                See What the Modern
              </span>
              <br />
              <span className="text-gray-900">Chennai Escort Industry Looks Like</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              After all these changes, we've learned how to combine the best of the old ways with modern technology. 
              Experience what 20+ years of evolution has created.
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
                <span>Modern Technology</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Traditional Values</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Future Ready</span>
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
