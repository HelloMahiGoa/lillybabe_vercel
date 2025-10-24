'use client';

import { useState, useEffect } from 'react';
import { Escort, EscortsResponse } from '@/types/escort';
import EscortCard from './EscortCard';

interface EscortGridProps {
  category?: string;
  location?: string;
  limit?: number;
  showFilters?: boolean;
  className?: string;
}

export default function EscortGrid({ 
  category, 
  location, 
  limit = 12, 
  showFilters = true,
  className = '' 
}: EscortGridProps) {
  const [escorts, setEscorts] = useState<Escort[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState<EscortsResponse['pagination'] | null>(null);
  const [summary, setSummary] = useState<EscortsResponse['summary'] | null>(null);

  const fetchEscorts = async (offset = 0, reset = false) => {
    try {
      setLoading(true);
      
      const params = new URLSearchParams({
        limit: limit.toString(),
        offset: offset.toString()
      });

      if (category && category !== 'all') {
        params.append('category', category);
      }
      if (location && location !== 'all') {
        params.append('location', location);
      }

      const response = await fetch(`/api/escorts?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch escorts');
      }

      const data: EscortsResponse = await response.json();
      
      if (reset) {
        setEscorts(data.escorts);
      } else {
        setEscorts(prev => [...prev, ...data.escorts]);
      }
      
      setPagination(data.pagination);
      setSummary(data.summary);
      setError('');
    } catch (error) {
      console.error('Error fetching escorts:', error);
      setError('Failed to load escorts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEscorts(0, true);
  }, [category, location, limit]);

  const loadMore = () => {
    if (pagination && pagination.hasMore) {
      fetchEscorts(pagination.offset + pagination.limit);
    }
  };

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 text-lg mb-2">⚠️ Error</div>
        <div className="text-gray-600">{error}</div>
        <button 
          onClick={() => fetchEscorts(0, true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Summary */}
      {summary && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                {summary.total} Escorts Available
              </h2>
              <div className="text-sm text-gray-600 mt-1">
                {summary.profiles} Verified Profiles • {summary.ads} User Ads
              </div>
            </div>
            <div className="flex space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-600">Verified</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Independent</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Agency</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {loading && escorts.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-4"></div>
                <div className="h-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {escorts.map((escort) => (
              <EscortCard key={`${escort.type}-${escort.id}`} escort={escort} />
            ))}
          </div>

          {/* Load More */}
          {pagination && pagination.hasMore && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
