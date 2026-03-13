import { motion } from 'framer-motion';
import ownerImg from '../assets/sahil-saini.png';

export default function OwnerSection() {
  return (
    <section className="section-padding bg-theme-section relative overflow-hidden pt-24 md:pt-28">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          
          {/* Photos Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] md:aspect-auto">
              <img 
                src={ownerImg} 
                alt="Sahil Saini - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-accent opacity-30 z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-accent opacity-30 z-0" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <span className="text-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
              Meet the Founder
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-heading mb-6">
              Sahil Saini
            </h2>
            <p className="text-lg text-text leading-relaxed mb-8 italic font-light">
              "Turning Wedding Dreams into Beautiful Reality."
            </p>
            <p className="text-lg text-text leading-relaxed mb-8">
              Sahil Saini is the creative mind behind our premium wedding setups. 
              With years of experience in event design and decoration, he focuses on delivering elegant, 
              well-planned and unforgettable celebrations.
            </p>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent/40" />
                <span className="text-heading font-medium">Signature Style: Minimal Luxury</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-accent/40" />
                <span className="text-heading font-medium">Experience Highlight: 1000+ Grand Entries</span>
              </div>
            </div>

            {/* Signature style text (elegant font) */}
            <div className="mt-12">
              <p className="text-3xl font-serif text-accent opacity-60 italic">
                Sahil Saini
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
    </section>
  );
}
