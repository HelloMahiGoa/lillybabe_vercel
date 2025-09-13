'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Camera, 
  Zap, 
  Sparkles
} from 'lucide-react';
import { MobileHeader } from '@/components/mobile/mobile-header';
import { MobileBottomNavigation } from '@/components/mobile/mobile-bottom-navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingButtons } from '@/components/ui/floating-buttons';
import { RandomImageGallery } from '@/components/gallery/random-image-gallery';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';


export function GalleryClient() {

return (
  <div className="min-h-screen bg-gray-50">
    {/* Header - Mobile and Desktop */}
    <div className="md:hidden">
      <MobileHeader title="Gallery" />
    </div>
    <div className="hidden md:block">
      <Header />
    </div>

    {/* Breadcrumb Navigation - Desktop Only */}
    <nav className="hidden md:block bg-white border-b border-gray-200 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-pink-600 transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-pink-600 font-medium">Gallery</span>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="relative min-h-[60vh] md:min-h-[80vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Creative Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:min-h-[80vh] md:py-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight">
                <span className="block bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  Chennai
                </span>
                <span className="block bg-gradient-to-r from-indigo-500 via-cyan-400 to-teal-400 bg-clip-text text-transparent mt-2">
                  Escorts
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light bg-gradient-to-r from-teal-400 via-emerald-400 to-green-400 bg-clip-text text-transparent mt-4">
                  Gallery
                </span>
              </h1>
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-full md:max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Check out our <span className="text-pink-400 font-semibold">Chennai escort girls</span>. Real photos, real profiles. Find what you're looking for today.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="#gallery"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-pink-500/25 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Camera className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                <span className="relative z-10">View Girls</span>
                <Zap className="w-4 h-4 group-hover:animate-bounce relative z-10" />
              </Link>
              
              <Link
                href="tel:+918121426651"
                className="group inline-flex items-center justify-center gap-3 text-white/80 hover:text-white px-6 py-3 md:px-8 md:py-4 rounded-full border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm text-base md:text-lg hover:bg-white/10"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span>Call Now</span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Right Visual - Hero Image */}
          <motion.div 
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/images/18+.avif"
                  alt="Chennai Escorts Gallery - Beautiful verified escorts with genuine photos"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={85}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-xs text-gray-300">Photos</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">100%</div>
                    <div className="text-xs text-gray-300">Verified</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-xs text-gray-300">Available</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Gallery Categories Section */}
    <section className="py-8 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-white" />
            <span className="text-white font-bold text-lg">CHOOSE YOUR TYPE</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Chennai <span className="text-purple-500">Escort Types</span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Different girls for different tastes. Pick the type that interests you most.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Teen Escorts', image: '/images/teen.webp', slug: 'teen-escorts', count: '50+' },
            { name: 'Housewife Escorts', image: '/images/housewife.webp', slug: '#', count: '30+' },
            { name: 'Russian Escorts', image: '/images/russian1.webp', slug: '#', count: '25+' },
            { name: 'Independent Escorts', image: '/images/independent.jpg', slug: '#', count: '40+' },
            { name: 'Tamil Escorts', image: '/images/tamil.webp', slug: '#', count: '35+' },
            { name: 'Celebrity Escorts', image: '/images/celebrity.webp', slug: 'celebrity-escorts', count: '15+' },
            { name: 'Mallu Escorts', image: '/images/mallu.webp', slug: '#', count: '20+' },
            { name: 'Model Escorts', image: '/images/model.webp', slug: '#', count: '30+' }
          ].map((category, index) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-bold text-lg group-hover:text-pink-300 transition-colors mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-300">{category.count} Available</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      {/* Random Image Gallery Section */}
      <section id="gallery" className="py-8 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-600 px-6 py-3 rounded-full mb-6">
              <Camera className="h-5 w-5 text-white" />
              <span className="text-white font-bold text-lg">CHENNAI ESCORTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Chennai <span className="text-purple-500">Escort Girls</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Look at our Chennai escort girls. Real photos, real profiles. Call to book your favorite.
            </p>
          </motion.div>

          <RandomImageGallery 
            count={20} 
            imageHeight="h-48 md:h-80" 
            showRefreshButton={true}
            className="mb-8"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <MobileBottomNavigation />
      </div>

      {/* Floating Action Buttons */}
      <FloatingButtons />
      
      {/* Vercel Analytics */}
      <SpeedInsights />
      <Analytics />
    </div>
  );
}