import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { profileData } from '../../data/profile';
import { StrategicMatrix } from './StrategicMatrix';
import {
  Compass,
  Layers,
  GitBranch,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  Quote,
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Layers: <Layers className="w-5 h-5 text-cobalt-400" />,
    Compass: <Compass className="w-5 h-5 text-cyber-cyan" />,
    GitBranch: <GitBranch className="w-5 h-5 text-indigo-400" />,
  };

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-space-950/60 hairline-border-t">
      {/* Strategic grid background */}
      <div className="absolute inset-0 bg-grid-architectural opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01 //"
          eyebrow="Personal Philosophy & Approach"
          title="Beyond the"
          highlight="Code."
          description="Transforming abstract ideas into dependable software systems through hands-on engineering, intentional architecture, and continuous learning."
          coordinateTag="SSGMCE // CLASS_OF_2027"
        />

        {/* Editorial Pull-Quote Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl glass-studio border-l-4 border-cobalt-500 relative corner-crosshairs">
          <Quote className="w-8 h-8 text-cobalt-500/30 absolute top-5 right-6" />
          <p className="text-base sm:text-lg md:text-xl font-display font-medium text-slate-200 italic leading-relaxed max-w-4xl">
            &quot;Software development is an interplay of strategy, clean data models, resilient APIs, and purposeful user experiences — much like a game of chess where every architectural move sets the stage for future growth.&quot;
          </p>
          <div className="mt-3 text-xs font-mono text-cobalt-400 uppercase tracking-widest font-semibold">
            &mdash; Tejram Kisan Dudhapachare • Second-Year CSE Student @ SSGMCE
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial Introduction & Student Identity */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="p-7 md:p-9" tacticalBorder>
              <div className="flex items-center gap-2 text-xs font-mono text-cobalt-400 uppercase tracking-widest mb-4">
                <Terminal className="w-4 h-4" />
                <span>Engineering Mindset // SSGMCE Class of 2027</span>
              </div>

              <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-normal">
                {profileData.extendedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Core Tenets Checklist */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Learning by building real, production-ready platforms',
                  'Enterprise Java & Spring Boot backend enthusiasm',
                  'Pragmatic AI integrations tailored for real workflows',
                  'Strategic schema design before implementation',
                  'High academic consistency (8.63 CGPA @ SGBAU)',
                  'Collaborative team execution (TrackX & hackathons)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Strategic Chess & Systems Motif Callout */}
            <div className="p-5 rounded-2xl bg-space-900/80 border border-slate-800/80 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-cobalt-950/80 border border-cobalt-800/60 text-cobalt-300 shrink-0 mt-0.5">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-display font-semibold text-slate-100 flex items-center gap-2">
                  <span>The Strategic Interplay</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-850 text-slate-400">
                    Tactical Paradigm
                  </span>
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  In software as in strategy, every preliminary move matters: an unindexed database query or a poorly modeled entity cascades into runtime complexity. I approach full-stack development with proactive foresight, prioritizing stability, maintainability, and clean abstractions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Three Strategic Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2 font-semibold flex items-center justify-between">
              <span>Foundational Principles</span>
              <span className="text-[10px] text-cobalt-400 font-mono">[03_PILLARS]</span>
            </h3>

            {profileData.strategicPillars.map((pillar, idx) => (
              <Card
                key={pillar.title}
                hoverEffect
                glow="cobalt"
                className="p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-space-900/90 border border-slate-700/60 shrink-0">
                    {iconMap[pillar.icon] || <Sparkles className="w-5 h-5 text-cobalt-400" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        {`0${idx + 1}`}
                      </span>
                      <h4 className="text-base font-display font-bold text-slate-100">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Context Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cobalt-950/60 via-space-900 to-space-850 border border-cobalt-800/40 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cobalt-400 font-semibold block">
                Current College Milestone
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Currently engaged in 2nd-year curriculum at SSGMCE, Shegaon — pairing academic rigor in algorithms and DBMS with practical full-stack software prototyping.
              </p>
            </div>
          </div>
        </div>

        {/* The Engineering Chessboard & Strategic Systems Matrix */}
        <StrategicMatrix />
      </div>
    </section>
  );
};
