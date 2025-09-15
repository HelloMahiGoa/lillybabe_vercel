'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Star, Users, CheckCircle, Phone, MessageCircle, MapPin, Award, Eye } from 'lucide-react';
import { ChennaiEscortGirlsSEO } from '@/components/seo/chennai-escort-girls-seo';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export default function ChennaiEscortGirlsClient() {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/api/profiles-list?limit=12');
        const data = await response.json();
        setProfiles(data.profiles || []);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const features = [
    {
      icon: Heart,
      title: 'Real Girls, Real People',
      description: 'We personally know every single girl - they\'re not just profiles, they\'re amazing people who genuinely care about making your time special.'
    },
    {
      icon: Clock,
      title: 'We\'re Here When You Need Us',
      description: 'Whether it\'s 2 AM or 2 PM, we\'re just a call away. Life doesn\'t follow a schedule, and neither do we!'
    },
    {
      icon: Shield,
      title: 'No Pressure, No Worries',
      description: 'We believe in trust - you only pay when you\'re completely satisfied. No advance payments, no hidden charges, just honest service.'
    },
    {
      icon: Star,
      title: 'Quality That Speaks for Itself',
      description: 'We don\'t just say we\'re the best - our happy clients tell everyone about us. That\'s the kind of quality we\'re proud of!'
    }
  ];


  const promises = [
    {
      title: 'NO BULLSHIT',
      description: 'Only Real Chennai Escort Girls'
    },
    {
      title: 'NO ADVANCE PAYMENT',
      description: 'Pay After Meeting'
    },
    {
      title: 'NO ADVANCE BOOKING',
      description: 'Instant Chennai Escorts'
    },
    {
      title: 'NO FAKE PHOTOS',
      description: '100% Real Chennai Escorts'
    }
  ];

  const stats = [
    {
      number: '500+',
      label: 'Beautiful Girls',
      icon: Users
    },
    {
      number: '10+',
      label: 'Years of Trust',
      icon: Award
    },
    {
      number: '24/7',
      label: 'Always Here',
      icon: Clock
    },
    {
      number: '100%',
      label: 'Happy Clients',
      icon: Heart
    }
  ];

  const escortTypes = [
    {
      name: 'Independent Escorts',
      description: 'Free-spirited and confident girls who love making your time special',
      image: '/images/independent-1.jpg',
      link: '/escorts'
    },
    {
      name: 'High Class Escorts',
      description: 'Sophisticated and elegant companions for premium experiences',
      image: '/images/sections/premium-escorts.jpg',
      link: '/escorts'
    },
    {
      name: 'Tamil Escorts',
      description: 'Beautiful Tamil girls with authentic charm and grace',
      image: '/images/tamil.webp',
      link: '/escorts'
    },
    {
      name: 'Russian Escorts',
      description: 'Exotic Russian beauties bringing international charm',
      image: '/images/russian1.webp',
      link: '/escorts'
    },
    {
      name: 'Model Escorts',
      description: 'Professional models with stunning looks and style',
      image: '/images/model.webp',
      link: '/escorts'
    },
    {
      name: 'Celebrity Escorts',
      description: 'Celebrity look-alikes for VIP experiences',
      image: '/images/celebrity.webp',
      link: '/celebrity-escorts'
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
      <ChennaiEscortGirlsSEO />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="text-6xl">✨</div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chennai <span className="text-pink-600">Escorts Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Looking for genuine Chennai Escorts? We're your trusted friends who happen to be amazing companions!
            </p>
            <p className="text-lg text-gray-600 mb-8">
              You know what makes our Chennai Escorts Service different? We actually care about making your time special. Whether you're looking for someone to chat with, accompany you to events, or just make your evening amazing - we've got real Chennai Escorts who genuinely want to make you happy. No fake profiles, no pressure, just honest, beautiful companionship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/918121426651?text=Hi%2C%20I%20am%20looking%20escorts%20service%20in%20chennai"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Start Chatting!
              </motion.a>
              <motion.a
                href="#todays-profiles"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Today's Profiles
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Story: From Dreams to Reality
            </h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Let me tell you a little story about our <strong>Chennai Escorts Service</strong>. Back in 2010, we started with a simple idea - what if we could create a place where people could find genuine companionship without all the usual hassles? Fast forward to today, and LillyBabe has become more than just another Chennai Escorts agency - we're your friends who happen to be amazing companions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We don't just match you with beautiful <strong>Chennai Escorts</strong>; we connect you with real people who genuinely care about making your time special. No advance payments (because trust matters), only respectful clients (because respect is mutual), and complete discretion (because your privacy is sacred to us). We're not perfect, but we're real, and that's what makes our <strong>Chennai Escorts Service</strong> different.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <motion.a
                  href="https://lillybabe.com/escort-girls-chennai.php"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Tell Me More
                </motion.a>
                <motion.a
                  href="https://wa.me/918121426651"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Chat!
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-pink-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Promise to You for Chennai Escorts Service
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 p-6 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-lg font-bold text-pink-600 mb-2">
                  {promise.title}
                </h3>
                <p className="text-gray-700 font-medium">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Available Profiles Section */}
      <section id="todays-profiles" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Check Our Today's Available Profiles
            </h2>
            <p className="text-lg text-gray-600">
              Real girls, real photos, real experiences
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {profiles.map((profile, index) => (
                <motion.div
                  key={profile.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {profile.featured && (
                    <div className="bg-pink-500 text-white text-center py-2 text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="h-64 overflow-hidden">
                    <img
                      src={profile.image || '/images/models/escort-girl-2.webp'}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(profile.rating || 4.5)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {profile.rating || 4.5}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        Available
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {profile.name}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{profile.age || 25} years</span>
                      <span>{profile.nationality || 'Indian'}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-green-600 font-semibold">
                        {profile.response_rate || 90}% Response
                      </span>
                      <span className="text-pink-600 font-bold">
                        ₹{profile.pricing?.['1 Shot'] || '12,000'} / hour
                      </span>
                    </div>
                    
                    {/* Views and Reviews */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3 text-blue-500" />
                        <span>{profile.views_count || 0} views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-500" />
                        <span>{profile.reviews_count || 0} reviews</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={`https://wa.me/918121426651?text=Hi%2C%20I%20am%20interested%20in%20${profile.name}`}
                        className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold text-center"
                      >
                        View Profile
                      </a>
                      <a 
                        href={`https://wa.me/918121426651?text=Hi%2C%20I%20want%20to%20book%20${profile.name}`}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors text-sm font-semibold text-center"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking Guide Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Perfect Chennai Escorts Booking Guide
            </h2>
            <p className="text-lg text-gray-600">
              Super easy booking process - just 4 simple steps!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Say Hello to Us!",
                description: "Just send us a WhatsApp message or give us a call - we're here anytime you need us!"
              },
              {
                step: "2", 
                title: "Pick Your Perfect Girl!",
                description: "Take a look at our beautiful Chennai Escort Girls and choose the one who catches your eye!"
              },
              {
                step: "3",
                title: "Tell Us the Details!",
                description: "Just let us know where and when - we'll take care of everything else!"
              },
              {
                step: "4",
                title: "Have Fun & Pay Later!",
                description: "Meet your amazing Chennai Escort and pay only when you're completely happy!"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-700 mb-6">
              Our amazing team is here for you 24/7 to help with anything you need! We want to make sure your experience with our Chennai Escorts Service is super smooth and easy from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918121426651?text=Hi%2C%20I%20want%20to%20book%20Chennai%20Escorts"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                Book Your Chennai Escort Now
              </a>
              <a 
                href="#todays-profiles"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                See All Our Profiles
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              We're Not Just Another Agency - We're Your Friends!
            </h2>
            <p className="text-lg text-gray-600">
              Here's what makes us different
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 bg-white">
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
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl">
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

      {/* Escort Types Section */}
      <section id="escort-types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Beautiful Chennai Escort Girls
            </h2>
            <p className="text-lg text-gray-600">
              Discover the perfect companion for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {escortTypes.map((type, index) => (
              <motion.a
                key={index}
                href={type.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {type.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {type.description}
                  </p>
                  <div className="text-pink-600 font-semibold">
                    View Girls →
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
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
              Ready to Meet Your Perfect Companion?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us now and let us help you find the perfect Chennai Escort Girl
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

      
      {/* Floating Action Buttons */}
      <FloatingButtons />
    </div>
  );
}
