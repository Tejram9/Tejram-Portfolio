import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { journeyMilestones } from '../../data/journey';
import {
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-space-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05 //"
          eyebrow="Progressive Evolution"
          title="Development"
          highlight="Journey."
          description="A chronological narrative charting the transition from algorithmic fundamentals at SSGMCE to enterprise Java backends, hackathons, and AI-driven platforms."
        />

        <div className="relative mt-12">
          {/* Vertical Timeline spine line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cobalt-500/60 via-cyber-cyan/50 to-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {journeyMilestones.map((milestone, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
                >
                  {/* Left Column (or Empty for Right side) */}
                  <div
                    className={`md:col-span-5 ${
                      isEven ? 'md:text-right' : 'md:order-last md:text-left'
                    }`}
                  >
                    <Card
                      className="p-6 md:p-7"
                      glow={milestone.status === 'Continuous' ? 'cyan' : 'cobalt'}
                      tacticalBorder
                    >
                      <div
                        className={`flex items-center gap-2 text-xs font-mono mb-2 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-cobalt-400" />
                        <span className="text-cobalt-300 font-semibold">
                          {milestone.period}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">{milestone.category}</span>
                      </div>

                      <h3 className="text-lg md:text-xl font-display font-bold text-slate-100">
                        {milestone.title}
                      </h3>

                      <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                        {milestone.keyLearnings.map((learn, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-2 text-xs text-slate-400 ${
                              isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mt-0.5" />
                            <span>{learn}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Central Node Badge */}
                  <div className="hidden md:flex md:col-span-2 items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-space-950 border-2 border-cobalt-500 shadow-[0_0_16px_rgba(37,99,235,0.4)] flex items-center justify-center text-cobalt-300 text-xs font-mono font-bold z-10">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Empty Spacer Column on Opposite Side */}
                  <div
                    className={`hidden md:block md:col-span-5 ${
                      isEven ? 'order-last' : 'order-first'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
