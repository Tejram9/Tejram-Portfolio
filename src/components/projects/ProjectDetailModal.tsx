import React, { useState } from 'react';
import { Project } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ProjectMockup } from './ProjectMockup';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Server,
  Code2,
  AlertCircle,
  Sparkles,
  GitFork,
  Wrench,
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
      subtitle={`${project.category} • Product Case Study`}
      maxWidth="3xl"
    >
      <div className="space-y-6 text-slate-200">
        {/* Large Custom Visual Cover Preview */}
        <div className="rounded-2xl overflow-hidden border border-space-750 bg-space-950 shadow-inner">
          <ProjectMockup projectId={project.id} accentColor={project.accentColor} />
        </div>

        {/* Header Metadata Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-space-850/90 border border-space-750">
          <div>
            <h4 className="text-sm font-mono text-purple-300 font-bold">
              {project.tagline}
            </h4>
            {project.team && (
              <p className="text-xs text-electric-400 mt-0.5 font-mono">
                Collaborative Initiative &bull; Team {project.team}
              </p>
            )}
          </div>
          <div className="flex items-center gap-2">
            {project.badge && (
              <Badge variant="purple" size="sm">
                {project.badge}
              </Badge>
            )}
          </div>
        </div>

        {/* Case Study Section Tabs */}
        <div className="flex items-center gap-2 border-b border-space-750 pb-2">
          {[
            { id: 'overview', label: '1. Problem & Solution' },
            { id: 'architecture', label: '2. Architecture & Challenges' },
            { id: 'features', label: '3. Features & Tech Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-electric-500 text-white font-semibold shadow-md'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-space-850'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Problem, Solution & Personal Contribution */}
        {activeTab === 'overview' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* The Problem Statement */}
              <div className="p-4 sm:p-5 rounded-xl bg-space-850/70 border border-rose-900/30">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>The Problem Addressed</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.problemStatement}
                </p>
              </div>

              {/* Architectural Solution */}
              <div className="p-4 sm:p-5 rounded-xl bg-space-850/70 border border-purple-900/30">
                <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
                  <Sparkles className="w-4 h-4 shrink-0 text-electric-400" />
                  <span>The Engineering Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Engineering Contribution */}
            <div className="p-4 sm:p-5 rounded-xl bg-space-850 border border-purple-900/40">
              <div className="flex items-center gap-2 text-purple-300 font-mono text-xs uppercase tracking-wider mb-2 font-semibold">
                <Code2 className="w-4 h-4 shrink-0 text-electric-400" />
                <span>My Personal Engineering Contribution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {project.myContribution}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture Pipeline & Genuine Challenges */}
        {activeTab === 'architecture' && (
          <div className="space-y-5">
            {/* 4-Stage Architecture Pipeline */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1.5 text-purple-300 font-semibold uppercase">
                  <GitFork className="w-4 h-4 text-electric-400" /> End-to-End System Pipeline
                </span>
                <span>Data Flow Architecture</span>
              </div>

              {project.architecturePipeline && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecturePipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-space-850 border border-space-750 hover:border-purple-500/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                            STAGE {step.step}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 bg-space-900 px-2 py-0.5 rounded">
                            {step.tech}
                          </span>
                        </div>
                        <h5 className="text-xs sm:text-sm font-semibold text-slate-100">
                          {step.title}
                        </h5>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Genuine Technical Challenges Encountered & Solved */}
            {project.challengesEncountered && project.challengesEncountered.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-space-850/90 border border-accent-orange/30 space-y-3">
                <div className="flex items-center gap-2 text-accent-orange font-mono text-xs uppercase tracking-wider font-semibold">
                  <Wrench className="w-4 h-4 shrink-0" />
                  <span>Technical Challenges Encountered &amp; Resolved</span>
                </div>
                <div className="space-y-2.5">
                  {project.challengesEncountered.map((ch, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                      <span className="text-accent-orange font-mono font-bold shrink-0">{`#${idx + 1}`}</span>
                      <span>{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            <div className="p-4 rounded-xl bg-space-850 border border-space-750 space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2 font-semibold">
                System Implementation Highlights
              </span>
              {project.architectureHighlights.map((arch, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 font-mono"
                >
                  <span className="text-purple-400 font-bold shrink-0">{`[${idx + 1}]`}</span>
                  <span className="font-sans leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Key Features & Verified Technology Stack */}
        {activeTab === 'features' && (
          <div className="space-y-5">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Implemented Core Features</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-space-850 border border-space-750 text-xs text-slate-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Technology Stack */}
            <div className="pt-4 border-t border-space-750">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                Technology Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3.5 py-1.5 rounded-md bg-space-800 text-slate-200 border border-space-750"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Actions: Verified Demo & Repository Triggers */}
        <div className="pt-4 border-t border-space-750 flex flex-wrap items-center justify-between gap-3">
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
