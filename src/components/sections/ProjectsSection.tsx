import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-space-950">
      {/* Background ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cobalt-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            number="04 //"
            eyebrow="Engineered Systems"
            title="Featured"
            highlight="Projects."
            description="Four production-deployed full-stack solutions and hackathon prototypes addressing real-world operational challenges."
            className="mb-0 md:mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-400 bg-space-850 px-4 py-2 rounded-xl border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All 4 Projects Live &amp; Tested</span>
          </div>
        </div>

        {/* 2x2 Grid of Major Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={handleOpenModal}
            />
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
