import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, ArrowUpCircle, AlertTriangle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    // Simulate cyber-network transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Auto reset success message
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Section Title */}
      <h2 className="heading-section">
        <span style={{ background: '#000', color: '#FFF', padding: '6px 16px', borderRadius: '8px', border: '3px solid #000', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
          04
        </span>
        SEND_SIGNAL.EXE
      </h2>

      {/* Main Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
        marginTop: '20px'
      }}>
        {/* Contact Bento Card */}
        <motion.div
          className="bento-card shadow-pink"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ position: 'relative' }}
        >
          {/* Floppy Disk Style header slider */}
          <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} style={{ color: 'var(--neon-pink)' }} />
              <span className="window-title" style={{ fontSize: '0.9rem' }}>TRANSMIT_SIGNAL.SYS</span>
            </div>
            <span style={{ color: 'var(--neon-pink)', fontWeight: 'bold', fontSize: '0.8rem' }}>PORT: 8080</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px'
          }}>
            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>
                    SENDER_NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    style={{
                      border: '3px solid #000',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-primary)',
                      outline: 'none',
                      boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)',
                      width: '100%'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>
                    SENDER_EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter email address"
                    style={{
                      border: '3px solid #000',
                      borderRadius: '8px',
                      padding: '12px',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-primary)',
                      outline: 'none',
                      boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)',
                      width: '100%'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '1rem', color: '#000' }}>
                  TRANSMISSION_PAYLOAD (MESSAGE):
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Type your signal here..."
                  style={{
                    border: '3px solid #000',
                    borderRadius: '8px',
                    padding: '12px',
                    fontSize: '1rem',
                    fontFamily: 'var(--font-primary)',
                    outline: 'none',
                    boxShadow: 'inset 2px 2px 0px rgba(0,0,0,0.1)',
                    resize: 'none',
                    width: '100%'
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginTop: '8px' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cyber-btn cyber-btn-pink"
                  style={{ minWidth: '180px', justifyContent: 'center' }}
                >
                  <Send size={16} /> 
                  {status === 'sending' ? 'TRANSMITTING...' : 'SEND_SIGNAL.EXE'}
                </button>

                {/* Status indicator feedback */}
                <AnimatePresence mode="wait">
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        color: 'var(--mint-green)',
                        background: '#000',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        border: '2px solid #000',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      <CheckCircle2 size={16} />
                      <span>SIGNAL SUCCESSFULLY BROADCASTED!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* FOOTER TERMINAL CONTAINER */}
      <footer style={{
        marginTop: '60px',
        borderTop: '4px solid #000',
        padding: '24px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 'bold' }}>
            [HEMANSH // PORTFOLIO_OS]
          </span>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#000' }}></div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', fontWeight: 'bold', color: 'var(--neon-pink)' }}>
            v1.0.0 (STABLE)
          </span>
        </div>

        <p style={{ fontSize: '0.9rem', color: '#222', fontWeight: '500' }}>
          All rights reserved © 2026.
        </p>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="cyber-btn cyber-btn-yellow"
          style={{ fontSize: '0.8rem', padding: '6px 12px', marginTop: '8px' }}
        >
          <ArrowUpCircle size={16} /> Return to top
        </button>
      </footer>
    </div>
  );
}
