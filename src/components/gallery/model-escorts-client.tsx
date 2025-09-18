'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Globe, Coffee, BookOpen, Briefcase, UserCheck, Flower2, Home, Mountain, Camera, Palette, Crown as CrownIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { trackEvent, trackPageView } from '@/components/analytics';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';

export function ModelEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('/model-escorts-in-chennai', 'Model Escorts in Chennai | Fashion Models & Professional Companions');
    trackEvent('page_view', 'category_page', 'model_escorts');
  }, []);

  // Track category-specific interactions
  const handleCategoryInteraction = (action: string, element: string) => {
    trackEvent('category_interaction', action, element);
    trackEvent('engagement', 'model_escorts_page', `${action}_${element}`);
  };

  // Track CTA interactions
  const handleCTAClick = (ctaType: string) => {
    trackEvent('click', 'cta_button', ctaType);
    trackEvent('conversion', 'model_escorts_cta', ctaType);
  };
  const features = [
    {
      icon: CrownIcon,
      title: 'Professional Model Experience',
      description: (
        <>
          Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> have genuine professional modeling experience - they've worked in fashion shows, photoshoots, and commercial modeling. This experience gives them confidence, poise, and the ability to present themselves beautifully in any situation. When you're with a model escort, you're getting someone who knows how to be in the spotlight.
        </>
      )
    },
    {
      icon: Camera,
      title: 'Fashion Sense & Styling',
      description: (
        <>
          These women understand fashion, they know what looks good, and they can help you look your best too. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> are like having a personal stylist and model rolled into one. They know how to dress for any occasion, they understand current trends, and they can make any event look glamorous.
        </>
      )
    },
    {
      icon: SparklesIcon,
      title: 'Sophisticated Presentation',
      description: (
        <>
          Model escorts know how to carry themselves with grace and confidence. They understand social etiquette, they know how to behave in high-end situations, and they can handle any social event with sophistication. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> bring that professional model confidence to every meeting.
        </>
      )
    },
    {
      icon: Award,
      title: 'Runway & Photoshoot Ready',
      description: (
        <>
          These women are used to being in front of cameras and audiences. They know how to pose, how to work with photographers, and how to get the best results. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> understand lighting, angles, and how to present themselves beautifully in any situation.
        </>
      )
    }
  ];

  const faqData = [
    {
      question: "What makes model escorts in Chennai different from regular escorts?",
      answer: "Model escorts in Chennai are professional fashion models with runway experience, photoshoot backgrounds, and sophisticated presentation skills. They understand fashion, know how to carry themselves in any social situation, and bring that professional model confidence to every meeting. They're used to being in the spotlight and know how to make you look good too."
    },
    {
      question: "Do model escorts have professional modeling experience?",
      answer: "Yes, all our model escorts in Chennai have genuine professional modeling experience. They've worked in fashion shows, photoshoots, and commercial modeling. This experience gives them confidence, poise, and the ability to present themselves beautifully in any situation. They know how to dress, how to pose, and how to make any event look glamorous."
    },
    {
      question: "Are model escorts more expensive than regular escorts?",
      answer: "Model escorts in Chennai are premium companions, and their rates reflect their professional modeling background and sophisticated presentation. But when you consider what you're getting - professional model experience, fashion sense, confidence, and that special something that models have - it's worth every rupee. They're an investment in having an unforgettable, glamorous experience."
    },
    {
      question: "What kind of events are model escorts perfect for?",
      answer: "Model escorts in Chennai are perfect for high-end events, business dinners, fashion shows, corporate parties, and any occasion where you want to make a statement. They know how to dress appropriately, they understand social etiquette, and they can handle any situation with grace and confidence. They're also great for photoshoots and any event where presentation matters."
    },
    {
      question: "Do model escorts understand fashion and styling?",
      answer: "Absolutely. Our model escorts in Chennai have extensive knowledge of fashion, styling, and presentation. They know what looks good, they understand current trends, and they can help you look your best too. They're like having a personal stylist and model rolled into one. They know how to dress for any occasion and can make any event look glamorous."
    },
    {
      question: "How do I book a model escort in Chennai?",
      answer: "Booking is simple - just call us or send a message. We'll discuss your requirements and help you find the perfect model escort for your needs. All bookings are handled with complete discretion and professionalism. We understand the importance of privacy and will ensure everything is confidential. You can also specify if you have any particular preferences or requirements."
    },
    {
      question: "Are model escorts available for photoshoots?",
      answer: "Yes, many of our model escorts in Chennai are available for photoshoots and modeling assignments. They have professional modeling experience and know how to pose, how to work with photographers, and how to get the best results. They understand lighting, angles, and how to present themselves beautifully in front of the camera."
    },
    {
      question: "What should I expect from a model escort?",
      answer: "Expect someone who actually knows how to be in the spotlight and make you look good too. These women understand presentation, they know how to dress, and they have that professional model confidence that makes any event look glamorous. They're not just going through the motions - they genuinely want to make your time together unforgettable and sophisticated."
    },
    {
      question: "Do model escorts offer both incall and outcall services?",
      answer: "Yes, our model escorts in Chennai are flexible and can provide both incall and outcall services. Whether you want to meet at your place, a hotel, or come to theirs, they can accommodate your preferences. They understand that comfort and convenience are important for a great experience, and they're used to adapting to different environments."
    },
    {
      question: "Are model escorts more confident and sophisticated?",
      answer: "Yes, absolutely. Model escorts in Chennai are naturally more confident and sophisticated because of their professional modeling background. They're used to being in the spotlight, they know how to handle attention, and they understand how to present themselves beautifully in any situation. This confidence and sophistication makes them perfect companions for high-end events and sophisticated occasions."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Arjun S.",
      location: "Anna Nagar, Chennai",
      service: "Model Escort",
      rating: 5,
      date: "2 days ago",
      text: "The model escort I met was absolutely stunning and incredibly professional. Her fashion sense was impeccable, and she knew exactly how to carry herself at the corporate event. Everyone was asking about her, and she made me look great too. Her modeling experience really showed in her confidence and presentation."
    },
    {
      id: 2,
      name: "Rahul K.",
      location: "OMR, Chennai",
      service: "Model Escort",
      rating: 5,
      date: "3 days ago",
      text: "I had a photoshoot with a model escort, and she was amazing. She knew exactly how to pose, how to work with the photographer, and how to get the best results. She understood lighting, angles, and how to present herself beautifully in front of the camera. She made the photoshoot fun and easy, and I got some great results."
    },
    {
      id: 3,
      name: "Vijay K.",
      location: "Tambaram, Chennai",
      service: "Model Escort",
      rating: 5,
      date: "2 weeks ago",
      text: "The model escort I met was absolutely stunning and incredibly professional. Her fashion sense was impeccable, and she knew exactly how to carry herself at the corporate event. Everyone was asking about her, and she made me look great too. Her modeling experience really showed in her confidence and presentation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <CriticalCSS />
      <div className="min-h-screen bg-white">
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
            <span className="text-pink-600 font-medium">Model Escorts Chennai</span>
          </div>
        </div>
      </nav>
      
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Creative Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                  <span className="text-pink-600">Model</span><br />
                  <span className="text-white">Escorts</span><br />
                  <span className="text-purple-400">in Chennai</span>
            </h1>
              </motion.div>
            
              {/* Description */}
            <motion.p
                className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
                Chennai's most <strong><Link href="/model-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">model escorts</Link></strong> who bring professional fashion modeling experience to every meeting. These stunning companions offer runway confidence, fashion expertise, and that special model presentation. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we connect you with verified model escorts who understand what sophisticated clients really need.
            </motion.p>
            
              {/* CTA Buttons */}
            <motion.div
                className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="tel:+918121426651"
                  className="group bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now: +91 81214 26651
              </Link>
              <Link
                href="https://wa.me/918121426651"
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp
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
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                {/* Main Hero Image */}
                <Image
                  src="/images/model.avif"
                  alt="Professional Model Escort"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-indigo-600/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Stunning <span className="text-pink-600">Model Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet our professional <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> - each one bringing fashion expertise, runway experience, and sophisticated presentation to every meeting. These women know how to make any event look glamorous.
            </p>
          </motion.div>
          
          <RandomImageGallery />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Professional Models</span> Meet <span className="text-pink-600">Sophisticated Elegance</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Look, there's something special about <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> - they bring that professional modeling experience and sophisticated elegance that you just can't find anywhere else. These women understand fashion, carry themselves with confidence, and know how to make any event look absolutely glamorous.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-pink-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                  <div className="text-gray-600 leading-relaxed">
                  {feature.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Section 1 */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Professional Model Experience That <span className="text-pink-600">Impresses</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> have genuine professional modeling experience - they've worked in fashion shows, photoshoots, and commercial modeling. This experience gives them confidence, poise, and the ability to present themselves beautifully in any situation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When you're with a model escort, you're getting someone who knows how to be in the spotlight. They understand presentation, they know how to dress, and they have that professional model confidence that makes any event look glamorous. They're not just going through the motions - they genuinely want to make your time together unforgettable and sophisticated.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women are used to being in front of cameras and audiences. They know how to pose, how to work with photographers, and how to get the best results. They understand lighting, angles, and how to present themselves beautifully in any situation.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/model1.avif"
                  alt="Professional Model Experience - Model Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 2 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/model2.avif"
                  alt="Fashion Sense and Styling - Model Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Fashion Sense & Styling That <span className="text-pink-600">Elevates</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These women understand fashion, they know what looks good, and they can help you look your best too. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> are like having a personal stylist and model rolled into one.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                They know how to dress for any occasion, they understand current trends, and they can make any event look glamorous. Whether it's a business dinner, a fashion show, or a corporate party, they'll know exactly what to wear and how to present themselves beautifully.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                These women have extensive knowledge of fashion, styling, and presentation. They know what looks good, they understand current trends, and they can help you look your best too. They're like having a personal stylist and model rolled into one.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 3 */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Sophisticated Presentation That <span className="text-pink-600">Captivates</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Model escorts know how to carry themselves with grace and confidence. They understand social etiquette, they know how to behave in high-end situations, and they can handle any social event with sophistication. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> bring that professional model confidence to every meeting.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These women are naturally more confident and sophisticated because of their professional modeling background. They're used to being in the spotlight, they know how to handle attention, and they understand how to present themselves beautifully in any situation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This confidence and sophistication makes them perfect companions for high-end events and sophisticated occasions. They know how to make any event look glamorous and can handle any social situation with grace and confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/model3.avif"
                  alt="Sophisticated Presentation - Model Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section 4 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage
                  src="/images/model4.avif"
                  alt="Runway and Photoshoot Ready - Model Escorts in Chennai"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Runway & Photoshoot <span className="text-pink-600">Ready</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                These women are used to being in front of cameras and audiences. They know how to pose, how to work with photographers, and how to get the best results. Our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> understand lighting, angles, and how to present themselves beautifully in any situation.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Many of our model escorts in Chennai are available for photoshoots and modeling assignments. They have professional modeling experience and know how to pose, how to work with photographers, and how to get the best results. They understand lighting, angles, and how to present themselves beautifully in front of the camera.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need someone for a professional photoshoot, a fashion show, or just want to experience that model confidence and presentation, our model escorts are ready to deliver exceptional results and make any occasion look glamorous.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location-Specific Content Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Model Escorts</span> Available Across Chennai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our stunning <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong> are available in all major areas of the city. Whether you're in the heart of the city or the outskirts, we can connect you with professional fashion models wherever you are.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { area: "T. Nagar", description: "In the heart of Chennai's shopping district, our model escorts understand fashion and can help you look your best in this vibrant commercial area." },
              { area: "Anna Nagar", description: "In this upscale residential area, our model escorts provide sophisticated and professional service with impeccable fashion sense." },
              { area: "OMR", description: "Along the IT corridor, our model escorts are perfect for business professionals who appreciate style, sophistication, and professional presentation." },
              { area: "ECR", description: "Near the beautiful beaches, our model escorts can be your perfect companions for glamorous coastal events and sophisticated evenings." },
              { area: "Nungambakkam", description: "In this commercial hub, our model escorts understand the business environment and can provide sophisticated companionship for any occasion." },
              { area: "Adyar", description: "In this cultural center, our model escorts appreciate the arts and can provide intellectually stimulating and stylish companionship." }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-pink-600 rounded-full mb-4 mx-auto">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {location.area}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {location.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Our Clients Say About <span className="text-pink-600">Model Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from our satisfied clients who have experienced the professional modeling expertise and sophisticated presentation of our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-pink-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">500+</div>
                <div className="text-sm text-pink-100">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300">4.9/5</div>
                <div className="text-sm text-purple-100">Average Rating</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-300">24/7</div>
                <div className="text-sm text-indigo-100">Support</div>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300">100%</div>
                <div className="text-sm text-pink-100">Discrete</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Frequently Asked Questions About <span className="text-pink-600">Model Escorts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Got questions about our <strong><Link href="/model-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">model escorts in Chennai</Link></strong>? We've got answers. Here are the most common questions we receive from our clients.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-pink-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`h-5 w-5 text-pink-600 transition-transform duration-200 ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Ready to Meet Our Stunning <span className="text-pink-300">Model Escorts</span>?
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed max-w-3xl mx-auto mb-12">
              Don't wait - our professional <strong><Link href="/model-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">model escorts in Chennai</Link></strong> are ready to provide you with an unforgettable, glamorous experience. Book now and discover the sophistication, style, and confidence that only professional models can offer.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                href="tel:+918121426651"
                className="group bg-white hover:bg-pink-50 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now: +91 81214 26651
              </Link>
              <Link
                href="https://wa.me/918121426651"
                className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp
              </Link>
            </motion.div>
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