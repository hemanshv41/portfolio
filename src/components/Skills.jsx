import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Wrench, Brain, BookOpen } from 'lucide-react';

const SKILLS_DATA = [
  {
    title: 'Programming Languages',
    icon: <Code size={20} style={{ color: 'var(--neon-pink)' }} />,
    color: 'var(--neon-pink)',
    shadowClass: 'shadow-pink',
    level: '90%',
    bar: '█████████░',
    skills: ['C++', 'C', 'Python', 'Java', 'SQL']
  },
  {
    title: 'Frameworks & Libraries',
    icon: <Layout size={20} style={{ color: 'var(--cyber-yellow)' }} />,
    color: 'var(--cyber-yellow)',
    shadowClass: 'shadow-yellow',
    level: '85%',
    bar: '████████░░',
    skills: ['React.js', 'Node.js']
  },
  {
    title: 'Databases',
    icon: <Database size={20} style={{ color: 'var(--purple)' }} />,
    color: 'var(--purple)',
    shadowClass: 'shadow-purple',
    level: '80%',
    bar: '████████░░',
    skills: ['MongoDB', 'Supabase']
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} style={{ color: 'var(--cyan)' }} />,
    color: 'var(--cyan)',
    shadowClass: 'shadow-cyan',
    level: '80%',
    bar: '████████░░',
    skills: ['GitHub', 'Databricks']
  },
  {
    title: 'Soft Skills',
    icon: <Brain size={20} style={{ color: 'var(--mint-green)' }} />,
    color: 'var(--mint-green)',
    shadowClass: 'shadow-green',
    level: '95%',
    bar: '█████████½',
    skills: ['Teamwork', 'Adaptability', 'Problem Solving', 'Collaboration', 'Analytical Storytelling']
  },
  {
    title: 'Languages Spoken',
    icon: <BookOpen size={20} style={{ color: '#000' }} />,
    color: '#000',
    shadowClass: 'shadow-black',
    level: '100%',
    bar: '██████████',
    skills: ['English', 'Hindi']
  }
];

export default function Skills() {
  return (
    <div>
      {/* Section Title */}
      <h2 className="heading-section">
        <span style={{ background: '#000', color: '#FFF', padding: '6px 16px', borderRadius: '8px', border: '3px solid #000', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
          01
        </span>
        TECHNICAL_CAPABILITIES.EXE
      </h2>

      {/* Bento Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px',
        marginTop: '20px'
      }}>
        {SKILLS_DATA.map((category, index) => (
          <motion.div
            key={index}
            className={`bento-card ${category.shadowClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {/* Header of Bento Card */}
            <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {category.icon}
                <span className="window-title" style={{ fontSize: '0.9rem' }}>{category.title}</span>
              </div>
              <span className="dot" style={{ backgroundColor: category.color }}></span>
            </div>

            {/* Simulated System Progress Bar */}
            <div style={{
              background: '#0E0E12',
              color: category.color,
              fontFamily: 'var(--font-mono)',
              padding: '8px 12px',
              borderRadius: '6px',
              fontSize: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              border: '2px solid #000'
            }}>
              <span>LOAD_STATE: [{category.bar}]</span>
              <span>{category.level}</span>
            </div>

            {/* List of Skills tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="cyber-pill"
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: category.color, 
                    color: category.color === '#000' ? '#FFF' : '#000',
                    boxShadow: `0 0 10px ${category.color}`
                  }}
                  style={{ transition: 'background-color 0.15s, color 0.15s' }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
