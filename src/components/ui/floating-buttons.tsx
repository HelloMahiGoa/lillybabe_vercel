'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronUp, MessageCircle } from 'lucide-react';

export const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const message = encodeURIComponent("Hi! I'm interested in your Chennai Escort service. Can you help me with more information?");
      const whatsappUrl = `https://wa.me/918121426651?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  if (!isClient) {
    return (
      <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3">
        {/* Placeholder for SSR */}
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-2xl border-2 border-white/20 opacity-0" />
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl border-2 border-white/20 opacity-0" />
      </div>
    );
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-50 flex flex-col gap-3">
          {/* Scroll to Top Button with Bikini Girl Icon */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center group overflow-hidden"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              delay: 0.1
            }}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-md"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Bikini Girl Icon with Animation */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                y: [0, -2, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/bikini-girl.png"
                alt="Scroll to Top"
                width={36}
                height={36}
                className="w-9 h-9 object-contain filter brightness-0 invert drop-shadow-lg"
              />
            </motion.div>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-red-600 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Floating Particles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-60" />
              <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-40" />
              <div className="absolute top-3 right-1 w-1 h-1 bg-white rounded-full opacity-50" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div 
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              Scroll to Top
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </motion.div>
          </motion.button>

          {/* WhatsApp Floating Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-2xl border-2 border-white/20 flex items-center justify-center group overflow-hidden"
            initial={{ scale: 0, opacity: 0, rotate: 180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: -180 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 25,
              delay: 0.2
            }}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-full blur-md"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* WhatsApp Icon with Animation */}
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, -3, 3, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/images/whatsapp.png"
                alt="WhatsApp"
                width={32}
                height={32}
                className="w-8 h-8 object-contain drop-shadow-lg"
              />
            </motion.div>
            
            {/* Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-green-500 rounded-full"
              animate={{ 
                scale: [1, 1.4, 1],
                opacity: [0.6, 0, 0.6]
              }}
              transition={{ 
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Floating Particles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-70" />
              <div className="absolute bottom-1 right-3 w-1 h-1 bg-white rounded-full opacity-50" />
              <div className="absolute top-4 right-2 w-1 h-1 bg-white rounded-full opacity-60" />
            </motion.div>
            
            {/* Tooltip */}
            <motion.div 
              className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              Chat on WhatsApp
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/90 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
            </motion.div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};
