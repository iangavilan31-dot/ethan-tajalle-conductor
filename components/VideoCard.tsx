'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface VideoCardProps {
  title: string;
  description: string;
  youtubeId: string;
  category?: string;
  featured?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  description,
  youtubeId,
  category,
  featured = false,
}) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={featured ? 'md:col-span-2' : ''}
    >
      <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer">
        <motion.div
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className={`group cursor-pointer overflow-hidden ${
            featured ? 'aspect-video' : 'aspect-video'
          }`}
        >
          {/* Thumbnail with Overlay */}
          <div className="relative w-full h-full bg-concert-black-lighter overflow-hidden">
            <Image
              src={thumbnailUrl}
              alt={title}
              fill
              className="object-cover group-hover:brightness-75 transition-all duration-300"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-concert-gold/90 flex items-center justify-center group-hover:bg-concert-gold transition-colors"
              >
                <svg
                  className="w-8 h-8 text-concert-black ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className={`${featured ? 'p-6' : 'p-4'} bg-concert-black-lighter`}>
            {category && (
              <span className="text-xs text-concert-gold uppercase tracking-widest font-semibold">
                {category}
              </span>
            )}
            <h3 className={`${featured ? 'text-xl' : 'text-lg'} font-serif text-concert-ivory mt-2 group-hover:text-concert-gold transition-colors`}>
              {title}
            </h3>
            {featured && (
              <p className="text-concert-ivory-soft text-sm mt-3 line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default VideoCard;
