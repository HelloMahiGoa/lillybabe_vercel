"use client";

import { MessageCircle } from 'lucide-react';

export const MobileQuickActions = () => {
  const handleWhatsApp = () => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent('Hi, I am looking escorts service in Chennai');
    const phoneNumber = '919876543210';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-4 z-40">
        <button
          onClick={handleWhatsApp}
          className="group relative w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:from-green-600 hover:to-green-700"
        >
          {/* WhatsApp Icon */}
          <MessageCircle className="h-7 w-7" />
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
          </div>
        </button>
      </div>
    </>
  );
};
