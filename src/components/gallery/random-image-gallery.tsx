'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, RefreshCw, Shuffle, Phone, MessageCircle, MapPin, Calendar, Heart, Shield } from 'lucide-react';

interface RandomImageGalleryProps {
  count?: number;
  className?: string;
  showRefreshButton?: boolean;
  imageHeight?: string;
}

interface ProfileImage {
  image: string;
  name: string;
  age: number;
  location: string;
  rating: number;
}

export function RandomImageGallery({
  count = 8,
  className = '',
  showRefreshButton = true,
  imageHeight = 'h-64'
}: RandomImageGalleryProps) {
  const [images, setImages] = useState<ProfileImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageLoadingStates, setImageLoadingStates] = useState<Record<string, boolean>>({});
  const [visibleImages, setVisibleImages] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Function to get varied service descriptions
  const getServiceDescription = (name: string) => {
    const descriptions = [
      "Book High Profile Escorts in Chennai Today",
      "Elite Independent Escorts in Chennai Tonight", 
      "Premium Escort Girls in Chennai Available Now",
      "Chennai VIP Escorts for Gentlemen Available Now",
      "Book Top-Class Escorts in Chennai Instantly",
      "Independent Chennai Escorts for Booking Now",
      "High-Class Escort Girls in Chennai Today",
      "Luxury Escort Service in Chennai Tonight",
      "High-End Independent Escorts in Chennai Now",
      "Call for VIP Escort Girls in Chennai Today",
      "Premium Chennai Escorts Available 24/7",
      "Book Beautiful Escorts in Chennai Tonight",
      "Chennai's Finest Escort Service Available",
      "Top Rated Escort Girls in Chennai Today",
      "Exclusive Escort Service in Chennai Now"
    ];
    
    // Use name hash to get consistent description for same name
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    return descriptions[Math.abs(hash) % descriptions.length];
  };

  // Generate random image paths with profile information
  const generateRandomImages = () => {
    setLoading(true);
    setError(null);
    setImageLoadingStates({});
    
    try {
      // Available profiles with their images and information
      const profiles = [
        {
          name: "Ananya Sharma",
          age: 22,
          location: "Chennai",
          rating: 4.9,
          images: [
            '/images/profiles/ananya-sharma/ananya-sharma-0.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-1.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-2.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-3.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-4.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-5.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-6.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-7.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-8.avif',
            '/images/profiles/ananya-sharma/ananya-sharma-9.avif'
          ]
        },
        {
          name: "Dimple Kapoor",
          age: 24,
          location: "T. Nagar",
          rating: 4.8,
          images: [
            '/images/profiles/dimple-kapoor/dimple-kapoor-0.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-1.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-2.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-3.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-4.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-5.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-6.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-7.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-8.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-9.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-10.avif',
            '/images/profiles/dimple-kapoor/dimple-kapoor-11.avif'
          ]
        },
        {
          name: "Sofia Ahmed",
          age: 23,
          location: "OMR",
          rating: 4.9,
          images: [
            '/images/profiles/sofia-ahmed/sofia-ahmed-0.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-1.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-2.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-3.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-4.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-5.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-6.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-7.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-8.avif',
            '/images/profiles/sofia-ahmed/sofia-ahmed-9.avif'
          ]
        },
        {
          name: "Heena Patel",
          age: 21,
          location: "Adyar",
          rating: 4.7,
          images: [
            '/images/profiles/heena-patel/heena-patel-0.avif',
            '/images/profiles/heena-patel/heena-patel-1.avif',
            '/images/profiles/heena-patel/heena-patel-2.avif',
            '/images/profiles/heena-patel/heena-patel-3.avif',
            '/images/profiles/heena-patel/heena-patel-4.avif',
            '/images/profiles/heena-patel/heena-patel-5.avif',
            '/images/profiles/heena-patel/heena-patel-6.avif',
            '/images/profiles/heena-patel/heena-patel-7.avif',
            '/images/profiles/heena-patel/heena-patel-8.avif',
            '/images/profiles/heena-patel/heena-patel-9.avif',
            '/images/profiles/heena-patel/heena-patel-10.avif',
            '/images/profiles/heena-patel/heena-patel-11.avif'
          ]
        },
        {
          name: "Kalpna Singh",
          age: 25,
          location: "ECR",
          rating: 4.8,
          images: [
            '/images/profiles/kalpna-singh/kalpna-singh-0.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-1.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-2.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-3.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-4.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-5.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-6.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-7.avif',
            '/images/profiles/kalpna-singh/kalpna-singh-8.avif'
          ]
        },
        {
          name: "Aisha Khan",
          age: 22,
          location: "Anna Nagar",
          rating: 4.9,
          images: [
            '/images/profiles/aisha-khan/aisha-khan-0.avif',
            '/images/profiles/aisha-khan/aisha-khan-1.avif',
            '/images/profiles/aisha-khan/aisha-khan-2.avif',
            '/images/profiles/aisha-khan/aisha-khan-3.avif',
            '/images/profiles/aisha-khan/aisha-khan-4.avif',
            '/images/profiles/aisha-khan/aisha-khan-5.avif',
            '/images/profiles/aisha-khan/aisha-khan-6.avif',
            '/images/profiles/aisha-khan/aisha-khan-7.avif'
          ]
        },
        {
          name: "Sneha Gupta",
          age: 21,
          location: "Tech Mile",
          rating: 4.8,
          images: [
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-1_1756376207704_1y59n3jvc.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-2_1756376207704_6taz6qjl9.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-3_1756376207704_ecphe74wz.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-4_1756376207704_m2vbn5g8s.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-5_1756376207704_a7h73cb3o.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-6_1756376207704_68lxigkc7.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-7_1756376207704_l1c2t2au7.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-8_1756376207704_k6ww6xyjw.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-9_1756376207704_r73n5g9f4.avif',
            '/images/profiles/sneha-gupta/sneha-gupta-extracted-page-10_1756376207704_xxq0kr1sb.avif'
          ]
        },
        {
          name: "Priya Reddy",
          age: 21,
          location: "Guindy",
          rating: 4.7,
          images: [
            '/images/profiles/priya-reddy/priya-reddy-0.avif',
            '/images/profiles/priya-reddy/priya-reddy-1.avif',
            '/images/profiles/priya-reddy/priya-reddy-2.avif',
            '/images/profiles/priya-reddy/priya-reddy-3.avif',
            '/images/profiles/priya-reddy/priya-reddy-4.avif',
            '/images/profiles/priya-reddy/priya-reddy-5.avif',
            '/images/profiles/priya-reddy/priya-reddy-6.avif',
            '/images/profiles/priya-reddy/priya-reddy-7.avif',
            '/images/profiles/priya-reddy/priya-reddy-8.avif',
            '/images/profiles/priya-reddy/priya-reddy-9.avif',
            '/images/profiles/priya-reddy/priya-reddy-10.avif'
          ]
        },
        {
          name: "Riya Malhotra",
          age: 24,
          location: "OMR",
          rating: 4.9,
          images: [
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-0.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-1.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-2.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-3.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-4.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-5.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-6.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-7.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-8.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-9.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-10.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-11.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-12.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-13.avif',
            '/images/profiles/riya-malhotra/riya-malhotra-HOT 🔥 MODEL BJ SPECIALIST-14.avif'
          ]
        },
        {
          name: "Kamini Joshi",
          age: 22,
          location: "Airport",
          rating: 4.8,
          images: [
            '/images/profiles/kamini-joshi/kamini-joshi-0.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-1.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-2.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-3.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-4.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-5.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-6.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-7.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-8.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-9.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-10.avif',
            '/images/profiles/kamini-joshi/kamini-joshi-11.avif'
          ]
        },
        {
          name: "Lisa Petrov",
          age: 25,
          location: "Moscow",
          rating: 4.9,
          images: [
            '/images/profiles/lisa-petrov/lisa-petrov-0.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-1.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-2.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-3.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-4.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-5.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-6.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-7.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-8.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-9.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-10.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-11.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-12.avif',
            '/images/profiles/lisa-petrov/lisa-petrov-13.avif'
          ]
        },
        {
          name: "Meera Nair",
          age: 23,
          location: "Nungambakkam",
          rating: 4.7,
          images: [
            '/images/profiles/meera-nair/meera-nair-0.avif',
            '/images/profiles/meera-nair/meera-nair-1.avif',
            '/images/profiles/meera-nair/meera-nair-2.avif',
            '/images/profiles/meera-nair/meera-nair-3.avif',
            '/images/profiles/meera-nair/meera-nair-4.avif',
            '/images/profiles/meera-nair/meera-nair-5.avif',
            '/images/profiles/meera-nair/meera-nair-6.avif',
            '/images/profiles/meera-nair/meera-nair-7.avif',
            '/images/profiles/meera-nair/meera-nair-8.avif',
            '/images/profiles/meera-nair/meera-nair-9.avif',
            '/images/profiles/meera-nair/meera-nair-10.avif',
            '/images/profiles/meera-nair/meera-nair-11.avif'
          ]
        },
        {
          name: "Kavya Gill",
          age: 24,
          location: "Punjab",
          rating: 4.8,
          images: [
            '/images/profiles/kavya-gill/kavya-gill-0.avif',
            '/images/profiles/kavya-gill/kavya-gill-1.avif',
            '/images/profiles/kavya-gill/kavya-gill-2.avif',
            '/images/profiles/kavya-gill/kavya-gill-3.avif',
            '/images/profiles/kavya-gill/kavya-gill-4.avif',
            '/images/profiles/kavya-gill/kavya-gill-5.avif',
            '/images/profiles/kavya-gill/kavya-gill-6.avif',
            '/images/profiles/kavya-gill/kavya-gill-7.avif',
            '/images/profiles/kavya-gill/kavya-gill-8.avif',
            '/images/profiles/kavya-gill/kavya-gill-9.avif',
            '/images/profiles/kavya-gill/kavya-gill-10.avif',
            '/images/profiles/kavya-gill/kavya-gill-11.avif',
            '/images/profiles/kavya-gill/kavya-gill-12.avif',
            '/images/profiles/kavya-gill/kavya-gill-13.avif',
            '/images/profiles/kavya-gill/kavya-gill-14.avif',
            '/images/profiles/kavya-gill/kavya-gill-15.avif',
            '/images/profiles/kavya-gill/kavya-gill-16.avif',
            '/images/profiles/kavya-gill/kavya-gill-17.avif',
            '/images/profiles/kavya-gill/kavya-gill-18.avif',
            '/images/profiles/kavya-gill/kavya-gill-19.avif',
            '/images/profiles/kavya-gill/kavya-gill-20.avif',
            '/images/profiles/kavya-gill/kavya-gill-21.avif'
          ]
        },
        {
          name: "Shreya Iyer",
          age: 22,
          location: "Taj Hotel",
          rating: 4.9,
          images: [
            '/images/profiles/shreya-iyer/shreya-iyer-0.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-1.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-2.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-3.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-4.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-5.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-6.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-7.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-8.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-9.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-10.avif',
            '/images/profiles/shreya-iyer/shreya-iyer-11.avif'
          ]
        },
        {
          name: "Pooja Agarwal",
          age: 21,
          location: "Taj Reception",
          rating: 4.8,
          images: [
            '/images/profiles/pooja-agarwal/pooja-agarwal-0.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-1.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-2.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-3.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-4.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-5.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-6.avif',
            '/images/profiles/pooja-agarwal/pooja-agarwal-7.avif'
          ]
        },
        {
          name: "Jessie Williams",
          age: 20,
          location: "College Area",
          rating: 4.8,
          images: [
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-1.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-2.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-3.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-4.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-5.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-6.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-7.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-8.avif',
            '/images/profiles/jessie-williams/jessie-williams-extracted-image-9.avif'
          ]
        },
        {
          name: "Gagan Singh",
          age: 24,
          location: "Model Town",
          rating: 4.9,
          images: [
            '/images/profiles/gagan-singh/gagan-singh-0.avif',
            '/images/profiles/gagan-singh/gagan-singh-1.avif',
            '/images/profiles/gagan-singh/gagan-singh-2.avif',
            '/images/profiles/gagan-singh/gagan-singh-3.avif',
            '/images/profiles/gagan-singh/gagan-singh-4.avif',
            '/images/profiles/gagan-singh/gagan-singh-5.avif',
            '/images/profiles/gagan-singh/gagan-singh-6.avif',
            '/images/profiles/gagan-singh/gagan-singh-7.avif',
            '/images/profiles/gagan-singh/gagan-singh-8.avif',
            '/images/profiles/gagan-singh/gagan-singh-9.avif',
            '/images/profiles/gagan-singh/gagan-singh-10.avif',
            '/images/profiles/gagan-singh/gagan-singh-11.avif',
            '/images/profiles/gagan-singh/gagan-singh-12.avif'
          ]
        },
        {
          name: "Neha Sharma",
          age: 23,
          location: "Calendar Studio",
          rating: 4.8,
          images: [
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-1_1756376886358_2mvxk9o45.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-2_1756376886358_0m2kc6p3q.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-3_1756376886358_lcimxfoja.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-4_1756376886358_vppqplfjc.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-5_1756376886358_h1x7gvdwl.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-6_1756376886358_llj1xr79q.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-7_1756376886358_0t6q1ij42.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-8_1756376886358_9a7ehp1b4.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-9_1756376886358_j4yynftdz.avif',
            '/images/profiles/neha-sharma/neha-sharma-extracted-page-10_1756376886358_b8ekfn01o.avif'
          ]
        },
        {
          name: "Preet Kaur",
          age: 22,
          location: "Punjab",
          rating: 4.7,
          images: [
            '/images/profiles/preet-kaur/preet-kaur-0.avif',
            '/images/profiles/preet-kaur/preet-kaur-1.avif',
            '/images/profiles/preet-kaur/preet-kaur-2.avif',
            '/images/profiles/preet-kaur/preet-kaur-3.avif',
            '/images/profiles/preet-kaur/preet-kaur-4.avif',
            '/images/profiles/preet-kaur/preet-kaur-5.avif',
            '/images/profiles/preet-kaur/preet-kaur-6.avif',
            '/images/profiles/preet-kaur/preet-kaur-7.avif',
            '/images/profiles/preet-kaur/preet-kaur-8.avif',
            '/images/profiles/preet-kaur/preet-kaur-9.avif',
            '/images/profiles/preet-kaur/preet-kaur-10.avif'
          ]
        },
        {
          name: "Natasha Volkova",
          age: 25,
          location: "Aeroflot",
          rating: 4.9,
          images: [
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-1_1756376954643_xnkk6e250.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-2_1756376954643_f1ie5h8s6.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-3_1756376954643_wf7pmlf5v.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-4_1756376954643_8p9bu6pvl.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-5_1756376954643_yu20q2wxv.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-6_1756376954643_fo7unus9i.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-7_1756376954643_tlua881o0.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-8_1756376954643_7xmeems76.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-9_1756376954643_eqwmqqmbb.avif',
            '/images/profiles/natasha-volkova/natasha-volkova-extracted-page-10_1756376954643_aqix0n5bw.avif'
          ]
        }
      ];
      
      // Shuffle profiles and select random ones
      const shuffledProfiles = [...profiles].sort(() => 0.5 - Math.random());
      const selectedProfiles = shuffledProfiles.slice(0, Math.min(count, profiles.length));
      
      // For each selected profile, pick a random image
      const profileImages = selectedProfiles.map(profile => ({
        image: profile.images[Math.floor(Math.random() * profile.images.length)],
        name: profile.name,
        age: profile.age,
        location: profile.location,
        rating: profile.rating
      }));
      
      setImages(profileImages);
      
      // Initialize loading states for all images
      const initialLoadingStates: Record<string, boolean> = {};
      profileImages.forEach(profile => {
        initialLoadingStates[profile.image] = true;
      });
      setImageLoadingStates(initialLoadingStates);
    } catch (err) {
      setError('Failed to load random images');
      console.error('Error generating random images:', err);
    } finally {
      setLoading(false);
    }
  };

  // Preload images for better performance
  const preloadImages = (imageUrls: string[]) => {
    imageUrls.forEach(url => {
      const img = new window.Image();
      img.src = url;
    });
  };

  // Load images on component mount
  useEffect(() => {
    generateRandomImages();
  }, [count]);

  // Preload images when they change
  useEffect(() => {
    if (images.length > 0) {
      const imageUrls = images.map(profile => profile.image);
      preloadImages(imageUrls);
    }
  }, [images]);

  // Setup intersection observer for lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageSrc = entry.target.getAttribute('data-src');
            if (imageSrc) {
              setVisibleImages(prev => new Set([...prev, imageSrc]));
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Refresh images function
  const refreshImages = () => {
    generateRandomImages();
  };

  if (loading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 animate-pulse"
          >
            <div className="flex h-52 sm:h-56">
              <div className="w-2/5 bg-gradient-to-br from-gray-700 to-gray-600 relative">
                {/* Watermark placeholder in skeleton */}
                <div className="absolute bottom-3 right-3 z-20">
                  <div className="bg-gray-500/90 rounded-lg px-3 py-1.5 shadow-lg">
                    <div className="w-16 h-4 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="w-3/5 p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="space-y-3">
                  <div className="h-6 bg-gray-700 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                  <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-4 bg-gray-700 rounded w-16"></div>
                      <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                      <div className="h-4 bg-gray-700 rounded w-12"></div>
                    </div>
                    <div className="h-4 bg-gray-700 rounded w-20"></div>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <div className="flex-1 h-10 bg-gray-700 rounded-lg"></div>
                  <div className="flex-1 h-10 bg-gray-700 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">
          <RefreshCw className="w-12 h-12 mx-auto mb-2" />
          <p className="text-lg font-semibold">{error}</p>
        </div>
        <button
          onClick={refreshImages}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Refresh Button */}
      {showRefreshButton && (
        <motion.button
          onClick={refreshImages}
          className="absolute -top-16 right-0 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Shuffle className="w-4 h-4" />
          Refresh Gallery
        </motion.button>
      )}

      {/* Profile Cards Grid */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
        {images.map((profile, index) => (
          <motion.div
            key={`${profile.image}-${index}`}
            className="relative p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 via-indigo-500 to-cyan-500"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-pink-500/20 transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02]">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Premium Badge */}
            <div className="absolute top-3 right-3 z-10">
              <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                <Star className="w-3 h-3 fill-current" />
                <span className="text-xs">{profile.rating}</span>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute top-3 left-3 z-10">
              <div className="bg-green-500/90 backdrop-blur-sm text-white p-1.5 rounded-full shadow-lg">
                <Shield className="w-3 h-3" />
              </div>
            </div>

            <div className="flex h-52 sm:h-56">
              {/* Left Side - Image */}
              <div className="w-2/5 relative">
                {/* Loading Skeleton */}
                {imageLoadingStates[profile.image] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-600 animate-pulse rounded-l-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-gray-600 via-gray-500 to-gray-600 rounded-l-2xl"></div>
                    {/* Watermark placeholder during loading */}
                    <div className="absolute bottom-3 right-3 z-20">
                      <div className="bg-gray-500/90 rounded-lg px-3 py-1.5 shadow-lg">
                        <div className="w-16 h-4 bg-gray-400 rounded"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                {visibleImages.has(profile.image) || index < 4 ? (
                  <Image
                    src={profile.image}
                    alt={`${profile.name} - ${profile.location}`}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                      imageLoadingStates[profile.image] ? 'opacity-0' : 'opacity-100'
                    }`}
                    priority={index < 4}
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    onLoad={() => {
                      setImageLoadingStates(prev => ({
                        ...prev,
                        [profile.image]: false
                      }));
                    }}
                    onError={() => {
                      console.warn(`Image not found: ${profile.image}`);
                      setImageLoadingStates(prev => ({
                        ...prev,
                        [profile.image]: false
                      }));
                    }}
                  />
                ) : (
                  <div 
                    ref={(el) => {
                      if (el && observerRef.current) {
                        el.setAttribute('data-src', profile.image);
                        observerRef.current.observe(el);
                      }
                    }}
                    className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-500 animate-pulse rounded-l-2xl"
                  />
                )}
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-l-2xl"></div>
                
                {/* Watermark */}
                <div className="absolute bottom-3 right-3 z-20">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                    <span className="text-sm font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      LillyBabe
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Content */}
              <div className="w-3/5 p-4 sm:p-6 flex flex-col justify-between relative">
                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Name and Service */}
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-pink-400 transition-colors duration-300 truncate">
                      {profile.name}
                    </h3>
                    <p className="text-pink-400 text-xs font-medium leading-tight line-clamp-2">
                      {getServiceDescription(profile.name)}
                    </p>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
                  
                  {/* Profile Info */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="w-3 h-3 text-pink-400 flex-shrink-0" />
                      <span className="text-xs font-medium">{profile.age} years</span>
                      <div className="w-1 h-1 bg-gray-500 rounded-full mx-1"></div>
                      <Heart className="w-3 h-3 text-red-400 flex-shrink-0" />
                      <span className="text-xs font-medium">Indian</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-xs font-medium truncate">{profile.location}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <motion.a
                    href={`tel:+918121426651`}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-2.5 rounded-lg text-xs font-semibold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-3 h-3" />
                    <span className="hidden sm:inline">Call Now</span>
                    <span className="sm:hidden">Call</span>
                  </motion.a>
                  
                  <motion.a
                    href={`https://wa.me/918121426651?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(profile.name)}%20from%20LillyBabe%20Chennai%20Escorts.%20Please%20share%20more%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-2.5 rounded-lg text-xs font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span className="hidden sm:inline">WhatsApp</span>
                    <span className="sm:hidden">Chat</span>
                  </motion.a>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
