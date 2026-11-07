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
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onOpenModal }) => {
  const indexFormatted = `0${index + 1}`;

  return (
    <TiltCard className="h-full flex flex-col">
      <div className="group relative rounded-2xl glass-card overflow-hidden flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] corner-crosshairs">
        {/* Top Architectural Header Bar */}
        <div className="px-5 py-3 border-b border-slate-800/80 bg-space-900/60 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">{indexFormatted} //</span>
            <span className="text-slate-300 uppercase tracking-wider">{project.category}</span>
            {project.team && (
              <span className="text-slate-500 hidden sm:inline">• Team {project.team}</span>
            )}
          </div>
          {project.badge && (
            <Badge variant={index === 2 ? 'violet' : index === 3 ? 'emerald' : 'cobalt'} size="sm">
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
        className="cursor-pointer relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-400 group/preview"
        title="Click to view detailed case study"
      >
        <ProjectMockup projectId={project.id} accentColor={project.accentColor} />
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-3.5 py-1.5 rounded-full bg-space-950/95 border border-amber-400/50 text-xs font-mono text-amber-300 flex items-center gap-2 shadow-2xl backdrop-blur-md">
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
              className="text-2xl sm:text-3xl font-display font-extrabold text-slate-100 group-hover:text-amber-300 transition-colors cursor-pointer flex items-center justify-between focus:outline-none tracking-tight"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </h3>

            <p className="text-xs font-mono text-amber-400/90 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Problem & Solution Mini Dossier */}
          <div className="mt-4 space-y-2.5">
            <div className="p-3 rounded-xl bg-space-900/80 border border-rose-950/40 text-xs">
              <div className="flex items-center gap-1.5 text-rose-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                <AlertCircle className="w-3 h-3 shrink-0" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-space-900/80 border border-emerald-950/40 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px] uppercase font-bold tracking-wider mb-1">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline 4-Stage Micro Stepper */}
          {project.architecturePipeline && (
            <div className="mt-4 pt-3 border-t border-slate-800/60">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                  <GitFork className="w-3 h-3" /> Architecture Pipeline
                </span>
                <span>4 Stages</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 font-mono text-[10px]">
                {project.architecturePipeline.map((step) => (
                  <div
                    key={step.step}
                    className="p-2 rounded-lg bg-space-900 border border-slate-800/80 truncate"
                  >
                    <span className="text-amber-400 font-bold block text-[9px]">
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
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-800/80">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-space-900 text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
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
            className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 group/btn font-semibold"
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
