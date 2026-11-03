import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Award } from 'lucide-react';
import { profileData } from '../../data/profile';
import { scrollToSection } from '../../lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-space-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cobalt-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Identity & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-space-850 border border-cobalt-500/40 flex items-center justify-center font-mono font-bold text-cobalt-300 text-xs shadow-[0_0_12px_rgba(37,99,235,0.2)]">
                TD
              </div>
              <span className="font-display font-bold text-slate-100 text-lg">
                Tejram Kisan Dudhapachare
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Computer Science Engineering student at Shri Sant Gajanan Maharaj College of Engineering, Shegaon. Focused on building pragmatic full-stack solutions, resilient Java backend architectures, and AI integrations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-space-900 border border-slate-800 text-xs font-mono text-cobalt-400">
              <Award className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>ARISE Diwali Portfolio Competition 2026</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {['Hero', 'About', 'Education', 'Skills', 'Projects', 'Journey', 'Contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec.toLowerCase())}
                    className="hover:text-cobalt-400 transition-colors"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Institutional Context */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
              Institutional Context
            </h4>
            <div className="text-xs text-slate-400 space-y-1 font-mono">
              <p className="text-slate-300 font-sans font-medium">SSGMCE Shegaon</p>
              <p>Sant Gadge Baba Amravati University (SGBAU)</p>
              <p>Bachelor of Engineering — 2nd Year CSE</p>
              <p className="text-cobalt-400 font-semibold">CGPA: 8.63 (Verified)</p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={profileData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-space-850 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-800 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={profileData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-space-850 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-800 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.socialLinks.email}`}
                className="p-2.5 rounded-xl bg-space-850 border border-slate-800 text-slate-300 hover:text-white hover:border-cobalt-500/50 hover:bg-space-800 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {currentYear} Tejram Kisan Dudhapachare. Crafted with purpose &amp; precision.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span>Built with React, Three.js &amp; Tailwind</span>
            </span>

            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-1.5 text-cobalt-400 hover:text-cobalt-300 transition-colors focus:outline-none"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
