'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Home, Coffee, BookOpen } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export function HousewifeEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Heart,
      title: 'Mature Women Who Get It',
      description: 'You know what? There\'s something special about spending time with a woman who\'s been around the block. Our housewife escorts in Chennai aren\'t just young and pretty - they\'re experienced, they understand men, and they know how to make you feel like you matter. They\'ve lived life, they\'ve been in relationships, and they know what you really want.'
    },
    {
      icon: Shield,
      title: 'Safe, Verified, and Discreet',
      description: 'Look, we get it - you need to know you\'re safe and that your privacy is protected. Every woman in our agency is properly verified, background checked, and trained to be professional. We take your safety and discretion seriously because we know how important it is to you.'
    },
    {
      icon: Clock,
      title: 'Available When You Need Them',
      description: 'Whether it\'s a last-minute business dinner, a social event where you need a date, or just some company after a long day, our housewife escorts in Chennai are there when you need them. We understand your schedule is crazy, so we work around it.'
    },
    {
      icon: Home,
      title: 'Real Women, Real Experience',
      description: 'These aren\'t just escorts - they\'re real women who\'ve lived real lives. They know how to talk to you, how to listen, and how to make you feel comfortable. They understand relationships, they understand men, and they know how to make your time together actually mean something.'
    }
  ];

  const faqData = [
    {
      question: "Are the housewife escorts in Chennai safe and verified?",
      answer: "Yes, absolutely. We don't mess around with safety - every woman in our agency is properly verified, background checked, and we know who they are. Your safety and privacy are our top priorities. These are real women, not some random people we found online."
    },
    {
      question: "What's the difference between housewife escorts and regular escorts?",
      answer: "Well, it's like the difference between a fine wine and cheap beer. Housewife escorts in Chennai have lived life, they understand relationships, and they know how to make you feel comfortable. They're not just young and pretty - they're experienced, they can hold a conversation, and they actually care about making your time together meaningful."
    },
    {
      question: "How do I book a housewife escort in Chennai?",
      answer: "It's pretty simple - just give us a call or WhatsApp. We'll chat about what you're looking for, and we can usually arrange something same day if you need it. Everything is completely confidential, and we understand you might be calling from work or somewhere private."
    },
    {
      question: "Do you offer both incall and outcall services?",
      answer: "Sure do! Whether you want to meet at your place, a hotel, or come to ours, we can make it work. Our housewife escorts in Chennai are flexible and understand that sometimes you want the comfort of your own space, and sometimes you want to get out of the house."
    },
    {
      question: "What should I expect from a housewife escort?",
      answer: "Expect someone who actually knows how to be with a man. These women understand what you need - whether that's someone to talk to, someone to go out with, or someone to spend intimate time with. They're not just going through the motions - they genuinely want to make your time together enjoyable."
    },
    {
      question: "Are housewife escorts available 24/7?",
      answer: "Pretty much, yes. We understand that your schedule might be crazy, and sometimes you need someone at odd hours. Whether it's a late-night business dinner or you just need some company after a long day, we try to accommodate whenever possible."
    },
    {
      question: "How do you protect my privacy?",
      answer: "Your privacy is everything to us. We know you might be a business owner, professional, or just someone who values discretion. We never share your information with anyone, and our women are trained to be completely discreet. What happens stays between you and us."
    },
    {
      question: "Can housewife escorts accompany me to events?",
      answer: "Absolutely! These women are perfect for business dinners, social events, or any occasion where you need a date. They're well-mannered, can hold their own in conversation, and know how to represent you well. They're not going to embarrass you in front of your colleagues or friends."
    },
    {
      question: "What areas in Chennai do you cover?",
      answer: "We cover pretty much everywhere in Chennai - T. Nagar, Anna Nagar, OMR, ECR, Nungambakkam, Adyar, Velachery, Guindy, you name it. We make sure our women can get to you wherever you are, and they're always on time."
    },
    {
      question: "How do I know which housewife escort is right for me?",
      answer: "We'll chat with you about what you're looking for - your interests, what kind of personality you prefer, what you want to do together. We know our women well, so we can usually match you with someone who'll be a good fit. It's not just about looks - it's about finding someone you'll actually enjoy spending time with."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh K.",
      location: "T. Nagar, Chennai",
      service: "Housewife Escort",
      rating: 5,
      date: "2 days ago",
      text: "Honestly, I was skeptical at first. But the woman I met was amazing - she actually listened to me, understood what I was going through, and made me feel like I mattered. After a really tough week at work, she was exactly what I needed. These housewife escorts in Chennai really get it."
    },
    {
      id: 2,
      name: "Vikram S.",
      location: "Anna Nagar, Chennai",
      service: "Mature Companion",
      rating: 5,
      date: "1 week ago",
      text: "I've been using Lillybabe for a while now, and the housewife escort I met last week was fantastic. She was smart, funny, and actually knew how to have a real conversation. It wasn't just about the physical stuff - we talked about everything, and I felt like I was spending time with a real person, not just an escort."
    },
    {
      id: 3,
      name: "Arun M.",
      location: "OMR, Chennai",
      service: "Experienced Escort",
      rating: 5,
      date: "3 days ago",
      text: "Perfect for what I needed. I had a business dinner and needed someone who could hold her own in conversation with my clients. The housewife escort they sent was professional, charming, and made me look good. My clients were impressed, and I was comfortable the whole time."
    },
    {
      id: 4,
      name: "Suresh P.",
      location: "ECR, Chennai",
      service: "Housewife Escort",
      rating: 5,
      date: "5 days ago",
      text: "I've tried other escort services in Chennai, but there's something different about housewife escorts. They're not just young girls trying to figure things out - they're women who know what they're doing. The one I met was confident, experienced, and actually cared about making sure I had a good time."
    },
    {
      id: 5,
      name: "Kumar R.",
      location: "Nungambakkam, Chennai",
      service: "Mature Companion",
      rating: 5,
      date: "1 week ago",
      text: "What I like about housewife escorts in Chennai is that they understand men. They know when to talk, when to listen, and how to make you feel comfortable. The woman I met was genuine, not fake, and that made all the difference. Worth every rupee."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/gallery" className="hover:text-pink-600 transition-colors">
                Gallery
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-pink-600 font-medium">Housewife Escorts Chennai</span>
            </div>
          </div>
        </nav>

        {/* Creative Portfolio Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 text-white overflow-hidden">
          {/* Creative Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.3),transparent_50%)]"></div>
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
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                    <span className="block bg-gradient-to-r from-pink-400 via-rose-500 to-pink-600 bg-clip-text text-transparent">
                      Housewife
                    </span>
                    <span className="block text-white">
                      Escorts
                    </span>
                    <span className="block text-3xl lg:text-5xl text-pink-200">
                      in Chennai
                    </span>
                  </h1>
                </motion.div>

                {/* Description */}
                <motion.p 
                  className="text-xl text-pink-100 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Looking for <strong><Link href="/housewife-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">housewife escorts in Chennai</Link></strong>? You've come to the right place. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we know that sometimes you want more than just a pretty face - you want someone who gets it, who understands what you're looking for, and who knows how to make you feel truly comfortable and appreciated.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <Link
                    href="tel:+918121426651"
                    className="group relative inline-flex items-center gap-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <Phone className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">Call Now</span>
                  </Link>
                  <Link
                    href="https://wa.me/918121426651"
                    className="group relative inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <MessageCircle className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                    <span className="relative z-10">WhatsApp</span>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Visual - Hero Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Main Hero Image */}
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-4.avif"
                    alt="Beautiful Housewife Escorts in Chennai"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Mature & Experienced</h3>
                    <p className="text-pink-200">Real-life wisdom and genuine warmth</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="py-12 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Our <span className="text-pink-600">Housewife Escorts</span> Gallery
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse through our collection of beautiful, mature, and experienced housewife escorts in Chennai. Each one brings her own unique charm and life experience.
              </p>
            </motion.div>
            {/* Combined Portfolio Gallery */}
            <div className="mb-8">
              <RandomImageGallery 
                count={12} 
                imageHeight="h-64 md:h-80" 
                showRefreshButton={true}
              />
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full mb-4">
                <span className="text-sm font-medium text-pink-700">Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Why Choose Our <span className="text-pink-600">Housewife Escorts</span>?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the difference that maturity, experience, and real-life wisdom can make. Our housewife escorts bring genuine warmth and understanding to every encounter.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content Sections */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-rose-200/30 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section 1: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    Why <span className="text-pink-600">Housewife Escorts in Chennai</span> Are Different
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Look, I'll be honest with you - there's a big difference between spending time with a young escort and a housewife escort in Chennai. These women have been around, they've lived life, and they know what it's like to be in a real relationship. They understand men, they know what you're looking for, and they're not going to waste your time with games or drama.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our housewife escorts in Chennai aren't just pretty faces - they're smart, they can hold a conversation, and they actually care about making sure you have a good time. They know how to listen, they know how to make you feel comfortable, and they understand that sometimes you just want someone who gets it without having to explain everything.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you need someone for a business dinner, want to go out for the evening, or just need some company after a long day, housewife escorts in Chennai know how to be what you need. They're professional when they need to be, fun when you want them to be, and they understand that your privacy and discretion are important.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-1.avif"
                    alt="Housewife Escorts Experience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-2.avif"
                    alt="Mature and Experienced Companions"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Mature Women</span> Who Know What They're Doing
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Here's the thing - our housewife escorts in Chennai have been doing this for a while, and they're good at it. They know what men want, they know how to make you feel comfortable, and they're not going to waste your time. Whether you want someone to talk to, someone to go out with, or someone to spend intimate time with, they get it.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These women are confident, they know who they are, and they're not trying to figure things out on your dime. They've learned how to read a situation, how to make you feel good, and how to be exactly what you need when you need it. It's not rocket science - it's experience, and that makes all the difference.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Need someone for a business dinner? They'll be professional and charming. Want to go out for the evening? They'll be fun and engaging. Just want some company? They'll be exactly that - good company. Our housewife escorts in Chennai know how to be what you need, when you need it, without any drama or complications.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">They Actually Listen</span> and Understand
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      You know what's refreshing? Our housewife escorts in Chennai actually listen to you. They can tell when you've had a rough day, when you're stressed about work, or when you just need someone to talk to. They've been around long enough to understand men, and they know how to make you feel heard and appreciated.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These women can talk about more than just the weather. They've lived life, they have stories to tell, and they're genuinely interesting to talk to. Whether you want to discuss business, politics, or just share what's on your mind, they can hold their own in a conversation. They're not just sitting there nodding and smiling - they're actually engaged.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Sometimes you just need someone who gets it, you know? Someone who understands what you're going through without you having to explain everything. Our housewife escorts in Chennai know how to be that person. They know when to talk, when to listen, and how to make you feel like you're not alone in whatever you're dealing with.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-3.avif"
                    alt="Emotional Intelligence and Understanding"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife.avif"
                    alt="Real-Life Experience and Wisdom"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Real Women</span> with Real Experience
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Here's what sets our housewife escorts in Chennai apart - they're real women who've lived real lives. They've been in relationships, they've dealt with life's ups and downs, and they understand what it means to care about someone. This isn't just a job for them - they actually want to make sure you have a good time and feel good about yourself.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      You can tell the difference when you're with someone who's experienced versus someone who's just starting out. Our housewife escorts in Chennai know how to make you feel comfortable, they know how to read the room, and they know how to be exactly what you need. They've learned from life, and that experience shows in everything they do.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you want someone to talk to, someone to go out with, or someone to spend intimate time with, housewife escorts in Chennai know how to be that person. They understand that it's not just about the physical stuff - it's about making a real connection, even if it's just for a few hours. They know how to make you feel like you matter, and that's what makes all the difference.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-5.avif"
                    alt="Professional and Discreet Service"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Professional</span> and Discreet
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We understand that discretion is everything. Our housewife escorts in Chennai know how to be professional when they need to be, whether that's at a business dinner, a social event, or just meeting you somewhere public. They know how to dress appropriately, how to behave, and how to make you look good in front of other people.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These women understand boundaries, they know what's appropriate and what's not, and they're not going to embarrass you or put you in an awkward situation. They've been doing this long enough to know how to read a room and adapt to whatever situation you're in.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether you need someone for a corporate event, a family gathering, or just a quiet dinner, our housewife escorts in Chennai know how to be exactly what you need. They're not going to draw attention to themselves in the wrong way, and they're definitely not going to make you regret bringing them along.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 6: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">No Drama</span>, No Games
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Here's what I love about our housewife escorts in Chennai - they don't play games. They're not going to waste your time with drama, they're not going to be difficult to deal with, and they're definitely not going to make you jump through hoops. They're straightforward, they know what they're doing, and they want to make sure you have a good time.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These women are mature enough to know that your time is valuable, and they're not going to mess around with it. They'll show up on time, they'll be ready to go, and they'll be exactly what you need without any complications or surprises. It's refreshing, honestly.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      You don't have to worry about them being flaky, unreliable, or difficult to communicate with. Our housewife escorts in Chennai are professional, they're dependable, and they understand that when you book them, you're counting on them to be there and to be what you need. It's that simple.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-6.avif"
                    alt="No Drama, No Games"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>

            {/* Section 7: Left Image > Right Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-7.avif"
                    alt="Perfect for Business and Social Events"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Perfect</span> for Business and Social Events
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Need someone for a business dinner? A corporate event? A social gathering? Our housewife escorts in Chennai are perfect for these situations. They know how to dress appropriately, they can hold their own in conversation, and they won't embarrass you in front of your colleagues or clients.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      These women understand business etiquette, they know how to network, and they can be charming and engaging without being inappropriate. They're not going to get drunk, they're not going to say the wrong thing, and they're definitely not going to make you look bad in front of important people.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Whether it's a formal dinner, a cocktail party, or a business conference, our housewife escorts in Chennai know how to be the perfect companion. They'll make you look good, they'll help you network, and they'll make sure you have a good time while maintaining your professional image.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 8: Right Image > Left Content */}
            <motion.div
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                    <span className="text-pink-600">Worth Every Penny</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Look, I know escort services can be expensive, but with our housewife escorts in Chennai, you're getting what you pay for. These women are experienced, they're professional, and they know how to make your time together worth every rupee you spend. You're not just paying for their time - you're paying for their experience, their discretion, and their ability to make you feel good.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      When you compare it to going out to bars, trying to meet people, or dealing with dating apps, this is actually a pretty good deal. You know what you're getting, you know when you're getting it, and you know it's going to be good. No wasted time, no disappointment, no drama.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Our housewife escorts in Chennai understand that you're spending your hard-earned money, and they want to make sure you feel like it was worth it. They're not going to rush you, they're not going to be clock-watchers, and they're definitely not going to leave you feeling like you wasted your money. They want you to come back, and they want you to recommend them to your friends.
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/housewife-8.avif"
                    alt="Worth Every Penny"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Location-Specific Content Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Cover <span className="text-pink-600">All of Chennai</span>
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                No matter where you are in Chennai, we've got you covered. Our housewife escorts are available in <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, <strong>Adyar</strong>, <strong>Velachery</strong>, <strong>Guindy</strong>, and pretty much anywhere else you might be. Whether you're in the city center or out in the IT corridor, we can get someone to you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'T. Nagar', description: 'Right in the heart of Chennai - easy to get to from anywhere' },
                { name: 'Anna Nagar', description: 'Upscale area with great restaurants and hotels' },
                { name: 'OMR', description: 'IT corridor - perfect for busy professionals' },
                { name: 'ECR', description: 'Beach road with nice hotels and privacy' },
                { name: 'Nungambakkam', description: 'Commercial area with lots of options' },
                { name: 'Adyar', description: 'Quiet residential area with maximum discretion' },
                { name: 'Velachery', description: 'IT hub - we know the area well' },
                { name: 'Guindy', description: 'Business district with corporate-friendly locations' }
              ].map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{location.name}</h3>
                      <p className="text-gray-600 text-sm">{location.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900 relative overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-2xl"></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                What Our <span className="text-pink-300">Clients Say</span>
              </h2>
              <p className="text-pink-100 max-w-3xl mx-auto text-lg">
                Real feedback from clients who booked our <strong><Link href="/housewife-escorts-in-chennai" className="text-pink-300 hover:text-pink-200 transition-colors">housewife escorts in Chennai</Link></strong>. See why people choose <strong><Link href="/" className="text-pink-300 hover:text-pink-200 transition-colors">Lillybabe</Link></strong> for their escort needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-pink-300/50 transition-all duration-500 hover:bg-white/15"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Service Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-pink-200">{testimonial.service}</span>
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-200 mb-8 leading-relaxed text-lg relative">
                      <div className="absolute -top-2 -left-2 text-6xl text-pink-400/20 font-serif">"</div>
                      <p className="relative z-10 italic">
                        {testimonial.text}
                      </p>
                      <div className="absolute -bottom-4 -right-2 text-6xl text-rose-400/20 font-serif">"</div>
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold">
                          {testimonial.name}
                          <span className="text-pink-200 text-sm ml-2">{testimonial.location}</span>
                        </div>
                        <div className="text-gray-400 text-xs mt-1">{testimonial.date}</div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Indicators */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-8 text-white">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">500+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-rose-400">4.9/5</div>
                  <div className="text-sm text-gray-300">Average Rating</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">24/7</div>
                  <div className="text-sm text-gray-300">Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Frequently Asked <span className="text-pink-600">Questions</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our housewife escort services in Chennai.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-pink-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-rose-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <button
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-300 relative z-10"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-pink-600 transition-colors duration-300">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-pink-500 transition-colors duration-300 flex-shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 pb-6">
                          <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still Have Questions?
              </h3>
              <p className="text-pink-100 mb-6 max-w-2xl mx-auto">
                Our friendly team is here to help! Contact us directly for personalized assistance and immediate answers to your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+918121426651"
                  className="inline-flex items-center gap-3 bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Link>
                <Link
                  href="https://wa.me/918121426651"
                  className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
    </>
  );
}