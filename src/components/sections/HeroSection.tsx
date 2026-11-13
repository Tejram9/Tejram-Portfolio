import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/profile';
import { scrollToSection } from '../../lib/utils';
import { HeroSculpture } from '../3d/HeroSculpture';
import { FallbackSculpture } from '../3d/FallbackSculpture';
import { ThreeErrorBoundary } from '../3d/ErrorBoundary';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

// ─── Animation variants ────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut', delay },
});

// ─── Scroll indicator ─────────────────────────────────────────────────────────
const ScrollIndicator: React.FC = () => (
  <motion.div
    {...fadeIn(1.4)}
    className="absolute bottom-6 left-6 md:left-8 z-20 flex flex-col items-center gap-2 cursor-pointer"
    onClick={() => scrollToSection('about')}
  >
    <span
      className="font-mono text-[10px] tracking-widest uppercase"
      style={{ color: '#8A8C85', writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
    >
      SCROLL
    </span>
    {/* Animated downward line */}
    <div className="relative w-px h-12" style={{ background: 'rgba(138,140,133,0.25)' }}>
      <motion.div
        className="absolute top-0 left-0 w-full"
        style={{ background: '#D5FF00', height: '40%' }}
        animate={{ y: ['0%', '150%'] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  </motion.div>
);

// ─── Ticker ───────────────────────────────────────────────────────────────────
const TICKER_TEXT =
  'JAVA DEVELOPER  ·  BACKEND ENGINEERING  ·  FULL-STACK  ·  AI INTEGRATION  ·  OPEN SOURCE  ·  PROBLEM SOLVER  ·  ';

const TickerBar: React.FC = () => (
  <div
    className="relative overflow-hidden border-t"
    style={{
      background: '#1A1C18',
      borderColor: 'rgba(255,255,255,0.08)',
      height: '36px',
    }}
  >
    <div
      className="flex whitespace-nowrap items-center h-full"
      style={{ animation: 'ticker 30s linear infinite' }}
    >
      {/* Duplicated twice for seamless loop */}
      {[0, 1].map((n) => (
        <span
          key={n}
          className="font-mono text-[10px] tracking-widest uppercase pr-0"
          style={{ color: '#8A8C85' }}
        >
          {TICKER_TEXT}
        </span>
      ))}
    </div>
  </div>
);

// ─── Hero section ─────────────────────────────────────────────────────────────
export const HeroSection: React.FC = () => {
  const { isMobile, prefersReducedMotion, supportsWebGL } = useDevicePerformance();

  const show3D = supportsWebGL && !prefersReducedMotion && !isMobile;

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ background: '#090B08', minHeight: '100vh' }}
    >
      {/* ── Background grain + subtle gradient glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(213,255,0,0.03) 0%, transparent 70%)',
        }}
      />

      {/* ── Main two-column grid ── */}
      <div
        className="relative z-10 w-full mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-28"
        style={{ maxWidth: '1440px' }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-6 lg:gap-12">

          {/* ════════════════════════════════════════════
              LEFT COLUMN — Typography block (~55%)
          ════════════════════════════════════════════ */}
          <div
            className="flex flex-col gap-6 md:gap-8"
            style={{ flex: '0 0 55%', maxWidth: '55%', minWidth: 0 }}
          >
            {/* 1. Eyebrow label */}
            {!prefersReducedMotion ? (
              <motion.p
                {...fadeUp(0.1)}
                className="font-mono uppercase tracking-widest text-[10px] md:text-[11px]"
                style={{ color: '#8A8C85' }}
              >
                {profileData.eyebrow}
              </motion.p>
            ) : (
              <p
                className="font-mono uppercase tracking-widest text-[10px] md:text-[11px]"
                style={{ color: '#8A8C85' }}
              >
                {profileData.eyebrow}
              </p>
            )}

            {/* 2. Giant headline */}
            <div className="overflow-hidden">
              {!prefersReducedMotion ? (
                <>
                  <motion.div {...fadeUp(0.2)} className="overflow-hidden">
                    <h1
                      className="font-display uppercase block"
                      style={{
                        fontSize: 'clamp(4.5rem, 10vw, 10rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.88,
                        color: '#F3F1E8',
                      }}
                    >
                      I DON&apos;T JUST
                    </h1>
                  </motion.div>

                  <motion.div {...fadeUp(0.3)} className="overflow-hidden">
                    <h1
                      className="font-display uppercase block"
                      style={{
                        fontSize: 'clamp(4.5rem, 10vw, 10rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.88,
                      }}
                    >
                      <span style={{ color: '#F3F1E8' }}>WRITE </span>
                      <span style={{ color: '#D5FF00' }}>CODE.</span>
                    </h1>
                  </motion.div>

                  <motion.div {...fadeUp(0.4)} className="overflow-hidden">
                    <h1
                      className="font-display uppercase block"
                      style={{
                        fontSize: 'clamp(4.5rem, 10vw, 10rem)',
                        letterSpacing: '-0.02em',
                        lineHeight: 0.88,
                        color: '#F3F1E8',
                      }}
                    >
                      I BUILD IDEAS.
                    </h1>
                  </motion.div>
                </>
              ) : (
                <h1
                  className="font-display uppercase"
                  style={{
                    fontSize: 'clamp(4.5rem, 10vw, 10rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 0.88,
                    color: '#F3F1E8',
                  }}
                >
                  I DON&apos;T JUST WRITE{' '}
                  <span style={{ color: '#D5FF00' }}>CODE.</span> I BUILD IDEAS.
                </h1>
              )}
            </div>

            {/* 3. Name block */}
            {!prefersReducedMotion ? (
              <motion.div {...fadeUp(0.5)} className="flex flex-col leading-none mt-2 md:mt-4">
                <span
                  className="font-display uppercase"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 5rem)',
                    letterSpacing: '-0.02em',
                    color: '#D5FF00',
                    lineHeight: 1,
                  }}
                >
                  TEJRAM
                </span>
                <span
                  className="font-display uppercase"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(243,241,232,0.7)',
                  }}
                >
                  DUDHAPACHARE
                </span>
              </motion.div>
            ) : (
              <div className="flex flex-col leading-none mt-2 md:mt-4">
                <span
                  className="font-display uppercase"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 5rem)',
                    letterSpacing: '-0.02em',
                    color: '#D5FF00',
                    lineHeight: 1,
                  }}
                >
                  TEJRAM
                </span>
                <span
                  className="font-display uppercase"
                  style={{
                    fontSize: 'clamp(2.2rem, 5vw, 5rem)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(243,241,232,0.7)',
                  }}
                >
                  DUDHAPACHARE
                </span>
              </div>
            )}

            {/* 4. Description */}
            {!prefersReducedMotion ? (
              <motion.p
                {...fadeUp(0.65)}
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: 'rgba(196,198,191,0.8)' }}
              >
                {profileData.tagline}
              </motion.p>
            ) : (
              <p
                className="text-sm md:text-base leading-relaxed max-w-md"
                style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: 'rgba(196,198,191,0.8)' }}
              >
                {profileData.tagline}
              </p>
            )}

            {/* 5. CTA buttons */}
            {!prefersReducedMotion ? (
              <motion.div {...fadeUp(0.8)} className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-200"
                  style={{
                    borderColor: '#D5FF00',
                    color: '#D5FF00',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = '#D5FF00';
                    (e.currentTarget as HTMLButtonElement).style.color = '#090B08';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color = '#D5FF00';
                  }}
                >
                  EXPLORE SELECTED WORK
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border transition-all duration-200"
                  style={{
                    borderColor: 'rgba(255,255,255,0.2)',
                    color: '#ffffff',
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)';
                  }}
                >
                  LET&apos;S CONNECT
                </button>
              </motion.div>
            ) : (
              <div className="flex flex-wrap gap-3 mt-2">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border"
                  style={{ borderColor: '#D5FF00', color: '#D5FF00', background: 'transparent' }}
                >
                  EXPLORE SELECTED WORK
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#ffffff', background: 'transparent' }}
                >
                  LET&apos;S CONNECT
                </button>
              </div>
            )}
          </div>

          {/* ════════════════════════════════════════════
              RIGHT COLUMN — Portrait + 3D (~45%)
          ════════════════════════════════════════════ */}
          <div
            className="relative flex flex-col items-center md:items-end"
            style={{ flex: '0 0 45%', maxWidth: '45%', minWidth: 0 }}
          >
            {/* Portrait composition container */}
            <div className="relative w-full" style={{ maxWidth: '480px' }}>

              {/* Floating metadata labels — desktop only */}
              <motion.div
                {...(!prefersReducedMotion ? fadeIn(0.9) : {})}
                className="hidden md:block absolute z-20 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 border backdrop-blur-sm pointer-events-none whitespace-nowrap"
                style={{
                  top: '-14px',
                  left: '-10px',
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(9,11,8,0.85)',
                  color: '#8A8C85',
                }}
              >
                JAVA DEVELOPER
              </motion.div>

              <motion.div
                {...(!prefersReducedMotion ? fadeIn(1.0) : {})}
                className="hidden md:block absolute z-20 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 border backdrop-blur-sm pointer-events-none whitespace-nowrap"
                style={{
                  top: '-14px',
                  right: '-10px',
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(9,11,8,0.85)',
                  color: '#8A8C85',
                }}
              >
                FULL-STACK ENTHUSIAST
              </motion.div>

              <motion.div
                {...(!prefersReducedMotion ? fadeIn(1.1) : {})}
                className="hidden md:block absolute z-20 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 border backdrop-blur-sm pointer-events-none whitespace-nowrap"
                style={{
                  bottom: show3D ? '220px' : '12px',
                  left: '-10px',
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(9,11,8,0.85)',
                  color: '#8A8C85',
                }}
              >
                PROJECT BUILDER
              </motion.div>

              <motion.div
                {...(!prefersReducedMotion ? fadeIn(1.2) : {})}
                className="hidden md:block absolute z-20 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1.5 border backdrop-blur-sm pointer-events-none whitespace-nowrap"
                style={{
                  bottom: show3D ? '220px' : '12px',
                  right: '-10px',
                  borderColor: 'rgba(255,255,255,0.15)',
                  background: 'rgba(9,11,8,0.85)',
                  color: '#8A8C85',
                }}
              >
                BASED IN INDIA
              </motion.div>

              {/* Portrait image */}
              {!prefersReducedMotion ? (
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                  className="relative overflow-hidden"
                  style={{
                    height: 'clamp(340px, 55vw, 500px)',
                    borderLeft: '2px solid #D5FF00',
                    boxShadow: '-6px 0 30px rgba(213,255,0,0.12)',
                  }}
                >
                  <img
                    src="/images/tejram-profile.jpg"
                    alt="Tejram Dudhapachare — Computer Science Engineering Student"
                    className="w-full h-full"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(20%) contrast(1.1)',
                    }}
                    loading="eager"
                  />
                  {/* Subtle bottom vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to top, #090B08 0%, transparent 40%)',
                    }}
                  />
                </motion.div>
              ) : (
                <div
                  className="relative overflow-hidden"
                  style={{
                    height: 'clamp(340px, 55vw, 500px)',
                    borderLeft: '2px solid #D5FF00',
                  }}
                >
                  <img
                    src="/images/tejram-profile.jpg"
                    alt="Tejram Dudhapachare — Computer Science Engineering Student"
                    className="w-full h-full"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(20%) contrast(1.1)',
                    }}
                    loading="eager"
                  />
                </div>
              )}

              {/* 3D Sculpture */}
              {!prefersReducedMotion ? (
                <motion.div
                  {...fadeIn(0.6)}
                  className="relative mt-4"
                  style={{
                    width: '100%',
                    height: isMobile ? '0px' : '240px',
                    display: isMobile ? 'none' : 'block',
                  }}
                >
                  {show3D ? (
                    <ThreeErrorBoundary fallback={<FallbackSculpture />}>
                      <Suspense fallback={<FallbackSculpture />}>
                        <HeroSculpture isMobile={isMobile} />
                      </Suspense>
                    </ThreeErrorBoundary>
                  ) : (
                    <FallbackSculpture />
                  )}
                </motion.div>
              ) : (
                <div
                  className="relative mt-4"
                  style={{
                    width: '100%',
                    height: isMobile ? '0px' : '240px',
                    display: isMobile ? 'none' : 'block',
                  }}
                >
                  <FallbackSculpture />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator (absolute, bottom-left) ── */}
      <ScrollIndicator />

      {/* ── Horizontal ticker ── */}
      <div className="mt-12 md:mt-16">
        <TickerBar />
      </div>

      {/* Mobile layout override */}
      <style>{`
        @media (max-width: 767px) {
          #hero .flex.flex-col.md\\:flex-row {
            flex-direction: column-reverse;
          }
          #hero .flex.flex-col.md\\:flex-row > div {
            flex: 0 0 100% !important;
            max-width: 100% !important;
          }
        }
        @keyframes ticker {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
