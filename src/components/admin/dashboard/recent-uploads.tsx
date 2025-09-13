"use client";

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle, Clock, Eye } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  slug: string;
  age: number;
  location: string;
  category: string;
  main_photo_url: string;
  featured: boolean;
  is_active: boolean;
  views_count: number;
  clicks_count: number;
  created_at: string;
  updated_at: string;
}

export const RecentUploads = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadRecentProfiles = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/admin/profiles?limit=5', {
          credentials: 'include'
        });
        
        if (response.ok) {
          const data = await response.json();
          setProfiles(data.profiles || []);
        } else {
          console.error('Failed to fetch recent profiles');
        }
      } catch (error) {
        console.error('Error loading recent profiles:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecentProfiles();
  }, []);

  const getStatusIcon = (isActive: boolean) => {
    return isActive ? 
      <CheckCircle className="h-4 w-4 text-green-500" /> : 
      <AlertCircle className="h-4 w-4 text-red-500" />;
  };

  const getStatusColor = (isActive: boolean) => {
    return isActive ? 
      'text-green-600 bg-green-50' : 
      'text-red-600 bg-red-50';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} hours ago`;
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Uploads</h3>
          <button className="text-sm text-pink-600 hover:text-pink-700">View All</button>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div key={index}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Profiles</h3>
        <a href="/admin/profiles" className="text-sm text-pink-600 hover:text-pink-700">View All</a>
      </div>
      
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              <img 
                src={profile.main_photo_url} 
                alt={profile.name}
                className="w-10 h-10 rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {profile.name}
                </p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(profile.is_active)}`}>
                  {profile.is_active ? 'Active' : 'Inactive'}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{formatDate(profile.created_at)}</span>
                  <span>{profile.age} years • {profile.location}</span>
                  <span className="text-blue-600 font-medium">
                    {profile.category}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-xs text-gray-500">
                    {profile.views_count} views
                  </span>
                  <a 
                    href={`/admin/profiles/${profile.id}`}
                    className="text-xs text-blue-600 hover:text-blue-700 flex items-center"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {profiles.length === 0 && (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No profiles found</p>
        </div>
      )}
    </div>
  );
};
