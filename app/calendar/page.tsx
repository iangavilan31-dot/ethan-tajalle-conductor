import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import EventCard from '@/components/EventCard';

export const metadata: Metadata = {
  title: 'Calendar | Ethan Tajalle',
  description: 'Upcoming conducting engagements and calendar of events.',
};

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
    title: 'Symphonic Pops: Summer Concert Series',
    venue: 'Lincoln Center Out of Doors',
    location: 'New York, NY',
    role: 'Guest Conductor',
  },
  {
    date: 'July 12–August 2, 2026',
    title: 'International Conducting Workshop',
    venue: 'Tanglewood Music Center',
    location: 'Lenox, MA',
    role: 'Conducting Fellow',
  },
  {
    date: 'September 22, 2026',
    title: 'Symphonic Opening Gala',
    venue: 'New York Philharmonic',
    location: 'New York, NY',
    role: 'Assistant Conductor',
  },
  {
    date: 'October 10, 2026',
    title: 'Chamber Orchestra Series: Brahms & Dvořák',
    venue: 'Carnegie Hall',
    location: 'New York, NY',
    role: 'Principal Conductor',
  },
];

const pastEvents = [
  {
    date: 'April 2026',
    title: 'NYYS Conducting Fellowship Rehearsals',
    venue: 'New York Youth Symphony',
    location: 'New York, NY',
    role: 'Conducting Fellow',
  },
  {
    date: 'March 2026',
    title: 'Comp Date Workshop & Rehearsal',
    venue: 'NYYS',
    location: 'New York, NY',
    role: 'Conductor',
  },
  {
    date: 'February 2026',
    title: 'Contemporary Music Conducting Seminar',
    venue: 'Juilliard School',
    location: 'New York, NY',
    role: 'Guest Artist',
  },
];

export default function Calendar() {
  return (
    <div className="bg-concert-black">
      <Hero title="Calendar" subtitle="Upcoming engagements and performances" />

      <section className="max-w-4xl mx-auto px-6 py-section-sm md:py-section">
        {/* Upcoming */}
        <SectionHeading
          title="Upcoming Engagements"
          subtitle="Select conducting appearances and engagements."
          centered
        />

        <div className="space-y-8 mb-16">
          {upcomingEvents.map((event, idx) => (
            <EventCard key={idx} {...event} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Past Events */}
        <section>
          <h2 className="font-serif text-3xl text-concert-ivory mb-8">
            Recent Engagements
          </h2>

          <div className="space-y-8">
            {pastEvents.map((event, idx) => (
              <EventCard key={idx} {...event} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Contact for Bookings */}
        <section className="bg-concert-black-lighter border border-concert-black-border p-8 text-center">
          <h3 className="font-serif text-2xl text-concert-ivory mb-4">
            For Booking Inquiries
          </h3>
          <p className="text-concert-ivory-soft mb-6">
            For conducting opportunities, guest appearances, and collaborations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 border border-concert-gold text-concert-gold hover:bg-concert-gold hover:text-concert-black transition-all duration-300 font-medium tracking-wide"
          >
            Contact for Bookings
          </a>
        </section>
      </section>
    </div>
  );
}
