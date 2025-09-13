'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Info, 
  Phone, 
  Star, 
  Heart,
  Crown,
  Sparkles,
  X,
  ChevronRight,
  MapPin,
  BookOpen,
  Camera
} from 'lucide-react';
import Image from 'next/image';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const navigationItems = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      href: '/',
      description: 'Discover our premium services',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'about',
      label: 'About',
      icon: Info,
      href: '/about',
      description: 'Learn about our services',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'escorts',
      label: 'Escorts',
      icon: Users,
      href: '/escorts',
      description: 'Meet our beautiful companions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Camera,
      href: '/gallery',
      description: 'View our stunning photos',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'locations',
      label: 'Locations',
      icon: MapPin,
      href: '/locations',
      description: 'Find us in your area',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: BookOpen,
      href: '/blog',
      description: 'Read our latest updates',
      color: 'from-cyan-500 to-indigo-500'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Phone,
      href: '/contact',
      description: 'Get in touch with us',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const quickActions = [
    {
      id: 'favorites',
      label: 'Favorites',
      icon: Heart,
      action: () => {
        // Handle favorites
        console.log('Favorites clicked');
      },
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'premium',
      label: 'Premium',
      icon: Crown,
      action: () => {
        // Handle premium
        console.log('Premium clicked');
      },
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Navigation Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-gray-900 via-purple-900 to-black z-50 shadow-2xl"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="relative p-6 border-b border-purple-500/20">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Logo and Title */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/images/kiss.png"
                    alt="LillyBabe"
                    width={50}
                    height={50}
                    className="w-12 h-12 object-contain"
                  />
                  <motion.div
                    className="absolute -top-1 -right-1"
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
                    <Heart className="h-4 w-4 text-pink-400 fill-current" />
                  </motion.div>
                </motion.div>
                <div>
                  <h2 className="text-xl font-bold text-white">LillyBabe</h2>
                  <p className="text-purple-300 text-sm">Premium Chennai Escorts</p>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-2 left-4"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sparkles className="h-4 w-4 text-yellow-400" />
              </motion.div>
            </div>

            {/* Navigation Items */}
            <div className="p-6 space-y-2">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                        {item.label}
                      </h3>
                      <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-t border-purple-500/20">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                Quick Actions
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <motion.button
                      key={action.id}
                      onClick={action.action}
                      className={`p-4 rounded-xl bg-gradient-to-r ${action.color} shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-2`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                      <span className="text-white text-xs font-medium">{action.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-500/20">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-purple-300 text-sm font-medium mb-2">
                  Best Chennai Escorts
                </p>
                <p className="text-gray-400 text-xs">
                  Premium service • 24/7 available • Discreet & professional
                </p>
                <div className="flex justify-center gap-2 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    >
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
