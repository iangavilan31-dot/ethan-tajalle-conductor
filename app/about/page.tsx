import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';

export const metadata: Metadata = {
  title: 'About | Ethan Tajalle',
  description: 'Learn about conductor Ethan Tajalle\'s background, training, and artistic vision.',
};

export default function About() {
  return (
    <div className="bg-concert-black">
      <Hero title="About" subtitle="The conductor and the artist" />

      <div className="max-w-4xl mx-auto px-6 py-section-sm md:py-section">
        {/* Main Bio */}
        <section className="mb-section">
          <h2 className="font-serif text-3xl text-concert-ivory mb-6">
            Professional Biography
          </h2>
          <div className="space-y-4 text-concert-ivory-soft leading-relaxed text-lg">
            <p>
              Ethan Tajalle is an emerging conductor recognized for his interpretive depth, precision, and commitment to contemporary orchestral music. Based in New York, he works at the intersection of classical tradition and innovative musicmaking, bringing fresh perspectives to both canonical and contemporary repertoire.
            </p>
            <p>
              A conducting fellow at the New York Youth Symphony (NYYS) Conducting Fellowship, one of the nation's premier training programs, Ethan has worked closely with international conducting mentors and gained experience across symphonic, operatic, and chamber settings. His conducting has been praised for its clarity, musical intelligence, and ability to inspire orchestral collaboration.
            </p>
            <p>
              Beyond the podium, Ethan is deeply engaged in music education, outreach, and the development of emerging artists. He believes in the transformative power of orchestral music and the conductor's role as both interpreter and community leader.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Artistic Vision */}
        <section className="mb-section">
          <h2 className="font-serif text-2xl text-concert-ivory mb-4">
            Artistic Vision
          </h2>
          <p className="text-concert-ivory-soft leading-relaxed text-lg">
            Ethan's conducting is defined by a commitment to orchestral clarity, expressive depth, and collaborative musicmaking. He approaches each score with scholarly attention to detail while remaining open to fresh interpretive possibilities. Whether leading a Brahms symphony or championing new works, his goal is to create performances that are both intellectually rigorous and emotionally compelling.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Training & Education */}
        <section className="mb-section">
          <h2 className="font-serif text-2xl text-concert-ivory mb-6">
            Education & Fellowships
          </h2>
          <ul className="space-y-3 text-concert-ivory-soft">
            <li className="flex gap-4">
              <span className="text-concert-gold font-semibold whitespace-nowrap">2024–Present</span>
              <span>New York Youth Symphony Conducting Fellowship</span>
            </li>
            <li className="flex gap-4">
              <span className="text-concert-gold font-semibold whitespace-nowrap">2023</span>
              <span>Advanced Conducting Studies with international conductors</span>
            </li>
            <li className="flex gap-4">
              <span className="text-concert-gold font-semibold whitespace-nowrap">2022</span>
              <span>Summer Conducting Academy, Tanglewood Music Center</span>
            </li>
            <li className="flex gap-4">
              <span className="text-concert-gold font-semibold whitespace-nowrap">2020</span>
              <span>B.M. in Music, with honors; emphasis on conducting and orchestral studies</span>
            </li>
          </ul>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Mentors & Influences */}
        <section className="mb-section">
          <h2 className="font-serif text-2xl text-concert-ivory mb-6">
            Mentorship & Influences
          </h2>
          <p className="text-concert-ivory-soft leading-relaxed text-lg mb-4">
            Ethan has studied with leading conductors and been profoundly influenced by the orchestral traditions of Europe, particularly the Berlin Philharmonic, Vienna Musikverein, and conducting mentors in the American symphonic tradition. His musical education is rooted in the principle that conducting is both craft and art—requiring technical mastery, theoretical knowledge, and deep humanistic understanding.
          </p>
        </section>

        {/* Divider */}
        <div className="h-px bg-concert-black-border my-12"></div>

        {/* Personal */}
        <section>
          <h2 className="font-serif text-2xl text-concert-ivory mb-6">
            Beyond the Podium
          </h2>
          <p className="text-concert-ivory-soft leading-relaxed text-lg">
            When not conducting, Ethan can be found at concerts, opera houses, and chamber music performances, always studying. He is passionate about making classical music accessible and believes orchestras serve a vital cultural and community role. He is a native of [hometown] and holds a special commitment to fostering the next generation of musicians and music lovers.
          </p>
        </section>
      </div>

      {/* Download Resume */}
      <section className="max-w-4xl mx-auto px-6 py-section-sm border-t border-concert-black-border">
        <div className="text-center">
          <p className="text-concert-ivory-soft mb-4">Download my full CV and professional materials</p>
          <a
            href="#"
            className="inline-block px-8 py-3 border border-concert-gold text-concert-gold hover:bg-concert-gold hover:text-concert-black transition-all duration-300 font-medium tracking-wide"
          >
            Download CV (PDF)
          </a>
        </div>
      </section>
    </div>
  );
}
