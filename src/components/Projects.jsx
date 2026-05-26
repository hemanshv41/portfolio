import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, ExternalLink, Github, Terminal, CheckCircle2, ChevronRight, Cpu } from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'WhatsFlow',
    description: 'A privacy-focused, offline-first WhatsApp chat analyzer that parses and renders highly interactive message analytics locally in the browser with 100% data safety. Engineered with responsive dashboards, optimizing file uploads and parser pipelines to seamlessly digest text logs up to 200MB.',
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    features: [
      '100% secure processing strictly on the local device',
      'Tactile cyberpunk-inspired visual dashboard widgets',
      'Highly optimized memory parser for files up to 200MB',
      'Interactive timelines, word counts, and speaker maps'
    ],
    github: 'https://github.com/hemanshv41',
    demo: 'https://whats-flow-isxe-h2w3un6ks-hemanshv41-4417s-projects.vercel.app/',
    featured: true,
    shadowClass: 'shadow-pink',
    color: 'var(--neon-pink)',
    codeSnippet: `// WhatsFlow Local Chat Parser Core
export function parseWhatsAppChat(fileContent) {
  const lineRegex = /^[\\d\\/\\s,:]+ - ([^:]+): (.*)$/;
  const lines = fileContent.split('\\n');
  const stats = { messagesCount: 0, speakers: {} };
  
  for (const line of lines) {
    const match = line.match(lineRegex);
    if (match) {
      const [_, sender, msg] = match;
      stats.messagesCount++;
      stats.speakers[sender] = (stats.speakers[sender] || 0) + 1;
    }
  }
  return compileStats(stats);
}`
  },
  {
    id: 2,
    title: 'Forest Fire Prediction',
    description: 'An early-detection machine learning model designed to parse environmental variables and identify geographic metrics that influence forest fire risks. Leverages standard scikit-learn classifiers and Streamlit inputs to provide proactive dashboards.',
    stack: ['Scikit-learn', 'Seaborn', 'Streamlit', 'Python'],
    features: [
      'Early detection insights built on real-world datasets',
      'Data parsing pipelines covering 1,000+ hourly logs',
      'Interactive risk parameter slider models in Streamlit',
      'Correlation heatmaps built using Python Seaborn'
    ],
    github: 'https://github.com/hemanshv41',
    demo: 'https://whatsflow-kkxja97us3zzn78jp2bh4k.streamlit.app/',
    featured: false,
    shadowClass: 'shadow-yellow',
    color: 'var(--cyber-yellow)',
    codeSnippet: `# Scikit-Learn prediction fit
from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)
score = model.score(X_test, y_test)
print(f"Model Score: {score * 100:.2f}%")`
  }
];

export default function Projects() {
  const [selectedSnippet, setSelectedSnippet] = useState(PROJECTS_DATA[0].id);

  return (
    <div>
      {/* Section Title */}
      <h2 className="heading-section">
        <span style={{ background: '#000', color: '#FFF', padding: '6px 16px', borderRadius: '8px', border: '3px solid #000', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
          02
        </span>
        FEATURED_PROJECTS.EXE
      </h2>

      {/* Grid wrapper */}
      <div className="projects-grid" style={{ marginTop: '20px' }}>
        {PROJECTS_DATA.map((project) => (
          <motion.div
            key={project.id}
            className={`bento-card ${project.featured ? 'project-featured shadow-pink' : project.shadowClass}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: project.featured ? '580px' : '440px'
            }}
          >
            {/* Header */}
            <div className="window-header" style={{ width: 'calc(100% + 48px)', alignSelf: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Folder size={18} style={{ color: project.color }} />
                <span className="window-title" style={{ fontSize: '0.9rem' }}>
                  {project.featured ? '🔥 FEATURED_SHOWCASE.SYS' : 'PROJECT_MODULE.SYS'}
                </span>
              </div>
              <span className="cyber-pill" style={{ fontSize: '0.75rem', padding: '2px 8px', background: '#000', color: '#FFF' }}>
                {project.id === 1 ? 'ACTIVE' : 'STABLE'}
              </span>
            </div>

            {/* Layout divided inside featured card */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: project.featured ? '1fr' : '1fr',
              gap: '24px',
              height: '100%'
            }}>
              {/* If featured, we make a split layout on large screens */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: project.featured ? 'repeat(auto-fit, minmax(300px, 1fr))' : '1fr',
                gap: '24px'
              }}>
                {/* Text and Details */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-primary)', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', color: '#000' }}>
                      {project.title}
                    </h3>

                    {/* Stack tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="cyber-pill" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p style={{ fontSize: '1.05rem', color: '#333', lineHeight: '1.6', marginBottom: '16px' }}>
                      {project.description}
                    </p>
                  </div>

                  {/* Feature bullet list */}
                  <div style={{ marginBottom: '16px' }}>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '8px', color: '#555' }}>
                      Core Functions:
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {project.features.map((feat, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', fontWeight: '500' }}>
                          <CheckCircle2 size={16} style={{ color: 'var(--mint-green)' }} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated IDE Terminal in Featured Project or side panels */}
                {project.featured && (
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div className="terminal-container crt-effect" style={{ height: '100%', minHeight: '260px' }}>
                      <div className="terminal-header" style={{ margin: '-16px -16px 8px -16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Terminal size={14} style={{ color: 'var(--neon-pink)' }} />
                          <span style={{ fontSize: '0.85rem' }}>VisualIDEController.js</span>
                        </div>
                        <span style={{ color: 'var(--mint-green)', fontSize: '0.8rem' }}>● EDITING</span>
                      </div>
                      <pre style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        overflowX: 'auto',
                        color: '#FFF',
                        fontFamily: 'var(--font-mono)'
                      }}>
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px',
              borderTop: '2px solid #EEE',
              paddingTop: '16px'
            }}>
              <a href={project.github} target="_blank" rel="noreferrer" className="cyber-btn cyber-btn-cyan" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                <Github size={16} /> Codebase
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="cyber-btn cyber-btn-yellow" style={{ fontSize: '0.85rem', padding: '8px 16px' }}>
                <ExternalLink size={16} /> Launch App
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
