'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Dr. Martinez and her team made my root canal completely painless. I was so nervous, but they explained everything and kept me comfortable throughout. Best dental experience I've ever had!",
      name: "Sarah Johnson",
      role: "Patient since 2022",
      image: "/images/testimonial-testimonials-0-1770696770542.jpg",
      rating: 5
    },
    {
      quote: "After years of dental anxiety, EZ Dental Care changed everything for me. The gentle approach and patient staff helped me finally address my oral health. My smile has never looked better!",
      name: "Michael Chen",
      role: "Patient since 2021",
      image: "/images/testimonial-testimonials-0-1770696771522.jpg",
      rating: 5
    },
    {
      quote: "As a parent, finding a dentist my kids actually enjoy visiting seemed impossible. The team here is wonderful with children - professional, caring, and they make dental care fun. Highly recommend!",
      name: "Jessica Rodriguez",
      role: "Family Patient",
      image: "/images/testimonial-testimonials-0-1770696772358.jpg",
      rating: 5
    }
  ]

  return (
    <section id="testimonials" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the families we've been proud to serve
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary-500 text-primary-500"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary-500 text-primary-500"
                />
              ))}
            </div>
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span>from over 500 patient reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}