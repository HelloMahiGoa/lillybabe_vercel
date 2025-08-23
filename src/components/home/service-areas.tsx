import { MapPin, Clock, Star } from 'lucide-react';

const serviceAreas = [
  {
    name: 'T-Nagar',
    description: 'Premium escort services in the shopping district',
    time: '30 mins',
    features: ['Shopping District', 'Premium Services', 'Central Location']
  },
  {
    name: 'Adyar',
    description: 'Luxury escort experiences in high-end neighborhood',
    time: '45 mins',
    features: ['High-End Area', 'Luxury Experiences', 'Exclusive Services']
  },
  {
    name: 'OMR',
    description: 'Corporate escort services in IT corridor',
    time: '60 mins',
    features: ['IT Corridor', 'Corporate Services', 'Professional Companions']
  },
  {
    name: 'Anna Nagar',
    description: 'Professional escort services in residential hub',
    time: '40 mins',
    features: ['Residential Hub', 'Professional Services', 'Family-Friendly']
  },
  {
    name: 'ECR',
    description: 'Beachfront escort services along East Coast Road',
    time: '75 mins',
    features: ['Beachfront', 'Scenic Views', 'Relaxing Atmosphere']
  },
  {
    name: 'Kilpauk',
    description: 'Budget-friendly escort services in central area',
    time: '35 mins',
    features: ['Central Area', 'Budget-Friendly', 'Convenient Location']
  },
  {
    name: 'Velachery',
    description: 'Premium escorts in residential neighborhood',
    time: '50 mins',
    features: ['Residential Area', 'Premium Services', 'Discreet Location']
  },
  {
    name: 'Porur',
    description: 'Exclusive escort services for western suburb visitors',
    time: '55 mins',
    features: ['Western Suburb', 'Exclusive Services', 'Premium Location']
  },
  {
    name: 'Nungambakkam',
    description: 'High-profile escorts in upscale business district',
    time: '35 mins',
    features: ['Upscale District', 'High-Profile', 'Business Area']
  },
  {
    name: 'Mylapore',
    description: 'Cultured escort services in heritage-rich area',
    time: '40 mins',
    features: ['Heritage Area', 'Cultural Experience', 'Traditional Charm']
  },
  {
    name: 'Tambaram',
    description: 'Reliable escort services in southern suburb',
    time: '65 mins',
    features: ['Southern Suburb', 'Reliable Services', 'Trusted Companions']
  },
  {
    name: 'Pallavaram',
    description: 'Quality escort services near the airport',
    time: '70 mins',
    features: ['Airport Proximity', 'Quality Services', 'Traveler-Friendly']
  },
  {
    name: 'Guindy',
    description: 'Premium escort services in educational hub',
    time: '45 mins',
    features: ['Educational Hub', 'Premium Services', 'Academic Area']
  },
  {
    name: 'Chrompet',
    description: 'Discreet and professional escort services',
    time: '60 mins',
    features: ['Discreet Services', 'Professional', 'Private Location']
  },
  {
    name: 'Thoraipakkam',
    description: 'Elite escort services in IT hub along OMR',
    time: '55 mins',
    features: ['IT Hub', 'Elite Services', 'Modern Area']
  },
  {
    name: 'Besant Nagar',
    description: 'Premium escort services in beachfront locality',
    time: '50 mins',
    features: ['Beachfront', 'Premium Services', 'Scenic Location']
  }
];

export const ServiceAreas = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas for Chennai Escorts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide premium Chennai Escorts Service across all major areas of Chennai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-pink-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{area.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{area.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-600">4.8</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{area.description}</p>
              
              <div className="space-y-2">
                {area.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Escorts in a Specific Area?
            </h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Contact us to find the perfect escort in your preferred area of Chennai. 
              We have verified escorts available across all major locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
                View All Areas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
