import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const usefulLinks = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'Service Area', href: '/service-area' },
  { name: 'FAQ\'s', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' }
];

const galleryLinks = [
  { name: 'Teen Escorts', href: '/gallery/teen-escorts' },
  { name: 'HouseWife Escorts', href: '/gallery/housewife-escorts' },
  { name: 'Tamil Escorts', href: '/gallery/tamil-escorts' },
  { name: 'Mallu Escorts', href: '/gallery/mallu-escorts' },
  { name: 'Independent Escorts', href: '/gallery/independent-escorts' }
];

const serviceAreaLinks = [
  { name: 'Chennai Escorts', href: '/service-area/chennai' },
  { name: 'T-Nagar Escorts', href: '/service-area/t-nagar' },
  { name: 'Adyar Escorts', href: '/service-area/adyar' },
  { name: 'ECR Escorts', href: '/service-area/ecr' },
  { name: 'OMR Escorts', href: '/service-area/omr' }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">LillyBabe</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Are you looking for escorts in Chennai? Welcome to Lillybabe Chennai Escort Service, 
                where you can meet and interact with escort girls in Chennai while enjoying a 24-hour 
                escort service that is safe and secure.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">info@lillybabe.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-pink-400" />
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Useful Links</h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Gallery</h4>
            <ul className="space-y-2">
              {galleryLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-400">Service Area</h4>
            <ul className="space-y-2">
              {serviceAreaLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2024 All Rights Reserved
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Verified Escorts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
