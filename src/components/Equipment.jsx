import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const equipment = [
  {
    name: 'CO2 Jet',
    desc: 'High-pressure CO2 jets for dramatic Sangeet and couple entries.',
    color: '#3498db',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d4?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    name: 'CO2 LED Gun',
    desc: 'Handheld LED CO2 guns for crowd interaction and DJ nights.',
    color: '#9b59b6',
    image:
      'https://images.unsplash.com/photo-1515191107209-c28698631303?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    name: 'Foam Machine',
    desc: 'Foam and bubble effects for haldi, mehndi and pool parties.',
    color: '#27ae60',
    image:
      'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    name: 'Fog Machine',
    desc: 'Low fog carpets and smoke clouds for cinematic bride & groom entry.',
    color: '#7f8c8d',
    image:
      'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    name: 'Bubble Machine',
    desc: 'Soft bubble showers for varmala, first dance and cake cutting.',
    color: '#E63973',
    image:
      'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
  {
    name: 'Bridal Entry Trolley',
    desc: 'Luxury decorated bridal entry props and concepts customised per theme.',
    color: '#f39c12',
    image:
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1600&auto=format&fit=crop&crop=entropy',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function EquipmentIcon({ item }) {
  const commonProps = {
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  switch (item.name) {
    case 'CO2 Jet':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M4 14L11 7L15 11L20 6" {...commonProps} />
          <path d="M4 18H11" {...commonProps} />
          <path d="M4 10H7" {...commonProps} />
        </svg>
      );
    case 'CO2 LED Gun':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M4 10H17L20 13H15L13 16H9L7 13H4V10Z" {...commonProps} />
          <path d="M7 7H11" {...commonProps} />
          <path d="M18 7L19.5 5.5" {...commonProps} />
          <path d="M16 5L16.8 3.2" {...commonProps} />
        </svg>
      );
    case 'Foam Machine':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="9" r="2.5" {...commonProps} />
          <circle cx="14.5" cy="8" r="1.8" {...commonProps} />
          <circle cx="12" cy="14" r="3" {...commonProps} />
        </svg>
      );
    case 'Fog Machine':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M4 15C5.2 14.4 6.3 14 8 14C9.7 14 10.8 14.4 12 15C13.2 15.6 14.3 16 16 16C17.7 16 18.8 15.6 20 15" {...commonProps} />
          <path d="M4 11C5.2 10.4 6.3 10 8 10C9.7 10 10.8 10.4 12 11" {...commonProps} />
        </svg>
      );
    case 'Bubble Machine':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <circle cx="8" cy="15" r="3" {...commonProps} />
          <circle cx="15.5" cy="9" r="2.5" {...commonProps} />
          <circle cx="18.5" cy="15.5" r="1.2" {...commonProps} />
        </svg>
      );
    case 'Bridal Entry Trolley':
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M4 11H18V15H4V11Z" {...commonProps} />
          <path d="M7 11C7 8.8 8.8 7 11 7C13.2 7 15 8.8 15 11" {...commonProps} />
          <circle cx="8" cy="16.5" r="1.5" {...commonProps} />
          <circle cx="16" cy="16.5" r="1.5" {...commonProps} />
        </svg>
      );
    default:
      return (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
          <path d="M5 19C7 15 7 9 12 5C13.5 7 14 9 14 11.5C16 10 17.5 9.5 19 9.5C17 13 17 17 12.5 19.5C11 18.5 9 18.5 7 19" {...commonProps} />
        </svg>
      );
  }
}

export default function Equipment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="equipment" className="section-padding relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--section)' }}>
      {/* Divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border opacity-20 to-transparent" />

      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-14" ref={ref}>
          <div className="flex-1 text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-subtitle mb-4 text-theme-body opacity-60"
            >
              Special Effects & Entries
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title text-theme-heading transition-colors duration-500"
            >
              Premium <span className="text-gradient-rose italic">Event Equipment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-inter text-theme-body text-sm md:text-base mt-4 max-w-xl opacity-80"
            >
              From CO2 jets to bridal entry trolleys, we use professional‑grade machines and trained
              operators to keep your guests safe while creating cinematic wedding moments.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25 }}
            className="grid grid-cols-2 gap-4 bg-theme-bg/60 border border-theme-border rounded-2xl px-5 py-4 md:px-6 md:py-5 backdrop-blur-md"
          >
            <div>
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-theme-body/70">
                Weddings covered
              </p>
              <p className="font-playfair text-2xl md:text-3xl text-theme-heading font-semibold">
                300+
              </p>
            </div>
            <div>
              <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-theme-body/70">
                Cities served
              </p>
              <p className="font-playfair text-2xl md:text-3xl text-theme-heading font-semibold">
                10+
              </p>
            </div>
            <div className="col-span-2">
              <p className="font-inter text-[11px] text-theme-body/80">
                Fully insured team • Safety‑checked machines • Clean setup & wiring.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {equipment.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.4 } }}
              className="glass-card-hover p-5 md:p-7 group relative overflow-hidden cursor-pointer border-theme-border"
            >
              {/* Background image */}
              <div className="absolute inset-0 -z-10 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(145deg, rgba(0,0,0,0.45), rgba(0,0,0,0.1))',
                  }}
                />
              </div>

              {/* Top row: icon + label */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <motion.div
                  className="flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center"
                    style={{
                      boxShadow: `0 0 30px ${item.color}66`,
                      backgroundImage: `radial-gradient(circle at 30% 30%, ${item.color}99, transparent 60%)`,
                    }}
                  >
                    <EquipmentIcon item={item} />
                  </div>
                </motion.div>
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-inter uppercase tracking-[0.2em] bg-black/40 text-white border border-white/20"
                  style={{ boxShadow: `0 0 18px ${item.color}55` }}
                >
                  Pro grade
                </span>
              </div>

              {/* Name */}
              <h3 className="font-playfair text-lg md:text-xl font-semibold text-white mb-2 drop-shadow">
                {item.name}
              </h3>

              {/* Desc */}
              <p className="font-inter text-xs md:text-sm text-slate-100/90 leading-relaxed mb-4 max-w-xs">
                {item.desc}
              </p>

              {/* Bottom meta */}
              <div className="flex items-center justify-between text-[11px] md:text-xs font-inter text-slate-100/80">
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  Safe for indoor use
                </span>
                <span className="opacity-80">Operator included</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
