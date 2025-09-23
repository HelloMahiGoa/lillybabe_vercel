import { ProfileCard } from '@/components/profiles/profile-card';
import { Profile } from '@/types';
import { useState, useEffect } from 'react';

interface AvailableProfilesProps {
  profiles: Profile[];
  isLoading?: boolean;
}

export const AvailableProfiles = ({ profiles, isLoading = false }: AvailableProfilesProps) => {
  // Random loading headings
  const loadingHeadings = [
    "Finding Available Girls",
    "Loading Today's Profiles",
    "Getting Fresh Profiles",
    "Finding Perfect Matches",
    "Checking Availability",
    "Almost Ready"
  ];

  // Random loading messages
  const loadingMessages = [
    "Please wait while we fetch today's available profiles...",
    "Just a moment while we find the perfect girls for you...",
    "Loading our verified Chennai girls for you...",
    "Checking who's available to meet you today...",
    "Getting the hottest profiles ready for you...",
    "Finding the best matches based on your location..."
  ];

  // Random empty state headings
  const emptyHeadings = [
    "No Girls Available Right Now",
    "Taking a Short Break",
    "Check Back Soon",
    "Profiles Being Updated",
    "New Girls Coming Soon",
    "Temporarily Unavailable"
  ];

  // Random empty state messages
  const emptyMessages = [
    "Check back later - we update daily with fresh profiles, or just give us a call and we'll find someone perfect for you!",
    "Our girls are currently busy with appointments. Please check back in a few hours or call us directly!",
    "We're updating our profile list. Check back soon to see our new gorgeous Chennai girls!",
    "All our girls are currently engaged. Give us a call and we'll arrange someone special for you!",
    "New profiles are being added soon! Check back in a bit or contact us directly for immediate arrangements.",
    "Our most popular girls get booked quickly. Call us now and we'll find someone amazing for you!"
  ];

  // Random selections
  const [randomLoadingIndex] = useState(Math.floor(Math.random() * loadingHeadings.length));
  const [randomEmptyIndex] = useState(Math.floor(Math.random() * emptyHeadings.length));
  
  const loadingHeading = loadingHeadings[randomLoadingIndex];
  const loadingMessage = loadingMessages[randomLoadingIndex];
  const emptyHeading = emptyHeadings[randomEmptyIndex];
  const emptyMessage = emptyMessages[randomEmptyIndex];

  return (
    <section id="profiles-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Available Right Now
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Check out these amazing girls who are ready to meet you today. We know them personally, so you know they're real and actually available!
          </p>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{loadingHeading}</h3>
            <p className="text-gray-600 mb-4">{loadingMessage}</p>
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{emptyHeading}</h3>
            <p className="text-gray-600 mb-4">{emptyMessage}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4">
            {profiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
