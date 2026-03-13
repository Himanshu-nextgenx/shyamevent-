import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logoImg from '../assets/logo.jpeg';

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -80, duration: 1.4 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-24 pb-12 px-6 md:px-12 lg:px-20 transition-colors duration-500" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden border border-theme-border shadow-xl transition-all duration-500 hover:scale-105">
                <img src={logoImg} alt="Shyam Event Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-playfair font-bold text-theme-heading text-2xl leading-tight transition-colors">Shyam Event</p>
                <p className="font-inter text-[10px] text-theme-body tracking-[0.4em] uppercase mt-1 opacity-60">Rewari</p>
              </div>
            </div>
            <p className="font-inter text-sm text-theme-body leading-relaxed max-w-xs opacity-70">
              Creating unforgettable wedding experiences with premium decoration and event design since 2009.
            </p>
            {/* Social & Contact Icons */}
            <div className="flex gap-5 mt-10">
              {[
                { icon: <FaInstagram size={20} />, label: 'Instagram', color: '#E1306C', href: 'https://www.instagram.com/shyameventrewari/' },
                { icon: <FaFacebookF size={18} />, label: 'Facebook', color: '#1877F2', href: '#' },
                { icon: <MdEmail size={22} />, label: 'Email', color: '#EA4335', href: 'mailto:sahilsaini946666@gmail.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-theme-body transition-all duration-500 hover:scale-110 hover:text-white border-theme-border"
                  style={{ 
                    backgroundColor: 'var(--bg)',
                    '--hover-color': social.color 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = social.color}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--bg)'}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-theme-heading mb-10 font-bold opacity-40">Quick Links</p>
            <div className="flex flex-col gap-5">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Equipment', href: '#equipment' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'About', href: '#why-us' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-inter text-sm text-theme-body hover:text-theme-accent transition-all duration-300 text-left group flex items-center gap-3"
                >
                  <span className="w-6 h-px bg-theme-accent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="font-inter text-[10px] tracking-[0.4em] uppercase text-theme-heading mb-10 font-bold opacity-40">Our Services</p>
            <div className="flex flex-col gap-5">
              {['Sangeet Decoration', 'Bridal Entry', 'Haldi Mehndi Setup', 'Tent & Decoration', 'DJ & Light Setup', 'Fresh Flower Decoration'].map((s) => (
                <p key={s} className="font-inter text-sm text-theme-body opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-default">{s}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-10 border-t border-theme-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-inter text-xs text-theme-body opacity-40">
            © 2026 Shyam Event Rewari. All rights reserved.
          </p>
          <div className="flex items-center gap-2 opacity-40">
            <svg className="w-4 h-4 text-theme-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <p className="font-inter text-xs text-theme-body tracking-wider uppercase">
              Konsiwas Rd, Vikas Nagar, Sector 4, Rewari, Haryana 123110, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
