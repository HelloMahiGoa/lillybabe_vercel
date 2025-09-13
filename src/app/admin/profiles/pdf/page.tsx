import PdfProfileForm from '@/components/admin/profiles/PdfProfileForm';

export default function PdfProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Create Profile from PDF</h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload a PDF file containing images to automatically create a profile. The system will extract all images, convert them to AVIF format, and generate profile data.
        </p>
      </div>

      <PdfProfileForm />
    </div>
  );
}
