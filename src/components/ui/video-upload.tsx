'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Video, X, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoUploadProps {
  onUpload: (file: File) => Promise<string>;
  onRemove?: () => void;
  value?: string;
  maxSize?: number; // in MB
  label?: string;
}

export function VideoUpload({
  onUpload,
  onRemove,
  value,
  maxSize = 50,
  label = 'Upload Verification Video'
}: VideoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    // Validate file size
    if (file.size > maxSize * 1024 * 1024) {
      setError(`Video size must be less than ${maxSize}MB`);
      return;
    }

    setUploading(true);
    setError('');

    try {
      await onUpload(file);
    } catch (err: any) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }, [onUpload, maxSize]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'video/*': [] },
    maxFiles: 1,
    disabled: uploading
  });

  if (value) {
    return (
      <div className="relative group">
        <video
          src={value}
          controls
          className="w-full h-64 object-cover rounded-lg bg-black"
        />
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <div className="absolute bottom-2 left-2 px-3 py-1 bg-black/70 text-white text-xs rounded-full">
          Verification Video
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragActive
            ? "border-purple-500 bg-purple-50"
            : "border-gray-300 hover:border-purple-400",
          uploading && "opacity-50 cursor-not-allowed"
        )}
      >
        <input {...getInputProps()} />
        
        {uploading ? (
          <div className="flex flex-col items-center gap-3">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-500"></div>
            <p className="text-sm text-gray-600">Uploading video...</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              {isDragActive ? (
                <Upload className="h-6 w-6 text-purple-600" />
              ) : (
                <Video className="h-6 w-6 text-purple-600" />
              )}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {isDragActive ? 'Drop video here' : label}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Max {maxSize}MB • 30 seconds selfie video
              </p>
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 mt-2">{error}</p>
      )}

      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800 font-medium mb-1">Video Requirements:</p>
        <ul className="text-xs text-blue-700 space-y-1">
          <li>• Record a 10-30 second selfie video</li>
          <li>• Show your face clearly</li>
          <li>• Good lighting required</li>
          <li>• Speak clearly and smile</li>
        </ul>
      </div>
    </div>
  );
}

