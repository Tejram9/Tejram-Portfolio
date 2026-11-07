import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Search } from 'lucide-react';
import { scrollToSection } from '../../lib/utils';
import { profileData } from '../../data/profile';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

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
    { id: 'hero', label: 'Home', sectionIds: ['hero'] },
    { id: 'about', label: 'About', sectionIds: ['about', 'education'] },
    { id: 'skills', label: 'Skills', sectionIds: ['skills', 'learning'] },
    { id: 'projects', label: 'Projects', sectionIds: ['projects'] },
    { id: 'journey', label: 'Journey', sectionIds: ['journey', 'achievements'] },
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
        className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-cobalt-600 via-cyber-cyan to-cobalt-400 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-space-950/85 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand / Monogram */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-cobalt-500 rounded-lg"
            aria-label="Tejram Dudhapachare - Back to top"
          >
            {/* Tactical Monogram Node */}
            <div className="relative w-9 h-9 rounded-xl bg-space-850 border border-cobalt-500/40 flex items-center justify-center font-mono font-bold text-cobalt-300 text-sm shadow-[0_0_15px_rgba(37,99,235,0.25)] group-hover:border-cobalt-400 group-hover:scale-105 transition-all">
              <span>TD</span>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
            </div>

            <div>
              <span className="font-display font-bold text-slate-100 text-sm tracking-tight block group-hover:text-cobalt-300 transition-colors">
                Tejram Dudhapachare
              </span>
              <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
                2nd Year CSE @ SSGMCE
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-space-850/60 border border-slate-800/80 backdrop-blur-md px-3 py-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = item.sectionIds.includes(activeSection);
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-cobalt-400 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-cobalt-600/30 border border-cobalt-400/40 -z-10 shadow-[0_0_12px_rgba(37,99,235,0.3)]" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA & Command Palette Trigger */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Command Palette Pill */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-space-850/90 border border-slate-700/80 hover:border-cobalt-500/60 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cobalt-500"
              title="Search commands, projects, and sections (Ctrl+K or ⌘K)"
              aria-label="Open Command Palette"
            >
              <Search className="w-3.5 h-3.5 text-cobalt-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.2 text-[10px] bg-space-900 border border-slate-700 rounded text-slate-400">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cobalt-600 to-cobalt-500 text-white text-xs font-medium shadow-[0_0_16px_rgba(37,99,235,0.35)] hover:shadow-[0_0_22px_rgba(37,99,235,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-cobalt-400"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl bg-space-850 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cobalt-500"
              aria-label="Search"
            >
              <Search className="w-4 h-4 text-cobalt-400" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-space-850 border border-slate-800 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cobalt-500"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-space-950/95 border-b border-slate-800/90 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = item.sectionIds.includes(activeSection);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-mono tracking-wide transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-cobalt-600/20 text-cobalt-300 font-semibold border border-cobalt-500/30'
                        : 'text-slate-300 hover:bg-space-900'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-cobalt-400" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{profileData.availabilityStatus}</span>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 rounded-xl bg-cobalt-600 hover:bg-cobalt-500 text-white font-medium text-sm text-center shadow-lg transition-all"
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
