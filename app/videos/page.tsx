import { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import VideoCard from '@/components/VideoCard';

export const metadata: Metadata = {
  title: 'Videos | Ethan Tajalle',
  description: 'Watch performances, rehearsals, and conducting demonstrations by Ethan Tajalle.',
};

const videos = [
  {
    title: 'Comp Date Workshop 2026',
    description: 'A comprehensive workshop on contemporary conducting techniques, score preparation, and orchestral interpretation.',
    youtubeId: 'UraWEMato6I',
    category: 'Workshop',
  },
  {
    title: 'NYYS Conducting Fellowship: Composition Date Rehearsal',
    description: 'Rehearsal from the NYYS Conducting Fellowship program exploring modern conducting practices.',
    youtubeId: '64NaDJwwGwg',
    category: 'Rehearsal',
  },
  {
    title: 'Dvořák 7, Movement 2 Excerpt – NYYS Fellowship',
    description: 'An intimate look at preparing Dvořák\'s Seventh Symphony with detailed attention to orchestration and phrasing.',
    youtubeId: 'N2q6_fhp4LE',
    category: 'Fellowship',
  },
];

export default function Videos() {
  return (
    <div className="bg-concert-black">
      <Hero title="Conducting Videos" subtitle="Performances and rehearsals" />

      <section className="max-w-7xl mx-auto px-6 py-section-sm md:py-section">
        <SectionHeading
          title="Featured Conducting"
          subtitle="A selection of recent performances, rehearsals, and conducting demonstrations."
        />

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, idx) => (
            <VideoCard key={idx} {...video} />
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-concert-black-lighter border border-concert-black-border p-8 rounded-sm">
          <p className="text-concert-ivory-soft">
            More videos and conducting demonstrations coming soon. Follow on YouTube for the latest performances and rehearsals.
          </p>
        </div>
      </section>
    </div>
  );
}
