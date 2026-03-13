import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import { getInitialTheme, setTheme } from './theme';

import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import Particles from './components/Particles';
import FloatingActions from './components/FloatingActions';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Services from './components/Services';
import OwnerSection from './components/OwnerSection';
import Equipment from './components/Equipment';
import QuoteStrip from './components/QuoteStrip';
import Gallery from './components/Gallery';
import ProcessSection from './components/ProcessSection';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function HomeSections() {
  return (
    <>
      <Hero />
      <OwnerSection />
      <Services />
      <Equipment />
      <QuoteStrip />
      <Gallery />
      <ProcessSection />
      <WhyUs />
      <Testimonials />
      <Contact />
    </>
  );
}

function ScrollToSectionPage({ targetId }) {
  const location = useLocation();

  useEffect(() => {
    const scrollToTarget = () => {
      const el = targetId ? document.querySelector(targetId) : null;
      if (el && window.__lenis) {
        window.__lenis.scrollTo(el, { offset: -80, duration: 1.2 });
      } else if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      } else if (!targetId) {
        if (window.__lenis) {
          window.__lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // small timeout to ensure sections are rendered
    const t = setTimeout(scrollToTarget, 50);
    return () => clearTimeout(t);
  }, [location.pathname, targetId]);

  return <HomeSections />;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Init Lenis smooth scroll
  useEffect(() => {
    // Initialize theme from localStorage
    setTheme(getInitialTheme());

    // Hide loader after 2.5s
    const timer = setTimeout(() => setLoading(false), 2500);

    const lenis = new Lenis({
      lerp: 0.08,          // smoothness factor (0 = instant, 1 = very smooth)
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Expose lenis globally so navbar anchor scrolls also get smooth treatment
    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* No overflow-hidden on wrapper — let window handle scroll for Lenis */}
      <div className="relative bg-theme-bg min-h-screen transition-colors duration-500">
        {/* Global UI overlays */}
        <CursorGlow />
        <ScrollProgress />
        <ScrollToTop />
        <Particles />
        <FloatingActions />

        {/* Navigation */}
        <Navbar />

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<HomeSections />} />
            <Route path="/services" element={<ScrollToSectionPage targetId="#services" />} />
            <Route path="/equipment" element={<ScrollToSectionPage targetId="#equipment" />} />
            <Route path="/gallery" element={<ScrollToSectionPage targetId="#gallery" />} />
            <Route path="/about" element={<ScrollToSectionPage targetId="#why-us" />} />
            <Route path="/contact" element={<ScrollToSectionPage targetId="#contact" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}
