import DashboardStats from '@/components/admin/dashboard/DashboardStats';
import RecentProfiles from '@/components/admin/dashboard/RecentProfiles';
import AnalyticsChart from '@/components/admin/dashboard/AnalyticsChart';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome to your LillyBabe admin panel. Here's an overview of your website.
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnalyticsChart />
        <RecentProfiles />
      </div>
    </div>
  );
}
