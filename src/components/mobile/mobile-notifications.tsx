"use client";

import { useState } from 'react';
import { Bell, X, Check, Star, Heart, MessageCircle, Clock } from 'lucide-react';
import Image from 'next/image';

const notifications = [
  {
    id: 1,
    type: 'new_profile',
    title: 'New Profile Available',
    message: 'Priya (24) is now available in T-Nagar',
    time: '2 min ago',
    image: '/images/models/model-1.webp',
    read: false
  },
  {
    id: 2,
    type: 'booking_confirmed',
    title: 'Booking Confirmed',
    message: 'Your booking with Anjali has been confirmed',
    time: '15 min ago',
    image: '/images/models/model-2.webp',
    read: true
  },
  {
    id: 3,
    type: 'message',
    title: 'New Message',
    message: 'Meera sent you a message',
    time: '1 hour ago',
    image: '/images/models/model-3.webp',
    read: false
  },
  {
    id: 4,
    type: 'promotion',
    title: 'Special Offer',
    message: '20% off on VIP escorts this weekend',
    time: '2 hours ago',
    image: null,
    read: true
  }
];

export const MobileNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationsList, setNotificationsList] = useState(notifications);

  const markAsRead = (id: number) => {
    setNotificationsList(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notificationsList.filter(n => !n.read).length;

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'new_profile':
        return <Star className="h-4 w-4 text-green-500" />;
      case 'booking_confirmed':
        return <Check className="h-4 w-4 text-blue-500" />;
      case 'message':
        return <MessageCircle className="h-4 w-4 text-pink-500" />;
      case 'promotion':
        return <Heart className="h-4 w-4 text-red-500" />;
      default:
        return <Bell className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <>
      {/* Notification Bell */}
      <button 
        onClick={() => setIsOpen(true)}
        className="relative w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
      >
        <Bell className="h-5 w-5 text-white" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Notifications Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
              {notificationsList.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {notificationsList.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 ${!notification.read ? 'bg-pink-50' : 'bg-white'}`}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <div className="flex items-start gap-3">
                        {/* Avatar */}
                        <div className="flex-shrink-0">
                          {notification.image ? (
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                              <Image
                                src={notification.image}
                                alt={notification.title}
                                width={48}
                                height={48}
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                              {getNotificationIcon(notification.type)}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold text-gray-900">
                                {notification.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {notification.message}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Clock className="h-3 w-3 text-gray-400" />
                                <span className="text-xs text-gray-500">
                                  {notification.time}
                                </span>
                                {!notification.read && (
                                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
                  <p className="text-gray-500">You're all caught up!</p>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <button 
                onClick={() => {
                  setNotificationsList(prev => prev.map(n => ({ ...n, read: true })));
                }}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                Mark All as Read
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
