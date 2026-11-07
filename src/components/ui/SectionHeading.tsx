import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  number?: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl',
        className
      )}
    >
      {/* Eyebrow & Index tag */}
      <div
        className={cn(
          'flex items-center gap-3 font-mono text-xs md:text-sm tracking-wider uppercase mb-3 text-cobalt-400',
          align === 'center' && 'justify-center'
        )}
      >
        {number && (
          <span className="text-slate-500 font-semibold">{number}</span>
        )}
        <span className="inline-block w-6 h-[1px] bg-cobalt-500/50" />
        <span className="font-medium tracking-widest">{eyebrow}</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-50 tracking-tight leading-[1.15]">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-cobalt-400 via-cyber-cyan to-cobalt-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-400 font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

