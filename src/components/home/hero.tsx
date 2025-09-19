import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Star, Users, Clock, Shield, ArrowDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  const scrollToProfiles = () => {
    const profilesSection = document.querySelector('#profiles-section');
    if (profilesSection) {
      profilesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '+918121426651';
    const message = 'Hi, I would like to book an escort. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/lillybabe-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Professional Background Overlay */}
      <div className="absolute inset-0">
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-900/40 to-indigo-900/60"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)
            `,
          }}></div>
        </div>
        
        {/* Subtle geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-200/20 to-purple-200/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-slate-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-200/20 to-slate-200/20 rounded-full blur-2xl"></div>
        </div>
        
        {/* Professional mesh pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.05) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)
            `,
            backgroundSize: '150px 150px, 200px 200px',
          }}></div>
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 leading-tight">
          <span className="block text-white">Chennai</span>
          <span className="block text-blue-300">ESCORTS</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Tired of the same old fake profiles on big sites? We've got something different - real, gorgeous girls who actually show up and know how to have a good time. No BS, just genuine connections.
        </p>
        
        {/* Tagline */}
        <div className="mb-8 sm:mb-12">
          <button 
            onClick={scrollToProfiles}
            className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg min-h-[44px]"
          >
            <Star className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hidden sm:inline">Available Right Now</span>
            <span className="sm:hidden">View Profiles</span>
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce" />
          </button>
        </div>
        
        {/* Service Description */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white px-4">
            Chennai Escorts direct to your hotel or home
          </h2>
        </div>
        
        {/* Welcome Message */}
        <div className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed">
            You've found LillyBabe - the place where guys actually get what they pay for. We've been doing this for years, and here's the thing - we know our girls personally. No fake photos, no surprises. You are here on business or you are new to the city and could use some company, either way, we have fantastic girls meet day or night. They are not mere pretty faces, but real people with real personalities.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <button 
            onClick={openWhatsApp}
            className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg min-h-[44px]"
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="hidden sm:inline">WhatsApp +91 8121426651</span>
            <span className="sm:hidden">WhatsApp</span>
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">13+</div>
            <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-400" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">500+</div>
            <div className="text-xs sm:text-sm text-gray-300">Verified Escorts</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">24/7</div>
            <div className="text-xs sm:text-sm text-gray-300">Available</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-indigo-400" />
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">100%</div>
            <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="mt-8 sm:mt-12 px-4">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-yellow-100/90 backdrop-blur-sm border border-yellow-200 text-yellow-800 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold shadow-md text-sm sm:text-base">
            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400" />
            <span className="hidden sm:inline">Voted Best Escort Agency 2025</span>
            <span className="sm:hidden">Best Agency 2025</span>
            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};


