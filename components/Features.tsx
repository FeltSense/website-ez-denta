'use client'

import { Star, Users, MapPin, Clock, Heart, Shield, Award } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Star,
      title: 'Top-Rated Excellence',
      description: '4.9/5 Google rating from 269 reviews. Our experienced dental professionals are committed to delivering exceptional care that patients trust and recommend.',
      stat: '4.9★',
      statLabel: '269 Reviews'
    },
    {
      icon: Shield,
      title: 'Comprehensive Services',
      description: 'From routine cleanings and preventive care to cosmetic procedures and restorations—all your dental needs under one roof.',
      image: '/images/services-feature-1770696777265.png'
    },
    {
      icon: MapPin,
      title: 'Convenient Houston Location',
      description: 'Easily accessible at 12450 East Fwy Suite 140. Ample parking and a welcoming environment make every visit stress-free.',
      stat: 'East Fwy',
      statLabel: 'Suite 140'
    },
    {
      icon: Clock,
      title: 'Same-Day Emergencies',
      description: 'Dental emergencies don't wait—and neither do we. Same-day appointments available for urgent care when you need it most.',
      highlight: true
    },
    {
      icon: Heart,
      title: 'Family-Friendly Care',
      description: 'A gentle touch for patients of all ages. We create a comfortable, anxiety-free experience for children, adults, and seniors alike.',
      image: '/images/services-feature-1770696777739.png'
    },
    {
      icon: Award,
      title: 'Modern & Comfortable',
      description: 'State-of-the-art equipment in treatment rooms designed for your comfort. We accept most insurance plans to make quality care affordable.',
      stat: 'Most',
      statLabel: 'Insurance Accepted'
    }
  ]

  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Why Choose EZ Dental Care
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Experience the difference that quality, compassionate dental care makes. 
            We're here to serve Houston families with the expertise and gentle touch you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 ${
                  feature.highlight
                    ? 'lg:col-span-1 border-primary-500 shadow-sm'
                    : hoveredCard === index
                    ? 'border-gray-300 shadow-md'
                    : 'hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                {feature.image && (
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gray-50">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${
                  feature.highlight ? 'bg-primary-500' : 'bg-gray-100'
                } mb-6 transition-colors duration-300 ${
                  hoveredCard === index && !feature.highlight ? 'bg-primary-50' : ''
                }`}>
                  <Icon className={`w-6 h-6 ${
                    feature.highlight ? 'text-white' : 'text-primary-500'
                  }`} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {feature.stat && (
                  <div className="pt-4 border-t border-gray-100">
                    <div className="text-2xl font-semibold text-primary-500">
                      {feature.stat}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {feature.statLabel}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-50 rounded-full px-6 py-3 border border-gray-200">
            <Users className="w-5 h-5 text-secondary-500" />
            <span className="text-gray-700">
              Trusted by Houston families since our founding
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}