"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Heart, Star, Shield, Users, Zap, Crown, Sparkles, Play, ArrowRight } from 'lucide-react';
import { MobileHeader } from './mobile-header';

export const MobileHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setIsClient(true);
  }, []);


  const handleBrowseEscorts = () => {
    const profilesSection = document.querySelector('.mobile-profiles');
    if (profilesSection) {
      profilesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = () => {
    const message = encodeURIComponent('Hi, I would like to book an escort service. Please provide more details.');
    const phoneNumber = '918121426651';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mobile-hero"
    >
      {/* Enhanced Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/images/lillybabe-video.mp4" type="video/mp4" />
        </video>
        
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/80 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-pink-900/30" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl"
          animate={isClient ? {
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          } : {}}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-16 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"
          animate={isClient ? {
            x: [0, -25, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-28 h-28 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-xl"
          animate={isClient ? {
            x: [0, 20, 0],
            y: [0, -25, 0],
            scale: [1, 1.2, 1]
          } : {}}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full"
          animate={isClient ? {
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400/40 rounded-full"
          animate={isClient ? {
            y: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4]
          } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-yellow-400/50 rounded-full"
          animate={isClient ? {
            y: [0, -25, 0],
            opacity: [0.3, 0.7, 0.3]
          } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Mobile Header */}
      <div className="relative z-[70]">
        <MobileHeader />
      </div>
      
      {/* App Content */}
      <div className="relative z-10 px-4 pt-6 pb-8">
        {/* Glassmorphism Background */}
        <motion.div
          className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        {/* Welcome Message */}
        <motion.div 
          className="mb-8 text-center relative z-20"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-6 py-3 mb-6 border border-white/20 shadow-2xl"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Crown className="h-5 w-5 text-yellow-400 fill-current" />
            </motion.div>
            <span className="text-white text-sm font-bold">#1 GENUINE CHENNAI ESCORTS</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl font-black text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Find Your Perfect
            <motion.span 
              className="block bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              Chennai Escort
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-300 text-lg leading-relaxed max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            WE'RE SO CONFIDENT - TRY OUR CHENNAI ESCORTS SERVICE FREE IF YOU'RE NOT HAPPY!. You absolutely deserve the best Chennai Escorts - and that's exactly what we're offering! ⭐
          </motion.p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: "500+", label: "Verified Escorts", icon: Users },
            { number: "4.9", label: "Customer Rating", icon: Star },
            { number: "24/7", label: "Available", icon: Clock }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 text-center border border-white/20 shadow-2xl"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="text-2xl font-black text-white mb-1"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs text-gray-300 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          className="flex items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Shield, text: "100% Safe", color: "text-green-400" },
            { icon: Users, text: "Verified", color: "text-blue-400" },
            { icon: Zap, text: "Instant", color: "text-yellow-400" }
          ].map((badge, index) => (
            <motion.div 
              key={index}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <badge.icon className={`h-4 w-4 ${badge.color}`} />
              <span className="text-white text-xs font-bold">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Quick Actions */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button 
            onClick={handleBrowseEscorts}
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-3xl py-6 text-lg font-black shadow-2xl relative overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative flex items-center justify-center">
              <MapPin className="h-6 w-6 mr-3" />
            Browse All Escorts
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </div>
          </motion.button>
          
          <motion.button 
            onClick={handleBookNow}
            className="w-full bg-white/10 backdrop-blur-xl text-white rounded-3xl py-6 text-lg font-black border border-white/20 shadow-2xl relative overflow-hidden group"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(255,255,255,0.15)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Play className="h-6 w-6 mr-3" />
              </motion.div>
            Book Now - 24/7
        </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
