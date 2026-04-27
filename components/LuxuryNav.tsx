'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function LuxuryNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Videos', href: '/videos' },
    { label: 'Repertoire', href: '/repertoire' },
    { label: 'Press', href: '/press' },
    { label: 'Calendar', href: '/calendar' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-concert-black/95 backdrop-blur-sm border-b border-concert-black-lighter' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <div className="font-serif text-lg font-semibold tracking-wide text-ivory uppercase">
            Ethan <span className="text-aged-gold">Tajalle</span>
          </div>
        </Link>

        {/* Nav Items */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ivory-soft hover:text-aged-gold transition-colors duration-300 text-sm font-light tracking-wide uppercase"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2 border border-aged-gold/50 text-aged-gold hover:bg-aged-gold/10 transition-all duration-300 text-xs font-semibold tracking-widest uppercase"
        >
          Inquire
        </Link>
      </div>
    </motion.nav>
  );
}
