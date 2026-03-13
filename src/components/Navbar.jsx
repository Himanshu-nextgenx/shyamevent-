import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getInitialTheme, setTheme } from '../theme';
import logoImg from '../assets/logo.jpeg';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeName, setThemeName] = useState(getInitialTheme());
  const navigate = useNavigate();

  const toggleTheme = () => {
    let next = 'warm';
    if (themeName === 'warm') next = 'dark';
    else if (themeName === 'dark') next = 'pearl';
    else if (themeName === 'pearl') next = 'warm';
    setThemeName(next);
    setTheme(next);
  };

  const getThemeMeta = () => {
    if (themeName === 'pearl') return { name: 'Pearl White', dots: '⚪⚪⚫🌸' };
    if (themeName === 'warm') return { name: 'Champagne Beige', dots: '🟡🤍⚫🌸' };
    return { name: 'Midnight Luxe', dots: '🔵🔵⚪🌸' };
  };
  const currentThemeMeta = getThemeMeta();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setMobileOpen(false);
    navigate(path);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'navbar-glass py-3' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden border border-theme-border shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow">
              <img src={logoImg} alt="Shyam Event Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-playfair font-bold text-theme-heading text-xl leading-tight transition-colors duration-500">Shyam Event</p>
              <p className="font-inter text-[10px] text-theme-body tracking-[0.3em] uppercase mt-1 opacity-60">Rewari</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className="font-inter text-xs font-semibold text-theme-body hover:text-theme-heading transition-all duration-500 tracking-[0.2em] uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-theme-accent transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA & Theme */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="relative group/theme">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-theme-border bg-theme-bg-soft text-theme-heading hover:border-theme-accent transition-all duration-500 shadow-sm"
              >
                <span className="text-xl leading-none select-none">
                  {currentThemeMeta.dots}
                </span>
                <span className="text-[10px] font-inter font-bold tracking-[0.2em] uppercase opacity-60">
                  Theme
                </span>
              </motion.button>

              {/* Tooltip */}
              <div className="absolute top-full right-0 mt-4 opacity-0 invisible group-hover/theme:opacity-100 group-hover/theme:visible transition-all duration-300 translate-y-2 group-hover/theme:translate-y-0 z-[60]">
                <div className="bg-theme-heading text-theme-bg px-4 py-2 rounded-xl shadow-2xl backdrop-blur-md">
                  <p className="font-inter text-[10px] font-bold tracking-widest uppercase whitespace-nowrap">
                    Current: <span className="text-theme-accent ml-1">{currentThemeMeta.name}</span>
                  </p>
                  <div className="absolute -top-1 right-8 w-2 h-2 bg-theme-heading rotate-45" />
                </div>
              </div>
            </div>

            <a
              href="tel:+919466665516"
              className="btn-primary text-white cursor-pointer"
              style={{ padding: '12px 28px', fontSize: '12px' }}
            >
              Call Now
            </a>
          </div>

          {/* Mobile / Tablet Toggle (three dots) */}
          <button
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-theme-border bg-theme-bg-soft/80 backdrop-blur-md shadow-sm transition-all duration-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col items-center justify-center gap-[3px]">
              <span
                className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${
                  mobileOpen ? 'bg-theme-accent' : 'bg-theme-heading'
                }`}
              />
              <span
                className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${
                  mobileOpen ? 'bg-theme-accent' : 'bg-theme-heading/80'
                }`}
              />
              <span
                className={`w-[4px] h-[4px] rounded-full transition-colors duration-300 ${
                  mobileOpen ? 'bg-theme-accent' : 'bg-theme-heading/60'
                }`}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center p-8 overflow-hidden"
            style={{
              backgroundColor: 'var(--bg)',
              backgroundImage: 'radial-gradient(circle at center, var(--accent-glow), transparent 70%)',
            }}
          >
            <div className="flex flex-col gap-10 items-center">
              {navLinks.map((link, i) => (
                  <motion.a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="font-playfair text-3xl md:text-4xl font-bold text-theme-heading hover:text-theme-accent transition-colors text-center"
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-8 mt-10"
              >
                <button
                  onClick={toggleTheme}
                  className="flex flex-col items-center gap-3 px-8 py-4 rounded-3xl border border-theme-border bg-theme-bg-soft shadow-xl"
                >
                  <span className="text-3xl">{currentThemeMeta.dots}</span>
                  <span className="text-xs font-inter font-bold tracking-widest uppercase opacity-60">Change Theme</span>
                </button>

                <a
                  href="tel:+919466665516"
                  className="btn-primary text-white text-lg px-12 py-5"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
