'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone, Star, Heart, Sparkles } from 'lucide-react';

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
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
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
            className="relative w-full max-w-md bg-gradient-to-br from-pink-50 via-purple-50 to-red-50 rounded-3xl shadow-2xl border border-pink-200 overflow-hidden"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="relative h-48 bg-gradient-to-br from-pink-500 via-purple-500 to-red-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Floating Hearts */}
              <motion.div
                className="absolute top-4 left-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="h-6 w-6 text-white/80 fill-current" />
              </motion.div>
              
              <motion.div
                className="absolute top-8 right-8"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <Star className="h-5 w-5 text-yellow-300 fill-current" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-8"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 15, 0]
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Sparkles className="h-4 w-4 text-pink-300" />
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6">
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-black text-gray-800 mb-2">
                  Install LillyBabe App
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Get the best Chennai Escort experience with our beautiful mobile app. 
                  Fast, secure, and always available!
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="space-y-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Smartphone className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Native App Experience</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-red-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 text-white fill-current" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">Premium Quality Service</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-white fill-current" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">24/7 Available</span>
                </div>
              </motion.div>

              {/* Install Button */}
              <motion.button
                onClick={onInstall}
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span>Install App</span>
              </motion.button>

              {/* Footer */}
              <motion.p
                className="text-center text-xs text-gray-500 mt-4"
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
