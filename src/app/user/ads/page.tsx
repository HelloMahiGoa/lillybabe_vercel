'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Plus, Eye, MousePointer, Clock, CheckCircle, XCircle, Calendar, Edit, Trash2, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import DashboardLayout from '@/components/user/DashboardLayout';
import { UserAd } from '@/types/user-ads';
import { AnimatedCounter } from '@/components/user/AnimatedCounter';
import toast from 'react-hot-toast';

export default function MyAdsPage() {
  const router = useRouter();
  const [ads, setAds] = useState<UserAd[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'expired'>('all');

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const response = await fetch('/api/user/ads');
      const data = await response.json();
      
      if (!response.ok) {
        console.error('API Error:', response.status, data);
        if (response.status === 401) {
          toast.error('Please login to view your ads');
          router.push('/login');
          return;
        }
        toast.error(data.error || 'Failed to load ads');
        setAds([]);
        return;
      }
      
      console.log('Fetched ads:', data.data);
      setAds(data.data || []);
    } catch (error) {
      console.error('Failed to fetch ads:', error);
      toast.error('Failed to load ads');
      setAds([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredAds = ads.filter(ad => {
    if (filter === 'all') return true;
    if (filter === 'pending') return ad.approval_status === 'pending';
    if (filter === 'approved') return ad.approval_status === 'approved' && !ad.is_expired;
    if (filter === 'rejected') return ad.approval_status === 'rejected';
    if (filter === 'expired') return ad.is_expired;
    return true;
  });

  const handleDeleteAd = async (adId: number) => {
    if (!confirm('Are you sure you want to delete this ad? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/user/ads/${adId}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to delete ad');
      }

      toast.success('Ad deleted successfully');
      fetchAds(); // Refresh the ads list
    } catch (error: any) {
      console.error('Delete ad error:', error);
      toast.error(error.message || 'Failed to delete ad');
    }
  };

  const getStatusBadge = (ad: UserAd) => {
    if (ad.is_expired) return { variant: 'default' as const, text: 'Expired', icon: Clock };
    if (ad.approval_status === 'approved') return { variant: 'success' as const, text: 'Active', icon: CheckCircle };
    if (ad.approval_status === 'pending') return { variant: 'warning' as const, text: 'Pending', icon: Clock };
    if (ad.approval_status === 'rejected') return { variant: 'error' as const, text: 'Rejected', icon: XCircle };
    return { variant: 'default' as const, text: 'Draft', icon: FileText };
  };

  return (
    <DashboardLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0"
            >
              <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                My Ads
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">Manage all your posted ads</p>
            </div>
          </div>
          
          <Button
            onClick={() => {
              toast.success('Redirecting to ad creation...');
              router.push('/user/ads/create');
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white w-full sm:w-auto h-12 sm:h-10"
          >
            <Plus className="h-5 w-5 mr-2" />
            Create New Ad
          </Button>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    <AnimatedCounter end={ads.filter(a => a.approval_status === 'approved' && !a.is_expired).length} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Active</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                    <AnimatedCounter end={ads.filter(a => a.approval_status === 'pending').length} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Pending</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                    <AnimatedCounter end={ads.reduce((sum, ad) => sum + ad.views_count, 0)} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Views</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
              <CardContent className="p-3 sm:p-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                    <AnimatedCounter end={ads.reduce((sum, ad) => sum + ad.clicks_count, 0)} />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">Total Clicks</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardContent className="p-2 sm:p-3">
              <div className="flex gap-2 overflow-x-auto">
                {['all', 'pending', 'approved', 'rejected', 'expired'].map((filterType) => (
                  <Button
                    key={filterType}
                    variant={filter === filterType ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(filterType as any)}
                    className={filter === filterType 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0' 
                      : 'hover:bg-pink-50 hover:border-pink-300'
                    }
                  >
                    {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Ads List */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-4">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredAds.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="py-12 sm:py-16 text-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FileText className="h-16 w-16 sm:h-20 sm:w-20 text-gray-300 mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {filter === 'all' ? 'No Ads Yet' : `No ${filter} Ads`}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-md mx-auto">
                  {filter === 'all' 
                    ? 'Start by creating your first ad to reach thousands of potential clients!'
                    : `You don't have any ${filter} ads at the moment.`
                  }
                </p>
                {filter === 'all' && (
                  <Button
                    onClick={() => router.push('/user/ads/create')}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white h-12"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Create Your First Ad
                  </Button>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence>
              {filteredAds.map((ad, index) => {
                const status = getStatusBadge(ad);
                return (
                  <motion.div
                    key={ad.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    onClick={() => router.push(`/user/ads/${ad.id}`)}
                  >
                    <Card className="overflow-hidden border-2 border-gray-100 hover:border-pink-200 transition-all cursor-pointer">
                      {/* Ad Image */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        {ad.main_photo_url ? (
                          <img
                            src={ad.main_photo_url}
                            alt={ad.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <FileText className="h-16 w-16 text-gray-300" />
                          </div>
                        )}
                        {/* Status Badge Overlay */}
                        <div className="absolute top-2 right-2">
                          <Badge variant={status.variant} className="shadow-lg">
                            {status.text}
                          </Badge>
                        </div>
                        {/* Video Badge */}
                        {ad.video_verification_url && (
                          <div className="absolute top-2 left-2">
                            <Badge variant="secondary" className="bg-purple-600 text-white">
                              📹 Verified
                            </Badge>
                          </div>
                        )}
                      </div>

                      {/* Ad Details */}
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg text-gray-900 mb-1 truncate">{ad.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{ad.age} • {ad.location} • {ad.category}</p>
                        <p className="text-xs text-gray-500 mb-3">
                          Plan: {ad.plan?.name || 'N/A'} • ₹{ad.plan?.price || 0}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-2 mb-4">
                          <div className="text-center p-2 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <Eye className="h-3 w-3 text-blue-600" />
                              <span className="text-sm font-bold text-blue-600">{ad.views_count}</span>
                            </div>
                            <div className="text-xs text-gray-600">Views</div>
                          </div>
                          <div className="text-center p-2 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <MousePointer className="h-3 w-3 text-purple-600" />
                              <span className="text-sm font-bold text-purple-600">{ad.clicks_count}</span>
                            </div>
                            <div className="text-xs text-gray-600">Clicks</div>
                          </div>
                          <div className="text-center p-2 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-center gap-1 mb-1">
                              <Calendar className="h-3 w-3 text-green-600" />
                              <span className="text-xs font-bold text-green-600">
                                {ad.end_date ? Math.ceil((new Date(ad.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 0}d
                              </span>
                            </div>
                            <div className="text-xs text-gray-600">Left</div>
                          </div>
                        </div>

                        {/* Dates */}
                        <div className="text-xs text-gray-500 space-y-1 mb-4">
                          <div className="flex justify-between">
                            <span>Created:</span>
                            <span className="font-medium">{new Date(ad.created_at).toLocaleDateString()}</span>
                          </div>
                          {ad.start_date && (
                            <div className="flex justify-between">
                              <span>Started:</span>
                              <span className="font-medium">{new Date(ad.start_date).toLocaleDateString()}</span>
                            </div>
                          )}
                          {ad.end_date && (
                            <div className="flex justify-between">
                              <span>Expires:</span>
                              <span className="font-medium">{new Date(ad.end_date).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="hover:bg-blue-50 hover:border-blue-300"
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/user/ads/${ad.id}`);
                            }}
                          >
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {ad.is_expired && (
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/user/ads/${ad.id}/renew`);
                              }}
                            >
                              <RefreshCw className="h-4 w-4 mr-1" />
                              Renew
                            </Button>
                          )}
                          {(ad.approval_status === 'pending' || ad.approval_status === 'rejected') && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-orange-50 hover:border-orange-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  router.push(`/user/ads/${ad.id}/edit`);
                                }}
                              >
                                <Edit className="h-4 w-4 mr-1" />
                                Edit
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="hover:bg-red-50 hover:border-red-300 text-red-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteAd(ad.id);
                                }}
                              >
                                <Trash2 className="h-4 w-4 mr-1" />
                                Delete
                              </Button>
                            </>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

