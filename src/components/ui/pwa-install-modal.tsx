'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone, Star, Heart } from 'lucide-react';
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
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 rounded-2xl sm:rounded-3xl shadow-2xl border border-pink-200 overflow-hidden max-h-[90vh] sm:max-h-[85vh] md:max-h-[80vh]"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
              <Image
                src="/images/popup.jpg"
                alt="LillyBabe App Preview"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 via-purple-500/60 to-red-500/60" />
              <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 md:p-6 overflow-y-auto">
              <motion.div
                className="text-center mb-4 sm:mb-5 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-800 mb-2 sm:mb-3">
                  Install LillyBabe App
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-0">
                  Get the best Chennai Escort experience with our beautiful mobile app. 
                  Fast, secure, and always available!
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="space-y-2 sm:space-y-3 mb-4 sm:mb-5 md:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Native App Experience</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white fill-current" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">Premium Quality Service</span>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-white fill-current" />
                  </div>
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">24/7 Available</span>
                </div>
              </motion.div>

              {/* Install Button */}
              <motion.button
                onClick={onInstall}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce" />
                <span>Install App</span>
              </motion.button>

              {/* Footer */}
              <motion.p
                className="text-center text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 px-2 sm:px-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Free to install • No app store required
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
