import { Rating } from '@/components/ui/rating';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  client_name: string;
  client_location: string;
  rating: number;
  content: string;
  is_featured: boolean;
  profile_image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const featuredTestimonial = testimonials.find(t => t.is_featured);
  const otherTestimonials = testimonials.filter(t => !t.is_featured).slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their experiences.
          </p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 text-pink-300 mx-auto mb-6" />
              <Rating value={featuredTestimonial.rating} size="lg" className="justify-center mb-6" />
              <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "{featuredTestimonial.content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={featuredTestimonial.profile_image}
                    alt={featuredTestimonial.client_name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold">{featuredTestimonial.client_name}</div>
                  <div className="text-gray-300 text-sm">{featuredTestimonial.client_location}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Rating value={testimonial.rating} className="mb-4" />
              <blockquote className="text-gray-200 mb-4 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.profile_image}
                    alt={testimonial.client_name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.client_name}</div>
                  <div className="text-gray-300 text-xs">{testimonial.client_location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
            <Quote className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-medium">Chennai's Genuine Escorts Service</span>
          </div>
        </div>
      </div>
    </section>
  );
};
