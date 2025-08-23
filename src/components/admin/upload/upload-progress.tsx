"use client";

import { useState, useEffect } from 'react';
import { CheckCircle, Clock, AlertCircle, FileText, Image, Database } from 'lucide-react';

interface ProcessingStep {
  id: string;
  name: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
  description: string;
  error?: string;
}

export const UploadProgress = () => {
  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Initialize processing steps
    setProcessingSteps([
      {
        id: '1',
        name: 'File Upload',
        status: 'pending',
        progress: 0,
        description: 'Uploading PDF file to server'
      },
      {
        id: '2',
        name: 'PDF Validation',
        status: 'pending',
        progress: 0,
        description: 'Validating PDF format and content'
      },
      {
        id: '3',
        name: 'Image Extraction',
        status: 'pending',
        progress: 0,
        description: 'Extracting images from PDF pages'
      },
      {
        id: '4',
        name: 'Text Extraction',
        status: 'pending',
        progress: 0,
        description: 'Extracting text using OCR'
      },
      {
        id: '5',
        name: 'Data Parsing',
        status: 'pending',
        progress: 0,
        description: 'Parsing profile information'
      },
      {
        id: '6',
        name: 'Profile Creation',
        status: 'pending',
        progress: 0,
        description: 'Creating profile in database'
      }
    ]);
  }, []);

  const getStepIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'processing':
        return <Clock className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStepIconByType = (stepName: string) => {
    switch (stepName) {
      case 'File Upload':
        return <FileText className="h-4 w-4" />;
      case 'Image Extraction':
        return <Image className="h-4 w-4" />;
      case 'Profile Creation':
        return <Database className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getStepColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'processing':
        return 'border-blue-200 bg-blue-50';
      case 'error':
        return 'border-red-200 bg-red-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  if (processingSteps.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Processing Steps</h3>
        <div className="text-center py-8">
          <FileText className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-500">No files being processed</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Processing Steps</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Active</span>
        </div>
      </div>

      <div className="space-y-4">
        {processingSteps.map((step, index) => (
          <div key={step.id} className={`border rounded-lg p-4 ${getStepColor(step.status)}`}>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getStepIcon(step.status)}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 bg-gray-100 rounded">
                      {getStepIconByType(step.name)}
                    </div>
                    <h4 className="text-sm font-medium text-gray-900">{step.name}</h4>
                  </div>
                  <span className="text-xs text-gray-500">
                    {step.progress}%
                  </span>
                </div>
                
                <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${step.progress}%` }}
                  ></div>
                </div>
                
                {step.error && (
                  <p className="text-xs text-red-600 mt-2">{step.error}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Processing Summary */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">
                {processingSteps.filter(s => s.status === 'completed').length}
              </span> of {processingSteps.length} steps completed
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">
                {processingSteps.filter(s => s.status === 'error').length}
              </span> errors
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button className="text-xs text-gray-600 hover:text-gray-900">
              View Logs
            </button>
            <button className="text-xs text-red-600 hover:text-red-700">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
