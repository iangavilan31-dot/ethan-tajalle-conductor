'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EditorialSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  variant?: 'default' | 'dark';
}

export default function EditorialSection({
  title,
  subtitle,
  description,
  children,
  variant = 'default',
}: EditorialSectionProps) {
  return (
    <section
      className={`relative py-24 px-8 ${
        variant === 'dark' ? 'bg-concert-black-lighter' : 'bg-concert-black'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 space-y-4"
        >
          {subtitle && <div className="text-subtitle">{subtitle}</div>}

          <h2 className="text-display">{title}</h2>

          {description && (
            <p className="text-ivory-soft text-lg max-w-2xl leading-relaxed pt-4">
              {description}
            </p>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
