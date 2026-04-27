'use client';

import { motion } from 'framer-motion';

interface EventCardProps {
  date: string;
  title: string;
  venue: string;
  location: string;
  role: string;
}

const EventCard: React.FC<EventCardProps> = ({
  date,
  title,
  venue,
  location,
  role,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-l-2 border-concert-gold pl-6 py-4"
    >
      <div className="text-concert-gold text-sm uppercase tracking-widest font-semibold mb-2">
        {date}
      </div>
      <h3 className="font-serif text-xl text-concert-ivory mb-1">
        {title}
      </h3>
      <p className="text-concert-ivory-soft mb-2">
        {venue}
      </p>
      <div className="flex flex-col sm:flex-row gap-2 text-sm text-concert-ivory-soft">
        <span>{location}</span>
        <span className="hidden sm:inline">•</span>
        <span>{role}</span>
      </div>
    </motion.div>
  );
};

export default EventCard;
