import { motion } from 'framer-motion';

export default function QuoteStrip() {
  return (
    <section className="py-24 md:py-32 bg-theme-bg relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* Decoration */}
          <div className="text-8xl md:text-9xl font-serif text-accent/5 absolute -top-12 -left-8 pointer-events-none select-none">
            &ldquo;
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-heading relative z-10 max-w-3xl mx-auto leading-tight italic">
            Turning Wedding Dreams into <br />
            Beautiful Reality.
          </h2>

          <div className="text-8xl md:text-9xl font-serif text-accent/5 absolute -bottom-24 -right-8 pointer-events-none select-none">
            &rdquo;
          </div>
        </motion.div>
      </div>
      
      {/* Subtle lines */}
      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
