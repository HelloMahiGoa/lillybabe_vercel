import { Button } from '@/components/ui/button';
import { ProfileCard } from '@/components/profiles/profile-card';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  photo_url: string;
  rating: number;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  availability: string;
  distance: string;
}

interface AvailableProfilesProps {
  profiles: Profile[];
}

export const AvailableProfiles = ({ profiles }: AvailableProfilesProps) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Check Our Today's Available Profiles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our verified escorts and call girls in Chennai. All profiles are background-checked and ready to meet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {profiles.slice(0, 6).map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Contact Us for More
          </Button>
        </div>
      </div>
    </section>
  );
};
