'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import Header from './header';
import { AdminUser } from '@/types/admin';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/auth/me', {
          // Add cache control to reduce unnecessary requests
          cache: 'default',
          headers: {
            'Cache-Control': 'max-age=300', // Cache for 5 minutes
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          // Redirect to login if not authenticated
          if (pathname !== '/admin/login') {
            router.push('/admin/login');
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        if (pathname !== '/admin/login') {
          router.push('/admin/login');
        }
      } finally {
        setLoading(false);
      }
    };

    // Only check auth if we don't have a user or if we're not on login page
    if (!user && pathname !== '/admin/login') {
      checkAuth();
    } else if (pathname === '/admin/login') {
      setLoading(false);
    }
  }, [pathname, router, user]);

  // Don't show layout for login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <Header user={user} />
        <main className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
      
      {/* Vercel Analytics for Admin */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
