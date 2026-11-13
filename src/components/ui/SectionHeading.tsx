import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { useDevicePerformance } from '../../hooks/useDevicePerformance';

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  coordinateTag?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  eyebrow,
  title,
  highlight,
  description,
  coordinateTag,
  align = 'left',
  className,
}) => {
  const { prefersReducedMotion } = useDevicePerformance();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        'mb-14 md:mb-20 relative',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
    >
      {/* Top Meta Line: Index, Eyebrow & Coordinate */}
      <div
        className={cn(
          'flex flex-wrap items-center gap-3 font-mono text-[11px] md:text-xs tracking-wider uppercase mb-3 text-purple-400',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        {number && (
          <span className="text-purple-400 font-bold">{number}</span>
        )}
        <span className="inline-block w-6 h-[1px] bg-gradient-to-r from-purple-500 to-electric-400" />
        <span className="font-semibold tracking-widest text-slate-200">{eyebrow}</span>
        {coordinateTag && (
          <>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-electric-400/80 hidden sm:inline text-[10px] font-mono">
              [{coordinateTag}]
            </span>
          </>
        )}
      </div>

      {/* Main Editorial Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-50 tracking-[-0.035em] leading-[1.08]">
        {title}{' '}
        {highlight && (
          <span className="font-display bg-gradient-to-r from-purple-300 via-purple-400 to-electric-400 bg-clip-text text-transparent font-extrabold">
            {highlight}
          </span>
        )}
      </h2>

      {/* Supporting Editorial Deck */}
      {description && (
        <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}

      {/* Architectural Bottom Hairline */}
      <div className="mt-6 w-16 h-[2px] bg-gradient-to-r from-purple-500 via-electric-400 to-transparent" />
    </motion.div>
  );
};
