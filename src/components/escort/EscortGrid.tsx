'use client';

import { Escort } from '@/types/escort';
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
  // Static escorts list is disabled in this fully static build
  const escorts: Escort[] = [];

  return (
    <div className={className}>
      {/* Grid */}
      {escorts.length === 0 ? (
        <div className="text-center py-12 text-gray-600">
          Escorts listing is disabled in this static build.
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
