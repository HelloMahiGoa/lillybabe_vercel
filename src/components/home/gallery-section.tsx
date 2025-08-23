import { Button } from '@/components/ui/button';
import { Star, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const galleryCategories = [
  {
    title: 'Teen Escorts',
    description: 'Young and vibrant companions for exciting experiences',
    image: '/images/teen.webp',
    count: '25+ Profiles',
    features: ['18-22 Age Range', 'Fresh & Energetic', 'College Students']
  },
  {
    title: 'HouseWife Escorts',
    description: 'Mature and experienced companions for sophisticated encounters',
    image: '/images/housewife.webp',
    count: '30+ Profiles',
    features: ['Mature Experience', 'Discreet Service', 'Home Comfort']
  },
  {
    title: 'Tamil Escorts',
    description: 'Local Tamil beauties with cultural charm and elegance',
    image: '/images/Tamil1.webp',
    count: '40+ Profiles',
    features: ['Local Tamil Girls', 'Cultural Understanding', 'Language Comfort']
  },
  {
    title: 'Mallu Escorts',
    description: 'Malayali beauties with grace and sophistication',
    image: '/images/mallu.webp',
    count: '20+ Profiles',
    features: ['Malayali Beauty', 'Graceful Service', 'Traditional Charm']
  },
  {
    title: 'Independent Escorts',
    description: 'Self-employed professionals offering premium services',
    image: '/images/independent.jpg',
    count: '50+ Profiles',
    features: ['Self-Employed', 'Premium Service', 'Direct Contact']
  },
  {
    title: 'Russian Escorts',
    description: 'Exotic international companions for luxury experiences',
    image: '/images/russian1.webp',
    count: '15+ Profiles',
    features: ['International Beauty', 'Luxury Experience', 'Exotic Charm']
  },
  {
    title: 'Celebrity Escorts',
    description: 'High-profile companions for VIP experiences',
    image: '/images/celebrity.webp',
    count: '10+ Profiles',
    features: ['VIP Service', 'High Profile', 'Exclusive Access']
  },
  {
    title: 'Model Escorts',
    description: 'Professional models offering premium companionship',
    image: '/images/models/model-1.webp',
    count: '35+ Profiles',
    features: ['Professional Models', 'Fashion Industry', 'Premium Looks']
  },
  {
    title: 'College Girls',
    description: 'Young college students for fresh experiences',
    image: '/images/teen.webp',
    count: '45+ Profiles',
    features: ['College Students', 'Young Age', 'Fresh Experience']
  },
  {
    title: 'VIP Escorts',
    description: 'Premium VIP companions for luxury experiences',
    image: '/images/vipescorts.png',
    count: '20+ Profiles',
    features: ['VIP Service', 'Luxury Experience', 'Premium Quality']
  },
  {
    title: 'High Profile Escorts',
    description: 'High-profile companions for exclusive experiences',
    image: '/images/highprofile.png',
    count: '15+ Profiles',
    features: ['High Profile', 'Exclusive Service', 'Premium Quality']
  },
  {
    title: 'Corporate Escorts',
    description: 'Professional companions for business events',
    image: '/images/models/model-2.webp',
    count: '25+ Profiles',
    features: ['Business Events', 'Professional Service', 'Corporate Ready']
  }
];

export const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Special Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our diverse collection of beautiful and professional Chennai escorts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {category.count}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                  <p className="text-white/90 text-sm mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {category.features.slice(0, 2).map((feature, featureIndex) => (
                      <span key={featureIndex} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">Premium Quality</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-pink-500" />
                    <span className="text-sm text-gray-600">Verified</span>
                  </div>
                </div>
                <Button variant="primary" className="w-full group-hover:bg-pink-600 transition-colors">
                  <span>View Gallery</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Contact us for custom requirements. We have a vast network of escorts across Chennai 
              and can arrange exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="flex items-center gap-2 bg-white text-purple-900 hover:bg-gray-100">
                <Star className="h-5 w-5" />
                View All Collections
              </Button>
              <Button variant="secondary_gradient" size="lg" className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Contact for Custom
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
