'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  showCTA?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, tagline, showCTA = false }) => {
  return (
    <div className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-serif text-5xl md:text-display text-concert-ivory mb-4 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-concert-gold font-light mb-6">
            {subtitle}
          </p>
        )}

        {tagline && (
          <p className="text-lg md:text-xl text-concert-ivory-soft max-w-3xl mx-auto mb-12 leading-relaxed">
            {tagline}
          </p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Link
              href="/videos"
              className="px-8 py-3 border border-concert-gold text-concert-gold hover:bg-concert-gold hover:text-concert-black transition-all duration-300 font-medium tracking-wide"
            >
              Watch Conducting
            </Link>
            <Link
              href="/repertoire"
              className="px-8 py-3 bg-concert-gold text-concert-black hover:bg-concert-gold-muted transition-all duration-300 font-medium tracking-wide"
            >
              View Repertoire
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Hero;
