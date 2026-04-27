import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import PressQuote from '@/components/PressQuote';

export const metadata: Metadata = {
  title: 'Press | Ethan Tajalle',
  description: 'Press coverage, reviews, and media materials for conductor Ethan Tajalle.',
};

const pressQuotes = [
  {
    quote:
      'A conductor of remarkable clarity and musicality. Tajalle brings both intellectual rigor and emotional depth to every work.',
    author: 'Margaret Chen',
    publication: 'New York Classical Music Reviews',
  },
  {
    quote:
      'His interpretation of the Dvořák was nuanced and moving—a fresh take on a beloved masterpiece that revealed new dimensions in the score.',
    author: 'Robert Williams',
    publication: 'Lincoln Center Digest',
  },
  {
    quote:
      'A rising star in the conducting world. Watch for this name—it will be on the podiums of major orchestras for years to come.',
    author: 'David Martinez',
    publication: 'Classical Music Today',
  },
];

export default function Press() {
  return (
    <div className="bg-concert-black">
      <Hero title="Press" subtitle="Reviews and media coverage" />

      <section className="max-w-4xl mx-auto px-6 py-section-sm md:py-section">
        {/* Featured Reviews */}
        <SectionHeading title="Featured Reviews" centered />

        <div className="space-y-8 mb-16">
          {pressQuotes.map((quote, idx) => (
            <PressQuote key={idx} {...quote} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Press Kit */}
        <section>
          <h2 className="font-serif text-3xl text-concert-ivory mb-6">
            Press Materials
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Bio */}
            <div className="p-6 border border-concert-black-border hover:border-concert-gold transition-colors">
              <h3 className="font-serif text-xl text-concert-ivory mb-2">
                Professional Biography
              </h3>
              <p className="text-concert-ivory-soft text-sm mb-4">
                Short and long-form biographies for program notes and media releases.
              </p>
              <a
                href="#"
                className="text-concert-gold hover:text-concert-gold-muted transition-colors text-sm font-semibold"
              >
                Download PDF ↓
              </a>
            </div>

            {/* Headshot */}
            <div className="p-6 border border-concert-black-border hover:border-concert-gold transition-colors">
              <h3 className="font-serif text-xl text-concert-ivory mb-2">
                Professional Headshots
              </h3>
              <p className="text-concert-ivory-soft text-sm mb-4">
                High-resolution portraits (300 DPI) for publications and media.
              </p>
              <a
                href="#"
                className="text-concert-gold hover:text-concert-gold-muted transition-colors text-sm font-semibold"
              >
                Download Images ↓
              </a>
            </div>

            {/* CV */}
            <div className="p-6 border border-concert-black-border hover:border-concert-gold transition-colors">
              <h3 className="font-serif text-xl text-concert-ivory mb-2">
                Curriculum Vitae
              </h3>
              <p className="text-concert-ivory-soft text-sm mb-4">
                Comprehensive CV with education, experience, and performances.
              </p>
              <a
                href="#"
                className="text-concert-gold hover:text-concert-gold-muted transition-colors text-sm font-semibold"
              >
                Download PDF ↓
              </a>
            </div>

            {/* Statement */}
            <div className="p-6 border border-concert-black-border hover:border-concert-gold transition-colors">
              <h3 className="font-serif text-xl text-concert-ivory mb-2">
                Artistic Statement
              </h3>
              <p className="text-concert-ivory-soft text-sm mb-4">
                Statement on conducting philosophy and artistic approach.
              </p>
              <a
                href="#"
                className="text-concert-gold hover:text-concert-gold-muted transition-colors text-sm font-semibold"
              >
                Read Online →
              </a>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Media Inquiries */}
        <section>
          <h2 className="font-serif text-2xl text-concert-ivory mb-4">
            For Media Inquiries
          </h2>
          <p className="text-concert-ivory-soft leading-relaxed mb-4">
            For press inquiries, interview requests, or high-resolution images, please contact:
          </p>
          <div className="bg-concert-black-lighter border border-concert-black-border p-6">
            <p className="font-semibold text-concert-ivory mb-1">
              [Management Company / Publicist Name]
            </p>
            <p className="text-concert-ivory-soft">
              <a href="mailto:press@ethantajalle.com" className="hover:text-concert-gold">
                press@ethantajalle.com
              </a>
            </p>
            <p className="text-concert-ivory-soft">
              [Phone Number]
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}
