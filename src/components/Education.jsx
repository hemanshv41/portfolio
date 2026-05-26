import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, Cpu, CheckCircle } from 'lucide-react';

const EDUCATION_DATA = [
  {
    type: 'degree',
    title: 'B. Tech in Computer Science and Engineering',
    institution: 'Ashoka Institute of Technology and Management | Varanasi',
    period: 'SEP 2023 - PRESENT',
    grade: 'Active Status: Undergraduate',
    xpBar: '███████░░░',
    percentage: '70%',
    description: 'Acquiring deep fundamentals in software engineering, algorithm design, and database systems. Actively building projects combining modern web stacks and analytical machine learning pipelines.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Web Development',
      'Database Systems',
      'Computer Networks'
    ],
    badges: ['🎓 CSE Major', '💻 Dev Tinker']
  }
];

const EXPERIENCE_DATA = [
  {
    role: 'AI Intern (Elevate Program)',
    company: 'Microsoft Elevate AI Initiative',
    period: 'JAN 2026 - FEB 2026',
    project: 'Project: Urban Mobility Demand Forecasting',
    description: 'Built machine learning forecasting engines on sample datasets during the Microsoft Elevate program, achieving an R² score of 0.88. Processed 8,000+ hourly records, integrating meteorological parameters (Solar Radiation, Humidity) with temporal features to reduce prediction variance.',
    techs: ['Python', 'Azure AI', 'Scikit-Learn', 'XGBoost', 'Pandas', 'Seaborn']
  }
];

export default function Education() {
  return (
    <div>
      {/* Section Title */}
      <h2 className="heading-section">
        <span style={{ background: '#000', color: '#FFF', padding: '6px 16px', borderRadius: '8px', border: '3px solid #000', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
          03
        </span>
        CAREER_MILESTONES.DAT
      </h2>

      {/* Main Grid: Split Education and Work Experience */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '24px',
        marginTop: '20px'
      }}>
        
        {/* Left Side: Timeline / Education Card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {EDUCATION_DATA.map((edu, index) => (
            <motion.div
              key={index}
              className="bento-card shadow-yellow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <GraduationCap size={18} style={{ color: 'var(--pure-black)' }} />
                  <span className="window-title" style={{ fontSize: '0.9rem' }}>ACADEMIC_NODE_01</span>
                </div>
                <span className="cyber-pill" style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'var(--cyber-yellow)' }}>
                  {edu.period}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#000',
                    lineHeight: '1.2'
                  }}>
                    {edu.title}
                  </h3>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--neon-pink)',
                    marginTop: '4px'
                  }}>
                    🏫 {edu.institution}
                  </h4>
                </div>

                {/* Level Up Progress Indicator */}
                <div style={{
                  background: '#0E0E12',
                  color: 'var(--mint-green)',
                  fontFamily: 'var(--font-mono)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '2px solid #000',
                  fontSize: '1.05rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>EXPERIENCE_LEVEL</span>
                    <span>{edu.grade}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>Degree Progress: [{edu.xpBar}]</span>
                    <span>{edu.percentage} XP</span>
                  </div>
                </div>

                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.6' }}>
                  {edu.description}
                </p>

                {/* Relevant Coursework Checklist */}
                <div style={{ borderTop: '2px dashed #000', paddingTop: '12px', marginTop: '4px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', color: '#555' }}>
                    Core Coursework Modules:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="cyber-pill" style={{ background: '#FFF', fontSize: '0.8rem', padding: '4px 10px' }}>
                        💡 {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements Badges */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', borderTop: '2px dashed #DDD', paddingTop: '12px' }}>
                  {edu.badges.map((badge, idx) => (
                    <span key={idx} className="cyber-pill" style={{ background: '#FFF', fontSize: '0.8rem', border: '2px solid var(--pure-black)' }}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side: Professional Work Experience Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={index}
              className="bento-card shadow-cyan"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Header */}
              <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Briefcase size={18} style={{ color: 'var(--cyan)' }} />
                  <span className="window-title" style={{ fontSize: '0.9rem' }}>PROFESSIONAL_EXPERIENCE.EXE</span>
                </div>
                <span className="cyber-pill" style={{ fontSize: '0.75rem', padding: '2px 8px', background: 'var(--cyan)' }}>
                  {exp.period}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontFamily: 'var(--font-primary)',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#000',
                    lineHeight: '1.2'
                  }}>
                    {exp.role}
                  </h3>
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: 'var(--neon-pink)',
                    marginTop: '4px'
                  }}>
                    🛡️ {exp.company}
                  </h4>
                </div>

                {/* Forecasting Success Indicator */}
                <div style={{
                  background: '#0E0E12',
                  color: 'var(--mint-green)',
                  fontFamily: 'var(--font-mono)',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '2px solid #000',
                  fontSize: '1.05rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span>METRIC: DEMAND_MODEL</span>
                    <span>R² SCORE: 0.88</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>VOLUMES: 8,000+ HOURLY RECS</span>
                    <span>METEOROLOGY INTEGRATED</span>
                  </div>
                </div>

                <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#000', textTransform: 'uppercase', borderBottom: '1px solid #CCC', pb: '4px' }}>
                  📌 {exp.project}
                </div>

                <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.6' }}>
                  {exp.description}
                </p>

                {/* Techs Used */}
                <div style={{ borderTop: '2px dashed #000', paddingTop: '12px', marginTop: '4px' }}>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', color: '#555' }}>
                    Technologies & Libraries Utilized:
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.techs.map((tech, idx) => (
                      <span key={idx} className="cyber-pill" style={{ background: '#FFF', fontSize: '0.8rem', padding: '4px 10px', border: '2px solid #000' }}>
                        ⚡ {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
