'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useDropzone } from 'react-dropzone';
import { DocumentArrowUpIcon, PhotoIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { ProfileFormData } from '@/types/admin';

interface PdfProfileFormProps {}

export default function PdfProfileForm({}: PdfProfileFormProps) {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [extractedImages, setExtractedImages] = useState<string[]>([]);
  const [profileData, setProfileData] = useState<ProfileFormData | null>(null);
  const [pdfName, setPdfName] = useState<string>('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file');
      return;
    }

    setUploading(true);
    setPdfName(file.name.replace('.pdf', ''));

    try {
      const formData = new FormData();
      formData.append('pdf', file);

      const response = await fetch('/api/admin/pdf-extract', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to process PDF');
      }

      const result = await response.json();
      setExtractedImages(result.images || []);
      setProfileData(result.profileData);
    } catch (error) {
      console.error('PDF processing error:', error);
      alert('Failed to process PDF. Please try again.');
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    multiple: false,
    maxFiles: 1,
  });

  const handleCreateProfile = async () => {
    if (!profileData) return;

    setProcessing(true);
    try {
      const response = await fetch('/api/admin/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (response.ok) {
        router.push('/admin/profiles');
      } else {
        const data = await response.json();
        alert(data.error || 'Failed to create profile');
      }
    } catch (error) {
      console.error('Profile creation error:', error);
      alert('Failed to create profile');
    } finally {
      setProcessing(false);
    }
  };

  const handleEditProfile = () => {
    if (!profileData) return;
    
    // Navigate to the regular profile form with pre-filled data
    const queryParams = new URLSearchParams();
    queryParams.set('name', profileData.name);
    queryParams.set('main_photo_url', profileData.main_photo_url || '');
    queryParams.set('gallery_images', JSON.stringify(profileData.gallery_images));
    queryParams.set('age', profileData.age.toString());
    queryParams.set('location', profileData.location);
    queryParams.set('category', profileData.category);
    queryParams.set('meta_title', profileData.meta_title || '');
    queryParams.set('meta_description', profileData.meta_description || '');
    queryParams.set('meta_keywords', profileData.meta_keywords || '');
    
    router.push(`/admin/profiles/new?${queryParams.toString()}`);
  };

  return (
    <div className="bg-white shadow rounded-lg">
      <div className="p-6 space-y-6">
        {/* PDF Upload Section */}
        {!profileData && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upload PDF File</h3>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input {...getInputProps()} />
              <DocumentArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-600">
                {uploading ? (
                  'Processing PDF...'
                ) : isDragActive ? (
                  'Drop the PDF here...'
                ) : (
                  'Drag & drop a PDF file here, or click to select'
                )}
              </p>
              <p className="mt-1 text-xs text-gray-500">
                PDF files only. The system will extract all images and generate profile data.
              </p>
            </div>
          </div>
        )}

        {/* Extracted Images Preview */}
        {extractedImages.length > 0 && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Extracted Images ({extractedImages.length})</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {extractedImages.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`Extracted image ${index + 1}`}
                    className="h-24 w-24 object-cover rounded-lg"
                  />
                  {index === 0 && (
                    <div className="absolute top-1 left-1 bg-blue-500 text-white text-xs px-1 py-0.5 rounded">
                      Main
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Generated Profile Data */}
        {profileData && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Generated Profile Data</h3>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-900">Profile Name: {profileData.name}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Age:</span> {profileData.age}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Location:</span> {profileData.location}
                </div>
                <div>
                  <span className="font-medium text-gray-700">Category:</span> {profileData.category}
                </div>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-700">Meta Title:</span>
                <p className="text-gray-600 mt-1">{profileData.meta_title}</p>
              </div>
              <div className="text-sm">
                <span className="font-medium text-gray-700">Meta Description:</span>
                <p className="text-gray-600 mt-1">{profileData.meta_description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        {profileData && (
          <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => {
                setProfileData(null);
                setExtractedImages([]);
                setPdfName('');
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upload Another PDF
            </button>
            <button
              type="button"
              onClick={handleEditProfile}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={handleCreateProfile}
              disabled={processing}
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {processing ? 'Creating Profile...' : 'Create Profile'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
