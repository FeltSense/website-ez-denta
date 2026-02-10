'use client'

import Image from 'next/image'
import { Award, Heart, Users, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Patients' },
    { icon: Award, value: '4.9', label: 'Star Rating' },
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Heart, value: '100%', label: 'Patient Care' }
  ]

  const values = [
    {
      title: 'Gentle Approach',
      description: 'We understand dental anxiety. Our team specializes in creating a calm, comfortable environment where every patient feels at ease.'
    },
    {
      title: 'Expert Team',
      description: 'Board-certified dentists with decades of combined experience, committed to continuing education and the latest techniques.'
    },
    {
      title: 'Family Focused',
      description: 'From toddlers to grandparents, we provide comprehensive care for the whole family under one roof.'
    },
    {
      title: 'Transparent Pricing',
      description: 'No surprises. We provide clear cost estimates upfront and work with most insurance plans to maximize your benefits.'
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Your Comfort is Our Priority
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            For over 15 years, EZ Dental Care has been Houston's trusted partner for comprehensive dental services. 
            We believe everyone deserves a healthy, confident smile—without the stress that often comes with dental visits.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/about-background-1770696785041.png"
              alt="EZ Dental Care team and modern office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Story */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Built on Trust, Driven by Care
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                EZ Dental Care was founded with a simple mission: make quality dental care accessible, 
                affordable, and anxiety-free for Houston families. We've grown from a single practitioner 
                to a full-service practice, but our commitment to patient comfort has never changed.
              </p>
              <p>
                Our state-of-the-art facility combines the latest technology with a warm, welcoming 
                atmosphere. From routine cleanings to complex restorations, we approach every procedure 
                with the same gentle touch and meticulous attention to detail.
              </p>
              <p>
                With a 4.9-star patient satisfaction rating, we're proud to be the dental home for 
                thousands of Houston families. Your smile is our success story.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 py-12 border-y border-gray-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-50 text-primary-500 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-light">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}