export default function AdminTest() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Test Page</h1>
        <p className="text-gray-600">This is a simple test page to verify admin routing works.</p>
        <div className="mt-8">
          <a 
            href="/admin/login" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    </div>
  );
}
