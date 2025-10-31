import Image from 'next/image';
import { memo, useState } from 'react';
import { Star, Shield, Clock, Users, MapPin, Heart, Crown, Sparkles, CheckCircle, Phone, MessageCircle, Award, Globe, Zap, Mail } from 'lucide-react';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';

type PaymentTabKey = 'incall' | 'outcall';

const SESSION_PRICING = [
  { label: '1 Session', amount: '₹10,000 – ₹15,000' },
  { label: '2 Sessions', amount: '₹20,000 – ₹30,000' },
  { label: '3 Sessions', amount: '₹30,000 – ₹45,000' },
  { label: 'Full Night', amount: '₹35,000 – ₹50,000' },
] as const;

const PAYMENT_TAB_CONFIG: Record<
  PaymentTabKey,
  {
    label: string;
    subtitle: string;
    description: string;
    icon: typeof Users;
    highlights: string[];
    notes: { text: string; emphasis?: boolean }[];
  }
> = {
  incall: {
    label: 'Incall',
    subtitle: 'Cosy city suites',
    description: 'Step into our private, city-based suites that are cleaned, prepped, and set to your comfort before you arrive.',
    icon: Users,
    highlights: ['Cosy private lounges', 'Pay after you meet the girl and are satisfied'],
    notes: [
      { text: 'Suites are sanitized, scented, and aired out shortly before you walk in.' },
      { text: 'You settle the fee only when you meet the girl and are satisfied.' },
      { text: 'Snacks, bottled water, or softer lighting can be arranged with a quick heads-up.' },
      { text: 'Need extra time? Tell us earlier in the day so we can hold the next slot.' },
      { text: 'Your host will guide you in quietly and slip out once you’re comfortable.' },
    ],
  },
  outcall: {
    label: 'Outcall',
    subtitle: 'Hotel & home visits',
    description: 'Prefer meeting at your hotel room or home? We’ll reach you anywhere in Chennai with a quick confirmation on WhatsApp.',
    icon: MapPin,
    highlights: ['Flexible citywide timing', 'Trusted escorts on the go'],
    notes: [
      { text: 'Outcall: + Cab Charges', emphasis: true },
      { text: 'Trips over 10 km need the cab fare upfront so we can book the ride.', emphasis: true },
      { text: 'Please confirm your hotel reception allows guest entry with valid ID.' },
      { text: 'Late-night and rush-hour rides may cost a little extra for travel.' },
      { text: 'We text you the driver and companion ETA before they head your way.' },
    ],
  },
};

const PAYMENT_TAB_ENTRIES = Object.entries(PAYMENT_TAB_CONFIG) as Array<[
  PaymentTabKey,
  (typeof PAYMENT_TAB_CONFIG)[PaymentTabKey]
]>;

