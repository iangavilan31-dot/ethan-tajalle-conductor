import { Metadata } from 'next';
import LuxuryNav from '@/components/LuxuryNav';
import CinematicHero from '@/components/CinematicHero';
import EditorialSection from '@/components/EditorialSection';
import VideoCard from '@/components/VideoCard';
import Link from 'next/link';

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

export default function Home() {
  return (
    <main className="bg-concert-black">
      <LuxuryNav />

      {/* Hero */}
      <CinematicHero />

      {/* Featured Conducting */}
      <EditorialSection
        subtitle="Featured Works"
        title="Recent Conducting"
        description="Selected performances and rehearsals from recent conducting engagements, showcasing interpretive depth and orchestral collaboration."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard
              key={video.youtubeId}
              title={video.title}
              description={video.description}
              youtubeId={video.youtubeId}
              category={video.category}
            />
          ))}
        </div>
      </EditorialSection>

      {/* About Section */}
      <section className="relative py-24 px-8 bg-concert-black-lighter">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="text-display text-ivory">About</h2>
              <div className="space-y-4 text-ivory-soft leading-relaxed">
                <p>
                  Ethan Tajalle is an emerging conductor known for his interpretive depth, technical precision, and ability to cultivate meaningful musical collaboration with orchestras and ensembles of all levels.
                </p>
                <p>
                  With experience spanning symphonic, operatic, and contemporary conducting, Ethan brings a thoughtful, composer-centered approach to the podium. His work emphasizes clear communication, musical integrity, and the creation of compelling experiences for both musicians and audiences.
                </p>
                <p>
                  Currently engaged with leading institutions and orchestras, Ethan continues to develop his artistic voice while maintaining a commitment to emerging composers and new music.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-block text-aged-gold hover:text-ivory transition-colors duration-300 text-sm font-semibold tracking-widest uppercase pt-4"
              >
                Read Full Biography →
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-96 overflow-hidden bg-concert-black">
              <img
                src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1470&auto=format&fit=crop"
                alt="Ethan Tajalle conducting"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-concert-black via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <EditorialSection
        subtitle="Calendar"
        title="Upcoming Engagements"
        description="Notable upcoming performances and appearances."
      >
        <div className="space-y-6">
          {[
            {
              date: 'May 15, 2026',
              title: 'Masterclass in Contemporary Conducting',
              venue: 'Juilliard School',
              location: 'New York, NY',
            },
            {
              date: 'June 3, 2026',
              title: 'Symphonic Pops: Summer Concert',
              venue: 'Lincoln Center Out of Doors',
              location: 'New York, NY',
            },
          ].map((event, idx) => (
            <div
              key={idx}
              className="border-b border-concert-black-lighter pb-6 last:border-b-0 last:pb-0 hover:border-aged-gold/30 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="space-y-2">
                  <p className="text-aged-gold text-sm font-semibold tracking-widest uppercase">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-serif text-ivory">{event.title}</h3>
                  <p className="text-ivory-soft">
                    {event.venue} • {event.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </EditorialSection>

      {/* Contact CTA */}
      <section className="relative py-32 px-8 bg-concert-black overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aged-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-display text-ivory">Get in Touch</h2>
          <p className="text-ivory-soft text-lg leading-relaxed">
            For inquiries regarding conducting engagements, masterclasses, or collaborative opportunities, please reach out.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 border border-aged-gold text-aged-gold hover:bg-aged-gold/10 transition-all duration-300 font-semibold tracking-widest uppercase"
          >
            Contact Ethan
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-concert-black-lighter py-12 px-8 bg-concert-black-lighter/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-serif text-ivory font-semibold">Ethan Tajalle</h3>
              <p className="text-ivory-soft text-sm">Conductor & Artist</p>
            </div>
            <div className="space-y-3">
              <p className="text-aged-gold text-xs font-semibold uppercase tracking-widest">
                Navigation
              </p>
              <ul className="space-y-2 text-ivory-soft text-sm">
                <li>
                  <Link href="/about" className="hover:text-ivory transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/videos" className="hover:text-ivory transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="/repertoire" className="hover:text-ivory transition-colors">
                    Repertoire
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-aged-gold text-xs font-semibold uppercase tracking-widest">
                Press
              </p>
              <ul className="space-y-2 text-ivory-soft text-sm">
                <li>
                  <Link href="/press" className="hover:text-ivory transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-ivory transition-colors">
                    Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="text-aged-gold text-xs font-semibold uppercase tracking-widest">
                Contact
              </p>
              <Link
                href="/contact"
                className="text-ivory-soft text-sm hover:text-ivory transition-colors"
              >
                Get in Touch
              </Link>
              <p className="text-ivory-soft/60 text-xs pt-4 italic">
                dw ethan these are just placeholders for now igu
              </p>
            </div>
          </div>

          <div className="border-t border-concert-black-lighter pt-8 text-center text-ivory-soft/50 text-xs">
            <p>© {new Date().getFullYear()} Ethan Tajalle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
