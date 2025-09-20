'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Smartphone } from 'lucide-react';

interface PWAInstallBannerProps {
  isOpen: boolean;
  onClose: () => void;
  onInstall: () => void;
}

export const PWAInstallBanner = ({ isOpen, onClose, onInstall }: PWAInstallBannerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bottom-4 left-4 right-4 z-40 max-w-md mx-auto"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="bg-gradient-to-r from-gray-900 via-purple-900/90 to-pink-900/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50 p-4">
            <div className="flex items-center gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Install LillyBabe App
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Get faster access and better mobile experience
                </p>
              </div>
              
              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={onInstall}
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300 flex items-center gap-1"
                >
                  <Download className="h-3 w-3" />
                  Install
                </button>
                
                <button
                  onClick={onClose}
                  className="w-6 h-6 bg-gray-700/50 hover:bg-gray-600/50 rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <X className="h-3 w-3 text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
