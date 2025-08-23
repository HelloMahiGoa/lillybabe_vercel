"use client";

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X, CheckCircle, AlertCircle } from 'lucide-react';

interface UploadedFile {
  id: string;
  file: File;
  status: 'pending' | 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  error?: string;
}

export const PDFUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles: UploadedFile[] = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: 'pending',
      progress: 0
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    processFiles(newFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true
  });

  const processFiles = async (files: UploadedFile[]) => {
    setIsUploading(true);

    for (const fileData of files) {
      try {
        // Update status to uploading
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileData.id 
              ? { ...f, status: 'uploading', progress: 0 }
              : f
          )
        );

        // Create FormData for file upload
        const formData = new FormData();
        formData.append('file', fileData.file);

        // Trigger processing event
        if (window.dispatchEvent) {
          window.dispatchEvent(new CustomEvent('pdfProcessing'));
        }

        // Upload file to API
        const response = await fetch('/api/admin/pdf/process', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error('Upload failed:', response.status, errorText);
          throw new Error(`Upload failed: ${response.status} - ${errorText}`);
        }

        const result = await response.json();

        if (result.success) {
          // Update status to completed
          setUploadedFiles(prev => 
            prev.map(f => 
              f.id === fileData.id 
                ? { ...f, status: 'completed', progress: 100 }
                : f
            )
          );

          // Trigger data preview update
          if (window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent('pdfProcessed', {
              detail: {
                uploadId: result.data.uploadId,
                profileData: result.data.profileData,
                imageUrls: result.data.imageUrls,
                extractedText: result.data.extractedText
              }
            }));
          }
        } else {
          throw new Error(result.error || 'Processing failed');
        }

      } catch (error) {
        // Update status to error
        setUploadedFiles(prev => 
          prev.map(f => 
            f.id === fileData.id 
              ? { ...f, status: 'error', error: error instanceof Error ? error.message : 'Upload failed' }
              : f
          )
        );
      }
    }

    setIsUploading(false);
  };

  const removeFile = (id: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== id));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'error':
        return 'text-red-600 bg-red-50';
      case 'processing':
        return 'text-blue-600 bg-blue-50';
      case 'uploading':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragActive
            ? 'border-pink-500 bg-pink-50'
            : 'border-gray-300 hover:border-pink-400 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {isDragActive ? 'Drop PDF files here' : 'Drag & drop PDF files here'}
        </h3>
        <p className="text-gray-600 mb-4">
          or click to select files (max 10MB each)
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors">
          Select Files
        </button>
      </div>

      {/* Uploaded Files List */}
      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h4 className="font-medium text-gray-900 mb-3">Uploaded Files</h4>
          <div className="space-y-3">
            {uploadedFiles.map((fileData) => (
              <div key={fileData.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  {getStatusIcon(fileData.status)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {fileData.file.name}
                    </p>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(fileData.status)}`}>
                      {fileData.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex-1 mr-3">
                      <div className="bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${fileData.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {fileData.progress}%
                    </span>
                  </div>
                  
                  {fileData.error && (
                    <p className="text-xs text-red-600 mt-1">{fileData.error}</p>
                  )}
                </div>
                
                <button
                  onClick={() => removeFile(fileData.id)}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Upload Summary */}
      {uploadedFiles.length > 0 && (
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">
                {uploadedFiles.length} file(s) selected
              </p>
              <p className="text-xs text-gray-500">
                Total size: {(uploadedFiles.reduce((sum, f) => sum + f.file.size, 0) / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setUploadedFiles([])}
                className="text-sm text-gray-600 hover:text-red-600 transition-colors"
              >
                Clear All
              </button>
              <button
                disabled={isUploading}
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isUploading ? 'Processing...' : 'Process All'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
