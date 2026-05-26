import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Trophy, Linkedin, Terminal as TermIcon, FileText, Send, Sparkles } from 'lucide-react';

const FLOATING_STICKERS = [
  { emoji: '💾', text: 'retro.exe', color: 'var(--cyber-yellow)', top: '15%', left: '75%', rotate: 12 },
  { emoji: '👾', text: 'hack', color: 'var(--neon-pink)', top: '45%', left: '-8%', rotate: -15 },
  { emoji: '💖', text: 'build', color: 'var(--mint-green)', top: '80%', left: '70%', rotate: 8 },
  { emoji: '⚡', text: 'ai_core', color: 'var(--cyan)', top: '75%', left: '-5%', rotate: 20 },
];

export default function Hero({ triggerMatrix }) {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'sys', text: 'System Initialized. HemanshOS v1.0.0...' },
    { type: 'sys', text: 'Type "help" to view directory of operations.' },
  ]);
  const [statusIdx, setStatusIdx] = useState(0);
  const terminalBottomRef = useRef(null);

  const statuses = [
    "🟢 Available for Internships",
    "🔍 Looking for Jobs",
    "🤖 Trainin' LLMs at 3AM",
    "⚡ Hacking web apps",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % statuses.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const input = terminalInput.trim().toLowerCase();
    if (!input) return;

    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${terminalInput}` }];

    switch (input) {
      case 'help':
        newLogs.push(
          { type: 'reply', text: 'Available files / commands:' },
          { type: 'reply', text: '  about    - Load background profile information.' },
          { type: 'reply', text: '  skills   - Check core languages and frameworks.' },
          { type: 'reply', text: '  projects - Query featured development showcases.' },
          { type: 'reply', text: '  hack     - EXECUTE CORE PROTOCOL GRID RESET.' },
          { type: 'reply', text: '  clear    - Flush terminal console buffer.' }
        );
        break;
      case 'about':
        newLogs.push(
          { type: 'reply', text: 'USER_PROFILE: HEMANSH VERMA' },
          { type: 'reply', text: 'ROLE: Aspiring Computer Science Engineer' },
          { type: 'reply', text: 'LOCATION: Varanasi, India' },
          { type: 'reply', text: 'GOAL: Crafting intelligent algorithms and high-performance Web/AI systems.' }
        );
        break;
      case 'skills':
        newLogs.push(
          { type: 'reply', text: 'CORE STACK:' },
          { type: 'reply', text: '  - Languages: C++, C, Python, Java, SQL' },
          { type: 'reply', text: '  - Frameworks: React, Node.js' },
          { type: 'reply', text: '  - Databases: MongoDB, Supabase' },
          { type: 'reply', text: '  - Tools: GitHub, Databricks' }
        );
        break;
      case 'projects':
        newLogs.push(
          { type: 'reply', text: 'QUERY_RESULTS:' },
          { type: 'reply', text: '  1. WhatsFlow - WhatsApp Chat Analyzer (React, Next.js)' },
          { type: 'reply', text: '  2. Forest Fire Prediction - ML Detection Tool (Scikit-learn)' }
        );
        break;
      case 'hack':
        newLogs.push({ type: 'sys', text: 'LOADING GRID OVERRIDE PROTOCOL...' });
        setTimeout(() => {
          triggerMatrix();
        }, 600);
        break;
      case 'clear':
        setTerminalLogs([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push({ type: 'error', text: `Command not found: "${input}". Type "help" for a directory of operations.` });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  return (
    <div className="bento-grid-hero">
      {/* LEFT PROFILE CARD */}
      <motion.div 
        className="bento-card shadow-pink"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minHeight: '520px' }}
      >
        <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="window-title">PORTRAIT.EXE</span>
          <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>🔒 SECURE</span>
        </div>

        {/* DRAGGABLE CYBER STICKERS */}
        {FLOATING_STICKERS.map((sticker, i) => (
          <motion.div
            key={i}
            className="sticker"
            drag
            dragConstraints={{ top: -10, left: -10, right: 10, bottom: 10 }}
            whileDrag={{ scale: 1.1, zIndex: 100 }}
            style={{
              top: sticker.top,
              left: sticker.left,
              transform: `rotate(${sticker.rotate}deg)`,
              backgroundColor: sticker.color,
              cursor: 'grab'
            }}
          >
            <span style={{ marginRight: '4px' }}>{sticker.emoji}</span>
            {sticker.text}
          </motion.div>
        ))}

        {/* Vector Avatar */}
        <div style={{ position: 'relative', marginTop: '16px' }}>
          <div style={{
            width: '130px',
            height: '130px',
            borderRadius: '50%',
            border: '4px solid #000',
            background: 'var(--cyber-yellow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxShadow: '4px 4px 0px #000'
          }}>
            {/* Real uploaded profile picture */}
            <img 
              src="/profile.png" 
              alt="HEMANSH VERMA" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }} 
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: 'absolute',
              bottom: '0px',
              right: '0px',
              background: '#000',
              color: 'var(--mint-green)',
              border: '2px solid #000',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              boxShadow: '2px 2px 0px #000'
            }}
          >
            💡
          </motion.div>
        </div>

        <h2 style={{ fontFamily: 'var(--font-primary)', fontSize: '2rem', fontWeight: 'bold', marginTop: '20px', textTransform: 'uppercase' }}>
          HEMANSH VERMA
        </h2>

        {/* Dynamic sliding status label */}
        <div style={{
          background: '#000',
          color: '#FFF',
          padding: '6px 16px',
          borderRadius: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '1rem',
          marginTop: '10px',
          border: '2px solid #000',
          boxShadow: '3px 3px 0px var(--neon-pink)',
          minWidth: '220px'
        }}>
          {statuses[statusIdx]}
        </div>

        <div style={{ marginTop: '16px', fontSize: '0.9rem', color: '#333', fontWeight: '700', lineHeight: '1.4' }}>
          🚀 Aspiring Computer Science Engineer
        </div>
        
        <div style={{
          background: 'var(--card-bg-alt)',
          border: '2px solid #000',
          padding: '10px',
          borderRadius: '8px',
          marginTop: '12px',
          width: '100%',
          fontSize: '0.85rem',
          textAlign: 'left',
          fontFamily: 'var(--font-mono)',
          lineHeight: '1.5',
          boxShadow: '3px 3px 0px #000'
        }}>
          <div>📍 Varanasi, India</div>
          <div>📧 hemanshv7void@gmail.com</div>
          <div>📞 7307227418</div>
        </div>

        {/* Call to Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%', marginTop: 'auto', paddingTop: '20px' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#contact" className="cyber-btn cyber-btn-pink" style={{ flex: 1, justifyContent: 'center' }}>
              <Send size={16} /> Contact
            </a>
            <a href="/resume.pdf" download className="cyber-btn cyber-btn-yellow" style={{ flex: 1, justifyContent: 'center' }}>
              <FileText size={16} /> Resume
            </a>
          </div>

          {/* Social Links Row */}
          <div style={{ display: 'flex', justifyContent: 'space-around', background: '#F0F0F0', border: '3px solid #000', padding: '8px', borderRadius: '8px' }}>
            <a href="https://github.com/hemanshv41" target="_blank" rel="noreferrer" className="shake-hover" title="GitHub Profile" style={{ color: '#000' }}>
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/hemansh-verma-6ab30a15a/" target="_blank" rel="noreferrer" className="shake-hover" title="LinkedIn Profile" style={{ color: '#000' }}>
              <Linkedin size={20} />
            </a>
            <a href="https://leetcode.com/u/hemanshv/" target="_blank" rel="noreferrer" className="shake-hover" title="LeetCode Profile" style={{ color: '#000' }}>
              <Trophy size={20} />
            </a>
            <a href="#about" className="shake-hover" title="System Status" style={{ color: '#000' }}>
              <TermIcon size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* RIGHT INTRO CARD */}
      <motion.div 
        className="bento-card shadow-yellow"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '520px' }}
      >
        <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
          <div className="window-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <span className="window-title">TERMINAL_CORE.EXE</span>
          <span style={{ color: 'var(--neon-pink)', fontWeight: 'bold', fontSize: '0.85rem' }}>● SYS_ONLINE</span>
        </div>

        <div>
          {/* Greeting and description */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2.5rem' }}>Hi people! 👋</span>
            <span className="handwritten">I build cool things!</span>
          </div>

          <h1 className="heading-huge" style={{ marginTop: '10px', fontSize: '3.6rem', color: '#000', WebkitTextStroke: '2px #000' }}>
            HEMANSH VERMA
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#222', lineHeight: '1.6', marginTop: '15px' }}>
            I am a <span style={{ background: 'var(--mint-green)', padding: '2px 6px', border: '2px solid #000', borderRadius: '4px', fontWeight: 'bold' }}>Computer Science undergraduate</span> with focused experience in AI engineering, full-stack systems, and analytical data modeling. I construct responsive, highly interactive software architectures that run fast, feel alive, and resolve computational problems efficiently.
          </p>
        </div>

        {/* Playable Console Terminal Widget */}
        <div className="terminal-container crt-effect" style={{ marginTop: '20px' }}>
          <div className="terminal-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <TermIcon size={14} />
              <span>Shell Console v1.0.0</span>
            </div>
            <span style={{ color: 'var(--cyber-yellow)' }}>[guest@hemansh]</span>
          </div>
          
          <div className="terminal-body">
            {terminalLogs.map((log, i) => (
              <div key={i} style={{ 
                color: log.type === 'error' ? 'var(--neon-pink)' : 
                       log.type === 'user' ? 'var(--cyan)' : 
                       log.type === 'sys' ? '#FFF' : '#56F39A',
                marginBottom: '4px' 
              }}>
                {log.text}
              </div>
            ))}
            <div ref={terminalBottomRef} />
          </div>

          <form onSubmit={handleTerminalSubmit} className="terminal-input-line">
            <span className="terminal-prompt">$</span>
            <input 
              type="text" 
              className="terminal-input"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder='Try typing "help", "about", or "hack"...'
              style={{ caretColor: 'transparent' }}
            />
            <span className="terminal-blink" style={{ marginLeft: '-100%', pointerEvents: 'none' }}>|</span>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
