'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Share2, MessageCircle, Phone, CheckCircle, Star, Shield, Globe, Heart, Crown, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function RussianEscortsChennaiExoticBeauties() {
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
    id: 7,
    slug: 'russian-escorts-chennai-exotic-beauties',
    title: 'Russian Escorts in Chennai: Real Talk About Exotic Beauty',
    excerpt: 'Thinking about booking a Russian escort in Chennai? Here\'s what you actually need to know from someone who\'s been in this business for years.',
    content: `Let me be straight with you - Russian escorts in Chennai are something special. I\'ve been running this business for years, and I can tell you that these women bring something different to the table that you won\'t find with local girls.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Information',
    image: '/images/russian-escorts.avif',
    readTime: '8 min read',
    metaTitle: 'Russian Escorts in Chennai - Real Guide to Exotic Beauty | LillyBabe',
    metaDescription: 'Honest guide to Russian escorts in Chennai. What to expect, how to book, and why they\'re worth the premium rates.',
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
      
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className="bg-zinc-950/80 border-b border-white/8 py-3 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition-colors">Blog</Link>
            <span className="text-white/30">/</span>
            <span className="text-amber-400 font-semibold line-clamp-1">{blogPost.title}</span>
          </div>
        </div>
      </nav>

      {/* Article Hero */}
      <section className="relative">
        <div className="absolute inset-0 -top-20">
          <img
            src="/images/hero-bg.webp"
            alt={`${blogPost.title} - LillyBabe Blog`}
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
                    Blog Article - Verified Insight
                  </span>
                </motion.div>

                <motion.h1
                  className="font-black leading-[0.9] tracking-tight mb-5 sm:mb-6 text-white text-[clamp(2rem,8vw,4.75rem)]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {blogPost.title}
                </motion.h1>

                <motion.div
                  className="flex items-center gap-3 mb-5 sm:mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <div className="h-px w-10 bg-amber-400 flex-shrink-0" />
                  <p className="text-gray-300 text-sm sm:text-base font-medium">
                    <strong className="text-white">{blogPost.category}</strong> guide by <Link href="/lillybabe" className="text-white underline-offset-2 hover:underline">{blogPost.author}</Link> with practical and clear takeaways.
                  </p>
                </motion.div>

                <motion.p
                  className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mb-7 sm:mb-8"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  {blogPost.excerpt}
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.55 }}
                >
                  <Link
                    href="/blog"
                    className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-amber-500/25 min-h-[52px]"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Back to Blog
                  </Link>
                  <button
                    onClick={handleShare}
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm sm:text-base px-6 py-4 rounded-2xl transition-all duration-200 shadow-lg shadow-green-900/30 min-h-[52px]"
                  >
                    <Share2 className="h-5 w-5" />
                    Share Guide
                  </button>
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
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
                      <div className="text-lg font-black text-amber-400 leading-none">{blogPost.readTime}</div>
                      <div className="text-gray-500 text-xs mt-1.5">Read Time</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
                      <div className="text-lg font-black text-amber-400 leading-none">{blogPost.category}</div>
                      <div className="text-gray-500 text-xs mt-1.5">Category</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
                      <div className="text-sm font-black text-amber-400 leading-none">{new Date(blogPost.date).toLocaleDateString()}</div>
                      <div className="text-gray-500 text-xs mt-1.5">Published</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/8">
                      <Link href="/lillybabe" className="text-lg font-black text-amber-400 leading-none underline-offset-2 hover:underline">{blogPost.author}</Link>
                      <div className="text-gray-500 text-xs mt-1.5">Author</div>
                    </div>
                  </div>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
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
                <span className="text-pink-600 font-bold">*</span>
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
              <p>Let me be straight with you - <Link href="/" className="text-pink-600 hover:text-pink-700 underline"><strong>Russian escorts in Chennai</strong></Link> are something special. I've been running this business for years, and I can tell you that these women bring something different to the table that you won't find with local girls.</p>

              <p>Now, I'm not saying Indian escorts aren't amazing - they absolutely are. But there's something about Russian women that just hits different. Maybe it's their confidence, their directness, or just that exotic factor that makes them stand out in a crowd.</p>

              <p>If you're new to this whole thing, you might want to check out our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">basic guide to finding escorts</Link> first. But if you're specifically curious about Russian girls, keep reading.</p>

              <h2 id="what-makes-special" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                Why Russian Girls Are Different
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They're Not Shy About What They Want</h3>
              <p>Look, I've worked with all types of girls, but Russian women are refreshingly direct. They'll tell you exactly what they're comfortable with and what they're not. No games, no guessing - just straight talk.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Can Actually Hold a Conversation</h3>
              <p>Most of the Russian girls I work with are educated and well-traveled. They can talk about anything - business, politics, art, whatever. It's not just about looks with them.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Show Up When They Say They Will</h3>
              <p>This might sound basic, but you'd be surprised how many girls flake out. Russian escorts are professional. If they say they'll be there at 8 PM, they'll be there at 8 PM.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Get International Clients</h3>
              <p>If you're a foreigner visiting Chennai, Russian girls just "get" you better. They understand the cultural differences and can make you feel more comfortable.</p>

              <h2 id="what-to-expect" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                What You're Actually Getting
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Look</h3>
              <p>Most Russian girls are tall - we're talking 5'6" and up. They don't need a ton of makeup to look good, and they usually take care of themselves. You're not getting someone who's going to show up looking like they just rolled out of bed.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Speak English (Mostly)</h3>
              <p>Almost all of them speak decent English. Some have accents that are actually pretty charming. The point is, you can have a real conversation without playing charades.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">No BS About Services</h3>
              <p>Here's what I like about Russian girls - they'll tell you straight up what they do and what they don't do. No false advertising, no surprises. If you ask about something they're not comfortable with, they'll just say no.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Take This Seriously</h3>
              <p>This isn't a hobby for them. They're here to work, they want to do a good job, and they want you to be happy. That means they'll be on time, look good, and actually try to make your time together enjoyable.</p>

              <h2 id="how-to-find" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                How to Actually Find Good Russian Girls
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Don't Go With Random Ads</h3>
              <p>I see guys falling for fake ads all the time. If someone's posting "Russian model available now" with obviously fake photos, run the other way. Real Russian girls work through proper agencies or have established reputations.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Ask Around</h3>
              <p>If you know other guys who've used escort services, ask them. Word of mouth is still the best way to find quality girls. People will tell you who's good and who to avoid.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Make Sure They're Actually Russian</h3>
              <p>This sounds obvious, but you'd be surprised. Some girls will claim to be Russian just because they think it sounds exotic. Ask them to speak a few words in Russian if you're not sure.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Check How Long They've Been Here</h3>
              <p>Girls who've been in Chennai for a while usually have better English and understand the local scene better. They're also less likely to disappear on you.</p>

              <h2 id="services-offered" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                What You Can Actually Expect
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They'll Go Out With You</h3>
              <p>Most Russian girls are fine with dinner dates, going to events, or just hanging out. They're not just about the bedroom stuff - they can be good company for other activities too.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Won't Waste Your Time</h3>
              <p>They show up when they say they will, they look good when they arrive, and they don't play games. If they say they're available, they're available.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">They Can Actually Talk</h3>
              <p>This isn't just about physical stuff. These girls can hold conversations, they're interesting to talk to, and they won't just sit there looking pretty (though they do that too).</p>

              <h2 id="booking-tips" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                How to Book Without Screwing It Up
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Don't Beat Around the Bush</h3>
              <p>Russian girls appreciate when you're direct. Tell them what you want, when you want it, and for how long. They don't like playing guessing games.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Listen When They Say No</h3>
              <p>If they tell you they don't do something, don't try to convince them otherwise. They're not being difficult - they're being honest about their limits.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Book Early</h3>
              <p>Good Russian girls are usually busy. Don't expect to call at 9 PM and have someone available at 10 PM. Plan ahead, especially for weekends.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Be Ready to Pay More</h3>
              <p>Let's be real - Russian girls cost more than local girls. But you get what you pay for. If you're looking for cheap, this probably isn't for you.</p>

              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                So, Is It Worth It?
              </h2>

              <p>Look, I'm not going to sugarcoat this. Russian escorts cost more money, and they're not for everyone. But if you want something different, if you want a girl who's going to show up on time, look amazing, and actually be interesting to talk to, then yeah, it's probably worth it.</p>

              <p>The thing is, you're not just paying for looks. You're paying for professionalism, reliability, and that exotic factor that you can't get with local girls. Some guys love that, some don't care. It's really up to you.</p>

              <p>Just remember - treat them with respect, be clear about what you want, and don't try to negotiate their rates down. These girls know what they're worth, and they're not going to waste time with guys who don't get that.</p>

              <p>If you're ready to try something different, check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available girls</Link> or read our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">guide to finding the right escort</Link> for more tips.</p>
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
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
                <p className="text-gray-600">International Standards</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Try Something Different?
              </span>
              <br />
              <span className="text-gray-900">Russian Girls Are Waiting</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              If you're curious about Russian escorts in Chennai, now's the time to find out what all the fuss is about. 
              Professional service, exotic beauty, and no BS - just straight talk and good times.
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
    </>
  );
}
