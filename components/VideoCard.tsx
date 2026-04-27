'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import TextureOverlay from './TextureOverlay';

interface VideoCardProps {
  title: string;
  description: string;
  youtubeId: string;
  category?: string;
}

export default function VideoCard({
  title,
  description,
  youtubeId,
  category,
}: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <div className="relative overflow-hidden bg-concert-black-lighter aspect-video">
          {/* Image */}
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.currentTarget.src =
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop';
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-concert-black/80 via-concert-black/40 to-transparent" />

          {/* Texture overlay */}
          <TextureOverlay />

          {/* Play button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-16 h-16 rounded-full border-2 border-aged-gold flex items-center justify-center group-hover:bg-aged-gold/10 transition-all duration-300">
              <svg
                className="w-6 h-6 text-aged-gold ml-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="pt-6 space-y-3">
          {category && (
            <div className="text-caption text-aged-gold/80">{category}</div>
          )}
          <h3 className="text-xl font-serif text-ivory group-hover:text-aged-gold transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-ivory-soft text-sm line-clamp-2">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
