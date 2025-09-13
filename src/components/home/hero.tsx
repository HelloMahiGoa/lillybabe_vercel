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
      
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block text-white">Chennai</span>
          <span className="block text-blue-300">ESCORTS</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 leading-relaxed max-w-4xl mx-auto">
          Looking for escorts in Chennai not found on the large portals? Our Chennai escorts agency provides naturally beautiful, exclusive, high-class escorts to professionals and executives.
        </p>
        
        {/* Tagline */}
        <div className="mb-12">
          <button 
            onClick={scrollToProfiles}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg"
          >
            <Star className="h-6 w-6" />
            <span>Today's Available Profiles</span>
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
        
        {/* Service Description */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Chennai Escorts direct to your hotel or home
          </h2>
        </div>
        
        {/* Welcome Message */}
        <div className="mb-16 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Welcome To LillyBabe, Voted Chennai's Best Escort Agency. We are a high class Chennai escort agency that provides escorts to your hotel room or home 24 hours a day, 7 days a week. Whether you are in Chennai for business or pleasure, LillyBabe will provide you with the perfect escort for any occasion. All of our escorts are beautiful, charming and intelligent, ensuring that your time in Chennai is unforgettable.
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={openWhatsApp}
            className="flex items-center gap-3 text-lg px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp +91 8121426651
          </button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Star className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white">13+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Users className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white">500+</div>
            <div className="text-sm text-gray-300">Verified Escorts</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Clock className="h-8 w-8 text-green-400" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white">24/7</div>
            <div className="text-sm text-gray-300">Available</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-colors shadow-md">
                <Shield className="h-8 w-8 text-indigo-400" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2 text-white">100%</div>
            <div className="text-sm text-gray-300">Satisfaction</div>
          </div>
        </div>
        
        {/* Trust Badge */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-3 bg-yellow-100/90 backdrop-blur-sm border border-yellow-200 text-yellow-800 px-6 py-3 rounded-full font-semibold shadow-md">
            <Star className="h-5 w-5 fill-yellow-400" />
            <span>Voted Best Escort Agency 2024</span>
            <Star className="h-5 w-5 fill-yellow-400" />
          </div>
        </div>
      </div>
    </section>
  );
};


