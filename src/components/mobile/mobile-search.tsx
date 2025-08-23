"use client";

import { useState } from 'react';
import { Search, MapPin, Filter, X, Sliders, Star, Users, Clock } from 'lucide-react';

export const MobileSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    { id: 'age-18-25', label: '18-25', icon: Users },
    { id: 'age-26-35', label: '26-35', icon: Users },
    { id: 'age-36+', label: '36+', icon: Users },
    { id: 'tamil', label: 'Tamil', icon: Star },
    { id: 'russian', label: 'Russian', icon: Star },
    { id: 'independent', label: 'Independent', icon: Star },
    { id: 'vip', label: 'VIP', icon: Star },
    { id: 'verified', label: 'Verified', icon: Star },
    { id: 'available-now', label: 'Available Now', icon: Clock },
  ];

  const locations = [
    'T-Nagar', 'Adyar', 'OMR', 'ECR', 'Anna Nagar', 'Velachery', 
    'Porur', 'Tambaram', 'Chennai Central', 'Airport'
  ];

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search escorts, locations, or preferences..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-50 rounded-2xl pl-12 pr-12 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white"
          />
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <Filter className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Advanced Search Panel */}
      {isSearchOpen && (
        <div className="px-4 pb-4 border-t border-gray-100">
          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-700">Active Filters:</span>
                <button 
                  onClick={() => setSelectedFilters([])}
                  className="text-xs text-pink-600"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map(filterId => {
                  const filter = filters.find(f => f.id === filterId);
                  return (
                    <span 
                      key={filterId}
                      className="bg-pink-100 text-pink-800 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      {filter?.label}
                      <button 
                        onClick={() => toggleFilter(filterId)}
                        className="ml-1"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Filter Categories */}
          <div className="space-y-4">
            {/* Age Filters */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Age Range</h3>
              <div className="flex gap-2">
                {filters.slice(0, 3).map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      selectedFilters.includes(filter.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Type Filters */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Type</h3>
              <div className="flex flex-wrap gap-2">
                {filters.slice(3, 7).map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      selectedFilters.includes(filter.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filters */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Status</h3>
              <div className="flex gap-2">
                {filters.slice(7).map(filter => (
                  <button
                    key={filter.id}
                    onClick={() => toggleFilter(filter.id)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      selectedFilters.includes(filter.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Quick Select */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Popular Locations</h3>
              <div className="flex flex-wrap gap-2">
                {locations.slice(0, 6).map(location => (
                  <button
                    key={location}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-1"
                  >
                    <MapPin className="h-3 w-3" />
                    {location}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Search Actions */}
          <div className="flex gap-3 mt-6">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl text-sm font-medium hover:from-pink-600 hover:to-red-600 transition-colors">
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
