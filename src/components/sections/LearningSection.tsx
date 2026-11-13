import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';
import { currentlyLearningData } from '../../data/skills';

export const LearningSection: React.FC = () => {
  return (
    <section id="learning" className="py-28 relative overflow-hidden bg-space-950 hairline-border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07 //"
          eyebrow="Continuous Horizon"
          title="Always"
          highlight="Learning."
          description="Software engineering demands relentless curiosity. Current focus areas where I am actively reading documentation, solving problems, and building deeper intuition."
          coordinateTag="GROWTH // CORE_DSA_SYSTEMS"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentlyLearningData.map((item, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              delay={idx * 0.08}
              className="h-full flex flex-col"
            >
              <Card
                className="p-6 md:p-7 flex flex-col justify-between h-full"
                hoverEffect
                glow="purple"
                tacticalBorder
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-purple-400 font-bold">
                      {`HORIZON 0${idx + 1}`}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 border border-purple-800/60 text-purple-300 font-medium">
                      {item.stage}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-space-750 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-900 text-purple-300 border border-purple-900/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
