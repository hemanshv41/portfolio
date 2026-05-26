import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';

const SECTIONS = ['about', 'skills', 'projects', 'education', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isOpen, setIsOpen] = useState(false);

  // Monitor scroll to update active nav items
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Floating Capsule Navbar */}
      <nav className="nav-capsule">
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '8px', gap: '6px' }}>
          <Cpu size={18} className="shake-hover" style={{ color: 'var(--neon-pink)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold', fontSize: '0.9rem' }}>DEV_OS v1.0</span>
        </div>
        <div style={{ width: '2px', height: '20px', backgroundColor: '#000', margin: '0 8px' }}></div>
        {SECTIONS.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleLinkClick(e, section)}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      {/* Mobile Burger Menu Button */}
      <button 
        className="cyber-btn mobile-nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: '8px 12px', zIndex: 1100 }}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'var(--cyber-yellow)',
              zIndex: 1050,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: '6px solid #000'
            }}
          >
            {/* Retro OS Window style Header on Mobile overlay */}
            <div style={{ 
              position: 'absolute', 
              top: 0, 
              width: '100%', 
              borderBottom: '4px solid #000', 
              padding: '16px', 
              background: '#FFF', 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="window-title">SYSTEM_MENU.EXE</span>
              <div style={{ width: '50px' }}></div>
            </div>

            {/* Menu options with large fonts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              {SECTIONS.map((section, idx) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    textDecoration: 'none',
                    color: '#000',
                    border: '3px solid #000',
                    background: '#FFF',
                    padding: '8px 40px',
                    borderRadius: '12px',
                    width: '260px',
                    textAlign: 'center',
                    boxShadow: '4px 4px 0px #000',
                    textTransform: 'uppercase'
                  }}
                  whileHover={{ scale: 1.05, transform: 'rotate(-2deg)', backgroundColor: 'var(--neon-pink)', color: '#FFF' }}
                >
                  {section}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
