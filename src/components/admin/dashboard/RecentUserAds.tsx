'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FileText, Eye, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserAd } from '@/types/user-ads';

export default function RecentUserAds() {
  const router = useRouter();
  const [ads, setAds] = useState<UserAd[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentAds();
  }, []);

  const fetchRecentAds = async () => {
    try {
      const response = await fetch('/api/admin/ads-approval?status=all');
      if (response.ok) {
        const data = await response.json();
        // Get only the 5 most recent
        setAds((data.ads || []).slice(0, 5));
      }
    } catch (error) {
      console.error('Failed to fetch recent ads:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Recent User Ads</CardTitle>
        <Button
          variant="link"
          size="sm"
          onClick={() => router.push('/admin/ads')}
          className="text-sm"
        >
          View All →
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex items-center gap-3">
                <div className="h-12 w-12 bg-gray-200 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-3/4" />
                  <div className="h-2 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : ads.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-2 text-gray-300" />
            <p className="text-sm">No user ads yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {ads.map((ad) => (
              <div
                key={ad.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border"
                onClick={() => router.push(`/admin/ads/${ad.id}`)}
              >
                {ad.main_photo_url ? (
                  <img
                    src={ad.main_photo_url}
                    alt={ad.name}
                    className="h-12 w-12 rounded object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded bg-gray-100 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-gray-300" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{ad.name}</p>
                  <p className="text-xs text-gray-600">{ad.location} • {(ad.user as any)?.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge
                      variant={
                        ad.approval_status === 'approved' ? 'success' :
                        ad.approval_status === 'pending' ? 'warning' : 'error'
                      }
                      className="text-xs"
                    >
                      {ad.approval_status}
                    </Badge>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {ad.views_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

