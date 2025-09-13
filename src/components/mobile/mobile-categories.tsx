import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Heart, ArrowRight, ChevronRight, Sparkles, Crown, Zap, Play, Eye, Users, Plane, Hand, UserCheck, Globe, Shield } from 'lucide-react';
import Image from 'next/image';

const categories = [
  {
    title: 'Russian Escorts',
    image: '/images/category/russian-escorts.jpg',
    count: '15+',
    rating: '4.9',
    price: '₹15K-25K',
    gradient: 'from-purple-500 to-pink-500',
    description: 'Exotic international charm',
    badge: 'Genuine',
    icon: Globe
  },
  {
    title: 'Airhostess',
    image: '/images/category/airhostess-escorts.jpg',
    count: '12+',
    rating: '4.8',
    price: '₹18K-30K',
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Professional elegance',
    badge: 'Premium',
    icon: Plane
  },
  {
    title: 'Erotic Massage',
    image: '/images/category/erotic-massage.jpg',
    count: '20+',
    rating: '4.7',
    price: '₹8K-15K',
    gradient: 'from-green-500 to-teal-500',
    description: 'Therapeutic and soothing',
    badge: 'Relaxing',
    icon: Hand
  },
  {
    title: 'GF Experience',
    image: '/images/category/gf-experience.jpg',
    count: '25+',
    rating: '4.9',
    price: '₹12K-22K',
    gradient: 'from-pink-500 to-rose-500',
    description: 'Romantic and caring',
    badge: 'Sweet',
    icon: Heart
  },
  {
    title: 'Malayali Girls',
    image: '/images/category/malyali-escorts.jpg',
    count: '35+',
    rating: '4.8',
    price: '₹10K-18K',
    gradient: 'from-orange-500 to-red-500',
    description: 'Natural beauty and charm',
    badge: 'Featured',
    icon: Star
  },
  {
    title: 'Celebrity Look-alikes',
    image: '/images/category/celebrity-escorts.jpg',
    count: '8+',
    rating: '5.0',
    price: '₹25K-40K',
    gradient: 'from-yellow-500 to-orange-500',
    description: 'Star quality and glamour',
    badge: 'Elite',
    icon: Crown
  },
  {
    title: 'Housewife Escorts',
    image: '/images/category/housewife-escorts.jpg',
    count: '30+',
    rating: '4.9',
    price: '₹10K-18K',
    gradient: 'from-indigo-500 to-purple-500',
    description: 'Mature and understanding',
    badge: 'Trending',
    icon: UserCheck
  },
  {
    title: 'Teen Escorts',
    image: '/images/category/teen-escorts.jpg',
    count: '25+',
    rating: '4.8',
    price: '₹8K-15K',
    gradient: 'from-pink-500 to-purple-600',
    description: 'Young and energetic',
    badge: 'Popular',
    icon: Sparkles
  },
  {
    title: 'Busty Escorts',
    image: '/images/category/busty-escorts.jpg',
    count: '28+',
    rating: '4.7',
    price: '₹12K-20K',
    gradient: 'from-red-500 to-pink-500',
    description: 'Curvy and stunning',
    badge: 'Voluptuous',
    icon: Heart
  },
  {
    title: 'Independent',
    image: '/images/category/independent-escorts.jpg',
    count: '50+',
    rating: '4.8',
    price: '₹10K-20K',
    gradient: 'from-green-500 to-emerald-500',
    description: 'Self-reliant and confident',
    badge: 'Verified',
    icon: Users
  },
  {
    title: 'VIP Escorts',
    image: '/images/category/vip-escorts.jpg',
    count: '20+',
    rating: '5.0',
    price: '₹20K-35K',
    gradient: 'from-amber-500 to-yellow-500',
    description: 'High-quality luxury service',
    badge: 'Elite',
    icon: Crown
  },
  {
    title: 'Model Escorts',
    image: '/images/category/model-escorts.jpg',
    count: '22+',
    rating: '4.9',
    price: '₹15K-25K',
    gradient: 'from-violet-500 to-purple-500',
    description: 'Fashionable and elegant',
    badge: 'Stylish',
    icon: Star
  }
];

