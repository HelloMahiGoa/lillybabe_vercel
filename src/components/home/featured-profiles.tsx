import { ProfileCard } from '@/components/profiles/profile-card';
import { Profile } from '@/types';
import { useState, useEffect } from 'react';
import { RefreshCw, ChevronDown } from 'lucide-react';

interface AvailableProfilesProps {
  profiles: Profile[];
  userAds?: Profile[];
  isLoading?: boolean;
  onRefresh?: () => void;
}

export const AvailableProfiles = ({ profiles, userAds = [], isLoading = false, onRefresh }: AvailableProfilesProps) => {
  // Scroll to profiles grid function
  const scrollToProfilesGrid = () => {
    const profilesGrid = document.querySelector('[data-profiles-grid]');
    if (profilesGrid) {
      profilesGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

  // Use consistent selections to avoid hydration mismatch
  const [randomLoadingIndex, setRandomLoadingIndex] = useState(0);
  const [randomEmptyIndex, setRandomEmptyIndex] = useState(0);
  
  // Set random values on client side only
  useEffect(() => {
    setRandomLoadingIndex(Math.floor(Math.random() * loadingHeadings.length));
    setRandomEmptyIndex(Math.floor(Math.random() * emptyHeadings.length));
  }, []);
  
  const loadingHeading = loadingHeadings[randomLoadingIndex];
  const loadingMessage = loadingMessages[randomLoadingIndex];
  const emptyHeading = emptyHeadings[randomEmptyIndex];
  const emptyMessage = emptyMessages[randomEmptyIndex];

  // Combine profiles and user ads, shuffling them randomly
  const [allProfiles, setAllProfiles] = useState<Profile[]>([]);
  
  useEffect(() => {
    const combined = [...profiles, ...userAds];
    // Shuffle the combined array randomly
    const shuffled = combined.sort(() => Math.random() - 0.5);
    setAllProfiles(shuffled);
  }, [profiles, userAds]);

  return (
    <section id="profiles-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            🔥 Available Right Now - Today's Profiles 🔥
          </h2>
          
          {/* Scroll to Profiles Button */}
          <div className="mb-6">
            <button
              onClick={scrollToProfilesGrid}
              className="inline-flex flex-col items-center gap-2 group"
              aria-label="Scroll to profiles"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-bounce">
                <ChevronDown className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                View Profiles Below
              </span>
            </button>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-6">
            Here you can see all our today's available profiles in Chennai. These beautiful escorts are ready to meet you right now!
          </p>
          
          {/* Main Info Box */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 dark:from-pink-900 dark:to-red-900 p-6 rounded-lg border-2 border-pink-200 dark:border-pink-700 max-w-4xl mx-auto mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              📋 About Our Profile System
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong className="text-gray-900 dark:text-gray-100">These profiles are a mix of:</strong> Some are our agency girls who work directly with us, and some are paid ads posted by independent escorts who pay us to advertise their services. All posted ads are verified by selfie videos before being approved, so you can trust that these profiles and ads are genuine and authentic.
            </p>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              Every profile you see here has been carefully screened to ensure quality and authenticity. We maintain high standards to give you the best experience possible.
            </p>
          </div>

          {/* Three Column Info Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto mb-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-purple-200 dark:border-purple-700 shadow-sm">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Verified Profiles</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All independent escort ads are verified with real selfie videos to ensure authenticity and build trust.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-blue-200 dark:border-blue-700 shadow-sm">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Agency Girls</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our in-house agency escorts are professionally trained and available for immediate bookings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-2 border-green-200 dark:border-green-700 shadow-sm">
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">Quality Assured</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We maintain strict quality control to ensure every profile meets our high standards of service.
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 max-w-5xl mx-auto mb-8">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-gray-900 dark:text-gray-100">💡 Why Trust Us?</strong> Unlike other platforms where you might encounter fake profiles or scams, we go the extra mile to verify every independent escort through video verification. Our agency girls are personally known to us, ensuring reliability and professionalism. You'll find genuine profiles here that you can trust.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{loadingHeading}</h3>
            <p className="text-gray-600 mb-4">{loadingMessage}</p>
            {onRefresh && (
              <button
                onClick={onRefresh}
                disabled
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed opacity-50"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Loading...</span>
              </button>
            )}
          </div>
        ) : allProfiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{emptyHeading}</h3>
            <p className="text-gray-600 mb-4">{emptyMessage}</p>
            {onRefresh && (
              <button
                onClick={onRefresh}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Refresh Profiles</span>
              </button>
            )}
          </div>
        ) : (
          <div 
            data-profiles-grid 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 px-4"
          >
            {allProfiles.map((profile) => (
              <ProfileCard 
                key={profile.id} 
                profile={profile} 
                isUserAd={(profile as any).source === 'user_ad'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
