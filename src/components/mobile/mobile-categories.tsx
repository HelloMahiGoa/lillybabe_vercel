import { Button } from '@/components/ui/button';
import { Star, Heart, ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: 'Teen Escorts',
    image: '/images/teen.webp',
    count: '25+',
    rating: '4.8',
    price: '₹8K-15K',
    color: 'from-pink-400 to-pink-600',
    description: 'Young and vibrant',
    badge: 'Popular'
  },
  {
    title: 'HouseWife',
    image: '/images/housewife.webp',
    count: '30+',
    rating: '4.9',
    price: '₹10K-18K',
    color: 'from-purple-400 to-purple-600',
    description: 'Mature and experienced',
    badge: 'Trending'
  },
  {
    title: 'Tamil Models',
    image: '/images/Tamil1.webp',
    count: '40+',
    rating: '4.7',
    price: '₹12K-20K',
    color: 'from-orange-400 to-orange-600',
    description: 'Local Tamil beauties',
    badge: 'Featured'
  },
  {
    title: 'Russian Escorts',
    image: '/images/russian1.webp',
    count: '15+',
    rating: '4.9',
    price: '₹15K-25K',
    color: 'from-red-400 to-red-600',
    description: 'Exotic international',
    badge: 'Premium'
  },
  {
    title: 'Independent',
    image: '/images/independent.jpg',
    count: '50+',
    rating: '4.8',
    price: '₹10K-20K',
    color: 'from-blue-400 to-blue-600',
    description: 'Self-employed professionals',
    badge: 'Verified'
  },
  {
    title: 'VIP Escorts',
    image: '/images/vipescorts.png',
    count: '20+',
    rating: '5.0',
    price: '₹20K-35K',
    color: 'from-yellow-400 to-yellow-600',
    description: 'Premium luxury service',
    badge: 'Elite'
  }
];

export const MobileCategories = () => {
  const handleViewAll = () => {
    const profilesSection = document.querySelector('.mobile-profiles');
    if (profilesSection) {
      profilesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category: string) => {
    const profilesSection = document.querySelector('.mobile-profiles');
    if (profilesSection) {
      profilesSection.scrollIntoView({ behavior: 'smooth' });
    }
    console.log(`Selected category: ${category}`);
  };

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 mobile-categories">
      <div className="px-4">
        {/* Enhanced Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-pink-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Categories</h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Choose your perfect match</p>
          </div>
          <button 
            onClick={handleViewAll}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-red-600 transition-all duration-300 active:scale-95 shadow-lg"
          >
            View All
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Enhanced Horizontal Scrolling Categories */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4">
          {categories.map((category, index) => (
            <div key={index} className="flex-shrink-0 w-64 transform hover:scale-105 transition-all duration-300">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden mobile-category-card hover:shadow-2xl transition-all duration-500 group">
                {/* Enhanced Image Section */}
                <div className="relative h-44">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="256px"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
                  
                  {/* Enhanced Badge */}
                  <div className="absolute top-3 right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">{category.count}</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-xs font-bold">{category.badge}</span>
                  </div>
                  
                  {/* Enhanced Rating */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-3 w-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-white font-bold">{category.rating}</span>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-5 mobile-category-content">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2 text-lg mobile-category-title">{category.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 mobile-category-description">{category.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Starting from</span>
                    <span className="text-lg font-bold text-pink-600 dark:text-pink-400 mobile-category-price">{category.price}</span>
                  </div>
                  
                  <button 
                    onClick={() => handleCategoryClick(category.title)}
                    className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-3 px-4 rounded-2xl text-sm font-bold transition-all duration-300 active:scale-95 shadow-lg group-hover:shadow-xl"
                  >
                    <Heart className="h-4 w-4 inline mr-2" />
                    View Profiles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Stats */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20">
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">6</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Categories</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20">
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">180+</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Total Profiles</div>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 dark:border-gray-700/20">
            <div className="text-xl font-bold text-gray-900 dark:text-gray-100">4.8</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
