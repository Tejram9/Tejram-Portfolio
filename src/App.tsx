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
import { useScrollSpy } from './hooks/useScrollSpy';

export function App() {
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

  return (
    <div className="min-h-screen bg-space-950 text-slate-100 flex flex-col selection:bg-cobalt-600/30 selection:text-white relative">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main className="flex-1">
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
    </div>
  );
}

export default App;
