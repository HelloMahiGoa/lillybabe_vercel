'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, Phone, MessageCircle, Heart, Eye, Calendar, Clock, Users, Award, Shield, Zap, ArrowLeft, ChevronLeft, ChevronRight, BarChart3, Crown, Sparkles, Play, Share2, Bookmark, RefreshCw, Lock, Search, X, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Profile, Testimonial } from '@/types';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CriticalCSS } from '@/components/ui/critical-css';

// Component to display when a profile is not available
function ProfileNotAvailable({ slug }: { slug: string }) {
  const [randomProfiles, setRandomProfiles] = useState<Profile[]>([]);
  const [featuredProfiles, setFeaturedProfiles] = useState<Profile[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCarouselVisible, setIsCarouselVisible] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 8;

  // Engaging headings for unavailable profiles
  const headings = [
    "Not Available Today",
    "She's Busy Today",
    "Currently Engaged",
    "Fully Booked",
    "Taking Time Off",
    "Not Free Right Now",
    "With Another Client",
    "On Break Today"
  ];
  
  // Engaging messages for unavailable profiles
  const messages = [
    "Sorry, this girl isn't free today. Have a look at our other gorgeous girls below.",
    "She's with someone else right now. We've got many other beautiful girls waiting to meet you.",
    "This girl is booked out today. Check out our other premium Chennai girls ready to make your day special.",
    "She's not free at the moment. Take a look at our other elite Chennai girls who are ready now.",
    "She's busy with bookings today. Our other stunning Chennai girls are available right now.",
    "She's fully booked today. Browse our other verified girls for an unforgettable time.",
    "She's taking some time off. Have a look at our other high-class Chennai girls ready to meet you.",
    "She's not available today. Our other premium Chennai girls are waiting for your call.",
    "She's with another client right now. Our other beautiful girls are free to meet you today.",
    "She's not free at the moment. Browse our other stunning Chennai girls ready to make your day special."
  ];
  
  // Random selections
  const randomIndex = Math.floor(Math.random() * Math.min(headings.length, messages.length));
  const randomHeading = headings[randomIndex % headings.length];
  const randomMessage = messages[randomIndex % messages.length];

  useEffect(() => {
    // Function to fetch all available profiles
    async function fetchProfiles() {
      try {
        setIsLoading(true);
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        // Fetch all active profiles with a larger limit
        const response = await fetch(`/api/profiles-list?limit=20&offset=0`, {
          signal: controller.signal,
          headers: {
            'Connection': 'close',
          },
        });
        
        clearTimeout(timeoutId);
        const data = await response.json();
        
        if (response.ok && data.profiles && data.profiles.length > 0) {
          // Get featured profiles
          const featured = data.profiles.filter((p: Profile) => p.is_featured).slice(0, 3);
          setFeaturedProfiles(featured);
          
          // Get all regular profiles (excluding featured ones to avoid duplication)
          const regular = data.profiles
            .filter((p: Profile) => !featured.some((f: Profile) => f.id === p.id));
            
          setRandomProfiles(regular);
        }
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          console.warn('Profile fetch request was aborted due to timeout');
        } else {
          console.error('Error fetching profiles:', error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Engaging Content */}
        <div className="text-center mb-12">
          <motion.div 
            className="w-24 h-24 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Heart className="w-12 h-12 text-white" />
          </motion.div>
              <motion.h3 
                className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {randomHeading}
              </motion.h3>
          <motion.p 
            className="text-gray-300 mb-8 text-lg md:text-xl max-w-2xl mx-auto font-medium"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {randomMessage}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={() => window.history.back()}
              className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </motion.div>
        </div>
        
        {/* Featured Profiles Carousel */}
        {featuredProfiles.length > 0 && isCarouselVisible && (
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                <span className="flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                  Today's VIP Selection
                </span>
              </h2>
              <button 
                onClick={() => setIsCarouselVisible(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex space-x-6">
                  {featuredProfiles.map((profile, index) => (
                    <motion.div
                      key={profile.id}
                      className="flex-shrink-0 w-64 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl shadow-xl overflow-hidden border-2 border-yellow-400"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <Link href={`/escorts/${profile.slug}`}>
                        <div className="relative h-80">
                          <Image
                            src={profile.photo_url || '/images/placeholder.jpg'}
                            alt={profile.name}
                            fill
                            sizes="256px"
                            className="object-cover"
                          />
                          <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                            <Crown className="w-3 h-3 mr-1" />
                            Featured
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <div className="text-white font-bold">{profile.name}</div>
                            <div className="flex justify-between text-white/80 text-xs">
                              <span>{profile.age} yrs</span>
                              <span>{profile.category}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center text-amber-700 text-sm">
                              <MapPin className="w-3 h-3 mr-1" />
                              {profile.location}
                            </div>
                            <div className="flex items-center text-amber-700 text-sm">
                              <Star className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" />
                              {profile.rating}
                            </div>
                          </div>
                          <div className="mt-2">
                            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Premium</span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <>
            {/* Available Profiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  <span className="flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-pink-400 fill-pink-400" />
                    All Available Profiles
                  </span>
                </h2>
                <div className="text-gray-300 text-sm">
                  {randomProfiles.length} profiles available
                </div>
              </div>
              
              {/* Calculate pagination */}
              {(() => {
                // Get current profiles
                const indexOfLastProfile = currentPage * profilesPerPage;
                const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
                const currentProfiles = randomProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
                
                // Calculate page numbers
                const totalPages = Math.ceil(randomProfiles.length / profilesPerPage);
                
                return (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {currentProfiles.map((profile, index) => (
                        <motion.div
                          key={profile.id}
                          className="bg-white rounded-xl shadow-xl overflow-hidden"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * (index % 8) }}
                          whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                          <Link href={`/escorts/${profile.slug}`}>
                            <div className="relative h-80">
                              <Image
                                src={profile.photo_url || '/images/placeholder.jpg'}
                                alt={profile.name}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                              />
                              {profile.is_featured && (
                                <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                  Featured
                                </div>
                              )}
                            </div>
                            <div className="p-4">
                              <h3 className="font-bold text-lg text-gray-900 mb-1">{profile.name}</h3>
                              <div className="flex justify-between items-center mb-2">
                                <div className="flex items-center text-gray-600 text-sm">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {profile.location}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm">
                                  <Star className="w-3 h-3 mr-1 text-yellow-500 fill-yellow-500" />
                                  {profile.rating}
                                </div>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-800">{profile.category}</span>
                                <span className="text-sm font-medium text-gray-800">{profile.age} yrs</span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                      <div className="flex justify-center mt-8">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              currentPage === 1 
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                                : 'bg-white text-pink-600 hover:bg-gray-100'
                            }`}
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          
                          {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                currentPage === pageNum
                                  ? 'bg-pink-600 text-white'
                                  : 'bg-white text-pink-600 hover:bg-gray-100'
                              }`}
                            >
                              {pageNum}
                            </button>
                          ))}
                          
                          <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              currentPage === totalPages
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                : 'bg-white text-pink-600 hover:bg-gray-100'
                            }`}
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
              
            </motion.div>
            
            {/* Back to Home Button */}
            <div className="mt-10 text-center space-y-4">
              <div className="space-y-3">
                <p className="text-white text-lg">
                  <span className="bg-gradient-to-r from-pink-400 to-red-400 inline-block text-transparent bg-clip-text font-bold">Don't miss out!</span> Our most popular Chennai escorts get booked quickly.
                </p>
                <p className="text-gray-300 text-base max-w-2xl mx-auto">
                  Lillybabe offers the most exclusive selection of verified escorts in Chennai. All our companions are carefully selected to ensure you have an unforgettable experience.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/">
                  <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 w-full sm:w-auto">
                    Back to Home
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button
                  onClick={() => window.history.back()}
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-300 w-full sm:w-auto"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      
      <Footer />
      
      {/* Custom CSS for hiding scrollbars */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

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
    return <ProfileNotAvailable slug={params.slug as string} />;
  }

  const allImages = [profile.photo_url, ...(profile.gallery_urls || [])].filter(Boolean);

  return (
    <>
      <CriticalCSS />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        
        {/* Modern Hero Section */}
        <div className="relative bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Navigation Bar */}
            <div className="flex items-center justify-between py-4">
              <motion.button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
                whileHover={{ x: -2 }}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span className="font-medium">Back</span>
              </motion.button>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`p-2 rounded-full transition-all duration-200 ${
                    isBookmarked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                </motion.button>
                
                  <motion.button
                  className="p-2 bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-500 rounded-full transition-all duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                  <Share2 className="w-5 h-5" />
                  </motion.button>
              </div>
            </div>
                  
            {/* Profile Header */}
            <div className="pb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="flex items-center space-x-4">
                    <motion.div 
                    className="relative w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                    <Heart className="w-10 h-10 text-white fill-current" />
                    </motion.div>
                    
                  <div>
                      <motion.h1 
                      className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      >
                        {profile.name}
                      </motion.h1>
                    
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm font-semibold text-gray-800">{profile.rating}/5</span>
                        </div>
                      
                      <div className="flex items-center bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        <MapPin className="w-4 h-4 text-blue-500 mr-1" />
                        <span className="text-sm font-semibold text-gray-800">{profile.location}</span>
                        </div>
                      
                      <div className="flex items-center bg-green-50 px-3 py-1 rounded-full border border-green-200">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-green-700">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.button 
                    onClick={() => setShowBookingModal(true)}
                    className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Now
                  </motion.button>
                  </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">
              {/* Modern Image Gallery */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Main Image Display */}
                <div className="relative">
                <motion.div 
                    className="relative h-64 sm:h-80 lg:h-96 cursor-pointer group"
                  onClick={() => openImageModal(selectedImage)}
                    whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={allImages[selectedImage] || '/images/independent-1.jpg'}
                    alt={profile.name}
                    fill
                      className="object-cover transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/independent-1.jpg';
                    }}
                  />
                  
                    {/* Overlay with badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Crown className="w-4 h-4 mr-1 text-purple-500" />
                      {profile.category}
                    </div>
                  </div>
                  
                    {/* Verified Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                      Verified
                    </div>
                  </div>

                    {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev - 1 + allImages.length) % allImages.length);
                        }}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                          <ChevronLeft className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedImage((prev) => (prev + 1) % allImages.length);
                        }}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg"
                          whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                          <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </>
                  )}

                  {/* Image counter */}
                {allImages.length > 1 && (
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage + 1} / {allImages.length}
                      </div>
                  )}
                </motion.div>
                </div>

                {/* Thumbnail Grid */}
                {allImages.length > 1 && (
                  <div className="p-4 bg-gray-50">
                    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-2">
                      {allImages.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`relative h-16 sm:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            selectedImage === index 
                              ? 'border-pink-500 shadow-md' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Image
                            src={image || '/images/independent-1.jpg'}
                            alt={`${profile.name} - Image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="80px"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = '/images/independent-1.jpg';
                            }}
                          />
                          
                          {selectedImage === index && (
                            <div className="absolute inset-0 bg-pink-500/20 flex items-center justify-center">
                              <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                              </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Mobile Contact Card - Show before Profile Information on mobile */}
              <div className="lg:hidden space-y-4">
                <motion.div 
                  className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                    <h3 className="text-xl font-bold">Contact & Book</h3>
                  </div>
                  
                  <div className="mb-4 p-3 bg-white/20 rounded-xl">
                    <p className="text-sm font-medium text-center">
                      📞 <strong>Serious inquiries only</strong><br/>
                      ⏰ <strong>10 AM - 11 PM only</strong><br/>
                      🚗 <strong>Outcall: Min 2 shots, within 8km</strong>
                    </p>
                  </div>
                    
                    <motion.button
                      onClick={() => setShowBookingModal(true)}
                    className="w-full bg-white text-pink-600 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book Now
                    </motion.button>
                </motion.div>

                {/* Mobile Booking Terms */}
              <motion.div 
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Booking Terms</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                        Outcall Requirements
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Hotel reservation screenshot required</li>
                        <li>• Room key photo + room number</li>
                        <li>• Min 2 shots for outcall within 8km</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-1 text-purple-500" />
                        Time Restrictions
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• After 11 PM: Full night only</li>
                        <li>• Contact hours: 10 AM - 11 PM</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                        <Lock className="w-4 h-4 mr-1 text-green-500" />
                        Payment Policy
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Cash/UPI after girl reaches room</li>
                        <li>• Only at booked hotel location</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                      <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                        Cab Charges
                      </h4>
                      <ul className="space-y-1 text-xs text-gray-700">
                        <li>• Above 8km: Mandatory advance</li>
                        <li>• Variable by distance and time</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Modern Profile Information */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Profile Information</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mr-3">
                        <Crown className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Category</div>
                        <div className="font-semibold text-gray-900">{profile.category}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Age</div>
                        <div className="font-semibold text-gray-900">{profile.age} years</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Location</div>
                        <div className="font-semibold text-gray-900">{profile.location}</div>
                      </div>
                      </div>
                      
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Rating</div>
                        <div className="font-semibold text-gray-900 flex items-center">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          {profile.rating}/5
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">Reviews</div>
                        <div className="font-semibold text-gray-900">{profile.reviews_count}</div>
                    </div>
                  </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
                        <Eye className="w-4 h-4 text-white" />
                </div>
                      <div>
                        <div className="text-sm text-gray-600">Views</div>
                        <div className="font-semibold text-gray-900">{profile.views_count || 0}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Modern Pricing Section */}
                <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                    <Zap className="w-5 h-5 text-white" />
                    </div>
                  <h3 className="text-2xl font-bold text-gray-900">Services & Pricing</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {Object.entries(profile.pricing).map(([service, price], index) => (
                      <motion.div 
                        key={service} 
                      className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-200 group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + (index * 0.1) }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="text-sm text-gray-600 mb-2 font-medium">{service}</div>
                      <div className="text-xl font-bold text-gray-900">{price}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

              {/* Modern Profile Description */}
              {profile.profile_description && (
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">About {profile.name}</h3>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    <div 
                      className="text-gray-700 leading-relaxed space-y-4"
                      dangerouslySetInnerHTML={{ 
                        __html: (profile.profile_description || '')
                          .split('\n\n')
                          .map(paragraph => `<p>${paragraph}</p>`)
                          .join('')
                      }}
                    />
                  </div>
              </motion.div>
              )}

              {/* Modern Testimonials */}
              {testimonials.length > 0 && (
                <motion.div 
                  className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mr-3">
                      <Star className="w-5 h-5 text-white" />
                      </div>
                    <h3 className="text-2xl font-bold text-gray-900">Client Reviews</h3>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                              {testimonials[currentTestimonial]?.name?.charAt(0) || 'C'}
                            </span>
                          </div>
                          <div>
                          <div className="font-semibold text-gray-900">{testimonials[currentTestimonial]?.name || 'Anonymous'}</div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                className={`w-4 h-4 ${i < (testimonials[currentTestimonial]?.rating || 5) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      <div className="text-sm text-gray-500">
                          {currentTestimonial + 1} of {testimonials.length}
                        </div>
                      </div>
                    
                    <p className="text-gray-700 text-lg italic leading-relaxed">
                        "{testimonials[currentTestimonial]?.comment || 'Amazing experience with this escort. Highly recommended!'}"
                      </p>
                    </div>
                    
                    {testimonials.length > 1 && (
                    <div className="flex justify-center space-x-3 mt-4">
                      <motion.button
                          onClick={prevTestimonial}
                        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      <motion.button
                          onClick={nextTestimonial}
                        className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </motion.button>
                      </div>
                    )}
                </motion.div>
              )}

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

            {/* Modern Sidebar */}
            <div className="hidden lg:block lg:col-span-1 space-y-6">
              {/* Contact Card */}
              <motion.div 
                className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5" />
                    </div>
                  <h3 className="text-xl font-bold">Contact & Book</h3>
                </div>
                
                <div className="mb-4 p-3 bg-white/20 rounded-xl">
                  <p className="text-sm font-medium text-center">
                    📞 <strong>Serious inquiries only</strong><br/>
                    ⏰ <strong>10 AM - 11 PM only</strong><br/>
                    🚗 <strong>Outcall: Min 2 shots, within 8km</strong>
                  </p>
                </div>
                
                    <motion.button
                    onClick={() => setShowBookingModal(true)}
                  className="w-full bg-white text-pink-600 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                  >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book Now
                    </motion.button>
              </motion.div>

              {/* Booking Terms */}
              <motion.div 
                className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Booking Terms</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-1 text-blue-500" />
                      Outcall Requirements
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Hotel reservation screenshot required</li>
                      <li>• Room key photo + room number</li>
                      <li>• Min 2 shots for outcall within 8km</li>
                    </ul>
                    </div>

                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-purple-500" />
                      Time Restrictions
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• After 11 PM: Full night only</li>
                      <li>• Contact hours: 10 AM - 11 PM</li>
                    </ul>
                    </div>

                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                      <Lock className="w-4 h-4 mr-1 text-green-500" />
                      Payment Policy
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Cash/UPI after girl reaches room</li>
                      <li>• Only at booked hotel location</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                      Cab Charges
                    </h4>
                    <ul className="space-y-1 text-xs text-gray-700">
                      <li>• Above 8km: Mandatory advance</li>
                      <li>• Variable by distance and time</li>
                    </ul>
                  </div>
                    </div>
              </motion.div>
            </div>
          </div>
        </div>

        <Footer />

        {/* Modern Image Modal */}
        <AnimatePresence>
          {showImageModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative w-full h-full flex items-center justify-center p-4"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 p-2 rounded-full transition-all shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Image Counter */}
                <motion.div
                  className="absolute top-4 left-4 z-10 bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {modalImageIndex + 1} / {allImages.length}
                </motion.div>

                {/* Main Image */}
                <motion.div
                  className="relative max-w-5xl max-h-[80vh]"
                  initial={{ scale: 0.9 }}
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
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full transition-all shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </>
                )}

                {/* Thumbnail Strip */}
                {allImages.length > 1 && (
                  <motion.div
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {allImages.map((image, index) => (
                      <motion.button
                        key={index}
                        onClick={() => setModalImageIndex(index)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                          index === modalImageIndex 
                            ? 'border-pink-500 scale-110' 
                            : 'border-white/50 hover:border-white/80'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Image
                          src={image || '/images/independent-1.jpg'}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                        {index === modalImageIndex && (
                          <div className="absolute inset-0 bg-pink-500/30 flex items-center justify-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
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

        {/* Modern Booking Modal */}
        <AnimatePresence>
          {showBookingModal && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingModal(false)}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-6 rounded-t-2xl">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">Book {profile?.name}</h3>
                      <motion.button
                      onClick={() => setShowBookingModal(false)}
                      className="text-white hover:text-gray-200 transition-colors p-1 rounded-full hover:bg-white/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      </motion.button>
                  </div>
                  <p className="text-pink-100 text-sm mt-2">Fill the form to send booking request via WhatsApp</p>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  {/* Age */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
                    <input
                      type="number"
                      value={bookingForm.age}
                      onChange={(e) => setBookingForm({...bookingForm, age: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Your age"
                      min="18"
                      max="80"
                      required
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                    <input
                      type="text"
                      value={bookingForm.location}
                      onChange={(e) => setBookingForm({...bookingForm, location: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Your current location"
                      required
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Looking for? *</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setBookingForm({...bookingForm, serviceType: 'incall'})}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${
                          bookingForm.serviceType === 'incall' 
                            ? 'border-pink-500 bg-pink-50 text-pink-700' 
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                      >
                        Incall
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingForm({...bookingForm, serviceType: 'outcall'})}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${
                          bookingForm.serviceType === 'outcall' 
                            ? 'border-pink-500 bg-pink-50 text-pink-700' 
                            : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                        }`}
                      >
                        Outcall
                      </button>
                    </div>
                  </div>

                  {/* Hotel Name (only for outcall) */}
                  {bookingForm.serviceType === 'outcall' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Hotel Name *</label>
                      <input
                        type="text"
                        value={bookingForm.hotelName}
                        onChange={(e) => setBookingForm({...bookingForm, hotelName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="Hotel name and address"
                        required
                      />
                    </div>
                  )}

                  {/* Shots */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">How many shots? *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {['1', '2', '3', 'Full Night'].map((shot) => (
                        <button
                          key={shot}
                          type="button"
                          onClick={() => setBookingForm({...bookingForm, shots: shot})}
                          className={`p-3 rounded-lg border-2 transition-all font-medium ${
                            bookingForm.shots === shot 
                              ? 'border-pink-500 bg-pink-50 text-pink-700' 
                              : 'border-gray-200 hover:border-gray-300 bg-gray-50'
                          }`}
                        >
                          {shot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Service Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Date *</label>
                    <input
                      type="date"
                      value={bookingForm.serviceDate}
                      onChange={(e) => setBookingForm({...bookingForm, serviceDate: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  {/* Service Time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Time *</label>
                    <input
                      type="time"
                      value={bookingForm.serviceTime}
                      onChange={(e) => setBookingForm({...bookingForm, serviceTime: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      required
                    />
                  </div>

                  {/* Terms and Conditions */}
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                      />
                      <div className="text-sm text-gray-700">
                        <span className="font-semibold text-gray-900">I agree to the terms:</span>
                        <ul className="mt-1 space-y-1 text-xs">
                          <li>• {bookingForm.serviceType === 'outcall' ? 'Hotel reservation screenshot required' : 'Hotel location disclosed after confirmation'}</li>
                          <li>• Payment after girl reaches room (Cash/UPI)</li>
                          <li>• {bookingForm.serviceType === 'outcall' ? 'Min 2 shots for outcall within 8km' : 'All booking policies apply'}</li>
                          <li>• After 11 PM: Full night only</li>
                        </ul>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 bg-gray-50 rounded-b-2xl">
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowBookingModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleBookingFormSubmit}
                      disabled={!termsAccepted}
                      className={`flex-1 px-4 py-2 rounded-lg transition-colors font-semibold ${
                        termsAccepted 
                          ? 'bg-green-500 text-white hover:bg-green-600' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Send via WhatsApp
                    </button>
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