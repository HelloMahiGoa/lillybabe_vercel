import React from 'react';

interface GalleryHeaderProps {
  totalProfiles: number;
  filteredCount: number;
}

export function GalleryHeader({ totalProfiles, filteredCount }: GalleryHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Chennai Escorts Gallery
          </h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Discover Beautiful & Verified Escort Girls in Chennai
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {filteredCount} Available
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {totalProfiles} Total Profiles
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                24/7 Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
