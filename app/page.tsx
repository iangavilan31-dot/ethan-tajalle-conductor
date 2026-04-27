import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import VideoCard from '@/components/VideoCard';
import EventCard from '@/components/EventCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Ethan Tajalle | Conductor',
  description: 'Emerging conductor specializing in symphonic conducting and orchestral collaboration.',
};

const videos = [
  {
    title: 'Comp Date Workshop 2026',
    description: 'A deep exploration of contemporary conducting techniques and orchestral interpretation.',
    youtubeId: 'UraWEMato6I',
    category: 'Workshop',
  },
  {
    title: 'NYYS Conducting Fellowship: Dvořák 7, Movement 2 Excerpt',
    description: 'An intimate rehearsal examining the second movement of Dvořák\'s Seventh Symphony.',
    youtubeId: 'N2q6_fhp4LE',
    category: 'Fellowship',
  },
  {
    title: 'NYYS Conducting Fellowship: Composition Date Rehearsal 5/4',
    description: 'Conducting rehearsal from the NYYS Conducting Fellowship program.',
    youtubeId: '64NaDJwwGwg',
    category: 'Rehearsal',
  },
];

const upcomingEvents = [
  {
    date: 'May 15, 2026',
    title: 'Masterclass in Contemporary Conducting',
    venue: 'Juilliard School',
    location: 'New York, NY',
    role: 'Conductor & Instructor',
  },
  {
    date: 'June 3, 2026',
    title: 'Symphonic Pops: Summer Concert',
    venue: 'Lincoln Center Out of Doors',
    location: 'New York, NY',
    role: 'Guest Conductor',
  },
  {
    date: 'July 12, 2026',
    title: 'International Conducting Workshop',
    venue: 'Tanglewood Music Center',
    location: 'Lenox, MA',
    role: 'Conducting Fellow',
  },
];

export default function Home() {
  return (
    <div className="bg-concert-black">
      {/* Hero Section */}
      <Hero
        title="ETHAN TAJALLE"
        subtitle="Conductor"
        tagline="Precision, imagination, and orchestral storytelling for a new generation."
        showCTA
      />

      {/* Featured Videos */}
      <section className="px-6 py-section-sm md:py-section max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Conducting"
          subtitle="Selected performances and rehearsals from recent conducting engagements."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-concert-black-border"></div>
      </div>

      {/* Bio Preview */}
      <section className="px-6 py-section-sm md:py-section max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Placeholder for headshot */}
          <div className="aspect-square bg-concert-black-lighter rounded-sm overflow-hidden border border-concert-black-border flex items-center justify-center">
            <div className="text-center text-concert-ivory-soft">
              <p className="font-serif text-lg">Professional Headshot</p>
              <p className="text-sm">[High-resolution portrait to be added]</p>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-heading-xl text-concert-ivory mb-4">
              About Ethan
            </h2>
            <p className="text-concert-ivory-soft text-lg leading-relaxed mb-4">
              Ethan Tajalle is an emerging conductor known for his precision, interpretive depth, and contemporary musical sensibilities. With a focus on symphonic conducting, contemporary music, and orchestral collaboration, he works at the intersection of classical tradition and innovative musicmaking.
            </p>
            <p className="text-concert-ivory-soft text-lg leading-relaxed mb-6">
              A fellowship recipient at the New York Youth Symphony and a student of leading international conductors, Ethan brings a fresh perspective to the orchestral repertoire while maintaining profound respect for the classical canon.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 border border-concert-gold text-concert-gold hover:bg-concert-gold hover:text-concert-black transition-all duration-300 font-medium tracking-wide"
            >
              Read Full Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-concert-black-border"></div>
      </div>

      {/* Upcoming Events */}
      <section className="px-6 py-section-sm md:py-section max-w-7xl mx-auto">
        <SectionHeading title="Upcoming Engagements" />
        <div className="space-y-8">
          {upcomingEvents.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/calendar"
            className="inline-block px-8 py-3 border border-concert-gold text-concert-gold hover:bg-concert-gold hover:text-concert-black transition-all duration-300 font-medium tracking-wide"
          >
            View Full Calendar
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-concert-black-border"></div>
      </div>

      {/* CTA Section */}
      <section className="px-6 py-section-sm md:py-section max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-heading-xl text-concert-ivory mb-4">
          Get in Touch
        </h2>
        <p className="text-concert-ivory-soft text-lg mb-8 max-w-2xl mx-auto">
          For inquiries regarding conducting engagements, collaborations, or media appearance requests.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-concert-gold text-concert-black hover:bg-concert-gold-muted transition-all duration-300 font-medium tracking-wide"
        >
          Contact Now
        </Link>
      </section>
    </div>
  );
}
