import React, { useState } from 'react';
import { ProjectCard } from '../projects/ProjectCard';
import { ProjectDetailModal } from '../projects/ProjectDetailModal';
import { projectsData, Project } from '../../data/projects';

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
    <section id="work" className="py-24 md:py-32 relative overflow-hidden bg-void border-t border-white/5">
      {/* Anchor alias for #projects */}
      <div id="projects" className="absolute -top-24 pointer-events-none" />

      {/* Background ghost watermark */}
      <span
        aria-hidden
        className="absolute top-12 right-0 font-display text-[14vw] text-white/[0.02] select-none pointer-events-none leading-none tracking-tight"
      >
        WORK
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-softgrey tracking-widest uppercase mb-4">
              003 — SELECTED WORK
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-[0.92]">
              SELECTED WORK.<br />
              <span className="text-lime-acid">REAL IDEAS.</span> BUILT INTO PRODUCTS.
            </h2>
          </div>

          <div className="max-w-xs">
            <div className="w-12 h-0.5 bg-lime-acid mb-4" />
            <p className="font-sans text-xs sm:text-sm text-softgrey leading-relaxed">
              Engineered software products built from problem definition to deployment. No fictional mockups.
            </p>
          </div>
        </div>

        {/* Asymmetric Project Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Project 01: FocusPulse (Featured Wide) */}
          <ProjectCard
            project={projectsData[0]}
            onOpenModal={handleOpenModal}
            layout="featured"
          />

          {/* Project 02: Suvidha4C (Standard Col 1) */}
          <ProjectCard
            project={projectsData[1]}
            onOpenModal={handleOpenModal}
            layout="standard"
          />

          {/* Project 03: CivicServe (Standard Col 2) */}
          <ProjectCard
            project={projectsData[2]}
            onOpenModal={handleOpenModal}
            layout="standard"
          />

          {/* Project 04: Smart Krishi Sahayak (Featured Wide) */}
          <ProjectCard
            project={projectsData[3]}
            onOpenModal={handleOpenModal}
            layout="wide"
          />
        </div>

        {/* Case Study Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
};
