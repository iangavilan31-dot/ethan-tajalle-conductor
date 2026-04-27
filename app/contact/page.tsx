'use client';

import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Note: Metadata export not available in client components
// To add: move form to separate server component or use layout metadata

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: In production, send to backend or email service
    console.log('Form submitted:', formState);
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="bg-concert-black">
      <Hero title="Get in Touch" subtitle="Inquiries and collaboration" />

      <section className="max-w-4xl mx-auto px-6 py-section-sm md:py-section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-2xl text-concert-ivory mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-concert-gold font-semibold uppercase tracking-widest text-sm mb-2">
                  General Inquiries
                </h3>
                <a
                  href="mailto:contact@ethantajalle.com"
                  className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                >
                  contact@ethantajalle.com
                </a>
              </div>

              <div>
                <h3 className="text-concert-gold font-semibold uppercase tracking-widest text-sm mb-2">
                  Press & Media
                </h3>
                <a
                  href="mailto:press@ethantajalle.com"
                  className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                >
                  press@ethantajalle.com
                </a>
              </div>

              <div>
                <h3 className="text-concert-gold font-semibold uppercase tracking-widest text-sm mb-2">
                  Booking Inquiries
                </h3>
                <a
                  href="mailto:bookings@ethantajalle.com"
                  className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                >
                  bookings@ethantajalle.com
                </a>
              </div>

              <div>
                <h3 className="text-concert-gold font-semibold uppercase tracking-widest text-sm mb-2">
                  Location
                </h3>
                <p className="text-concert-ivory-soft">
                  New York, NY<br />
                  United States
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-concert-gold font-semibold uppercase tracking-widest text-sm mb-4">
                  Follow
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-concert-ivory-soft hover:text-concert-gold transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-2xl text-concert-ivory mb-8">
              Send a Message
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-concert-black-lighter border border-concert-gold p-6 text-center"
              >
                <p className="text-concert-gold font-semibold mb-2">
                  Thank you for reaching out.
                </p>
                <p className="text-concert-ivory-soft">
                  I'll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-concert-gold text-sm uppercase tracking-widest font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-concert-black-lighter border border-concert-black-border px-4 py-3 text-concert-ivory focus:border-concert-gold focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-concert-gold text-sm uppercase tracking-widest font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-concert-black-lighter border border-concert-black-border px-4 py-3 text-concert-ivory focus:border-concert-gold focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-concert-gold text-sm uppercase tracking-widest font-semibold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-concert-black-lighter border border-concert-black-border px-4 py-3 text-concert-ivory focus:border-concert-gold focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-concert-gold text-sm uppercase tracking-widest font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-concert-black-lighter border border-concert-black-border px-4 py-3 text-concert-ivory focus:border-concert-gold focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-concert-gold text-concert-black hover:bg-concert-gold-muted transition-all duration-300 font-medium tracking-wide py-3 uppercase"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
