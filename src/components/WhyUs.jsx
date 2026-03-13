import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'Successful Events', icon: '🎊' },
  { value: 15, suffix: '+', label: 'Years Experience', icon: '⭐' },
  { value: 50, suffix: '+', label: 'Premium Equipment', icon: '🎤' },
  { value: 100, suffix: '%', label: 'Client Satisfaction', icon: '💯' },
];

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '500+ Successful Events',
    desc: 'Trusted by hundreds of families across Haryana for creating magical memories.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Premium Equipment',
    desc: 'State-of-the-art CO2 jets, fog machines, LED systems, and more.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Experienced Team',
    desc: 'Our dedicated professionals ensure every detail is perfect on your special day.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Affordable Packages',
    desc: 'Premium quality decoration at competitive prices — no compromise on luxury.',
  },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, value);
      setCount(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-playfair text-4xl md:text-5xl font-bold text-gradient-rose">
      {count}{suffix}
    </span>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border opacity-20 to-transparent" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle mb-4 text-theme-body opacity-60"
          >
            The Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-theme-heading transition-colors duration-500"
          >
            Why Choose <span className="text-gradient-rose italic">Us</span>
          </motion.h2>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 md:p-8 text-center group hover:-translate-y-2 transition-all duration-500 border-theme-border">
              <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="font-inter text-sm text-theme-body mt-4 tracking-wide font-medium opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
              className="glass-card-hover p-6 md:p-8 lg:p-10 flex flex-col sm:flex-row gap-6 md:gap-8 group border-theme-border transition-colors duration-500"
              whileHover={{ x: i % 2 === 0 ? 6 : -6 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-theme-accent transition-all duration-500 group-hover:scale-110"
                style={{
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border)',
                }}>
                {reason.icon}
              </div>
              {/* Content */}
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-theme-heading mb-3 transition-colors duration-500">{reason.title}</h3>
                <p className="font-inter text-base text-theme-body leading-relaxed group-hover:text-theme-heading transition-colors duration-500">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
