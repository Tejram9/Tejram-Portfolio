import React from 'react';
import { Project } from '../../types';
import { ProjectMockup } from './ProjectMockup';
import { ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative rounded-2xl bg-space-850/90 border border-slate-800/80 hover:border-slate-700 backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]">
      {/* Visual Interactive Preview */}
      <div
        onClick={() => onOpenModal(project)}
        className="cursor-pointer relative overflow-hidden"
        title="Click to view detailed case study"
      >
        <ProjectMockup projectId={project.id} accentColor={project.accentColor} />
        
        {/* Subtle hover overlay hint */}
        <div className="absolute inset-0 bg-cobalt-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-space-950/90 border border-cobalt-400/40 text-xs font-mono text-cobalt-300 flex items-center gap-1.5 shadow-lg">
            <span>View Full Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Header & Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono font-medium text-cobalt-400 tracking-wider uppercase">
              {project.category} {project.team ? `• Team ${project.team}` : ''}
            </span>
            {project.badge && (
              <Badge variant="cobalt" size="sm">
                {project.badge}
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenModal(project)}
            className="text-2xl font-display font-bold text-slate-100 group-hover:text-cobalt-300 transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-cobalt-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-xs text-slate-400 font-mono mt-1">
            {project.tagline}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-300 mt-3 line-clamp-3 leading-relaxed">
            {project.description}
          </p>

          {/* Key Feature highlights preview */}
          <div className="mt-4 space-y-1.5">
            {project.keyFeatures.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5 mt-5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-space-800 text-slate-300 border border-slate-700/50"
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
                icon={<Github className="w-3.5 h-3.5" />}
              >
                Source Code
              </Button>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs font-mono text-slate-400 hover:text-cobalt-300 transition-colors underline-offset-4 hover:underline"
          >
            Case Study &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
