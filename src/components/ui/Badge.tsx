import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cobalt' | 'cyan' | 'emerald' | 'violet' | 'amber' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  size = 'md',
  className,
  icon,
  dot = false,
}) => {
  const variantStyles = {
    cobalt: 'bg-amber-950/70 text-amber-300 border-amber-800/60 shadow-[0_0_12px_rgba(245,158,11,0.18)]',
    cyan: 'bg-amber-950/80 text-amber-200 border-amber-700/60 shadow-[0_0_12px_rgba(251,191,36,0.18)]',
    emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50 shadow-[0_0_12px_rgba(16,185,129,0.15)]',
    violet: 'bg-violet-950/60 text-violet-300 border-violet-800/50 shadow-[0_0_12px_rgba(139,92,246,0.15)]',
    amber: 'bg-amber-950/80 text-amber-300 border-amber-700/70 shadow-[0_0_14px_rgba(245,158,11,0.22)]',
    slate: 'bg-space-850/90 text-slate-300 border-slate-700/60',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs md:text-sm px-3 py-1 gap-2',
  };

  const dotColors = {
    cobalt: 'bg-amber-400',
    cyan: 'bg-amber-300',
    emerald: 'bg-emerald-400',
    violet: 'bg-violet-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono font-medium rounded-full border backdrop-blur-md transition-all duration-200 tracking-wide',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn('w-1.5 h-1.5 rounded-full shrink-0 animate-pulse', dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
