"use client";

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}

export const AnalyticsChart = () => {
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  useEffect(() => {
    // Simulate loading chart data
    const loadChartData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Mock data for different periods
      const mockData = {
        '7d': {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          data: [12, 19, 15, 25, 22, 30, 28]
        },
        '30d': {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          data: [85, 92, 78, 95]
        },
        '90d': {
          labels: ['Jan', 'Feb', 'Mar'],
          data: [320, 280, 350]
        }
      };

      const currentData = mockData[selectedPeriod as keyof typeof mockData];
      
      setChartData({
        labels: currentData.labels,
        datasets: [
          {
            label: 'Profile Uploads',
            data: currentData.data,
            borderColor: '#ec4899',
            backgroundColor: 'rgba(236, 72, 153, 0.1)'
          }
        ]
      });
      
      setIsLoading(false);
    };

    loadChartData();
  }, [selectedPeriod]);

  const calculateStats = () => {
    if (!chartData) return { total: 0, change: 0, trend: 'up' };
    
    const data = chartData.datasets[0].data;
    const total = data.reduce((sum, val) => sum + val, 0);
    const avg = total / data.length;
    const recent = data[data.length - 1];
    const previous = data[data.length - 2] || avg;
    const change = ((recent - previous) / previous) * 100;
    
    return {
      total,
      change: Math.abs(change),
      trend: change >= 0 ? 'up' : 'down'
    };
  };

  const stats = calculateStats();

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="h-6 bg-gray-300 rounded w-32"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </div>
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Upload Analytics</h3>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          <p className="text-sm text-gray-500">Total Uploads</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center space-x-1">
            {stats.trend === 'up' ? (
              <TrendingUp className="h-4 w-4 text-green-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-sm font-medium ${
              stats.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stats.change.toFixed(1)}%
            </span>
          </div>
          <p className="text-sm text-gray-500">vs previous period</p>
        </div>
      </div>

      {/* Simple Bar Chart */}
      <div className="space-y-3">
        {chartData?.labels.map((label, index) => {
          const value = chartData.datasets[0].data[index];
          const maxValue = Math.max(...chartData.datasets[0].data);
          const percentage = (value / maxValue) * 100;
          
          return (
            <div key={label} className="flex items-center space-x-3">
              <div className="w-12 text-sm text-gray-600">{label}</div>
              <div className="flex-1">
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-red-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="w-12 text-sm font-medium text-gray-900 text-right">
                {value}
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Legend */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-red-500 rounded"></div>
            <span>Profile Uploads</span>
          </div>
        </div>
      </div>
    </div>
  );
};
