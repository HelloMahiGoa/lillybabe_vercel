'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, CreditCard, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/user/dashboard', icon: Home },
  { name: 'My Ads', href: '/user/ads', icon: FileText },
  { name: 'Payments', href: '/user/payments', icon: CreditCard },
  { name: 'Profile', href: '/user/profile', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();
  const activeIndex = navItems.findIndex(item => pathname === item.href || pathname.startsWith(item.href + '/'));

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 md:hidden">
      {/* Floating Active Indicator */}
      <div className="relative h-16">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-0">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
            initial={false}
            animate={{
              x: `${activeIndex * 100}%`,
              width: `${100 / navItems.length}%`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
          />
        </div>

        <div className="grid grid-cols-4 h-full">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex flex-col items-center justify-center gap-1"
              >
                {/* Ripple Effect on Active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-pink-500"
                    />
                  )}
                </AnimatePresence>

                {/* Icon Container */}
                <motion.div
                  animate={{
                    y: isActive ? -2 : 0,
                    scale: isActive ? 1.1 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }}
                  className="relative"
                >
                  {/* Gradient Background for Active */}
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                  
                  <Icon 
                    className={cn(
                      "h-6 w-6 relative z-10 transition-colors",
                      isActive ? "text-white" : "text-gray-600"
                    )} 
                  />
                </motion.div>

                {/* Label with Scale Animation */}
                <motion.span
                  animate={{
                    scale: isActive ? 1 : 0.9,
                    opacity: isActive ? 1 : 0.7
                  }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? "text-pink-600 font-semibold" : "text-gray-600"
                  )}
                >
                  {item.name}
                </motion.span>

                {/* Active Dot Above */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute top-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

