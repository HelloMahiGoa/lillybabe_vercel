import { AdminStatsCards } from '@/components/admin/dashboard/stats-cards';
import { RecentUploads } from '@/components/admin/dashboard/recent-uploads';
import { AnalyticsChart } from '@/components/admin/dashboard/analytics-chart';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to LillyBabe Admin Panel</p>
        </div>
        <div className="flex space-x-3">
          <a href="/admin/profiles/upload" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Upload PDF
          </a>
          <a href="/admin/profiles/new" className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors">
            Add Profile
          </a>
        </div>
      </div>

      {/* Stats Cards */}
      <AdminStatsCards />

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart />
        <RecentUploads />
      </div>
    </div>
  );
}
