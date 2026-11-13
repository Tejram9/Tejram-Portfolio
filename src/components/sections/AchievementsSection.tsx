import React from 'react';
import { achievementsData } from '../../data/achievements';
import { Trophy } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden bg-void border-t border-white/5">
      {/* Anchor alias for #achievements */}
      <div id="achievements" className="absolute -top-24 pointer-events-none" />

      {/* Ghost Background Typography */}
      <span
        aria-hidden
        className="absolute top-1/2 -translate-y-1/2 right-4 font-display text-[16vw] text-white/[0.02] select-none pointer-events-none leading-none tracking-tight"
      >
        AWARDS
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-xs text-softgrey tracking-widest uppercase mb-4">
              005 — VERIFIED MILESTONES
            </p>
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-[0.92]">
              EXPERIENCE &amp;<br />
              <span className="text-lime-acid">ACHIEVEMENTS.</span>
            </h2>
          </div>

          <div className="max-w-xs">
            <div className="w-12 h-0.5 bg-lime-acid mb-4" />
            <p className="font-sans text-xs sm:text-sm text-softgrey leading-relaxed">
              Competitive recognitions and technical exhibitions earned through active software development. Strictly verified; zero fabricated titles.
            </p>
          </div>
        </div>

        {/* 2-Column Editorial Award Dossiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-8 md:p-10 border border-white/10 bg-[#121410] hover:border-lime-acid/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                  <span className="font-display text-4xl text-lime-acid tracking-tight">
                    {item.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-void bg-lime-acid px-3 py-1 font-semibold flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{item.badge}</span>
                    </span>
                    <span className="font-mono text-xs text-softgrey border border-white/10 px-2.5 py-1">
                      {item.dateOrYear}
                    </span>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-tight mb-2 group-hover:text-lime-acid transition-colors">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-softgrey uppercase tracking-wider mb-6">
                  {item.organizationOrEvent}
                </p>

                {/* Highlight */}
                <p className="font-sans text-sm text-smoke/90 leading-relaxed mb-6 font-normal">
                  {item.highlightText}
                </p>
              </div>

              {/* Technical description footer */}
              <div className="pt-6 border-t border-white/10 font-mono text-xs text-softgrey leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
