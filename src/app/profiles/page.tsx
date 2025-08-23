"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Star, 
  CheckCircle, 
  Filter,
  Phone,
  MessageCircle,
  Eye,
  Heart
} from 'lucide-react';

interface ProfileImage {
  id: number;
  image_url: string;
  thumbnail_url?: string;
  is_primary: boolean;
}

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  category: string;
  nationality: string;
  height: string;
  pricing: {
    one_shot?: number;
    two_shot?: number;
    three_shot?: number;
    full_night?: number;
  };
  availability: string;
  rating: number;
  views_count: number;
  is_verified: boolean;
  is_featured: boolean;
  is_active: boolean;
  profile_images: ProfileImage[];
  whatsapp?: string;
  phone?: string;
}

interface FilterState {
  search: string;
  location: string;
  category: string;
  availability: string;
  sortBy: string;
}

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    location: '',
    category: '',
    availability: '',
    sortBy: ''
  });
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadProfiles();
  }, [filters, page]);

  const loadProfiles = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '12',
        ...(filters.search && { search: filters.search }),
        ...(filters.location && { location: filters.location }),
        ...(filters.category && { category: filters.category }),
        ...(filters.availability && { availability: filters.availability }),
        ...(filters.sortBy && { sortBy: filters.sortBy })
      });

      // Use public API route that only shows active profiles
      const response = await fetch(`/api/profiles?${params}`);
      const result = await response.json();

      if (result.success) {
        setProfiles(result.data.profiles || []);
        setTotalPages(result.data.pagination?.totalPages || 1);
      }
    } catch (error) {
      console.error('Error loading profiles:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [field]: value }));
    setPage(1); // Reset to first page when filtering
  };

  const trackView = async (profileId: number) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'view',
          profileId
        })
      });
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  const trackClick = async (profileId: number, clickType: string) => {
    try {
      await fetch('/api/analytics/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'click',
          profileId,
          clickType
        })
      });
    } catch (error) {
      console.error('Error tracking click:', error);
    }
  };

  const getPrimaryImage = (images: ProfileImage[]) => {
    if (!images || images.length === 0) return '/images/placeholder.jpg';
    const primary = images.find(img => img.is_primary);
    return primary?.thumbnail_url || primary?.image_url || images[0]?.image_url || '/images/placeholder.jpg';
  };

  const formatPrice = (pricing: Profile['pricing']) => {
    const prices = Object.values(pricing).filter(Boolean);
    return prices.length > 0 ? `₹${Math.min(...prices)}` : 'Contact for Price';
  };

  const formatPriceRange = (pricing: Profile['pricing']) => {
    const prices = Object.values(pricing).filter(Boolean);
    if (prices.length === 0) return 'Contact for Price';
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return min === max ? `₹${min}` : `₹${min} - ₹${max}`;
  };

  if (isLoading && profiles.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
            <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              LillyBabe
              </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premium Escort Services in India
            </p>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by name, location, or category..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
            </div>
          </div>
        </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden bg-pink-100 text-pink-600 px-4 py-2 rounded-lg flex items-center space-x-2"
            >
                  <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
              </div>

          <div className={`grid grid-cols-1 md:grid-cols-5 gap-4 ${showFilters ? 'block' : 'hidden md:grid'}`}>
            <select 
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="form-select rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">All Locations</option>
              <option value="Chennai">Chennai</option>
              <option value="T Nagar">T Nagar</option>
              <option value="Anna Nagar">Anna Nagar</option>
              <option value="Adyar">Adyar</option>
              <option value="Mylapore">Mylapore</option>
              <option value="Velachery">Velachery</option>
              <option value="Porur">Porur</option>
              <option value="OMR">OMR</option>
              <option value="ECR">ECR</option>
              <option value="Tambaram">Tambaram</option>
              <option value="Chromepet">Chromepet</option>
              <option value="Pallavaram">Pallavaram</option>
              <option value="St. Thomas Mount">St. Thomas Mount</option>
              <option value="Guindy">Guindy</option>
              <option value="Saidapet">Saidapet</option>
              <option value="Teynampet">Teynampet</option>
              <option value="Egmore">Egmore</option>
              <option value="Triplicane">Triplicane</option>
              <option value="Royapuram">Royapuram</option>
              <option value="Perambur">Perambur</option>
              <option value="Villivakkam">Villivakkam</option>
              <option value="Ambattur">Ambattur</option>
              <option value="Avadi">Avadi</option>
              <option value="Poonamallee">Poonamallee</option>
              <option value="Sriperumbudur">Sriperumbudur</option>
              <option value="Kanchipuram">Kanchipuram</option>
            </select>

            <select 
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="form-select rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">All Categories</option>
              <option value="Russian">Russian</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
              <option value="Independent">Independent</option>
              <option value="Model">Model</option>
              <option value="Celebrity">Celebrity</option>
              <option value="Air Hostess">Air Hostess</option>
            </select>

            <select 
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
              className="form-select rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">All Availability</option>
              <option value="Available Now">Available Now</option>
              <option value="Available Today">Available Today</option>
              <option value="By Appointment">By Appointment</option>
            </select>

            <select 
              value={filters.sortBy}
              onChange={(e) => handleFilterChange('sortBy', e.target.value)}
              className="form-select rounded-lg border-gray-300 focus:border-pink-500 focus:ring-pink-500"
            >
              <option value="">Sort by</option>
              <option value="newest">Newest First</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
            </select>

            <button
              onClick={() => setFilters({ search: '', location: '', category: '', availability: '', sortBy: '' })}
              className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear All
            </button>
              </div>
            </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {profiles.length} of {profiles.length} profiles
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Page {page} of {totalPages}</span>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
              {/* Profile Image */}
              <div className="relative">
                <Link href={`/profiles/${profile.id}`} onClick={() => trackView(profile.id)}>
                  <img
                    src={getPrimaryImage(profile.profile_images)}
                    alt={profile.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col space-y-1">
                  {profile.is_featured && (
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  )}
                  {profile.is_verified && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </span>
                  )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-pink-500" />
                </button>

                {/* Quick Stats */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs flex items-center">
                  <Eye className="h-3 w-3 mr-1" />
                  {profile.views_count}
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Link href={`/profiles/${profile.id}`} onClick={() => trackView(profile.id)}>
                    <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                      {profile.name}
                    </h3>
                  </Link>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{profile.rating}</span>
          </div>
        </div>

                <div className="space-y-1 mb-3">
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {profile.location} • {profile.age} years
                  </p>
                  <p className="text-sm text-gray-600">{profile.category}</p>
                  <p className="text-sm font-medium text-pink-600">{formatPriceRange(profile.pricing)}</p>
                </div>

                {/* Availability */}
                <div className="mb-3">
                  <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    {profile.availability}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    href={`/profiles/${profile.id}`}
                    onClick={() => trackView(profile.id)}
                    className="flex-1 bg-pink-500 text-white py-2 px-3 rounded-lg text-sm text-center hover:bg-pink-600 transition-colors"
                  >
                    View Profile
                  </Link>
                  {profile.whatsapp && (
                    <button
                      onClick={() => trackClick(profile.id, 'whatsapp')}
                      className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  )}
                  {profile.phone && (
                    <button
                      onClick={() => trackClick(profile.id, 'phone')}
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                    </button>
                  )}
            </div>
          </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {profiles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No profiles found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search filters</p>
            <button
              onClick={() => setFilters({ search: '', location: '', category: '', availability: '', sortBy: '' })}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <div className="flex space-x-2">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`px-4 py-2 rounded-lg ${
                      page === pageNum
                        ? 'bg-pink-500 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
  );
}
