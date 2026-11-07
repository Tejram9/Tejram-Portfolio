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
          'flex flex-wrap items-center gap-3 font-mono text-[11px] md:text-xs tracking-wider uppercase mb-3 text-cobalt-400',
          align === 'center' ? 'justify-center' : 'justify-start'
        )}
      >
        {number && (
          <span className="text-slate-500 font-semibold">{number}</span>
        )}
        <span className="inline-block w-6 h-[1px] bg-cobalt-500/50" />
        <span className="font-semibold tracking-widest text-slate-300">{eyebrow}</span>
        {coordinateTag && (
          <>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-500 hidden sm:inline text-[10px]">
              {coordinateTag}
            </span>
          </>
        )}
      </div>

      {/* Main Editorial Headline */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-slate-50 tracking-[-0.03em] leading-[1.08]">
        {title}{' '}
        {highlight && (
          <span className="italic font-display bg-gradient-to-r from-cobalt-300 via-cyber-cyan to-cobalt-400 bg-clip-text text-transparent font-normal">
            {highlight}
          </span>
        )}
      </h2>

      {/* Editorial Hairline Rule */}
      <div className={cn('h-[1px] w-20 bg-gradient-to-r from-cobalt-500/60 to-transparent mt-4 mb-3', align === 'center' && 'mx-auto')} />

      {/* Supporting Narrative Description */}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-slate-400 font-normal leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
};
