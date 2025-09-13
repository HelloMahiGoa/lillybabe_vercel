'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowLeft, Clock, Eye, ThumbsUp, Share2, Bookmark, Heart, Star, MessageCircle, Phone, MapPin, Shield, CheckCircle } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { BlogPostSEO } from '@/components/seo/blog-post-seo';

export default function BlogPostPage() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const blogPost = {
    id: 3,
    slug: 'chennai-escort-services-types-explained',
    title: 'Chennai Escort Services Explained: What You Need to Know About Different Types',
    excerpt: 'Not all Chennai escort services are the same. Here\'s the real breakdown of what\'s available, what each type offers, and how to choose what\'s right for you.',
    content: `Let me be honest with you - the world of **Chennai escort services** can be confusing. There are so many different types, price ranges, and service levels that it's easy to get overwhelmed. But here's the thing: understanding the different options actually makes your decision much easier.

I've been working in Chennai's escort industry for years, and I've seen clients make the same mistake over and over - they don't understand what they're actually booking. They see a price, think it sounds good, and end up disappointed because they didn't get what they expected.

So let me break down the different types of **Chennai escort services** for you. This isn't about judging any particular type - it's about helping you understand what's available so you can make an informed choice.

If you're looking for specific locations, check out our [best areas guide](/blog/best-areas-chennai-escort-services-locations) to find the perfect spot for your meeting.

**Independent Chennai Escorts**

These are women who work on their own, managing their own bookings, setting their own rates, and handling their own clients. Here's what you need to know:

**Pros**: 
- Direct communication with the escort
- Often more personalized service
- Can be more flexible with arrangements
- Sometimes lower rates

**Cons**:
- Less verification and safety measures
- No backup if something goes wrong
- Inconsistent service quality
- Harder to verify authenticity

**Agency-Based Chennai Escorts**

These are escorts who work through established agencies like ours. They have support, verification, and professional standards.

**Pros**:
- Thoroughly verified and vetted
- Professional standards and boundaries
- Backup support and safety measures
- Consistent service quality
- Easy booking process

**Cons**:
- Slightly higher rates (due to agency overhead)
- Less direct communication with the escort
- More structured service offerings

**High-Class Chennai Escorts**

These are premium service providers who offer luxury experiences with higher rates and more exclusive services.

**What You Get**:
- Exceptional beauty and presentation
- Sophisticated conversation and social skills
- Luxury accommodations and settings
- Premium service standards
- Discretion and professionalism

**What You Pay**:
- Higher rates (typically 2-3x standard rates)
- Often require advance booking
- May have minimum time requirements

**Budget Chennai Escorts**

These are service providers who offer basic services at lower rates.

**What You Get**:
- Basic companionship services
- Lower rates
- Often more availability

**What You Should Know**:
- Service quality can vary significantly
- Less verification and safety measures
- May not include all amenities
- Often shorter service times

**Specialized Chennai Escort Services**

**Travel Companions**: Escorts who accompany you on trips, business meetings, or social events.

**Social Escorts**: Focus on conversation, dining, and social activities rather than intimate services.

**Mature Escorts**: Experienced women who offer companionship with life experience and emotional maturity.

**Student Escorts**: Younger women, often college students, who work part-time.

**How to Choose the Right Type for You**

**Consider Your Budget**: Be honest about what you can afford. It's better to book a quality service within your budget than to stretch for something you can't really afford.

**Think About Your Needs**: Are you looking for conversation, social companionship, or intimate services? Different types of Chennai escorts specialize in different areas.

**Consider Your Experience Level**: If you're new to escort services, an agency-based escort might be safer and more reliable.

**Think About Discretion**: Some types of services offer more privacy and discretion than others.

**What to Expect from Each Service Level**

**Basic Services** (Budget to Mid-Range):
- 1-2 hours of companionship
- Basic conversation and social interaction
- Standard service offerings
- Clean, safe meeting locations

**Premium Services** (High-Class):
- 2+ hours of companionship
- Sophisticated conversation and social skills
- Luxury accommodations
- Premium service standards
- Additional amenities and services

**Luxury Services** (Ultra-Premium):
- Extended time periods
- Exceptional beauty and presentation
- Luxury venues and accommodations
- Personalized service experiences
- Complete discretion and privacy

**Red Flags to Watch Out For**

**Unrealistic Promises**: If someone promises everything for a very low price, be suspicious.

**Pressure for Upfront Payment**: Legitimate Chennai escorts don't require full payment before meeting.

**Vague Service Descriptions**: Clear, honest service providers will be specific about what they offer.

**No Verification Process**: Reputable services will have some form of verification.

**The Bottom Line**

The key to finding the right Chennai escort service is understanding what you want and what you can afford, then choosing a service type that matches your needs and budget.

Don't be swayed by flashy promises or unrealistic prices. Look for services that are honest about what they offer, have clear verification processes, and prioritize your safety and satisfaction.

Remember, the best Chennai escort experience isn't necessarily the most expensive one - it's the one that matches your needs, expectations, and budget. Take your time, do your research, and choose a service type that feels right for you.

The most important thing is that you feel comfortable, safe, and satisfied with your choice. Everything else is just details.`,
    author: 'LillyBabe',
    date: new Date().toISOString().split('T')[0],
    category: 'Information',
    image: '/images/models/escort-girl-4.webp',
    readTime: '9 min read',
    views: 1892,
    likes: 134,
    featured: true,
    metaTitle: 'Types of Chennai Escort Services - Complete Guide 2024 | LillyBabe',
    metaDescription: 'Learn about different types of Chennai escort services. Independent, agency-based, high-class, and specialized escort options explained.',
    metaKeywords: 'Chennai escort types, independent escorts Chennai, agency escorts, high-class escorts Chennai, escort service types'
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

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Category and Featured Badge */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-semibold">
                {blogPost.category}
              </span>
              {blogPost.featured && (
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {blogPost.excerpt}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blogPost.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(blogPost.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {blogPost.readTime}
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                {blogPost.views.toLocaleString()} views
              </div>
              <div className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-2" />
                {blogPost.likes} likes
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  isBookmarked 
                    ? 'bg-pink-100 text-pink-600' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Bookmark className="w-4 h-4 mr-2" />
                {isBookmarked ? 'Bookmarked' : 'Bookmark'}
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share
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
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Understanding Different Types of Chennai Escort Services</h2>
              <p className="text-lg opacity-90">Choose the right service type for your needs</p>
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
                <a href="#independent-escorts" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">1.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Independent Chennai Escorts</span>
                </a>
                <a href="#agency-escorts" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">2.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Agency-Based Escort Services</span>
                </a>
                <a href="#high-class-escorts" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">3.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">High-Class Escort Services</span>
                </a>
              </div>
              <div className="space-y-3">
                <a href="#specialized-services" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">4.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">Specialized Service Types</span>
                </a>
                <a href="#choosing-right-type" className="block p-3 rounded-lg hover:bg-pink-50 transition-colors group">
                  <span className="text-pink-600 font-semibold group-hover:text-pink-700">5.</span>
                  <span className="ml-2 text-gray-700 group-hover:text-gray-900">How to Choose the Right Type</span>
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
              <p>When it comes to <strong>Chennai escort services</strong>, there's no one-size-fits-all approach. Different types of services cater to different needs, preferences, and budgets. Understanding these options helps you make informed decisions and find exactly what you're looking for.</p>

              <p>In this guide, I'll break down the main types of <strong>Chennai escort services</strong> available, what each offers, and how to choose the right one for your needs. Whether you're looking for companionship, social events, or more intimate services, there's an option that's perfect for you.</p>

              <h2 id="independent-escorts" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">1</span>
                </div>
                Independent Chennai Escorts
              </h2>

              <p>Independent <strong>Chennai escorts</strong> work for themselves, managing their own bookings, schedules, and client relationships. This type of service offers several advantages:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Direct Communication</h3>
              <p>You communicate directly with the escort, which can lead to better understanding of your needs and preferences. There's no middleman, so you can discuss exactly what you're looking for without any confusion.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personalized Service</h3>
              <p>Independent escorts often provide more personalized service since they're not bound by agency policies. They can be more flexible with their time, services, and approach to meet your specific needs.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Competitive Pricing</h3>
              <p>Without agency fees, independent escorts can often offer more competitive rates. The full amount goes to the escort, which can result in better value for your money.</p>

              <h2 id="agency-escorts" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">2</span>
                </div>
                Agency-Based Escort Services
              </h2>

              <p>Agency-based <strong>Chennai escort services</strong> work through established companies that manage multiple escorts. These services offer different benefits:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Professional Management</h3>
              <p>Agencies handle bookings, scheduling, and client management professionally. This can provide a more structured and reliable service experience with clear policies and procedures.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quality Assurance</h3>
              <p>Reputable agencies typically have quality standards and vetting processes for their escorts. This can provide additional assurance about the professionalism and reliability of the service.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Multiple Options</h3>
              <p>Agencies often have multiple escorts available, giving you more choices and flexibility in terms of availability, appearance, and service types.</p>

              <h2 id="high-class-escorts" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-lg">3</span>
                </div>
                High-Class Escort Services
              </h2>

              <p>High-class <strong>Chennai escort services</strong> cater to clients looking for premium experiences with sophisticated, well-educated, and professionally presented companions.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sophisticated Companionship</h3>
              <p>These services focus on providing sophisticated companionship for business events, social functions, and high-end social situations. The escorts are typically well-educated, articulate, and comfortable in professional settings.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Premium Experience</h3>
              <p>High-class services often include premium amenities, luxury accommodations, and attention to detail that creates a truly exceptional experience. This includes professional presentation, excellent communication skills, and discretion.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business and Social Events</h3>
              <p>These escorts are particularly well-suited for business dinners, corporate events, social functions, and other situations where you need a sophisticated companion who can blend seamlessly into professional environments.</p>

              <h2 id="specialized-services" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">4</span>
                </div>
                Specialized Service Types
              </h2>

              <p>Beyond the main categories, there are specialized <strong>Chennai escort services</strong> that cater to specific needs and preferences:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Travel Companionship</h3>
              <p>Some escorts specialize in travel companionship, accompanying clients on business trips, vacations, or other travel. These services require escorts who are comfortable with extended time together and can adapt to different environments.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Event Escorts</h3>
              <p>Event escorts specialize in accompanying clients to specific events like weddings, parties, business functions, or social gatherings. They understand the requirements of different types of events and can adapt accordingly.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Intimate Services</h3>
              <p>Some services focus specifically on intimate companionship, providing more personal and intimate experiences. These services require clear communication about boundaries, expectations, and safety protocols.</p>

              <h2 id="choosing-right-type" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                How to Choose the Right Type
              </h2>

              <p>Choosing the right type of <strong>Chennai escort service</strong> depends on several factors:</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Your Needs and Preferences</h3>
              <p>Consider what you're looking for - companionship, social events, intimate services, or travel companionship. Different service types excel in different areas, so match your needs with the appropriate service type.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Budget Considerations</h3>
              <p>Different service types have different pricing structures. Independent escorts may offer more competitive rates, while high-class services typically command premium prices. Consider your budget and what you're willing to invest in the experience.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Time and Availability</h3>
              <p>Consider your schedule and how much time you need. Some services are better suited for short encounters, while others specialize in extended companionship or travel services.</p>

              <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">6</span>
                </div>
                Conclusion & Next Steps
              </h2>

              <p>Understanding the different types of <strong>Chennai escort services</strong> is the first step in finding the right experience for your needs. Each type offers unique advantages and caters to different preferences and situations.</p>

              <p>Take your time to consider what you're looking for, research your options, and choose a service type that aligns with your needs, budget, and expectations. Remember that the best experience comes from clear communication, mutual respect, and choosing a service that's right for you.</p>

              <p>Ready to explore your options? Check out our <Link href="/escorts" className="text-pink-600 hover:text-pink-700 underline">available escorts</Link> or learn more about our <Link href="/blog/how-to-find-perfect-chennai-escort-guide" className="text-pink-600 hover:text-pink-700 underline">selection process</Link>.</p>
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
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
                <p className="text-gray-600">Service Types</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">100%</h3>
                <p className="text-gray-600">Verified Services</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                <p className="text-gray-600">Available</p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Find the Perfect Service Type
              </span>
              <br />
              <span className="text-gray-900">for Your Chennai Escort Experience</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Contact us now and let us help you choose the right type of escort service. 
              We offer various service types to meet your specific needs and preferences.
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
                <span>All Service Types</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Professional Service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span>Customized Experience</span>
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

      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
