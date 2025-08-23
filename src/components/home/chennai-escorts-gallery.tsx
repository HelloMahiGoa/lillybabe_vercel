import { Button } from '@/components/ui/button';
import { Star, Heart, MapPin, Clock, Users } from 'lucide-react';
import Image from 'next/image';

const escortCategories = [
  {
    title: 'Chennai Escorts',
    description: 'Premium escorts in Chennai for all your needs',
    image: '/images/escorts-in-chennai.jpg',
    count: '500+ Profiles',
    rating: '4.9',
    features: ['Verified Profiles', '24/7 Service', 'All Areas']
  },
  {
    title: 'T-Nagar Escorts',
    description: 'Beautiful escorts in T-Nagar shopping district',
    image: '/images/models/model-3.webp',
    count: '80+ Profiles',
    rating: '4.8',
    features: ['Shopping District', 'Central Location', 'Premium Service']
  },
  {
    title: 'Adyar Escorts',
    description: 'Luxury escorts in high-end Adyar area',
    image: '/images/models/model-4.webp',
    count: '60+ Profiles',
    rating: '4.9',
    features: ['High-End Area', 'Luxury Service', 'Exclusive']
  },
  {
    title: 'OMR Escorts',
    description: 'Professional escorts in IT corridor',
    image: '/images/models/model-5.webp',
    count: '70+ Profiles',
    rating: '4.7',
    features: ['IT Corridor', 'Corporate Service', 'Professional']
  },
  {
    title: 'ECR Escorts',
    description: 'Beachfront escorts along East Coast Road',
    image: '/images/russian2.webp',
    count: '45+ Profiles',
    rating: '4.8',
    features: ['Beachfront', 'Scenic Views', 'Relaxing']
  },
  {
    title: 'Anna Nagar Escorts',
    description: 'Quality escorts in residential Anna Nagar',
    image: '/images/housewife-1.png',
    count: '55+ Profiles',
    rating: '4.6',
    features: ['Residential Area', 'Quality Service', 'Family-Friendly']
  }
];

const featuredProfiles = [
  {
    name: 'Priya',
    age: 24,
    location: 'T-Nagar',
    image: '/images/models/escort-girl-2.webp',
    rating: 4.9,
    price: '₹12,000',
    features: ['Verified', 'Premium', 'Available Now']
  },
  {
    name: 'Anjali',
    age: 26,
    location: 'Adyar',
    image: '/images/models/escort-girl-3.webp',
    rating: 4.8,
    price: '₹15,000',
    features: ['VIP', 'Luxury', 'Experienced']
  },
  {
    name: 'Meera',
    age: 22,
    location: 'OMR',
    image: '/images/models/escort-girl-4.webp',
    rating: 4.7,
    price: '₹10,000',
    features: ['Young', 'Fresh', 'Professional']
  },
  {
    name: 'Sofia',
    age: 25,
    location: 'ECR',
    image: '/images/russian3.webp',
    rating: 4.9,
    price: '₹18,000',
    features: ['International', 'Exotic', 'Premium']
  }
];

export const ChennaiEscortsGallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chennai Escorts Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our extensive collection of beautiful and professional Chennai escorts across all major areas
          </p>
        </div>

        {/* Area Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {escortCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-pink-300">
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-1">{category.title}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{category.rating}</span>
                    <span>•</span>
                    <span>{category.count}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{category.description}</p>
              
              <div className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button variant="primary" className="w-full">
                View {category.title}
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Profiles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Featured Chennai Escorts
            </h3>
            <p className="text-lg text-gray-600">
              Our most popular and highly-rated escorts in Chennai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProfiles.map((profile, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-lg font-semibold text-white mb-1">{profile.name}, {profile.age}</h4>
                    <div className="flex items-center gap-2 text-white/90 text-sm mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/90 text-sm">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{profile.rating}</span>
                      <span>•</span>
                      <span className="font-semibold">{profile.price}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {profile.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="primary" size="sm" className="w-full">
                    Contact {profile.name}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Chennai Escorts</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">16</div>
              <div className="text-gray-200">Service Areas</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">4.9</div>
              <div className="text-gray-200">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
              <div className="text-gray-200">Available</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Meet Your Perfect Chennai Escort?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Contact us now and we'll help you find the perfect companion for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Browse All Profiles
            </Button>
            <Button variant="secondary_gradient" size="lg" className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
