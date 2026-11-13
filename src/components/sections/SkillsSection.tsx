import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';
import { skillsData, skillsCategories, SkillDetail } from '../../data/skills';
import {
  Coffee,
  Terminal,
  Code2,
  FileCode2,
  Cpu,
  Layers,
  Network,
  Server,
  Workflow,
  FlaskConical,
  Atom,
  Palette,
  Layout,
  Sparkles,
  Database,
  ServerCog,
  HardDrive,
  Boxes,
  GitPullRequest,
  FileSpreadsheet,
  BarChart3,
  BrainCircuit,
  Cloud,
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillDetail | null>(null);

  // Icon mapping
  const iconMap: Record<string, React.ReactNode> = {
    Coffee: <Coffee className="w-5 h-5" />,
    Terminal: <Terminal className="w-5 h-5" />,
    FileCode2: <FileCode2 className="w-5 h-5" />,
    Code2: <Code2 className="w-5 h-5" />,
    Cpu: <Cpu className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
    Network: <Network className="w-5 h-5" />,
    Server: <Server className="w-5 h-5" />,
    Workflow: <Workflow className="w-5 h-5" />,
    FlaskConical: <FlaskConical className="w-5 h-5" />,
    Atom: <Atom className="w-5 h-5" />,
    Palette: <Palette className="w-5 h-5" />,
    Layout: <Layout className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    ServerCog: <ServerCog className="w-5 h-5" />,
    HardDrive: <HardDrive className="w-5 h-5" />,
    Boxes: <Boxes className="w-5 h-5" />,
    GitPullRequest: <GitPullRequest className="w-5 h-5" />,
    FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
    BarChart3: <BarChart3 className="w-5 h-5" />,
    BrainCircuit: <BrainCircuit className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
  };

  const filteredSkills =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-space-950 hairline-border-t">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[350px] bg-purple-600/08 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-electric-500/06 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03 //"
          eyebrow="Technical Stack & Competencies"
          title="Skills &"
          highlight="Technologies."
          description="A curated toolkit organized by practical application. Differentiating project-tested technologies from emerging areas of continuous learning."
          coordinateTag="STACK // 2026_TOOLKIT"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-space-750">
          {skillsCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedSkill(null);
                }}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-400 ${
                  isActive
                    ? 'text-white font-bold'
                    : 'bg-space-900 hover:bg-space-850 text-slate-400 hover:text-slate-200 border border-space-750'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-filter-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 to-electric-500 shadow-[0_0_20px_rgba(168,85,247,0.45)] -z-10"
                  />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <ScrollReveal direction="up" delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={skill.name}
                tabIndex={0}
                role="button"
                aria-pressed={isSelected}
                aria-label={`Inspect ${skill.name} technical specification`}
                onClick={() => setSelectedSkill(isSelected ? null : skill)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedSkill(isSelected ? null : skill);
                  }
                }}
                className={`p-5 rounded-2xl transition-all duration-200 cursor-pointer border flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-purple-400 ${
                  isSelected
                    ? 'bg-space-850 border-purple-500 shadow-[0_0_24px_rgba(168,85,247,0.3)]'
                    : 'glass-card hover:bg-space-850/80 hover:border-purple-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="p-2.5 rounded-xl bg-space-900 border border-space-750 text-purple-400 transition-colors">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5 text-purple-400" />}
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-900 border border-space-750 text-slate-300">
                      {skill.status}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-slate-100">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Used In Project Chips */}
                {skill.usedInProjects && skill.usedInProjects.length > 0 && (
                  <div className="pt-3 mt-4 border-t border-space-750 flex flex-wrap gap-1">
                    {skill.usedInProjects.map((proj) => (
                      <span
                        key={proj}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-900 text-purple-300 border border-purple-900/40"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Selected Skill Detail Banner */}
        {selectedSkill && (
          <div className="mt-8 p-6 rounded-2xl bg-space-900 border border-purple-500/50 shadow-2xl animate-in fade-in duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-purple-400 font-semibold">
                  Selected Specification
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-mono text-slate-200 font-bold">{selectedSkill.name}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
                {selectedSkill.description}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-mono px-3 py-1.5 rounded-lg bg-purple-950/80 border border-purple-800 text-purple-300 font-semibold">
                {selectedSkill.status}
              </span>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs font-mono text-slate-400 hover:text-white px-2 py-1"
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
