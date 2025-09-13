'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles, Star, Heart, Zap, Crown } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  description?: string;
  expectedDate?: string;
  theme?: 'default' | 'pink' | 'purple' | 'gradient';
  autoDetectPageName?: boolean;
  customPageName?: string;
}

export const ComingSoon = ({
  title,
  subtitle,
  description,
  expectedDate,
  theme = 'gradient',
  autoDetectPageName = true,
  customPageName
}: ComingSoonProps) => {
  const pathname = usePathname();
  const [pageName, setPageName] = useState<string>('');
  const [generatedTitle, setGeneratedTitle] = useState<string>('');
  const [generatedSubtitle, setGeneratedSubtitle] = useState<string>('');
  const [generatedDescription, setGeneratedDescription] = useState<string>('');
  const [launchDate, setLaunchDate] = useState<string>('');

  // Function to get date 30 days from now
  const getDateIn30Days = (): string => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + 30);
    return futureDate.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
  };

  // Function to format page name from URL
  const formatPageName = (path: string): string => {
    if (!path || path === '/') return 'Home';
    
    // Remove leading slash and split by '/'
    const segments = path.replace(/^\//, '').split('/');
    
    // Get the last segment (main page name)
    let pageSegment = segments[segments.length - 1];
    
    // Handle dynamic routes like [slug] or [id]
    if (pageSegment.startsWith('[') && pageSegment.endsWith(']')) {
      pageSegment = segments[segments.length - 2] || 'Page';
    }
    
    // Convert kebab-case to Title Case
    return pageSegment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Function to generate content based on page name
  const generateContent = (page: string) => {
    const pageLower = page.toLowerCase();
    
    // Default content
    let pageTitle = `${page} - Coming Soon!`;
    let pageSubtitle = "Get Ready for an Incredible Experience";
    let pageDescription = `This ${page.toLowerCase()} page is currently under development and design. Our team is working hard to create an amazing experience for you. We're going live very soon!`;

    // Customize content based on page type
    if (pageLower.includes('escort') || pageLower.includes('model') || pageLower.includes('girl')) {
      pageTitle = `${page} - Coming Soon!`;
      pageSubtitle = "Beautiful Profiles Coming Your Way";
      pageDescription = `We're preparing an amazing collection of ${page.toLowerCase()} profiles for you. Stay tuned for the most beautiful and verified profiles in Chennai!`;
    } else if (pageLower.includes('location') || pageLower.includes('area')) {
      pageTitle = `${page} - Coming Soon!`;
      pageSubtitle = "New Location Services Launching";
      pageDescription = `We're expanding our services to ${page.toLowerCase()}. Get ready for premium escort services in this beautiful location!`;
    } else if (pageLower.includes('gallery') || pageLower.includes('photo')) {
      pageTitle = `${page} - Coming Soon!`;
      pageSubtitle = "Stunning Gallery Coming Soon";
      pageDescription = `We're curating a beautiful collection of photos for our ${page.toLowerCase()}. Get ready to be amazed by our stunning visuals!`;
    } else if (pageLower.includes('contact') || pageLower.includes('about')) {
      pageTitle = `${page} - Coming Soon!`;
      pageSubtitle = "Get in Touch Soon";
      pageDescription = `Our ${page.toLowerCase()} page is being updated with new contact information and details. We'll be back online very soon!`;
    } else if (pageLower.includes('blog') || pageLower.includes('news')) {
      pageTitle = `${page} - Coming Soon!`;
      pageSubtitle = "Fresh Content Coming Your Way";
      pageDescription = `We're preparing exciting new content for our ${page.toLowerCase()}. Stay tuned for the latest updates and stories!`;
    }

    return { pageTitle, pageSubtitle, pageDescription };
  };

  useEffect(() => {
    // Set launch date to 30 days from now if not provided
    setLaunchDate(expectedDate || getDateIn30Days());

    if (autoDetectPageName) {
      const detectedPageName = customPageName || formatPageName(pathname);
      setPageName(detectedPageName);
      
      const { pageTitle, pageSubtitle, pageDescription } = generateContent(detectedPageName);
      setGeneratedTitle(pageTitle);
      setGeneratedSubtitle(pageSubtitle);
      setGeneratedDescription(pageDescription);
    } else {
      setPageName(customPageName || 'Page');
      setGeneratedTitle(title || "Something Amazing is Coming Soon!");
      setGeneratedSubtitle(subtitle || "Get Ready for an Incredible Experience");
      setGeneratedDescription(description || "This page is currently under development and design. Our team is working hard to create an amazing experience for you. We're going live very soon!");
    }
  }, [pathname, autoDetectPageName, customPageName, title, subtitle, description, expectedDate]);

  const getThemeClasses = () => {
    switch (theme) {
      case 'pink':
        return {
          background: 'bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600',
          accent: 'text-pink-100',
          button: 'bg-white text-pink-600 hover:bg-pink-50',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
      case 'purple':
        return {
          background: 'bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700',
          accent: 'text-purple-100',
          button: 'bg-white text-purple-600 hover:bg-purple-50',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
      case 'gradient':
        return {
          background: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
          accent: 'text-gray-200',
          button: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
      default:
        return {
          background: 'bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700',
          accent: 'text-blue-100',
          button: 'bg-white text-blue-600 hover:bg-blue-50',
          card: 'bg-white/10 backdrop-blur-sm border-white/20'
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`min-h-screen ${themeClasses.background} relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
        
        {/* Floating Icons */}
        <motion.div
          className="absolute top-20 left-20 text-white/20"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={40} />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-32 text-white/20"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Star size={35} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-32 text-white/20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Heart size={30} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-20 text-white/20"
          animate={{ 
            y: [0, 25, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Zap size={38} />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Crown Icon */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2
            }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30">
              <Crown className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
              {generatedTitle}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {generatedSubtitle}
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {generatedDescription}
          </motion.p>

          {/* Development Status */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
              <motion.div
                className="w-3 h-3 bg-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wider">
                Under Development
              </span>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-base mb-4">
                🚧 <strong className="text-white">This page is currently under development and design.</strong> Our team is working hard to create an amazing experience for you.
              </p>
              <p className="text-gray-300 text-base mb-4">
                ⚡ <strong className="text-white">We're going live very soon!</strong> Stay tuned for updates and be the first to experience our new features.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Design Phase
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  Development
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  Testing
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  Launch Ready
                </span>
              </div>
              
              {/* Progress Bar */}
              <div className="max-w-md mx-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Development Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Almost ready for launch! 🚀
                </p>
              </div>
            </div>
          </motion.div>


          {/* Launch Date Info */}
          <motion.div
            className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-200 font-semibold">Expected Launch Date</span>
            </div>
            <p className="text-white text-lg font-bold text-center">
              {new Date(launchDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="text-gray-300 text-sm text-center mt-1">
              (30 days from today)
            </p>
          </motion.div>


          {/* Additional Info */}
          <motion.div
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Launching Soon</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Something Amazing</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>Stay Tuned</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};