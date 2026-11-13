import React, { useState } from 'react';
import { skillsData, currentlyLearningData, SkillCategory } from '../../data/skills';
import { projectsData } from '../../data/projects';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'PROGRAMMING', 'FRONTEND', 'BACKEND', 'DATABASE', 'TOOLS'];

  const filteredCategories: SkillCategory[] =
    activeCategory === 'ALL'
      ? skillsData
      : skillsData.filter((cat) => cat.label.toUpperCase() === activeCategory);

  const getProjectTitle = (id: string) => {
    const p = projectsData.find((proj) => proj.id === id);
    return p ? p.title : id;
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-void border-t border-white/5">
      {/* Background ghost label */}
      <span
        aria-hidden
        className="absolute bottom-8 left-0 font-display text-[15vw] text-white/[0.02] select-none pointer-events-none leading-none tracking-tight"
      >
        TOOLS
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-softgrey tracking-widest uppercase mb-4">
              004 — TECHNICAL STACK
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-[0.92]">
              TOOLS OF <span className="text-lime-acid">THE TRADE.</span>
            </h2>
          </div>

          <div className="max-w-sm">
            <div className="w-12 h-0.5 bg-lime-acid mb-4" />
            <p className="font-sans text-xs sm:text-sm text-softgrey leading-relaxed">
              Every technology listed here has been applied directly in practical software builds, backend services, or algorithmic coursework. No arbitrary percentage bars.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 transition-all duration-200 border ${
                  isActive
                    ? 'bg-lime-acid text-void border-lime-acid font-bold'
                    : 'text-softgrey border-white/10 hover:border-white/40 hover:text-white bg-[#121410]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12 mb-16">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.label} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-lime-acid uppercase tracking-widest font-semibold">
                  // {catGroup.label}
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-5 border border-white/10 bg-[#121410] hover:border-lime-acid/60 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="font-sans font-bold text-lg text-white group-hover:text-lime-acid transition-colors">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 bg-void text-softgrey border border-white/10">
                          {skill.projectIds && skill.projectIds.length > 0 ? 'PROJECT-TESTED' : 'CORE'}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="font-sans text-xs text-softgrey leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      )}
                    </div>

                    {/* Connected projects if applicable */}
                    {skill.projectIds && skill.projectIds.length > 0 && (
                      <div className="pt-3 border-t border-white/5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-softgrey/80 block mb-1.5">
                          SHIPPED IN:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {skill.projectIds.map((pid) => (
                            <span
                              key={pid}
                              className="font-mono text-[10px] text-lime-acid bg-void/80 border border-lime-acid/30 px-2 py-0.5"
                            >
                              {getProjectTitle(pid)}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Continuous Learning Horizon Block */}
        <div className="border border-white/15 bg-[#161814] p-8 md:p-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-[10px] text-lime-acid tracking-widest uppercase px-2.5 py-1 border border-lime-acid/40 bg-void inline-block mb-3">
                CONTINUOUS MASTERY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-tight">
                ACTIVE LEARNING &amp; ENGINEERING FOCUS
              </h3>
            </div>
            <p className="font-sans text-xs text-softgrey max-w-md leading-relaxed">
              Distinguishing technologies actively deployed in production from computer science subjects under active continuous development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentlyLearningData.map((item, idx) => (
              <div key={idx} className="p-5 border border-white/10 bg-void flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-lime-acid block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-sans font-bold text-base text-white mb-2">
                    {item.name}
                  </h4>
                  <p className="font-sans text-xs text-smoke/80 leading-relaxed mb-4">
                    {item.focus}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-softgrey">Status</span>
                  <span className="font-mono text-[10px] text-lime-acid flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-acid animate-pulse" />
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
