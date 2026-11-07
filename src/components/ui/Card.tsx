import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: 'cobalt' | 'cyan' | 'violet' | 'none';
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
    cobalt: 'hover:shadow-[0_0_35px_rgba(37,99,235,0.22)]',
    cyan: 'hover:shadow-[0_0_35px_rgba(56,189,248,0.22)]',
    violet: 'hover:shadow-[0_0_35px_rgba(139,92,246,0.22)]',
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
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cobalt-400/50 pointer-events-none" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cobalt-400/50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cobalt-400/50 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cobalt-400/50 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
};
