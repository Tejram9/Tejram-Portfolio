import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Search, Clock } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';
import { profileData } from '../../data/profile';
import { Magnetic } from '../ui/Magnetic';
import { ResumeButton } from '../ui/ResumeButton';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [istTime, setIstTime] = useState('');

  // Clock in Indian Standard Time (IST)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setIstTime(`${timeStr} IST`);
      } catch (e) {
        setIstTime('IST // Shegaon');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Overview', sectionIds: ['hero'] },
    { id: 'about', label: 'Philosophy', sectionIds: ['about', 'education'] },
    { id: 'skills', label: 'Stack', sectionIds: ['skills', 'learning'] },
    { id: 'projects', label: 'Work', sectionIds: ['projects'] },
    { id: 'journey', label: 'Milestones', sectionIds: ['journey', 'achievements'] },
    { id: 'contact', label: 'Contact', sectionIds: ['contact'] },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Reading Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-electric-400 to-accent-orange z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/85 backdrop-blur-xl border-b border-space-750/80 py-3 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.9)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Signature Identity Stamp */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl"
            aria-label="Tejram - Back to top"
          >
            {/* Tactical Monogram Node */}
            <div className="relative w-9 h-9 rounded-xl bg-space-900 border border-purple-500/40 flex items-center justify-center font-mono font-bold text-purple-300 text-xs shadow-[0_0_18px_rgba(168,85,247,0.3)] group-hover:border-purple-400 group-hover:scale-105 transition-all">
              <span>TD</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-electric-400 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-white text-base tracking-tight block group-hover:text-purple-300 transition-colors">
                  TEJRAM
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono px-1.5 py-0.2 rounded bg-purple-950/60 text-purple-300 border border-purple-800/60">
                  SSGMCE // 8.63
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                CSE &bull; Software Developer
              </span>
            </div>
          </button>

          {/* Center: Desktop Navigation Dock */}
          <nav className="hidden md:flex items-center gap-1 bg-space-900/90 border border-space-750 backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
            {navItems.map((item) => {
              const isActive = item.sectionIds.includes(activeSection);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-dock-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-electric-500/30 border border-purple-400/50 -z-10 shadow-[0_0_16px_rgba(168,85,247,0.4)]"
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Studio Metadata & Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live IST clock */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-space-900/80 border border-space-750 text-[11px] font-mono text-slate-400">
              <Clock className="w-3 h-3 text-purple-400" />
              <span>{istTime || 'IST // Shegaon'}</span>
            </div>

            {/* Command Palette Trigger */}
            <Magnetic strength={0.2}>
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-900/80 border border-space-750 hover:border-purple-500/60 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                title="Search commands, projects, and sections (Ctrl+K or ⌘K)"
                aria-label="Open Command Palette"
              >
                <Search className="w-3.5 h-3.5 text-purple-400" />
                <span>Search</span>
                <kbd className="px-1.5 py-0.2 text-[10px] bg-space-950 border border-slate-700/80 rounded text-purple-300 font-mono">
                  ⌘K
                </kbd>
              </button>
            </Magnetic>

            <Magnetic strength={0.3}>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 via-purple-500 to-electric-500 hover:from-purple-500 hover:to-electric-400 text-white text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </Magnetic>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl bg-space-900 border border-space-750 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-purple-400" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-space-900 border border-space-750 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-space-950/95 border-b border-space-750 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = item.sectionIds.includes(activeSection);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-mono tracking-wide transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-200 font-semibold border border-purple-500/40'
                        : 'text-slate-300 hover:bg-space-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-space-750 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.availabilityStatus}</span>
              </div>

              <ResumeButton variant="outline" size="sm" className="w-full" />

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-electric-500 text-white font-semibold text-sm text-center shadow-lg transition-all"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
