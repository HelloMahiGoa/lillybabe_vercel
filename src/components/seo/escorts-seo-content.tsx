'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Shield, Clock, Users, Heart } from 'lucide-react';

interface EscortsSEOContentProps {
  profileCount: number;
}

export const EscortsSEOContent = ({ profileCount }: EscortsSEOContentProps) => {
  const locations = [
    'Anna Nagar', 'T. Nagar', 'OMR', 'ECR', 'Nungambakkam', 
    'Adyar', 'Mahabalipuram', 'Velachery', 'Tambaram', 'Chrompet'
  ];

  const categories = [
    'Independent Escorts', 'Russian Escorts', 'Model Escorts', 
    'Celebrity Escorts', 'Housewife Escorts', 'Teen Escorts'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Main SEO Content */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Chennai Escorts - <span className="text-pink-400">Verified Call Girls</span> & <span className="text-purple-400">Independent Escorts</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{profileCount}+ Verified Escorts</h3>
            <p className="text-gray-300 text-sm">All profiles verified with genuine photos</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">All Chennai Areas</h3>
            <p className="text-gray-300 text-sm">Available in every major location</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">24/7 Service</h3>
            <p className="text-gray-300 text-sm">Round the clock availability</p>
          </div>
        </div>
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            LillyBabe offers genuine <span className="text-pink-400 font-semibold">Chennai escorts</span> and call girls with verified profiles, real photos, 
            and authentic client reviews. Our {profileCount}+ verified escorts are available 24/7 across 
            all major Chennai locations including Anna Nagar, T. Nagar, OMR, ECR, and more.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Each Chennai escort in our collection is carefully verified with genuine photos, authentic 
            reviews, and real client testimonials. We specialize in <span className="text-purple-400 font-semibold">Independent escorts</span>, <span className="text-blue-400 font-semibold">Russian escorts</span>, 
            <span className="text-yellow-400 font-semibold">Model escorts</span>, <span className="text-pink-400 font-semibold">Celebrity escorts</span>, and <span className="text-green-400 font-semibold">Housewife escorts</span> across Chennai.
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            All our Chennai call girls are available for incall and outcall services with complete 
            privacy and discretion. Book your favorite Chennai escort through WhatsApp or direct call 
            for immediate availability.
          </p>
        </div>
      </motion.div>

      {/* Location-based Content */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-purple-400" />
            Chennai Escorts by Location
          </h3>
          <p className="text-gray-300 text-lg">Find escorts in your preferred area</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-8">
          {locations.map((location, index) => (
            <motion.div
              key={location}
              className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-2xl p-4 md:p-6 text-center border border-purple-400/40 hover:border-purple-400/60 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <h4 className="text-white font-bold mb-2 text-sm md:text-lg break-words">{location} Escorts</h4>
              <p className="text-gray-300 text-xs md:text-sm">Verified profiles available</p>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <p className="text-gray-300 leading-relaxed text-lg text-center">
            Our Chennai escorts are available in all major areas including <span className="text-pink-400 font-semibold">Anna Nagar escorts</span>, <span className="text-purple-400 font-semibold">T. Nagar call girls</span>, 
            <span className="text-blue-400 font-semibold">OMR escorts</span>, <span className="text-green-400 font-semibold">ECR escorts</span>, <span className="text-yellow-400 font-semibold">Nungambakkam escorts</span>, <span className="text-indigo-400 font-semibold">Adyar escorts</span>, and <span className="text-teal-400 font-semibold">Mahabalipuram escorts</span>. Each location 
            has verified escorts with genuine photos and authentic reviews from real clients.
          </p>
        </div>
      </motion.div>

      {/* Category-based Content */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-purple-400" />
            Chennai Escorts by Category
          </h3>
          <p className="text-gray-300 text-lg">Choose from our diverse range of escort categories</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-2xl p-6 border border-pink-400/40 hover:border-pink-400/60 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-white font-bold text-xl mb-3 text-center">{category} Chennai</h4>
              <p className="text-gray-300 text-sm leading-relaxed text-center">
                Genuine {category.toLowerCase()} in Chennai with verified profiles, real photos, 
                and authentic client reviews. Available 24/7 for incall and outcall services.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features & Benefits */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-3">
            <Shield className="h-8 w-8 text-purple-400" />
            Why Choose Our Chennai Escorts
          </h3>
          <p className="text-gray-300 text-lg">Experience the difference with our premium service</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-bold text-xl mb-3">Verified Profiles</h4>
            <p className="text-gray-300 text-sm leading-relaxed">All Chennai escorts are verified with genuine photos and authentic reviews</p>
          </motion.div>
          
          <motion.div
            className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-bold text-xl mb-3">24/7 Availability</h4>
            <p className="text-gray-300 text-sm leading-relaxed">Chennai escorts available round the clock for immediate booking</p>
          </motion.div>
          
          <motion.div
            className="text-center bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-white font-bold text-xl mb-3">Complete Privacy</h4>
            <p className="text-gray-300 text-sm leading-relaxed">All services provided with complete discretion and privacy</p>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-300 text-lg">Get answers to common questions about our services</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-400" />
                Are the Chennai escorts verified?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Yes, all our Chennai escorts are verified with genuine photos, authentic reviews, and real client testimonials. 
                We ensure every profile is legitimate and trustworthy.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                What areas in Chennai do you serve?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We serve all major areas in Chennai including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, 
                Adyar, Mahabalipuram, Velachery, Tambaram, and Chrompet.
              </p>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-400" />
                How can I book a Chennai escort?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                You can book by calling our number or using WhatsApp. All bookings are handled with complete 
                privacy and discretion. Immediate availability for verified Chennai escorts.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-400" />
                Do you offer incall and outcall services?
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Yes, our Chennai escorts are available for both incall and outcall services. You can choose 
                the service that suits your preference and location.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