export const ContentSections = memo(() => {
  const [activePaymentTab, setActivePaymentTab] = useState<PaymentTabKey>('incall');
  const activePaymentContent = PAYMENT_TAB_CONFIG[activePaymentTab];
  const ActivePaymentIcon = activePaymentContent.icon;

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-gray-900">
      {/* Section 1: Chennai Escorts Service Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 lg:mb-24">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-1 sm:gap-2 bg-red-600 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="text-white font-bold text-sm sm:text-base lg:text-lg">🔥 REAL CHENNAI ESCORTS since 2010 🔥</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="text-red-500">HOT</span> CHENNAI <span className="text-red-500">ESCORTS</span>
          </h2>
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

      {/* Section 3: Chennai Escorts Services Details */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🌟 Chennai Escorts Whenever You Want Them
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At present, we have a great number of girls working with us and the list is growing day by day. Girls of other regions are flocking to us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">🏙️ Operating Across Chennai</h3>
            <p className="text-gray-300 leading-relaxed">
              We are becoming reachable and currently we are operating at every corner of the city. This means that all services could be availed and also we are providing various services with great flexibility of time.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-red-600">
            <h3 className="text-2xl font-bold text-white mb-4">⏰ Quick & Flexible Service</h3>
            <p className="text-gray-300 leading-relaxed">
              You have only 2-3 hours to spend and you want to enjoy to the fullest? A lot of hot and erotic escorts are available at very cheap prices. They would be able to arrive at your place and provide you service. Nevertheless, these sexy and free Chennai escorts will accommodate you to your fantasies and desires.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center">
            🔥 Chennai Escorts Types Offered by LillyBabe
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-yellow-500">
              <h3 className="text-2xl font-bold text-white mb-4">🏢 Agency Escorts</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our company is one of the most rigorous escort agencies. We provide befitting girls with high privacy levels and secrecy. Our escorts are well behaved and it will not be any sort of an adventure. Everything that is important as far as safety is concerned is here.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Girls in various regions of the world and India are also operational, and they provide brilliant service to the client.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-blue-500">
              <h3 className="text-2xl font-bold text-white mb-4">👩 Independent Escorts</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                These escorts in Chennai are not related to an agency. They make direct deals with the client. It will bring a certain danger, it will take away your pleasure time. Independent escort services have become a lot of fraud cases.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Yet we have some independent Chennai escorts as well in our contact and that would be ideal in case you wish to use an independent girl.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg shadow-2xl border-2 border-gray-500">
              <h3 className="text-2xl font-bold text-white mb-4">⚠️ Roadside Escorts (Not Recommended)</h3>
              <p className="text-gray-300 leading-relaxed">
                These girls are local girls or privileged girls who live along the road. Such girls are not that of classy people. They are bad-tempered using an abusive language and bad minds. They are not good service providers but greedy in nature. <strong className="text-yellow-400">We strongly recommend choosing our agency or verified independent escorts instead.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.5: Google Trusted Chennai Escorts Service Provider */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-gradient-to-r from-purple-500 to-blue-500">
          <div>
            {/* Section Image */}
            <div className="p-4 lg:p-8">
              <img 
                src="/images/banners/10.png" 
                alt="Chennai Escorts Service Trusted by Google" 
                className="w-full h-auto object-contain rounded-2xl border border-white/20 shadow-2xl bg-black/20"
              />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 rounded-full mb-6 shadow-lg">
                  <span className="text-2xl">🔍</span>
                  <span className="text-black font-black text-lg">GOOGLE TRUSTED</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Google Trusted Chennai Escorts Service Provider.
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-200 leading-relaxed text-lg mb-6">
                  You have to search us in Google in order to book with us and all you have to do is, search in search engine, <strong className="text-yellow-400">reputable chennai escorts services</strong> in search bar. And find our site <strong className="text-yellow-400">lillybabe.com</strong> and decide who can be available today and press the call or WhatsApp button and contact us. And that is how you will be in easy position to book our today available escort girls in Chennai to have sexual fun. The list of all profiles on our site is real and authentic with pictures that could have been recently clicked.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Perfect Chennai Escorts Booking Guide */}
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
        </div>
      </section>

      {/* Section 3.6: Book a Date with PRO and Elite Escorts */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 rounded-3xl shadow-2xl overflow-hidden border-2 border-red-500">
          <div className="p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                💎 Book a Date with PRO and Elite Escorts in Chennai
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 leading-relaxed text-lg mb-8 text-center max-w-4xl mx-auto">
                Everyman prefers to have good and romantic moments with the female counterpart. Who would nurture them, indulge them, love them, pleasure them, satisfy their sexual desires, and so on? This is when it is high time you make your life so colorful with Chennai Escorts Service. And girls of our agency will offer to you a mesmerizing pleasure that will never be forgotten in your life. Book your escorts and solidify your date with our top-ranking and youthful hot babes. Should there be nowhere where you can spend your sensual night then come with our agency dear. Our professional Call Girl in Chennai is therefore waiting. It offers the cheapest and the most realistic price escort service hence when are you coming to take it.
              </p>

              <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-400/30">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 text-center">
                  🎉 Perfect for Bachelor Parties
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  These have become the days of bachelor parties where a large number of local adults are searching that kind of call girl agency that offer the kind of call girls that love this type of party. With <strong className="text-yellow-400">LillyBabe</strong>, you can receive even the best services of call girls in Chennai and at the same time you receive high-end facilities. Concisely, our call girls will be the ideal female partner in case you are seeking love and romance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3.7: Tab Wise Payment Details */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-br from-gray-950 via-red-900/60 to-black rounded-3xl shadow-2xl border border-yellow-500/20 overflow-hidden">
          <div className="p-8 lg:p-12 space-y-12">
            <div className="text-center space-y-5">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Incall &amp; Outcall Payment's
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Tap between the tabs to see how the sessions work, what to expect on the day, and the little extras we’ve lined up so you can book with confidence.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4" role="tablist" aria-label="Payment options">
              {PAYMENT_TAB_ENTRIES.map(([key, config]) => {
                const Icon = config.icon;
                const isActive = key === activePaymentTab;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="payment-tab-panel"
                    className={`group flex items-center gap-4 rounded-full border px-6 py-3 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                      isActive
                        ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-yellow-300 shadow-xl shadow-yellow-500/40'
                        : 'bg-white/5 border-white/10 text-gray-200 hover:border-yellow-300/60 hover:text-yellow-200'
                    }`}
                    onClick={() => setActivePaymentTab(key)}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-200 ${
                        isActive
                          ? 'bg-black/20 text-black'
                          : 'bg-yellow-500/10 text-yellow-300 group-hover:text-yellow-200'
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-yellow-300'}`} />
                    </span>
                    <div className="text-left leading-tight">
                      <span className="block text-base font-semibold">{config.label}</span>
                      <span
                        className={`block text-sm ${
                          isActive ? 'text-black/80' : 'text-gray-400 group-hover:text-yellow-100/90'
                        }`}
                      >
                        {config.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              id="payment-tab-panel"
              role="tabpanel"
              aria-live="polite"
              className="grid gap-10 lg:grid-cols-[1fr,1.1fr] items-start"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 text-black shadow-lg">
                    <ActivePaymentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {activePaymentContent.label} Experience
                    </h3>
                    <p className="text-gray-300 mt-3 leading-relaxed">
                      {activePaymentContent.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {activePaymentContent.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-yellow-400/40 bg-yellow-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-yellow-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="mt-8 space-y-3">
                  {activePaymentContent.notes.map((note) => (
                    <div key={note.text} className="flex items-start gap-3">
                      <CheckCircle className="mt-1 h-5 w-5 text-yellow-300" />
                      <span
                        className={`text-base leading-relaxed ${
                          note.emphasis ? 'text-yellow-200 font-semibold' : 'text-gray-200'
                        }`}
                      >
                        {note.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/80 via-red-800/70 to-red-900/80 rounded-3xl border border-red-500/40 p-8 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
                  <h3 className="text-2xl font-bold text-white">Session Pricing</h3>
                </div>

                <div className="space-y-4">
                  {SESSION_PRICING.map((tier) => (
                    <div
                      key={tier.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4 shadow-lg shadow-black/30"
                    >
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/40 text-xl font-bold text-yellow-200">
                          ₹
                        </span>
                        <span className="text-lg font-semibold text-white">{tier.label}</span>
                      </div>
                      <span className="text-xl font-bold text-yellow-300">{tier.amount}</span>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-center text-sm text-gray-300">
                  These figures give you a realistic idea of what to set aside. Your WhatsApp chat will confirm the exact amount along with any travel add-ons if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Pool Party & Pre-Booking Services */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* All Content on Left */}
            <div className="p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6">
                🎉 Get Pool Party Partner with LillyBabe
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    The modern girl is aware and cognizant of the emotions and wishes of a respectable individual. Such high-class Chennai escorts are wonderful with you in any pool party. Pubs and discos should also be the partner of them. They are fond of drinking, dancing and having fun. You can have after-night parties and evenings out with these hot chicks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">📅 The Pleasure of Pre-Booking Without an Advance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We also want the preference of our clients, hence we are providing this facility to all clients. It is not just to the old or the new. It is possible to pre-book these girls without being charged any advance. Classy escorts in Chennai are available to be employed by classy men. We have trust in our clients and our clients trust in us. This is a facility enjoyed following the observation of fraud in the market. A lot of fraudsters are engaging in malpractices of taking money and failing to deliver the service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">💰 By Way of Giving Cash Payment, In-Call and Out-Call Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You may select any of the choices based on the availability of your date and time. Provision of any of the services as may happen. Nonetheless, the two services are extremely pleasant when you are around these hot Chennai girls. They will turn any moment interesting and beautiful. The girls also can be paid in cash after service.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">🔥 Fuck Me Worse Like You Despise Me</h3>
                  <p className="text-gray-300 leading-relaxed">
                    An actual sex-lover will always love fuck a girl very hard. They enjoy to force the girl during the act of sexual intercourse. During the time you will be able to dominate her and the Chennai escort girl will also submit to you as she will do her best to be dominated by you. These girls enjoy to be controlled by the client and would like to give them the best session that would provide maximum satisfaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Single Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/7.jpg"
                alt="Pool Party Partner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits with Our Chennai Escorts Agency */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 BENEFITS WITH OUR CHENNAI ESCORTS AGENCY 🔥
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            <strong className="text-white">They can turn you into sexual desirability whenever you engage with our girls in a sexual encounter, owing to their sexy moves.</strong> Otherwise, they are polite well behaved, and know all the proper manners.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content on Left */}
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">We have prepared a unique list of chennai sexy escorts who will satisfy you with erotic services.</strong> Experience happy permanent Chennai escort services and the next morning you will feel full of energy. Say goodbye to all your fatigue and boredom by using the erotic services of our hot escorts.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">As we are the top escort service in Chennai, we have a team of raunchy escorts who are well trained and experienced</strong> to ensure that their customers feel satisfied physically. Further, an ideal and healthy body enables escort ladies to demonstrate any sex form without difficulties.
                  </p>
                </div>

                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">LillyBabe has unlocked the gateway leading to the erotic world and it is open to those ready to have a true erotic experience.</strong> The agency offers the most desirable Chennai escorts whose sexual satisfaction is guaranteed; otherwise, we will refund your money without any additional remarks.
                  </p>
                </div>

                <div className="bg-red-800 p-6 rounded-lg border border-red-600">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">
                    🎯 Our escorts have innumerable benefits of hiring a Chennai Call girl, they are listed below:
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>You will receive high profile Chennai escort profiles.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>Money-back guarantee when there is sexual dissatisfaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>Escorts girls with affordable cost.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>Best Chennai escort service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>VIP Chennai escort girls.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-400 font-bold">•</span>
                      <span>and many more</span>
                    </li>
                  </ul>
                  <p className="text-gray-300 mt-4 font-bold">
                    <strong className="text-white">The benefits provided above suffice to have your dream call girl hired by LillyBabe.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/9.jpg"
                alt="Benefits with Our Chennai Escorts Agency"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: What is Special About LillyBabe Being an Escort Agency */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            🔥 WHAT IS SPECIAL ABOUT LILLYBABE BEING AN ESCORT AGENCY? 🔥
          </h2>
          <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 space-y-4">
            <p>
              <strong className="text-white">LillyBabe is a brand that belongs to the quality of the escort agency.</strong> Our agency is highly reputed in giving promises to services that it offers in order to satisfy the needs of smart customers. We possess numerous professional girls that would put your sexual desires to rest upon the art of sexual love.
            </p>
            <p>
              Whatever you desire to dine out or spend time in your hotel suite with your escort girl, our girls will fit in. The following are some of the key characteristics that qualify us to be a top recommendation to any female seeker.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content on Left */}
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    🔥 Hot and Sexy Shape All the Time
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">We possess an immense number of young and beautiful call girls, which are with hot and sexy figure, which spell binds you.</strong> As completely chiseled shapes, fit bodies and assertive means, they are the true meaning of sexuality and attraction.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    You want slim and model-like or the curvy, sexy female partner, our girls do meet all the requirements with grace and sophistication. Their alluring looks coupled with the beautiful coolness and seductive excitement make them the ideal choice on a date when one wants to have a night full of passion, pleasure and memorable experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    ✨ Clean and Welcoming Character of Each Profile
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    <strong className="text-white">Our neat and amiable girl companion is the perfect combination of physical attractiveness, summer, and style.</strong> They uphold the best principles of hygiene, care and personal hygiene to make sure that your experience is not only good, but also safe and fresh.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    A friendly smile, good attitude and the natural talent to make you feel at home, they make you have a calming and easy feel as early as the first impression. Be it physical attractiveness in speech or physical companionship, they are well behaved, pleasant and polite, which indeed ensures enjoyable and stress free time.
                  </p>
                </div>
              </div>
            </div>

            {/* Image on Right */}
            <div className="relative h-80 lg:h-full min-h-[600px]">
              <Image
                src="/images/banners/8.jpg"
                alt="LillyBabe Escort Agency Special Features"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Chennai Escorts Services - What People Think */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        {/* First Row: Image Left, Content Right */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="/images/banners/5.jpg"
                  alt="Beautiful Chennai Escort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  What Should People Consider Before Hiring Chennai Escorts?
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    Needless to say, individuals like safety, health and privacy. Each of the three points precedes all the other points. <strong className="text-white">Agency escorts then is the way to go</strong> in terms of enjoying the whole thing in a stress free atmosphere.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    We are providing much erotic Chennai escorts to deliver the best to our customers. These are educated and well behaved escorts. They are also trained to provide the excellent experience to our high-end clients.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    In case you are availing our service, then be sure of full enjoyment without pressure and strain since all girls are registered with us and their background is also known.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Content Left, Image Right */}
        <div>
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
                <Image
                  src="/images/banners/6.jpg"
                  alt="Beautiful Chennai Escort"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  Live Every Single Moment in the Company of a Gorgeous Chennai Escort Service
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Girls with wild moves and tricks are dying to serve you extraordinarily</strong> with their eagerness here. Most of the Chennai escorts have very sexy shapes and they are bidding you fare.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    The number of individuals based in various cities of India who work here is on extremely hectic schedules. They lack time to have fun.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    However, now they will be able to have any moment they wish to spend together with our <strong className="text-white">beautiful, classy and erotic escorts</strong>. They are incredibly good friends. <strong className="text-yellow-400">Lose all and everything and enjoy the lust.</strong>
                  </p>
                </div>
              </div>
            </div>
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
            🔥 HAVE A MATCHLESS CHENNAI ESCORTS 🔥
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
          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/teen.webp"
                alt="Teen Escorts in Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Teen Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Young and energetic companions</p>
              <a href="/teen-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/housewife.webp"
                alt="Housewife Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Housewife Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Mature and understanding companions</p>
              <a href="/housewife-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/russian1.webp"
                alt="Russian Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Russian Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">International beauty and charm</p>
              <a href="/russian-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/independent.jpg"
                alt="Independent Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Independent Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Self-reliant and confident companions</p>
              <a href="/independent-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/tamil.webp"
                alt="Tamil Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Tamil Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Local beauty and cultural charm</p>
              <a href="/tamil-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/celebrity.webp"
                alt="Celebrity Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Celebrity Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">High-profile and glamorous companions</p>
              <a href="/celebrity-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/mallu.webp"
                alt="Mallu Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Mallu Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Natural beauty and traditional charm</p>
              <a href="/mallu-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-xl shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-400 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl">
            <div className="relative overflow-hidden">
              <Image
                src="/images/model.webp"
                alt="Model Escorts Chennai"
                width={300}
                height={200}
                className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Model Escorts</h3>
              <p className="text-gray-300 text-sm mb-4">Fashion models and stylish companions</p>
              <a href="/model-escorts-in-chennai" className="text-yellow-400 hover:text-yellow-300 font-bold text-sm transition-colors duration-300">View Collection →</a>
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
        
        <div className="space-y-8">
          {/* Card 1 - Image Left, Text Right */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
              <Image
                  src="/images/banners/1.avif"
                alt="Hot Chennai Escort Girl"
                  fill
                  className="object-cover"
              />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">Independent Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We're so proud to serve many VIP clients throughout Chennai! Our beautiful Chennai Escort Girls are independent, classy, and absolutely stunning. They're not just pretty faces - they're amazing professionals who really care about making you happy!
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With so many travelers and business people visiting Chennai, our wonderful independent Chennai Escorts have become super popular! They're perfect for elite clients who want the best experience possible! 🌟
                </p>
              </div>
              </div>
              </div>

          {/* Card 2 - Text Left, Image Right */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
            <Image
                  src="/images/banners/2.avif"
                alt="Brunette woman posing in lingerie"
                  fill
                  className="object-cover"
              />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">High Profile Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Are you interested in seeing amazing photos of our premium Chennai companions? If yes, then you've come to the perfect place! We make it super easy and convenient for our clients to find exactly what they're looking for!
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Once you pick your perfect girl, she'll arrive at your location - whether it's a hotel or your apartment - within just one hour! Don't worry about anything - we've got you covered and everything will be perfect!
                </p>
            </div>
          </div>
        </div>
        
          {/* Card 3 - Image Left, Text Right */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96">
              <Image
                  src="/images/banners/3.avif"
                alt="Woman with long blonde hair posing in lingerie"
                  fill
                  className="object-cover"
              />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-4">VIP Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Most of our amazing VIP Chennai companions come from the Hotel and Entertainment industry! They're not just professionals - they're also wonderful people who are looking for love and passion, just like you!
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Why keep dreaming when you can make it real? When you're in Chennai, hire a VIP escort from us and turn your fantasies into reality! You'll have so much fun with a playful Chennai Escort who can bring back the passion you thought was gone!
                </p>
              </div>
              </div>
          </div>
          
          {/* Card 4 - Text Left, Image Right */}
            <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg shadow-2xl overflow-hidden border-2 border-red-600 hover:border-red-500 transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-80 lg:h-96 order-2 lg:order-2">
              <Image
                  src="/images/banners/4.avif"
                alt="Woman with curves posing in lingerie"
                  fill
                  className="object-cover"
              />
              </div>
              <div className="p-8 flex flex-col justify-center order-1 lg:order-1">
                <h3 className="text-2xl font-bold text-white mb-4">Female Chennai Escorts</h3>
                <p className="text-gray-300 leading-relaxed">
                  Now that you know about our amazing Chennai Escorts Service and how we can bring wonderful Chennai Escort Girls to your location, you should have a great idea of the kind of beautiful female escorts we have! Our lovely Chennai Escorts are perfect for both men and women - no preferences at all!
                </p>
              </div>
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

      {/* FAQ Section - Unified & Redesigned */}
      <section id="faq" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            ❓ FREQUENTLY ASKED QUESTIONS ❓
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Got questions? We've got answers!</strong> Everything you need to know about our Chennai Escorts Service.
          </p>
        </div>

        {/* FAQ Accordion Style Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* FAQ 1 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              What makes LillyBabe the best Chennai escort service?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">LillyBabe is Chennai's most trusted escort service</strong> with verified profiles, genuine photos, 24/7 availability, and complete privacy. All escorts are thoroughly vetted for safety and professionalism.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              Are all Chennai escorts on your site verified?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely! Every girl is real</strong> - we've met them, talked to them, and checked their photos. No fake profiles, no old pictures. We ensure they're who they say they are.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              What areas in Chennai do you serve?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We serve all major areas</strong> including Anna Nagar, T. Nagar, OMR, ECR, Nungambakkam, Adyar, Kilpauk, Guindy, and Mylapore. Escorts are available throughout the city.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              How can I book a Chennai escort safely?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Booking is simple and secure.</strong> Contact us via phone or WhatsApp, discuss your requirements, and we'll arrange everything with complete privacy and discretion.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              What types of Chennai escorts do you offer?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We've got all types</strong> - independent, Russian beauties, Tamil girls, models, celebrities, VIP, and housewives. Whatever you're into, we've got the perfect match.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 6 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Is my privacy guaranteed?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely! Complete privacy is our top priority.</strong> All interactions are confidential, and we never share client information with anyone.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 7 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              What are the rates for Chennai escorts?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Prices vary based on your preferences and duration.</strong> We offer options from affordable to premium VIP experiences. Contact us for detailed pricing.
            </p>
              </div>
            </div>
          </div>

          {/* FAQ 8 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
              Are your Chennai escorts available 24/7?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes! Our service operates 24/7.</strong> You can book appointments at any time, day or night, for immediate or advance bookings.
            </p>
          </div>
        </div>
          </div>

          {/* FAQ 9 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
          </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  How do you ensure safety and security?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">We take safety very seriously!</strong> We have strict protocols in place to protect everyone's well-being. All escorts undergo thorough background checks.
            </p>
          </div>
          </div>
          </div>

          {/* FAQ 10 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Can I request specific preferences?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely!</strong> You can request specific preferences like age, ethnicity, and physical attributes. We'll find the perfect match for your experience!
            </p>
          </div>
        </div>
        </div>
        
          {/* FAQ 11 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
          </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Do you offer overnight or travel services?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Yes!</strong> Our escorts offer overnight and travel companionship services for clients who need longer-term arrangements or business trips.
            </p>
          </div>
          </div>
          </div>

          {/* FAQ 12 */}
          <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-900 p-6 rounded-xl shadow-xl border border-red-600 hover:border-yellow-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-500 rounded-full p-2 flex-shrink-0 mt-1">
                <span className="text-black font-bold text-lg">?</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Are escorts available for social events?
            </h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Absolutely!</strong> Our escorts are perfect for accompanying you to social events or parties. They're professional, charming, and will make your experience memorable!
            </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
ContentSections.displayName = 'ContentSections';

