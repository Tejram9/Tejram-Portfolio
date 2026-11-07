import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Code2,
  FolderGit2,
  Mail,
  Github,
  Compass,
  GraduationCap,
  Layers,
  Sparkles,
  Trophy,
  Copy,
  Check,
  X,
} from 'lucide-react';
import { scrollToSection, copyToClipboard } from '../../lib/utils';
import { profileData } from '../../data/profile';
import { projectsData } from '../../data/projects';
import confetti from 'canvas-confetti';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

interface CommandItem {
  id: string;
  category: 'Navigation' | 'Projects' | 'Actions';
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const items: CommandItem[] = useMemo(() => {
    const navItems: CommandItem[] = [
      {
        id: 'nav-hero',
        category: 'Navigation',
        title: 'Home // Top',
        subtitle: 'Hero introduction & 3D kinetic core',
        icon: <Compass className="w-4 h-4 text-cobalt-400" />,
        action: () => {
          scrollToSection('hero');
          onClose();
        },
      },
      {
        id: 'nav-about',
        category: 'Navigation',
        title: 'Beyond the Code // Philosophy',
        subtitle: 'Student identity & strategic systems thinking',
        icon: <Sparkles className="w-4 h-4 text-cobalt-400" />,
        action: () => {
          scrollToSection('about');
          onClose();
        },
      },
      {
        id: 'nav-education',
        category: 'Navigation',
        title: 'Education // SSGMCE Profile',
        subtitle: 'SGBAU Computer Science Engineering (8.63 CGPA)',
        icon: <GraduationCap className="w-4 h-4 text-cyber-cyan" />,
        action: () => {
          scrollToSection('education');
          onClose();
        },
      },
      {
        id: 'nav-skills',
        category: 'Navigation',
        title: 'Tech Stack & Skills',
        subtitle: 'Java, Spring Boot, React, TypeScript, Databases',
        icon: <Layers className="w-4 h-4 text-indigo-400" />,
        action: () => {
          scrollToSection('skills');
          onClose();
        },
      },
      {
        id: 'nav-projects',
        category: 'Navigation',
        title: 'Featured Projects',
        subtitle: 'FocusPulse, Suvidha4C, CivicServe, Smart Krishi Sahayak',
        icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
        action: () => {
          scrollToSection('projects');
          onClose();
        },
      },
      {
        id: 'nav-journey',
        category: 'Navigation',
        title: 'Development Journey',
        subtitle: 'Milestones timeline from SSGMCE to present',
        icon: <Code2 className="w-4 h-4 text-amber-400" />,
        action: () => {
          scrollToSection('journey');
          onClose();
        },
      },
      {
        id: 'nav-achievements',
        category: 'Navigation',
        title: 'Achievements & Community',
        subtitle: 'Hackathon 4th place & Navonmesh expo',
        icon: <Trophy className="w-4 h-4 text-cyber-cyan" />,
        action: () => {
          scrollToSection('achievements');
          onClose();
        },
      },
      {
        id: 'nav-contact',
        category: 'Navigation',
        title: 'Contact & Collaboration',
        subtitle: 'Direct email dispatch and message form',
        icon: <Mail className="w-4 h-4 text-rose-400" />,
        action: () => {
          scrollToSection('contact');
          onClose();
        },
      },
    ];

    const projectItems: CommandItem[] = projectsData.map((p) => ({
      id: `proj-${p.id}`,
      category: 'Projects',
      title: p.title,
      subtitle: `${p.tagline} • ${p.technologies.slice(0, 3).join(', ')}`,
      icon: <FolderGit2 className="w-4 h-4 text-cobalt-400" />,
      action: () => {
        scrollToSection('projects');
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent('open-project-modal', { detail: { projectId: p.id } })
          );
        }, 250);
        onClose();
      },
    }));

    const actionItems: CommandItem[] = [
      {
        id: 'act-copy-email',
        category: 'Actions',
        title: 'Copy Email Address',
        subtitle: profileData.socialLinks.email,
        icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />,
        action: async () => {
          await copyToClipboard(profileData.socialLinks.email);
          setCopied(true);
          confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
          setTimeout(() => setCopied(false), 2000);
        },
        shortcut: '↵ Enter',
      },
      {
        id: 'act-open-github',
        category: 'Actions',
        title: 'Open GitHub Profile',
        subtitle: 'github.com/Tejram9',
        icon: <Github className="w-4 h-4 text-slate-300" />,
        action: () => {
          window.open(profileData.socialLinks.github, '_blank', 'noopener,noreferrer');
          onClose();
        },
        shortcut: '↗ External',
      },
    ];

    return [...navItems, ...projectItems, ...actionItems];
  }, [copied, onClose, onSelectProject]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower)
    );
  }, [items, query]);

  // Keyboard navigation inside command palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-space-950/80 backdrop-blur-md"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative w-full max-w-xl rounded-2xl bg-space-900 border border-slate-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-space-850/70">
              <Search className="w-5 h-5 text-cobalt-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, or section..."
                className="w-full bg-transparent text-slate-100 placeholder:text-slate-500 text-sm font-sans outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-space-800 border border-slate-700 rounded">
                ESC
              </kbd>
            </div>

            {/* List of Results */}
            <div className="max-h-80 overflow-y-auto custom-scrollbar p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-slate-500">
                  No matching commands or projects found for &quot;{query}&quot;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-cobalt-600/25 border border-cobalt-500/40 text-slate-100'
                          : 'hover:bg-space-800/60 text-slate-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected
                              ? 'bg-cobalt-950 text-cobalt-300 border border-cobalt-800'
                              : 'bg-space-850 text-slate-400 border border-slate-800'
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium truncate flex items-center gap-2">
                            <span>{item.title}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-space-800 text-slate-400">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 truncate mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      {item.shortcut && (
                        <span className="text-[11px] font-mono text-slate-500 shrink-0 ml-2">
                          {item.shortcut}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer with Keyboard Hints */}
            <div className="px-4 py-2.5 bg-space-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 bg-space-850 border border-slate-700 rounded text-[10px]">
                    &uarr;
                  </kbd>
                  <kbd className="px-1 py-0.5 bg-space-850 border border-slate-700 rounded text-[10px]">
                    &darr;
                  </kbd>{' '}
                  Navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-space-850 border border-slate-700 rounded text-[10px]">
                    &crarr;
                  </kbd>{' '}
                  Select
                </span>
              </div>
              <span className="text-cobalt-400 font-semibold">Tejram Dudhapachare // SSGMCE</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
