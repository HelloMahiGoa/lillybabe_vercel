import { Heart, Users, Crown, Shield, Clock, Star, Sparkles, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Crown,
    title: 'VIP Escorts',
    description: 'Premium companions for high-profile events and special occasions.',
    features: ['Luxury transportation', 'Professional etiquette', 'Discrete service'],
    gradient: 'from-yellow-400 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50'
  },
  {
    icon: Users,
    title: 'Corporate Escorts',
    description: 'Sophisticated companions for business events and corporate functions.',
    features: ['Business attire', 'Professional conversation', 'Event coordination'],
    gradient: 'from-blue-500 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50'
  },
  {
    icon: Heart,
    title: 'Independent Escorts',
    description: 'Personal companions for intimate and private experiences.',
    features: ['Personal attention', 'Flexible arrangements', 'Genuine care'],
    gradient: 'from-pink-500 to-red-500',
    bgGradient: 'from-pink-50 to-red-50'
  }
];

const highlights = [
  {
    icon: Shield,
    title: '100% Safe & Secure',
    description: 'All our escorts are verified and background checked for your safety.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'We\'re available round the clock to serve your needs anytime.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Only the best escorts are selected to join our exclusive service.',
    gradient: 'from-yellow-500 to-orange-600'
  }
];

export const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a variety of escort services to meet your specific needs and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${service.bgGradient} rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              We're Not Just Another Agency - We're Your Friends!
            </h2>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto">
              Since 2010, we've been building genuine relationships with our clients. 
              We understand that you're not just looking for a service - you're looking for someone who cares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-pink-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-300">{highlight.description}</p>
                </div>
              );
            })}
          </div>

          {/* Story Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Story</h3>
            <p className="text-gray-200 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              "We started LillyBabe in 2010 with a simple mission: to provide genuine, caring companionship 
              to people who need it most. We're not just another escort agency - we're a family that genuinely 
              cares about making your time special. Every escort in our network is personally selected and 
              trained to provide not just physical companionship, but emotional support and genuine care. 
              We believe that everyone deserves to feel valued, respected, and cared for."
            </p>
            <div className="text-center mt-6">
              <Button variant="primary" size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
