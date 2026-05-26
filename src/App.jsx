import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Laptop, BookOpen, GraduationCap, Mail, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  // Custom Cursor mouse movement handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target || typeof target.closest !== 'function') {
        setIsHovering(false);
        return;
      }
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.cyber-btn') || 
        target.closest('.nav-link') ||
        target.closest('.interactive-card') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="portfolio-app">
      {/* Dynamic Cursor */}
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      
      {/* Background grain texture */}
      <div className="grain-overlay" />

      {/* Floating Capsule Navbar */}
      <Navbar />

      {/* Main Container */}
      <main>
        {/* HERO SECTION */}
        <section id="about" className="section-wrapper">
          <Hero triggerMatrix={() => setShowMatrix(true)} />
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section-wrapper">
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-wrapper">
          <Projects />
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section-wrapper">
          <Education />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section-wrapper">
          <Contact />
        </section>
      </main>

      {/* Easter Egg Full Matrix Hack Simulation overlay */}
      <AnimatePresence>
        {showMatrix && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="matrix-bg"
            onClick={() => setShowMatrix(false)}
          >
            <div className="crt-effect" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ zIndex: 100, textAlign: 'center', background: '#000', padding: '30px', border: '5px solid #56F39A', borderRadius: '10px', boxShadow: '10px 10px 0px #000' }}>
                <p style={{ fontFamily: 'VT323', fontSize: '3rem', color: '#56F39A', marginBottom: '15px' }}>⚡ PORTFOLIO OVERRIDE ACTIVE ⚡</p>
                <p style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: '#FFF', marginBottom: '20px' }}>SYSTEM HACKED BY ANONYMOUS RECRUITER</p>
                <button 
                  className="cyber-btn cyber-btn-green"
                  style={{ cursor: 'none' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowMatrix(false);
                  }}
                >
                  Return to Portfolio
                </button>
              </div>

              <div className="matrix-columns">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="matrix-column" style={{ fontSize: '1.2rem' }}>
                    {Array.from({ length: 15 }).map((_, j) => (
                      <span 
                        key={j} 
                        className="matrix-char"
                        style={{ animationDelay: `${i * 0.1 + j * 0.05}s` }}
                      >
                        {String.fromCharCode(33 + Math.floor(Math.random() * 93))}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
