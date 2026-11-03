import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { currentlyLearningData } from '../../data/skills';

export const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="py-24 relative overflow-hidden bg-space-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07 //"
          eyebrow="Continuous Horizon"
          title="Always"
          highlight="Learning."
          description="Software engineering demands relentless curiosity. Current focus areas where I am actively reading documentation, solving problems, and building deeper intuition."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearningData.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 flex flex-col justify-between"
              hoverEffect
              glow="cobalt"
              tacticalBorder
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-slate-500 font-bold">
                    {`HORIZON 0${idx + 1}`}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cobalt-950/80 border border-cobalt-800/60 text-cobalt-300">
                    {item.stage}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-slate-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-800 text-slate-300 border border-slate-700/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
