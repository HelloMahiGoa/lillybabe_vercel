import { ProfileCard } from '@/components/profiles/profile-card';
import { Profile } from '@/types';

interface AvailableProfilesProps {
  profiles: Profile[];
  loading?: boolean;
}

export const AvailableProfiles = ({ profiles, loading = false }: AvailableProfilesProps) => {
  return (
    <section id="profiles-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Today's Available Escorts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover our verified escorts and call girls in Chennai. All profiles are background-checked and ready to meet.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Loading Profiles...</h3>
            <p className="text-gray-600 mb-4">Please wait while we fetch the today's available profiles.</p>
          </div>
        ) : profiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Profiles Available</h3>
            <p className="text-gray-600 mb-4">Check back later for new profiles or contact us for more information.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {profiles.slice(0, 8).map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        )}


      </div>
    </section>
  );
};
