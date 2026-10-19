import { Link } from 'react-router-dom';

const footerLinks = {
  discover: [
    { label: 'All Models', href: '/models' },
    { label: 'Engineering', href: '/engineering' },
    { label: 'Compare', href: '/compare' },
    { label: 'Configure', href: '/configurator/911-carrera' },
  ],
  experience: [
    { label: 'Book a Test Drive', href: '/book-test-drive' },
    { label: 'About This Project', href: '/about' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'About', href: '/about' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-porcelain flex items-center justify-center text-xs font-bold text-porcelain">
                P
              </div>
              <span className="text-porcelain font-bold text-lg tracking-[0.15em] uppercase">
                PORSCHE
              </span>
            </Link>
            <p className="text-silver-dark text-sm leading-relaxed max-w-xs">
              An independent automotive showcase concept exploring premium digital experiences. 
              Not affiliated with or endorsed by Porsche AG.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-porcelain text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Discover
            </h3>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver hover:text-porcelain text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-porcelain text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Experience
            </h3>
            <ul className="space-y-3">
              {footerLinks.experience.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver hover:text-porcelain text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-porcelain text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-silver hover:text-porcelain text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver-dark text-xs">
            © {new Date().getFullYear()} Porsche 3D Experience — Concept Demonstration. All rights reserved.
          </p>
          <p className="text-silver-dark text-xs">
            Vehicle specifications are for illustrative purposes only. Verify with official sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
