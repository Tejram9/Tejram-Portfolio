import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';

const bioParagraphs = [
  "I'm Tejram Kisan Dudhapachare, a second-year Computer Science Engineering student at Shri Sant Gajanan Maharaj College of Engineering, Shegaon.",
  "I enjoy transforming ideas into working software products.",
  "My interests include Java, backend engineering, full-stack development, AI integration and solving practical problems through technology.",
  "I believe the best way to learn engineering is to build, experiment and continuously improve.",
];

const edu = profileData.education;

const credRows = [
  { key: 'COLLEGE', value: edu.shortName },
  { key: 'UNIVERSITY', value: 'SGBAU' },
  { key: 'DEGREE', value: 'BE Computer Science Engineering' },
  { key: 'CURRENT ACADEMIC STATUS', value: edu.currentYear },
  { key: 'CGPA', value: edu.cgpa, isHighlight: true },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{ backgroundColor: '#F3F1E8', color: '#090B08', position: 'relative', overflow: 'hidden' }}
      className="py-24 md:py-32"
    >
      {/* Background ghost text */}
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(8rem, 25vw, 22rem)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(0,0,0,0.06)',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          zIndex: 0,
          lineHeight: 1,
          letterSpacing: '-0.02em',
          pointerEvents: 'none',
        }}
      >
        ABOUT
      </span>

      <div
        className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN (40%) ── */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Section label */}
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: '#8A8C85',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              002 — ABOUT
            </p>

            {/* Giant headline */}
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                letterSpacing: '-0.02em',
                lineHeight: 0.9,
                color: '#090B08',
                textTransform: 'uppercase',
                marginBottom: '2rem',
              }}
            >
              NOT JUST A<br />
              DEVELOPER.<br />
              A PROBLEM<br />
              <span className="bg-void text-lime-acid px-3 py-0.5 inline-block mt-1 transform -rotate-1 shadow-md">
                SOLVER.
              </span>
            </h2>

            {/* Charcoal rule */}
            <div
              style={{
                width: '60px',
                height: '3px',
                backgroundColor: '#090B08',
                marginBottom: '2rem',
              }}
            />

            {/* Metadata descriptor */}
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                color: '#3D4038',
                letterSpacing: '0.08em',
                lineHeight: 1.6,
                maxWidth: '300px',
              }}
            >
              CSE STUDENT · BUILDER · PRACTICAL PROBLEM SOLVER
            </p>
          </motion.div>

          {/* ── RIGHT COLUMN (60%) ── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Bio paragraphs */}
            <div className="flex flex-col gap-5">
              {bioParagraphs.map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.05rem',
                    color: '#1A1C18',
                    lineHeight: 1.75,
                  }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Education credentials block */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #090B08',
                boxShadow: '6px 6px 0px #090B08',
                padding: '2rem',
              }}
            >
              <div className="flex items-center justify-between border-b-2 border-black/10 pb-3 mb-6">
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: '#3D4038',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  ACADEMIC DOSSIER // CREDENTIALS
                </p>
                <span className="font-mono text-[10px] bg-void text-lime-acid px-2 py-0.5 uppercase tracking-wider font-semibold">
                  AUTHENTIC RECORD
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {credRows.map(({ key, value, isHighlight }) => (
                  <div key={key} className={isHighlight ? 'sm:col-span-2' : ''}>
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        color: '#8A8C85',
                        textTransform: 'uppercase',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {key}
                    </p>
                    {isHighlight ? (
                      <div className="bg-void p-4 flex items-center justify-between border-l-4 border-lime-acid mt-1">
                        <div>
                          <span className="font-mono text-[10px] text-softgrey uppercase tracking-widest block mb-0.5">
                            CUMULATIVE GRADE POINT AVERAGE
                          </span>
                          <p
                            style={{
                              fontFamily: "'Anton', sans-serif",
                              fontSize: '3rem',
                              color: '#D5FF00',
                              lineHeight: 1,
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {value}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-softgrey border border-white/20 px-3 py-1">
                          SCALE: 10.0
                        </span>
                      </div>
                    ) : (
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1rem',
                          color: '#090B08',
                          fontWeight: 600,
                          lineHeight: 1.4,
                        }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
