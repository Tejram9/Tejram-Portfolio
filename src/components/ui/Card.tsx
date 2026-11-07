import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: 'cobalt' | 'cyan' | 'violet' | 'amber' | 'none';
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
    cobalt: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.22)]',
    cyan: 'hover:shadow-[0_0_35px_rgba(251,191,36,0.22)]',
    amber: 'hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
    violet: 'hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]',
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
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-amber-400/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-amber-400/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-amber-400/50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-amber-400/50 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
};
