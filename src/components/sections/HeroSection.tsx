import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Box,
  RotateCw,
  Move3d,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { scrollToSection } from '../../lib/utils';
import { HeroSculpture } from '../3d/HeroSculpture';
import { FallbackSculpture } from '../3d/FallbackSculpture';
import { ThreeErrorBoundary } from '../3d/ErrorBoundary';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

export const HeroSection: React.FC = () => {
  const { isMobile, prefersReducedMotion, supportsWebGL } = useDevicePerformance();
  const [wireframeMode, setWireframeMode] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Ambience & Deep Charcoal Gradients */}
      <div className="absolute inset-0 bg-space-950 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cobalt-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyber-cyan/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Tactical Coordinate Grid Overlay */}
      <div className="absolute inset-0 bg-subtle-grid bg-[size:32px_32px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column: Editorial Typography & Story Intro */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
            {/* Status / Eyebrow Pill */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge variant="cobalt" size="md" dot>
                {profileData.eyebrow}
              </Badge>

              <div className="hidden sm:inline-flex items-center gap-2 text-xs font-mono text-slate-300 bg-space-850/80 border border-slate-800/80 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SSGMCE Shegaon • SGBAU</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-50 tracking-tight leading-[1.08]">
                <span>{profileData.headline.line1}</span>
                <br />
                <span className="bg-gradient-to-r from-cobalt-400 via-cyber-cyan to-cobalt-300 bg-clip-text text-transparent">
                  {profileData.headline.line2}
                </span>
              </h1>

              {/* Identity Name Reveal */}
              <div className="pt-2 flex items-center gap-3">
                <span className="font-mono text-sm uppercase tracking-widest text-slate-400">
                  I&apos;m
                </span>
                <span className="text-xl sm:text-2xl font-display font-bold text-slate-100 tracking-normal border-b-2 border-cobalt-500/60 pb-0.5">
                  {profileData.name}
                </span>
              </div>
            </motion.div>

            {/* Supporting Bio */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              {profileData.bio}
            </motion.p>

            {/* Currently Building & Learning Micro-Badge */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-3.5 rounded-xl bg-space-850/80 border border-slate-800/90 backdrop-blur-md max-w-xl flex items-start gap-3"
            >
              <div className="p-2 rounded-lg bg-cobalt-950 border border-cobalt-800/60 text-cobalt-400 shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-mono uppercase tracking-wider text-cobalt-400 font-semibold block">
                  Currently building &amp; learning:
                </span>
                <p className="text-slate-300 font-sans">
                  {profileData.currentFocus}
                </p>
              </div>
            </motion.div>

            {/* Hero CTA Buttons */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Let&apos;s Connect
              </Button>

              <Button
                variant="ghost"
                size="md"
                onClick={() => scrollToSection('about')}
                className="hidden sm:inline-flex text-xs font-mono text-slate-300 hover:text-white"
              >
                <span>Read Story</span> &darr;
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Custom 3D Kinetic Technological Sculpture */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 h-[400px] sm:h-[480px] md:h-[540px] lg:h-[600px] relative flex flex-col items-center justify-center"
          >
            {/* Tactical Coordinate Bounds Frame */}
            <div className="absolute inset-0 rounded-3xl border border-slate-800/60 pointer-events-none">
              <span className="absolute top-3 left-3 text-[10px] font-mono text-slate-400">
                SYS::CORE_NODE_3D
              </span>
              <span className="absolute top-3 right-3 text-[10px] font-mono text-cobalt-400 flex items-center gap-1">
                <Move3d className="w-3 h-3" /> Drag to Orbit
              </span>
              <span className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-400">
                FPS: 60 • R3F
              </span>
              <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400">
                [SSGMCE_SGBAU]
              </span>
            </div>

            {/* 3D Scene wrapped in bulletproof ErrorBoundary */}
            <div className="w-full h-full">
              {supportsWebGL && !prefersReducedMotion ? (
                <ThreeErrorBoundary fallback={<FallbackSculpture />}>
                  <Suspense fallback={<FallbackSculpture />}>
                    <HeroSculpture
                      isMobile={isMobile}
                      wireframeMode={wireframeMode}
                      autoRotate={autoRotate}
                    />
                  </Suspense>
                </ThreeErrorBoundary>
              ) : (
                <FallbackSculpture />
              )}
            </div>

            {/* Interactive 3D Control HUD (Allows competition judges to manipulate the scene) */}
            {supportsWebGL && !prefersReducedMotion && (
              <div className="absolute bottom-6 z-20 flex items-center gap-2 bg-space-900/90 border border-slate-700/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                <button
                  onClick={() => setWireframeMode(!wireframeMode)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    wireframeMode
                      ? 'bg-cobalt-600 text-white'
                      : 'text-slate-300 hover:text-white hover:bg-space-800'
                  }`}
                  title="Toggle Wireframe Architecture"
                >
                  <Box className="w-3 h-3" />
                  <span>Wireframe</span>
                </button>

                <div className="w-[1px] h-3 bg-slate-700" />

                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-colors ${
                    !autoRotate
                      ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-space-800'
                  }`}
                  title="Pause / Resume kinetic orbit"
                >
                  <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin-slow' : ''}`} />
                  <span>{autoRotate ? 'Rotating' : 'Paused'}</span>
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Scroll-Down Visual Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-8 flex flex-col items-center justify-center cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-cobalt-300 transition-colors flex items-center gap-2">
            <span>Scroll Down to Discover</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-cobalt-400" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};
