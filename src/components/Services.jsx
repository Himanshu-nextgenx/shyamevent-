import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: '✦',
    title: 'Sangeet Decoration',
    desc: 'Transform your sangeet night into a magical experience with vibrant, artistic decorations and lighting.',
    accent: '#E63973',
  },
  {
    icon: '✦',
    title: 'Bridal & Couple Entry',
    desc: 'Grand cinematic entries with CO2 effects, fog, flowers & choreographed lighting moments.',
    accent: '#9b59b6',
  },
  {
    icon: '✦',
    title: 'Haldi Mehndi Setup',
    desc: 'Bright, vibrant and colorful themed setups to celebrate the ritual traditions beautifully.',
    accent: '#f39c12',
  },
  {
    icon: '✦',
    title: 'Tent & Decoration',
    desc: 'Premium tent structures with marquee draping, lighting, and floral arrangements.',
    accent: '#27ae60',
  },
  {
    icon: '✦',
    title: 'DJ & Light Setup',
    desc: 'Professional DJ systems with DMX lighting rigs, moving heads, LED effects, and lasers.',
    accent: '#3498db',
  },
  {
    icon: '✦',
    title: 'Fresh Flower Decoration',
    desc: 'Bespoke floral artistry — mandaps, stages, aisles, and table centerpieces with fresh flowers.',
    accent: '#e74c3c',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative transition-colors duration-500" style={{ backgroundColor: 'var(--section)' }}>
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-10 blur-[100px] pointer-events-none transition-colors duration-500"
        style={{ background: 'radial-gradient(ellipse, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-subtitle mb-4 text-theme-body opacity-60"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title text-theme-heading transition-colors duration-500"
          >
            Our <span className="text-gradient-rose italic">Premium</span> Services
          </motion.h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="glass-card-hover p-6 md:p-8 lg:p-10 group relative overflow-hidden cursor-pointer border-theme-border transition-colors duration-500"
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${service.accent}10, transparent 70%)` }} />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 30px ${service.accent}05, 0 0 40px ${service.accent}05` }} />

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative transition-all duration-500 group-hover:scale-110"
                style={{ background: `${service.accent}1a`, border: `1px solid ${service.accent}33` }}>
                <span className="text-2xl" style={{ color: service.accent }}>✦</span>
              </div>

              {/* Content */}
              <h3 className="font-playfair text-2xl font-semibold text-theme-heading mb-4 transition-colors duration-500">
                {service.title}
              </h3>
              <p className="font-inter text-base text-theme-body leading-relaxed group-hover:text-theme-heading transition-colors duration-500">
                {service.desc}
              </p>

              {/* Arrow reveal */}
              <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-80 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <span className="font-inter text-xs tracking-widest uppercase" style={{ color: service.accent }}>Learn More</span>
                <svg className="w-3 h-3" style={{ color: service.accent }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
