'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
// import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  MessageCircle, 
  Phone, 
  Menu, 
  Eye,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Check
} from 'lucide-react';
import { ToastProvider } from '@/components/ui/toast-provider';
import toast from 'react-hot-toast';

interface UserAd {
  id: string;
  name: string;
  age: number;
  location: string;
  category: string;
  photo_url: string;
  gallery_urls: string[];
  whatsapp_number: string;
  phone_number: string;
  pricing: {
    '1 Shot': string;
    '2 Shots': string;
    '3 Shots': string;
    'Full Night': string;
  };
  rating: number;
  reviews_count: number;
  response_rate: number;
  is_featured: boolean;
  is_active: boolean;
  views_count: number;
  clicks_count: number;
  created_at: string;
  updated_at: string;
  slug: string;
  source: string;
  user_type_id: number;
  badge: string;
  // Additional fields from database
  profile_description?: string;
}

export default function AdPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [ad, setAd] = useState<UserAd | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [otherProfiles, setOtherProfiles] = useState<any[]>([]);
  const [loadingOtherProfiles, setLoadingOtherProfiles] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchAd();
    }
  }, [slug]);

  useEffect(() => {
    if (ad) {
      fetchOtherProfiles();
    }
  }, [ad]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-mobile-menu]')) {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const fetchAd = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/ads');
      
      if (!response.ok) {
        throw new Error('Failed to fetch ads');
      }
      
      const data = await response.json();
      
      // Find the ad with matching slug
      const foundAd = data.ads.find((ad: UserAd) => ad.slug === slug);
      
      if (foundAd) {
        setAd(foundAd);
      } else {
        setError('Ad not found');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load ad');
      console.error('Error fetching ad:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    if (ad?.whatsapp_number) {
      const message = `Hi ${ad.name}, I'm interested in your services. Can we discuss more?`;
      const whatsappUrl = `https://wa.me/${ad.whatsapp_number.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handlePhoneClick = () => {
    if (ad?.phone_number) {
      window.open(`tel:${ad.phone_number}`, '_self');
    }
  };

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    if (ad?.gallery_urls) {
      setSelectedImageIndex((prev) => 
        prev === ad.gallery_urls.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (ad?.gallery_urls) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? ad.gallery_urls.length - 1 : prev - 1
      );
    }
  };

  const fetchOtherProfiles = async () => {
    try {
      setLoadingOtherProfiles(true);
      
      const [profilesResponse, adsResponse] = await Promise.all([
        fetch('/api/profiles-list'),
        fetch('/api/ads')
      ]);
      
      const profilesData = await profilesResponse.json();
      const adsData = await adsResponse.json();
      
      // Combine and shuffle profiles
      const allProfiles = [...(profilesData.profiles || []), ...(adsData.ads || [])];
      const shuffled = allProfiles.sort(() => Math.random() - 0.5);
      
      // Take first 10 profiles (excluding current ad)
      const filtered = shuffled.filter(profile => profile.slug !== ad?.slug).slice(0, 10);
      setOtherProfiles(filtered);
    } catch (err) {
      console.error('Error fetching other profiles:', err);
    } finally {
      setLoadingOtherProfiles(false);
    }
  };

  if (loading) {
    return (
      <>
        <ToastProvider />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !ad) {
    return (
      <>
        <ToastProvider />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ad Not Found</h3>
            <p className="text-gray-600 mb-4">The ad you're looking for doesn't exist.</p>
            <Link href="/escorts#profiles">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Escorts Profile Section
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ToastProvider />
      <div className="min-h-screen bg-white">
        {/* Enhanced Header */}
        <div className="sticky top-0 z-50 bg-gradient-to-r from-white via-pink-50 to-purple-50 border-b border-pink-200/50 backdrop-blur-md shadow-sm" data-mobile-menu>
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <Link href="/escorts#profiles" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 text-xs sm:text-sm">Escorts</span>
                <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-xs">Profile Section</span>
              </div>
            </Link>
            
            {/* Lillybabe Logo */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 fill-current" />
              <span className="text-lg sm:text-xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
                LillyBabe
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </Button>
          </div>

          {/* Enhanced Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-pink-200/50 shadow-xl z-50">
              <nav className="px-4 sm:px-6 py-6">
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Home
                  </Link>
                  <Link 
                    href="/about" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    About
                  </Link>
                  <Link 
                    href="/escorts" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Escorts
                  </Link>
                  <Link 
                    href="/gallery" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Gallery
                  </Link>
                  <Link 
                    href="/locations" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Locations
                  </Link>
                  <Link 
                    href="/blog" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Blog
                  </Link>
                  <Link 
                    href="/contact-us" 
                    className="flex items-center gap-3 text-gray-700 hover:text-pink-600 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-green-600 flex items-center justify-center">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    Contact
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
        
        <main>
          {/* Hero Image */}
          <div className="relative h-[60vh] min-h-[400px] lg:h-[70vh] lg:min-h-[600px]">
            <Image
              src={ad.photo_url}
              alt={ad.name}
              fill
              className="object-cover"
              sizes="100vw"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/independent-1.jpg';
              }}
            />
            
            {/* Profile Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pb-8 lg:p-12 lg:pb-16">
              <div className="text-white max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
                  <div className="flex-1">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 lg:mb-4">{ad.name}, {ad.age}</h1>
                    <div className="flex items-center gap-2 text-base sm:text-lg lg:text-xl mb-4 lg:mb-6">
                      <MapPin className="h-5 w-5 lg:h-6 lg:w-6" />
                      <span>{ad.location}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 mb-2 lg:mb-4">
                      <Badge className="bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-medium rounded-full shadow-lg">
                        Available
                      </Badge>
                      <Badge className="bg-purple-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-medium rounded-full shadow-lg">
                        {ad.category}
                      </Badge>
                      <Badge className="bg-blue-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-medium rounded-full shadow-lg flex items-center gap-1 lg:gap-2">
                        <Check className="w-4 h-4 lg:w-5 lg:h-5" />
                        Verified
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Desktop Contact Actions */}
                  <div className="hidden lg:flex flex-col gap-4 mt-6 lg:mt-0">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 lg:py-4 lg:px-8 rounded-xl flex items-center justify-center gap-2 lg:gap-3 text-base lg:text-lg font-semibold shadow-lg min-w-[180px] lg:min-w-[220px] transition-all duration-300 hover:shadow-xl"
                    >
                      <MessageCircle className="h-6 w-6" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={handlePhoneClick}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 lg:py-4 lg:px-8 rounded-xl flex items-center justify-center gap-2 lg:gap-3 text-base lg:text-lg font-semibold shadow-lg min-w-[180px] lg:min-w-[220px] transition-all duration-300 hover:shadow-xl"
                    >
                      <Phone className="h-6 w-6" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
            <div className="bg-white rounded-t-3xl shadow-lg pt-6 lg:pt-8">
              <div className="px-4 sm:px-6 pt-6 pb-20 lg:px-12 lg:pt-8 lg:pb-24">
                <div className="max-w-7xl mx-auto">
                
                 {/* Gallery Images */}
                 {ad.gallery_urls && ad.gallery_urls.length > 1 && (
                   <div className="mb-6 lg:mb-8">
                     <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-6 flex items-center gap-2 lg:gap-3">
                       <Camera className="w-5 h-5 lg:w-6 lg:h-6 text-purple-500" />
                       Photos
                     </h3>
                     <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
                       {ad.gallery_urls.map((imageUrl, index) => (
                         <div 
                           key={index} 
                           className="relative h-40 lg:h-56 xl:h-64 rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                           onClick={() => openImageModal(index)}
                         >
                           <Image
                             src={imageUrl}
                             alt={`${ad.name} - Photo ${index + 1}`}
                             fill
                             className="object-cover group-hover:scale-105 transition-transform duration-300"
                             sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                             onError={(e) => {
                               const target = e.target as HTMLImageElement;
                               target.src = '/images/independent-1.jpg';
                             }}
                           />
                           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                             <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                               <Eye className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                             </div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>
                 )}

                 {/* Profile Description */}
                 {ad.profile_description && (
                   <div className="mb-6 lg:mb-8">
                     <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-6">About</h3>
                     <div className="lg:max-w-4xl">
                       <p className="text-gray-700 leading-relaxed lg:leading-loose whitespace-pre-wrap text-sm lg:text-base">
                         {ad.profile_description}
                       </p>
                     </div>
                   </div>
                 )}

                 {/* Pricing */}
                 <div className="mb-6 lg:mb-8">
                   <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-6">Services & Pricing</h3>
                   <div className="lg:max-w-2xl">
                     <div className="space-y-3 lg:space-y-4">
                       {Object.entries(ad.pricing).map(([service, price]) => (
                         <div key={service} className="flex justify-between items-center py-3 lg:py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 lg:hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2 lg:px-4">
                           <span className="text-gray-700 font-medium text-sm lg:text-base">{service}</span>
                           <span className="text-gray-900 font-semibold text-sm lg:text-base">{price}</span>
                         </div>
                       ))}
                     </div>
                   </div>
                 </div>

                 {/* Enhanced Other Profiles Section */}
                 <div className="mb-6 lg:mb-8">
                   <div className="text-center mb-6 lg:mb-8">
                     <h3 className="text-xl lg:text-3xl font-bold text-gray-900 mb-2">Discover More Amazing Profiles</h3>
                     <p className="text-gray-600 text-sm lg:text-base">Handpicked profiles just for you</p>
                   </div>
                   
                   {loadingOtherProfiles ? (
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                       {[...Array(10)].map((_, index) => (
                         <div key={index} className="bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse rounded-2xl h-64 shadow-lg"></div>
                       ))}
                     </div>
                   ) : otherProfiles.length > 0 ? (
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                       {otherProfiles.map((profile, index) => (
                         <div
                           key={profile.id}
                           className="group"
                         >
                           <Link 
                             href={(profile as any).source === 'user_ad' ? `/ads/${profile.slug}` : `/escorts/${profile.slug}`}
                             className="block bg-white border border-gray-100 hover:border-pink-300 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2 group"
                           >
                             <div className="relative overflow-hidden">
                               <Image
                                 src={profile.photo_url}
                                 alt={profile.name}
                                 width={200}
                                 height={280}
                                 className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                 sizes="(max-width: 768px) 50vw, 20vw"
                                 onError={(e) => {
                                   const target = e.target as HTMLImageElement;
                                   target.src = '/images/independent-1.jpg';
                                 }}
                               />
                               
                               {/* Enhanced gradient overlay */}
                               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                               
                               {/* Profile type badge with enhanced styling */}
                               <div className="absolute top-3 right-3">
                                 {(profile as any).source === 'user_ad' ? (
                                   <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl backdrop-blur-sm">
                                     <div className="flex items-center gap-1">
                                       <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                       Ads
                                     </div>
                                   </div>
                                 ) : (
                                   <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-xl">
                                     <div className="flex items-center gap-1">
                                       <Check className="w-3 h-3 text-green-600" />
                                       <span className="text-green-600 text-xs font-bold">Verified</span>
                                     </div>
                                   </div>
                                 )}
                               </div>
                               
                               {/* Enhanced profile info overlay */}
                               <div className="absolute bottom-0 left-0 right-0 p-4">
                                 <div className="text-center">
                                   <h4 className="text-white font-bold text-base mb-1 truncate drop-shadow-lg">{profile.name}</h4>
                                   <div className="flex items-center justify-center gap-1 text-white/90 text-sm mb-2">
                                     <MapPin className="w-3 h-3" />
                                     <span className="truncate">{profile.location}</span>
                                   </div>
                                   <div className="flex items-center justify-center gap-2">
                                     <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                                       {profile.category}
                                     </span>
                                     <span className="bg-pink-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-bold">
                                       {profile.age} years
                                     </span>
                                   </div>
                                 </div>
                               </div>
                               
                               {/* Hover overlay effect */}
                               <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                             </div>
                             
                             {/* Enhanced card footer */}
                             <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50">
                               <div className="text-center">
                                 <div className="text-gray-600 text-xs mb-1">Starting from</div>
                                 <div className="text-pink-600 font-bold text-lg mb-2">
                                   {profile.pricing['1 Shot']}
                                 </div>
                                 <div className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-xl text-sm font-semibold opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                                   View Profile
                                 </div>
                               </div>
                             </div>
                           </Link>
                         </div>
                       ))}
                     </div>
                   ) : (
                     <div className="text-center py-12">
                       <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                         <div className="w-8 h-8 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
                       </div>
                       <h4 className="text-lg font-semibold text-gray-900 mb-2">No profiles available</h4>
                       <p className="text-gray-600">Check back later for more amazing profiles!</p>
                     </div>
                   )}
                 </div>

                 {/* Important Information */}
                 <div className="mb-6 lg:mb-8 p-4 lg:p-6 bg-blue-50 border border-blue-200 rounded-lg lg:rounded-xl">
                   <div className="flex items-start gap-3 lg:gap-4">
                     <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                       <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-sm lg:text-lg font-semibold text-blue-800 mb-3 lg:mb-4">Important Information & Safety Guidelines</h4>
                       <div className="text-sm lg:text-base text-blue-700 leading-relaxed lg:leading-loose space-y-3 lg:space-y-4">
                         <p className="font-medium">✅ This profile is completely verified with a selfie video.</p>
                         <p className="font-medium">📧 If you have any complaints or believe you have been scammed with this listing, please email us at: <span className="font-bold text-blue-900">hellomahicom@gmail.com</span></p>
                         
                         <div className="border-t border-blue-200 pt-3 lg:pt-4">
                           <p className="font-semibold text-blue-800 mb-2 lg:mb-3">💳 Payment Guidelines:</p>
                           <ul className="list-disc list-inside space-y-1 lg:space-y-2 ml-2 lg:ml-4">
                             <li>Do not pay any advance payment</li>
                             <li>Pay only when the girl reaches your hotel room (For Outcall)</li>
                             <li>Pay only when you meet the girl at her hotel room (For Incall)</li>
                             <li>Do not make advance bookings by paying advance payments</li>
                           </ul>
                         </div>

                         <div className="border-t border-blue-200 pt-3 lg:pt-4">
                           <p className="font-semibold text-blue-800 mb-2 lg:mb-3">⏱️ Service Definitions:</p>
                           <ul className="list-disc list-inside space-y-1 lg:space-y-2 ml-2 lg:ml-4">
                             <li>1 Shot means: Until completion, not 1 hour for 1 shot</li>
                             <li>Full night booking allows maximum 3 shots</li>
                           </ul>
                         </div>

                         <div className="border-t border-blue-200 pt-3 lg:pt-4">
                           <p className="font-semibold text-blue-800 mb-2 lg:mb-3">🏨 Outcall Booking Requirements:</p>
                           <ul className="list-disc list-inside space-y-1 lg:space-y-2 ml-2 lg:ml-4">
                             <li>Provide confirmed hotel reservation screenshot, room key photo, and room number</li>
                             <li>Provide room video if the agent requests it (optional)</li>
                             <li>Book hotel room for 2 adults</li>
                             <li>Mention the girl's name at reception as 2nd guest for hassle-free check-in</li>
                           </ul>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Bottom Contact Bar - Mobile Only */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden">
          <div className="flex gap-2 sm:gap-3 p-3 sm:p-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              onClick={handlePhoneClick}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call
            </Button>
          </div>
        </div>

        {/* Image Modal */}
        {modalOpen && ad?.gallery_urls && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              {ad.gallery_urls.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Main Image */}
              <div className="relative w-full h-full">
                <Image
                  src={ad.gallery_urls[selectedImageIndex]}
                  alt={`${ad.name} - Photo ${selectedImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="object-contain w-full h-full rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/independent-1.jpg';
                  }}
                />
              </div>

              {/* Image Counter */}
              {ad.gallery_urls.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {ad.gallery_urls.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}