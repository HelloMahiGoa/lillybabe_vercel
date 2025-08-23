import { Shield, Clock, Users, Heart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Real Girls, Real People',
    description: 'We personally know every single girl - they\'re not just profiles, they\'re amazing people who genuinely care about making your time special.'
  },
  {
    icon: Clock,
    title: 'We\'re Here When You Need Us',
    description: 'Whether it\'s 2 AM or 2 PM, we\'re just a call away. Life doesn\'t follow a schedule, and neither do we!'
  },
  {
    icon: Shield,
    title: 'No Pressure, No Worries',
    description: 'We believe in trust - you only pay when you\'re completely satisfied. No advance payments, no hidden charges, just honest service.'
  },
  {
    icon: Heart,
    title: 'Quality That Speaks for Itself',
    description: 'We don\'t just say we\'re the best - our happy clients tell everyone about us. That\'s the kind of quality we\'re proud of!'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We're Not Just Another Agency - We're Your Friends!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Story Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Story</h3>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            "Let me tell you a little story about our Chennai Escorts Service. Back in 2010, we started with a simple idea - what if we could create a place where people could find genuine companionship without all the usual hassles? Fast forward to today, and LillyBabe has become more than just another Chennai Escorts agency - we're your friends who happen to be amazing companions. We don't just match you with beautiful Chennai Escorts; we connect you with real people who genuinely care about making your time special. No advance payments (because trust matters), only respectful clients (because respect is mutual), and complete discretion (because your privacy is sacred to us). We're not perfect, but we're real, and that's what makes our Chennai Escorts Service different."
          </p>
          <div className="text-center mt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Tell Me More
              </button>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                Let's Chat!
              </button>
              <button className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Today's Profiles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
