import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Star, Users, Clock, Shield, ArrowDown, Sparkles, Heart, Zap, Award } from 'lucide-react';

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
    <div className="relative min-h-screen p-1 bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-500 animate-gradient-shift">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/hero-bg.webp)',
          }}
        />
        {/* Parallax overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/50 to-indigo-900/70"></div>
      </div>
      
      {/* Enhanced Visual Overlay */}
      <div className="absolute inset-0">
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating hearts with gradient effects */}
          <div className="absolute top-20 left-10 w-6 h-6 text-pink-400/30 animate-pulse">
            <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))'}} />
          </div>
          <div className="absolute top-32 right-16 w-4 h-4 text-pink-400/20 animate-bounce delay-1000">
            <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.4))'}} />
          </div>
          <div className="absolute bottom-32 left-20 w-5 h-5 text-pink-400/25 animate-pulse delay-2000">
            <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 7px rgba(236, 72, 153, 0.4))'}} />
          </div>
          
          {/* Floating stars with gradient effects */}
          <div className="absolute top-40 left-1/4 w-3 h-3 text-yellow-400/40 animate-ping">
            <Star className="w-full h-full fill-current drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6))'}} />
          </div>
          <div className="absolute bottom-40 right-1/4 w-4 h-4 text-yellow-400/30 animate-pulse delay-1500">
            <Star className="w-full h-full fill-current drop-shadow-lg" style={{filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))'}} />
          </div>
          
          {/* Floating sparkles with gradient effects */}
          <div className="absolute top-60 right-10 w-2 h-2 text-blue-400/50 animate-bounce delay-500">
            <Sparkles className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.6))'}} />
          </div>
          <div className="absolute bottom-60 left-10 w-3 h-3 text-indigo-400/40 animate-pulse delay-3000">
            <Sparkles className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 7px rgba(99, 102, 241, 0.5))'}} />
          </div>
          
          {/* Additional gradient floating elements */}
          <div className="absolute top-1/3 right-1/3 w-2 h-2 text-cyan-400/40 animate-ping delay-700">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 text-purple-400/30 animate-bounce delay-1200">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
          </div>
        </div>
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-indigo-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Animated geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/15 to-indigo-200/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-200/15 to-purple-200/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-slate-200/15 to-blue-200/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-200/15 to-slate-200/15 rounded-full blur-2xl animate-pulse delay-1500"></div>
        </div>
        
        {/* Enhanced mesh pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.08) 50%, transparent 70%),
              linear-gradient(-45deg, transparent 30%, rgba(99, 102, 241, 0.08) 50%, transparent 70%),
              radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '150px 150px, 200px 200px, 300px 300px, 250px 250px',
          }}></div>
        </div>
      </div>
      
      <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Inner gradient border for content area */}
        <div className="absolute inset-0 -m-4 p-1 rounded-2xl opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 via-indigo-500/30 to-cyan-500/30 rounded-2xl animate-gradient-shift"></div>
        </div>
        {/* Main Heading with enhanced styling */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="block text-white drop-shadow-2xl animate-fade-in">Chennai</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 drop-shadow-2xl animate-fade-in-delay">
              ESCORTS
            </span>
          </h1>
          {/* Decorative line */}
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Subtitle with enhanced styling */}
        <div className="mb-6 sm:mb-8 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed drop-shadow-lg">
            Tired of the same old fake profiles on big sites? We've got something different - real, gorgeous girls who actually show up and know how to have a good time. No BS, just genuine connections.
          </p>
          {/* Highlighted text */}
          <div className="mt-4 flex justify-center">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 text-pink-200 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4 text-yellow-400" />
              Premium Quality Service
            </span>
          </div>
        </div>
        
        {/* Enhanced CTA Button */}
        <div className="mb-8 sm:mb-12">
          <button 
            onClick={scrollToProfiles}
            className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-500 transform hover:scale-110 cursor-pointer shadow-2xl min-h-[44px] relative overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Star className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:animate-spin" />
            <span className="hidden sm:inline relative z-10">Available Right Now</span>
            <span className="sm:hidden relative z-10">View Profiles</span>
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 animate-bounce relative z-10" />
          </button>
        </div>
        
        {/* Enhanced Service Description */}
        <div className="mb-12 sm:mb-16">
          <div className="relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white px-4 drop-shadow-lg">
              Chennai Escorts direct to your hotel or home
            </h2>
            {/* Decorative elements */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
          </div>
        </div>
        
        {/* Enhanced Welcome Message */}
        <div className="mb-12 sm:mb-16 max-w-4xl mx-auto px-4">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
              You've found LillyBabe - the place where guys actually get what they pay for. We've been doing this for years, and here's the thing - we know our girls personally. No fake photos, no surprises. You are here on business or you are new to the city and could use some company, either way, we have fantastic girls meet day or night. They are not mere pretty faces, but real people with real personalities.
            </p>
            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-blue-400/50 rounded-tl-lg"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-indigo-400/50 rounded-tr-lg"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-400/50 rounded-bl-lg"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-pink-400/50 rounded-br-lg"></div>
          </div>
        </div>
        
        {/* Enhanced WhatsApp CTA Button */}
        <div className="flex justify-center mb-12 sm:mb-16 px-4">
          <button 
            onClick={openWhatsApp}
            className="group flex items-center gap-2 sm:gap-3 text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-500 transform hover:scale-110 shadow-2xl min-h-[44px] relative overflow-hidden"
          >
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:animate-pulse" />
            <span className="hidden sm:inline relative z-10">WhatsApp +91 8121426651</span>
            <span className="sm:hidden relative z-10">WhatsApp</span>
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></div>
          </button>
        </div>
        
        {/* Enhanced Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="relative p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-yellow-400 group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white drop-shadow-lg">13+</div>
            <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="relative p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Users className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-blue-400 group-hover:animate-bounce" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white drop-shadow-lg">500+</div>
            <div className="text-xs sm:text-sm text-gray-300">Verified Escorts</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="relative p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-400 group-hover:animate-spin" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400/20 to-emerald-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white drop-shadow-lg">24/7</div>
            <div className="text-xs sm:text-sm text-gray-300">Available</div>
          </div>
          
          <div className="text-center group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="relative p-3 sm:p-4 bg-white/20 backdrop-blur-sm rounded-full group-hover:bg-white/30 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-indigo-400 group-hover:animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              </div>
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white drop-shadow-lg">100%</div>
            <div className="text-xs sm:text-sm text-gray-300">Satisfaction</div>
          </div>
        </div>
        
        {/* Enhanced Trust Badge */}
        <div className="mt-8 sm:mt-12 px-4">
          <div className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-yellow-100/95 via-amber-100/95 to-yellow-100/95 backdrop-blur-sm border border-yellow-200/50 text-yellow-800 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-xl text-sm sm:text-base relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-amber-200/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Award className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 relative z-10 group-hover:animate-bounce" />
            <span className="hidden sm:inline relative z-10">Voted Best Escort Agency 2025</span>
            <span className="sm:hidden relative z-10">Best Agency 2025</span>
            <Star className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 relative z-10 group-hover:animate-pulse" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};


