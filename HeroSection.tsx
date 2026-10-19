import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useAnimation';

export default function HeroSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1200px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Porsche sports car in a dramatic studio environment"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide">
        <div className="max-w-2xl">
          {/* Label */}
          <motion.p
            className="text-racing-red text-xs font-semibold uppercase tracking-[0.3em] mb-6"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Driving Experience
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="text-porcelain font-bold leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            ENGINEERED
            <br />
            TO MOVE
            <br />
            <span className="text-gradient">YOU.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-silver text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            Discover the engineering, performance and design behind exceptional sports cars.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link
              to="/models"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-porcelain text-obsidian font-semibold uppercase tracking-wider text-sm rounded transition-all hover:bg-porcelain-dim hover:shadow-xl"
            >
              Explore the Models
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/book-test-drive"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-porcelain/30 text-porcelain font-semibold uppercase tracking-wider text-sm rounded transition-all hover:bg-porcelain/10 hover:border-porcelain/50"
            >
              Book a Test Drive
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-silver-dark text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-5 h-5 text-silver-dark scroll-indicator" />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
    </section>
  );
}
