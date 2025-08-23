import { AnalyticsChart } from '@/components/admin/dashboard/analytics-chart';
import { AdminStatsCards } from '@/components/admin/dashboard/stats-cards';
import { TrendingUp, TrendingDown, Users, Eye, MousePointer, Calendar } from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Comprehensive analytics and insights for your profiles</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <AdminStatsCards />

      {/* Analytics Chart */}
      <AnalyticsChart />

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Performance */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Performance</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Total Profiles</p>
                  <p className="text-xs text-gray-500">Active profiles</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">247</p>
                <div className="flex items-center text-green-600 text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Eye className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Total Views</p>
                  <p className="text-xs text-gray-500">Profile views</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">15,420</p>
                <div className="flex items-center text-green-600 text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8%
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <MousePointer className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Total Clicks</p>
                  <p className="text-xs text-gray-500">Profile clicks</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">3,245</p>
                <div className="flex items-center text-red-600 text-xs">
                  <TrendingDown className="h-3 w-3 mr-1" />
                  -2%
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New profile "Priya" uploaded</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">PDF processing completed</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Profile "Anjali" updated</p>
                <p className="text-xs text-gray-500">10 minutes ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Bulk upload completed (5 profiles)</p>
                <p className="text-xs text-gray-500">15 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Performing Profiles */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Profiles</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Profile
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Views
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CTR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">P</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Priya</div>
                      <div className="text-sm text-gray-500">Chennai, T-Nagar</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">1,245</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">89</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">7.1%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-sm text-gray-900">4.8</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">A</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Anjali</div>
                      <div className="text-sm text-gray-500">Chennai, Anna Nagar</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">987</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">67</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">6.8%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★☆</span>
                    <span className="ml-1 text-sm text-gray-900">4.6</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
