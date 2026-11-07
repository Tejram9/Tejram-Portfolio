import React, { useState } from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Code2,
  AlertCircle,
  Sparkles,
  GitFork,
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
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');

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

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          {[
            { id: 'overview', label: 'Problem & Solution' },
            { id: 'architecture', label: 'System Architecture Pipeline' },
            { id: 'features', label: 'Core Features & Specs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === tab.id
                  ? 'bg-cobalt-600 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-space-850'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview (Problem & Solution) */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
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
                <span>My Personal Engineering Contribution</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Pipeline */}
        {activeTab === 'architecture' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cobalt-400 font-semibold uppercase">
                <GitFork className="w-4 h-4" /> End-to-End System Flow
              </span>
              <span>4-Stage Pipeline</span>
            </div>

            {/* Visual Architecture Steps */}
            {project.architecturePipeline && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.architecturePipeline.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-space-850 border border-slate-800 hover:border-cobalt-500/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-cobalt-950 text-cobalt-300 border border-cobalt-800">
                          STAGE {step.step}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 bg-space-900 px-2 py-0.5 rounded">
                          {step.tech}
                        </span>
                      </div>
                      <h4 className="text-xs md:text-sm font-semibold text-slate-100">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Architectural Highlights Bullet Points */}
            <div className="p-4 rounded-xl bg-space-850 border border-slate-800 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                Key Architectural Highlights
              </span>
              {project.architectureHighlights.map((arch, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 font-mono"
                >
                  <span className="text-cobalt-400 font-bold shrink-0">{`[${idx + 1}]`}</span>
                  <span className="font-sans leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Core Features & Specs */}
        {activeTab === 'features' && (
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyber-cyan" />
              <span>Full Implemented Features</span>
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

            {/* Technologies Used */}
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Verified Technology Stack
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
          </div>
        )}

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
