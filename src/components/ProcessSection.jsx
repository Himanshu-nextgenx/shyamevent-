import { motion } from 'framer-motion';
import { FiMessageSquare, FiColumns, FiActivity, FiTarget } from 'react-icons/fi';

const steps = [
  {
    icon: <FiMessageSquare className="w-8 h-8" />,
    title: "Consultation",
    desc: "We discuss your vision, themes, and preferences to build a perfect foundation."
  },
  {
    icon: <FiTarget className="w-8 h-8" />,
    title: "Planning",
    desc: "Detailed blueprints, moodboards, and logistics prepared by our expert team."
  },
  {
    icon: <FiActivity className="w-8 h-8" />,
    title: "Execution",
    desc: "Our on-ground team brings everything to life with precision and care."
  },
  {
    icon: <FiColumns className="w-8 h-8" />,
    title: "Celebration",
    desc: "Sit back and enjoy your big day while we handle every tiny detail."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-theme-section overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
            How we work
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-heading">
            Our Wedding Planning Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[1px] bg-accent/20 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-theme-bg shadow-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 border border-border">
                {step.icon}
              </div>
              <div className="md:hidden absolute top-12 left-1/2 -translate-x-1/2 w-[1px] h-full bg-accent/20 -z-10" />
              
              <h3 className="text-xl font-bold text-heading mb-3">{step.title}</h3>
              <p className="text-text text-sm leading-relaxed max-w-[240px]">
                {step.desc}
              </p>
              
              <div className="mt-4 text-xs font-bold text-accent/40 uppercase tracking-widest">
                Step 0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
