import { Star, Heart, MapPin, MessageCircle, Eye, Crown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Profile } from '@/types';

interface MobileProfilesProps {
  profiles: Profile[];
  loading?: boolean;
}

export const MobileProfiles = ({ profiles, loading = false }: MobileProfilesProps) => {
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

  const handleWhatsAppClick = (profileName: string) => {
    const message = `Hi, I am interested in ${profileName}'s services. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/918121426651?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+918121426651', '_self');
  };

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full mx-auto mb-6 flex items-center justify-center border border-white/20 shadow-2xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Heart className="w-10 h-10 text-pink-400" />
          </motion.div>
          <h3 className="text-2xl font-black text-white mb-3">Loading Profiles...</h3>
          <p className="text-gray-300">Please wait while we fetch today's available profiles</p>
        </motion.div>
      </section>
    );
  }

  if (profiles.length === 0) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full mx-auto mb-6 flex items-center justify-center border border-white/20 shadow-2xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-10 h-10 text-pink-400" />
          </motion.div>
          <h3 className="text-2xl font-black text-white mb-3">No Profiles Available</h3>
          <p className="text-gray-300">Check back later for new profiles</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section 
      className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mobile-profiles relative overflow-hidden"
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
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="h-6 w-6 text-yellow-400 fill-current" />
              </motion.div>
              <h2 className="text-3xl font-black text-white">Available Profiles</h2>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-300 font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Handpicked escorts in Chennai
            </motion.p>
          </div>
          <motion.div 
            className="flex items-center gap-2 bg-white/10 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-white font-black">{profiles.length} profiles</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stunning Profiles Grid */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {profiles.map((profile, index) => (
              <motion.div 
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProfile(index)}
                onHoverEnd={() => setHoveredProfile(null)}
              >
                <motion.div 
                  className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group relative"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Stunning Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      className="relative w-full h-full"
                      animate={hoveredProfile === index ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
              <Image
                src={profile.photo_url || '/images/independent-1.jpg'}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/independent-1.jpg';
                }}
              />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </motion.div>
                    
                    {/* Floating Heart Button */}
                    <motion.button 
                      className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </motion.button>
                    
                    {/* Rating Badge */}
                    <motion.div 
                      className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-xl rounded-full px-4 py-2 border border-white/20 flex items-center gap-2"
                      animate={hoveredProfile === index ? { scale: 1.1, y: -5 } : { scale: 1, y: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-white font-black">{profile.rating}</span>
                    </motion.div>
                    
                    {/* Category Badge */}
                    <motion.div 
                      className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-black shadow-lg"
                      animate={hoveredProfile === index ? { scale: 1.1, x: -5 } : { scale: 1, x: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                  {profile.category}
                    </motion.div>
            </div>

                  {/* Glassmorphism Profile Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                <div>
                        <motion.h3 
                          className="font-black text-white text-xl mb-2"
                          animate={hoveredProfile === index ? { color: "#FFD700" } : { color: "#FFFFFF" }}
                          transition={{ duration: 0.3 }}
                        >
                          {profile.name}
                        </motion.h3>
                        <div className="flex items-center gap-3 text-sm text-gray-300">
                          <span className="font-bold">{profile.age} years</span>
                    <span>•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                  </div>
                </div>
                      <motion.div 
                        className="text-right"
                        animate={hoveredProfile === index ? { scale: 1.05 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-sm text-gray-400 font-bold">Nearby</div>
                        <div className="text-xs text-green-400 font-black">Available</div>
                      </motion.div>
              </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(profile.pricing).map(([service, price], priceIndex) => (
                        <motion.div 
                          key={service} 
                          className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 text-center border border-white/20"
                          animate={hoveredProfile === index ? { scale: 1.02 } : { scale: 1 }}
                          transition={{ duration: 0.3, delay: priceIndex * 0.1 }}
                        >
                          <div className="text-xs text-gray-400 font-bold mb-1">{service}</div>
                          <div className="font-black text-white text-lg">{price}</div>
                        </motion.div>
                ))}
              </div>

              {/* Additional Info */}
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
                      <span className="font-bold">{profile.views_count || 0} views</span>
                      <span className="font-bold">{profile.reviews_count || 0} reviews</span>
                      <span className="text-green-400 font-black">Verified</span>
              </div>

                    {/* Stunning Action Buttons */}
                    <div className="flex gap-3">
                <Link href={`/escorts/${profile.slug}`} className="flex-1">
                        <motion.button
                          className="w-full bg-white/10 backdrop-blur-xl text-white py-4 px-6 rounded-2xl text-sm font-black border border-white/20 shadow-lg relative overflow-hidden group/btn"
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: "rgba(255,255,255,0.15)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                          />
                          <div className="relative flex items-center justify-center gap-2">
                            <Eye className="h-5 w-5" />
                    View Profile
                          </div>
                        </motion.button>
                </Link>
                      <motion.button
                  onClick={() => handleWhatsAppClick(profile.name)}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-2xl text-sm font-black shadow-lg relative overflow-hidden group/btn"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                        />
                        <div className="relative flex items-center justify-center gap-2">
                          <MessageCircle className="h-5 w-5" />
                  WhatsApp
              </div>
                      </motion.button>
            </div>
          </div>
                </motion.div>
              </motion.div>
        ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
