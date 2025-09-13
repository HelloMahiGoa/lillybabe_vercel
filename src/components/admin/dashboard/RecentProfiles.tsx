'use client';

import { useEffect, useState, memo } from 'react';
import Link from 'next/link';
import { Profile } from '@/types/admin';

const RecentProfiles = memo(function RecentProfiles() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentProfiles = async () => {
      try {
        const response = await fetch('/api/admin/profiles?limit=5&sortBy=created_at&sortOrder=desc');
        if (response.ok) {
          const data = await response.json();
          setProfiles(data.profiles || []);
        }
      } catch (error) {
        console.error('Failed to fetch recent profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentProfiles();
  }, []);

  if (loading) {
    return (
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Recent Profiles</h3>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Profiles</h3>
          <Link
            href="/admin/profiles"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all
          </Link>
        </div>
        
        {profiles.length === 0 ? (
          <p className="text-gray-500 text-sm">No profiles found</p>
        ) : (
          <div className="space-y-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  {profile.main_photo_url ? (
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={profile.main_photo_url}
                      alt={profile.name}
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-sm font-medium">
                        {profile.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {profile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {profile.age} years • {profile.location}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  {profile.featured && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                  {profile.is_active ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default RecentProfiles;
