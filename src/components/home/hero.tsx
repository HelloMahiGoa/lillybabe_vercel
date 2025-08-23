import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Star, Users, Clock, Shield, ArrowDown, Sparkles } from 'lucide-react';

const trustIndicators = [
  { icon: Star, value: '13+', label: 'Years Experience', color: 'text-yellow-400' },
  { icon: Users, value: '500+', label: 'Verified Escorts', color: 'text-pink-400' },
  { icon: Clock, value: '24/7', label: 'Available', color: 'text-green-400' },
  { icon: Shield, value: '100%', label: 'Satisfaction', color: 'text-blue-400' },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl opacity-10 animate-bounce">✨</div>
        <div className="absolute top-40 right-20 text-4xl opacity-10 animate-pulse">💎</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-bounce" style={{ animationDelay: '1s' }}>🌟</div>
        <div className="absolute bottom-20 right-10 text-6xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>✨</div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Chennai Escorts Service
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Looking for genuine Chennai Escorts? We're your trusted friends who happen to be amazing companions!
        </p>
        
        <p className="text-base md:text-lg mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto">
          You know what makes our Chennai Escorts Service different? We actually care about making your time special. 
          Whether you're looking for someone to chat with, accompany you to events, or just make your evening amazing - 
          we've got real Chennai Escorts who genuinely want to make you happy. No fake profiles, no pressure, just honest, beautiful companionship.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button variant="primary" size="lg" className="flex items-center gap-2 text-lg px-8 py-4">
            <MessageCircle className="h-5 w-5" />
            Let's Start Chatting!
          </Button>
          <Button variant="secondary_gradient" size="lg" className="flex items-center gap-2 text-lg px-8 py-4">
            <Phone className="h-5 w-5" />
            Today's Profiles
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Icon className="h-6 w-6 text-pink-300" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{indicator.value}</div>
                <div className="text-sm text-gray-300">{indicator.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Trust Badge */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Star className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium">✨ Your Trusted Friends Since 2010 ✨</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};


