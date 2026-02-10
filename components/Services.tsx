'use client';

import Image from 'next/image';
import { Check, Calendar, Shield, Heart, Sparkles, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'General Dentistry',
      description: 'Comprehensive dental exams, cleanings, and preventive care to keep your smile healthy and bright.',
      features: ['Routine Checkups', 'Professional Cleanings', 'Oral Health Education']
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our aesthetic treatments designed to boost your confidence.',
      features: ['Teeth Whitening', 'Veneers & Bonding', 'Smile Makeovers']
    },
    {
      icon: Shield,
      title: 'Restorative Care',
      description: 'Restore function and beauty to damaged teeth with our advanced restorative procedures.',
      features: ['Dental Crowns', 'Bridges & Implants', 'Root Canal Therapy']
    },
    {
      icon: Users,
      title: 'Family Dentistry',
      description: 'Gentle, compassionate care for patients of all ages in a welcoming family environment.',
      features: ['Pediatric Services', 'Senior Care', 'Family Discounts']
    }
  ];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6">
            Complete dental care for your entire family
          </h2>
          <p className="text-xl text-gray-600 font-light">
            From routine cleanings to advanced procedures, our experienced team provides personalized care in a comfortable, stress-free environment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-500/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                <service.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Feature Sections */}
        <div className="space-y-32">
          {/* Emergency Care */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/services-feature-1770696786921.png"
                alt="Dental examination with modern equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-50 text-accent-600 text-sm font-medium mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                Same-Day Appointments
              </div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                Emergency dental care when you need it most
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Dental emergencies don't wait for business hours. Our team is available for urgent care appointments to address pain, injuries, or unexpected dental issues promptly.
              </p>
              <ul className="space-y-4 mb-8">
                {['Same-day emergency visits', 'After-hours availability', 'Pain relief treatments', 'Expert trauma care'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors">
                Call for Emergency Care
              </button>
            </div>
          </div>

          {/* Advanced Technology */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-50 text-secondary-600 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2" />
                Advanced Technology
              </div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6">
                State-of-the-art equipment for precise, comfortable care
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We invest in the latest dental technology to provide faster, more accurate diagnoses and more comfortable treatments with better outcomes.
              </p>
              <ul className="space-y-4">
                {['Digital X-rays with 90% less radiation', 'Intraoral cameras for detailed views', 'Laser dentistry for gentle procedures', 'CAD/CAM same-day restorations'].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/services-feature-1770696785397.png"
                alt="Modern dental technology and equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-gray-900 mb-6">
            Not sure which service you need?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a consultation and we'll help you determine the best treatment plan for your unique needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-500 text-white font-medium rounded-xl hover:bg-primary-600 transition-colors">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:border-primary-500 hover:text-primary-500 transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}