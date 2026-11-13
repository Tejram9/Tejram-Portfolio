import React from 'react';
import { Project } from '../../types';
import { ProjectMockup } from './ProjectMockup';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  layout?: 'featured' | 'standard' | 'wide';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onOpenModal,
  layout = 'standard',
}) => {
  return (
    <article
      className={`group relative flex flex-col justify-between border border-white/10 bg-[#121410] transition-all duration-300 hover:border-lime-acid/60 ${
        layout === 'featured' || layout === 'wide' ? 'lg:col-span-2' : ''
      }`}
      style={{
        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
      }}
    >
      {/* Top Editorial Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#1A1C18]">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-lime-acid tracking-tight">
            {project.num}
          </span>
          <span className="font-mono text-xs text-softgrey uppercase tracking-widest">
            // {project.category || 'SOFTWARE PRODUCT'}
          </span>
        </div>

        {project.badge && (
          <span className="font-mono text-[10px] tracking-wider uppercase bg-void text-lime-acid border border-lime-acid/40 px-2.5 py-1">
            {project.badge}
          </span>
        )}
      </div>

      {/* Interface Mockup Preview (Clickable to open case study) */}
      <div
        tabIndex={0}
        role="button"
        aria-label={`Explore case study for ${project.title}`}
        onClick={() => onOpenModal(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(project);
          }
        }}
        className="cursor-pointer relative overflow-hidden focus:outline-none focus:ring-1 focus:ring-lime-acid group/mockup"
      >
        <ProjectMockup projectId={project.id} accentColor={project.accentColor} />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-void/80 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="font-mono text-xs uppercase tracking-widest text-void bg-lime-acid px-4 py-2 flex items-center gap-2 font-semibold">
            <span>READ CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Editorial Content Body */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3
              onClick={() => onOpenModal(project)}
              className="font-display text-3xl md:text-4xl text-white tracking-tight cursor-pointer hover:text-lime-acid transition-colors flex items-center gap-2"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-softgrey group-hover:text-lime-acid group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </h3>
          </div>

          <p className="font-mono text-xs text-lime-acid/90 mb-3 tracking-wide">
            {project.tagline}
          </p>

          <p className="font-sans text-sm text-smoke/90 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {(project.technologies || project.stack).map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] tracking-wider uppercase px-2.5 py-1 bg-void text-softgrey border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest bg-lime-acid text-void hover:bg-lime-dim px-4 py-2 font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>LIVE DEMO</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest border border-white/20 text-white hover:border-white px-4 py-2 transition-colors flex items-center gap-1.5"
              >
                <span>GITHUB</span>
                <Github className="w-3.5 h-3.5" />
              </a>
            )}

            {project.backendUrl && (
              <a
                href={project.backendUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest border border-white/20 text-softgrey hover:text-white px-3 py-2 transition-colors flex items-center gap-1"
              >
                <span>API</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="font-mono text-xs uppercase tracking-widest text-softgrey hover:text-lime-acid transition-colors flex items-center gap-1 py-1"
          >
            <span>DETAILS</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
};
