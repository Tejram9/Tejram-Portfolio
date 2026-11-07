import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { JourneySection } from './components/sections/JourneySection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { LearningSection } from './components/sections/LearningSection';
import { ContactSection } from './components/sections/ContactSection';
import { CommandPalette } from './components/ui/CommandPalette';
import { CustomCursor } from './components/ui/CustomCursor';
import { AmbientBackground } from './components/ui/AmbientBackground';
import { PageLoader } from './components/ui/PageLoader';
import { useScrollSpy } from './hooks/useScrollSpy';

export function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const sectionIds = [
    'hero',
    'about',
    'education',
    'skills',
    'projects',
    'journey',
    'achievements',
    'learning',
    'contact',
  ];

  const activeSection = useScrollSpy(sectionIds, 120);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex flex-col selection:bg-cobalt-600/30 selection:text-white relative">
      {/* Telemetry Page Mount / Loading Indicator */}
      <PageLoader />

      {/* Subtle Hardware-Accelerated Ambient Cursor Spotlight */}
      <AmbientBackground />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Navbar with Scroll Progress & Command Palette trigger */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Main Content Flow with Accessible Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <AchievementsSection />
        <LearningSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Keyboard-Accessible Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
