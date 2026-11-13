import React, { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Box,
  RotateCw,
  Move3d,
  Sparkles,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { profileData } from '../../data/profile';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ResumeButton } from '../ui/ResumeButton';
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
      className="relative min-h-[96vh] flex items-center justify-center pt-28 pb-20 overflow-hidden"
    >
      {/* Background Ambience: Deep Obsidian Void with Purple & Cyan Volumetric Lights */}
      <div className="absolute inset-0 bg-space-950 pointer-events-none" />
      <div className="absolute top-1/5 left-1/4 w-[560px] h-[560px] bg-purple-600/12 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-electric-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-[380px] h-[380px] bg-accent-orange/06 rounded-full blur-[150px] pointer-events-none" />

      {/* Architectural Dot Grid Overlay */}
      <div className="absolute inset-0 bg-grid-architectural opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-160px)]">
          {/* Left Column: Bold Oversized Typographic Masthead & Personal Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 text-left">
            {/* Status & Regional Coordinates Eyebrow */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Badge variant="purple" size="md" dot>
                {profileData.eyebrow}
              </Badge>

              <div className="inline-flex items-center gap-2 text-[11px] font-mono text-slate-300 bg-space-900/90 border border-space-750 px-3 py-1 rounded-full shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>SSGMCE Shegaon &bull; SGBAU (8.63 CGPA)</span>
              </div>
            </motion.div>

            {/* Bold Oversized Editorial Typography Composition */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {/* Massive Personal Brand Stamp */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-purple-400 font-bold">
                  CREATIVE DEVELOPER //
                </span>
                <span className="text-sm font-mono text-electric-400 bg-electric-950/60 border border-electric-500/30 px-2.5 py-0.5 rounded-md">
                  FULL-STACK &amp; BACKEND
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-display font-extrabold text-white tracking-[-0.04em] leading-[1.02]">
                <span className="block text-slate-100">Turning Ideas</span>
                <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-electric-400 bg-clip-text text-transparent block">
                  Into Digital Reality.
                </span>
              </h1>

              {/* Personal Name Banner */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-display font-bold text-slate-100 tracking-tight border-b-2 border-purple-500/60 pb-1 flex items-center gap-2">
                  <span>{profileData.fullName}</span>
                  <ShieldCheck className="w-5 h-5 text-electric-400" />
                </span>
              </div>
            </motion.div>

            {/* Supporting Bio with Generous Line-Height */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl"
            >
              {profileData.bio}
            </motion.p>

            {/* Currently Engineering & Learning Micro-Spec Terminal */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="p-4 rounded-xl glass-studio max-w-xl flex items-start gap-3.5 relative corner-crosshairs border-l-4 border-l-purple-500"
            >
              <div className="p-2 rounded-lg bg-purple-950/80 border border-purple-800/80 text-purple-300 shrink-0 mt-0.5">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-xs space-y-0.5">
                <span className="font-mono uppercase tracking-wider text-purple-300 font-semibold block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
                  Currently building &amp; engineering:
                </span>
                <p className="text-slate-300 font-sans leading-normal">
                  {profileData.currentFocus}
                </p>
              </div>
            </motion.div>

            {/* Hero CTA Action Triggers */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                magnetic
                onClick={() => scrollToSection('projects')}
                iconRight={<ArrowUpRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                magnetic
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>

              <ResumeButton variant="outline" size="lg" />

              <Button
                variant="ghost"
                size="md"
                magnetic
                onClick={() => scrollToSection('about')}
                className="hidden sm:inline-flex text-xs font-mono text-slate-400 hover:text-white"
              >
                <span>Read Story</span> &darr;
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Cinematic Portrait & 3D Interactive Systems Composition */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[500px] sm:min-h-[580px] lg:min-h-[640px]"
          >
            {/* Ambient Multi-Layer Radial Glow Behind Composition */}
            <div className="absolute w-[340px] h-[340px] bg-gradient-to-tr from-purple-600/25 via-electric-500/20 to-accent-orange/15 rounded-full blur-[80px] pointer-events-none" />

            {/* Cinematic Portrait Card with Studio Depth Framing */}
            <div className="relative z-10 w-full max-w-[380px] sm:max-w-[420px] rounded-3xl p-3 bg-gradient-to-b from-purple-500/30 via-space-850/80 to-space-900 border border-space-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-xl corner-crosshairs">
              {/* Tactical Top Spec Bar */}
              <div className="px-3 py-2 border-b border-space-750/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <Cpu className="w-3.5 h-3.5 text-electric-400" />
                  ID::TEJRAM_DUDHAPACHARE
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* Portrait Image Container */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/3.8] bg-space-950 my-2 group">
                <img
                  src={profileData.portraitUrl}
                  alt="Tejram Kisan Dudhapachare - Computer Science Engineering Student & Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03] brightness-[0.98]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Cinematic Vignette & Bottom Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent opacity-85 pointer-events-none" />

                {/* Subtle Chromatic Edge Highlights */}
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />

                {/* Floating Bottom Identity Badge on Portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-space-950/90 border border-space-750 backdrop-blur-md flex items-center justify-between shadow-2xl">
                  <div>
                    <span className="text-xs font-display font-bold text-white block">
                      Tejram K. Dudhapachare
                    </span>
                    <span className="text-[10px] font-mono text-purple-300 block">
                      SSGMCE Shegaon &bull; SGBAU CSE
                    </span>
                  </div>
                  <div className="text-right font-mono">
                    <span className="text-[10px] text-slate-400 uppercase block">CGPA</span>
                    <span className="text-xs font-bold text-emerald-400">8.63</span>
                  </div>
                </div>
              </div>

              {/* Embedded 3D Kernel Interactive Canvas Container */}
              <div className="relative mt-2 rounded-2xl bg-space-950/90 border border-space-750 p-2.5 flex flex-col gap-2">
                <div className="flex items-center justify-between px-2 text-[10px] font-mono text-slate-400">
                  <span className="text-purple-300 flex items-center gap-1 font-semibold">
                    <Move3d className="w-3 h-3 text-electric-400" /> 3D KINETIC KERNEL
                  </span>
                  <span>DRAG TO ORBIT</span>
                </div>

                {/* 3D Canvas Box */}
                <div
                  className="w-full h-44 sm:h-48 rounded-xl bg-space-900/80 border border-space-800 relative cursor-grab active:cursor-grabbing overflow-hidden"
                  data-cursor="ORBIT 3D"
                >
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

                {/* Interactive 3D Control HUD Toggles */}
                {supportsWebGL && !prefersReducedMotion && (
                  <div className="flex items-center justify-between px-1 pt-1">
                    <button
                      onClick={() => setWireframeMode(!wireframeMode)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                        wireframeMode
                          ? 'bg-purple-600 text-white font-semibold shadow-sm'
                          : 'text-slate-400 hover:text-white bg-space-900 border border-space-750'
                      }`}
                      title="Toggle Wireframe Lattice"
                    >
                      <Box className="w-3 h-3" />
                      <span>{wireframeMode ? 'Lattice Active' : 'Wireframe'}</span>
                    </button>

                    <button
                      onClick={() => setAutoRotate(!autoRotate)}
                      className={`text-[10px] font-mono px-2.5 py-1 rounded-lg flex items-center gap-1.5 transition-colors ${
                        !autoRotate
                          ? 'bg-accent-orange/20 text-accent-orange border border-accent-orange/40 font-semibold'
                          : 'text-slate-400 hover:text-white bg-space-900 border border-space-750'
                      }`}
                      title="Toggle Auto-Rotation"
                    >
                      <RotateCw className={`w-3 h-3 ${autoRotate ? 'animate-spin-slow' : ''}`} />
                      <span>{autoRotate ? 'Rotating' : 'Paused'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
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
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-purple-300 transition-colors flex items-center gap-2">
            <span>Scroll to Explore Philosophy</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-purple-400" />
          </span>
        </motion.div>
      </div>
    </section>
  );
};
