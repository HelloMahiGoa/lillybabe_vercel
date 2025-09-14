'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  FolderIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  Squares2X2Icon,
  ChartBarIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon },
  { name: 'Profiles', href: '/admin/profiles', icon: UserGroupIcon },
  { name: 'Categories', href: '/admin/categories', icon: FolderIcon },
  { name: 'Locations', href: '/admin/locations', icon: MapPinIcon },
  { name: 'Testimonials', href: '/admin/testimonials', icon: ChatBubbleLeftRightIcon },
  { name: 'Bulk Operations', href: '/admin/bulk-operations', icon: Squares2X2Icon },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon },
  { name: 'Google Indexing', href: '/admin/google-indexing', icon: MagnifyingGlassIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white border-r border-gray-200">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-xl font-semibold text-gray-900">LillyBabe Admin</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive
                  ? 'bg-blue-100 text-blue-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <item.icon
                className={`mr-3 h-5 w-5 flex-shrink-0 ${
                  isActive ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500'
                }`}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
