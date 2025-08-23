import { Shield, Clock, Star, Users, MapPin, Check } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: '100% Verified',
    description: 'All escorts are personally verified and background checked'
  },
  {
    icon: Clock,
    title: 'Instant Booking',
    description: 'No advance payment, pay only after meeting'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Only the finest escorts with exceptional service'
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Round the clock customer support available'
  },
  {
    icon: MapPin,
    title: 'All Areas Covered',
    description: 'Services available across all major areas of Chennai'
  },
  {
    icon: Check,
    title: 'Safe & Discreet',
    description: 'Complete privacy and confidentiality guaranteed'
  }
];

export const MobileFeatures = () => {
  return (
    <section className="py-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 mobile-features">
      <div className="px-4">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Why Choose LillyBabe?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">The most trusted escort service in Chennai</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-700 mobile-feature-card">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-3 mobile-feature-icon">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 mobile-feature-title">{feature.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mobile-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl p-6 text-white mobile-trust-section">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-3 mobile-trust-title">Trusted by 10,000+ Clients</h3>
            <p className="text-sm text-pink-200 dark:text-gray-300 mb-4 mobile-trust-description">
              Join thousands of satisfied customers who trust LillyBabe for their escort needs
            </p>
            <div className="flex items-center justify-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-xl font-bold mobile-trust-stat">4.9</div>
                <div className="text-pink-200 dark:text-gray-400 mobile-trust-label">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mobile-trust-stat">500+</div>
                <div className="text-pink-200 dark:text-gray-400 mobile-trust-label">Escorts</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold mobile-trust-stat">24/7</div>
                <div className="text-pink-200 dark:text-gray-400 mobile-trust-label">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
