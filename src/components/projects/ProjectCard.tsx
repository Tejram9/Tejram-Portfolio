import React from 'react';
import { Project } from '../../types';
import { ProjectMockup } from './ProjectMockup';
import { TiltCard } from './TiltCard';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2, GitFork, AlertCircle, Sparkles } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
  featuredWide?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal, featuredWide = false }) => {
  const indexFormatted = `0${index + 1}`;

  return (
    <TiltCard className="h-full flex flex-col">
      <div className={`group relative rounded-3xl glass-card overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.9)] corner-crosshairs ${
        featuredWide ? 'border-purple-500/30 bg-gradient-to-br from-space-900 via-space-850 to-space-950' : ''
      }`}>
        {/* Top Architectural Header Bar */}
        <div className="px-5 py-3 border-b border-space-750 bg-space-900/80 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold">{indexFormatted} //</span>
            <span className="text-slate-200 uppercase tracking-wider font-semibold">{project.category}</span>
            {project.team && (
              <span className="text-electric-400 hidden sm:inline">&bull; Team {project.team}</span>
            )}
          </div>
          {project.badge && (
            <Badge variant={index === 2 ? 'purple' : index === 3 ? 'emerald' : 'cyan'} size="sm">
              {project.badge}
            </Badge>
          )}
        </div>

      {/* Visual Interactive Preview */}
      <div
        tabIndex={0}
        role="button"
        data-cursor="CASE STUDY"
        aria-label={`Open detailed case study for ${project.title}`}
        onClick={() => onOpenModal(project)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenModal(project);
          }
        }}
        className="cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-purple-400 group/preview"
        title="Click to view detailed case study"
      >
        <ProjectMockup projectId={project.id} accentColor={project.accentColor} />
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 bg-purple-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-4 py-2 rounded-full bg-space-950/95 border border-purple-400/60 text-xs font-mono text-purple-200 flex items-center gap-2 shadow-2xl backdrop-blur-md">
            <span>Explore Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Editorial Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Tagline */}
          <div className="mb-2">
            <h3
              tabIndex={0}
              role="button"
              aria-label={`Case study: ${project.title}`}
              onClick={() => onOpenModal(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onOpenModal(project);
                }
              }}
              className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-purple-300 transition-colors cursor-pointer flex items-center justify-between focus:outline-none tracking-tight"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-purple-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>

            <p className="text-xs font-mono text-purple-300/90 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Mini Dossier */}
          <div className="mt-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-space-900/90 border border-rose-950/40 text-xs">
              <div className="flex items-center gap-1.5 text-rose-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-space-900/90 border border-purple-950/40 text-xs">
              <div className="flex items-center gap-1.5 text-purple-300 font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                <Sparkles className="w-3 h-3 shrink-0 text-electric-400" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline 4-Stage Micro Stepper */}
          {project.architecturePipeline && (
            <div className="mt-4 pt-3 border-t border-space-750">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold">
                  <GitFork className="w-3 h-3 text-electric-400" /> Architecture Pipeline
                </span>
                <span>4 Stages</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[10px]">
                {project.architecturePipeline.map((step) => (
                  <div
                    key={step.step}
                    className="p-2 rounded-lg bg-space-900 border border-space-750 truncate"
                  >
                    <span className="text-purple-400 font-bold block text-[9px]">
                      {step.step} // {step.tech}
                    </span>
                    <span className="text-slate-200 truncate block text-[10px] mt-0.5">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Feature highlights preview */}
          <div className="mt-4 space-y-1.5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
              Core Capabilities
            </span>
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-space-750">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-space-900 text-slate-300 border border-space-750"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-space-750 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.liveDemoUrl && (
              <Button
                variant="primary"
                size="sm"
                href={project.liveDemoUrl}
                external
                magnetic
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                href={project.githubUrl}
                external
                magnetic
                icon={<Github className="w-3.5 h-3.5" />}
              >
                Code
              </Button>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1 group/btn font-semibold"
          >
            <span>Read Case Study</span>
            <span className="group-hover/btn:translate-x-0.5 transition-transform">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
    </TiltCard>
  );
};
