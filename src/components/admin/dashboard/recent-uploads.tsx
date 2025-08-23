"use client";

import { useState, useEffect } from 'react';
import { FileText, CheckCircle, AlertCircle, Clock, Eye } from 'lucide-react';

interface UploadItem {
  id: string;
  filename: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  uploadedAt: string;
  extractedImages: number;
  profileName?: string;
  errorMessage?: string;
}

export const RecentUploads = () => {
  const [uploads, setUploads] = useState<UploadItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUploads = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/admin/stats');
        const result = await response.json();
        
        if (result.success && result.data.recentUploads) {
          const uploadsData = result.data.recentUploads.map((upload: any) => ({
            id: upload.id.toString(),
            filename: upload.filename,
            status: upload.status,
            uploadedAt: new Date(upload.created_at).toLocaleString(),
            extractedImages: upload.extracted_data?.imageUrls?.length || 0,
            profileName: upload.extracted_data?.profileData?.name,
            errorMessage: upload.error_message
          }));
          setUploads(uploadsData);
        }
      } catch (error) {
        console.error('Error loading uploads:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUploads();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'processing':
        return <Clock className="h-4 w-4 text-blue-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'processing':
        return 'text-blue-600 bg-blue-50';
      case 'error':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
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
            <div key={index} className="animate-pulse">
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
        <h3 className="text-lg font-semibold text-gray-900">Recent Uploads</h3>
        <button className="text-sm text-pink-600 hover:text-pink-700">View All</button>
      </div>
      
      <div className="space-y-4">
        {uploads.map((upload) => (
          <div key={upload.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0">
              {getStatusIcon(upload.status)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {upload.filename}
                </p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(upload.status)}`}>
                  {upload.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{upload.uploadedAt}</span>
                  {upload.extractedImages > 0 && (
                    <span className="flex items-center">
                      <FileText className="h-3 w-3 mr-1" />
                      {upload.extractedImages} images
                    </span>
                  )}
                  {upload.profileName && (
                    <span className="text-green-600 font-medium">
                      Profile: {upload.profileName}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  {upload.status === 'completed' && (
                    <button className="text-xs text-blue-600 hover:text-blue-700 flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </button>
                  )}
                  {upload.status === 'error' && (
                    <span className="text-xs text-red-600">
                      {upload.errorMessage}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {uploads.length === 0 && (
        <div className="text-center py-8">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No recent uploads</p>
        </div>
      )}
    </div>
  );
};
