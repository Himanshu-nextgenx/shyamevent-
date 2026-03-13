import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const bgRef = useRef(null);

  useEffect(() => {
    // GSAP parallax on scroll
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 md:pb-28"
    >
      {/* Background image & gradient layers */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        {/* Wedding Background Image - More visible */}
        <div 
          className="absolute inset-0 hero-bg opacity-100"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop)' }}
        />
        {/* Theme-aware Gradient Overlay */}
        <div className="absolute inset-0 transition-colors duration-500 hero-overlay" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[120px]"
          style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="h-px w-12" style={{ background: 'linear-gradient(90deg, transparent, #E63973)' }} />
          <span className="font-inter text-xs tracking-[0.4em] uppercase text-slate-500">
            Premium Event Decoration
          </span>
          <span className="h-px w-12" style={{ background: 'linear-gradient(90deg, #E63973, transparent)' }} />
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="section-title text-theme-heading transition-colors duration-500"
            style={{ lineHeight: 1.15 }}
          >
            Crafting{' '}
            <span className="text-gradient-rose font-playfair italic">Unforgettable</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="section-title text-theme-heading transition-colors duration-500"
            style={{ lineHeight: 1.15 }}
          >
            Wedding Experiences
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="h-px flex-1 max-w-20 bg-theme-border opacity-50 transition-colors duration-500" />
          <div className="w-2 h-2 rounded-full bg-theme-accent opacity-80 transition-colors duration-500" />
          <span className="h-px flex-1 max-w-20 bg-theme-border opacity-50 transition-colors duration-500" />
        </motion.div>

        {/* Subtext */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="font-inter text-theme-body text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed transition-colors duration-500"
        >
          Luxury wedding decor, themed stages, bridal entries and full event styling by{' '}
          <span className="text-theme-heading font-medium">Shyam Event Rewari</span>. From
          engagement to reception, we handle every aesthetic detail so you can enjoy your day
          stress‑free.
        </motion.p>
        <motion.div
          custom={4.5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs md:text-sm font-inter"
        >
          <span className="px-4 py-2 rounded-full border border-theme-border/60 bg-theme-section/60 backdrop-blur-sm text-theme-heading transition-colors duration-500">
            300+ weddings designed with love
          </span>
          <span className="px-4 py-2 rounded-full border border-theme-border/60 bg-theme-section/60 backdrop-blur-sm text-theme-heading transition-colors duration-500">
            Full venue decor • Stage • Entries
          </span>
          <span className="px-4 py-2 rounded-full border border-theme-border/60 bg-theme-section/60 backdrop-blur-sm text-theme-heading transition-colors duration-500">
            Rewari & nearby premium destinations
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:+919466665516"
            className="btn-primary text-white flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/919466665516?text=Hello! I'm interested in your wedding decoration services."
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 border border-emerald-400/70 bg-emerald-500/10 text-xs md:text-sm font-inter text-theme-heading hover:bg-emerald-500/20 hover:border-emerald-400 transition-all duration-300 shadow-[0_0_0_1px_rgba(16,185,129,0.2)]"
          >
            <span className="absolute inset-0 rounded-full border border-emerald-400/40 opacity-40 group-hover:opacity-80 transition-opacity duration-500 animate-pulse pointer-events-none" />
            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500 text-white shadow-md">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <div className="relative flex flex-col items-start leading-tight">
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500">
                WhatsApp us
              </span>
              <span className="text-xs md:text-sm font-semibold">
                Plan your decor now
              </span>
            </div>
          </a>
        </motion.div>


      </div>

      {/* Decorative floating orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 md:right-24 w-24 h-24 rounded-full opacity-30 blur-xl pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #E63973, transparent)' }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-32 left-10 md:left-24 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, #4a90d9, transparent)' }}
      />
    </section>
  );
}
