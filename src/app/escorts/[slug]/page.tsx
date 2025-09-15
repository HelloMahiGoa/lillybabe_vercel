'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, MessageCircle, Heart, Eye, Calendar, Clock, Users, Award, Shield, Zap, ArrowLeft, ChevronLeft, ChevronRight, BarChart3, Crown, Sparkles, Play, Share2, Bookmark, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Profile, Testimonial } from '@/types';
import { Header } from '@/components/layout/header';
import SwipeGallery from '@/components/ui/swipe-gallery';
import ProfileLoading from '@/components/ui/profile-loading';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { CriticalCSS } from '@/components/ui/critical-css';

export default function ProfileDetailPage() {
  const params = useParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [relatedProfiles, setRelatedProfiles] = useState<Profile[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Fetch profile
        const profileResponse = await fetch(`/api/profiles/${params.slug}`);
        if (!profileResponse.ok) {
          if (profileResponse.status === 404) {
            setError('Profile not found');
            return;
          } else {
            throw new Error(`Failed to fetch profile: ${profileResponse.status}`);
          }
        }
        const profileData = await profileResponse.json();
        setProfile(profileData.profile);

        // Track profile view
        if (profileData.profile.id) {
          try {
            await fetch('/api/analytics/track', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                profileId: profileData.profile.id,
                actionType: 'view'
              }),
            });
          } catch (trackingError) {
            console.error('Analytics tracking error:', trackingError);
          }
        }

        // Fetch related profiles
        const relatedResponse = await fetch(`/api/profiles-list?limit=10&category=${profileData.profile.category}`);
        if (relatedResponse.ok) {
          const relatedData = await relatedResponse.json();
          const filtered = relatedData.profiles.filter((p: Profile) => p.id !== profileData.profile.id);
          setRelatedProfiles(filtered.slice(0, 4)); // Take first 4 after filtering
        } else {
          console.error('Failed to fetch related profiles:', relatedResponse.status);
        }

        // Fetch testimonials
        const testimonialsResponse = await fetch(`/api/testimonials?profile_id=${profileData.profile.id}&limit=5`);
        if (testimonialsResponse.ok) {
          const testimonialsData = await testimonialsResponse.json();
          setTestimonials(testimonialsData.testimonials || []);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      } finally {
        setIsLoading(false);
      }
    };

    if (params.slug) {
      fetchData();
    }
  }, [params.slug]);

  const handleWhatsAppClick = async (profileName: string) => {
    // Track WhatsApp click
    if (profile?.id) {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            profileId: profile.id,
            actionType: 'whatsapp_click'
          }),
        });
      } catch (trackingError) {
        console.error('Analytics tracking error:', trackingError);
      }
    }

    const message = encodeURIComponent(`Hi, I'm interested in booking ${profileName}. Can you provide more details?`);
    const phoneNumber = profile?.whatsapp_number || '+918121426651';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = async () => {
    // Track phone click
    if (profile?.id) {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            profileId: profile.id,
            actionType: 'phone_click'
          }),
        });
      } catch (trackingError) {
        console.error('Analytics tracking error:', trackingError);
      }
    }

    const phoneNumber = profile?.phone_number || '+918121426651';
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const openImageModal = (index: number) => {
    setModalImageIndex(index);
    setShowImageModal(true);
  };

  const closeImageModal = () => {
    setShowImageModal(false);
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  // Swipe gesture handlers for mobile modal
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && allImages.length > 1) {
      nextModalImage();
    }
    if (isRightSwipe && allImages.length > 1) {
      prevModalImage();
    }
  };


  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!showImageModal) return;
      
      switch (event.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          prevModalImage();
          break;
        case 'ArrowRight':
          nextModalImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showImageModal]);

  const handleShare = async () => {
    if (typeof window === 'undefined') return;
    
    const shareData = {
      title: `${profile?.name} - Premium Escort Profile`,
      text: `Check out ${profile?.name}'s profile on LillyBabe - Premium Chennai Escorts`,
      url: window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        
        // Show a toast notification (you can replace this with a proper toast component)
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold z-50';
        toast.textContent = 'Link copied to clipboard!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 3000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold z-50';
        toast.textContent = 'Link copied to clipboard!';
        document.body.appendChild(toast);
        
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 3000);
      } catch (clipboardError) {
        console.error('Clipboard error:', clipboardError);
      }
    }
  };


  if (isLoading) {
    return <ProfileLoading />;
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-12 h-12 text-white" />
            </motion.div>
          </motion.div>
          <motion.h3 
            className="text-2xl font-black text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {error === 'Profile not found' ? 'Profile Not Found' : 'Error Loading Profile'}
          </motion.h3>
          <motion.p 
            className="text-gray-300 mb-8 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {error === 'Profile not found' 
              ? "The profile you're looking for doesn't exist or has been removed."
              : error || "Something went wrong while loading the profile."
            }
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
            {error !== 'Profile not found' && (
              <Button
                onClick={() => {
                  setError(null);
                  setProfile(null);
                  setIsLoading(true);
                  // Retry fetching
                  const fetchData = async () => {
                    try {
                      const profileResponse = await fetch(`/api/profiles/${params.slug}`);
                      if (!profileResponse.ok) {
                        if (profileResponse.status === 404) {
                          setError('Profile not found');
                          return;
                        } else {
                          throw new Error(`Failed to fetch profile: ${profileResponse.status}`);
                        }
                      }
                      const profileData = await profileResponse.json();
                      setProfile(profileData.profile);
                    } catch (err) {
                      console.error('Error fetching data:', err);
                      setError(err instanceof Error ? err.message : 'Failed to load profile');
                    } finally {
                      setIsLoading(false);
                    }
                  };
                  fetchData();
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Try Again
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const allImages = [profile.photo_url, ...(profile.gallery_urls || [])].filter(Boolean);

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Mobile Header */}
        <motion.div 
          className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-pink-500/20"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <motion.button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-6 h-6" />
              <span className="font-bold">Back</span>
            </motion.button>
            
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white fill-current" />
              </div>
              <span className="text-white font-black text-lg">LillyBabe</span>
            </motion.div>
            
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'text-yellow-400 fill-current' : 'text-white'}`} />
              </motion.button>
              
              <motion.button
                onClick={handleShare}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="w-5 h-5 text-white" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mobile Hero Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Image Gallery */}
          <div className="relative h-96">
            <div 
              className="relative w-full h-full cursor-pointer"
              onClick={() => {
                openImageModal(selectedImage);
              }}
            >
              <Image
                src={allImages[selectedImage] || '/images/independent-1.jpg'}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="100vw"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/independent-1.jpg';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            
            {/* Mobile Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
                  }}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all touch-manipulation"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage((prev) => (prev + 1) % allImages.length);
                  }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all touch-manipulation"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
            
            {/* Mobile Image Counter */}
            {allImages.length > 1 && (
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold">
                {selectedImage + 1} / {allImages.length}
              </div>
            )}
            
            {/* Floating Badges */}
            <motion.div 
              className="absolute top-4 left-4 flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {profile.category}
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                Premium
              </div>
            </motion.div>

            <motion.div 
              className="absolute top-4 right-4 flex flex-col gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm shadow-lg">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-bold">{profile.rating}</span>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                Verified
              </div>
            </motion.div>

          </div>

          {/* Profile Info Overlay */}
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-3xl font-black text-white mb-2">{profile.name}</h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="font-bold">{profile.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-bold">{profile.age} years</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Thumbnail Gallery */}
        {allImages.length > 1 && (
          <motion.div 
            className="px-4 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedImage(index);
                    openImageModal(index);
                  }}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                    selectedImage === index 
                      ? 'border-pink-500' 
                      : 'border-gray-300'
                  }`}
                >
                  <Image
                    src={image || '/images/independent-1.jpg'}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}


        {/* Mobile Content */}
        <div className="px-4 py-6 space-y-6">
          {/* Quick Stats */}
          <motion.div 
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-black text-white">{profile.rating}</div>
                <div className="text-sm text-gray-300">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">{profile.reviews_count}</div>
                <div className="text-sm text-gray-300">Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">{profile.views_count || 0}</div>
                <div className="text-sm text-gray-300">Views</div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Crown className="w-6 h-6 text-yellow-400" />
              Services & Pricing
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(profile.pricing).map(([service, price], index) => (
                <motion.div 
                  key={service}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-xs text-gray-300 mb-1">{service}</div>
                  <div className="text-lg font-black text-white">{price}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.button
              onClick={() => handleWhatsAppClick(profile.name)}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Now
            </motion.button>
            
            <motion.button
              onClick={handleCallClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              Call Now
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-400" />
              Why Choose This Profile
            </h3>
            <div className="space-y-3">
              {[
                { icon: Calendar, text: "Available 24/7", color: "text-blue-400" },
                { icon: Clock, text: "Quick Response", color: "text-green-400" },
                { icon: Shield, text: "100% Verified", color: "text-purple-400" }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  <span className="text-white font-bold">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          {testimonials.length > 0 && (
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-400" />
                Client Reviews
              </h3>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial]?.name?.charAt(0) || 'C'}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonials[currentTestimonial]?.name || 'Anonymous'}</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < (testimonials[currentTestimonial]?.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">
                  "{testimonials[currentTestimonial]?.comment || 'Amazing experience with this escort. Highly recommended!'}"
                </p>
                {testimonials.length > 1 && (
                  <div className="flex justify-center gap-3 mt-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 bg-white/20 rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 bg-white/20 rounded-full"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>


        {/* Related Profiles - Mobile */}
        {relatedProfiles.length > 0 && (
          <motion.div 
            className="px-4 py-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-pink-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-pink-400" />
                Similar Profiles
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {relatedProfiles.slice(0, 4).map((relatedProfile, index) => (
                  <motion.div
                    key={relatedProfile.id}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  >
                    <Link href={`/escorts/${relatedProfile.slug}`} className="block">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                            <Image
                              src={relatedProfile.photo_url}
                              alt={relatedProfile.name}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-white font-bold text-sm">{relatedProfile.name}</h4>
                            <p className="text-pink-200 text-xs">{relatedProfile.category}</p>
                            <p className="text-gray-300 text-xs">{relatedProfile.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-pink-400 font-bold text-sm">₹{relatedProfile.pricing['1 Shot']}</div>
                            <div className="text-gray-400 text-xs">1 Shot</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Simple Mobile Image Modal */}
        {showImageModal && (
          <div 
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={closeImageModal}
          >
            <div 
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-black/70 text-white p-3 rounded-full"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                {modalImageIndex + 1} / {allImages.length}
              </div>

              {/* Main Image */}
              <div 
                className="relative max-w-full max-h-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={allImages[modalImageIndex] || '/images/independent-1.jpg'}
                  alt={`${profile.name} - Image ${modalImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={prevModalImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextModalImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 text-white p-3 rounded-full"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 ${
                        index === modalImageIndex 
                          ? 'border-pink-500' 
                          : 'border-white/30'
                      }`}
                    >
                      <Image
                        src={image || '/images/independent-1.jpg'}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout
  return (
    <>
      <CriticalCSS />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Header */}
      <Header />
      
      {/* Responsive Header */}
      <div className="bg-white shadow-lg border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-current" />
                </div>
              <div>
                <h1 className="text-lg lg:text-2xl font-bold text-gray-900">{profile.name}</h1>
                <div className="flex items-center space-x-2 lg:space-x-4 text-sm text-gray-600 mt-1">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">{profile.location}</span>
                    <span className="sm:hidden">{profile.location}</span>
                  </div>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{profile.age} years old</span>
                  <span className="hidden sm:inline">•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span>{profile.rating}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 lg:p-3 text-gray-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50"
              >
                <Heart className={`w-5 h-5 lg:w-6 lg:h-6 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 lg:p-3 text-gray-400 hover:text-blue-500 transition-colors rounded-full hover:bg-blue-50"
              >
                <Share2 className="w-5 h-5 lg:w-6 lg:h-6" />
              </button>
              <div className="hidden sm:flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {/* Enhanced Image Gallery */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
              <div 
                className="relative h-64 sm:h-80 lg:h-[500px] cursor-pointer"
                onClick={() => openImageModal(selectedImage)}
              >
                <Image
                  src={allImages[selectedImage] || '/images/independent-1.jpg'}
                  alt={profile.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/independent-1.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Enhanced Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 lg:space-y-3">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm font-semibold shadow-lg">
                    {profile.category}
                  </div>
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Premium
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 flex flex-col space-y-2 lg:space-y-3">
                  <div className="flex items-center space-x-1 lg:space-x-2 bg-black/70 backdrop-blur-sm text-white px-3 lg:px-4 py-1 lg:py-2 rounded-full text-xs lg:text-sm shadow-lg">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{profile.rating}</span>
                    <span className="hidden lg:inline text-gray-300">({profile.reviews_count} reviews)</span>
                  </div>
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 lg:px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    Verified
                  </div>
                </div>

                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length)}
                      className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all"
                    >
                      <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                    <button
                      onClick={() => setSelectedImage((prev) => (prev + 1) % allImages.length)}
                      className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 lg:p-3 rounded-full transition-all"
                    >
                      <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Enhanced Image Gallery */}
              {allImages.length > 1 && (
                <div className="p-4 lg:p-6 bg-gray-50">
                  <div className="grid grid-cols-5 lg:grid-cols-5 gap-2 lg:gap-3">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedImage(index);
                          openImageModal(index);
                        }}
                        className={`relative h-16 lg:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImage === index 
                            ? 'border-pink-500 shadow-lg scale-105' 
                            : 'border-gray-200 hover:border-pink-300'
                        }`}
                      >
                        <Image
                          src={image || '/images/independent-1.jpg'}
                          alt={`${profile.name} - Image ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, 96px"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/independent-1.jpg';
                          }}
                        />
                        {selectedImage === index && (
                          <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                            <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 lg:w-3 lg:h-3 bg-pink-500 rounded-full"></div>
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Profile Information */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
              <div className="flex items-start justify-between mb-6 lg:mb-8">
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{profile.name}</h2>
                  <div className="flex flex-wrap items-center gap-2 lg:gap-6 text-sm lg:text-base text-gray-600 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-pink-500" />
                      <span className="font-medium">{profile.location}</span>
                    </div>
                    <span className="hidden lg:inline">•</span>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-blue-500" />
                      <span className="font-medium">{profile.age} years old</span>
                    </div>
                    <span className="hidden lg:inline">•</span>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 lg:w-5 lg:h-5 mr-1 lg:mr-2 text-yellow-500" />
                      <span className="font-medium">{profile.category}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 lg:gap-4">
                    <div className="flex items-center bg-yellow-50 px-3 lg:px-4 py-1 lg:py-2 rounded-full">
                      <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400 mr-1 lg:mr-2" />
                      <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.rating}/5</span>
                      <span className="text-gray-600 ml-2 hidden lg:inline">({profile.reviews_count} reviews)</span>
                    </div>
                    <div className="flex items-center bg-green-50 px-3 lg:px-4 py-1 lg:py-2 rounded-full">
                      <Eye className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 mr-1 lg:mr-2" />
                      <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.views_count || 0} views</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Pricing */}
              <div className="mb-6 lg:mb-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-yellow-500" />
                  Services & Pricing
                </h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  {Object.entries(profile.pricing).map(([service, price]) => (
                    <div key={service} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center border border-gray-200 hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-xs lg:text-sm text-gray-600 mb-1 lg:mb-2 font-medium">{service}</div>
                      <div className="text-lg lg:text-2xl font-bold text-gray-900">{price}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Features */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                <div className="flex items-center bg-blue-50 p-4 lg:p-4 rounded-xl lg:rounded-2xl">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Available 24/7</div>
                    <div className="text-xs lg:text-sm text-gray-600">Round the clock service</div>
                  </div>
                </div>
                <div className="flex items-center bg-green-50 p-4 lg:p-4 rounded-xl lg:rounded-2xl">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Quick Response</div>
                    <div className="text-xs lg:text-sm text-gray-600">Instant replies</div>
                  </div>
                </div>
                <div className="flex items-center bg-purple-50 p-4 lg:p-4 rounded-xl lg:rounded-2xl">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-3 text-purple-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">Verified Profile</div>
                    <div className="text-xs lg:text-sm text-gray-600">100% authentic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Section */}
            {testimonials.length > 0 && (
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-yellow-500" />
                  Client Reviews
                </h3>
                <div className="relative">
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl lg:rounded-2xl p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-3 lg:mb-4">
                      <div className="flex items-center space-x-3 lg:space-x-4">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm lg:text-lg">
                            {testimonials[currentTestimonial]?.name?.charAt(0) || 'C'}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm lg:text-base">{testimonials[currentTestimonial]?.name || 'Anonymous'}</div>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 lg:w-4 lg:h-4 ${i < (testimonials[currentTestimonial]?.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs lg:text-sm text-gray-500">
                        {currentTestimonial + 1} of {testimonials.length}
                      </div>
                    </div>
                    <p className="text-gray-700 text-base lg:text-lg italic leading-relaxed">
                      "{testimonials[currentTestimonial]?.comment || 'Amazing experience with this escort. Highly recommended!'}"
                    </p>
                  </div>
                  
                  {testimonials.length > 1 && (
                    <div className="flex justify-center space-x-3 lg:space-x-4 mt-4 lg:mt-6">
                      <button
                        onClick={prevTestimonial}
                        className="p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="p-2 lg:p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
                      >
                        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Profile Analytics */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                <BarChart3 className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-purple-500" />
                Profile Analytics
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 lg:p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">
                    {profile.views_count || 0}
                  </div>
                  <div className="text-sm lg:text-base text-blue-700 font-medium">Total Views</div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 lg:p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-green-600 mb-1">
                    {profile.clicks_count || 0}
                  </div>
                  <div className="text-sm lg:text-base text-green-700 font-medium">Total Clicks</div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-4 lg:p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-purple-600 mb-1">
                    {profile.rating || 5.0}
                  </div>
                  <div className="text-sm lg:text-base text-purple-700 font-medium">Rating</div>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-4 lg:p-6 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-orange-600 mb-1">
                    {testimonials.length}
                  </div>
                  <div className="text-sm lg:text-base text-orange-700 font-medium">Reviews</div>
                </div>
              </div>
            </div>

            {/* Related Profiles */}
            {relatedProfiles.length > 0 && (
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3 text-blue-500" />
                  Similar Profiles
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  {relatedProfiles.slice(0, 4).map((relatedProfile) => (
                    <Link
                      key={relatedProfile.id}
                      href={`/escorts/${relatedProfile.slug}`}
                      className="group block"
                    >
                      <div className="bg-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-4 hover:shadow-lg transition-all group-hover:scale-105">
                        <div className="flex items-center space-x-3 lg:space-x-4">
                                                     <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl overflow-hidden flex-shrink-0">
                             <Image
                               src={relatedProfile.photo_url || '/images/independent-1.jpg'}
                               alt={relatedProfile.name}
                               fill
                               className="object-cover"
                               sizes="(max-width: 768px) 48px, 64px"
                               onError={(e) => {
                                 const target = e.target as HTMLImageElement;
                                 target.src = '/images/independent-1.jpg';
                               }}
                             />
                           </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm lg:text-base group-hover:text-pink-600 transition-colors">
                              {relatedProfile.name}
                            </h4>
                            <div className="flex items-center space-x-2 text-xs lg:text-sm text-gray-600">
                              <span>{relatedProfile.age} years</span>
                              <span>•</span>
                              <span>{relatedProfile.location}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs lg:text-sm font-medium">{relatedProfile.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Sidebar */}
          <div className="lg:col-span-1 space-y-6 lg:space-y-6">
            {/* Enhanced Contact Card */}
            <div className="bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 text-white">
              <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 flex items-center">
                <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                Contact & Book
              </h3>
              
              <div className="space-y-3 lg:space-y-4">
                <Button
                  onClick={() => handleWhatsAppClick(profile.name)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                  WhatsApp
                </Button>
                
                <Button
                  onClick={handleCallClick}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 lg:py-4 text-base lg:text-lg font-semibold rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 mr-2 lg:mr-3" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Enhanced Quick Info */}
            <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                <Award className="w-5 h-5 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-purple-500" />
                Quick Info
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex justify-between items-center py-2 lg:py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm lg:text-base">Category</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 lg:py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm lg:text-base">Age</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.age} years</span>
                </div>
                <div className="flex justify-between items-center py-2 lg:py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm lg:text-base">Location</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 lg:py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm lg:text-base">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.rating}/5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 lg:py-3 border-b border-gray-100">
                  <span className="text-gray-600 text-sm lg:text-base">Reviews</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.reviews_count}</span>
                </div>
                <div className="flex justify-between items-center py-2 lg:py-3">
                  <span className="text-gray-600 text-sm lg:text-base">Views</span>
                  <span className="font-semibold text-gray-900 text-sm lg:text-base">{profile.views_count || 0}</span>
                </div>
              </div>
            </div>

            {/* Safety & Trust */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8">
              <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                <Shield className="w-5 h-5 lg:w-5 lg:h-5 mr-2 lg:mr-3 text-blue-500" />
                Safety & Trust
              </h3>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm lg:text-base text-gray-700">Verified Profile</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm lg:text-base text-gray-700">Safe & Discreet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm lg:text-base text-gray-700">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal for Desktop */}
      <AnimatePresence>
        {showImageModal && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center p-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={closeImageModal}
                className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Image Counter */}
              <motion.div
                className="absolute top-6 left-6 z-10 bg-black/50 text-white px-4 py-2 rounded-full text-lg font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {modalImageIndex + 1} / {allImages.length}
              </motion.div>

              {/* Main Image */}
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  src={allImages[modalImageIndex] || '/images/independent-1.jpg'}
                  alt={`${profile.name} - Image ${modalImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <motion.button
                    onClick={prevModalImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </motion.button>
                  <motion.button
                    onClick={nextModalImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </motion.button>
                </>
              )}

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <motion.div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 max-w-full overflow-x-auto px-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {allImages.map((image, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        index === modalImageIndex 
                          ? 'border-pink-500 scale-110' 
                          : 'border-white/30 hover:border-white/60'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src={image || '/images/independent-1.jpg'}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                      {index === modalImageIndex && (
                        <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                        </div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    </>
  );
}
