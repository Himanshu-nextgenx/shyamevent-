import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FILTERS = ['All', 'Wedding', 'Haldi', 'Entry', 'Decor'];

const galleryItems = [
  {
    id: 1,
    title: 'Royal Wedding Night',
    location: 'Hotel Grand, Rewari',
    year: '2025',
    category: 'Wedding',
    height: 'tall',
    accent: '#E63973',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 2,
    title: 'Haldi Ceremony',
    location: 'Shree Gardens, Rewari',
    year: '2025',
    category: 'Haldi',
    height: 'short',
    accent: '#f39c12',
    image:
      'https://images.unsplash.com/photo-1610173826001-8bf9a3c46344?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 3,
    title: 'Grand Bridal Entry',
    location: 'Royal Palace, Gurugram',
    year: '2026',
    category: 'Entry',
    height: 'tall',
    accent: '#3498db',
    image:
      'https://images.unsplash.com/photo-1542039375-28138150cc31?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 4,
    title: 'Mandap Decoration',
    location: 'City Club, Rewari',
    year: '2025',
    category: 'Decor',
    height: 'medium',
    accent: '#9b59b6',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 5,
    title: 'Sangeet Night',
    location: 'Hotel Raj, Rewari',
    year: '2026',
    category: 'Wedding',
    height: 'short',
    accent: '#E63973',
    image:
      'https://images.unsplash.com/photo-1448932252197-d19750584e56?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 6,
    title: 'Fog Entry Couple',
    location: 'Shyam Vatika, Rewari',
    year: '2025',
    category: 'Entry',
    height: 'tall',
    accent: '#27ae60',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 7,
    title: 'Stage Setup',
    location: 'Rajputana Lawns, Rewari',
    year: '2026',
    category: 'Decor',
    height: 'medium',
    accent: '#e67e22',
    image:
      'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 8,
    title: 'Flower Mandap',
    location: 'Green Valley, Rewari',
    year: '2025',
    category: 'Wedding',
    height: 'short',
    accent: '#c0392b',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    id: 9,
    title: 'Mehndi Setup',
    location: 'Paradise Gardens, Rewari',
    year: '2026',
    category: 'Haldi',
    height: 'tall',
    accent: '#2ecc71',
    image:
      'https://images.unsplash.com/photo-1545243424-0ce743321e11?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'All' ? galleryItems : galleryItems.filter(i => i.category === activeFilter);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border opacity-20 to-transparent" />

      {/* BG accent */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle mb-4 text-theme-body opacity-60"
          >
            Work Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-theme-heading transition-colors duration-500"
          >
            Real <span className="text-gradient-rose italic">Wedding Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 }}
            className="font-inter text-sm md:text-base text-theme-body opacity-80 mt-4 max-w-2xl"
          >
            A glimpse of haldi, sangeet, varmala and reception decor we&apos;ve crafted for couples
            across Rewari and nearby cities.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-7 py-2.5 rounded-full font-inter text-[11px] tracking-[0.25em] uppercase transition-all duration-500 ${
                activeFilter === filter
                  ? 'text-white shadow-lg'
                  : 'text-theme-body/80 hover:text-theme-heading border border-theme-border bg-theme-bg-soft'
              }`}
              style={activeFilter === filter ? {
                background: 'var(--accent)',
                boxShadow: '0 8px 30px var(--accent-glow)',
              } : {}}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl overflow-hidden cursor-pointer group relative h-72 sm:h-80 shadow-md hover:shadow-2xl"
                onClick={() => setLightbox(item)}
              >
                {/* Image card */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)',
                    }}
                  />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-full border border-white/40 bg-white/20 backdrop-blur-md flex items-center justify-center"
                    style={{ boxShadow: `0 0 18px ${item.accent}60` }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.accent }} />
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-[10px] font-inter tracking-[0.25em] uppercase bg-black/35 text-white border border-white/30"
                  >
                    {item.category}
                  </div>
                </div>

                {/* Event info on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-inter text-[11px] tracking-[0.25em] uppercase text-white/70 mb-1">
                    {item.year} • {item.location}
                  </p>
                  <h3 className="font-playfair text-xl md:text-2xl text-white font-semibold drop-shadow">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm mt-3 inline-flex items-center gap-2 text-white/80">
                    <span
                      className="inline-block w-6 h-[2px] rounded-full"
                      style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }}
                    />
                    <span>Complete decor & entry styling by Shyam Event Rewari</span>
                  </p>
                </div>

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: 'rgba(var(--bg-rgb), 0.9)', backdropFilter: 'blur(30px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative max-w-3xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full h-[30rem] relative overflow-hidden">
                <img
                  src={lightbox.image}
                  alt={lightbox.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.6) 100%)',
                  }}
                />
              </div>
              <div className="p-10 transition-colors duration-500 border-t"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}>
                <span className="font-inter text-xs tracking-widest uppercase mb-3 block font-semibold" style={{ color: lightbox.accent }}>
                  {lightbox.category}
                </span>
                <h3 className="font-playfair text-3xl text-theme-heading font-bold mb-3">{lightbox.title}</h3>
                <p className="font-inter text-lg text-theme-body opacity-80">{lightbox.location} · {lightbox.year}</p>
              </div>
              <button
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300"
                onClick={() => setLightbox(null)}
              >
                <span className="text-xl">✕</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
