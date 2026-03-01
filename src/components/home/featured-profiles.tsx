import { Profile } from '@/types';
import { useState, useEffect, useMemo } from 'react';
import { RefreshCw, ChevronDown, ShieldCheck, Sparkles, Crown, Clock, Check } from 'lucide-react';

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

  const stats = useMemo(() => {
    const total = allProfiles.length;
    if (total === 0) {
      return {
        total,
        featured: 0,
        independent: 0,
        agency: 0,
        averageRating: 0,
        averageResponseRate: 0,
      };
    }

    const featured = allProfiles.filter((profile) => profile.is_featured).length;
    const independent = allProfiles.filter((profile) => (profile as any).source === 'user_ad').length;
    const agency = Math.max(total - independent, 0);
    const averageRating =
      allProfiles.reduce((acc, profile) => acc + (profile.rating || 0), 0) / total;
    const averageResponseRate =
      allProfiles.reduce((acc, profile) => acc + (profile.response_rate || 0), 0) / total;

    return { total, featured, independent, agency, averageRating, averageResponseRate };
  }, [allProfiles]);

  const averageRatingDisplay = stats.averageRating > 0 ? stats.averageRating.toFixed(1) : '—';
  const responseRateDisplay =
    stats.averageResponseRate > 0 ? Math.round(stats.averageResponseRate) : '—';

  const highlightFeatures = [
    {
      Icon: ShieldCheck,
      title: 'Video-verified authenticity',
      description:
        'Independent escorts share a quick selfie video with us before appearing here, so you always meet the real person.',
    },
    {
      Icon: Crown,
      title: 'Agency favourites & trusted partners',
      description:
        'Our in-house team features agency escorts alongside a few independents we know personally and can vouch for.',
    },
    {
      Icon: Sparkles,
      title: 'Fresh line-up every day',
      description:
        'We refresh the page through the day so you keep discovering new faces and limited-time offers.',
    },
    {
      Icon: Clock,
      title: 'Real-time availability updates',
      description:
        'See who is free right now and ask for your preferred time without waiting around.',
    },
  ];

  const assurancePoints = [
    'We speak with every escort to confirm your request before sharing contact details.',
    'If your first choice is busy, our support team suggests alternatives without any extra charge.',
    'Pricing is transparent — the rate on the profile is the actual rate you pay.',
  ];

  return (
    <section id="profiles-section" className="relative overflow-hidden">
      <div className="relative bg-slate-950 py-20 sm:py-24 lg:py-28 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/25 blur-3xl" />
          <div className="absolute top-1/3 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              Featured profiles
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Meet Chennai&apos;s most requested escorts today
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl">
              Our team keeps this list updated all day, so you only see escorts who are genuinely available right now across Chennai.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button
                onClick={scrollToProfilesGrid}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 px-6 py-3 text-sm font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Scroll to live profiles"
              >
                Browse live profiles
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white/70 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                <span>Updated moments ago</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-white/60">Available today</p>
              <p className="mt-2 text-3xl font-semibold">{stats.total || 0}</p>
              <p className="mt-3 text-sm text-white/70">Profiles currently accepting bookings</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-white/60">Featured picks</p>
              <p className="mt-2 text-3xl font-semibold">{stats.featured || 0}</p>
              <p className="mt-3 text-sm text-white/70">Hand-selected escorts for priority requests</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-white/60">Avg rating</p>
              <p className="mt-2 text-3xl font-semibold">{averageRatingDisplay}</p>
              <p className="mt-3 text-sm text-white/70">Based on guest feedback &amp; concierge reviews</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-widest text-white/60">Response rate</p>
              <p className="mt-2 text-3xl font-semibold">{responseRateDisplay === '—' ? '—' : `${responseRateDisplay}%`}</p>
              <p className="mt-3 text-sm text-white/70">Average time we typically confirm your request</p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {highlightFeatures.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="h-full rounded-3xl border border-white/15 bg-white/5 p-6 text-left backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <div className="mb-4 inline-flex rounded-full bg-white/10 p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[32px] border border-white/15 bg-white/8 p-8 backdrop-blur">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-semibold text-white">How this section works</h3>
                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  We feature our own agency escorts and a few independent ads from women we know and trust. Every profile is checked by our team, selfie-verified and monitored so you always know who you&apos;re meeting.
                </p>
              </div>
              <div className="space-y-3">
                {assurancePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-3 rounded-t-[40px] bg-white pb-16 pt-12 shadow-xl dark:bg-gray-950">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="text-center py-12 sm:py-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
                <div className="h-8 w-8 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{loadingHeading}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{loadingMessage}</p>
            </div>
          ) : allProfiles.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">{emptyHeading}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{emptyMessage}</p>
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Profiles currently unavailable in this build
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The profiles section has been removed from this deployment, but the rest of the site remains active.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
