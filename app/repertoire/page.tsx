import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'Repertoire | Ethan Tajalle',
  description: 'Explore Ethan Tajalle\'s conducting repertoire across symphonic, opera, contemporary, and chamber music.',
};

const repertoire = {
  symphonic: [
    'Brahms: Symphony No. 1 in C minor',
    'Brahms: Symphony No. 4 in E minor',
    'Beethoven: Symphony No. 5 in C minor',
    'Dvořák: Symphony No. 7 in D minor',
    'Dvořák: Symphony No. 9 "From the New World"',
    'Mozart: Symphony No. 40 in G minor',
    'Tchaikovsky: Symphony No. 5 in E minor',
    'Shostakovich: Symphony No. 5',
  ],
  contemporary: [
    'John Adams: Shaker Loops',
    'John Williams: Film score arrangements',
    'Philip Glass: Excerpts from Einstein on the Beach',
    'Jennifer Higdon: Blue Cathedral',
    'Mason Bates: Digital Dawn',
    'Unsuk Chin: Xiqu',
  ],
  opera: [
    'Mozart: Le nozze di Figaro',
    'Verdi: La traviata',
    'Puccini: La bohème',
    'Bizet: Carmen (excerpts)',
  ],
  chamber: [
    'Mozart: Eine kleine Nachtmusik',
    'Dvořák: String Quartet No. 12 "American"',
    'Brahms: Clarinet Quintet',
    'Schubert: String Quartet No. 14',
  ],
  choral: [
    'Handel: Messiah (selected movements)',
    'Mendelssohn: Elijah (excerpts)',
    'Bach: St. Matthew Passion (excerpts)',
    'Verdi: Requiem',
  ],
};

interface RepertoireCategory {
  [key: string]: string[];
}

export default function Repertoire() {
  return (
    <div className="bg-concert-black">
      <Hero title="Repertoire" subtitle="A conductor's musical foundation" />

      <section className="max-w-4xl mx-auto px-6 py-section-sm md:py-section">
        <SectionHeading
          title="Conducting Repertoire"
          subtitle="A selection of works prepared and performed, organized by genre."
          centered
        />

        <div className="space-y-12">
          {Object.entries(repertoire).map(([category, works]) => (
            <div key={category}>
              <h3 className="font-serif text-2xl text-concert-ivory mb-6 capitalize">
                {category === 'symphonic'
                  ? 'Symphonic'
                  : category === 'contemporary'
                  ? 'Contemporary'
                  : category === 'opera'
                  ? 'Opera'
                  : category === 'chamber'
                  ? 'Chamber'
                  : 'Choral'}
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {works.map((work, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 border-l-2 border-concert-gold hover:bg-concert-black-lighter/50 transition-colors"
                  >
                    <span className="text-concert-gold font-serif text-lg leading-none pt-1">
                      •
                    </span>
                    <span className="text-concert-ivory-soft">{work}</span>
                  </div>
                ))}
              </div>

              {Object.entries(repertoire).indexOf([category, works]) !==
                Object.entries(repertoire).length - 1 && (
                <div className="h-px bg-concert-black-border mb-8"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-concert-black-lighter border border-concert-black-border">
          <p className="text-concert-ivory-soft">
            This represents a selection of core repertoire. Additional works, including recent performances and
            contemporary premieres, are available upon request. Repertoire continues to expand with ongoing
            study and collaborative projects.
          </p>
        </div>
      </section>
    </div>
  );
}
