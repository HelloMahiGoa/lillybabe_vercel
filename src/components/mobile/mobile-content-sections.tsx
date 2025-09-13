'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail, ArrowRight, Eye, ThumbsUp, Calendar, UserCheck, Hand, Plane, Lock as LockIcon, BookOpen, Briefcase } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';

export const MobileContentSections = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 rounded-full mb-4"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="h-4 w-4 text-white" />
            <span className="text-white font-bold text-sm">🔥 BEST CHENNAI ESCORTS SINCE 2010 🔥</span>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-pink-500">HOT</span> CHENNAI <span className="text-pink-500">ESCORTS</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl font-bold text-yellow-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ⭐ #1 ESCORT SERVICE IN CHENNAI ⭐
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <strong className="text-white">Looking for the hottest Chennai Escorts?</strong> We have the most beautiful, sexy, and experienced call girls in Chennai! Our escorts are available 24/7 for your ultimate pleasure and satisfaction.
          </motion.p>
          
          {/* Hero Image */}
          <motion.div 
            className="relative mb-8 rounded-3xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Image
              src="/images/hero-bg.webp"
              alt="Beautiful Chennai Escort Girls - Best Escort Service"
              width={400}
              height={250}
              className="w-full h-64 object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-bold text-lg mb-2">Experience the Best Chennai Escorts</h3>
              <p className="text-gray-200 text-sm">Beautiful, verified, and professional girls ready to meet you</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="https://wa.me/918121426651?text=Hi%2C%20I%20am%20looking%20escorts%20service%20in%20chennai" 
               className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <Phone className="inline w-5 h-5 mr-2" />
              CALL NOW: +91 8121426651
            </a>
            <a href="#profiles-section" 
               className="block w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              VIEW HOT GIRLS
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Section 2: Why Choose Our Escorts */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            🔥 WHY CHOOSE OUR CHENNAI ESCORTS? 🔥
          </h3>
          
          <div className="space-y-4">
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">🔥 100% REAL & VERIFIED GIRLS</h4>
                <p className="text-gray-300 text-sm">We personally verify every single escort - they're not just profiles, they're real, beautiful, and experienced call girls ready to satisfy your desires!</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="h-5 w-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">⚡ 24/7 AVAILABLE - ANYTIME, ANYWHERE</h4>
                <p className="text-gray-300 text-sm">Whether it's 2 AM or 2 PM, we're just a call away! Our hot Chennai escorts are ready to serve you round the clock!</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Shield className="h-5 w-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">💰 NO ADVANCE PAYMENT - PAY AFTER SERVICE</h4>
                <p className="text-gray-300 text-sm">We believe in trust - you only pay when you're completely satisfied! No advance payments, no hidden charges, just honest and transparent service.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="h-5 w-5 text-black" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">🏆 #1 RATED ESCORT SERVICE IN CHENNAI</h4>
                <p className="text-gray-300 text-sm">We don't just say we're the best - our thousands of satisfied clients prove it! That's the kind of quality and satisfaction we're proud of!</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 3: We're So Confident - Special Deal */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 WE'RE SO CONFIDENT - TRY OUR CHENNAI ESCORTS SERVICE FREE IF YOU'RE NOT HAPPY! 🔥
          </h3>
          <p className="text-gray-300 mb-6">
            <strong className="text-white">You absolutely deserve the best Chennai Escorts - and that's exactly what we're offering!</strong> ⭐
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-3xl border-2 border-yellow-400"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-black mb-4">🔥 EXPERIENCE THE MAGIC OF CHENNAI'S FINEST GIRLS 🔥</h4>
          <p className="text-lg mb-4">Real people, genuine care, and memories that last a lifetime - that's our promise to you!</p>
          <div className="bg-yellow-500 text-black p-4 rounded-2xl border-2 border-red-600">
            <p className="text-lg font-black">🎉 SPECIAL DEAL: BOOK OUR CHENNAI ESCORTS WITHIN THE NEXT 30:00 AND GET 20% OFF! 🎉</p>
          </div>
        </motion.div>
      </motion.section>

      {/* Random Image Gallery Section */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 OUR BEAUTIFUL CHENNAI ESCORTS GALLERY 🔥
          </h3>
          <p className="text-gray-300 mb-6">
            <strong className="text-white">Browse through our stunning collection of verified Chennai escorts!</strong> Each photo represents a real, beautiful, and professional escort ready to make your time unforgettable.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <RandomImageGallery 
            count={20} 
            imageHeight="h-48" 
            showRefreshButton={true}
          />
        </motion.div>
      </motion.section>

      {/* Section 4: Our Story: From Dreams to Reality */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 OUR STORY: FROM DREAMS TO REALITY 🔥
          </h3>
          <p className="text-gray-300 mb-6">
            <strong className="text-white">Let me tell you a little story about how our Chennai Escorts Service came to be...</strong> It's not just about business, it's about creating genuine connections and unforgettable moments.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 WHY OUR CHENNAI ESCORTS ARE SIMPLY THE BEST! 🔥</h4>
          
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-bold text-white mb-2">🔥 REAL CONNECTIONS, REAL FEELINGS</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">You know what makes our Chennai Escorts Service special?</strong> It's not just about the physical connection - it's about finding someone who truly understands you. Our girls have this amazing ability to make you feel like you're with your best friend, your girlfriend, or even a celebrity!
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-white mb-2">🔒 YOUR SAFETY IS OUR PRIORITY</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">I want you to know that when you choose our Chennai Escorts, you're choosing safety and professionalism.</strong> We carefully select each girl - they're healthy, well-educated, and drug-free. Plus, they're trained to be confident and charming, making every moment with them absolutely magical.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold text-white mb-2">🌟 AMAZING GIRLS WITH AMAZING STORIES</h5>
              <p className="text-gray-300 text-sm leading-relaxed">
                <strong className="text-white">Here's the cool part about our Chennai Escorts Service</strong> - our girls are so much more than just escorts! Some are dancers, fitness trainers, tutors, or even aspiring actresses and models. They're real people with real dreams, and they're absolutely fun to be around.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 5: Why Choose Our Chennai Escorts */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 WHY CHOOSE OUR CHENNAI ESCORTS? 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We're so proud to tell you that we've been providing amazing Chennai Escorts Service for over 10+ years!</strong>
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 text-center border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="h-6 w-6 text-black" />
            </div>
            <h4 className="text-2xl font-black text-white mb-1">10+</h4>
            <p className="text-gray-300 font-bold text-sm">YEARS OF CHENNAI ESCORTS</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 text-center border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-black fill-black" />
            </div>
            <h4 className="text-2xl font-black text-white mb-1">5.0</h4>
            <p className="text-gray-300 font-bold text-sm">CHENNAI ESCORTS RATING</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 text-center border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-black text-white mb-1">500+</h4>
            <p className="text-gray-300 font-bold text-sm">CHENNAI ESCORT GIRLS</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 text-center border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-2xl font-black text-white mb-1">24/7</h4>
            <p className="text-gray-300 font-bold text-sm">CHENNAI ESCORTS SERVICE</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 border-2 border-yellow-400"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 OUR PROMISE TO YOU FOR CHENNAI ESCORTS SERVICE 🔥</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold text-sm">NO BULLSHIT - Only Real Chennai Escort Girls</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold text-sm">NO ADVANCE PAYMENT - Pay After Meeting</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold text-sm">NO ADVANCE BOOKING - Instant Chennai Escorts</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold text-sm">NO FAKE PHOTOS - 100% Real Chennai Escorts</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 6: 100% Genuine Chennai Escort Girls */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 100% GENUINE CHENNAI ESCORT GIRLS IN CHENNAI 🔥
          </h3>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">Our main mission in the Chennai Escorts agency is to give you the most memorable intercourse offer.</strong> You can select the most experienced young call girls service in Chennai that is trained in various sexual activities. We can thus say that irrespective of what kind of intercourse you want, our escort girl is always willing to give her best performance.
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">We have Chennai call girls who are real and affordable, and hence you get to enjoy a rich experience without breaking the bank.</strong> Some of the gorgeous company that could meet your specific requirements include teen call girls, busty beauty, Indian bhabhis, college girls, glamorous married women, and beautiful Russian call girls among others.
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">Get yourself a kind of pleasure like no other because these wonderful call girls are adept at making you happy.</strong> To enjoy an exciting and exciting experience that you will always feel like coming back to, you will not regret not missing LillyBabe just because you are in Chennai!
          </p>
          
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">As one of the finest call girl services in Chennai, we simplify the process of booking independent, sexy call girls online to ensure a discrete and hassle free encounter.</strong> You should not miss a chance to enjoy a night of pure passionate love and unmatched intimacy.
          </p>
        </motion.div>
      </motion.section>

      {/* Section 7: Matchless Experience with Chennai Escorts */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 HAVE A MATCHLESS EXPERIENCE WITH CHENNAI ESCORTS 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Chennai is not only about the stunning beaches, vibrant night life, and relaxing sunsets,</strong> but it is also the right place to experience your sex life to the fullest with a partner who best understands you.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            <strong className="text-white">Our Chennai escorts are also providing the most rewarding escort services</strong> such as private incorporated overnight fun, dirty talks, kissing, cuddling affectionately, complete bedroom service, deep French kissing, double BJ and much more.
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">It is either having a full night of sex, or having your cringe erotic desires,</strong> these girls make every moment of your life warm and full of authenticity. Our girls can fit perfectly solo travellers, business people or people who wish to make their Chennai visit very memorable and enjoyable.
          </p>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a href="https://wa.me/918121426651" 
             className="block w-full bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Book Your Matchless Girl Now!
          </a>
        </motion.div>
      </motion.section>

      {/* Section 8: GFE Experience in Chennai Escort */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 GFE EXPERIENCE IN CHENNAI ESCORT 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">In case you live alone in Chennai and you want to have a girlfriend that turns out to be your girlfriend</strong> then you can choose a girlfriend-type partner with our agency.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-center">
            <h4 className="text-xl font-black text-white mb-4">💕 Girlfriend Experience (GFE)</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              <strong className="text-white">We will give you a wide choice of call girl to hire the best one who is ready to become your girlfriend.</strong> Experience the warmth, care, and intimacy of a real relationship with our beautiful Chennai Escorts who are trained to provide the most authentic girlfriend experience.
            </p>
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-red-800 p-4 rounded-2xl">
                <h5 className="text-white font-bold mb-2">💋 Intimate Conversations</h5>
                <p className="text-gray-300 text-sm">Deep, meaningful talks like real couples</p>
              </div>
              <div className="bg-red-800 p-4 rounded-2xl">
                <h5 className="text-white font-bold mb-2">🤗 Warm Cuddles</h5>
                <p className="text-gray-300 text-sm">Affectionate physical comfort and care</p>
              </div>
              <div className="bg-red-800 p-4 rounded-2xl">
                <h5 className="text-white font-bold mb-2">💝 Emotional Connection</h5>
                <p className="text-gray-300 text-sm">Genuine emotional bonding and support</p>
              </div>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <Heart className="inline w-5 h-5 mr-2" />
              Find Your Perfect GFE Partner!
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 9: Select Your Favourable Call Girls/Chennai Escorts */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 SELECT YOUR FAVOURABLE CALL GIRLS/CHENNAI ESCORTS 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Our Chennai escort agency has collected call girls of various backgrounds of various characters.</strong> Each of them is gorgeous and appealing. Whatever kind of call girls you desire, you will find them in here.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🇷🇺 Russian Escorts</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Russian escorts in Chennai are famous with their alluring looks and attractive characters</strong> that are parts of the interest they create. Select your sexual partner among the best call girls of other countries who are Russian.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">👧 Teenage Girls</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">We shall get you the prettiest teenage college girls, Tamil girl</strong> who still preserve a feeling of freshness in their relations with others.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🔥 Busty Escorts</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">When you desire a meaty affair, then one of our busty escort in Chennai,</strong> with their gigantic body, is what you require.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">👩 Desi Bhabi</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Desi bhabis are the most up-market escort in Chennai.</strong> They are mere housewife escorts. With their plump figures, they are going to offer you the purest sensations through out the whole of your body.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🎓 Student Escorts</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">These young independent call girls will be happy to escort you</strong> anytime of the day and night.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">💃 Model Girls</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">These call girls in Chennai will have the body of your dreams</strong> in case you take them out on a date. They will make you crazy with their gorgeous modelling bodies.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🇮🇳 Desi Girls</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Desi escort girl sex will be the most purest and the most genuine experience</strong> you will ever have. They are armed with unique tricks of luring you in the most exotic culture fashion.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">✈️ Air Hostess</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">You may spend the most exceptional and romantic night out with an Air Hostess escort</strong> due to their feeling of professionalism and their fantastic bodies.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">👑 VIP Escorts</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Our beautiful VIP escorts in Chennai offer the ultimate luxury experience</strong> with their sophisticated charm, elite background, and exclusive service that's perfect for high-profile clients.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="https://wa.me/918121426651" 
             className="block w-full bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Select Your Perfect Type Now!
          </a>
        </motion.div>
      </motion.section>

      {/* Section 10: Call Girls In Chennai Are Here To Your Call */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 CALL GIRLS IN CHENNAI ARE HERE TO YOUR CALL 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We take so much pride in overcoming all challenges in order to emerge the most reputed call girl service in Chennai.</strong>
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🏆 Unmatched Excellence</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Ensuring unmatched happiness to every and every client was one of our greatest challenges</strong> yet with perseverance and commitment to quality we have managed to create a loyal customer base that has been with us over the years.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">⏰ 24/7 Availability</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">We have made the services easier and easier to reserve your preferred girls through advance booking.</strong> Communicating with us is not a problem at any time of the day since we remain available 24/7 to ensure uninterrupted connection.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600 text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg font-bold text-white mb-3">🌟 Our Commitment to You</h4>
          <p className="text-gray-300 text-sm mb-4">
            <strong className="text-white">The consistent growth of our clientele makes us committed to offer excellent call girl services in Chennai.</strong> And we owe a great debt to each and every one of our clients who have helped to make Chennai call girl a massive success and the most reputable brand in the business!
          </p>
          <a href="https://wa.me/918121426651" 
             className="block w-full bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Call Us Now - We're Here!
          </a>
        </motion.div>
      </motion.section>

      {/* Section 11: Cheap and Real Call Girls in Chennai */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 CHEAP AND REAL CALL GIRLS IN CHENNAI 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Do you need real, pretty call girls in Chennai?</strong> And you have come to the right place!
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">✅ Verified & Affordable</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">We offer a big pool of call girls in Chennai who are verified at affordable rates.</strong> It is best to find a secure and open call girl agency, although numerous suppliers assure they can provide quality services.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">🔒 Authentic & Secure</h4>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">At LillyBabe, we highly value authenticity; browse beautiful, smart, and talented call girls,</strong> taking a look at her real photos and using direct WhatsApp connections.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600 text-center"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-lg font-bold text-white mb-3">🏆 Best Known Call Girl Service</h4>
          <p className="text-gray-300 text-sm mb-4">
            <strong className="text-white">To be sure of a guaranteed elite experience, simply type in LillyBabe or Call Girls in Chennai</strong> so you could book a high end call girl service in Chennai, and then choose our site.
          </p>
          <p className="text-gray-300 text-sm mb-6">
            <strong className="text-white">As one of the best known call girl services in Chennai we are very proud to offer unmatched pleasure, professionalism and privacy.</strong> Reserve a call girl today in order to experience the best!
          </p>
          <div className="space-y-3">
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Reserve Your Call Girl Now!
            </a>
            <a href="#profiles-section" 
               className="block w-full bg-red-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <Users className="inline w-5 h-5 mr-2" />
              Browse Our Real Girls
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 12: Our Amazing Chennai Escorts */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 OUR AMAZING CHENNAI ESCORTS 🔥
          </h3>
          <p className="text-gray-300">
            I've put together this amazing collection of categories for our Chennai Escorts Service. Each one is special and unique - just like you!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/category/russian-escorts.jpg"
                alt="Russian Escorts in Chennai - Exotic International Beauties"
                width={200}
                height={120}
                className="w-full h-20 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Exotic Russian Beauties</h4>
            <p className="text-gray-300 text-sm">International charm and beauty</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/category/airhostess-escorts.jpg"
                alt="Airhostess Escorts in Chennai - Professional Elegance"
                width={200}
                height={120}
                className="w-full h-20 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Glamorous Airhostess</h4>
            <p className="text-gray-300 text-sm">Professional elegance and sophistication</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/category/erotic-massage.jpg"
                alt="Erotic Massage Chennai - Therapeutic and Soothing"
                width={200}
                height={120}
                className="w-full h-20 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Relaxing Massage</h4>
            <p className="text-gray-300 text-sm">Therapeutic and soothing</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/category/gf-experience.jpg"
                alt="Girlfriend Experience Chennai - Romantic and Caring"
                width={200}
                height={120}
                className="w-full h-20 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sweet GF Experience</h4>
            <p className="text-gray-300 text-sm">Romantic and caring</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Beautiful Malayali Girls</h4>
            <p className="text-gray-300 text-sm">Natural beauty and charm</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Celebrity Look-alikes</h4>
            <p className="text-gray-300 text-sm">Star quality and glamour</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Mature & Caring</h4>
            <p className="text-gray-300 text-sm">Experienced and understanding</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Young & Fresh</h4>
            <p className="text-gray-300 text-sm">Energetic and fun</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Curvy & Beautiful</h4>
            <p className="text-gray-300 text-sm">Voluptuous and stunning</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Independent & Free</h4>
            <p className="text-gray-300 text-sm">Self-reliant and confident</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">VIP & Exclusive</h4>
            <p className="text-gray-300 text-sm">High-quality and luxurious</p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-2">Fashion Models</h4>
            <p className="text-gray-300 text-sm">Stylish and elegant</p>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-300 mb-4">
            See something you like? Don't be shy! Each of these amazing Chennai Escort Girls is waiting to meet someone special like you. Just reach out and let's make something wonderful happen!
          </p>
          <div className="space-y-3">
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Browse All Categories
            </a>
            <a href="tel:+918121426651" 
               className="block w-full bg-blue-500 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl">
              <Phone className="inline w-5 h-5 mr-2" />
              Call for More Info
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 13: Detailed Escort Descriptions */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 AMAZING CHENNAI ESCORTS READY TO MEET YOU! 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">I'm so excited to introduce you to our incredible Chennai Escorts Service!</strong> We have the most beautiful and caring girls from all walks of life - each one special in their own way.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Everyone's Favorite</h4>
                <p className="text-sm text-yellow-400 font-bold">Independent & Free Spirited</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              These amazing independent girls are like your best friends who just happen to be incredibly beautiful! They're smart, fun, and love to make you feel special. Perfect for those who want a genuine connection!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Verified & Trusted</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Always Available</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Top Quality</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-pink-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Very Popular</h4>
                <p className="text-sm text-green-600 font-semibold">Mature & Caring Housewives</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              These wonderful mature ladies know exactly how to take care of you! They're experienced, understanding, and know how to make you feel relaxed and special. Perfect for those who appreciate wisdom and warmth!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Wise & Mature</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Very Experienced</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Super Discreet</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Let's Chat
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Local Beauty</h4>
                <p className="text-sm text-blue-600 font-semibold">Beautiful Tamil Girls</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our lovely Tamil girls are the heart and soul of our Chennai Escorts Service! They're not just beautiful - they're warm, friendly, and understand exactly what makes you happy. They'll make you feel like you're with an old friend!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Local Tamil</span>
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs">Cultural Charm</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Warm & Friendly</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Let's Chat
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Exotic Beauty</h4>
                <p className="text-sm text-purple-600 font-semibold">Gorgeous Mallu Girls</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              These stunning Mallu girls bring the exotic beauty of Kerala to our Chennai Escorts! They're known for their natural beauty, warm hearts, and incredible charm. They'll make you feel like you're in paradise!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Exotic Mallu</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Natural Beauty</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">Warm Hearts</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Let's Chat
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Elite & Special</h4>
                <p className="text-sm text-indigo-600 font-semibold">Glamorous Air Hostesses</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              These stunning Air Hostesses bring international glamour to our Chennai Escorts Service! They're professional, elegant, and know how to make you feel like a VIP. Perfect for those who love sophistication!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">Professional</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Elite & Classy</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">International</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-indigo-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Let's Chat
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">VIP & Exclusive</h4>
                <p className="text-sm text-yellow-600 font-semibold">Celebrity Look-alikes</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              These stunning celebrity escorts in Chennai are perfect for special events, parties, or just making you feel like a star! They're glamorous, sophisticated, and know how to turn heads wherever they go!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Celebrity Style</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">VIP Treatment</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Perfect for Events</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Let's Chat
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-3xl border border-pink-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Meet Your Perfect Match?</h4>
            <p className="text-gray-300 text-sm">
              I've introduced you to all our amazing Chennai Escort Girls - each one special and unique! Now it's your turn to choose who you'd like to meet. Don't worry about making the perfect choice - they're all wonderful in their own way!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 14: The Magic & What Makes Our Chennai Escorts Amazing */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 THE MAGIC OF OUR CHENNAI ESCORTS 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">I want you to know that our Chennai Escorts Service is so much more than just beautiful faces.</strong> Our girls are smart, caring, and they really know how to make you feel special!
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 YOUR PERFECT EXPERIENCE AWAITS 🔥</h4>
          <p className="text-gray-300 text-sm leading-relaxed">
            <strong className="text-white">Our wonderful Chennai Escort Girls are here to create magical moments with you!</strong> Whether you want a romantic evening, a fun night out, or just someone to talk to - they're perfect for everything. They'll make you feel like the most important person in the world, and trust me, you'll never want the night to end!
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 WHAT MAKES US SPECIAL 🔥</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Our girls are not just beautiful - they're also incredibly caring and professional. We offer fair prices and payment options that work for everyone, and our girls always go above and beyond to make your experience truly special.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              With our wonderful Chennai Escort Girls, you can truly be yourself and enjoy every moment! They're here to make you happy and comfortable, and they know exactly how to create the perfect atmosphere for whatever you're looking for.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-3xl border border-pink-200"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Ready for an Amazing Time with Our Chennai Escorts?</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Are you ready to have the most amazing time with our Chennai Escorts Service? Booking is super easy! Just send us a message on WhatsApp and tell us what you're looking for. Our wonderful girls are available for both day and night adventures - whether you want to go to movies, take a long drive, or just spend quality time together!
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Don't worry about the logistics - we've got everything covered! Just pick your favorite girl from our profiles and choose a hotel from our trusted list in Chennai. Our Chennai Escort Girls will arrive right at your location, making everything smooth and hassle-free.
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-300 italic">
                💡 Friendly Tip: When you book with our Chennai Escorts Service, just be yourself and tell us what you're looking for! We want to make sure you have the perfect experience, so don't be shy about sharing your preferences.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 15: Trust Our Chennai Escorts - Safety Section */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 TRUST OUR CHENNAI ESCORTS - SAFETY FIRST! 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Your safety and privacy are our top priorities!</strong> We've built our Chennai Escorts Service with trust, security, and your peace of mind at the heart of everything we do.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">100% Verified & Safe</h4>
                <p className="text-sm text-green-400 font-bold">All Our Girls Are Genuine</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Every single one of our Chennai Escort Girls is carefully verified and background-checked. We only work with genuine, professional girls who are committed to providing you with the best experience possible. No fake profiles, no scams - just real, beautiful women ready to meet you!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Background Checked</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Identity Verified</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Professional Only</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Our Verified Girls
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Complete Privacy Protection</h4>
                <p className="text-sm text-blue-400 font-bold">Your Information Is Safe With Us</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              We understand how important your privacy is. That's why we use the latest security measures to protect your personal information. Your conversations, bookings, and personal details are completely confidential and never shared with anyone else.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Encrypted Communication</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">No Data Sharing</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Discrete Service</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Discretely Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">24/7 Support & Safety</h4>
                <p className="text-sm text-purple-400 font-bold">We're Always Here For You</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our dedicated support team is available 24/7 to help you with any questions or concerns. Whether you need help booking, have questions about our services, or just want to chat - we're always here to make sure you feel comfortable and safe.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">24/7 Support</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Instant Response</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Safety First</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Get Support Now
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-3xl border border-green-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Experience Safe & Trusted Chennai Escorts?</h4>
            <p className="text-gray-300 text-sm">
              Now that you know how much we care about your safety and privacy, are you ready to meet our amazing Chennai Escort Girls? We've made everything simple, safe, and secure - just for you!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 16: Genuine Services (Luxury, Intellectual, Corporate, VIP) */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 GENUINE SERVICES FOR EVERY NEED 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We offer a wide range of genuine services to match your preferences and lifestyle.</strong> From luxury experiences to intellectual connection - we have exactly what you're looking for!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Luxury Escort Services</h4>
                <p className="text-sm text-yellow-400 font-bold">Luxury & Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our luxury Chennai Escorts offer the ultimate luxury experience. These stunning, sophisticated women are perfect for high-profile events, business dinners, or simply treating yourself to the finest service available in Chennai.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Luxury Experience</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">High-Profile Events</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Sophisticated</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Luxury Service
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Intellectual Connection</h4>
                <p className="text-sm text-indigo-400 font-bold">Smart & Engaging</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              For those who appreciate stimulating conversation and intellectual connection, our intelligent Chennai Escorts are perfect. These well-educated, articulate women can discuss any topic and provide meaningful connection beyond just physical beauty.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold">Well-Educated</span>
              <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold">Articulate</span>
              <span className="bg-indigo-500 text-white px-2 py-1 rounded-full text-xs font-bold">Stimulating</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-indigo-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Intellectual Girls
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Corporate Escort Services</h4>
                <p className="text-sm text-green-400 font-bold">Professional & Discreet</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Perfect for business professionals, our corporate Chennai Escorts understand the importance of discretion and professionalism. They're ideal for business dinners, corporate events, or providing elegant service during your business trips to Chennai.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Business Professional</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Corporate Events</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Elegant</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Corporate Service
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">VIP Escort Services</h4>
                <p className="text-sm text-purple-400 font-bold">Exclusive & Elite</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our VIP Chennai Escorts are the cream of the crop - exclusive, elite, and available only to discerning clients. These exceptional women offer unparalleled beauty, sophistication, and service that exceeds all expectations.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Exclusive</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Elite</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Unparalleled</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Access VIP Service
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Which Service Matches Your Needs?</h4>
            <p className="text-gray-300 text-sm">
              Whether you're looking for luxury experience, intellectual stimulation, corporate professionalism, or VIP exclusivity - we have the perfect Chennai Escort service for you. Just let us know what you're looking for!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 17: Independent Chennai Escorts Detailed Profiles */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 INDEPENDENT CHENNAI ESCORTS - MEET THE REAL GIRLS! 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Get to know our amazing independent Chennai Escort Girls!</strong> Each one is unique, beautiful, and ready to create unforgettable memories with you. Here's a closer look at what makes each of them special.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Priya - The Sweetheart</h4>
                <p className="text-sm text-pink-400 font-bold">Age: 24 | Height: 5'4" | Tamil Beauty</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Priya is the perfect blend of traditional Tamil beauty and modern charm. She's sweet, caring, and loves to make you feel special. Whether you want a romantic dinner date or a cozy night in, Priya knows exactly how to create the perfect atmosphere for you.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Sweet & Caring</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Romantic</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Traditional Beauty</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-pink-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Priya
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Ananya - The Star</h4>
                <p className="text-sm text-blue-400 font-bold">Age: 26 | Height: 5'6" | Model & Actress</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Ananya is a stunning model and actress who brings glamour and sophistication to every meeting. She's confident, intelligent, and perfect for high-profile events or when you want to feel like you're with a celebrity. Her beauty and charm will turn heads wherever you go!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Model & Actress</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Glamorous</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">High-Profile</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Ananya
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Kavya - The Professional</h4>
                <p className="text-sm text-green-400 font-bold">Age: 28 | Height: 5'5" | Corporate Executive</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Kavya is a successful corporate executive who understands the importance of discretion and professionalism. She's perfect for business dinners, corporate events, or when you need an intelligent, well-spoken girl who can hold her own in any conversation.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Corporate Executive</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Professional</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Intelligent</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Kavya
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Meera - The Royalty</h4>
                <p className="text-sm text-purple-400 font-bold">Age: 25 | Height: 5'7" | Mallu Princess</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Meera is a stunning Mallu beauty with royal grace and exotic charm. She's elegant, sophisticated, and brings the exotic beauty of Kerala to Chennai. Her warm personality and natural beauty will make you feel like you're in paradise!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Mallu Beauty</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Royal Grace</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Exotic Charm</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Meera
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-3xl border border-pink-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Meet Your Perfect Match?</h4>
            <p className="text-gray-300 text-sm">
              These are just a few of our amazing independent Chennai Escort Girls! Each one is unique, beautiful, and ready to create unforgettable memories with you. Who catches your eye? Just let us know and we'll arrange the perfect meeting!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 18: Service Areas & Locations */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 SERVICE AREAS & LOCATIONS IN CHENNAI 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We provide Chennai Escort services across all major areas of the city!</strong> No matter where you are in Chennai, our beautiful girls are ready to come to you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/location/anna-nagar.webp"
                alt="Anna Nagar Chennai Escorts - Best Area Service"
                width={200}
                height={100}
                className="w-full h-16 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Anna Nagar</h4>
                <p className="text-sm text-blue-400 font-bold">Best Area</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              One of Chennai's most upscale residential areas, perfect for discreet meetings and luxury experiences.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/location/tnagar.webp"
                alt="T Nagar Chennai Escorts - Shopping Hub Service"
                width={200}
                height={100}
                className="w-full h-16 object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">T. Nagar</h4>
                <p className="text-sm text-green-400 font-bold">Shopping Hub</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              The heart of Chennai's shopping district, ideal for business meetings and casual encounters.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Adyar</h4>
                <p className="text-sm text-purple-400 font-bold">IT Corridor</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Chennai's IT hub, perfect for corporate professionals and tech executives.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">OMR</h4>
                <p className="text-sm text-yellow-400 font-bold">IT Highway</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Old Mahabalipuram Road, home to major IT companies and luxury hotels.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Nungambakkam</h4>
                <p className="text-sm text-indigo-400 font-bold">Central Location</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Central Chennai location, easily accessible from all parts of the city.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">ECR</h4>
                <p className="text-sm text-pink-400 font-bold">Beach Road</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              East Coast Road, perfect for romantic beachside meetings and luxury resorts.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Mahabalipuram</h4>
                <p className="text-sm text-teal-400 font-bold">Heritage Area</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              UNESCO World Heritage site, perfect for cultural experiences and luxury stays.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Sholinganallur</h4>
                <p className="text-sm text-emerald-400 font-bold">Tech Hub</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Emerging tech corridor, ideal for IT professionals and business executives.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Book in Your Area?</h4>
            <p className="text-gray-300 text-sm">
              No matter where you are in Chennai, our beautiful escort girls are ready to come to you! Just let us know your location and we'll arrange the perfect meeting at your preferred place.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 19: Why Choose Our Chennai Escorts (Detailed) */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 WHY CHOOSE OUR CHENNAI ESCORTS? 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We're not just another escort service - we're your trusted partners in creating unforgettable experiences!</strong> Here's what makes us the best choice for your Chennai escort needs.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">100% Genuine & Verified</h4>
                <p className="text-sm text-green-400 font-bold">No Fake Profiles, No Scams</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Every single one of our Chennai Escort Girls is carefully verified, background-checked, and genuinely committed to providing you with the best experience. We never use fake photos or misleading information - what you see is what you get!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Real Photos</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Verified Identity</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">No Scams</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Meet Our Verified Girls
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">24/7 Availability</h4>
                <p className="text-sm text-blue-400 font-bold">Always Here When You Need Us</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Whether it's early morning, late night, or any time in between - our Chennai Escort Girls are available 24/7 to meet your needs. We understand that your schedule might be unpredictable, so we're always ready to accommodate you!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">24/7 Service</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Flexible Timing</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Quick Response</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Anytime
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Complete Privacy & Discretion</h4>
                <p className="text-sm text-purple-400 font-bold">Your Secrets Are Safe With Us</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              We understand the importance of privacy in your personal life. That's why we use the latest security measures to protect your information and ensure complete discretion. Your conversations, bookings, and personal details are never shared with anyone else.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Encrypted Communication</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">No Data Sharing</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Complete Discretion</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Discretely
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Best Quality Service</h4>
                <p className="text-sm text-yellow-400 font-bold">Excellence in Every Meeting</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our Chennai Escort Girls are not just beautiful - they're also professional, well-mannered, and committed to providing you with the highest quality service. We carefully select only the best girls who understand the importance of customer satisfaction.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Professional</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Well-Mannered</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Customer Focused</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm text-center">
              Experience Quality
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-3xl border border-green-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Experience the Difference?</h4>
            <p className="text-gray-300 text-sm">
              Now that you know what makes us special, are you ready to experience the best Chennai Escort service? We're confident that once you try our service, you'll never want to go anywhere else!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 20: Our Story & Experience */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 OUR STORY & EXPERIENCE 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">We've been serving Chennai for years, building trust and creating unforgettable experiences!</strong> Here's our story and what makes us the most trusted Chennai Escort service.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 OUR JOURNEY TO EXCELLENCE 🔥</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">We started our Chennai Escort service with a simple mission:</strong> to provide genuine, high-quality service to discerning clients who value discretion, professionalism, and unforgettable experiences.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Over the years, we've carefully built our reputation by working only with the most beautiful, intelligent, and professional girls. We've learned that success in this business comes from understanding our clients' needs and exceeding their expectations every single time.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Today, we're proud to be Chennai's most trusted escort service, known for our reliability, quality, and commitment to customer satisfaction. Our girls are not just escorts - they're beautiful women who understand the art of making you feel special and valued.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 WHAT SETS US APART 🔥</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Our experience has taught us that every client is unique,</strong> and that's why we offer personalized services tailored to your specific needs and preferences. Whether you're looking for a romantic dinner date, a business event partner, or someone to share intimate moments with - we have the perfect girl for you.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              We've also learned that trust is everything in this business. That's why we've implemented strict verification processes, background checks, and security measures to ensure your safety and privacy. When you book with us, you can be confident that you're dealing with a legitimate, professional service.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Our commitment to excellence has earned us a loyal clientele who trust us with their most important moments. We're not just providing a service - we're creating memories that will last a lifetime.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-3xl border border-pink-200"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Ready to Be Part of Our Story?</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              We invite you to experience the difference that years of experience and dedication can make. Our Chennai Escort Girls are ready to create unforgettable memories with you, just like they have with thousands of satisfied clients before you.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Don't just take our word for it - experience it for yourself! Book with us today and see why we're Chennai's most trusted and experienced escort service. We're confident that once you try our service, you'll understand why our clients keep coming back to us.
            </p>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-300 italic">
                💡 Pro Tip: Our experienced team knows exactly how to match you with the perfect girl based on your preferences, personality, and the type of experience you're looking for. Just tell us what you want, and we'll make it happen!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 21: Service Highlights & Features */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 SERVICE HIGHLIGHTS & FEATURES 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">See what makes our Chennai Escort service truly exceptional!</strong> We've carefully crafted every aspect of our service to ensure you get the best possible experience.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Personalized Matching</h4>
                <p className="text-sm text-pink-400 font-bold">Find Your Perfect Match</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our experienced team takes the time to understand your preferences, personality, and what you're looking for. We then carefully match you with the perfect Chennai Escort Girl who will complement your style and create the ideal experience for you.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Personalized</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Perfect Match</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Tailored Experience</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-pink-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Get Matched Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Flexible Scheduling</h4>
                <p className="text-sm text-blue-400 font-bold">Book When It's Convenient for You</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              We understand that your schedule might be unpredictable. That's why we offer flexible booking options - whether you need someone for a few hours, an entire day, or even longer. We work around your schedule, not the other way around.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Flexible Timing</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Short or Long Term</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Your Schedule</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Schedule Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Complete Safety & Security</h4>
                <p className="text-sm text-green-400 font-bold">Your Safety Is Our Priority</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              We take your safety seriously. All our girls are carefully vetted, and we use secure communication channels. We also provide safety tips and guidelines to ensure every meeting is safe, comfortable, and enjoyable for everyone involved.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Vetted Girls</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Secure Communication</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Safety Guidelines</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Learn About Safety
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Luxury Experience</h4>
                <p className="text-sm text-purple-400 font-bold">Luxury & Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              From the moment you contact us to the end of your meeting, we ensure a luxury experience. Our girls are not just beautiful - they're also well-mannered, intelligent, and committed to making you feel special and valued throughout your time together.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Luxury Service</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Well-Mannered</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Intelligent</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Experience Luxury
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Experience These Features?</h4>
            <p className="text-gray-300 text-sm">
              These are just some of the features that make our Chennai Escort service special. When you book with us, you'll experience all of these benefits and more. We're committed to providing you with the best possible experience every single time.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 22: Client Testimonials & Reviews */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 CLIENT TESTIMONIALS & REVIEWS 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Don't just take our word for it - hear what our satisfied clients have to say!</strong> These real testimonials show why we're Chennai's most trusted escort service.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Rajesh K. - Business Executive</h4>
                <p className="text-sm text-yellow-400 font-bold">⭐⭐⭐⭐⭐ 5/5 Stars</p>
              </div>
            </div>
            <blockquote className="text-gray-300 text-sm mb-3 italic">
              "I've been using this Chennai Escort service for over a year now, and I can honestly say they're the best in the city. The girls are not just beautiful - they're also intelligent, well-mannered, and know how to make you feel special. The booking process is smooth, and they always deliver exactly what they promise."
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Reliable</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Professional</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Satisfied</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Like Rajesh
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Priya M. - IT Professional</h4>
                <p className="text-sm text-green-400 font-bold">⭐⭐⭐⭐⭐ 5/5 Stars</p>
              </div>
            </div>
            <blockquote className="text-gray-300 text-sm mb-3 italic">
              "As a woman, I was initially hesitant about using an escort service, but I'm so glad I chose this one. The girls are genuine, caring, and understand exactly what you need. The privacy and discretion are top-notch, and I always feel safe and comfortable. Highly recommended!"
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Genuine</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Caring</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Safe</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Like Priya
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Crown className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Arjun S. - Entrepreneur</h4>
                <p className="text-sm text-blue-400 font-bold">⭐⭐⭐⭐⭐ 5/5 Stars</p>
              </div>
            </div>
            <blockquote className="text-gray-300 text-sm mb-3 italic">
              "I've tried several escort services in Chennai, but this one stands out for their professionalism and quality. The girls are not just beautiful - they're also well-educated and can hold intelligent conversations. Perfect for business dinners and social events. Worth every penny!"
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Professional</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Well-Educated</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Worth It</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Like Arjun
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Suresh R. - Corporate Manager</h4>
                <p className="text-sm text-purple-400 font-bold">⭐⭐⭐⭐⭐ 5/5 Stars</p>
              </div>
            </div>
            <blockquote className="text-gray-300 text-sm mb-3 italic">
              "The best thing about this service is their attention to detail and customer care. They remember your preferences and always try to match you with someone who fits your personality. The girls are punctual, professional, and always exceed expectations. I've been a loyal client for 2 years now."
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Attention to Detail</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Punctual</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Loyal Client</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Book Like Suresh
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-3xl border border-yellow-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Join Our Satisfied Clients?</h4>
            <p className="text-gray-300 text-sm">
              These testimonials are just a few examples of the positive experiences our clients have had. We're confident that once you try our service, you'll have your own success story to share. Book with us today and see why we're Chennai's most trusted escort service!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 23: Booking Process & Guidelines */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 BOOKING PROCESS & GUIDELINES 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Booking with our Chennai Escort service is simple, safe, and straightforward!</strong> Here's everything you need to know to get started and ensure a smooth, enjoyable experience.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Step 1: Contact Us</h4>
                <p className="text-sm text-green-400 font-bold">Get in Touch</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              The first step is simple - just send us a message on WhatsApp or give us a call. Tell us what you're looking for, your preferred timing, and any specific requirements you might have. We're here to help and answer all your questions.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">WhatsApp</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Phone Call</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Quick Response</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Contact Us Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Step 2: Choose Your Girl</h4>
                <p className="text-sm text-blue-400 font-bold">Select Your Perfect Match</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Based on your preferences and requirements, we'll show you profiles of our available Chennai Escort Girls. You can browse through their photos, read about their personalities, and choose the one who appeals to you most. We're here to help you make the perfect choice.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Browse Profiles</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Read Descriptions</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Perfect Choice</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Browse Profiles
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Calendar className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Step 3: Confirm Details</h4>
                <p className="text-sm text-purple-400 font-bold">Finalize Your Booking</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Once you've chosen your girl, we'll confirm all the details - timing, location, duration, and any special requirements. We'll also provide you with safety guidelines and tips to ensure you have a comfortable and enjoyable experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Confirm Details</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Safety Guidelines</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Comfort Tips</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Confirm Booking
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Step 4: Enjoy Your Experience</h4>
                <p className="text-sm text-yellow-400 font-bold">Have a Great Time</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              On the day of your meeting, your chosen Chennai Escort Girl will arrive at the agreed time and location. Just relax, be yourself, and enjoy the experience. We're confident you'll have a wonderful time and want to book with us again!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">On Time</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Relax</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Enjoy</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold text-sm text-center">
              Start Booking
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-3xl border border-green-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Start Your Booking?</h4>
            <p className="text-gray-300 text-sm">
              The booking process is designed to be simple, safe, and stress-free. We're here to guide you through every step and ensure you have the best possible experience. Don't hesitate to contact us if you have any questions - we're always happy to help!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 24: FAQ & Common Questions */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 FAQ & COMMON QUESTIONS 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Got questions? We've got answers!</strong> Here are the most frequently asked questions about our Chennai Escort service to help you make an informed decision.
          </p>
        </motion.div>
        
        <div className="space-y-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Are your girls really genuine?</h4>
                <p className="text-sm text-green-400 font-bold">100% Verified & Real</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Yes, absolutely! Every single one of our Chennai Escort Girls is carefully verified, background-checked, and genuinely committed to providing you with the best experience. We never use fake photos or misleading information - what you see is what you get!
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Verified</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Background Checked</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Real Photos</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">How do you ensure privacy and discretion?</h4>
                <p className="text-sm text-blue-400 font-bold">Complete Confidentiality</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Your privacy is our top priority. We use encrypted communication channels, never share your personal information with anyone else, and all our girls are trained in complete discretion. Your conversations, bookings, and personal details are completely confidential.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Encrypted</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Confidential</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Discrete</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">What are your operating hours?</h4>
                <p className="text-sm text-purple-400 font-bold">24/7 Availability</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              We're available 24/7, 365 days a year! Whether you need someone early in the morning, late at night, or any time in between - our Chennai Escort Girls are always ready to meet your needs. We understand that your schedule might be unpredictable.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">24/7</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">365 Days</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Flexible</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Do you provide services in all areas of Chennai?</h4>
                <p className="text-sm text-yellow-400 font-bold">Citywide Coverage</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Yes! We provide Chennai Escort services across all major areas of the city including Anna Nagar, T. Nagar, Adyar, OMR, Nungambakkam, ECR, Mahabalipuram, and Sholinganallur. No matter where you are in Chennai, our beautiful girls are ready to come to you.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Citywide</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">All Areas</span>
              <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Convenient</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">What makes your service different from others?</h4>
                <p className="text-sm text-pink-400 font-bold">Best Quality & Experience</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our Chennai Escort service stands out for our commitment to quality, safety, and customer satisfaction. We carefully select only the best girls, provide personalized matching, ensure complete privacy, and offer 24/7 support. We're not just providing a service - we're creating unforgettable experiences.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Quality</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Personalized</span>
              <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">Unforgettable</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-3xl border border-blue-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Still Have Questions?</h4>
            <p className="text-gray-300 text-sm">
              If you have any other questions or concerns, don't hesitate to contact us! We're always happy to help and answer any questions you might have about our Chennai Escort service. Your satisfaction and peace of mind are our top priorities.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 25: Contact Information & Support */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 CONTACT INFORMATION & SUPPORT 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">Ready to get started? We're here to help you every step of the way!</strong> Contact us through any of these channels and we'll respond quickly to assist you.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-4 mb-6">
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative mb-3 rounded-xl overflow-hidden">
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp Contact - Instant Response Chennai Escorts"
                width={200}
                height={100}
                className="w-full h-16 object-cover"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">WhatsApp - Instant Response</h4>
                <p className="text-sm text-green-400 font-bold">+91 81214 26651</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              The fastest way to reach us! Send us a WhatsApp message and we'll respond within minutes. Perfect for quick questions, immediate bookings, or any urgent requests. We're available 24/7 on WhatsApp.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Instant</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">24/7</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">Quick</span>
            </div>
            <a href="https://wa.me/918121426651"
               className="block w-full bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Chat on WhatsApp
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Phone Call - Direct Contact</h4>
                <p className="text-sm text-blue-400 font-bold">+91 81214 26651</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Prefer to speak directly? Give us a call and talk to our friendly team. We're here to answer all your questions, help you choose the perfect girl, and make your booking process smooth and easy.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Direct</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Friendly</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">Helpful</span>
            </div>
            <a href="tel:+918121426651" 
               className="block w-full bg-blue-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Call Now
            </a>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-4 border-2 border-red-600"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">24/7 Support & Assistance</h4>
                <p className="text-sm text-purple-400 font-bold">Always Here for You</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Our dedicated support team is available 24/7 to help you with any questions, concerns, or special requests. Whether you need help with booking, have questions about our services, or just want to chat - we're always here for you.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">24/7</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Dedicated</span>
              <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">Support</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="block w-full bg-purple-500 text-white px-4 py-2 rounded-xl font-bold text-sm text-center">
              Get Support
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-200">
            <h4 className="text-xl font-bold text-slate-800 mb-3">Ready to Get Started?</h4>
            <p className="text-gray-300 text-sm">
              Don't wait - contact us now and let's make your perfect Chennai Escort experience happen! We're excited to help you find the perfect girl and create unforgettable memories together. Your satisfaction is our guarantee!
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 26: Final Call-to-Action */}
      <motion.section 
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-black text-white mb-4">
            🔥 YOUR PERFECT CHENNAI ESCORT EXPERIENCE AWAITS! 🔥
          </h3>
          <p className="text-gray-300">
            <strong className="text-white">You've seen what we offer - now it's time to experience it for yourself!</strong> Don't let another day pass without experiencing the best Chennai Escort service available.
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 WHY WAIT? BOOK NOW! 🔥</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">You've read about our amazing Chennai Escort Girls, our commitment to safety and privacy, our 24/7 availability, and our dedication to providing the best possible experience.</strong> Now it's time to stop reading and start experiencing!
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every moment you wait is a moment you could be spending with one of our beautiful, intelligent, and caring escort girls. They're ready to meet you, ready to make you feel special, and ready to create memories that will last a lifetime.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">Don't let hesitation hold you back from the experience you deserve.</strong> Contact us now and let's make your perfect Chennai Escort experience happen today!
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-6 border-2 border-red-600 mb-6"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h4 className="text-xl font-black text-white mb-4 text-center">🔥 YOUR SATISFACTION IS OUR GUARANTEE! 🔥</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              We're so confident in the quality of our Chennai Escort service that we guarantee your satisfaction. If for any reason you're not completely happy with your experience, we'll work with you to make it right.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong className="text-white">But we know you'll love it!</strong> Our thousands of satisfied clients can't be wrong. Join them today and see why we're Chennai's most trusted and recommended escort service.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-3xl border border-yellow-200"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h4 className="text-xl font-bold text-slate-800 mb-4 text-center">Ready to Create Unforgettable Memories?</h4>
          <div className="space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              Your perfect Chennai Escort experience is just one message away. Contact us now and let's make it happen! We're excited to help you find the perfect girl and create the experience you've been dreaming of.
            </p>
            <div className="grid grid-cols-1 gap-3">
              <a href="https://wa.me/918121426651" 
                 className="block w-full bg-green-500 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl text-center">
                <MessageCircle className="inline w-5 h-5 mr-2" />
                WhatsApp Now - Instant Response
              </a>
              <a href="tel:+918121426651" 
                 className="block w-full bg-blue-500 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-2xl text-center">
                <Phone className="inline w-5 h-5 mr-2" />
                Call Now - Direct Contact
              </a>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-lg">
              <p className="text-sm text-gray-300 italic text-center">
                💡 Remember: We're available 24/7, so don't hesitate to contact us anytime. Your perfect Chennai Escort experience is waiting for you!
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};
