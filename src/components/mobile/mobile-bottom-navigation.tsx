'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Info,
  Phone,
  MapPin,
  BookOpen,
  Camera
} from 'lucide-react';
import { usePathname } from 'next/navigation';

export const MobileBottomNavigation = () => {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

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
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30'
    },
    {
      id: 'about',
      label: 'About',
      icon: Info,
      href: '/about',
      color: 'from-green-500 to-blue-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'escorts',
      label: 'Escorts',
      icon: Users,
      href: '/escorts',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Camera,
      href: '/gallery',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'locations',
      label: 'Locations',
      icon: MapPin,
      href: '/locations',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/30'
    },
    {
      id: 'blog',
      label: 'Blog',
      icon: BookOpen,
      href: '/blog',
      color: 'from-cyan-500 to-indigo-500',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: Phone,
      href: '/contact-us',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30'
    }
  ];


  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
    >
      {/* Enhanced Background with Glassmorphism */}
      <div className="relative">
        {/* Background Blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-gray-900/90 to-transparent backdrop-blur-xl" />
        
        {/* Animated Border */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        />
        
        {/* Main Container */}
        <div className="relative px-3 py-1">
          {/* Navigation Container */}
          <div className="relative max-w-sm mx-auto">
            {/* Active Background Indicator */}
            <AnimatePresence>
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                if (!active) return null;
                
                return (
                  <motion.div
                    key={`active-bg-${item.id}`}
                    className={`absolute inset-0 ${item.bgColor} rounded-2xl border ${item.borderColor} backdrop-blur-sm`}
                    layoutId="activeTabBackground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      mass: 0.8
                    }}
                  />
                );
              })}
            </AnimatePresence>
            
            {/* Navigation Items */}
            <div className="relative flex items-center justify-between">
              {navigationItems.map((item, index) => {
                const IconComponent = item.icon;
                const active = isActive(item.href);
                
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    className="relative flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition-all duration-300 min-w-0 flex-1 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.7 + index * 0.1,
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    {/* Icon Container */}
                    <motion.div
                      className={`relative w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        active 
                          ? `bg-gradient-to-r ${item.color} shadow-lg shadow-current/25` 
                          : 'bg-white/5 hover:bg-white/10 group-hover:bg-white/15'
                      }`}
                      animate={{
                        scale: active ? 1.1 : 1,
                        rotate: active ? [0, -5, 5, 0] : 0,
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        rotate: { duration: 0.6, delay: 0.2 }
                      }}
                    >
                      {/* Icon */}
                      <IconComponent 
                        className={`h-4 w-4 transition-all duration-300 ${
                          active 
                            ? 'text-white drop-shadow-lg' 
                            : 'text-gray-400 group-hover:text-gray-300'
                        }`}
                        style={{
                          filter: active ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' : 'none'
                        }}
                      />
                      
                      {/* Active Glow Effect */}
                      {active && (
                        <motion.div
                          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${item.color} opacity-20`}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.4, 0.2]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </motion.div>
                    
                    {/* Label */}
                    <motion.span
                      className={`text-[9px] font-medium transition-all duration-300 truncate ${
                        active 
                          ? 'text-white drop-shadow-sm' 
                          : 'text-gray-400 group-hover:text-gray-300'
                      }`}
                      animate={{
                        y: active ? -2 : 0,
                        scale: active ? 1.05 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                    
                    {/* Active Indicator Dot */}
                    {active && (
                      <motion.div
                        className={`absolute -top-0.5 w-1 h-1 rounded-full bg-gradient-to-r ${item.color} shadow-lg`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 25 
                        }}
                      />
                    )}
                    
                    {/* Hover Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-white/5"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
