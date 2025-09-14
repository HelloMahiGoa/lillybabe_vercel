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
        className="bg-white rounded-3xl p-8 mb-12 border border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Chennai Escorts - <span className="text-pink-600">Real Call Girls</span> & <span className="text-purple-600">Independent Escorts</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{profileCount}+ Real Girls</h3>
            <p className="text-gray-600 text-sm">Every single one verified by us personally</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Everywhere in Chennai</h3>
            <p className="text-gray-600 text-sm">From Anna Nagar to Mahabalipuram</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Always There</h3>
            <p className="text-gray-600 text-sm">Day or night, we've got you</p>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Hey there! Looking for amazing <span className="text-pink-600 font-semibold">Chennai escorts</span>? You've come to the right place! 
            We've got over {profileCount}+ beautiful, verified girls who are not just pretty faces - they're real people with real personalities. 
            Whether you're in Anna Nagar, T. Nagar, OMR, ECR, or anywhere else in Chennai, we've got you covered.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            What makes us different? Well, we actually know our girls personally. No fake profiles, no old photos, 
            no BS. We've got everything from <span className="text-purple-600 font-semibold">independent escorts</span> who love their freedom to stunning&nbsp;
            <span className="text-blue-600 font-semibold">Russian escorts</span>, gorgeous <span className="text-yellow-600 font-semibold">model escorts</span>, 
            high-class <span className="text-pink-600 font-semibold">celebrity escorts</span>, and warm <span className="text-green-600 font-semibold">housewife escorts</span> - 
            all across Chennai.
          </p>
          
          <p className="text-gray-700 mb-6 leading-relaxed text-lg">
            Need someone to come to your place or want to visit theirs? No problem! We respect your privacy completely - 
            what happens stays between you and your chosen companion. Just give us a call or WhatsApp, and we'll have 
            someone perfect for you in no time.
          </p>
        </div>
      </motion.div>

      {/* Location-based Content */}
      <motion.div
        className="bg-white rounded-3xl p-8 mb-12 border border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
            <MapPin className="h-8 w-8 text-purple-600" />
            Chennai Escorts by Location
          </h3>
          <p className="text-gray-600 text-lg">Pick your spot - we're everywhere in Chennai!</p>
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
              <h4 className="text-gray-900 font-bold mb-2 text-sm md:text-lg break-words">{location} Escorts</h4>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <p className="text-gray-700 leading-relaxed text-lg text-center">
            No matter where you are in Chennai, we've got amazing girls nearby! Whether you're looking for 
            <span className="text-pink-600 font-semibold">Anna Nagar escorts</span> for a classy night out, 
            <span className="text-purple-600 font-semibold">T. Nagar call girls</span> for shopping fun, 
            <span className="text-blue-600 font-semibold">OMR escorts</span> for business meetings, 
            <span className="text-green-600 font-semibold">ECR escorts</span> for beach vibes, or anywhere else - 
            we know the area and have the perfect girl for you. Every single one is verified and real!
          </p>
        </div>
      </motion.div>

      {/* Category-based Content */}
      <motion.div
        className="bg-white rounded-3xl p-8 mb-12 border border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-purple-600" />
            Chennai Escorts by Category
          </h3>
          <p className="text-gray-600 text-lg">Something for everyone - find your perfect type!</p>
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
              <h4 className="text-gray-900 font-bold text-xl mb-3 text-center">{category} Chennai</h4>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Looking for {category.toLowerCase()} in Chennai? We've got the best! Real girls, 
                real photos, and real reviews from guys just like you. Available anytime you need them.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features & Benefits */}
      <motion.div
        className="bg-white rounded-3xl p-8 mb-12 border border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Shield className="h-8 w-8 text-purple-600" />
            Why Choose Our Chennai Escorts
          </h3>
          <p className="text-gray-600 text-lg">Here's why guys keep coming back to us</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-pink-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-gray-900 font-bold text-xl mb-3">No Fake Profiles</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Every girl is real - we've met them personally and checked their photos</p>
          </motion.div>
          
          <motion.div
            className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-pink-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-gray-900 font-bold text-xl mb-3">Always Available</h4>
            <p className="text-gray-600 text-sm leading-relaxed">Whether it's 2 AM or 2 PM, we've got someone ready for you</p>
          </motion.div>
          
          <motion.div
            className="text-center bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-pink-200 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-gray-900 font-bold text-xl mb-3">Your Business is Your Business</h4>
            <p className="text-gray-600 text-sm leading-relaxed">We don't talk, we don't judge - what happens stays between you two</p>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Questions? We've Got Answers</h3>
          <p className="text-gray-600 text-lg">The stuff guys usually ask us</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-900 font-bold text-lg mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Are these girls actually real?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely! We don't mess around with fake profiles. Every single girl on our site is real - 
                we've met them, talked to them, and verified their photos. No surprises, no disappointments.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-900 font-bold text-lg mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                Do you cover my area?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pretty much everywhere in Chennai! Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, 
                Adyar, Mahabalipuram, Velachery, Tambaram, Chrompet - you name it, we're there.
              </p>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-900 font-bold text-lg mb-3 flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-600" />
                How do I actually book someone?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Super easy! Just give us a call or hit us up on WhatsApp. Tell us what you're looking for, 
                and we'll find you the perfect match. No forms, no hassle - just straight talk.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gray-900 font-bold text-lg mb-3 flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Can they come to my place?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Of course! Most of our girls do both - they can come to you or you can visit them. 
                Whatever makes you comfortable, we'll make it happen.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
