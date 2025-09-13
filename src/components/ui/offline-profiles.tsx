'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, WifiOff, RefreshCw, AlertCircle } from 'lucide-react';

interface OfflineProfilesProps {
  profiles: any[];
  loading: boolean;
  error: string | null;
  isOffline: boolean;
  fromCache: boolean;
  onRetry: () => void;
  children: React.ReactNode;
}

export const OfflineProfiles: React.FC<OfflineProfilesProps> = ({
  profiles,
  loading,
  error,
  isOffline,
  fromCache,
  onRetry,
  children
}) => {
  // Show loading state
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-pink-500 border-t-transparent rounded-full"
        />
        <p className="mt-4 text-gray-600">Loading profiles...</p>
      </div>
    );
  }

  // Show offline state with cached data
  if (isOffline && profiles.length > 0) {
    return (
      <div className="space-y-4">
        {/* Offline Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center space-x-3"
        >
          <WifiOff className="w-5 h-5 text-amber-600" />
          <div className="flex-1">
            <p className="text-amber-800 font-medium">You're offline</p>
            <p className="text-amber-700 text-sm">
              Showing cached profiles. Some data may be outdated.
            </p>
          </div>
          <button
            onClick={onRetry}
            className="text-amber-600 hover:text-amber-800 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Cached Data Indicator */}
        {fromCache && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-3 flex items-center space-x-2"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <p className="text-blue-700 text-sm">
              Showing cached data from {new Date().toLocaleTimeString()}
            </p>
          </motion.div>
        )}

        {/* Profiles */}
        {children}
      </div>
    );
  }

  // Show offline state with no cached data
  if (isOffline && profiles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <WifiOff className="w-10 h-10 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          You're Offline
        </h3>
        
        <p className="text-gray-600 text-center mb-6 max-w-md">
          No internet connection detected. Please check your network and try again.
        </p>
        
        <button
          onClick={onRetry}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again</span>
        </button>
        
        <p className="text-gray-500 text-sm mt-4">
          Make sure you're connected to WiFi or mobile data
        </p>
      </motion.div>
    );
  }

  // Show error state
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Unable to Load Profiles
        </h3>
        
        <p className="text-gray-600 text-center mb-6 max-w-md">
          {error}
        </p>
        
        <button
          onClick={onRetry}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Retry</span>
        </button>
      </motion.div>
    );
  }

  // Show empty state
  if (profiles.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Wifi className="w-10 h-10 text-gray-400" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          No Profiles Found
        </h3>
        
        <p className="text-gray-600 text-center mb-6 max-w-md">
          No profiles are available at the moment. Please try again later.
        </p>
        
        <button
          onClick={onRetry}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Refresh</span>
        </button>
      </motion.div>
    );
  }

  // Show profiles normally
  return (
    <div className="space-y-4">

      {children}
    </div>
  );
};
