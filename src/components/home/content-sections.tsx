import Image from 'next/image';
import { memo } from 'react';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';

export const ContentSections = memo(() => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-red-600 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">🔥 PREMIUM CHENNAI ESCORTS SINCE 2010 🔥</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="text-red-500">HOT</span> CHENNAI <span className="text-red-500">ESCORTS</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6 lg:mb-8">
            ⭐ #1 ESCORT SERVICE IN CHENNAI ⭐
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Want to meet some amazing girls in Chennai?</strong> We've got the real deal - gorgeous, fun, and actually available when they say they are! No fake promises, no old photos - just genuine girls ready to hang out with you.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <a href="https://wa.me/918121426651?text=Hi%2C%20I%20am%20looking%20escorts%20service%20in%20chennai" 
               className="bg-red-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-red-700 transition-all duration-300 shadow-2xl transform hover:scale-105 min-h-[44px] flex items-center justify-center">
              <Phone className="inline w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">CALL NOW: +91 8121426651</span>
              <span className="sm:hidden">CALL NOW</span>
            </a>
            <a href="#profiles-section" 
               className="bg-yellow-500 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:bg-yellow-400 transition-all duration-300 shadow-2xl transform hover:scale-105 min-h-[44px] flex items-center justify-center">
              <MessageCircle className="inline w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">VIEW HOT GIRLS</span>
              <span className="sm:hidden">VIEW GIRLS</span>
            </a>
          </div>
          <div className="bg-red-600 h-1 sm:h-2 w-24 sm:w-32 lg:w-48 mx-auto rounded-full shadow-lg"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-4 sm:p-6 lg:p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">
                🔥 WHY CHOOSE OUR CHENNAI ESCORTS? 🔥
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">🔥 REAL GIRLS, REAL PHOTOS</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Here's the deal - we actually know these girls! We've met them, talked to them, and checked their photos. No fake profiles, no surprises. What you see is what you get!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">⚡ ALWAYS THERE WHEN YOU NEED US</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Night owl or early bird? Doesn't matter! We've got girls ready whether it's 2 AM or 2 PM. Just give us a call and we'll sort you out!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">💰 NO MONEY UPFRONT - PAY WHEN YOU'RE HAPPY</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Look, we're not here to scam anyone. You only pay when you're actually happy with the service. No advance payments, no hidden fees - just straight up, honest business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">🏆 GUYS KEEP COMING BACK TO US</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">You know what's the real proof? Guys keep coming back! We're not just talking big - our regular clients are proof that we actually deliver what we promise!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/assets/look.jpg"
                alt="Hot Chennai Escort Girls"
                width={600}
                height={400}
                priority
                className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500 border-2 sm:border-4 border-red-500"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -left-4 sm:-left-6 lg:-left-8 bg-red-600 p-3 sm:p-4 lg:p-6 rounded-lg shadow-2xl border-2 border-yellow-400">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-black fill-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg">10+ YEARS</h4>
                    <p className="text-xs sm:text-sm text-yellow-300">EXPERIENCE</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 bg-yellow-500 text-black p-2 sm:p-3 lg:p-4 rounded-lg shadow-2xl border-2 border-red-600">
                <div className="text-center">
                  <div className="text-lg sm:text-xl lg:text-2xl font-black">500+</div>
                  <div className="text-xs sm:text-sm font-bold">HOT GIRLS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: LILLYBABE #1 ESCORT SERVICE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6">
            🔥 LILLYBABE - #1 ESCORT SERVICE & CALL GIRLS PROVIDER IN CHENNAI 🔥
          </h2>
          <div className="bg-red-600 text-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
            <p className="text-base sm:text-lg lg:text-xl font-bold">
              ⭐ PREMIUM CHENNAI ESCORTS ⭐ | ⚡ 24/7 AVAILABLE ⚡ | 💯 100% SATISFACTION GUARANTEE 💯
            </p>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Chennai's got this amazing vibe, you know?</strong> It's where old meets new in the coolest way possible. The city's got character, it's got life, and honestly? It's the perfect place to meet some incredible people. That's where we come in - we've got the best girls in the city, and they're all about having a good time!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-rose-500 to-red-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <Image
                src="/images/escorts-in-chennai.jpg"
                alt="Chennai Escorts"
                width={500}
                height={400}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 HERE'S WHAT MAKES OUR CHENNAI ESCORTS ABSOLUTELY AMAZING 🔥</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Our Chennai Escorts have this incredible talent for making you feel like the most important person in the room.</strong> It's not just about looks - it's about genuine care, attention, and ultimate satisfaction!
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  They bring this perfect mix of charm, seduction, and professionalism that creates this amazing atmosphere. You'll feel comfortable, relaxed, and totally at ease from the moment you meet.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Every single experience with our escort service Chennai is designed to be unique and special. No two encounters are ever the same - that's our promise to you!
                </p>
            </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-yellow-400">
                  🔥 ONCE YOU EXPERIENCE OUR CHENNAI ESCORTS SERVICE, YOU'LL KNOW WHY EVERYONE KEEPS COMING BACK! 🔥
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
          <p className="text-lg text-white leading-relaxed text-center">
            Look, our girls aren't just pretty faces - they're actual people with personalities! They love what they do and actually care about making sure you have a great time. They get Chennai, they get guys, and they know how to make any situation fun and relaxed. Whether you want someone independent or just the best experience possible, these girls know how to make every moment count.
             </p>
          </div>
      </section>

      {/* Section 3: We're So Confident - Special Deal */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 WE'RE SO CONFIDENT - TRY OUR CHENNAI ESCORTS SERVICE FREE IF YOU'RE NOT HAPPY! 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">You absolutely deserve the best Chennai Escorts - and that's exactly what we're offering!</strong> ⭐
          </p>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-2xl border-2 border-yellow-400">
            <h3 className="text-3xl font-black mb-4">🔥 EXPERIENCE THE MAGIC OF CHENNAI'S FINEST COMPANIONS 🔥</h3>
            <p className="text-xl mb-6">Real people, genuine care, and memories that last a lifetime - that's our promise to you!</p>
            <div className="bg-yellow-500 text-black p-6 rounded-lg border-2 border-red-600">
              <p className="text-2xl font-black">🎉 SPECIAL DEAL: BOOK OUR CHENNAI ESCORTS WITHIN THE NEXT 30:00 AND GET 20% OFF! 🎉</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-white mb-4">OUR AMAZING CHENNAI ESCORTS</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Looking for stunning escort girls in Chennai?</strong> We've got this amazing selection of independent escorts who are not just beautiful but genuinely excited to make your time special. They're real people with real personalities! 🔥
             </p>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">YOUR PRIVACY IS SACRED TO US</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Here's what makes us different</strong> - our girls actually care about you as a person, not just another client. What happens between you stays between you - we don't talk, we don't judge, we don't share anything. Your privacy is sacred to us, so you can just relax and have a good time! 🔒
            </p>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-4">GREAT PRICES, EVEN BETTER VALUE</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Here's the best part?</strong> You can have an amazing time without spending a fortune! Our prices are fair because we think everyone should be able to enjoy great company without going broke. Good times don't have to cost an arm and a leg! 💰
            </p>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-4">BOOKING IS SUPER EASY!</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Booking with our Chennai Escorts is literally as easy as picking up the phone!</strong> Just choose your perfect companion from our amazing escort girls, give us a call, and boom - you're all set! No complicated processes, no waiting around. Before you know it, you'll be hanging out with one of the most amazing people you've ever met! 🚀
            </p>
            </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-4">WE'RE HERE WHEN YOU NEED US</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Life doesn't always give you advance notice, right?</strong> That's totally fine with us! Even if you decide last minute that you want to hang out with our Chennai Escorts, just give us a call and we'll do everything we can to make it happen. We're like your reliable friends who are always there when you need them! ⚡
            </p>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-xl font-bold text-white mb-4">MEMORIES THAT LAST FOREVER</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Get ready for experiences that are so amazing, you'll be talking about them for years!</strong> Our Chennai Escorts Service is all about creating moments that go beyond what you imagined possible. You'll be completely satisfied and probably already planning your next adventure with us! Your happiness is literally our mission, and we're here to make all your dreams come true! 💖🔥
            </p>
          </div>
        </div>
      </section>

      {/* Random Image Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR BEAUTIFUL CHENNAI ESCORTS GALLERY 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">Browse through our stunning collection of verified Chennai escorts!</strong> Each photo represents a real, beautiful, and professional escort ready to make your time unforgettable.
          </p>
        </div>
        <RandomImageGallery 
          count={20} 
          imageHeight="h-64" 
          showRefreshButton={true}
        />
      </section>

      {/* Section 4: Our Story: From Dreams to Reality */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR STORY: FROM DREAMS TO REALITY 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">Let me tell you a little story about how our Chennai Escorts Service came to be...</strong> It's not just about business, it's about creating genuine connections and unforgettable moments.
          </p>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-2xl border-2 border-yellow-400">
            <h3 className="text-3xl font-black">🏆 TRUSTED BY THOUSANDS IN CHENNAI 🏆</h3>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 WHY OUR CHENNAI ESCORTS ARE SIMPLY THE BEST! 🔥</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🔥 REAL CONNECTIONS, REAL FEELINGS</h4>
                  <p className="text-gray-300 leading-relaxed">
                 <strong className="text-white">You know what makes us special?</strong> It's not just about the physical stuff - it's about finding someone who actually gets you. Our girls have this way of making you feel like you're hanging out with your best friend, your girlfriend, or even a celebrity! They're not just pretty faces; they're real people with real personalities who actually care about making you happy.
               </p>
          </div>
          
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🔒 YOUR SAFETY IS OUR PRIORITY</h4>
                  <p className="text-gray-300 leading-relaxed">
                 <strong className="text-white">I want you to know that when you choose our Chennai Escorts, you're choosing safety and professionalism.</strong> We carefully select each girl - they're healthy, well-educated, and drug-free. Plus, they're trained to be confident and charming, making every moment with them absolutely magical. No fake promises, just real experiences!
               </p>
            </div>
            
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🌟 AMAZING GIRLS WITH AMAZING STORIES</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Here's the cool part</strong> - our girls are so much more than just escorts! Some are dancers, fitness trainers, tutors, or even aspiring actresses and models. They're real people with real dreams, and they're absolutely fun to be around. Whether you want to go out for dinner, attend a business event, or just spend quality time together, they'll make every moment special. They're smart, sociable, and genuinely caring - you'll feel like you've known them forever!
                  </p>
                </div>
            </div>
          </div>
        </div>
        
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-xl font-bold text-white mb-4 text-center">✅ 100% REAL & VERIFIED</h3>
              <p className="text-gray-300 mb-6 text-center font-bold">NO FAKE PHOTOS, NO FAKE PROMISES!</p>
              
              <h4 className="text-lg font-bold text-white mb-4">🔥 A PERSONAL PROMISE FROM ME</h4>
              <p className="text-gray-300 leading-relaxed">
                 <strong className="text-white">I want you to know that every photo you see on our website is 100% real and recent.</strong> The girl you see in the picture is exactly the girl you'll meet. No surprises, no disappointments. That's my personal guarantee to you. When you choose our Chennai Escorts, you're choosing honesty, quality, and unforgettable experiences.
               </p>
        </div>
        
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-xl font-bold text-white mb-6 text-center">🔥 WHY PEOPLE LOVE OUR CHENNAI ESCORTS SERVICE</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-yellow-400" />
            <div>
                    <h4 className="font-bold text-white">GENUINE HAPPINESS</h4>
                    <p className="text-sm text-gray-300">Real smiles, real joy, real connections</p>
            </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-yellow-400" />
            <div>
                    <h4 className="font-bold text-white">24/7 AVAILABILITY</h4>
                    <p className="text-sm text-gray-300">Whenever you need us, we're here</p>
            </div>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-yellow-400" />
            <div>
                    <h4 className="font-bold text-white">TOP QUALITY</h4>
                    <p className="text-sm text-gray-300">Only the best for our valued clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg shadow-2xl border-2 border-yellow-400">
            <p className="text-xl text-white mb-6 font-bold">🔥 READY TO EXPERIENCE THE DIFFERENCE? LET'S MAKE SOME AMAZING MEMORIES TOGETHER! 🔥</p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://wa.me/918121426651" 
                 className="bg-yellow-500 text-black px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <MessageCircle className="inline w-6 h-6 mr-3" />
                LET'S TALK NOW
              </a>
              <a href="#profiles-section" 
                 className="bg-white text-red-600 px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                MEET OUR GIRLS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Our Chennai Escorts */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 WHY CHOOSE OUR CHENNAI ESCORTS? 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We're so proud to tell you that we've been providing amazing Chennai Escorts Service for over 10+ years!</strong>
             </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl text-center border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-black" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">10+</h3>
            <p className="text-gray-300 font-bold">YEARS OF CHENNAI ESCORTS</p>
            </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl text-center border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-black fill-black" />
          </div>
            <h3 className="text-3xl font-black text-white mb-2">5.0</h3>
            <p className="text-gray-300 font-bold">CHENNAI ESCORTS RATING</p>
            </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl text-center border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">500+</h3>
            <p className="text-gray-300 font-bold">CHENNAI ESCORT GIRLS</p>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl text-center border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-black text-white mb-2">24/7</h3>
            <p className="text-gray-300 font-bold">CHENNAI ESCORTS SERVICE</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg shadow-2xl border-2 border-yellow-400">
          <h3 className="text-2xl font-black text-white mb-6 text-center">🔥 OUR PROMISE TO YOU FOR CHENNAI ESCORTS SERVICE 🔥</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold">NO BULLSHIT - Only Real Chennai Escort Girls</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold">NO ADVANCE PAYMENT - Pay After Meeting</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold">NO ADVANCE BOOKING - Instant Chennai Escorts</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-white font-bold">NO FAKE PHOTOS - 100% Real Chennai Escorts</span>
          </div>
          </div>
        </div>
      </section>

      {/* Section 19: 100% Genuine Chennai Escort Girls */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 100% GENUINE CHENNAI ESCORT GIRLS IN CHENNAI 🔥
          </h2>
          </div>
          
        <div className="space-y-8 mb-16">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Our main mission in the Chennai Escorts agency is to give you the most memorable intercourse offer.</strong> You can select the most experienced young call girls service in Chennai that is trained in various sexual activities. We can thus say that irrespective of what kind of intercourse you want, our escort girl is always willing to give her best performance. Female escort service in Chennai takes it upon itself to ensure that it offers our diverse clientele with service which is entirely authentic.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">We've got real girls in Chennai at prices that won't break the bank, so you can have an amazing time without going broke.</strong> Whether you're looking for younger girls, busty beauties, Indian bhabhis, college girls, glamorous married women, or stunning Russian girls - we've got someone perfect for you.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Get yourself a kind of pleasure like no other because these wonderful call girls are adept at making you happy.</strong> To enjoy an exciting and exciting experience that you will always feel like coming back to, you will not regret not missing LillyBabe just because you are in Chennai!
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              <strong className="text-white">Tonight, heat up with one of our beautiful call girl in Chennai.</strong> Your life will be filled with a lot of excitement and pleasure when you need our sensuous and passionate call girls any time you wish, whether you are a first time visitor or a returning client.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              <strong className="text-white">As one of the finest call girl services in Chennai, we simplify the process of booking independent, sexy call girls online to ensure a discrete and hassle free encounter.</strong> You should not miss a chance to enjoy a night of pure passionate love and unmatched intimacy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Our Beautiful Chennai Escorts Are Waiting for You! */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR BEAUTIFUL CHENNAI ESCORTS ARE WAITING FOR YOU! 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">I want you to meet some of the most incredible girls in our Chennai Escorts Service.</strong> Each one has been personally selected by me because they're not just beautiful - they're smart, fun, and genuinely caring. They're here to make your time in Chennai absolutely unforgettable!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/escort-girl-2.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">VERIFIED & TRUSTED</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">SWEET & CARING</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">ALWAYS HERE FOR YOU!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                <strong className="text-white">She's like your best friend who just happens to be incredibly beautiful.</strong> Always caring and understanding!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/escort-girl-3.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Fresh & New</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Smart & Elegant</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">Perfect for any occasion!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
              <p className="text-gray-300 text-sm mb-4">
                A true professional who knows how to make every moment special. Perfect for business events or romantic evenings!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/escort-girl-4.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Everyone's Favorite</span>
            </div>
              <h3 className="text-xl font-bold text-white mb-2">Fun & Playful</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">She'll brighten your day!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                She's the life of the party! Always smiling and ready to make you laugh. Perfect for a fun night out!
              </p>
          </div>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/escort-girl-5.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Special VIP</span>
            </div>
              <h3 className="text-xl font-bold text-white mb-2">Sophisticated & Classy</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">For special moments!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                She's pure elegance! Perfect for high-profile events, business meetings, or romantic dinners. She knows how to make you feel special!
               </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/escort-girl-6.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">Exotic Beauty</span>
        </div>
              <h3 className="text-xl font-bold text-white mb-2">Passionate & Exotic</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">International charm!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                She brings international charm to our Chennai Escorts Service! Her exotic beauty and passionate nature will sweep you off your feet!
             </p>
              </div>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/escort-girl-7.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Elite & Special</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Glamorous & Elite</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">For the finest moments!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
              <p className="text-gray-300 text-sm mb-4">
                She's the definition of luxury! Perfect for those special occasions when you want nothing but the best. She'll make you feel like royalty!
              </p>
          </div>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/model-2.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold">Luxury & Style</span>
            </div>
              <h3 className="text-xl font-bold text-white mb-2">Elegant & Refined</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">Pure sophistication!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
          </div>
              <p className="text-gray-300 text-sm mb-4">
                She's the epitome of grace and style! Every movement is elegant, every word is refined. She'll make any occasion feel like a luxury event!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/model-1.webp"
              alt="Hot Chennai Escort Girl"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">Rare & Exclusive</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rare & Precious</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">Book her while you can!</p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
              <p className="text-gray-300 text-sm mb-4">
                She's like finding a rare gem! Her beauty is unique and her personality is one-of-a-kind. Don't miss your chance to meet this special girl!
             </p>
          </div>
        </div>
          </div>
          
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Why Our Chennai Escorts Service is Special</h3>
            <p className="text-lg text-gray-300">
              We're not just another Chennai Escorts agency - we're your trusted companions who care about your happiness and satisfaction!
             </p>
          </div>
        </div>
             </section>

      {/* Section 7: Matchless Companionship with Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 HAVE A MATCHLESS COMPANIONSHIP WITH CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            <strong className="text-white">Chennai is not only about the stunning beaches, vibrant night life, and relaxing sunsets,</strong> but it is also the right place to experience your sex life to the fullest with a partner who best understands you.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">Our Chennai escorts are also providing the most rewarding escort services</strong> such as private incorporated overnight fun, dirty talks, kissing, cuddling affectionately, complete bedroom service, deep French kissing, double BJ and much more.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            <strong className="text-white">It is either having a full night of sex, or having your cringe erotic desires,</strong> these companions make every moment of your life warm and full of authenticity. Our girls can fit perfectly solo travellers, business people or people who wish to make their Chennai visit very memorable and enjoyable. Allow Chennai to add some glamour to your life and call girls to keep you in their company to reshape your definition of a perfect vacation.
          </p>
        </div>

        <div className="text-center">
          <a href="https://wa.me/918121426651" 
             className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Book Your Matchless Companion Now!
          </a>
        </div>
      </section>

      {/* Section 8: Hottest Varieties of Escorts in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 GET TOGETHER WITH THE HOTTEST VARIETIES OF ESCORTS IN CHENNAI 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">As one of the leading escort services in Chennai,</strong> we will be able to satisfy your needs by delivering out-call services to luxurious hotels.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">🏨 Luxurious Hotel Services</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Our spaces are designed to offer privacy and peaceful environment</strong> to enable you to enjoy every moment. We also have out-call services that are affordable enough and bring our escorts to your location when you would prefer staying in your comfort zone.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">🚗 Professional & Discreet</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Your escorts will come to your hotel or club quietly and promptly.</strong> We also promise that our escorts will be always professional and considerate of your privacy and time.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="#todays-profiles" 
             className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
            <Users className="w-5 h-5 mr-2" />
            See Our Hottest Varieties!
          </a>
        </div>
      </section>

      {/* Section 9: GFE Experience in Chennai Escort */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 GFE EXPERIENCE IN CHENNAI ESCORT 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">In case you live alone in Chennai and you want to have a girlfriend that turns out to be your girlfriend</strong> then you can choose a girlfriend-type partner with our agency.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">💕 Girlfriend Experience (GFE)</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              <strong className="text-white">We will give you a wide choice of call girl to hire the best one who is ready to become your girlfriend.</strong> Experience the warmth, care, and intimacy of a real relationship with our beautiful Chennai Escorts who are trained to provide the most authentic girlfriend experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-800 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">💋 Intimate Conversations</h4>
                <p className="text-gray-300 text-sm">Deep, meaningful talks like real couples</p>
              </div>
              <div className="bg-red-800 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">🤗 Warm Cuddles</h4>
                <p className="text-gray-300 text-sm">Affectionate physical comfort and care</p>
              </div>
              <div className="bg-red-800 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2">💝 Emotional Connection</h4>
                <p className="text-gray-300 text-sm">Genuine emotional bonding and support</p>
              </div>
            </div>
            <a href="https://wa.me/918121426651" 
               className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Find Your Perfect GFE Partner!
            </a>
          </div>
        </div>
      </section>

      {/* Section 10: Select Your Favourable Call Girls/Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 SELECT YOUR FAVOURABLE CALL GIRLS/CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Our Chennai escort agency has collected call girls of various backgrounds of various characters.</strong> Each of them is gorgeous and appealing. Whatever kind of call girls you desire, you will find them in here.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Russian Escorts */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">🇷🇺 Russian Escorts</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Russian escorts in Chennai are famous with their alluring looks and attractive characters</strong> that are parts of the interest they create. Select your sexual partner among the best call girls of other countries who are Russian.
            </p>
          </div>

          {/* Teenage Girls */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">👧 Teenage Girls</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">We shall get you the prettiest teenage college girls, Tamil girl</strong> who still preserve a feeling of freshness in their relations with others.
            </p>
          </div>

          {/* Busty Escorts */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">🔥 Busty Escorts</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">When you desire a meaty affair, then one of our busty escort in Chennai,</strong> with their gigantic body, is what you require.
            </p>
          </div>

          {/* Desi Bhabi */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">👩 Desi Bhabi</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Desi bhabis are the most up-market escort in Chennai.</strong> They are mere housewife escorts. With their plump figures, they are going to offer you the purest sensations through out the whole of your body.
            </p>
          </div>

          {/* Student Escorts */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">🎓 Student Escorts</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">These young independent call girls will be happy to escort you</strong> anytime of the day and night.
            </p>
          </div>

          {/* Model Girls */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">💃 Model Girls</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">These call girls in Chennai will have the body of your dreams</strong> in case you take them out on a date. They will make you crazy with their gorgeous modelling bodies.
            </p>
          </div>

          {/* Desi Girls */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">🇮🇳 Desi Girls</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Desi escort girl sex will be the most purest and the most genuine experience</strong> you will ever have. They are armed with unique tricks of luring you in the most exotic culture fashion.
            </p>
          </div>

          {/* Air Hostess */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">✈️ Air Hostess</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">You may spend the most exceptional and romantic night out with an Air Hostess escort</strong> due to their feeling of professionalism and their fantastic bodies.
            </p>
          </div>

          {/* VIP Escorts */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-3">👑 VIP Escorts</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Our premium VIP escorts in Chennai offer the ultimate luxury experience</strong> with their sophisticated charm, elite background, and exclusive companionship that's perfect for high-profile clients.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="https://wa.me/918121426651" 
             className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Select Your Perfect Type Now!
          </a>
        </div>
      </section>

      {/* Section 11: Call Girls In Chennai Are Here To Your Call */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 CALL GIRLS IN CHENNAI ARE HERE TO YOUR CALL 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We take so much pride in overcoming all challenges in order to emerge the most reputed call girl service in Chennai.</strong>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">🏆 Unmatched Excellence</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">Making sure every client has an amazing time has always been our biggest goal</strong> - and through hard work and staying focused on quality, we've built up a loyal customer base that keeps coming back year after year.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ 24/7 Availability</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">We've made booking super easy - just call or message us anytime.</strong> Seriously, we're always around - day or night, weekends, holidays, whatever. Just hit us up and we'll sort everything out for you.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">🌟 Our Commitment to You</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">The consistent growth of our clientele makes us committed to offer excellent call girl services in Chennai.</strong> And we owe a great debt to each and every one of our clients who have helped to make Chennai call girl a massive success and the most reputable brand in the business!
          </p>
          <a href="https://wa.me/918121426651" 
             className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Call Us Now - We're Here!
          </a>
        </div>
      </section>

      {/* Section 12: Cheap and Real Call Girls in Chennai */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 CHEAP AND REAL CALL GIRLS IN CHENNAI 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Do you need real, pretty call girls in Chennai?</strong> And you have come to the right place!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">✅ Verified & Affordable</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">We've got a huge selection of real girls in Chennai at prices that won't break the bank.</strong> Look, there are a lot of agencies out there claiming they're the best, but we actually deliver what we promise. We're upfront about everything and don't mess around with fake promises.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">🔒 Authentic & Secure</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              <strong className="text-white">At LillyBabe, we highly value authenticity; browse beautiful, smart, and talented call girls,</strong> taking a look at her real photos and using direct WhatsApp connections.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">🏆 Best Known Call Girl Service</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            <strong className="text-white">To be sure of a guaranteed elite experience, simply type in LillyBabe or Call Girls in Chennai</strong> so you could book a high end call girl service in Chennai, and then choose our site.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            <strong className="text-white">As one of the best known call girl services in Chennai we are very proud to offer unmatched pleasure, professionalism and privacy.</strong> Reserve a call girl today in order to experience the best!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918121426651" 
               className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors duration-300 inline-flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Reserve Your Call Girl Now!
            </a>
            <a href="#todays-profiles" 
               className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors duration-300 inline-flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Browse Our Real Girls
            </a>
          </div>
        </div>
      </section>

      {/* Section 13: Our Amazing Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR AMAZING CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I've put together this amazing collection of categories for our Chennai Escorts Service. Each one is special and unique - just like you!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/russian-escorts.jpg"
                alt="Russian Escorts in Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Exotic Russian Beauties</h3>
              <p className="text-gray-300 text-sm">International charm and beauty</p>
              </div>
              </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/airhostess-escorts.jpg"
              alt="Airhostess Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Glamorous Airhostess</h3>
              <p className="text-gray-300 text-sm mb-4">Professional elegance and sophistication</p>
              <a href="/airhostess-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">Explore Collection →</a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/category/erotic-massage.jpg"
              alt="Erotic Massage Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Relaxing Massage</h3>
              <p className="text-gray-300 text-sm">Therapeutic and soothing</p>
              </div>
            </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/gf-experience.jpg"
              alt="Girlfriend Experience Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Sweet GF Experience</h3>
              <p className="text-gray-300 text-sm">Romantic and caring</p>
          </div>
        </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/malyali-escorts.jpg"
              alt="Malayali Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Beautiful Malayali Girls</h3>
              <p className="text-gray-300 text-sm">Natural beauty and charm</p>
          </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/category/celebrity-escorts.jpg"
              alt="Celebrity Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Celebrity Look-alikes</h3>
              <p className="text-gray-300 text-sm mb-4">Star quality and glamour</p>
              <a href="/celebrity-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">Explore Collection →</a>
          </div>
        </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/housewife-escorts.jpg"
              alt="Housewife Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Mature & Caring</h3>
              <p className="text-gray-300 text-sm">Experienced and understanding</p>
            </div>
              </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/category/teen-escorts.jpg"
              alt="Teen Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Young & Fresh</h3>
              <p className="text-gray-300 text-sm">Energetic and fun</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/busty-escorts.jpg"
              alt="Busty Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Curvy & Beautiful</h3>
              <p className="text-gray-300 text-sm">Voluptuous and stunning</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/category/independent-escorts.jpg"
              alt="Independent Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Independent & Free</h3>
              <p className="text-gray-300 text-sm">Self-reliant and confident</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/category/vip-escorts.jpg"
              alt="VIP Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">VIP & Exclusive</h3>
              <p className="text-gray-300 text-sm">High-quality and luxurious</p>
            </div>
            </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/category/model-escorts.jpg"
              alt="Model Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Fashion Models</h3>
              <p className="text-gray-300 text-sm">Stylish and elegant</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 mb-6">
            See someone who interests you? Each of our carefully selected Chennai companions is professionally verified and ready to provide you with an exceptional experience. Contact us to arrange your perfect match.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Browse All Categories
            </a>
            <a href="tel:+918121426651" 
               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="inline w-5 h-5 mr-2" />
              Call for More Info
            </a>
          </div>
              </div>
      </section>

      {/* Section 14: Detailed Escort Descriptions */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 AMAZING CHENNAI ESCORTS READY TO MEET YOU! 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Hey! I'm excited to show you what we've got here!</strong> We've got amazing, caring girls from all different backgrounds - each one unique and special in their own way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Everyone's Favorite</h3>
                <p className="text-sm text-yellow-400 font-bold">Independent & Free Spirited</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              These amazing independent girls are like your best friends who just happen to be incredibly beautiful! They're smart, fun, and love to make you feel special. Perfect for those who want a genuine connection!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Verified & Trusted</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Always Available</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Top Quality</span>
              </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Book Now
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Very Popular</h3>
                <p className="text-sm text-green-600 font-semibold">Mature & Caring Housewives</p>
          </div>
              </div>
            <p className="text-gray-300 mb-4">
              These wonderful mature ladies know exactly how to take care of you! They're experienced, understanding, and know how to make you feel relaxed and special. Perfect for those who appreciate wisdom and warmth!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Wise & Mature</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Very Experienced</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Super Discreet</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Let's Chat
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Local Beauty</h3>
                <p className="text-sm text-blue-600 font-semibold">Beautiful Tamil Girls</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Our lovely Tamil girls are the heart and soul of our Chennai Escorts Service! They're not just beautiful - they're warm, friendly, and understand exactly what makes you happy. They'll make you feel like you're with an old friend!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Local Tamil</span>
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">Cultural Charm</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Warm & Friendly</span>
          </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Let's Chat
            </a>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
        </div>
              <div>
                <h3 className="text-xl font-bold text-white">Exotic Beauty</h3>
                <p className="text-sm text-purple-600 font-semibold">Gorgeous Mallu Girls</p>
              </div>
              </div>
            <p className="text-gray-300 mb-4">
              These stunning Mallu girls bring the exotic beauty of Kerala to our Chennai Escorts! They're known for their natural beauty, warm hearts, and incredible charm. They'll make you feel like you're in paradise!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Exotic Mallu</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Natural Beauty</span>
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">Warm Hearts</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Let's Chat
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Elite & Special</h3>
                <p className="text-sm text-indigo-600 font-semibold">Glamorous Air Hostesses</p>
            </div>
          </div>
            <p className="text-gray-300 mb-4">
              These stunning Air Hostesses bring international glamour to our Chennai Escorts Service! They're professional, elegant, and know how to make you feel like a VIP. Perfect for those who love sophistication!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">Professional</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Elite & Classy</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">International</span>
            </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Let's Chat
            </a>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white fill-white" />
            </div>
              <div>
                <h3 className="text-xl font-bold text-white">VIP & Exclusive</h3>
                <p className="text-sm text-yellow-600 font-semibold">Celebrity Look-alikes</p>
          </div>
            </div>
            <p className="text-gray-300 mb-4">
              These stunning celebrity escorts in Chennai are perfect for special events, parties, or just making you feel like a star! They're glamorous, sophisticated, and know how to turn heads wherever they go!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">Celebrity Style</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">VIP Treatment</span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">Perfect for Events</span>
          </div>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Let's Chat
            </a>
            </div>
          </div>
          
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Meet Your Perfect Match?</h3>
            <p className="text-lg text-gray-300 mb-6">
              We've introduced you to our carefully selected Chennai companions - each one bringing their own unique charm and personality. Now it's your turn to choose who you'd like to meet. Every companion is professionally verified and committed to providing you with an exceptional experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
            </div>
          </div>
        </div>
      </section>


      {/* Section 15: The Magic & What Makes Our Chennai Escorts Amazing */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 THE MAGIC OF OUR CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">I want you to know that what we do here is so much more than just pretty faces.</strong> Our girls are smart, caring, and they really know how to make you feel special!
          </p>
            </div>
            
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 YOUR PERFECT EXPERIENCE AWAITS 🔥</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                <strong className="text-white">Our wonderful Chennai Escort Girls are here to create magical moments with you!</strong> Whether you want a romantic evening, a fun night out, or just someone to talk to - they're perfect for everything. They'll make you feel like the most important person in the world, and trust me, you'll never want the night to end!
              </p>
            </div>
          </div>
          
          <div className="relative group">
          <div className="relative">
            <Image
                src="/images/beauty.png"
                alt="Hot Chennai Escort Girl"
                width={500}
              height={400}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative group">
            <div className="relative">
              <Image
                src="/images/sexy.png"
                alt="Hot Chennai Escort Girl"
                width={500}
                height={400}
                className="rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500 border-4 border-red-500"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🔥 WHAT MAKES US SPECIAL 🔥</h3>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our girls are not just beautiful - they're also incredibly caring and professional. We've got fair prices and payment options that work for everyone, and our girls always go the extra mile to make your experience truly special.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With our wonderful Chennai Escort Girls, you can truly be yourself and enjoy every moment! They're here to make you happy and comfortable, and they know exactly how to create the perfect atmosphere for whatever you're looking for.
                </p>
          </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready for an Amazing Time with Our Chennai Escorts?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Are you ready to have the most amazing time with our Chennai Escorts Service? Booking is super easy! Just send us a message on WhatsApp and tell us what you're looking for. Our wonderful girls are available for both day and night adventures - whether you want to go to movies, take a long drive, or just spend quality time together!
              </p>
              <p className="text-lg text-white leading-relaxed">
                Don't worry about the logistics - we've got everything covered! Just pick your favorite girl from our profiles and choose a hotel from our trusted list in Chennai. Our Chennai Escort Girls will arrive right at your location, making everything smooth and hassle-free.
              </p>
            </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                Your happiness is everything to us! We take your privacy very seriously and will always find the perfect girl for you through our trusted Chennai Escorts network. We're connected with the best hotels and locations in the city, and our clients include everyone from business people to celebrities - they all trust us because we always deliver amazing experiences!
              </p>
              <div className="bg-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-800 italic">
                  💡 Friendly Tip: When you book with our Chennai Escorts Service, just be yourself and tell us what you're looking for! We want to make sure you have the perfect experience, so don't be shy about sharing your preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
             </section>


      {/* Section 16: Trust Our Chennai Escorts - Safety Section */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔒 TRUST OUR CHENNAI ESCORTS - WE'VE GOT YOU COVERED! 🔒
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bold">
            YOUR SAFETY IS OUR PRIORITY
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🔒 FEEL CONFIDENT WITH US 🔒</h3>
          <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">After many years of doing this, I can tell you with complete confidence that you have nothing to worry about!</strong> Your safety and comfort are our top priorities, and we've got everything in place to make sure both you and our girls are completely secure.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">Life can be really stressful these days, right?</strong> Work pressure, social expectations, and everything else can really wear you down. That's exactly why our Chennai Escort Girls are here - to give you the love, care, and attention you deserve during those tough times.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  <strong className="text-white">What makes our wonderful girls the best Chennai Escorts?</strong> It's not just about the amazing experiences they provide - it's also about the genuine care and pampering they give you. You won't find this level of attention and love anywhere else!
                </p>
              </div>
              </div>
            </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative">
            <Image
                src="/images/highprofilegirl.png"
                alt="High Profile Chennai Escort Girl"
                width={500}
              height={400}
                className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
            />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 p-8 rounded-3xl border border-purple-400 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Book Your Chennai Escorts with Complete Confidence!</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                We might not claim to have the absolute best escorts, but I can promise you that our commitment to your safety and happiness will make you want to come back to our Chennai Escorts Service again and again! Feel free to contact us anytime - day or night - and we'll be happy to help you find exactly the type of girl you're looking for.
              </p>
              <p className="text-lg text-white leading-relaxed">
                While some services only offer certain types of girls, we're proud to be your one-stop destination for all kinds of wonderful companions in Chennai! This means we've got the perfect girl for every occasion, and we can always adapt to what you need.
            </p>
          </div>
            <div>
              <p className="text-lg text-white leading-relaxed mb-4">
                We know that every client is special and unique, which is why our service is never the same for everyone. We take every new client seriously and always try our best to give you exactly what you want. We regularly train all our girls because we see them as true professionals who need to stay updated with the latest trends.
              </p>
              <div className="text-center">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 17: Genuine Services */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 EXCLUSIVE CHENNAI ESCORTS GENUINE SERVICES 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We're so excited to show you our most special and exclusive Chennai Escorts Service!</strong> These are our premium offerings that are designed to give you the most amazing and luxurious experience possible!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/sections/premium-escorts.jpg"
              alt="Hot Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                PREMIUM
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Genuine Chennai Escorts</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                We've got the most exclusive and passionate relationships through our premium service! Our handpicked selection of elegant girls brings amazing personality, intelligence, and stunning beauty to every interaction!
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/sections/intellectual-escorts.jpg"
              alt="Intellectual escorts"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                INTELLECTUAL
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Smart & Beautiful Chennai Escorts</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Experience the perfect combination of intelligence and elegance with our carefully selected Chennai companions! Their educational achievements and diverse knowledge make them ideal for engaging conversations and sophisticated social events.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/sections/corporate-escorts.jpg"
              alt="Corporate escorts"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                CORPORATE
            </div>
              <h3 className="text-xl font-bold text-white mb-3">Corporate Chennai Escorts</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Our Chennai Escorts Service is specially designed for business executives who attend corporate events! Whether it's a business meeting or a private gathering, our skilled Chennai Escort Girls always maintain the highest standards of professionalism!
              </p>
              <a href="/escorts" 
                 className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                Corporate Chennai Escorts
              </a>
          </div>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/sections/vip-escorts.jpg"
              alt="VIP escorts"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 inline-block">
                VIP
            </div>
              <h3 className="text-xl font-bold text-white mb-3">VIP Chennai Escorts Experience</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                You'll get the amazing opportunity to have an exclusive VIP experience with our most in-demand Chennai Escort Girls! Our VIP Chennai Escorts go through very strict selection because they have superior beauty and incredible charm!
              </p>
              <a href="/escorts" 
                 className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                VIP Chennai Escorts
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">From Our Heart to Yours</h3>
            <p className="text-lg text-gray-300 mb-6">
              Every companion in our LillyBabe Agency is committed to creating meaningful experiences that our clients will treasure. Our carefully selected Chennai companions combine elegance, professionalism, and genuine care to provide exceptional service. LillyBabe Agency is your trusted choice for premium companionship services in Chennai.
            </p>
        </div>
        </div>
      </section>

      {/* Section 18: Independent Chennai Escorts Detailed Profiles */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 INDEPENDENT CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We're proud to introduce you to our carefully curated collection of independent Chennai companions!</strong> Each companion is professionally selected for their elegance, intelligence, and commitment to providing exceptional service quality to ensure you have a memorable experience.
          </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/model-img-1.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Verified</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Popular</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Genuine Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Available for exclusive Chennai Escorts Service booking
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
          </div>
              <div className="flex gap-2">
                <a href="https://wa.me/918121426651" 
                   className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                  Book Now
                </a>
                <a href="#profiles-section" 
                   className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                  View Profile
                </a>
          </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/model-img-2.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">New</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">VIP</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">VIP Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Exclusive premium Chennai Escorts Service
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
          </div>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/models/model-img-3.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-semibold">Hot</span>
                <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">Trending</span>
            </div>
              <h3 className="text-xl font-bold text-white mb-2">Hot Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Highly popular & trending Chennai Escorts Service
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
              <div className="flex gap-2">
                <a href="https://wa.me/918121426651" 
                   className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                  Book Now
                </a>
                <a href="#profiles-section" 
                   className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                  View Profile
                </a>
            </div>
        </div>
          </div>
          </div>
          
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Our Most Special VIP Experience</h3>
            <p className="text-lg text-gray-300 mb-6">
              If you're looking for some amazing companionship on those long nights, our VIP Chennai companions are absolutely perfect for you! Take a look at these stunning Chennai Escorts from our exclusive collection - they're truly amazing! Choose a companion who radiates confidence and charm.
            </p>
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Book Your VIP Chennai Escort Now
            </a>
          </div>
        </div>
      </section>

      {/* Section 20: Who are the Best Chennai Escorts? */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 WHO ARE THE BEST CHENNAI ESCORTS? 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            <strong className="text-white">When it comes to finding the most amazing girls, we're so proud to say that LillyBabe has the most incredible selection!</strong> Whether you love blonde girls, brunettes, Asian beauties, or stunning Russian models - we've got the perfect companion for you! Plus, all our girls are not just beautiful - they're also super professional and experienced, so you'll always get the best service possible!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Stunning Beauty</h3>
            <p className="text-gray-300 text-center">
              Each of our Chennai Escort Girls is carefully chosen for their amazing looks and elegant style!
            </p>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
              </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Smart & Fun to Talk To</h3>
            <p className="text-gray-300 text-center">
              Our Chennai Escorts are well-educated and great conversationalists - perfect for engaging chats!
            </p>
            </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-2xl shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="h-8 w-8 text-white" />
          </div>
            <h3 className="text-xl font-bold text-white mb-4 text-center">Super Professional</h3>
            <p className="text-gray-300 text-center">
              Our Chennai Escorts Service girls are trained to handle everything with care and respect!
            </p>
          </div>
        </div>
             </section>

      {/* Section 21: Our Amazing Chennai Escorts Services */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR AMAZING CHENNAI ESCORTS SERVICES 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We've got so many wonderful types of girls for you to choose from!</strong> Each one is special in their own way, and we're sure you'll find the perfect companion for your needs!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
              <Image
                src="/images/1.jpg"
                alt="Hot Chennai Escort Girl"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Independent Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're so proud to serve many VIP clients throughout Chennai! Our beautiful Chennai Escort Girls are independent, classy, and absolutely stunning. They're not just pretty faces - they're amazing professionals who really care about making you happy!
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  With so many travelers and business people visiting Chennai, our wonderful independent Chennai Escorts have become super popular! They're perfect for elite clients who want the best experience possible! 🌟
                </p>
                <a href="#profiles-section" 
                   className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Meet Our Independent Girls!
                </a>
              </div>
              </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <Image
                src="/images/2.jpg"
                alt="Brunette woman posing in lingerie"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">High Profile Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Are you interested in seeing amazing photos of our premium Chennai companions? If yes, then you've come to the perfect place! We make it super easy and convenient for our clients to find exactly what they're looking for!
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Once you pick your perfect girl, she'll arrive at your location - whether it's a hotel or your apartment - within just one hour! Don't worry about anything - we've got you covered and everything will be perfect!
                </p>
                <a href="/escorts" 
                   className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  See High Profile Girls!
                </a>
            </div>
          </div>
        </div>
        
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
              <Image
                src="/images/3.jpg"
                alt="Woman with long blonde hair posing in lingerie"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">VIP Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Most of our amazing VIP Chennai companions come from the Hotel and Entertainment industry! They're not just professionals - they're also wonderful people who are looking for love and passion, just like you!
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Why keep dreaming when you can make it real? When you're in Chennai, hire a VIP escort from us and turn your fantasies into reality! You'll have so much fun with a playful Chennai Escort who can bring back the passion you thought was gone!
                </p>
                <a href="/escorts" 
                   className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  Meet VIP Girls!
                </a>
              </div>
          </div>
          
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
              <Image
                src="/images/4.jpg"
                alt="Woman with curves posing in lingerie"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Female Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Now that you know about our amazing Chennai Escorts Service and how we can bring wonderful Chennai Escort Girls to your location, you should have a great idea of the kind of beautiful female escorts we have! Our lovely Chennai Escorts are perfect for both men and women - no preferences at all!
                </p>
                <a href="/escorts" 
                   className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                  See Female Escorts!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 22: Additional Independent Escort Profiles */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 MORE INDEPENDENT CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We're proud to introduce you to our carefully curated collection of independent Chennai companions!</strong> Each companion is professionally selected for their elegance, intelligence, and commitment to providing exceptional service quality to ensure you have a memorable experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/model-img-4.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Verified</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Professional</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Professional Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Expert professional Chennai Escorts Service
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Professional Chennai Escort Girl with excellent Chennai Escorts Service
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">Professional</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Experienced</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Reliable</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/model-img-5.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">New</span>
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Fresh</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fresh Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                New stunning addition to our Chennai Escorts Service
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Fresh and new addition to our Chennai Escorts Service collection
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">New</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Fresh</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Available</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/models/model-3.webp"
              alt="Hot Independent Chennai Escort Girls"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold">Elite</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Luxury</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite Chennai Escort</h3>
              <p className="text-gray-300 text-sm mb-4 font-bold">
                Elite luxury Chennai Escorts Service companion
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-300 ml-2 font-bold">(5.0)</span>
            </div>
              <p className="text-gray-300 text-sm mb-4">
                Elite independent Chennai Escort Girl for luxury experiences
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">Elite</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Luxury</span>
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">Sophisticated</span>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Section 23: VIP Chennai Escorts with Background */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 VIP CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            <strong className="text-white">If you're looking for some amazing companionship on those long nights, our VIP Chennai companions are absolutely perfect for you!</strong> Take a look at these stunning Chennai Escorts from our exclusive collection - they're truly amazing! Choose a companion who radiates confidence and charm. Make sure to contact LillyBabe if you're in Chennai for a few days or a week, so we can plan a wonderful and memorable evening for you!
          </p>
          <a href="https://wa.me/918121426651" 
             className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <MessageCircle className="inline w-5 h-5 mr-2" />
            Book Your VIP Chennai Escort Now
          </a>
            </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-12 rounded-lg border-2 border-red-600 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="/images/background.jpg"
                alt="Genuine Chennai Escort Girls"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">🔥 GENUINE CHENNAI ESCORTS 🔥</h3>
              <h4 className="text-2xl font-bold text-white mb-4">VERIFIED CHENNAI ESCORT GIRLS</h4>
              <p className="text-lg text-gray-300 mb-8 font-bold">VERIFIED & AUTHENTIC CHENNAI ESCORTS SERVICE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 24: Client Testimonials */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 REAL STORIES FROM OUR CHENNAI ESCORTS CLIENTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're so proud to share what our amazing clients have to say about our Chennai Escorts Service!
          </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              "Wow! The booking process was so easy and the Chennai Escort Girl was exactly as described - even more beautiful in person! The whole experience was amazing and I can't wait to book again. Highly recommended!"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">R</span>
            </div>
              <div>
                <p className="font-semibold text-white">Rahul L.</p>
                <p className="text-sm text-gray-300">from Chennai</p>
          </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
              </div>
            <blockquote className="text-gray-300 mb-4 italic">
              "I was visiting Chennai for business and decided to try the Chennai Escorts Service. The girl was so professional and made such a great impression! She was smart, beautiful, and really made my trip special!"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <div>
                <p className="font-semibold text-white">Surya S.</p>
                <p className="text-sm text-gray-300">from Bangalore</p>
            </div>
          </div>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-gray-300 mb-4 italic">
              "I've tried many escort services, but the Chennai Escorts from LillyBabe are in a league of their own! The girl was not just beautiful but also incredibly caring and professional. Best experience ever!"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
            </div>
            <div>
                <p className="font-semibold text-white">Arjun K.</p>
                <p className="text-sm text-gray-300">from Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 25: Your Perfect Chennai Escorts Booking Guide */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 YOUR PERFECT CHENNAI ESCORTS BOOKING GUIDE 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our amazing team is here for you 24/7 to help with anything you need!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">1</span>
              </div>
            <h3 className="text-xl font-bold text-white mb-4">Say Hello to Us!</h3>
            <p className="text-gray-300">Just send us a WhatsApp message or give us a call - we're here anytime you need us!</p>
              </div>
            
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Pick Your Perfect Girl!</h3>
            <p className="text-gray-300">Take a look at our beautiful Chennai Escort Girls and choose the one who catches your eye!</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">3</span>
              </div>
            <h3 className="text-xl font-bold text-white mb-4">Tell Us the Details!</h3>
            <p className="text-gray-300">Just let us know where and when - we'll take care of everything else!</p>
            </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-white">4</span>
          </div>
            <h3 className="text-xl font-bold text-white mb-4">Have Fun & Pay Later!</h3>
            <p className="text-gray-300">Meet your amazing Chennai Escort and pay only when you're completely happy!</p>
        </div>
          </div>
          
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-2xl shadow-2xl border-2 border-red-600">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Available</p>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-2xl shadow-2xl border-2 border-red-600">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">5 Min</h3>
              <p className="text-gray-300">Response</p>
            </div>
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-2xl shadow-2xl border-2 border-red-600">
              <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">100%</h3>
              <p className="text-gray-300">Secure</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918121426651" 
               className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Book Your Chennai Escort Now
            </a>
            <a href="tel:+918121426651" 
               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="inline w-5 h-5 mr-2" />
              Call for Chennai Escorts
            </a>
          </div>
        </div>
      </section>

      {/* Section 28: Service Areas for Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 SERVICE AREAS FOR CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">We cover pretty much everywhere in Chennai - wherever you are, we've got girls nearby</strong>
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* T-Nagar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">T-Nagar</h3>
            <p className="text-gray-300 mb-3">Premium escort services in the shopping district</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">30 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Adyar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Adyar</h3>
            <p className="text-gray-300 mb-3">Luxury escort experiences in high-end neighborhood</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* OMR */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">OMR</h3>
            <p className="text-gray-300 mb-3">Corporate escort services in IT corridor</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">60 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Anna Nagar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Anna Nagar</h3>
            <p className="text-gray-300 mb-3">Professional escort services in residential hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">40 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* ECR */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">ECR</h3>
            <p className="text-gray-300 mb-3">Beachfront escort services along East Coast Road</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">75 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Kilpauk */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Kilpauk</h3>
            <p className="text-gray-300 mb-3">Budget-friendly escort services in central area</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Velachery */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Velachery</h3>
            <p className="text-gray-300 mb-3">Premium escorts in residential neighborhood</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">50 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Porur */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Porur</h3>
            <p className="text-gray-300 mb-3">Exclusive escort services for western suburb visitors</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">55 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Nungambakkam */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Nungambakkam</h3>
            <p className="text-gray-300 mb-3">High-profile escorts in upscale business district</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Mylapore */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Mylapore</h3>
            <p className="text-gray-300 mb-3">Cultured escort services in heritage-rich area</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">40 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Tambaram */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Tambaram</h3>
            <p className="text-gray-300 mb-3">Reliable escort services in southern suburb</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">65 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Pallavaram */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Pallavaram</h3>
            <p className="text-gray-300 mb-3">Quality escort services near the airport</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">70 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Guindy */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Guindy</h3>
            <p className="text-gray-300 mb-3">Premium escort services in educational hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Chrompet */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Chrompet</h3>
            <p className="text-gray-300 mb-3">Discreet and professional escort services</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">60 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Thoraipakkam */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Thoraipakkam</h3>
            <p className="text-gray-300 mb-3">Elite escort services in IT hub along OMR</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">55 mins</span>
              <a href="/escort-girls-t-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Besant Nagar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Besant Nagar</h3>
            <p className="text-gray-300 mb-3">Premium escort services in beachfront locality</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">50 mins</span>
              <a href="/escort-girls-besant-nagar" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Sholinganallur */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Sholinganallur</h3>
            <p className="text-gray-300 mb-3">High-quality escort services in IT hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/escort-girls-sholinganallur" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Medavakkam */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Medavakkam</h3>
            <p className="text-gray-300 mb-3">Professional escort services in residential area</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">55 mins</span>
              <a href="/escort-girls-medavakkam" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 29: Comprehensive FAQ Section - SEO + GEO Optimized */}
      <section id="faq" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 FREQUENTLY ASKED QUESTIONS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Got questions? We've got comprehensive answers!</strong> Here are the most common questions about our Chennai Escorts Service, answered in detail for your complete understanding.
          </p>
        </div>

        {/* Primary FAQ Grid - Optimized for both SEO and GEO */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* FAQ 1 - Service Overview */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              What makes LillyBabe the best Chennai escort service?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">LillyBabe is Chennai's most trusted escort service</strong> because we've got verified profiles, genuine photos, authentic reviews, 24/7 availability, and complete privacy. All our Chennai escorts are thoroughly vetted for safety and professionalism. We prioritize client satisfaction and maintain the highest standards of service quality in the industry.
            </p>
          </div>

          {/* FAQ 2 - Verification Process */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are all Chennai escorts on your site verified?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely! Every girl on our site is real</strong> - we've met them, talked to them, and checked their photos ourselves. No fake profiles, no old pictures, no BS. We make sure they're who they say they are, and we only work with girls who actually show up and deliver what they promise.
            </p>
          </div>

          {/* FAQ 3 - Service Areas */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              What areas in Chennai do you serve?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">We serve all major areas in Chennai</strong> including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, Mahabalipuram, Kilpauk, Guindy, and Mylapore. Our Chennai escorts are available throughout the city with convenient locations for meetings and companionship services, ensuring easy access from any part of Chennai.
            </p>
          </div>

          {/* FAQ 4 - Booking Process */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              How can I book a Chennai escort safely?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Booking is simple and secure.</strong> Contact us via phone or WhatsApp, discuss your requirements, and we'll arrange everything with complete privacy and discretion. All payments are handled safely, and we'll give you detailed information about our process to ensure a smooth experience.
            </p>
          </div>

          {/* FAQ 5 - Service Types */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              What types of Chennai escorts do you offer?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">We've got all types of girls</strong> - independent ones, Russian beauties, local Tamil girls, models, celebrities, younger ones, VIP types, and even housewives looking for some fun. Whatever you're into, we've probably got someone perfect for you. Each type brings something different to the table, so you can find exactly what you're looking for.
            </p>
          </div>

          {/* FAQ 6 - Privacy & Discretion */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Is my privacy guaranteed with Chennai escort service?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely. Complete privacy and discretion are our top priorities.</strong> All interactions are confidential, and we never share client information with anyone. Our Chennai escort service maintains strict confidentiality protocols to protect your privacy and ensure complete discretion.
            </p>
          </div>

          {/* FAQ 7 - Pricing */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              What are the rates for Chennai escorts?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Prices depend on what you're looking for and how long you want to hang out.</strong> We've got options for different budgets - from more affordable choices to premium VIP experiences. Just give us a call or message, and we'll tell you exactly what it costs. No hidden fees, no surprises - just straight-up pricing.
            </p>
          </div>

          {/* FAQ 8 - Availability */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are your Chennai escorts available 24/7?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Yes, our Chennai escort service operates 24/7.</strong> You can book appointments at any time, day or night, for immediate or advance bookings. Our customer support team is always available to assist with your Chennai escorts service needs and provide immediate assistance.
            </p>
          </div>
        </div>

        {/* Additional FAQ Section */}
        <div className="space-y-8">
          {/* FAQ 9 - Safety & Security */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              How do you ensure the safety and security of your Chennai escorts?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">We take the safety and security of our Chennai escorts very seriously!</strong> We've got strict protocols in place to protect their well-being and ensure your experience is completely safe and secure for everyone involved. All our escorts undergo thorough background checks and safety training.
            </p>
          </div>

          {/* FAQ 10 - Special Requests */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can I request specific preferences for my Chennai escort?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely!</strong> You can definitely request specific preferences for the Chennai escort you want to meet, such as age, ethnicity, and physical attributes. We want to make sure you find the perfect match for your Chennai escorts service experience!
            </p>
          </div>

          {/* FAQ 11 - Experience & Local Knowledge */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are your Chennai escorts experienced and knowledgeable about the local area?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Yes!</strong> Our Chennai escorts are super experienced and know all the best places in Chennai! They can provide amazing recommendations for places to visit and make your Chennai escorts service experience even more special with their local expertise.
            </p>
          </div>

          {/* FAQ 12 - Overnight & Travel Services */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Do your Chennai escorts offer overnight or travel companionship services?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely!</strong> Our Chennai escorts offer overnight and travel companionship services for clients who need longer-term arrangements. Our Chennai escorts service is flexible and designed to meet all your needs, whether for business trips or extended companionship.
            </p>
          </div>

          {/* FAQ 13 - Social Events */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are your Chennai escorts available for social events or parties?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Yes!</strong> Our Chennai escorts are perfect for accompanying you to social events or parties as your date. They're professional, charming, and will make your Chennai escorts service experience truly memorable at any social gathering.
            </p>
          </div>

          {/* FAQ 14 - Payment Methods */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              What payment methods do you accept for Chennai escort services?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">We accept various payment methods</strong> including cash, digital payments, and other secure payment options. All transactions are handled with complete discretion and security. Contact us to discuss the most convenient payment method for your Chennai escorts service booking.
            </p>
          </div>
        </div>
      </section>

      {/* Section 30: Additional FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 MORE FREQUENTLY ASKED QUESTIONS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Still have questions?</strong> Here are additional answers to help you understand our Chennai Escorts Service better.
          </p>
        </div>
        
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can I request specific preferences for the Chennai Escort Girl I want to meet?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely!</strong> You can definitely request specific preferences for the <strong className="text-white">Chennai Escort Girl</strong> you want to meet, such as age, ethnicity, and physical attributes. We want to make sure you find the perfect match for your <strong className="text-white">Chennai Escorts Service</strong> experience!
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are your Chennai Escort Girls experienced and knowledgeable about the local area?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Yes!</strong> Our <strong className="text-white">Chennai Escort Girls</strong> are super experienced and know all the best places in Chennai! They can provide amazing recommendations for places to visit and make your <strong className="text-white">Chennai Escorts Service</strong> experience even more special!
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Do your Chennai Escort Girls offer overnight or travel companionship services?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Absolutely!</strong> Our <strong className="text-white">Chennai Escort Girls</strong> offer overnight and travel companionship services for clients who need longer-term arrangements. Our <strong className="text-white">Chennai Escorts Service</strong> is flexible and designed to meet all your needs!
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              Are your Chennai Escort Girls available for social events or parties?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">Yes!</strong> Our <strong className="text-white">Chennai Escort Girls</strong> are perfect for accompanying you to social events or parties as your date. They're professional, charming, and will make your <strong className="text-white">Chennai Escorts Service</strong> experience truly memorable!
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">
              How do you ensure the safety and security of your Chennai Escort Girls?
            </h3>
            <p className="text-gray-300 text-lg">
              <strong className="text-white">We take the safety and security of our Chennai Escort Girls very seriously!</strong> We've got strict protocols in place to protect their well-being and ensure your experience is completely safe and secure for everyone involved.
            </p>
          </div>
        </div>
      </section>

      {/* Section 31: Useful Links & Final CTA */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Useful Links */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
              🔥 USEFUL LINKS 🔥
            </h2>
            
            <div className="space-y-8">
              {/* Main Links */}
              <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600">
                <h3 className="text-xl font-bold text-white mb-4">Main Pages</h3>
                <div className="grid grid-cols-1 gap-3">
                  <a href="/gallery" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    📸 Gallery
                  </a>
                  <a href="/service-area" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🗺️ Service Area
                  </a>
                  <a href="#faq" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    ❓ FAQ's
                  </a>
                  <a href="/contact-us" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    📞 Contact Us
                  </a>
                </div>
              </div>

              {/* Gallery Links */}
              <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600">
                <h3 className="text-xl font-bold text-white mb-4">Gallery Categories</h3>
                <div className="grid grid-cols-1 gap-3">
                  <a href="/teen-escorts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    👧 Teen Escorts
                  </a>
                  <a href="/housewife-escorts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    👩 HouseWife Escorts
                  </a>
                  <a href="/tamil-escorts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🎭 Tamil Escorts
                  </a>
                  <a href="/mallu-escorts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🌺 Mallu Escorts
                  </a>
                  <a href="/independent-escorts" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    💎 Independent Escorts
                  </a>
                </div>
              </div>

              {/* Service Area Links */}
              <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600">
                <h3 className="text-xl font-bold text-white mb-4">Service Areas</h3>
                <div className="grid grid-cols-1 gap-3">
                  <a href="/escort-girls-chennai" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🏙️ Chennai Escorts
                  </a>
                  <a href="/escort-girls-t-nagar" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🛍️ T-Nagar Escorts
                  </a>
                  <a href="/escort-girls-adyar" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🌊 Adyar Escorts
                  </a>
                  <a href="/escort-girls-ecr" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🏖️ ECR Escorts
                  </a>
                  <a href="/escort-girls-omr" className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-bold">
                    🏢 OMR Escorts
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 p-12 rounded-3xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience the Best Chennai Escorts?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients who trust LillyBabe for their Chennai Escorts Service needs. Your perfect companion is just a message away!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/918121426651?text=Hi%2C%20I%20am%20looking%20escorts%20service%20in%20chennai" 
               className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              <MessageCircle className="inline w-5 h-5 mr-2" />
              Start Chatting Now
            </a>
            <a href="#profiles-section" 
               className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 transform hover:-translate-y-1">
              View Today's Profiles
            </a>
          </div>
        </div>
          </div>
      </div>
      </section>
    </div>
  );
});

ContentSections.displayName = 'ContentSections';
