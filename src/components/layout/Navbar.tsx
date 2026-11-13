import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#hero', id: 'hero' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = links.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(links[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-void/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNav('hero');
            }}
            className="font-display text-2xl tracking-wider text-white hover:text-lime-acid transition-colors duration-200"
          >
            TEJRAM<span className="text-lime-acid">.</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNav(id)}
                  className={`relative font-mono text-xs tracking-widest uppercase transition-all duration-200 py-1 ${
                    isActive ? 'text-lime-acid font-semibold' : 'text-softgrey hover:text-white'
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime-acid"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? 'rotate-45 translate-y-2 bg-lime-acid' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-2 bg-lime-acid' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map(({ label, id }) => {
                const isActive = activeSection === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNav(id)}
                    className={`font-display text-4xl uppercase tracking-wider transition-colors duration-200 ${
                      isActive ? 'text-lime-acid' : 'text-white hover:text-lime-acid'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
