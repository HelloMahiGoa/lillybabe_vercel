"use client";

import { useState, useEffect } from 'react';
import { Users, Upload, Eye, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';

interface StatsData {
  totalProfiles: number;
  activeProfiles: number;
  pendingUploads: number;
  totalViews: number;
  successRate: number;
  processingErrors: number;
}

export const AdminStatsCards = () => {
  const [stats, setStats] = useState<StatsData>({
    totalProfiles: 0,
    activeProfiles: 0,
    pendingUploads: 0,
    totalViews: 0,
    successRate: 0,
    processingErrors: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading stats data
    const loadStats = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStats({
        totalProfiles: 156,
        activeProfiles: 142,
        pendingUploads: 8,
        totalViews: 15420,
        successRate: 94.5,
        processingErrors: 3
      });
      
      setIsLoading(false);
    };

    loadStats();
  }, []);

  const statsCards = [
    {
      title: 'Total Profiles',
      value: stats.totalProfiles,
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-blue-500',
      description: 'All uploaded profiles'
    },
    {
      title: 'Active Profiles',
      value: stats.activeProfiles,
      change: '+8%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'bg-green-500',
      description: 'Currently active'
    },
    {
      title: 'Pending Uploads',
      value: stats.pendingUploads,
      change: '-2',
      changeType: 'negative',
      icon: Upload,
      color: 'bg-yellow-500',
      description: 'Awaiting processing'
    },
    {
      title: 'Total Views',
      value: stats.totalViews.toLocaleString(),
      change: '+23%',
      changeType: 'positive',
      icon: Eye,
      color: 'bg-purple-500',
      description: 'Profile page views'
    },
    {
      title: 'Success Rate',
      value: `${stats.successRate}%`,
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'bg-pink-500',
      description: 'PDF processing success'
    },
    {
      title: 'Processing Errors',
      value: stats.processingErrors,
      change: '-1',
      changeType: 'positive',
      icon: AlertCircle,
      color: 'bg-red-500',
      description: 'Failed uploads'
    }
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="animate-pulse">
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 bg-gray-300 rounded"></div>
                <div className="w-16 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="w-24 h-6 bg-gray-300 rounded"></div>
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statsCards.map((card, index) => {
        const Icon = card.icon;
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${card.color}`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <span className={`text-sm font-medium ${
                card.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.change}
              </span>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {card.value}
              </h3>
              <p className="text-sm font-medium text-gray-900 mb-1">
                {card.title}
              </p>
              <p className="text-xs text-gray-500">
                {card.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
