import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Award, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profile';
import { scrollToSection } from '../../lib/utils';
import { Magnetic } from '../ui/Magnetic';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-space-950 border-t border-slate-800/80 pt-20 pb-12 overflow-hidden hairline-border-t">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cobalt-600/08 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-space-900 border border-cobalt-500/40 flex items-center justify-center font-mono font-bold text-cobalt-300 text-xs shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                TD
              </div>
              <div>
                <span className="font-display font-bold text-slate-100 text-lg block tracking-tight">
                  Tejram Kisan Dudhapachare
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Second-Year CSE @ SSGMCE Shegaon
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science Engineering student at Shri Sant Gajanan Maharaj College of Engineering, Shegaon. Focused on building pragmatic full-stack solutions, resilient Java backend architectures, and AI integrations.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-space-900 border border-slate-800 text-xs font-mono text-cobalt-400">
              <Award className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>ARISE Diwali Portfolio Competition 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-300 font-semibold">
              Index Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400 font-mono">
              {[
                { label: '01 // Home', id: 'hero' },
                { label: '02 // About & Philosophy', id: 'about' },
                { label: '03 // Education Dossier', id: 'education' },
                { label: '04 // Tech Stack & Skills', id: 'skills' },
                { label: '05 // Featured Projects', id: 'projects' },
                { label: '06 // Development Journey', id: 'journey' },
                { label: '07 // Contact Dispatch', id: 'contact' },
              ].map((sec) => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className="hover:text-cobalt-300 transition-colors focus:outline-none focus:text-cobalt-300"
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Institutional Context */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.18em] text-slate-300 font-semibold">
              Academic Registry
            </h4>
            <div className="text-xs text-slate-400 space-y-1.5 font-mono p-4 rounded-xl bg-space-900/80 border border-slate-800">
              <p className="text-slate-200 font-sans font-medium">SSGMCE Shegaon</p>
              <p>Sant Gadge Baba Amravati University (SGBAU)</p>
              <p>Bachelor of Engineering &mdash; Class of 2027</p>
              <p className="text-cobalt-400 font-semibold pt-1 border-t border-slate-800">
                Official CGPA: 8.63 (Verified)
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Magnetic strength={0.25}>
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-space-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-850 transition-all focus:outline-none focus:ring-2 focus:ring-cobalt-500 block"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-space-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-850 transition-all focus:outline-none focus:ring-2 focus:ring-cobalt-500 block"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${profileData.socialLinks.email}`}
                  className="p-3 rounded-xl bg-space-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-850 transition-all focus:outline-none focus:ring-2 focus:ring-cobalt-500 block"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} Tejram Kisan Dudhapachare. Art-directed &amp; engineered with precision.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Sparkles className="w-3 h-3 text-cobalt-400" />
              <span>React 18 • Three.js • Tailwind</span>
            </span>

            <Magnetic strength={0.25}>
              <button
                onClick={() => scrollToSection('hero')}
                className="flex items-center gap-1.5 text-cobalt-400 hover:text-cobalt-300 transition-colors focus:outline-none"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
};
