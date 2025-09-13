import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    name: 'Teen Escorts',
    slug: 'teen-escorts',
    image: '/images/teen.webp',
    description: 'Young & Beautiful'
  },
  {
    name: 'Housewife Escorts',
    slug: '#',
    image: '/images/housewife.webp',
    description: 'Mature & Experienced'
  },
  {
    name: 'Russian Escorts',
    slug: '#',
    image: '/images/russian1.webp',
    description: 'Exotic & Charming'
  },
  {
    name: 'Independent Escorts',
    slug: '#',
    image: '/images/independent.jpg',
    description: 'Professional & Reliable'
  },
  {
    name: 'Tamil Escorts',
    slug: '#',
    image: '/images/tamil.webp',
    description: 'Local & Authentic'
  },
  {
    name: 'Celebrity Escorts',
    slug: 'celebrity-escorts',
    image: '/images/celebrity.webp',
    description: 'VIP & Exclusive'
  },
  {
    name: 'Mallu Escorts',
    slug: '#',
    image: '/images/mallu.webp',
    description: 'Kerala Beauty'
  },
  {
    name: 'Model Escorts',
    slug: '#',
    image: '/images/model.webp',
    description: 'Fashion & Style'
  }
];

export function GalleryCategories() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-gray-600">
            Choose from our diverse collection of escort categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-bold text-lg mb-1 group-hover:text-pink-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm opacity-90">
                  {category.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              100% Genuine Chennai Escorts Agency
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Choose from more than 500 Escort Girls and book your service now.
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/logo.webp"
                alt="LillyBabe Logo"
                width={200}
                height={60}
                className="h-15 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
