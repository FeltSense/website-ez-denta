import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-white mb-4">EZ Dental Care</h3>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Quality dental care with a gentle touch. Serving Houston families with professional, affordable dental services and a 4.9-star patient satisfaction rating.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="tel:+17134513333" 
                className="flex items-center gap-3 text-slate-300 hover:text-primary-400 transition-colors duration-200 group w-fit"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors duration-200">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">+1 713-451-3333</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 mt-0.5 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="leading-relaxed">12450 East Fwy Suite 140, Houston, TX 77015, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link 
                href="#services" 
                className="text-slate-400 hover:text-primary-400 transition-colors duration-200 w-fit"
              >
                Services
              </Link>
              <Link 
                href="#about" 
                className="text-slate-400 hover:text-primary-400 transition-colors duration-200 w-fit"
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-slate-400 hover:text-primary-400 transition-colors duration-200 w-fit"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Office Hours</h4>
            <div className="flex flex-col gap-2 text-slate-400 text-sm">
              <div className="flex justify-between gap-4">
                <span>Monday - Friday</span>
                <span className="text-slate-300">8am - 6pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturday</span>
                <span className="text-slate-300">9am - 3pm</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sunday</span>
                <span className="text-slate-300">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {currentYear} EZ Dental Care. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-500 hover:text-slate-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}