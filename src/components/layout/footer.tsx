import Link from 'next/link';
import { Heart, Star } from 'lucide-react';

const usefulLinks = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'Locations', href: '/locations' },
  { name: 'Escorts', href: '/escorts' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact-us' }
];

const galleryLinks = [
  { name: 'Teen Escorts', href: '/teen-escorts-in-chennai' },
  { name: 'HouseWife Escorts', href: '/housewife-escorts-in-chennai' },
  { name: 'Tamil Escorts', href: '/tamil-escorts-in-chennai' },
  { name: 'Mallu Escorts', href: '/mallu-escorts-in-chennai' },
  { name: 'Independent Escorts', href: '/independent-escorts-in-chennai' }
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
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-2.5 h-2.5 text-white fill-current" />
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  LillyBabe
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Chennai's premier escort service. Real girls, real photos, real experiences. 
                Your perfect companion awaits with 24/7 availability and complete discretion.
              </p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full"></div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Quick Links
              </h4>
            </div>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={link.name} className="group/item">
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-sm group-hover/item:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover/item:text-pink-400 transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Gallery
              </h4>
            </div>
            <ul className="space-y-3">
              {galleryLinks.map((link, index) => (
                <li key={link.name} className="group/item">
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-sm group-hover/item:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover/item:text-purple-400 transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div className="group">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full"></div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Service Areas
              </h4>
            </div>
            <ul className="space-y-3">
              {serviceAreaLinks.map((link, index) => (
                <li key={link.name} className="group/item">
                  <Link 
                    href={link.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 text-sm group-hover/item:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover/item:text-indigo-400 transition-colors duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative mt-12 pt-8">
          {/* Gradient Border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="flex items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2025 <span className="text-pink-400 font-semibold">LillyBabe</span>. All Rights Reserved
              </div>
              <div className="hidden md:block w-px h-4 bg-gray-700"></div>
              <div className="text-gray-500 text-xs">
                Made with <Heart className="w-3 h-3 text-pink-400 inline mx-1" /> in Chennai
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
