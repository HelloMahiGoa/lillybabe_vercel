'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, CheckCircle, XCircle, Clock, Calendar, User, MapPin, DollarSign, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { UserAd } from '@/types/user-ads';
import toast from 'react-hot-toast';

export default function AdminAllAdsPage() {
  const router = useRouter();
  const [ads, setAds] = useState<UserAd[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected' | 'expired'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllAds();
  }, []);

  const fetchAllAds = async () => {
    try {
      const response = await fetch('/api/admin/ads-approval?status=all');
      if (response.ok) {
        const data = await response.json();
        setAds(data.ads || []);
      } else {
        toast.error('Failed to load ads');
      }
    } catch (error) {
      console.error('Failed to fetch ads:', error);
      toast.error('Failed to load ads');
    } finally {
      setLoading(false);
    }
  };

  const filteredAds = ads.filter(ad => {
    // Filter by status
    const statusMatch = 
      filter === 'all' ? true :
      filter === 'pending' ? ad.approval_status === 'pending' :
      filter === 'approved' ? ad.approval_status === 'approved' && !ad.is_expired :
      filter === 'rejected' ? ad.approval_status === 'rejected' :
      filter === 'expired' ? ad.is_expired : true;

    // Filter by search term
    const searchMatch = searchTerm === '' || 
      ad.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ad.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (ad.user as any)?.email?.toLowerCase().includes(searchTerm.toLowerCase());

    return statusMatch && searchMatch;
  });

  const getStatusBadge = (ad: UserAd) => {
    if (ad.is_expired) return { variant: 'default' as const, text: 'Expired', color: 'gray' };
    if (ad.approval_status === 'approved') return { variant: 'success' as const, text: 'Active', color: 'green' };
    if (ad.approval_status === 'pending') return { variant: 'warning' as const, text: 'Pending', color: 'orange' };
    if (ad.approval_status === 'rejected') return { variant: 'error' as const, text: 'Rejected', color: 'red' };
    return { variant: 'default' as const, text: 'Draft', color: 'gray' };
  };

  const stats = {
    total: ads.length,
    pending: ads.filter(a => a.approval_status === 'pending').length,
    approved: ads.filter(a => a.approval_status === 'approved' && !a.is_expired).length,
    rejected: ads.filter(a => a.approval_status === 'rejected').length,
    expired: ads.filter(a => a.is_expired).length,
  };

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              All User Ads
            </h1>
            <p className="text-sm text-gray-600 mt-1">Complete ads management and overview</p>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
              <div className="text-xs text-gray-600">Total Ads</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.pending}</div>
              <div className="text-xs text-gray-600">Pending</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
              <div className="text-xs text-gray-600">Active</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
              <div className="text-xs text-gray-600">Rejected</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-gray-50 to-slate-50 border-gray-200">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-600">{stats.expired}</div>
              <div className="text-xs text-gray-600">Expired</div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by name, email, location, category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {['all', 'pending', 'approved', 'rejected', 'expired'].map((f) => (
                  <Button
                    key={f}
                    variant={filter === f ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilter(f as any)}
                    className={filter === f ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' : ''}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ads List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardContent className="p-4">
                <div className="h-40 bg-gray-200 rounded mb-3" />
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
          transition={{ delay: 0.3 }}
        >
          <Card className="border-2 border-dashed">
            <CardContent className="py-16 text-center">
              <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {filter === 'all' ? 'No Ads Found' : `No ${filter} Ads`}
              </h3>
              <p className="text-gray-600">
                {searchTerm ? 'Try adjusting your search' : 'User ads will appear here once created'}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredAds.map((ad, index) => {
              const status = getStatusBadge(ad);
              return (
                <motion.div
                  key={ad.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                    onClick={() => router.push(`/admin/ads/${ad.id}`)}
                    className="cursor-pointer"
                  >
                  <Card className="border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all">
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
                          <FileText className="h-12 w-12 text-gray-300" />
                        </div>
                      )}
                      {/* Status Badge */}
                      <div className="absolute top-2 right-2">
                        <Badge variant={status.variant} className="shadow-lg">
                          {status.text}
                        </Badge>
                      </div>
                      {/* Payment Status */}
                      {ad.payment && (
                        <div className="absolute top-2 left-2">
                          <Badge variant={ad.payment.payment_status === 'verified' ? 'success' : 'warning'} className="shadow-lg">
                            {ad.payment.payment_status === 'verified' ? '💳 Paid' : '⏳ Payment Pending'}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Ad Details */}
                    <CardContent className="p-4">
                      <h3 className="font-bold text-base text-gray-900 mb-1 truncate">{ad.name}</h3>
                      <p className="text-xs text-gray-600 mb-2">{ad.age} • {ad.location} • {ad.category}</p>

                      {/* User Info */}
                      <div className="flex items-center gap-2 mb-3 p-2 bg-blue-50 rounded-lg">
                        <User className="h-3 w-3 text-blue-600" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-blue-900 truncate">
                            {(ad.user as any)?.full_name || 'Unknown User'}
                          </p>
                          <p className="text-xs text-blue-700 truncate">
                            {(ad.user as any)?.email || 'No email'}
                          </p>
                        </div>
                      </div>

                      {/* Plan & Stats */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center p-2 bg-purple-50 rounded-lg">
                          <div className="text-sm font-bold text-purple-600">{ad.views_count}</div>
                          <div className="text-xs text-gray-600">Views</div>
                        </div>
                        <div className="text-center p-2 bg-green-50 rounded-lg">
                          <div className="text-sm font-bold text-green-600">{ad.clicks_count}</div>
                          <div className="text-xs text-gray-600">Clicks</div>
                        </div>
                        <div className="text-center p-2 bg-orange-50 rounded-lg">
                          <div className="text-xs font-bold text-orange-600">
                            {ad.end_date ? Math.max(0, Math.ceil((new Date(ad.end_date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))) : 0}d
                          </div>
                          <div className="text-xs text-gray-600">Left</div>
                        </div>
                      </div>

                      {/* Plan Info */}
                      <div className="text-xs text-gray-500 space-y-1 mb-3">
                        <div className="flex justify-between">
                          <span>Plan:</span>
                          <span className="font-semibold">{ad.plan?.name || 'N/A'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Created:</span>
                          <span className="font-medium">{new Date(ad.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Actions */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-purple-50 hover:border-purple-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(`/admin/ads/${ad.id}`);
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}

      {/* Results Info */}
      {!loading && (
        <div className="text-center text-sm text-gray-500">
          Showing {filteredAds.length} of {ads.length} ads
        </div>
      )}
    </div>
  );
}

