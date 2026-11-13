import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { ScrollReveal } from '../ui/ScrollReveal';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenProjectEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectId: string }>;
      if (customEvent.detail?.projectId) {
        const found = projectsData.find((p) => p.id === customEvent.detail.projectId);
        if (found) {
          setSelectedProject(found);
          setIsModalOpen(true);
        }
      }
    };

    window.addEventListener('open-project-modal', handleOpenProjectEvent);
    return () => window.removeEventListener('open-project-modal', handleOpenProjectEvent);
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-space-950 hairline-border-t">
      {/* Background Volumetric Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-electric-500/08 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            number="04 //"
            eyebrow="Engineered Systems & Products"
            title="Featured"
            highlight="Projects."
            description="Four production-deployed full-stack solutions and hackathon prototypes addressing real-world operational challenges."
            coordinateTag="PORTFOLIO // CASE_STUDIES"
            className="mb-0 md:mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-300 bg-space-900 px-4 py-2 rounded-xl border border-space-750 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All 4 Projects Live &amp; Tested</span>
          </div>
        </div>

        {/* 2x2 Distinctive Editorial Grid of Major Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projectsData.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              direction={idx % 2 === 0 ? 'right' : 'left'}
              delay={idx * 0.1}
              className="h-full flex flex-col"
            >
              <ProjectCard
                project={project}
                index={idx}
                onOpenModal={handleOpenModal}
                featuredWide={idx === 0 || idx === 2}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Project Case Study Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};
