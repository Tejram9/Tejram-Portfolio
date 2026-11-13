import { Suspense, lazy, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { PageLoader } from './components/ui/PageLoader';
import { HeroSection } from './components/sections/HeroSection';

// Lazy-load below-fold sections
const AboutSection = lazy(() => import('./components/sections/AboutSection').then(m => ({ default: m.AboutSection })));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection').then(m => ({ default: m.ProjectsSection })));
const JourneySection = lazy(() => import('./components/sections/JourneySection').then(m => ({ default: m.JourneySection })));
const AchievementsSection = lazy(() => import('./components/sections/AchievementsSection').then(m => ({ default: m.AchievementsSection })));
const ContactSection = lazy(() => import('./components/sections/ContactSection').then(m => ({ default: m.ContactSection })));

const SectionFallback = () => (
  <div className="min-h-[40vh] flex items-center justify-center">
    <div className="w-1 h-8 bg-lime-acid animate-pulse" />
  </div>
);

export default function App() {
  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-void text-white font-sans overflow-x-hidden">
      <CustomCursor />
      <PageLoader />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AchievementsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <JourneySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
