'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Heart, Star, Users, CheckCircle, Send, User, FileText, Sparkles, Zap, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ContactSEO } from '@/components/seo/contact-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';

export default function ContactUsClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/contact-us', 'Contact Us - Chennai Escorts Service');
    trackEvent('page_view', 'contact', 'contact_page');
  }, []);

  // Track contact interactions
  const handleContactClick = (contactType: string, method: string) => {
    trackEvent('click', 'contact_method', contactType);
    trackEvent('engagement', 'contact_interaction', method);
  };

  // Track form interactions
  const handleFormInteraction = (action: string, field?: string) => {
    trackEvent('form_interaction', action, field || 'contact_form');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    handleFormInteraction('input_change', name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    handleFormInteraction('form_submit_attempt');

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      trackEvent('form_submission', 'contact_form', 'success');
      trackEvent('conversion', 'contact_form', 'form_submitted');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      trackEvent('form_submission', 'contact_form', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      contact: '+91 81214 26651',
      action: 'tel:+918121426651',
      color: 'bg-green-500'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick and easy messaging',
      contact: '+91 81214 26651',
      action: 'https://wa.me/918121426651',
      color: 'bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us a detailed message',
      contact: 'info@lillybabe.com',
      action: 'mailto:info@lillybabe.com',
      color: 'bg-blue-500'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: '100% Safe & Secure',
      description: 'Your privacy and safety are our top priorities'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'We\'re here whenever you need us'
    },
    {
      icon: Heart,
      title: 'Genuine Care',
      description: 'Real people who genuinely care about your happiness'
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Only the most beautiful and professional escorts'
    }
  ];

  const testimonials = [
    {
      name: 'Rahul',
      location: 'Chennai',
      rating: 5,
      comment: 'Amazing service! The team was professional and the girl was exactly as described. Highly recommended!'
    },
    {
      name: 'Arun',
      location: 'Bangalore',
      rating: 5,
      comment: 'Best escort service in Chennai. Discreet, professional, and the girls are absolutely stunning.'
    },
    {
      name: 'Vikram',
      location: 'Mumbai',
      rating: 5,
      comment: 'LillyBabe exceeded my expectations. The booking process was smooth and the experience was unforgettable.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* SEO Components */}
      <ContactSEO />
      
      {/* Header Navigation */}
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-gray-200 py-3" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link href="/" className="hover:text-pink-600 transition-colors" itemProp="item">
                <span itemProp="name">Home</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            <span className="text-gray-400" aria-hidden="true">/</span>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span className="text-pink-600 font-medium" itemProp="name">Contact Us</span>
              <meta itemProp="position" content="2" />
            </li>
          </ol>
        </div>
      </nav>
      
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
                <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                    Contact
                  </span>
                  <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-1 sm:mt-2">
                    LillyBabe
                  </span>
                  <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-2 sm:mt-4">
                    We're Here for You
                  </span>
                </h1>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                You know what? We're not just another escort service - we're your friends who happen to be amazing companions! Ready to have an amazing time? Just pick your favorite way to reach us!
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
                  className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden min-h-[44px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse relative z-10" />
                  <span className="relative z-10">Let's Chat!</span>
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 group-hover:animate-bounce relative z-10" />
                </button>
                
                <a
                  href="#contact-methods"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 text-white/80 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-base sm:text-lg hover:bg-white/10 min-h-[44px]"
                >
                  <span>Contact Options</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
              
            </motion.div>
            
            {/* Right Visual - Contact Image */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Image */}
              <motion.div 
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                  <img 
                    src="/images/contact.avif" 
                    alt="Contact LillyBabe - Premium Chennai Escorts Service"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                {/* Overlay with stats */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white">5min</div>
                      <div className="text-xs text-gray-300">Response</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-300">Available</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">100%</div>
                      <div className="text-xs text-gray-300">Secure</div>
                    </div>
                  </div>
                </div>
              </motion.div>
                
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LillyBabe?
            </h2>
            <p className="text-lg text-gray-600">
              We're not just another agency - we're your friends!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section id="contact-methods" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full mb-6">
              <MessageCircle className="h-5 w-5 text-white" />
              <span className="text-white font-bold text-lg">CONTACT METHODS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Choose Your <span className="text-green-500">Preferred</span> Way to <span className="text-purple-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              You know what's great? We're available 24/7 through multiple channels for your convenience. Pick whatever feels most comfortable for you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-6`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                <p className="text-lg font-semibold text-pink-600">
                  {method.contact}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Have a question? We'd love to hear from you
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="support">Support Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center"
                >
                  <MessageCircle className="w-5 h-5 text-red-600 mr-3" />
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                </motion.div>
              )}

              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center mx-auto ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-pink-500 hover:bg-pink-600 text-white hover:scale-105'
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story
            </h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let me tell you a little story about our Chennai Escorts Service. Back in 2010, we started with a simple idea - what if we could create a place where people could find genuine companionship without all the usual hassles?
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Fast forward to today, and LillyBabe has become more than just another Chennai Escorts agency - we're your friends who happen to be amazing companions. We don't just match you with beautiful Chennai Escorts; we connect you with real people who genuinely care about making your time special.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                No advance payments (because trust matters), only respectful clients (because respect is mutual), and complete discretion (because your privacy is sacred to us). We're not perfect, but we're real, and that's what makes our Chennai Escorts Service different.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from real people
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us now and let us help you find the perfect companion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/918121426651"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp Us Now
              </motion.a>
              <motion.a
                href="tel:+918121426651"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
