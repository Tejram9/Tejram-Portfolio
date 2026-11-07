import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';
import { journeyMilestones } from '../../data/journey';
import {
  Calendar,
  CheckCircle2,
} from 'lucide-react';

export const JourneySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = ['All', 'Foundation', 'Project Execution', 'Competition', 'Architectural Growth'];

  const filteredMilestones = activeCategory === 'All'
    ? journeyMilestones
    : journeyMilestones.filter((m) => m.category === activeCategory);

  return (
    <section id="journey" className="py-28 relative overflow-hidden bg-space-950/70 hairline-border-t">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cobalt-600/06 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="05 //"
          eyebrow="Progressive Evolution"
          title="Development"
          highlight="Journey."
          description="A chronological narrative charting the transition from algorithmic fundamentals at SSGMCE to enterprise Java backends, hackathons, and AI-driven platforms."
          coordinateTag="TIMELINE // 2023_PRESENT"
        />

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cobalt-400 ${
                  isActive ? 'text-white font-bold' : 'text-slate-400 hover:text-slate-200 bg-space-900/60 border border-slate-800'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="journey-filter-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 border border-amber-400/60 shadow-[0_0_16px_rgba(245,158,11,0.4)] -z-10"
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative mt-8">
          {/* Vertical Timeline spine line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-amber-500/70 via-amber-400/50 to-slate-800 -translate-x-1/2" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-14"
            >
              {filteredMilestones.map((milestone, idx) => {
                const isEven = idx % 2 === 0;
                const isHovered = hoveredId === milestone.id;

                return (
                  <div
                    key={milestone.id}
                    onMouseEnter={() => setHoveredId(milestone.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
                  >
                    {/* Left Column (or Empty for Right side) */}
                    <div
                      className={`md:col-span-5 ${
                        isEven ? 'md:text-right' : 'md:order-last md:text-left'
                      }`}
                    >
                      <ScrollReveal direction={isEven ? 'left' : 'right'} delay={idx * 0.08}>
                        <Card
                          className={`p-6 md:p-8 transition-all duration-300 ${
                            isHovered
                              ? 'border-amber-400/80 shadow-[0_10px_35px_-10px_rgba(245,158,11,0.4)] scale-[1.01]'
                              : ''
                          }`}
                          glow={isHovered ? 'amber' : milestone.status === 'Continuous' ? 'amber' : 'cobalt'}
                          tacticalBorder
                        >
                          <div
                            className={`flex items-center gap-2 text-xs font-mono mb-2.5 ${
                              isEven ? 'md:justify-end' : 'justify-start'
                            }`}
                          >
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-amber-300 font-semibold">
                              {milestone.period}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400 font-medium">{milestone.category}</span>
                            {milestone.status === 'Continuous' && (
                              <span className="ml-1 px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800 text-[9px] font-mono text-amber-300">
                                In Progress
                              </span>
                            )}
                          </div>

                          <h3 className="text-lg sm:text-xl font-display font-bold text-slate-100 flex items-center gap-2">
                            {milestone.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal">
                            {milestone.description}
                          </p>

                          <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2">
                            {milestone.keyLearnings.map((learn, i) => (
                              <div
                                key={i}
                                className={`flex items-start gap-2.5 text-xs text-slate-400 ${
                                  isEven ? 'md:flex-row-reverse md:text-right' : 'text-left'
                                }`}
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{learn}</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </ScrollReveal>
                    </div>

                    {/* Central Node Badge */}
                    <div className="hidden md:flex md:col-span-2 items-center justify-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-space-950 border-2 transition-all duration-300 flex items-center justify-center text-xs font-mono font-bold z-10 ${
                          isHovered
                            ? 'border-amber-400 text-amber-300 scale-125 shadow-[0_0_24px_rgba(251,191,36,0.6)]'
                            : 'border-amber-600 text-amber-400 shadow-[0_0_18px_rgba(245,158,11,0.35)]'
                        }`}
                      >
                        0{idx + 1}
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
