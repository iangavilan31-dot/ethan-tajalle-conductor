'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TextureOverlay from './TextureOverlay';
import Image from 'next/image';

export default function CinematicHero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-concert-black flex items-center justify-center">
      {/* Background with gradient and image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
          alt="Concert hall"
          fill
          className="object-cover opacity-15 mix-blend-multiply"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-concert-black/40 via-concert-black/60 to-concert-black" />

        {/* Ambient light effect */}
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-aged-gold/5 rounded-full blur-3xl"
          style={{ pointerEvents: 'none' }}
        />

        <TextureOverlay />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center space-y-8">
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-subtitle"
        >
          Emerging Conductor
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-display-lg text-ivory"
        >
          Ethan Tajalle
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-aged-gold to-transparent w-48 mx-auto"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl text-ivory-soft font-light max-w-2xl mx-auto leading-relaxed"
        >
          Precision, imagination, and orchestral storytelling for a new generation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8"
        >
          <Link
            href="/videos"
            className="group relative px-8 py-3 border border-aged-gold text-ivory hover:text-concert-black transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-aged-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            <span className="relative text-sm font-semibold tracking-widest uppercase">
              Watch Conducting
            </span>
          </Link>

          <Link
            href="/repertoire"
            className="group relative px-8 py-3 border border-ivory/30 text-ivory-soft hover:text-ivory transition-all duration-300"
          >
            <div className="absolute inset-0 bg-ivory/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative text-sm font-semibold tracking-widest uppercase">
              View Repertoire
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-ivory-soft/50 text-xs tracking-widest uppercase"
        >
          Scroll
        </motion.div>
      </motion.div>
    </div>
  );
}
