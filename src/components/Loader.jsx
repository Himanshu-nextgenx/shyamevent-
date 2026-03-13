import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.jpeg';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{ backgroundColor: 'var(--bg, #FFFFFF)' }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4"
          style={{ borderColor: 'var(--border, #E5E7EB)' }}
        >
          <img src={logoImg} alt="Shyam Event Logo" className="w-full h-full object-cover" />
        </motion.div>

        {/* Text Reveal */}
        <div className="mt-8 overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="font-playfair text-2xl md:text-3xl font-bold tracking-widest uppercase text-center"
            style={{ color: 'var(--text-heading, #0F172A)' }}
          >
            Shyam Event
          </motion.h2>
        </div>

        {/* Progress Line */}
        <div className="mt-6 w-48 h-[2px] rounded-full overflow-hidden relative"
          style={{ backgroundColor: 'var(--border, #E5E7EB)' }}>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 shadow-[0_0_10px_var(--accent-glow)]"
            style={{ backgroundColor: 'var(--accent, #E63973)' }}
          />
        </div>

        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 blur-[80px] rounded-full pointer-events-none"
          style={{ background: 'var(--accent-glow)' }} />
      </div>
    </motion.div>
  );
}
