import { PDFUpload } from '@/components/admin/upload/pdf-upload';
import { UploadProgress } from '@/components/admin/upload/upload-progress';
import { DataPreview } from '@/components/admin/upload/data-preview';

export default function UploadPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Upload PDF Profiles</h1>
          <p className="text-gray-600">Upload PDF files to automatically extract images and create profiles</p>
        </div>
      </div>

      {/* Upload Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <PDFUpload />
          <UploadProgress />
        </div>
        <div>
          <DataPreview />
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Upload Instructions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">Supported Formats:</h4>
            <ul className="space-y-1">
              <li>• PDF files only (max 10MB)</li>
              <li>• High-quality images for better extraction</li>
              <li>• Clear text for OCR processing</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Processing Steps:</h4>
            <ul className="space-y-1">
              <li>• Image extraction from PDF pages</li>
              <li>• Text extraction and data parsing</li>
              <li>• Profile creation with extracted data</li>
              <li>• Image optimization and storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
