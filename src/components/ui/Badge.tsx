import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'orange' | 'emerald' | 'violet' | 'amber' | 'cobalt' | 'slate';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  size = 'md',
  className,
  icon,
  dot = false,
}) => {
  const variantStyles = {
    purple: 'bg-purple-950/70 text-purple-200 border-purple-700/60 shadow-[0_0_14px_rgba(168,85,247,0.3)]',
    violet: 'bg-purple-950/70 text-purple-200 border-purple-700/60 shadow-[0_0_14px_rgba(168,85,247,0.3)]',
    cyan: 'bg-sky-950/70 text-sky-200 border-sky-600/50 shadow-[0_0_14px_rgba(56,189,248,0.25)]',
    cobalt: 'bg-purple-950/70 text-purple-200 border-purple-700/60 shadow-[0_0_14px_rgba(168,85,247,0.3)]',
    orange: 'bg-orange-950/70 text-orange-200 border-orange-600/60 shadow-[0_0_14px_rgba(249,115,22,0.3)]',
    amber: 'bg-orange-950/70 text-orange-200 border-orange-600/60 shadow-[0_0_14px_rgba(249,115,22,0.3)]',
    emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-700/50 shadow-[0_0_12px_rgba(16,185,129,0.2)]',
    slate: 'bg-space-850/90 text-slate-300 border-slate-700/60',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-xs md:text-sm px-3.5 py-1 gap-2',
  };

  const dotColors = {
    purple: 'bg-purple-400',
    violet: 'bg-purple-400',
    cyan: 'bg-sky-400',
    cobalt: 'bg-purple-400',
    orange: 'bg-orange-400',
    amber: 'bg-orange-400',
    emerald: 'bg-emerald-400',
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
