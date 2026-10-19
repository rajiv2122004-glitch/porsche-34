import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Models', href: '/models' },
  { label: 'Engineering', href: '/engineering' },
  { label: 'Compare', href: '/compare' },
  { label: 'Configure', href: '/configurator/911-carrera' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian/95 backdrop-blur-md border-b border-white/5 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-16 lg:h-20" aria-label="Main navigation">
          {/* Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 text-porcelain font-bold text-lg tracking-[0.15em] uppercase hover:text-racing-red transition-colors"
          >
            <div className="w-8 h-8 rounded-full border-2 border-porcelain flex items-center justify-center text-xs font-bold">
              P
            </div>
            <span className="hidden sm:inline">PORSCHE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors rounded-md ${
                  isActive(link.href)
                    ? 'text-porcelain bg-white/5'
                    : 'text-silver hover:text-porcelain hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/book-test-drive"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-racing-red hover:bg-racing-red-hover text-white text-sm font-semibold uppercase tracking-wider rounded transition-all hover:shadow-[0_0_20px_rgba(215,25,32,0.3)]"
            >
              Book a Test Drive
              <ChevronRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 text-porcelain hover:text-racing-red transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-obsidian/98 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-2 pt-20"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block px-8 py-4 text-2xl font-light tracking-wide uppercase transition-colors ${
                      isActive(link.href) ? 'text-porcelain' : 'text-silver hover:text-porcelain'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6"
              >
                <Link
                  to="/book-test-drive"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-racing-red hover:bg-racing-red-hover text-white text-lg font-semibold uppercase tracking-wider rounded transition-all"
                >
                  Book a Test Drive
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
