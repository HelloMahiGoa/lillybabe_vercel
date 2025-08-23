import { Layout } from '@/components/layout/layout';
import { ProfileCard } from '@/components/profiles/profile-card';
import { Button } from '@/components/ui/button';
import { Star, Filter, Search } from 'lucide-react';

// Import sample data
import profilesData from '../../data/profiles.json';

interface Profile {
  id: number;
  name: string;
  age: number;
  nationality: string;
  rating: number;
  response_rate: number;
  availability: string;
  price_per_hour: number;
  is_featured: boolean;
  is_verified: boolean;
  description: string;
  photo_url: string;
  location: string;
  services: string[];
  languages: string[];
  height: string;
  body_type: string;
  hair_color: string;
  eye_color: string;
}

export default function ProfilesPage() {
  const profiles = profilesData.profiles as Profile[];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                All Available Profiles
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Browse through our complete collection of verified and professional Chennai escorts
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white border-b border-gray-200 py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search profiles..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
              <div className="text-gray-600">
                <span className="font-medium">{profiles.length}</span> profiles available
              </div>
            </div>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {profiles.map((profile) => (
              <ProfileCard 
                key={profile.id} 
                profile={profile}
                variant="default"
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us directly and we'll help you find the perfect companion for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-900">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
