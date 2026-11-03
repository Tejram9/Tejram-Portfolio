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
    cobalt: 'hover:shadow-[0_0_30px_rgba(37,99,235,0.18)]',
    cyan: 'hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]',
    violet: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.18)]',
  };

  return (
    <div
      className={cn(
        'relative rounded-2xl bg-space-850/80 border border-slate-800/80 backdrop-blur-md overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:border-slate-700/90 hover:-translate-y-1',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {tacticalBorder && (
        <>
          {/* Subtle tactical corner markers */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cobalt-500/60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cobalt-500/60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cobalt-500/60 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cobalt-500/60 pointer-events-none" />
        </>
      )}
      {children}
    </div>
  );
};
