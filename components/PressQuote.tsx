'use client';

import { motion } from 'framer-motion';

interface PressQuoteProps {
  quote: string;
  author: string;
  publication: string;
}

const PressQuote: React.FC<PressQuoteProps> = ({ quote, author, publication }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-l-4 border-concert-gold pl-6 py-6"
    >
      <p className="font-serif text-lg text-concert-ivory leading-relaxed mb-4">
        "{quote}"
      </p>
      <div className="text-sm">
        <p className="font-semibold text-concert-gold">{author}</p>
        <p className="text-concert-ivory-soft">{publication}</p>
      </div>
    </motion.div>
  );
};

export default PressQuote;
