import React from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Layers,
  Code2,
  AlertCircle,
  Sparkles,
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={`${project.category} • Case Study`}
      maxWidth="3xl"
    >
      <div className="space-y-6 text-slate-200">
        {/* Banner with Badge & Live Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-space-850 border border-slate-800">
          <div>
            <p className="text-sm font-mono text-cobalt-400 font-semibold">
              {project.tagline}
            </p>
            {project.team && (
              <p className="text-xs text-slate-400 mt-0.5">
                Collaborative Project • Team {project.team}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {project.badge && (
              <Badge variant="cobalt" size="sm">
                {project.badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* The Problem */}
          <div className="p-4 rounded-xl bg-space-850/60 border border-rose-900/30">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>The Problem Statement</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* The Solution */}
          <div className="p-4 rounded-xl bg-space-850/60 border border-emerald-900/30">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* My Specific Engineering Contribution */}
        <div className="p-4 rounded-xl bg-space-850/90 border border-cobalt-900/40">
          <div className="flex items-center gap-2 text-cobalt-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
            <Code2 className="w-4 h-4" />
            <span>My Engineering Contribution</span>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.myContribution}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
            <span>Implemented Core Features</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-2.5 rounded-lg bg-space-850 border border-slate-800/80 text-xs text-slate-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Engineering Highlights */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cobalt-400" />
            <span>System Architecture Details</span>
          </h4>
          <div className="space-y-2">
            {project.architectureHighlights.map((arch, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-lg bg-space-850 border border-slate-800 text-xs text-slate-300 font-mono"
              >
                <span className="text-cobalt-500 font-bold shrink-0">{`0${idx + 1}.`}</span>
                <span className="font-sans leading-relaxed">{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-md bg-space-800 text-slate-200 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            {project.liveDemoUrl && (
              <Button
                variant="primary"
                size="md"
                href={project.liveDemoUrl}
                external
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Open Live Application
              </Button>
            )}

            {project.githubUrl && (
              <Button
                variant="secondary"
                size="md"
                href={project.githubUrl}
                external
                icon={<Github className="w-4 h-4" />}
              >
                View Repository
              </Button>
            )}

            {project.backendUrl && (
              <Button
                variant="outline"
                size="md"
                href={project.backendUrl}
                external
                icon={<Server className="w-4 h-4" />}
              >
                Backend API
              </Button>
            )}
          </div>

          <Button variant="ghost" size="md" onClick={onClose}>
            Close Case Study
          </Button>
        </div>
      </div>
    </Modal>
  );
};
