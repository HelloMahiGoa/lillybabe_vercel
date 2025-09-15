'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Star, Heart, Shield, MapPin, Clock, Users, Sparkles, Zap, Crown, Award, MessageCircle, ChevronDown, Shuffle, Plus, Minus, Globe, Coffee, BookOpen } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { EscortsSEOContent } from '@/components/seo/escorts-seo-content';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { FloatingButtons } from '@/components/ui/floating-buttons';

export function RussianEscortsClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Globe,
      title: 'Exotic Russian Beauty',
      description: 'Look, I\'ll be straight with you - there\'s something about Russian women that just stops you in your tracks. Our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> aren\'t just pretty faces - they\'re stunning, they know how to carry themselves, and they have this natural elegance that makes everyone else look ordinary. When you\'re with a Russian escort, you\'re not just getting a date - you\'re getting someone who\'ll make you the envy of every guy in the room.'
    },
    {
      icon: Shield,
      title: 'Safe, Verified, and Discreet',
      description: 'We get it - you need to know you\'re safe and that your privacy is protected. Every <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort in Chennai</Link></strong> is properly verified, background checked, and trained to be professional. We take your safety and discretion seriously because we know how important it is to you. These women understand the importance of keeping things private.'
    },
    {
      icon: Clock,
      title: 'Available When You Need Them',
      description: 'Whether it\'s a last-minute business dinner, a social event where you need a stunning date, or just some exotic company after a long day, our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> are there when you need them. We understand your schedule is crazy, so we work around it. They\'re professional, punctual, and ready to go.'
    },
    {
      icon: Crown,
      title: 'Class and Intelligence',
      description: 'Here\'s what really sets <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> apart - they\'re not just beautiful, they\'re also incredibly smart and well-educated. These women can hold their own in any conversation, whether it\'s about business, politics, or just life in general. You\'re not going to be stuck making small talk all night.'
    }
  ];

  const faqData = [
    {
      question: "Are the Russian escorts in Chennai safe and verified?",
      answer: "Yes, absolutely. We don't mess around with safety - every Russian escort in our agency is properly verified, background checked, and we know who they are. Your safety and privacy are our top priorities. These are real women, not some random people we found online."
    },
    {
      question: "What's the difference between Russian escorts and regular escorts?",
      answer: "Well, it's like the difference between a fine wine and cheap beer. Russian escorts in Chennai bring that exotic European beauty and sophistication that you just can't find with local escorts. They're elegant, they know how to carry themselves, and they have that mysterious charm that makes them irresistible. Plus, they're usually well-educated and can hold intelligent conversations."
    },
    {
      question: "Do Russian escorts speak English well?",
      answer: "Yes, all our Russian escorts in Chennai speak English fluently. They're not just beautiful - they're also intelligent and well-educated. You won't have any communication issues, and they can engage in meaningful conversations about pretty much anything. They're not just pretty faces."
    },
    {
      question: "How do I book a Russian escort in Chennai?",
      answer: "It's pretty simple - just give us a call or WhatsApp. We'll chat about what you're looking for, and we can usually arrange something same day if you need it. Everything is completely confidential, and we understand you might be calling from work or somewhere private."
    },
    {
      question: "What kind of services do Russian escorts in Chennai provide?",
      answer: "Our Russian escorts in Chennai provide companionship services for social events, business dinners, travel, and private time. They're perfect for when you need someone stunning and sophisticated on your arm. They understand boundaries and will be exactly what you need for your specific situation."
    },
    {
      question: "Are Russian escorts more expensive than regular escorts?",
      answer: "Look, you get what you pay for. Russian escorts in Chennai are premium companions, and their rates reflect that. But when you consider what you're getting - exotic beauty, sophistication, intelligence, and that special something that Russian women have - it's worth every rupee. They're an investment in having an unforgettable experience."
    },
    {
      question: "Do you offer both incall and outcall services?",
      answer: "Sure do! Whether you want to meet at your place, a hotel, or come to ours, we can make it work. Our Russian escorts in Chennai are flexible and understand that sometimes you want the comfort of your own space, and sometimes you want to get out of the house."
    },
    {
      question: "What should I expect from a Russian escort?",
      answer: "Expect someone who actually knows how to be with a man. These women understand what you need - whether that's someone to talk to, someone to go out with, or someone to spend intimate time with. They're not just going through the motions - they genuinely want to make your time together enjoyable."
    },
    {
      question: "Are Russian escorts available 24/7?",
      answer: "Pretty much, yes. We understand that your schedule might be crazy, and sometimes you need someone at odd hours. Whether it's a late-night business dinner or you just need some company after a long day, we try to accommodate whenever possible."
    },
    {
      question: "How do you protect my privacy?",
      answer: "Your privacy is everything to us. We know you might be a business owner, professional, or just someone who values discretion. We never share your information with anyone, and our women are trained to be completely discreet. What happens stays between you and us."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Arjun S.",
      location: "Anna Nagar, Chennai",
      service: "Russian Escort",
      rating: 5,
      date: "3 days ago",
      text: "Wow, just wow. The Russian escort I met was absolutely stunning and so sophisticated. She made me feel like a king at the business dinner. Everyone was asking me where I found such an elegant companion. Worth every penny."
    },
    {
      id: 2,
      name: "Vikram R.",
      location: "OMR, Chennai",
      service: "Russian Escort",
      rating: 5,
      date: "1 week ago",
      text: "I've been with regular escorts before, but this was completely different. The Russian escort I met was not just beautiful - she was intelligent, well-spoken, and knew how to handle herself in any situation. She made the whole evening perfect."
    },
    {
      id: 3,
      name: "Rajesh K.",
      location: "T. Nagar, Chennai",
      service: "Russian Escort",
      rating: 5,
      date: "2 weeks ago",
      text: "The exotic beauty and sophistication of Russian escorts in Chennai is unmatched. She was elegant, charming, and made me feel like the most important person in the room. I'll definitely be booking again."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <Image
            src="/images/russian-escorts.avif"
            alt="Beautiful Russian Escorts in Chennai"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-pink-100/90 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <Sparkles className="h-5 w-5 text-pink-600" />
              <span className="text-pink-800 font-semibold">Premium Russian Escorts</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              <span className="text-pink-300">Exotic Russian</span><br />
              <span className="text-white">Escorts in Chennai</span>
            </h1>
            
            <motion.p
              className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Looking for <strong><Link href="/russian-escorts-in-chennai" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Russian escorts in Chennai</Link></strong>? You've come to the right place. At <strong><Link href="/" className="text-pink-300 font-semibold hover:text-pink-200 transition-colors">Lillybabe</Link></strong>, we bring you the most stunning and sophisticated Russian women who know how to make you feel like royalty. Experience that exotic European beauty and charm right here in Chennai.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Link
                href="tel:+918121426651"
                className="group bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
              <Crown className="h-4 w-4 text-pink-600" />
              <span className="text-pink-800 font-semibold text-sm">Why Choose Russian Escorts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              <span className="text-pink-600">Exotic Beauty</span> Meets <span className="text-pink-600">Sophistication</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the allure of Russian women - their striking beauty, elegant demeanor, and that mysterious charm that makes them irresistible. Our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> bring authentic European sophistication to Chennai.
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
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }}>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Content Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why <span className="text-pink-600">Russian Escorts in Chennai</span> Are Different
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              There's something undeniably captivating about Russian women. Their striking features, elegant demeanor, and that mysterious charm that draws you in. Our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> bring that authentic European beauty and sophistication that you just can't find anywhere else.
            </p>
          </motion.div>

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
                  <span className="text-pink-600">Exotic Beauty</span> That Turns Heads
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Let's be honest - there's something about Russian women that just stops you in your tracks. Their striking features, those piercing eyes, and that natural elegance that makes them stand out in any crowd. When you're with a <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort in Chennai</Link></strong>, you're not just getting a companion - you're getting someone who'll make everyone else jealous.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    These women know how to dress, they know how to carry themselves, and they know how to make you look good just by being next to you. Whether it's a business dinner, a social event, or just a night out, having a stunning <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort</Link></strong> on your arm is going to get you noticed in all the right ways.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And it's not just about looks - Russian women have this natural confidence and sophistication that comes from their culture. They're not shy, they're not awkward, and they definitely know how to make an entrance. When you walk into a room with a <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort in Chennai</Link></strong>, people are going to remember it.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/russian1.avif"
                  alt="Exotic Russian Beauty"
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
                  src="/images/russian2.avif"
                  alt="Sophisticated Russian Escorts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Intelligence</span> and <span className="text-pink-600">Sophistication</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Here's what really sets <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong> apart - they're not just beautiful, they're also incredibly intelligent and well-educated. These women can hold their own in any conversation, whether it's about business, politics, art, or just life in general. You're not going to be stuck making small talk all night.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Russian women are known for their strong education system and their appreciation for culture and the arts. They read books, they follow current events, and they have opinions about things that matter. When you're with a <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort</Link></strong>, you're with someone who can actually engage your mind, not just your eyes.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And let's talk about sophistication - these women know how to behave in any situation. Whether it's a formal business dinner or a casual social gathering, they understand etiquette, they know how to dress appropriately, and they know how to make you look good in front of other people. They're the kind of women who make you want to be a better version of yourself.
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
                  <span className="text-pink-600">Mysterious Charm</span> and <span className="text-pink-600">Passion</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    There's something mysterious and captivating about Russian women that you just can't put your finger on. It's not just their beauty or their intelligence - it's this intangible quality that draws you in and keeps you wanting more. They have this natural allure that makes them irresistible.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Russian women are known for their passion and intensity. When they're interested in something, they give it their all. When they're with you, they're really with you - not just going through the motions. They know how to make you feel like you're the most important person in the world, and that's a feeling that's hard to forget.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And let's not forget about that famous Russian warmth and hospitality. Despite their sophisticated exterior, Russian women have this incredible ability to make you feel comfortable and welcome. They know how to create an atmosphere where you can relax, be yourself, and enjoy the moment. It's like they have this natural gift for making people feel special.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/russian3.avif"
                  alt="Mysterious Russian Charm"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Left Image > Right Content */}
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/russian4.avif"
                  alt="Professional Russian Escorts"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                  <span className="text-pink-600">Professional</span> and <span className="text-pink-600">Reliable</span>
                </h2>
                <div className="space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    When you book a <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escort in Chennai</Link></strong>, you're not just getting beauty and charm - you're getting professionalism and reliability. These women understand that when you book them, you're counting on them to be there and to be exactly what you need. They take their work seriously, and it shows.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Russian women are known for their strong work ethic and their commitment to doing things right. They'll show up on time, they'll be dressed appropriately, and they'll be ready to make your evening perfect. You don't have to worry about them being flaky, unreliable, or difficult to deal with.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    And here's the thing - they understand discretion. They know that your privacy is important, and they're not going to do anything that could embarrass you or put you in an awkward situation. They're professional, they're trustworthy, and they know how to keep things between you and them. That's the kind of reliability you can count on.
                  </p>
                </div>
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
              No matter where you are in Chennai, we've got you covered. Our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts</Link></strong> are available in <strong>T. Nagar</strong>, <strong>Anna Nagar</strong>, <strong>OMR</strong>, <strong>ECR</strong>, <strong>Nungambakkam</strong>, <strong>Adyar</strong>, <strong>Velachery</strong>, <strong>Guindy</strong>, and pretty much anywhere else you might be. Whether you're in the city center or out in the IT corridor, we can get someone to you.
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
                <p className="text-gray-600">{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our <span className="text-pink-600">Clients Say</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what real clients have to say about their experiences with our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>
            <p className="text-gray-600">
              Got questions? We've got answers. Here are the most common questions about our <strong><Link href="/russian-escorts-in-chennai" className="text-pink-600 hover:text-pink-700">Russian escorts in Chennai</Link></strong>.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
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
                      <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience <span className="text-pink-200">Russian Beauty</span>?
            </h2>
            <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
              Don't wait - the most stunning <strong><Link href="/russian-escorts-in-chennai" className="text-pink-200 hover:text-white transition-colors">Russian escorts in Chennai</Link></strong> are just a call away. Experience exotic beauty, sophistication, and that mysterious charm that only Russian women possess.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="tel:+918121426651"
                className="group bg-white hover:bg-gray-100 text-pink-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}