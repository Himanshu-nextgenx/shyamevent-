import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Rahul & Priya Sharma',
    event: 'Wedding Reception, 2026',
    text: 'Shyam Event Rewari transformed our wedding into a fairy tale. The bridal entry with CO2 jets and fog was absolutely breathtaking. Every guest was in awe!',
    rating: 5,
    initial: 'R',
    color: '#E63973',
  },
  {
    name: 'Vikram Singh',
    event: 'Sangeet Night, 2026',
    text: 'The sangeet decoration was magical. The lighting, the stage setup — everything was top class. Their team is highly professional and punctual. Highly recommend!',
    rating: 5,
    initial: 'V',
    color: '#9b59b6',
  },
  {
    name: 'Anita Yadav',
    event: 'Haldi Ceremony, 2025',
    text: 'We were blown away by the haldi setup. The vibrant colors, the fresh flowers — it was picture perfect. Everyone complimented the decoration all day!',
    rating: 5,
    initial: 'A',
    color: '#f39c12',
  },
  {
    name: 'Deepak & Kavita Gupta',
    event: 'Royal Wedding, 2025',
    text: 'From tent decoration to fresh flower mandap, everything was exactly as we dreamed. Shyam Event made our special day truly unforgettable.',
    rating: 5,
    initial: 'D',
    color: '#27ae60',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--section)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border opacity-20 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle mb-4 text-theme-body opacity-60"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-theme-heading transition-colors duration-500"
          >
            What Families <span className="text-gradient-rose italic">Say</span>
          </motion.h2>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-6 sm:p-10 md:p-14 border-theme-border transition-colors duration-500"
            >
              {/* Quote mark */}
              <div className="font-playfair text-6xl md:text-8xl opacity-10 leading-none mb-4 -mt-4 -ml-2 select-none" style={{ color: 'var(--accent)' }}>"</div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-8">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-theme-accent text-xl">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="font-playfair text-2xl md:text-3xl text-theme-heading leading-relaxed italic mb-12 transition-colors duration-500">
                "{testimonials[active].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full flex items-center justify-center font-playfair font-bold text-2xl text-white shadow-xl transition-all duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${testimonials[active].color}, ${testimonials[active].color}80)`,
                    boxShadow: `0 8px 20px ${testimonials[active].color}40`,
                  }}>
                  {testimonials[active].initial}
                </div>
                <div>
                  <p className="font-playfair font-bold text-theme-heading text-xl transition-colors duration-500">{testimonials[active].name}</p>
                  <p className="font-inter text-sm text-theme-body opacity-60 tracking-wide mt-1 uppercase">{testimonials[active].event}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-6">
            <div className="flex gap-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === active
                      ? 'w-12 h-2.5 bg-theme-accent shadow-glow'
                      : 'w-2.5 h-2.5 bg-theme-border hover:bg-theme-body hover:opacity-30'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-theme-border bg-theme-bg-soft flex items-center justify-center text-theme-body hover:text-theme-heading hover:border-theme-accent transition-all duration-300 shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                className="w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:bg-[#9e763b]"
                style={{
                  background: 'var(--accent)',
                  boxShadow: '0 8px 25px var(--accent-glow)',
                }}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
