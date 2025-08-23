import { Star, Shield, Clock, Users, Heart, Check, Award, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const benefits = [
  {
    icon: Shield,
    title: '100% Safe & Secure',
    description: 'All our escorts are personally verified and background checked for your complete safety and satisfaction.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Whether it\'s 2 AM or 2 PM, we\'re just a call away. Life doesn\'t follow a schedule, and neither do we!'
  },
  {
    icon: Heart,
    title: 'Genuine Care',
    description: 'We don\'t just say we\'re the best - our happy clients tell everyone about us. That\'s the kind of quality we\'re proud of!'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest escorts with exceptional service quality and professional standards.'
  },
  {
    icon: Users,
    title: 'Verified Profiles',
    description: 'Every escort is personally verified with real photos and authentic information.'
  },
  {
    icon: Star,
    title: '5-Star Service',
    description: 'Consistently rated 5 stars by our satisfied clients across Chennai.'
  }
];

const promises = [
  'NO BULLSHIT - Only Real Chennai Escort Girls',
  'NO ADVANCE PAYMENT - Pay After Meeting',
  'NO ADVANCE BOOKING - Instant Chennai Escorts',
  'NO FAKE PHOTOS - 100% Real Chennai Escorts',
  'NO HIDDEN CHARGES - Transparent Pricing',
  'NO PRESSURE - Relaxed and Comfortable Experience'
];

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Verified Escorts' },
  { value: '4.9', label: 'Client Rating' },
  { value: '16', label: 'Service Areas' }
];

export const WhyChooseLillyBabe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose LillyBabe Chennai Escorts?
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

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                LillyBabe is the most trusted and reputed escort agency in Chennai
              </h3>
              <p className="text-lg text-gray-200 max-w-4xl mx-auto">
                We only take payment once your chosen <strong>Chennai Escort Girl</strong> reaches your hotel room! 
                All we need from you is a screenshot of your hotel confirmation, a picture of your room key, 
                your room number, and the name you used for the hotel booking - then we'll send your perfect companion right to you!
              </p>
            </div>
          </div>
        </div>

        {/* Promise Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-12 text-white mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Promise to You for Chennai Escorts Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-pink-600" />
                </div>
                <span className="text-lg">{promise}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Description */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">
              The LillyBabe Difference
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-5xl mx-auto text-center">
              When you're looking for amazing <strong>Chennai Escort Girls</strong> who are real, beautiful, and super friendly, 
              you'll find many websites out there. But here's the thing - many escort agencies are actually fake and they'll ask 
              you to pay before you even meet anyone! That's why <strong>LillyBabe offers the most professional Chennai Escorts Service</strong>! 
              We make it super easy for you to choose and book your perfect <strong>Chennai Escort</strong> anywhere in Chennai for both 
              incall and outcall services. Our high-quality independent <strong>Chennai Escorts</strong> make it incredibly easy to get 
              the most exclusive entertainment and satisfaction from our elite escort agency!
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our team is available round the clock to assist you with any queries or bookings.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">All Areas Covered</h3>
            <p className="text-gray-600">
              We provide services across all major areas of Chennai with quick response times.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Discreet</h3>
            <p className="text-gray-600">
              Your privacy and confidentiality are our top priorities. Complete discretion guaranteed.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ✨ We're So Confident - Try Our Chennai Escorts Service FREE if You're Not Happy! ✨
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            You absolutely deserve the best Chennai Escorts - and that's exactly what we're offering! 🌟
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Experience the Magic
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
