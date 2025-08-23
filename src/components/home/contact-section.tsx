import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call',
    value: '+91 98765 43210',
    description: '24/7 Available'
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@lillybabe.com',
    description: 'Quick Response'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Chennai, Tamil Nadu',
    description: 'Multiple Areas'
  },
  {
    icon: Clock,
    title: 'Availability',
    value: '24/7 Service',
    description: 'Always Here for You'
  }
];

export const ContactSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to experience the best Chennai escorts service? Contact us today and let us help you find the perfect companion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-xl text-gray-700 font-medium">{info.value}</p>
                      <p className="text-gray-600">{info.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Badge */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-xl text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-pink-300" />
                </div>
                <div>
                  <h4 className="font-semibold">Trusted Service</h4>
                  <p className="text-gray-300 text-sm">Verified and safe escorts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="flex-1 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Send Message
                </Button>
                <Button variant="outline" className="flex-1 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
