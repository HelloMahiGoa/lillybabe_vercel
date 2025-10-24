'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FileText, Eye, MousePointer, Plus, TrendingUp, Clock, CheckCircle, Sparkles, Target, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UserDashboardStats } from '@/types/user-ads';
import { AnimatedCounter } from '@/components/user/AnimatedCounter';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import confetti from 'canvas-confetti';
import toast from 'react-hot-toast';

export default function UserDashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<UserDashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchStats();
    fetchUser();
    checkForCelebration();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/user');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/user/stats');
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

  const checkForCelebration = () => {
    // Check if user just got an ad approved (you can add this logic based on URL params)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('celebrate') === 'true') {
      triggerCelebration();
      toast.success('🎉 Congratulations! Your ad has been approved!');
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EC4899', '#9C27B0', '#F59E0B', '#10B981']
    });
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return { emoji: '🌅', text: 'Good Morning' };
    if (hour < 18) return { emoji: '☀️', text: 'Good Afternoon' };
    return { emoji: '🌙', text: 'Good Evening' };
  };

  const greeting = getGreeting();

  // Mock weekly data (replace with real data from API)
  const weeklyData = [
    { day: 'Mon', views: 12, clicks: 5 },
    { day: 'Tue', views: 19, clicks: 8 },
    { day: 'Wed', views: 25, clicks: 12 },
    { day: 'Thu', views: 15, clicks: 6 },
    { day: 'Fri', views: 30, clicks: 15 },
    { day: 'Sat', views: 28, clicks: 14 },
    { day: 'Sun', views: 22, clicks: 10 },
  ];

  const achievements = [
    { id: 1, name: 'First Ad', icon: '🎯', unlocked: (stats?.total_ads || 0) >= 1, description: 'Create your first ad' },
    { id: 2, name: '10 Views', icon: '👀', unlocked: (stats?.total_views || 0) >= 10, description: 'Get 10 views' },
    { id: 3, name: '5 Clicks', icon: '👆', unlocked: (stats?.total_clicks || 0) >= 5, description: 'Get 5 clicks' },
    { id: 4, name: 'Active User', icon: '🔥', unlocked: (stats?.active_ads || 0) >= 1, description: 'Have an active ad' },
  ];

  const statCards = [
    {
      title: 'Active Ads',
      value: stats?.active_ads || 0,
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      change: '+2 this week'
    },
    {
      title: 'Total Views',
      value: stats?.total_views || 0,
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      change: '+45 today'
    },
    {
      title: 'Total Clicks',
      value: stats?.total_clicks || 0,
      icon: MousePointer,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      change: '+12 today'
    },
    {
      title: 'Pending Ads',
      value: stats?.pending_ads || 0,
      icon: Clock,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
      change: 'Awaiting approval'
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Personalized Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl"
        >
          <motion.span 
            className="text-4xl sm:text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {greeting.emoji}
          </motion.span>
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {greeting.text}, {user?.full_name?.split(' ')[0] || 'there'}!
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Ready to boost your ads today?</p>
          </div>
          
          <Button
            onClick={() => router.push('/user/ads/create')}
            className="hidden sm:flex bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
          >
            <Plus className="h-5 w-5 mr-2" />
            Post New Ad
          </Button>
        </motion.div>

        {/* Today's Highlights Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
            <div className="absolute top-0 right-0 text-9xl opacity-10">📈</div>
            <CardContent className="relative z-10 p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Today's Highlights
              </h2>
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <AnimatedCounter end={stats?.total_views || 0} />
                  </div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Total Views</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <AnimatedCounter end={stats?.total_clicks || 0} />
                  </div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Total Clicks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">
                    <AnimatedCounter end={stats?.active_ads || 0} />
                  </div>
                  <div className="text-xs sm:text-sm opacity-90 mt-1">Active Ads</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Active Ad Plans */}
        {stats?.active_ad_plans && stats.active_ad_plans.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 shadow-lg">
              <CardHeader className="p-4 sm:p-6 pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg text-blue-900">Active Ad Plans</CardTitle>
                      <CardDescription className="text-xs sm:text-sm text-blue-600">
                        {stats.active_ad_plans.length} active {stats.active_ad_plans.length === 1 ? 'ad' : 'ads'}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white hover:bg-green-600">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <div className="space-y-3">
                  {stats.active_ad_plans.map((adPlan, index) => {
                    const endDate = new Date(adPlan.end_date);
                    const today = new Date();
                    const daysRemaining = Math.max(0, Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
                    
                    return (
                      <div key={adPlan.id} className="bg-white rounded-lg p-3 sm:p-4 border border-blue-200">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{adPlan.name}</h4>
                            <p className="text-xs sm:text-sm text-gray-600 mt-1">{adPlan.plan?.name}</p>
                          </div>
                          {daysRemaining <= 3 && (
                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-300 text-xs">
                              Expiring Soon
                            </Badge>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                          <div className="text-center p-2 bg-blue-50 rounded">
                            <p className="text-xs text-gray-600">Days Left</p>
                            <p className="text-base sm:text-lg font-bold text-blue-900">{daysRemaining}</p>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded">
                            <p className="text-xs text-gray-600">Duration</p>
                            <p className="text-base sm:text-lg font-bold text-purple-900">{adPlan.plan?.duration_days}d</p>
                          </div>
                          <div className="text-center p-2 bg-pink-50 rounded">
                            <p className="text-xs text-gray-600">Type</p>
                            <p className="text-base sm:text-lg font-bold text-pink-900">
                              {adPlan.plan?.features?.video_required ? 'V' : 'B'}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                <Button
                  onClick={() => router.push('/user/ads/create')}
                  variant="outline"
                  className="w-full mt-4 border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Another Ad
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
        
        {/* No Active Plan */}
        {(!stats?.active_ad_plans || stats.active_ad_plans.length === 0) && (stats?.active_ads || 0) === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-200 flex items-center justify-center">
                    <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">No Active Plan</h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Create your first ad to get started
                    </p>
                  </div>
                  <Button
                    onClick={() => router.push('/user/ads/create')}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Ad
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <Award className="h-5 w-5 text-yellow-600" />
                Achievements
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Unlock badges by reaching milestones</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`text-center p-3 sm:p-4 rounded-xl transition-all ${
                      achievement.unlocked
                        ? 'bg-white shadow-md border-2 border-yellow-300'
                        : 'bg-gray-100 opacity-60'
                    }`}
                  >
                    <div className="text-3xl sm:text-4xl mb-2">{achievement.icon}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-900">{achievement.name}</div>
                    {achievement.unlocked && (
                      <Badge variant="success" className="mt-2 text-xs">Unlocked!</Badge>
                    )}
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all">
                <div className={`absolute inset-0 ${stat.bgColor} opacity-10`} />
                <CardContent className="relative p-3 sm:p-4">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-lg ${stat.bgColor} flex items-center justify-center shadow-sm`}>
                      <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.color}`} />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      <AnimatedCounter end={stat.value} />
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Weekly Performance Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                <TrendingUp className="h-5 w-5 text-purple-600" />
                Performance This Week
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">Views and clicks over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={weeklyData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#EC4899" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#9C27B0" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#9C27B0" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#fff', 
                      border: '1px solid #E5E7EB', 
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#EC4899" 
                    strokeWidth={3}
                    fill="url(#colorViews)"
                  />
                  <Area 
                    type="monotone" 
                    dataKey="clicks" 
                    stroke="#9C27B0" 
                    strokeWidth={3}
                    fill="url(#colorClicks)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-pink-500" />
                  <span className="text-gray-600">Views</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-purple-600" />
                  <span className="text-gray-600">Clicks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Manage your ads and account</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="h-auto py-4 sm:py-5 flex flex-col items-center gap-2 hover:bg-pink-50 hover:border-pink-300 transition-all"
                onClick={() => router.push('/user/ads/create')}
              >
                <Plus className="h-6 w-6 sm:h-7 sm:w-7 text-pink-600" />
                <span className="text-sm sm:text-base font-medium">Create New Ad</span>
              </Button>
              
              <Button
                variant="outline"
                className="h-auto py-4 sm:py-5 flex flex-col items-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-all"
                onClick={() => router.push('/user/ads')}
              >
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600" />
                <span className="text-sm sm:text-base font-medium">My Ads</span>
              </Button>
              
              <Button
                variant="outline"
                className="h-auto py-4 sm:py-5 flex flex-col items-center gap-2 hover:bg-purple-50 hover:border-purple-300 transition-all"
                onClick={() => router.push('/user/payments')}
              >
                <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 text-purple-600" />
                <span className="text-sm sm:text-base font-medium">View Payments</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card className="border-l-4 border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardContent className="p-4 sm:p-6">
              <div className="flex gap-3">
                <div className="text-3xl sm:text-4xl">💡</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-900 mb-2 text-sm sm:text-base">Pro Tip!</h4>
                  <p className="text-xs sm:text-sm text-blue-800">
                    Ads with verification videos get 3x more views. Make sure to upload a clear selfie video to boost your visibility!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => router.push('/user/ads/create')}
        className="fixed bottom-24 right-4 sm:right-6 z-40 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 shadow-2xl flex items-center justify-center text-white md:hidden"
        animate={{
          boxShadow: [
            "0 10px 25px rgba(236, 72, 153, 0.3)",
            "0 10px 35px rgba(236, 72, 153, 0.5)",
            "0 10px 25px rgba(236, 72, 153, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Plus className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.button>
    </DashboardLayout>
  );
}

