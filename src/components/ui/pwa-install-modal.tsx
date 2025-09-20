'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone, Star, Heart, Sparkles, Shield, Zap } from 'lucide-react';
import Image from 'next/image';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => void;
}

export const PWAInstallModal = ({ isOpen, onClose, onInstall }: PWAInstallModalProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop with subtle gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-pink-900/40 to-red-900/40 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg bg-gradient-to-br from-gray-900 via-purple-900/90 to-pink-900/90 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"></div>
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-800/90 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <X className="h-4 w-4 text-white" />
            </button>

            {/* Header with improved gradient overlay */}
            <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
              <Image
                src="/images/popup.jpg"
                alt="LillyBabe App Preview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink/90" />
            </div>

            {/* Content */}
            <div className="pt-10 pb-6 px-6 overflow-y-auto">
              <motion.div
                className="text-center mb-5 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Install LillyBabe App
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                  Enhance your experience with our beautiful mobile app. 
                  Fast, secure, and always available at your fingertips!
                </p>
              </motion.div>

              {/* Install Button */}
              <motion.button
                onClick={onInstall}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 hover:from-pink-600 hover:via-purple-600 hover:to-red-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ 
                  scale: 1.02,
                  background: "linear-gradient(to right, #db2777, #9333ea, #dc2626)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Install App Now</span>
              </motion.button>

              {/* Footer */}
              <motion.p
                className="text-center text-xs text-gray-400 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Free to install • No app store required • One-tap access
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};