'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { XMarkIcon, PhotoIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import ImageModal from './ImageModal';

interface ImageUploadProps {
  currentImage?: string;
  currentImages?: string[];
  onImageUploaded: (url: string) => void;
  onImagesUploaded?: (urls: string[]) => void;
  type: 'main' | 'gallery';
  profileName?: string;
}

interface UploadResult {
  url: string;
  filename: string;
  originalSize: number;
  processedSize: number;
  compressionRatio: number;
  type: string;
  originalType: string;
}

export default function ImageUpload({ 
  currentImage, 
  currentImages = [], 
  onImageUploaded, 
  onImagesUploaded,
  type,
  profileName = 'default'
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [uploadResults, setUploadResults] = useState<UploadResult[]>([]);
  const prevPropsRef = useRef({ currentImage, currentImages, type });
  const pendingCallbackRef = useRef<string[] | null>(null);

  // Update uploadedImages when props change (for editing existing profiles)
  useEffect(() => {
    const prevProps = prevPropsRef.current;
    
    // Use JSON.stringify for deep comparison of arrays
    const currentImagesString = JSON.stringify(currentImages);
    const prevCurrentImagesString = JSON.stringify(prevProps.currentImages);
    
    const hasChanged = 
      prevProps.currentImage !== currentImage ||
      currentImagesString !== prevCurrentImagesString ||
      prevProps.type !== type;

    if (hasChanged) {
      if (type === 'gallery') {
        setUploadedImages(currentImages || []);
      } else {
        setUploadedImages(currentImage ? [currentImage] : []);
      }
      prevPropsRef.current = { currentImage, currentImages, type };
    }
  }, [currentImage, currentImages, type]);

  // Handle pending callback after state updates
  useEffect(() => {
    if (pendingCallbackRef.current && onImagesUploaded) {
      onImagesUploaded(pendingCallbackRef.current);
      pendingCallbackRef.current = null;
    }
  }, [uploadedImages, onImagesUploaded]);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    setUploadResults([]);
    
    try {
      const uploadPromises = acceptedFiles.map(async (file) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);
        formData.append('profileName', profileName);

        const response = await fetch('/api/admin/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        return data;
      });

      const results = await Promise.all(uploadPromises);
      setUploadResults(results);
      
      const uploadedUrls = results.map(result => result.url);
      
      if (type === 'main') {
        onImageUploaded(uploadedUrls[0]);
        setUploadedImages([uploadedUrls[0]]);
      } else {
        setUploadedImages(prevImages => {
          const newImages = [...prevImages, ...uploadedUrls];
          return newImages;
        });
        // Store the callback for later execution
        pendingCallbackRef.current = [...uploadedImages, ...uploadedUrls];
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
    } finally {
      setUploading(false);
    }
  }, [type, onImageUploaded, onImagesUploaded]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.avif']
    },
    multiple: type === 'gallery',
    maxFiles: type === 'gallery' ? 10 : 1,
  });

  const removeImage = (index: number) => {
    setUploadedImages(prevImages => {
      const newImages = prevImages.filter((_, i) => i !== index);
      
      if (type === 'main') {
        onImageUploaded('');
      } else {
        // Store the callback for later execution
        pendingCallbackRef.current = newImages;
      }
      
      return newImages;
    });
  };

  const openImageModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeImageModal = () => {
    setIsModalOpen(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? uploadedImages.length - 1 : prev - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prev => prev === uploadedImages.length - 1 ? 0 : prev + 1);
  };

  // Compression Information Component
  const CompressionInfo = () => (
    uploadResults.length > 0 && (
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircleIcon className="h-5 w-5 text-green-600" />
          <h4 className="text-sm font-semibold text-green-800">Images Optimized with AVIF</h4>
        </div>
        <div className="space-y-2">
          {uploadResults.map((result, index) => (
            <div key={index} className="flex items-center justify-between text-xs">
              <span className="text-gray-600">{result.filename}</span>
              <div className="flex items-center gap-4">
                <span className="text-gray-500">
                  {formatFileSize(result.originalSize)} → {formatFileSize(result.processedSize)}
                </span>
                <span className="text-green-600 font-semibold">
                  {result.compressionRatio}% smaller
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-xs text-green-700">
          AVIF format provides superior compression while maintaining high visual quality.
        </p>
      </div>
    )
  );

  if (type === 'main') {
    return (
      <div className="space-y-4">
        {uploadedImages.length > 0 && (
          <div className="relative inline-block">
            <img
              src={uploadedImages[0]}
              alt="Main photo"
              className="h-32 w-32 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openImageModal(0)}
            />
            <button
              type="button"
              onClick={() => removeImage(0)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        )}
        
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
            isDragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
        >
          <input {...getInputProps()} />
          <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            {uploading ? (
              'Uploading...'
            ) : isDragActive ? (
              'Drop the image here...'
            ) : (
              'Drag & drop an image here, or click to select'
            )}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            JPG, PNG, WebP, AVIF up to 5MB (converted to AVIF for performance)
          </p>
        </div>

        <CompressionInfo />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {uploadedImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="h-24 w-24 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openImageModal(index)}
              />
              <button
                type="button"
                onClick={() => removeImage(index)}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <XMarkIcon className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          {uploading ? (
            'Uploading...'
          ) : isDragActive ? (
            'Drop images here...'
          ) : (
            'Drag & drop images here, or click to select'
          )}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          JPG, PNG, WebP, AVIF up to 10 images, 5MB each (converted to AVIF for performance)
        </p>
      </div>

      <CompressionInfo />

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeImageModal}
        images={uploadedImages}
        currentIndex={currentImageIndex}
        onPrevious={goToPreviousImage}
        onNext={goToNextImage}
      />
    </div>
  );
}
