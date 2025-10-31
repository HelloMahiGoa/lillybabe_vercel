import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Star, Users, Clock, Shield, ArrowDown, Sparkles, Heart, Zap, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroProps {
  totalProfiles?: number;
}

export const Hero = ({ totalProfiles = 0 }: HeroProps) => {
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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
    <div className="relative min-h-screen bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-500">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-8">
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
        <div className="absolute inset-0 hidden md:block">
          {/* Static elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Static hearts */}
            <div className="absolute top-20 left-10 w-6 h-6 text-pink-400/30">
              <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.5))'}} />
            </div>
            <div className="absolute top-32 right-16 w-4 h-4 text-pink-400/20">
              <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.4))'}} />
            </div>
            <div className="absolute bottom-32 left-20 w-5 h-5 text-pink-400/25">
              <Heart className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 7px rgba(236, 72, 153, 0.4))'}} />
            </div>
            
            {/* Static stars */}
            <div className="absolute top-40 left-1/4 w-3 h-3 text-yellow-400/40">
              <Star className="w-full h-full fill-current drop-shadow-lg" style={{filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6))'}} />
            </div>
            <div className="absolute bottom-40 right-1/4 w-4 h-4 text-yellow-400/30">
              <Star className="w-full h-full fill-current drop-shadow-lg" style={{filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.5))'}} />
            </div>
            
            {/* Static sparkles */}
            <div className="absolute top-60 right-10 w-2 h-2 text-blue-400/50">
              <Sparkles className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.6))'}} />
            </div>
            <div className="absolute bottom-60 left-10 w-3 h-3 text-indigo-400/40">
              <Sparkles className="w-full h-full drop-shadow-lg" style={{filter: 'drop-shadow(0 0 7px rgba(99, 102, 241, 0.5))'}} />
            </div>
          </div>
          
          {/* Static geometric elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-200/15 to-indigo-200/15 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-200/15 to-purple-200/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-slate-200/15 to-blue-200/15 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-r from-indigo-200/15 to-slate-200/15 rounded-full blur-2xl"></div>
          </div>
        </div>
        
        <div className="relative z-30 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
          {/* Ultra-Attractive Main Heading */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="relative">
              {/* Animated background glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-2xl animate-ping"></div>
              </div>
              
              {/* Main heading container */}
              <div className="relative z-10">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-center">
                  {/* CHENNAI with stunning effects */}
                  <div className="relative inline-block mb-2 sm:mb-3">
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] drop-shadow-[0_0_40px_rgba(147,51,234,0.6)]">
                      CHENNAI
                    </span>
                  </div>
                  
                  {/* ESCORTS with fire effects */}
                  <div className="relative inline-block">
                    <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)] drop-shadow-[0_0_50px_rgba(147,51,234,0.6)] animate-pulse">
                      ESCORTS
                    </span>
                  </div>
                </h1>
                
                {/* Subtitle with sparkle effect */}
                <div className="mt-4 sm:mt-6">
                  <div className="relative inline-block">
                    <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 blur-sm opacity-50"></span>
                    <h2 className="relative text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-lg">
                      ⭐ #1 ESCORTS AGENCY IN CHENNAI ⭐
                    </h2>
                  </div>
                </div>
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 text-pink-400/60 animate-bounce">
                <Sparkles className="w-full h-full drop-shadow-lg" />
              </div>
              <div className="absolute -top-2 -right-6 w-6 h-6 text-blue-400/60 animate-bounce delay-300">
                <Star className="w-full h-full fill-current drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-4 -left-8 w-7 h-7 text-purple-400/60 animate-bounce delay-700">
                <Heart className="w-full h-full drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-2 -right-4 w-5 h-5 text-cyan-400/60 animate-bounce delay-1000">
                <Zap className="w-full h-full drop-shadow-lg" />
              </div>
            </div>
            
            {/* Enhanced decorative line with animation */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="relative">
                {/* Animated background line */}
                <div className="absolute inset-0 w-32 sm:w-40 md:w-48 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-md opacity-40 animate-pulse"></div>
                {/* Main animated line */}
                <div className="relative w-32 sm:w-40 md:w-48 h-2 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
                {/* Glowing dots */}
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
              </div>
            </div>
          </div>
          
          {/* Today's Available Profiles Counter */}
          {totalProfiles > 0 && (
            <div className="mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
              <div className="relative inline-flex items-center gap-3 sm:gap-4 bg-gradient-to-br from-emerald-500/20 via-green-600/20 to-teal-500/20 backdrop-blur-xl border-2 border-emerald-400/60 rounded-2xl px-5 sm:px-7 py-3 sm:py-4 shadow-2xl group hover:scale-105 transition-all duration-300 hover:border-emerald-300/80">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Pulsing glow around icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full blur-md opacity-70 animate-pulse"></div>
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 animate-ping"></div>
                  <Users className="relative h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-200 drop-shadow-lg" />
                </div>
                
                <div className="text-left min-w-0 relative z-10">
                  <div className="flex items-baseline gap-2">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-green-200 to-teal-200 leading-none drop-shadow-lg">
                      {totalProfiles}
                    </div>
                    <div className="text-sm sm:text-base md:text-lg text-emerald-200 font-bold drop-shadow-md">
                      +
                    </div>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-emerald-100 font-bold tracking-wide whitespace-nowrap drop-shadow-md mt-1">
                    Profiles Available Today
                  </div>
                </div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-2 left-2 w-2 h-2 bg-emerald-400 rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
              </div>
            </div>
          )}
          
          {/* Our Promise Section */}
          <div className="mb-6 sm:mb-8 md:mb-10 px-2">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4 md:mb-5 drop-shadow-lg px-4">
              OUR PROMISE TO YOU FOR CHENNAI ESCORTS SERVICE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto px-2">
              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 backdrop-blur-sm border-2 border-blue-400/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-left">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
                  ✓ NO BULLSHIT - Only Real Chennai Escort Girls
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm border-2 border-green-400/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-left">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
                  ✓ NO ADVANCE PAYMENT - Pay After Meeting
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 backdrop-blur-sm border-2 border-purple-400/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-left">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
                  ✓ NO ADVANCE BOOKING - Instant Chennai Escorts
                </p>
              </div>
              <div className="bg-gradient-to-r from-orange-900/40 to-red-900/40 backdrop-blur-sm border-2 border-orange-400/30 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-left">
                <p className="text-white font-semibold text-xs sm:text-sm md:text-base drop-shadow-lg">
                  ✓ NO FAKE PHOTOS - 100% Real Chennai Escorts
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4">
            <button 
              onClick={scrollToProfiles}
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:from-blue-600 hover:via-indigo-600 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-2xl min-h-[44px] w-full sm:w-auto"
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="hidden sm:inline">Available Right Now</span>
              <span className="sm:hidden">View Today's Profiles</span>
              <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
            </button>

            <button 
              onClick={openWhatsApp}
              className="flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 hover:from-green-600 hover:via-emerald-600 hover:to-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl min-h-[44px] w-full sm:w-auto"
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              <span className="hidden sm:inline">WhatsApp +91 8121426651</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>
          </div>
          
          {/* Confidence Section */}
          <div className="max-w-6xl mx-auto px-4 mb-12">
            <div className="rounded-[32px] border border-slate-200/80 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/85">
              <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
                <div className="grid gap-12 lg:grid-cols-[2fr_1fr] items-start">
                  <div className="space-y-8">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Confidence promise</p>
                      <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-slate-900 dark:text-white">
                        🔥 WE'RE SO CONFIDENT - TRY OUR CHENNAI ESCORTS SERVICE FREE IF YOU'RE NOT HAPPY! 🔥
                      </h2>
                      <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl">
                        <strong className="text-slate-900 dark:text-white">You completely deserve the best Chennai escorts experience in the city, and that is exactly what our team is here to provide for you.</strong> ⭐
                      </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6 text-amber-900 shadow-sm dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-200">
                        <h3 className="text-xl sm:text-2xl font-semibold">🔥 EXPERIENCE THE MAGIC OF CHENNAI'S GENUINE ESCORTS 🔥</h3>
                        <p className="mt-3 text-sm sm:text-base leading-relaxed">True life, true care, lifetime memories - that is what we promise you!</p>
                      </div>

                      <div className="rounded-2xl border border-rose-200 bg-rose-50 px-6 py-6 text-rose-900 shadow-sm dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-100">
                        <p className="text-xl sm:text-2xl font-black mb-3">
                          🎉 SPECIAL DEAL: BOOK OUR CHENNAI ESCORTS WITHIN THE NEXT 30 MINUTES AND GET 10% OFF! 🎉
                        </p>
                        <p className="text-sm sm:text-base text-rose-900/80 dark:text-rose-100/80">
                          Secure your slot now and we&apos;ll honour the full discount even if you prefer to meet later tonight.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-7 text-center shadow-sm dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-100">
                      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600 dark:text-emerald-200/80">100% Happiness Guarantee</p>
                      <p className="mt-4 text-base sm:text-lg leading-relaxed text-emerald-900 dark:text-emerald-100/90">
                        Book with confidence knowing our concierge stays with you until your meeting is confirmed.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
                      <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">⏰ LIMITED TIME OFFER</div>
                      <div className={`mt-4 text-4xl sm:text-5xl font-black ${timeLeft <= 300 ? 'text-red-500 animate-pulse' : 'text-slate-900 dark:text-white'}`}>
                        {formatTime(timeLeft)}
                      </div>
                      <div className="mt-2 text-xs tracking-wide text-slate-500 dark:text-slate-400">
                        {timeLeft > 0 ? 'Minutes Remaining' : 'Offer Expired!'}
                      </div>
                      <div className="mt-6">
                        <a
                          href={timeLeft > 0 ? "https://wa.me/918121426651?text=Hi!%20I%20want%20to%20book%20a%20Chennai%20escort%20with%20the%2010%%20discount%20offer.%20Please%20send%20me%20available%20profiles%20and%20pricing%20details.%20Thank%20you!" : "https://wa.me/918121426651?text=Hi!%20I%20want%20to%20book%20a%20Chennai%20escort.%20Please%20send%20me%20available%20profiles%20and%20pricing%20details.%20Thank%20you!"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-emerald-400/60 px-4 py-4 text-sm font-semibold transition-colors duration-200 ${
                            timeLeft > 0
                              ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                              : 'bg-slate-200 text-slate-500 cursor-not-allowed dark:bg-slate-800 dark:text-slate-500'
                          }`}
                        >
                          <MessageCircle className="h-5 w-5" />
                          {timeLeft > 0 ? '📱 BOOK NOW ON WHATSAPP - GET 10% OFF!' : '📱 BOOK NOW - OFFER EXPIRED'}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};