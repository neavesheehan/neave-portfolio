'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold text-brand-pink">
            NS
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#experience" 
              className="text-brand-navy hover:text-brand-pink transition-colors font-medium"
            >
              Experience
            </a>
            <a 
              href="#portfolio" 
              className="text-brand-navy hover:text-brand-pink transition-colors font-medium"
            >
              Portfolio
            </a>
            <a 
              href="#testimonials" 
              className="text-brand-navy hover:text-brand-pink transition-colors font-medium"
            >
              Testimonials
            </a>
            <Link 
              href="/blog" 
              className="text-brand-navy hover:text-brand-pink transition-colors font-medium"
            >
              Blog
            </Link>
            <a 
              href="#contact" 
              className="bg-brand-pink text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
