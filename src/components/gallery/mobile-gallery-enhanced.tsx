import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Profile } from '@/types';
import { Star, MapPin, Shield, Crown, Filter, Search, X, ChevronDown } from 'lucide-react';

interface MobileGalleryEnhancedProps {
  profiles: Profile[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  selectedLocation: string;
  onLocationChange: (location: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'russian', label: 'Russian' },
  { value: 'indian', label: 'Indian' },
  { value: 'housewife', label: 'Housewife' },
  { value: 'tamil', label: 'Tamil' },
  { value: 'model', label: 'Model' },
  { value: 'teen', label: 'Teen' },
  { value: 'celebrity', label: 'Celebrity' }
];

const sortOptions = [
  { value: 'featured', label: 'Featured First' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price_low', label: 'Price: Low to High' },
  { value: 'price_high', label: 'Price: High to Low' },
  { value: 'age_young', label: 'Age: Youngest First' },
  { value: 'age_mature', label: 'Age: Mature First' }
];

export function MobileGalleryEnhanced({
  profiles,
  loading,
  error,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedLocation,
  onLocationChange,
  sortBy,
  onSortChange
}: MobileGalleryEnhancedProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  if (loading) {
    return (
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
              <div className="aspect-[3/4] bg-gray-300"></div>
              <div className="p-3">
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="text-red-500 text-4xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Error Loading Profiles</h3>
        <p className="text-gray-600 mb-4 text-sm">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (profiles.length === 0) {
    return (
      <div className="px-4 py-12 text-center">
        <div className="text-gray-400 text-4xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No Profiles Found</h3>
        <p className="text-gray-600 mb-4 text-sm">
          Try adjusting your search criteria or filters to find more profiles.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600 transition-colors"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Mobile Search & Filter Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="px-4 py-3">
          {/* Search Bar */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search profiles..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>

          {/* Active Filters */}
          {(searchTerm || selectedCategory !== 'all') && (
            <div className="flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-pink-100 text-pink-800">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => onSearchChange('')}
                    className="ml-1 text-pink-600 hover:text-pink-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">
                  {categories.find(c => c.value === selectedCategory)?.label}
                  <button
                    onClick={() => onCategoryChange('all')}
                    className="ml-1 text-purple-600 hover:text-purple-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="border-t border-gray-200 bg-gray-50 p-4">
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => onCategoryChange(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Close Filters Button */}
              <button
                onClick={() => setShowFilters(false)}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
              >
                Close Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="px-4 py-3 bg-white border-b border-gray-100">
        <p className="text-sm text-gray-600">
          Showing <span className="font-semibold text-pink-600">{profiles.length}</span> profiles
        </p>
      </div>

      {/* Profile Grid */}
      <div className="px-4 py-6">
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              href={`/escorts/${profile.slug}`}
              className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={profile.photo_url || '/images/placeholder.jpg'}
                  alt={profile.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                
                {/* Overlay badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {profile.is_featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Crown className="h-3 w-3" />
                      <span className="hidden sm:inline">Featured</span>
                    </div>
                  )}
                  {(profile as any).is_verified && (
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span className="hidden sm:inline">Verified</span>
                    </div>
                  )}
                </div>

                {/* Price badge */}
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {profile.pricing?.['1 Shot'] || 'Contact'}
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className="p-3">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-1 flex-1">
                    {profile.name}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 flex-shrink-0 ml-2">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-semibold">{profile.rating}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                  <span className="font-medium">{profile.age}y</span>
                  <span className="capitalize">{profile.category}</span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-green-600">
                    <MapPin className="h-3 w-3" />
                    <span className="truncate">{profile.location}</span>
                  </div>
                  <span className="text-blue-600">{profile.views_count}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        {profiles.length >= 20 && (
          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
              Load More Profiles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
