import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../data/projects';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(9,11,8,0.85)',
              zIndex: 50,
              backdropFilter: 'blur(4px)',
            }}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 51,
              width: '90vw',
              maxWidth: '680px',
              maxHeight: '85vh',
              overflowY: 'auto',
              backgroundColor: '#090B08',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '12px',
              padding: '2rem',
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#8A8C85',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '0.1em',
              }}
            >
              ✕ CLOSE
            </button>

            {/* Project num */}
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                letterSpacing: '0.2em',
                color: '#8A8C85',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
              }}
            >
              {project.num} — PROJECT
            </p>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 0.95,
                color: '#FFFFFF',
                textTransform: 'uppercase',
                marginBottom: '0.5rem',
              }}
            >
              {project.title}
            </h2>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#D5FF00',
                letterSpacing: '0.1em',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
              }}
            >
              {project.tagline}
            </p>

            {/* Divider */}
            <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', marginBottom: '1.5rem' }} />

            {/* Description */}
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                color: 'rgba(196,198,191,0.85)',
                lineHeight: 1.75,
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>

            {/* Stack */}
            <div style={{ marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: '#8A8C85',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                TECH STACK
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      border: '1px solid rgba(255,255,255,0.15)',
                      padding: '0.25rem 0.75rem',
                      color: '#C4C6BF',
                      borderRadius: '4px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div style={{ marginBottom: '2rem' }}>
              <p
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  color: '#8A8C85',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                KEY FEATURES
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {project.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.875rem',
                      color: '#C4C6BF',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ color: '#D5FF00', fontSize: '0.6rem' }}>▶</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: '#D5FF00',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                VIEW LIVE →
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.15em',
                    color: '#8A8C85',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                  }}
                >
                  GITHUB →
                </a>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
