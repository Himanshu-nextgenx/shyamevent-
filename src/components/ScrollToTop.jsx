import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -20, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-40 group"
        >
          <div className="relative w-11 h-11 md:w-12 md:h-12 rounded-full border border-theme-border/70 bg-theme-bg/90 shadow-lg backdrop-blur-md flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-theme-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-theme-accent/70 group-hover:bg-theme-accent transition-colors duration-300" />
            <svg
              className="relative z-10 w-4 h-4 md:w-5 md:h-5 text-theme-heading group-hover:-translate-y-0.5 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 9L12 4L17 9"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

