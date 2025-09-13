"use client";

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const MobileDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDark(shouldBeDark);
    
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    if (typeof window === 'undefined') return;
    
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Don't render until loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <button className="w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/30">
        <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="w-8 h-8 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-yellow-400/30 hover:from-yellow-500/30 hover:to-amber-500/30 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-yellow-500/20"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-400 animate-pulse" />
      ) : (
        <Moon className="h-4 w-4 text-yellow-400" />
      )}
    </button>
  );
};