export const MobileCategories = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide functionality
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          // Calculate how many cards fit on screen (approximately 1.5 cards on mobile)
          const cardsPerView = 1.5;
          const maxIndex = Math.ceil(categories.length / cardsPerView) - 1;
          const nextIndex = prevIndex + 1;
          return nextIndex > maxIndex ? 0 : nextIndex;
        });
      }, 4000); // Auto-slide every 4 seconds
    };

    const stopAutoSlide = () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
        autoSlideIntervalRef.current = null;
      }
    };

    startAutoSlide();

    // Pause auto-slide on hover/touch
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('mouseenter', stopAutoSlide);
      container.addEventListener('mouseleave', startAutoSlide);
      container.addEventListener('touchstart', stopAutoSlide);
      container.addEventListener('touchend', () => {
        setTimeout(startAutoSlide, 2000); // Resume after 2 seconds
      });
    }

    return () => {
      stopAutoSlide();
      if (container) {
        container.removeEventListener('mouseenter', stopAutoSlide);
        container.removeEventListener('mouseleave', startAutoSlide);
        container.removeEventListener('touchstart', stopAutoSlide);
        container.removeEventListener('touchend', startAutoSlide);
      }
    };
  }, []);

  // Scroll to current index
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 288; // Card width (w-72 = 288px) + gap (24px) = 312px
      const scrollPosition = currentIndex * cardWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

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
    <section 
      className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mobile-categories relative overflow-hidden"
    >

      <div className="px-4 relative z-10">
        {/* Stunning Section Header */}
        <motion.div 
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="h-6 w-6 text-yellow-400 fill-current" />
              </motion.div>
              <h2 className="text-3xl font-black text-white">Premium Categories</h2>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-300 font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Choose your perfect match
            </motion.p>
            </div>
          <motion.button 
            onClick={handleViewAll}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-black border border-white/20 shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255,255,255,0.15)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 300 }}
            viewport={{ once: true }}
          >
            View All
            <motion.div
              animate={{ x: [0, 5] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
            <ChevronRight className="h-4 w-4" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Stunning Glassmorphism Category Cards */}
        <motion.div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="flex-shrink-0 w-72"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group relative"
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Stunning Image Section with 3D Effect */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                      className="object-cover"
                      sizes="288px"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-70`}></div>
                  </motion.div>
                  
                  {/* Floating Count Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 border border-white/30"
                    animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-sm font-black text-white">{category.count}</span>
                  </motion.div>
                  
                  {/* Category Badge with Icon */}
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl rounded-full px-4 py-2 border border-white/30 flex items-center gap-2"
                    animate={hoveredCard === index ? { scale: 1.1, x: -5 } : { scale: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="h-4 w-4 text-white" />
                    <span className="text-sm font-black text-white">{category.badge}</span>
                  </motion.div>
                  
                  {/* Enhanced Rating */}
                  <motion.div 
                    className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 flex items-center gap-2"
                    animate={hoveredCard === index ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white font-black">{category.rating}</span>
                  </motion.div>
                </div>

                {/* Glassmorphism Content */}
                <div className="p-6">
                  <motion.h3 
                    className="font-black text-white mb-3 text-xl"
                    animate={hoveredCard === index ? { color: "#FFD700" } : { color: "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{category.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-gray-400 font-bold">Starting from</span>
                    <motion.span 
                      className="text-xl font-black text-white"
                      animate={hoveredCard === index ? { scale: 1.1, color: "#FFD700" } : { scale: 1, color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.price}
                    </motion.span>
                  </div>
                  
                  <motion.button 
                    onClick={() => handleCategoryClick(category.title)}
                    className="w-full bg-white/10 backdrop-blur-xl text-white py-4 px-6 rounded-2xl text-sm font-black border border-white/20 shadow-lg relative overflow-hidden group/btn"
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    />
                    <div className="relative flex items-center justify-center gap-2">
                      <Eye className="h-5 w-5" />
                    View Profiles
                      <motion.div
                        animate={{ x: [0, 5] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
                </div>
                  </motion.button>
              </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Dots */}
        <motion.div 
          className="flex justify-center gap-3 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-500/50' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div>

        {/* Enhanced Stunning Stats Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          {/* Stats Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              animate={{ rotate: [0, 5] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <Crown className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-black text-white">Our Amazing Stats</h3>
              <Crown className="h-8 w-8 text-yellow-400" />
            </motion.div>
            <p className="text-gray-300 font-bold">Trusted by thousands of satisfied clients</p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { 
                number: "12", 
                label: "Categories", 
                icon: Crown, 
                color: "from-pink-500 to-purple-500",
                bgGradient: "from-pink-500/20 to-purple-500/20",
                borderColor: "border-pink-400/30",
                description: "Premium Types"
              },
              { 
                number: "300+", 
                label: "Total Profiles", 
                icon: Users, 
                color: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/20 to-cyan-500/20",
                borderColor: "border-blue-400/30",
                description: "Verified Girls"
              },
              { 
                number: "4.8", 
                label: "Avg Rating", 
                icon: Star, 
                color: "from-yellow-500 to-orange-500",
                bgGradient: "from-yellow-500/20 to-orange-500/20",
                borderColor: "border-yellow-400/30",
                description: "Client Satisfaction"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className={`relative bg-gradient-to-br ${stat.bgGradient} backdrop-blur-xl rounded-3xl p-6 text-center border-2 ${stat.borderColor} shadow-2xl overflow-hidden`}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
                }}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4 + index * 0.2, 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
                viewport={{ once: true }}
              >
                {/* Animated Background Glow */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-3xl`}
                  animate={{ 
                    scale: [1, 1.1],
                    opacity: [0.1, 0.2]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.5,
                    repeatType: "reverse"
                  }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className={`relative w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360 
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300 
                  }}
                >
                  <stat.icon className="h-6 w-6 text-white" />
                </motion.div>

                {/* Number with Counter Animation */}
                <motion.div 
                  className="relative text-3xl font-black text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  animate={{ 
                    scale: [1, 1.05],
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 20px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1.6 + index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    repeatType: "reverse"
                  }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <motion.div 
                  className="text-sm font-bold text-white mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.8 + index * 0.2 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.label}
                </motion.div>

                {/* Description */}
                <motion.div 
                  className="text-xs text-gray-300 font-medium"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 2.0 + index * 0.2 
                  }}
                  viewport={{ once: true }}
                >
                  {stat.description}
                </motion.div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-60`}
                    style={{
                      left: `${20 + particleIndex * 30}%`,
                      top: `${10 + particleIndex * 20}%`,
                    }}
                    animate={{
                      y: [0, -10],
                      opacity: [0.6, 1],
                      scale: [1, 1.2],
                    }}
                    transition={{
                      duration: 2 + particleIndex * 0.5,
                      repeat: Infinity,
                      delay: particleIndex * 0.3,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </motion.div>
          ))}
        </div>

          {/* Additional Trust Indicators */}
          <motion.div 
            className="mt-8 flex justify-center items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, text: "100% Safe", color: "text-green-400" },
              { icon: Zap, text: "24/7 Available", color: "text-yellow-400" },
              { icon: Heart, text: "Verified Girls", color: "text-pink-400" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <span className={`text-sm font-bold ${item.color}`}>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
