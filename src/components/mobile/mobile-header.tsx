"use client";

import { useState, useEffect } from 'react';
import { Heart, ArrowLeft, Share2, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { MobileDarkMode } from './mobile-dark-mode';
import { MobileNavigation } from './mobile-navigation';

interface MobileHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const MobileHeader = ({ 
  title = "LillyBabe", 
  showBack = false, 
  onBack
}: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'LillyBabe - Chennai Escorts',
          text: 'Find the best escort services in Chennai with LillyBabe',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const shareUrl = `https://wa.me/?text=${encodeURIComponent(
        'Check out LillyBabe - Best escort services in Chennai: ' + window.location.href
      )}`;
      window.open(shareUrl, '_blank');
    }
  };

  return (
    <>
      {/* Header */}
      <motion.div 
        className={`sticky top-0 z-[60] backdrop-blur-md px-4 py-3 border-b shadow-lg transition-all duration-300 ${
          isScrolled 
            ? 'bg-gradient-to-r from-black/98 via-gray-900/98 to-black/98 border-yellow-500/30 shadow-2xl' 
            : 'bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 border-yellow-500/20 shadow-lg'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ 
          position: 'sticky',
          top: 0,
          zIndex: 60,
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)'
        }}
      >
        <div className="flex items-center justify-between">
          {/* Left Side - Kiss Image */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/kiss.png"
                alt="Kiss"
                width={32}
                height={32}
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10' : 'w-8 h-8'
                }`}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
                }}
              />
            </motion.div>
          </div>

          {/* Center - LillyBabe Logo */}
          <div className="flex items-center">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.span
                className={`font-black text-white drop-shadow-lg transition-all duration-300 ${
                  isScrolled ? 'text-3xl' : 'text-2xl'
                }`}
                style={{
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)',
                  color: '#ffffff',
                  fontWeight: '900',
                  fontSize: isScrolled ? '1.875rem' : '1.5rem'
                }}
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)",
                    "0 0 30px rgba(255, 255, 255, 1), 0 0 60px rgba(255, 255, 255, 0.6)",
                    "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                LillyBabe
              </motion.span>
              <motion.div
                className="ml-2"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart 
                  className={`text-pink-400 fill-current drop-shadow-lg transition-all duration-300 ${
                    isScrolled ? 'h-6 w-6' : 'h-5 w-5'
                  }`}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.8))'
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Kiss Image */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src="/images/kiss.png"
                alt="Kiss"
                width={32}
                height={32}
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'w-10 h-10' : 'w-8 h-8'
                }`}
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
                }}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <MobileNavigation 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};
