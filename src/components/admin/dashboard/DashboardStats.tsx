'use client';

import { useEffect, useState, memo } from 'react';
import { 
  UserGroupIcon, 
  EyeIcon, 
  HandThumbUpIcon, 
  ChatBubbleLeftRightIcon,
  TagIcon,
  MapPinIcon,
  CheckCircleIcon,
  RectangleStackIcon,
  ClockIcon,
  BanknotesIcon,
  CreditCardIcon,
  UsersIcon
} from '@heroicons/react/24/outline';
import { DashboardStats as StatsType } from '@/types/admin';

const DashboardStats = memo(function DashboardStats() {
  const [stats, setStats] = useState<StatsType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/dashboard/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data.stats);
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
        Failed to load dashboard statistics
      </div>
    );
  }

  const statCards = [
    // Profiles Section
    {
      name: 'Total Profiles',
      value: stats.totalProfiles,
      icon: UserGroupIcon,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      category: 'Admin Profiles'
    },
    {
      name: 'Active Profiles',
      value: stats.activeProfiles,
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      category: 'Admin Profiles'
    },
    {
      name: 'Featured Profiles',
      value: stats.featuredProfiles,
      icon: HandThumbUpIcon,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-600',
      category: 'Admin Profiles'
    },
    
    // User Ads Section
    {
      name: 'Total User Ads',
      value: stats.totalUserAds || 0,
      icon: RectangleStackIcon,
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      category: 'User Ads'
    },
    {
      name: 'Pending Approval',
      value: stats.pendingAds || 0,
      icon: ClockIcon,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      category: 'User Ads'
    },
    {
      name: 'Active User Ads',
      value: stats.activeUserAds || 0,
      icon: CheckCircleIcon,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      category: 'User Ads'
    },
    
    // Payments Section
    {
      name: 'Total Payments',
      value: stats.totalPayments || 0,
      icon: BanknotesIcon,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-600',
      category: 'Payments & Revenue'
    },
    {
      name: 'Pending Verification',
      value: stats.pendingPayments || 0,
      icon: ClockIcon,
      color: 'bg-orange-500',
      textColor: 'text-orange-600',
      category: 'Payments & Revenue'
    },
    {
      name: 'Total Revenue',
      value: stats.totalRevenue ? `₹${stats.totalRevenue.toLocaleString()}` : '₹0',
      icon: CreditCardIcon,
      color: 'bg-green-500',
      textColor: 'text-green-600',
      category: 'Payments & Revenue'
    },
    
    // Platform Users
    {
      name: 'Platform Users',
      value: stats.totalUsers || 0,
      icon: UsersIcon,
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      category: 'Platform Users'
    },
    {
      name: 'Independent Escorts',
      value: stats.independentUsers || 0,
      icon: UserGroupIcon,
      color: 'bg-cyan-500',
      textColor: 'text-cyan-600',
      category: 'Platform Users'
    },
    {
      name: 'Agencies',
      value: stats.agencyUsers || 0,
      icon: UserGroupIcon,
      color: 'bg-indigo-500',
      textColor: 'text-indigo-600',
      category: 'Platform Users'
    },
    
    // Content Section
    {
      name: 'Testimonials',
      value: stats.totalTestimonials,
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-teal-500',
      textColor: 'text-teal-600',
      category: 'Content'
    },
    {
      name: 'Categories',
      value: stats.totalCategories,
      icon: TagIcon,
      color: 'bg-purple-500',
      textColor: 'text-purple-600',
      category: 'Content'
    },
    {
      name: 'Locations',
      value: stats.totalLocations,
      icon: MapPinIcon,
      color: 'bg-pink-500',
      textColor: 'text-pink-600',
      category: 'Content'
    },
  ];

  // Group stats by category
  const groupedStats = statCards.reduce((acc, stat) => {
    if (!acc[stat.category]) {
      acc[stat.category] = [];
    }
    acc[stat.category].push(stat);
    return acc;
  }, {} as Record<string, typeof statCards>);

  return (
    <div className="space-y-8">
      {Object.entries(groupedStats).map(([category, stats]) => (
        <div key={category}>
          <h3 className="text-lg font-medium text-gray-900 mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-md ${stat.color} bg-opacity-10`}>
                        <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                      </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {stat.name}
                        </dt>
                        <dd className="text-lg font-medium text-gray-900">
                          {stat.value}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default DashboardStats;
