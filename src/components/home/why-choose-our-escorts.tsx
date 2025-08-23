import { Star, Shield, Clock, Users, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { value: '10+', label: 'Years of Chennai Escorts' },
  { value: '5.0', label: 'Premium Chennai Escorts Rating' },
  { value: '500+', label: 'Chennai Escort Girls' },
  { value: '24/7', label: 'Chennai Escorts Service' }
];

const promises = [
  'NO BULLSHIT - Only Real Chennai Escort Girls',
  'NO ADVANCE PAYMENT - Pay After Meeting',
  'NO ADVANCE BOOKING - Instant Chennai Escorts',
  'NO FAKE PHOTOS - 100% Real Chennai Escorts'
];

export const WhyChooseOurEscorts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why You Choose Our Chennai Escorts?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're so proud to tell you that we've been providing amazing <strong>Chennai Escorts Service</strong> for over 10+ years! 
            Experience, experience, and more experience - that's what makes us the kings of this field! 
            You can absolutely trust our <strong>Chennai Escort Girls</strong> and our services!
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Description */}
        <div className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto text-center">
            When you're looking for amazing <strong>Chennai Escort Girls</strong> who are real, beautiful, and super friendly, 
            you'll find many websites out there. But here's the thing - many escort agencies are actually fake and they'll ask 
            you to pay before you even meet anyone! That's why <strong>LillyBabe offers the most professional Chennai Escorts Service</strong>! 
            We make it super easy for you to choose and book your perfect <strong>Chennai Escort</strong> anywhere in Chennai for both 
            incall and outcall services. Our high-quality independent <strong>Chennai Escorts</strong> make it incredibly easy to get 
            the most exclusive entertainment and satisfaction from our elite escort agency!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Safe & Secure</h3>
            <p className="text-gray-600">
              All our escorts are personally verified and background checked for your complete safety and satisfaction.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p className="text-gray-600">
              Whether it's 2 AM or 2 PM, we're just a call away. Life doesn't follow a schedule, and neither do we!
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Genuine Care</h3>
            <p className="text-gray-600">
              We don't just say we're the best - our happy clients tell everyone about us. That's the kind of quality we're proud of!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
