import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: 'purple' | 'electric' | 'orange' | 'cobalt' | 'cyan' | 'violet' | 'amber' | 'none';
  tacticalBorder?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  glow = 'none',
  tacticalBorder = false,
  ...props
}) => {
  const glowStyles = {
    none: '',
    purple: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:border-purple-500/40',
    electric: 'hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] hover:border-electric-400/40',
    orange: 'hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] hover:border-accent-orange/40',
    cobalt: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:border-purple-500/40',
    cyan: 'hover:shadow-[0_0_35px_rgba(56,189,248,0.25)] hover:border-electric-400/40',
    violet: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:border-purple-500/40',
    amber: 'hover:shadow-[0_0_35px_rgba(249,115,22,0.3)] hover:border-accent-orange/40',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl glass-card overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:-translate-y-1',
        glowStyles[glow],
        tacticalBorder && 'corner-crosshairs',
        className
      )}
      {...props}
    >
      {tacticalBorder && (
        <>
          {/* Subtle architectural hairline accents at corners */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-purple-400/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-purple-400/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-purple-400/50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-purple-400/50 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
};
