'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-hero-1770696778073.png"
          alt="Modern dental care facility"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-slate-950 opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="h-2 w-2 rounded-full bg-secondary-400 animate-pulse" />
              <span className="text-sm font-light text-white">Serving Houston Families Since 2015</span>
            </div>

            {/* Main Headline */}
            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Quality dental care with a{' '}
              <span className="font-semibold text-primary-400">gentle touch</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-xl sm:text-2xl font-light text-slate-200 mb-12 leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Professional, affordable dental services for your family. Trusted by thousands with a{' '}
              <span className="text-secondary-400 font-normal">4.9-star patient satisfaction rating</span>.
            </p>

            {/* Trust Indicators */}
            <div
              className={`flex flex-wrap items-center gap-6 mb-12 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-secondary-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-normal text-slate-300">4.9/5 Rating</span>
              </div>
              <div className="h-4 w-px bg-slate-600" />
              <span className="text-sm font-light text-slate-300">Houston, TX</span>
              <div className="h-4 w-px bg-slate-600" />
              <span className="text-sm font-light text-slate-300">Family-Focused Care</span>
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Link
                href="tel:+17134513333"
                className="group inline-flex items-center justify-center gap-3 bg-primary-500 text-white px-8 py-4 rounded-lg font-normal text-lg shadow-lg shadow-primary-500/20 hover:bg-primary-600 hover:scale-105 transition-all duration-200"
              >
                <Phone className="h-5 w-5" />
                Call Now: +1 713-451-3333
              </Link>

              <Link
                href="#features"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-light text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}