"use client";

import { useState } from 'react';
import { Heart, Bell, Search, ArrowLeft, Share2 } from 'lucide-react';
import { MobileNotifications } from './mobile-notifications';
import { MobileDarkMode } from './mobile-dark-mode';

interface MobileHeaderProps {
  title?: string;
  showBack?: boolean;
  showSearch?: boolean;
  onBack?: () => void;
  onSearch?: () => void;
}

export const MobileHeader = ({ 
  title = "LillyBabe", 
  showBack = false, 
  showSearch = false,
  onBack,
  onSearch 
}: MobileHeaderProps) => {
  const handleShare = async () => {
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
      {/* Status Bar */}
      <div className="h-6 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900"></div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center gap-3">
            {showBack && (
              <button 
                onClick={onBack}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <ArrowLeft className="h-4 w-4 text-white" />
              </button>
            )}
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-pink-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">{title}</h1>
                <p className="text-xs text-pink-200">Chennai Escorts</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {showSearch && (
              <button 
                onClick={onSearch}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              >
                <Search className="h-4 w-4 text-white" />
              </button>
            )}
            
            <MobileDarkMode />
            
            <button 
              onClick={handleShare}
              className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Share2 className="h-4 w-4 text-white" />
            </button>
            
            <MobileNotifications />
          </div>
        </div>
      </div>
    </>
  );
};
