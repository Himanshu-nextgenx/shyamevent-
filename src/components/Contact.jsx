import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const eventTypes = ['Wedding', 'Sangeet', 'Haldi', 'Engagement', 'Birthday', 'Corporate', 'Other'];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', phone: '', eventType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello! I'm interested in your services.\n\nName: ${form.name}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919466665516?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden transition-colors duration-500">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-theme-border opacity-20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--accent), transparent)' }} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={ref}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-subtitle mb-4 text-theme-body opacity-60"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="section-title text-theme-heading transition-colors duration-500"
          >
            Book Your <span className="text-gradient-rose italic">Dream</span> Event
          </motion.h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Map + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            {/* Map */}
            <div className="glass-card overflow-hidden rounded-[2rem] h-64 sm:h-80 relative border-theme-border shadow-xl transition-colors duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112185.45262277881!2d76.53641777259648!3d28.19363028216584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391cf8b0da4d5b35%3A0x2a0c7c2a8e5b52f0!2sKonsiwas%20Rd%2C%20Vikas%20Nagar%2C%20Sector%204%2C%20Rewari%2C%20Haryana%20123110!5e0!3m2!1sen!2sin!4v1710330000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) opacity(0.6) contrast(1.1) invert(var(--dark-mode))' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shyam Event Rewari Location"
              />
            </div>

            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-theme-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: 'Call Us',
                  value: '+91 94666 65516',
                  href: 'tel:+919466665516',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-theme-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  ),
                  label: 'WhatsApp',
                  value: '+91 94666 65516',
                  href: 'https://wa.me/919466665516',
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-theme-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Location',
                  value: 'Konsiwas Rd, Vikas Nagar, Sector 4, Rewari, Haryana 123110, India',
                  href: 'https://maps.google.com/?q=Konsiwas+Rd+Vikas+Nagar+Sector+4+Rewari+Haryana+123110+India',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass-card-hover p-6 flex flex-col gap-3 transition-all duration-500 group border-theme-border"
                >
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ background: 'var(--accent-glow)', border: '1px solid var(--border)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-inter text-xs text-theme-body opacity-60 tracking-wider font-medium uppercase">{item.label}</p>
                    <p className="font-inter text-sm text-theme-heading font-semibold mt-1 group-hover:text-theme-accent transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="glass-card p-6 sm:p-10 md:p-12 border-theme-border transition-colors duration-500 shadow-2xl">
              <h3 className="font-playfair text-3xl text-theme-heading font-bold mb-10 transition-colors">
                Tell Us About Your Event
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="text-7xl mb-6 transform transition-transform animate-bounce">🎊</div>
                  <p className="font-playfair text-3xl text-theme-heading font-bold mb-3">Message Sent!</p>
                  <p className="font-inter text-base text-theme-body opacity-70">We'll get back to you shortly on WhatsApp.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-inter text-xs text-theme-body opacity-60 tracking-widest uppercase block mb-3 font-semibold">Full Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="form-input transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-heading)' }}
                      />
                    </div>
                    <div>
                      <label className="font-inter text-xs text-theme-body opacity-60 tracking-widest uppercase block mb-3 font-semibold">Phone Number</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        type="tel"
                        required
                        className="form-input transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-heading)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-theme-body opacity-60 tracking-widest uppercase block mb-3 font-semibold">Event Type</label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      required
                      className="form-input transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-heading)', appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="" disabled>Select your event type</option>
                      {eventTypes.map(t => <option key={t} value={t} style={{ background: 'var(--bg)', color: 'var(--text-heading)' }}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="font-inter text-xs text-theme-body opacity-60 tracking-widest uppercase block mb-3 font-semibold">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event date, venue, and requirements..."
                      rows={4}
                      className="form-input resize-none transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)', color: 'var(--text-heading)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary text-white w-full mt-4 flex items-center justify-center gap-3 py-4 text-lg font-bold shadow-xl transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      boxShadow: '0 8px 30px var(--accent-glow)',
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
