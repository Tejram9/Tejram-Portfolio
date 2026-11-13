import React from 'react';
import { journeyMilestones } from '../../data/journey';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 md:py-32 relative overflow-hidden bg-void border-t border-white/5">
      {/* Background Ghost Watermark */}
      <span
        aria-hidden
        className="absolute top-1/3 left-0 font-display text-[15vw] text-white/[0.02] select-none pointer-events-none leading-none tracking-tight"
      >
        EVOLUTION
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <p className="font-mono text-xs text-softgrey tracking-widest uppercase mb-4">
              006 — CHRONOLOGY
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-[0.92]">
              DEVELOPMENT <span className="text-lime-acid">JOURNEY.</span>
            </h2>
          </div>

          <div className="max-w-xs">
            <div className="w-12 h-0.5 bg-lime-acid mb-4" />
            <p className="font-sans text-xs sm:text-sm text-softgrey leading-relaxed">
              The continuous progression from algorithmic CS foundations at SSGMCE to shipping production-deployed full-stack solutions.
            </p>
          </div>
        </div>

        {/* Minimal Editorial Vertical Timeline */}
        <div className="relative border-l border-white/15 ml-4 md:ml-32 space-y-12 pb-6">
          {journeyMilestones.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-void border-2 border-white/40 group-hover:border-lime-acid group-hover:bg-lime-acid transition-colors" />

              {/* Phase label floated left on desktop */}
              <div className="md:absolute md:-left-32 md:top-1 font-mono text-[11px] text-lime-acid uppercase tracking-widest mb-1 md:mb-0">
                {item.year || `PHASE 0${idx + 1}`}
              </div>

              {/* Milestone Content Box */}
              <div className="p-6 md:p-8 border border-white/10 bg-[#121410] hover:border-lime-acid/50 transition-all duration-200">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs text-softgrey uppercase tracking-widest">
                    // {item.category}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight mb-3 group-hover:text-lime-acid transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-smoke/90 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 bg-void text-softgrey border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
