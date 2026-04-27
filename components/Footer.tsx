'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-concert-black-lighter border-t border-concert-black-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-bold text-concert-ivory mb-2">ETHAN TAJALLE</h3>
            <p className="text-concert-ivory-soft text-sm leading-relaxed">
              Conductor specializing in symphonic conducting and contemporary orchestral music.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-concert-gold font-semibold text-sm uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['About', 'Videos', 'Repertoire', 'Press', 'Calendar'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-concert-ivory-soft text-sm hover:text-concert-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-concert-gold font-semibold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@ethantajalle.com" className="text-concert-ivory-soft hover:text-concert-gold transition-colors">
                  contact@ethantajalle.com
                </a>
              </li>
              <li className="text-concert-ivory-soft">
                New York, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-concert-black-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-concert-ivory-soft">
          <p>&copy; {currentYear} Ethan Tajalle. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-concert-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-concert-gold transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-concert-gold transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
