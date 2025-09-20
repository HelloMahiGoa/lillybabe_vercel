import Image from 'next/image';
import { memo } from 'react';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { CountdownTimer } from '@/components/ui/countdown-timer';

export const ContentSections = memo(() => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-red-600 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">🔥 REAL CHENNAI ESCORTS since 2010 🔥</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="text-red-500">HOT</span> CHENNAI <span className="text-red-500">ESCORTS</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 sm:mb-6 lg:mb-8">
            ⭐ #1 ESCORT SERVICE IN CHENNAI ⭐
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Would you like to see some wonderful escort girls in Chennai?</strong> We have the original thing - beautiful, entertaining, and they are there when they say they are! No bogus claims, no photo spreads - just real girls who are willing to hang out with you..
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
                🔥 WHY CHOOSE OUR CHENNAI ESCORTS WHEN OTHER AGENCIES ARE AVAILABLE? 🔥
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">🔥 REAL GIRLS, REAL PHOTOS</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">Here's the point - these girls we know! We have been introduced to them, had some conversation with them and even checked their photos. None of that fake profile business. No fake profiles, no surprises. What you see is what you get!</p>
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
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">We are not here to rob anybody. The only thing you pay is when you are really satisfied with the service. No upfront payments, no backdoor charges - pure and straightforward business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">🏆 GUYS KEEP COMING BACK TO US</h4>
                    <p className="text-gray-300 text-xs sm:text-sm lg:text-base">You know what's the real proof? Guys keep coming back! We do not just talk a lot - our frequent clients can testify that we can do what we say!</p>
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
              ⭐ GENUINE CHENNAI ESCORTS ⭐ | ⚡ 24/7 AVAILABLE ⚡ | 💯 100% SATISFACTION GUARANTEE 💯
            </p>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white">Chennai's got this amazing vibe, you know?</strong> It's where old meets new in the coolest way possible. The city's got character, it's got life, and honestly? It's the perfect place to meet some incredible people. That's where we come in - We fit in there, we have the best girls in town! and we all like to have fun!
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
                  <strong className="text-white">This is an amazing ability of our Chennai Escorts, who will make you feel that you are the most significant in the room </strong>. It is not only about appearance, it is about real care, attention and eventual contentment!
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                This is a wonderful atmosphere that they bring with them, their charisma, their seducing and their professionalism. You will feel easy, free, and so natural upon our first meeting.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                Each and every experience that we give with our escort service Chennai is made to be special and unique. Our encounters are never the same - that is our promise to you!
                </p>
            </div>
              <div className="mt-6 text-center">
                <p className="text-lg font-bold text-yellow-400">
                  🔥 After using our Chennai Escorts, you will understand why they all keep returning back to back! 🔥
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-gray-700 shadow-2xl">
          <p className="text-lg text-white leading-relaxed text-center">
          Our girls are not mere pretty faces, they are real people with personalities! They enjoy their work and they actually care about ensuring that you enjoy. They obtain Chennai, they obtain guys, and they understand how to make any situation enjoyable and easy-going. They can make every moment matter, whether you are seeking someone who is not attached or simply the best experience you will ever have.
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
            <strong className="text-white">You completely deserve the best Chennai Escorts - and that is what we are providing!</strong> ⭐
          </p>
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-2xl border-2 border-yellow-400">
            <h3 className="text-3xl font-black mb-4">🔥 EXPERIENCE THE MAGIC OF CHENNAI'S GENUINE ESCORTS 🔥</h3>
            <p className="text-xl mb-6">True life, true care, lifetime memories - that is what we promise you!</p>
            <div className="bg-yellow-500 text-black p-6 rounded-lg border-2 border-red-600">
              <p className="text-2xl font-black mb-4">🎉 SPECIAL DEAL: BOOK OUR CHENNAI ESCORTS WITHIN THE NEXT 30 MINUTES AND GET 10% OFF! 🎉</p>
              <CountdownTimer 
                initialMinutes={30} 
                className="mt-4"
                onComplete={() => {
                  console.log('Countdown completed - offer expired');
                }}
              />
              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/918121426651?text=Hi!%20I%20want%20to%20book%20a%20Chennai%20escort%20with%20the%2010%%20discount%20offer.%20Please%20send%20me%20available%20profiles%20and%20pricing%20details.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  📱 BOOK NOW ON WHATSAPP - GET 10% OFF!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold text-white mb-4">OUR AMAZING CHENNAI ESCORTS</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Need sexy escort girls in Chennai? We have this great pool of independent escorts that are not only beautiful but they are very eager to make your time memorable. They are actual individuals with actual personalities!</strong> 🔥
             </p>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-bold text-white mb-4">YOUR PRIVACY IS SACRED TO US</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">This is the difference between us</strong> - our girls are interested in you as a person, not merely another client. What you do is between you - we do not converse, we do not censure, we do not tell one another anything. We hold your privacy to be sacred, and you need only relax and have a good time! 🔒
            </p>
        </div>
        
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-white mb-4">GREAT PRICES, EVEN BETTER VALUE</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Here's the best part?</strong> The time can be great, but you need not spend the fortune! We have reasonable prices since we believe that all people should have a chance to have a good company and not to spend money on it. You do not need to break an arm and a leg to enjoy good times! 💰
            </p>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-white mb-4">BOOKING IS SUPER EASY!</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">It means that the process of booking our Chennai Escorts is as simple as ordering the phone!</strong> You just need to select your ideal partner among our fantastic escort girls, call us, and boom - you are ready to go! No complex procedures, no queueing. That way, before you know it, you will be hanging out with one of the greatest girls you would ever meet! 🚀
            </p>
            </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-4">WE'RE HERE WHEN YOU NEED US</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Life does not always provide you with warning, does it?</strong> That's totally fine with us! Although you might suddenly decide that you want to spend some time with our Chennai Escorts, all you need to do is to call us and we will do all we can to get it happening. We are your trusted friends that would always be there when you need them! ⚡
            </p>
              </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-xl font-bold text-white mb-4">MEMORIES THAT LAST FOREVER</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Be prepare to have the most amazing experiences that you will be telling about over the years!</strong> It is all about making moments which are even better than you had expected. That is what our Chennai Escorts Service is all about. You will be absolutely happy and most likely ready to plan your second adventure with us! It is our business to make you happy and that is what we do literally! 💖🔥
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
            <strong className="text-white">There was a time when our Chennai Escorts Service started...</strong> a little story I would like to tell you... It is not about business only, it is about developing real relationships and memorable experiences.
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
                 <strong className="text-white">You know what is special about us?</strong> It is not only about the material things but also about finding a person who understands you. And then our girls do this, to make you feel like you are out hanging with your best friend, your girlfriend or even a celebrity! They are not stunning models; they are humans with real personalities who really care about making you happy.
               </p>
          </div>
          
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🔒 YOUR SAFETY IS OUR PRIORITY</h4>
                  <p className="text-gray-300 leading-relaxed">
                 <strong className="text-white">I would like to tell you that when you have selected our Chennai Escorts, you have also selected safety and professionalism.</strong> We are very selective in picking up each girl - they are healthy, well-educated and not under the influence of drugs. On top of that, they are trained to be self-assured and attractive, and any time they spend with them is pure magic. No empty promises, only true experience!
               </p>
            </div>
            
                <div>
                  <h4 className="text-lg font-bold text-white mb-3">🌟 WONDERFUL GIRLS WITH WONDERFUL TALES</h4>
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">It is the neat thing here, though, our girls are not mere escorts!</strong> - Others are dancers, fitness trainers, tutors or even future actresses and models. They are actual persons with actual aspirations, and they are so much to be around. They will make any moment special whether you are going to a dinner, a business meeting, or even having to have quality time together. They are intelligent, outgoing and sincerely loving - you will feel as though you have known them long enough!
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
        </div>
      </section>

      {/* Section 13: Our Amazing Chennai Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 OUR AMAZING CHENNAI ESCORTS 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We offer different types of companions to suit various preferences. Each category represents a different style and personality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/teen.webp"
                alt="Teen Escorts in Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
              />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Teen Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Young and energetic companions</p>
              <a href="/teen-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
              </div>
              </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/housewife.webp"
              alt="Housewife Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Housewife Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Mature and understanding companions</p>
              <a href="/housewife-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/russian1.webp"
              alt="Russian Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Russian Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">International beauty and charm</p>
              <a href="/russian-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
              </div>
            </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/independent.jpg"
              alt="Independent Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Independent Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Self-reliant and confident companions</p>
              <a href="/independent-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
          </div>
        </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/tamil.webp"
              alt="Tamil Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Tamil Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Local beauty and cultural charm</p>
              <a href="/tamil-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
          </div>
          </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/celebrity.webp"
              alt="Celebrity Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Celebrity Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">High-profile and glamorous companions</p>
              <a href="/celebrity-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
          </div>
        </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
              <Image
              src="/images/mallu.webp"
              alt="Mallu Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Mallu Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Natural beauty and traditional charm</p>
              <a href="/mallu-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
            </div>
              </div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300 transform hover:-translate-y-2">
            <Image
              src="/images/model.webp"
              alt="Model Escorts Chennai"
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Model Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Fashion models and stylish companions</p>
              <a href="/model-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm">View Collection →</a>
            </div>
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
              <a href="/t-nagar-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Adyar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Adyar</h3>
            <p className="text-gray-300 mb-3">Luxury escort experiences in high-end neighborhood</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/adyar-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* OMR */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">OMR</h3>
            <p className="text-gray-300 mb-3">Corporate escort services in IT corridor</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">60 mins</span>
              <a href="/omr-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Anna Nagar */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Anna Nagar</h3>
            <p className="text-gray-300 mb-3">Professional escort services in residential hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">40 mins</span>
              <a href="/anna-nagar-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* ECR */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">ECR</h3>
            <p className="text-gray-300 mb-3">Beachfront escort services along East Coast Road</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">75 mins</span>
              <a href="/ecr-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Kilpauk */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Kilpauk</h3>
            <p className="text-gray-300 mb-3">Budget-friendly escort services in central area</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/kilpauk-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Nungambakkam */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Nungambakkam</h3>
            <p className="text-gray-300 mb-3">High-profile escorts in upscale business district</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">35 mins</span>
              <a href="/nungambakkam-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Guindy */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Guindy</h3>
            <p className="text-gray-300 mb-3">Premium escort services in educational hub</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">45 mins</span>
              <a href="/guindy-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
            </div>
          </div>

          {/* Teynampet */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-lg shadow-2xl border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Teynampet</h3>
            <p className="text-gray-300 mb-3">Exclusive escort services in business district</p>
            <div className="flex items-center justify-between">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">25 mins</span>
              <a href="/teynampet-escorts" className="text-yellow-400 hover:text-yellow-300 font-bold">View Area</a>
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
    </div>
  );
});

ContentSections.displayName = 'ContentSections';
