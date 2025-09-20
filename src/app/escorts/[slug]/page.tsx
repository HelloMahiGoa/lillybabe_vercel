'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, MessageCircle, Heart, Eye, Calendar, Clock, Users, Award, Shield, Zap, ArrowLeft, ChevronLeft, ChevronRight, BarChart3, Crown, Sparkles, Play, Share2, Bookmark, RefreshCw, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Profile, Testimonial } from '@/types';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
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
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    age: '',
    location: '',
    serviceType: '',
    hotelName: '',
    shots: '',
    serviceDate: '',
    serviceTime: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
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
              headers: { 'Content-Type': 'application/json' },
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
          setRelatedProfiles(filtered.slice(0, 4));
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

  const handleBookingFormSubmit = async () => {
    if (!bookingForm.name || !bookingForm.age || !bookingForm.location || !bookingForm.serviceType || !bookingForm.shots || !bookingForm.serviceDate || !bookingForm.serviceTime) {
      alert('Please fill in all required fields');
      return;
    }

    if (bookingForm.serviceType === 'outcall' && !bookingForm.hotelName) {
      alert('Hotel name is required for outcall service');
      return;
    }

    // Validate outcall minimum shots requirement
    if (bookingForm.serviceType === 'outcall' && bookingForm.shots !== '2' && bookingForm.shots !== 'Full Night') {
      alert('Outcall service requires minimum 2 shots or full night booking');
      return;
    }

    // Validate late night booking restriction (after 11 PM only full night)
    const selectedTime = new Date(`2000-01-01T${bookingForm.serviceTime}`);
    const elevenPM = new Date('2000-01-01T23:00:00');
    
    if (selectedTime >= elevenPM && bookingForm.shots !== 'Full Night') {
      alert('After 11 PM only full night booking is available');
      return;
    }

    // Validate age requirement
    const age = parseInt(bookingForm.age);
    if (age < 18 || age > 80) {
      alert('Age must be between 18 and 80 years');
      return;
    }

    // Validate terms acceptance
    if (!termsAccepted) {
      alert('Please accept the terms and conditions to proceed');
      return;
    }

    // Track booking form submission
    if (profile?.id) {
      try {
        await fetch('/api/analytics/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            profileId: profile.id,
            actionType: 'booking_form_submit'
          }),
        });
      } catch (trackingError) {
        console.error('Analytics tracking error:', trackingError);
      }
    }

    const message = encodeURIComponent(`Hi, I want to book ${profile?.name}. Here are my details:

Name: ${bookingForm.name}
Age: ${bookingForm.age}
Location: ${bookingForm.location}
Service Type: ${bookingForm.serviceType}
${bookingForm.serviceType === 'outcall' ? `Hotel Name: ${bookingForm.hotelName}` : ''}
Shots: ${bookingForm.shots}
Service Date: ${bookingForm.serviceDate}
Service Time: ${bookingForm.serviceTime}

${bookingForm.serviceType === 'outcall' ? `
IMPORTANT OUTCall REQUIREMENTS:
- I understand I need to provide confirmed hotel reservation screenshot
- I will provide room key photo + room number
- Minimum 2 shots required for outcall (within 8 km)
- I understand cab charges apply above 8 km distance
- Payment will be made once girl reaches my hotel room
` : `
IMPORTANT INCALL REQUIREMENTS:
- I understand hotel location will be disclosed after confirmation
- Girls will only meet at the booked hotel location
- Payment will be made once girl reaches the hotel room
`}

Please confirm availability and pricing. Thank you.`);

    const phoneNumber = profile?.whatsapp_number || '+918121426651';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    
    setShowBookingModal(false);
    setBookingForm({
      name: '', age: '', location: '', serviceType: '', hotelName: '', shots: '', serviceDate: '', serviceTime: ''
    });
    setTermsAccepted(false);
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Loading Profile...</h3>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">
            {error === 'Profile not found' ? 'Profile Not Found' : 'Error Loading Profile'}
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            {error === 'Profile not found' 
              ? "The profile you're looking for doesn't exist or has been removed."
              : error || "Something went wrong while loading the profile."
            }
          </p>
          <Button
            onClick={() => window.history.back()}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  const allImages = [profile.photo_url, ...(profile.gallery_urls || [])].filter(Boolean);

  return (
    <>
      <CriticalCSS />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        
        {/* Enhanced Header */}
        <div className="relative overflow-hidden">
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-indigo-200/25 rounded-full blur-lg animate-pulse delay-500"></div>
          
          <div className="relative bg-white/80 backdrop-blur-sm shadow-xl border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-1 min-w-0">
                  <motion.button
                    onClick={() => window.history.back()}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-all duration-300 hover:scale-105 bg-white/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-lg hover:shadow-xl flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline font-medium">Back</span>
                  </motion.button>
                  
                  <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                    <motion.div 
                      className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white fill-current" />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-75"></div>
                    </motion.div>
                    
                    <div className="min-w-0 flex-1">
                      <motion.h1 
                        className="text-lg sm:text-xl lg:text-3xl font-black text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text truncate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {profile.name}
                      </motion.h1>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-6 text-xs sm:text-sm lg:text-base text-gray-600 mt-1 sm:mt-2">
                        <div className="flex items-center bg-white/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-pink-500" />
                          <span className="font-medium truncate">{profile.location}</span>
                        </div>
                        <div className="flex items-center bg-white/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
                          <span className="font-medium">{profile.age} years</span>
                        </div>
                        <div className="flex items-center bg-white/60 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 mr-1 sm:mr-2" />
                          <span className="font-medium">{profile.rating}/5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 self-end sm:self-auto">
                  <motion.button 
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="p-2 sm:p-3 text-gray-400 hover:text-red-500 transition-all duration-300 rounded-full hover:bg-red-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className={`w-5 h-5 sm:w-6 sm:h-6 ${isBookmarked ? 'fill-current text-red-500' : ''}`} />
                  </motion.button>
                  
                  <motion.button 
                    onClick={() => navigator.share ? navigator.share({title: `${profile.name} - Premium Escort Profile`, url: window.location.href}) : navigator.clipboard.writeText(window.location.href)}
                    className="p-2 sm:p-3 text-gray-400 hover:text-blue-500 transition-all duration-300 rounded-full hover:bg-blue-50/80 backdrop-blur-sm shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                  
                  <motion.div 
                    className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm font-semibold text-green-700">Available Now</span>
                  </motion.div>
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
              <motion.div 
                className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl overflow-hidden border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.div 
                  className="relative h-64 sm:h-80 lg:h-[500px] cursor-pointer group"
                  onClick={() => openImageModal(selectedImage)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={allImages[selectedImage] || '/images/independent-1.jpg'}
                    alt={profile.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/independent-1.jpg';
                    }}
                  />
                  
                  {/* Enhanced gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10"></div>
                  
                  {/* Enhanced Badges */}
                  <div className="absolute top-4 left-4 flex flex-col space-y-3">
                    <motion.div 
                      className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl backdrop-blur-sm border border-white/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center">
                        <Crown className="w-4 h-4 mr-2" />
                      {profile.category}
                    </div>
                    </motion.div>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex flex-col space-y-3">
                    <motion.div 
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-xl text-xs font-bold shadow-xl border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                      Verified
                    </div>
                    </motion.div>
                  </div>

                  {/* Enhanced Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl"
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev + 1) % allImages.length);
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full transition-all backdrop-blur-sm border border-white/20 shadow-xl hover:shadow-2xl"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.button>
                    </>
                  )}

                  {/* Image counter */}
                {allImages.length > 1 && (
                    <motion.div 
                      className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      {selectedImage + 1} / {allImages.length}
                    </motion.div>
                  )}
                </motion.div>

                {/* Enhanced Thumbnail Gallery */}
                {allImages.length > 1 && (
                  <div className="p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="grid grid-cols-5 lg:grid-cols-5 gap-3 lg:gap-4">
                      {allImages.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setSelectedImage(index);
                            openImageModal(index);
                          }}
                          className={`relative h-20 lg:h-28 rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${
                            selectedImage === index 
                              ? 'border-pink-500 shadow-2xl scale-110 ring-4 ring-pink-200' 
                              : 'border-gray-200 hover:border-pink-300 hover:shadow-lg'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Image
                            src={image || '/images/independent-1.jpg'}
                            alt={`${profile.name} - Image ${index + 1}`}
                            fill
                            className="object-cover transition-all duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 80px, 112px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/independent-1.jpg';
                            }}
                          />
                          
                          {/* Enhanced overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          {selectedImage === index && (
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-purple-500/30 flex items-center justify-center backdrop-blur-sm"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center shadow-xl">
                                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                              </div>
                            </motion.div>
                          )}
                          
                          {/* Play icon for video thumbnails (if needed) */}
                          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-6 h-6 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <Play className="w-3 h-3 text-white fill-current" />
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Mobile Contact Card - Show before Profile Information on mobile */}
              <div className="lg:hidden">
                <motion.div 
                  className="bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-3xl shadow-2xl p-6 text-white relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
                  
                  <div className="relative">
                    <h3 className="text-xl font-black mb-4 flex items-center">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 shadow-lg">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      Contact & Book
                    </h3>
                    
                    <motion.div 
                      className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <p className="text-xs font-medium text-center leading-relaxed">
                      📞 <strong>Serious inquiries only</strong><br/>
                      Fill the booking form to proceed<br/>
                      ⏰ <strong>Contact hours: 10 AM - 11 PM only</strong><br/>
                      🚗 <strong>Outcall: Min 2 shots, within 8km</strong><br/>
                      🌙 <strong>After 11 PM: Full night only</strong>
                    </p>
                    </motion.div>
                    
                    <motion.button
                      onClick={() => setShowBookingModal(true)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 text-sm font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                      Book Now via WhatsApp
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Enhanced Profile Information */}
              <motion.div 
                className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full blur-2xl opacity-50"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-8 lg:mb-10">
                  <div className="flex-1">
                      <motion.h2 
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        {profile.name}
                      </motion.h2>
                      
                      <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-sm lg:text-base text-gray-600 mb-6">
                        <motion.div 
                          className="flex items-center bg-gradient-to-r from-pink-50 to-rose-50 px-4 py-2 rounded-2xl border border-pink-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          <MapPin className="w-5 h-5 mr-2 text-pink-500" />
                          <span className="font-semibold text-gray-800">{profile.location}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center bg-gradient-to-r from-blue-50 to-cyan-50 px-4 py-2 rounded-2xl border border-blue-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 }}
                        >
                          <Users className="w-5 h-5 mr-2 text-blue-500" />
                          <span className="font-semibold text-gray-800">{profile.age} years old</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center bg-gradient-to-r from-yellow-50 to-amber-50 px-4 py-2 rounded-2xl border border-yellow-200"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Award className="w-5 h-5 mr-2 text-yellow-500" />
                          <span className="font-semibold text-gray-800">{profile.category}</span>
                        </motion.div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                        <motion.div 
                          className="flex items-center bg-gradient-to-r from-yellow-100 to-amber-100 px-5 py-3 rounded-2xl border border-yellow-300 shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 }}
                        >
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                          <span className="font-bold text-gray-900 text-base lg:text-lg">{profile.rating}/5</span>
                          <span className="text-gray-600 ml-3 hidden lg:inline font-medium">({profile.reviews_count} reviews)</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center bg-gradient-to-r from-green-100 to-emerald-100 px-5 py-3 rounded-2xl border border-green-300 shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.0 }}
                        >
                          <Eye className="w-5 h-5 text-green-500 mr-2" />
                          <span className="font-bold text-gray-900 text-base lg:text-lg">{profile.views_count || 0} views</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Pricing */}
                <motion.div 
                  className="mb-8 lg:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    Services & Pricing
                  </h3>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {Object.entries(profile.pricing).map(([service, price], index) => (
                      <motion.div 
                        key={service} 
                        className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + (index * 0.1) }}
                        whileHover={{ y: -5 }}
                      >
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative">
                          <div className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4 font-semibold uppercase tracking-wide">{service}</div>
                          <div className="text-lg lg:text-xl font-black text-gray-700 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">{price}</div>
                      </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Enhanced Testimonials */}
              {testimonials.length > 0 && (
                <motion.div 
                  className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full blur-3xl opacity-50"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                        <Star className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
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
                </motion.div>
              )}

              {/* Enhanced Booking Terms & Conditions */}
              <motion.div 
                className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-orange-100 rounded-full blur-2xl opacity-50"></div>
                
                <div className="relative">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                      <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    Booking Terms & Conditions
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Outcall Requirements */}
                    <motion.div 
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.0 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                        Outcall Service Requirements
                      </h4>
                      <ul className="space-y-3 text-sm lg:text-base text-gray-700">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Hotel Reservation:</strong> Confirmed hotel reservation screenshot required</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Room Verification:</strong> Room key photo + room number must be provided</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Check-in Process:</strong> Girl will check-in at reception and come directly to your room</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Guest Registration:</strong> Some hotels require girl name as 2nd guest before booking cab</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Minimum Service:</strong> 2 shots required for outcall within max 8 km</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Time Restrictions */}
                    <motion.div 
                      className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.1 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-purple-500" />
                        Time Restrictions
                      </h4>
                      <ul className="space-y-3 text-sm lg:text-base text-gray-700">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Late Night Bookings:</strong> After 11 PM only full night booking available</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Contact Hours:</strong> Bookings accepted between 10 AM - 11 PM only</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Location & Payment */}
                    <motion.div 
                      className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.2 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Lock className="w-5 h-5 mr-2 text-green-500" />
                        Location & Payment Policy
                      </h4>
                      <ul className="space-y-3 text-sm lg:text-base text-gray-700">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Incall Location:</strong> Hotel name disclosed only after your confirmation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Meeting Policy:</strong> Girls will not meet anywhere outside the booked hotel</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Payment Method:</strong> Pay only once girl reaches your hotel room (Cash/UPI)</span>
                        </li>
                      </ul>
                    </motion.div>

                    {/* Cab Charges */}
                    <motion.div 
                      className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2.3 }}
                    >
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                        Cab Charges Policy
                      </h4>
                      <ul className="space-y-3 text-sm lg:text-base text-gray-700">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Distance Limit:</strong> Above 8 km, cab charges are mandatory in advance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Price Exclusion:</strong> Listed prices exclude cab charges</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span><strong>Variable Charges:</strong> Cab charges will vary based on distance and time</span>
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Related Profiles */}
              {relatedProfiles.length > 0 && (
                <motion.div 
                  className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.4 }}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-50"></div>
                  
                  <div className="relative">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                        <Users className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
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
                </motion.div>
              )}
            </div>

            {/* Enhanced Sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-6 lg:space-y-8">
              {/* Enhanced Contact Card */}
              <motion.div 
                className="bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 text-white relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <h3 className="text-2xl lg:text-3xl font-black mb-6 lg:mb-8 flex items-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                      <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7" />
                    </div>
                  Contact & Book
                </h3>
                
                  <motion.div 
                    className="mb-6 p-4 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <p className="text-sm lg:text-base font-medium text-center leading-relaxed">
                    📞 <strong>Serious inquiries only please</strong><br/>
                    Fill the booking form to proceed<br/>
                    ⏰ <strong>Contact hours: 10 AM - 11 PM only</strong><br/>
                    🚗 <strong>Outcall: Min 2 shots, within 8km</strong><br/>
                    🌙 <strong>After 11 PM: Full night bookings only</strong>
                  </p>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <motion.button
                    onClick={() => setShowBookingModal(true)}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 lg:py-5 text-base lg:text-lg font-bold rounded-2xl lg:rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                  >
                      <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    Book Now via WhatsApp
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>

              {/* Enhanced Quick Info */}
              <motion.div 
                className="bg-white rounded-3xl lg:rounded-[2rem] shadow-2xl p-8 lg:p-10 border border-white/20 relative overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-2xl opacity-50"></div>
                
                <div className="relative">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 flex items-center">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-3 lg:mr-4 shadow-lg">
                      <Award className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                  Quick Info
                </h3>
                  
                  <div className="space-y-4 lg:space-y-5">
                    {[
                      { label: 'Category', value: profile.category, icon: Crown, color: 'purple' },
                      { label: 'Age', value: `${profile.age} years`, icon: Users, color: 'blue' },
                      { label: 'Location', value: profile.location, icon: MapPin, color: 'pink' },
                      { label: 'Rating', value: `${profile.rating}/5`, icon: Star, color: 'yellow', isRating: true },
                      { label: 'Reviews', value: profile.reviews_count.toString(), icon: BarChart3, color: 'green' },
                      { label: 'Views', value: (profile.views_count || 0).toString(), icon: Eye, color: 'indigo' }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex justify-between items-center py-3 lg:py-4 px-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + (index * 0.1) }}
                        whileHover={{ scale: 1.02 }}
                      >
                  <div className="flex items-center">
                          <div className={`w-8 h-8 bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center mr-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-4 h-4 text-white" />
                    </div>
                          <span className="text-gray-600 text-sm lg:text-base font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-center">
                          {item.isRating && (
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
                          )}
                          <span className="font-bold text-gray-900 text-sm lg:text-base">{item.value}</span>
                    </div>
                      </motion.div>
                    ))}
                  </div>
                    </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Footer />

        {/* Image Modal */}
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
                >
                  <Image
                    src={allImages[modalImageIndex] || '/images/independent-1.jpg'}
                    alt={`${profile?.name || 'Profile'} - Image ${modalImageIndex + 1}`}
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

        {/* Enhanced Booking Modal */}
        <AnimatePresence>
          {showBookingModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20 relative"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-red-100 rounded-full blur-3xl opacity-50"></div>
                
                {/* Enhanced Modal Header */}
                <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 text-white p-8 rounded-t-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-red-400/20"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-black">Book {profile?.name}</h3>
                      <motion.button
                      onClick={() => setShowBookingModal(false)}
                        className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      </motion.button>
                  </div>
                    <p className="text-pink-100 text-base leading-relaxed">Fill the form to send booking request via WhatsApp</p>
                  </div>
                </div>

                {/* Enhanced Modal Body */}
                <div className="p-8 space-y-6">
                  {/* Name */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Name *</label>
                    <input
                      type="text"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Your name"
                      required
                    />
                  </motion.div>

                  {/* Age */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Age *</label>
                    <input
                      type="number"
                      value={bookingForm.age}
                      onChange={(e) => setBookingForm({...bookingForm, age: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Your age"
                      min="18"
                      max="80"
                      required
                    />
                  </motion.div>

                  {/* Location */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Location *</label>
                    <input
                      type="text"
                      value={bookingForm.location}
                      onChange={(e) => setBookingForm({...bookingForm, location: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Your current location"
                      required
                    />
                  </motion.div>

                  {/* Service Type */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Looking for? *</label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        type="button"
                        onClick={() => setBookingForm({...bookingForm, serviceType: 'incall'})}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
                          bookingForm.serviceType === 'incall' 
                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 shadow-lg' 
                            : 'border-gray-200 hover:border-pink-300 bg-gray-50 hover:bg-pink-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Incall
                      </motion.button>
                      <motion.button
                        type="button"
                        onClick={() => setBookingForm({...bookingForm, serviceType: 'outcall'})}
                        className={`p-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
                          bookingForm.serviceType === 'outcall' 
                            ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 shadow-lg' 
                            : 'border-gray-200 hover:border-pink-300 bg-gray-50 hover:bg-pink-50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Outcall
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Hotel Name (only for outcall) */}
                  {bookingForm.serviceType === 'outcall' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-bold text-gray-800 mb-3">Hotel Name *</label>
                      <input
                        type="text"
                        value={bookingForm.hotelName}
                        onChange={(e) => setBookingForm({...bookingForm, hotelName: e.target.value})}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                        placeholder="Hotel name and address"
                        required
                      />
                    </motion.div>
                  )}

                  {/* Shots */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">How many shots? *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['1', '2', '3', 'Full Night'].map((shot) => (
                        <motion.button
                          key={shot}
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, shots: shot})}
                          className={`p-4 rounded-2xl border-2 transition-all duration-300 font-semibold ${
                            bookingForm.shots === shot 
                              ? 'border-pink-500 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 shadow-lg' 
                              : 'border-gray-200 hover:border-pink-300 bg-gray-50 hover:bg-pink-50'
                          }`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {shot}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Service Date */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Service Date *</label>
                    <input
                      type="date"
                      value={bookingForm.serviceDate}
                      onChange={(e) => setBookingForm({...bookingForm, serviceDate: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </motion.div>

                  {/* Service Time */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <label className="block text-sm font-bold text-gray-800 mb-3">Service Time *</label>
                    <input
                      type="time"
                      value={bookingForm.serviceTime}
                      onChange={(e) => setBookingForm({...bookingForm, serviceTime: e.target.value})}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                      required
                    />
                  </motion.div>

                  {/* Terms and Conditions Checkbox */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200"
                  >
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 text-pink-500 border-2 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                      />
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">I agree to the following terms:</span>
                        <ul className="mt-2 space-y-1 text-xs">
                          <li>• {bookingForm.serviceType === 'outcall' ? 'I will provide hotel reservation screenshot, room key photo, and room number' : 'I understand hotel location will be disclosed after confirmation'}</li>
                          <li>• Payment will be made only once girl reaches the hotel room (Cash/UPI)</li>
                          <li>• Girls will not meet anywhere outside the booked hotel</li>
                          <li>• {bookingForm.serviceType === 'outcall' ? 'Minimum 2 shots required for outcall within 8 km' : 'I understand all booking policies'}</li>
                          <li>• {bookingForm.serviceType === 'outcall' ? 'Cab charges apply above 8 km distance' : 'Listed prices exclude additional charges'}</li>
                          <li>• After 11 PM only full night booking is available</li>
                        </ul>
                      </div>
                    </label>
                  </motion.div>
                </div>

                {/* Enhanced Modal Footer */}
                <div className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-b-3xl">
                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-2xl hover:bg-gray-100 transition-all duration-300 font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      onClick={handleBookingFormSubmit}
                      disabled={!termsAccepted}
                      className={`flex-1 px-6 py-3 rounded-2xl transition-all duration-300 font-bold shadow-lg ${
                        termsAccepted 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-xl' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                      whileHover={termsAccepted ? { scale: 1.02 } : {}}
                      whileTap={termsAccepted ? { scale: 0.98 } : {}}
                    >
                      Send via WhatsApp
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}