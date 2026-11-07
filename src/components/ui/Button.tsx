import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconRight,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-cobalt-500/50 focus:ring-offset-2 focus:ring-offset-space-950 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98]';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cobalt-600 via-cobalt-500 to-cyber-cyan text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_28px_rgba(56,189,248,0.45)] hover:brightness-110 border border-cobalt-400/30',
    secondary:
      'bg-space-800/80 hover:bg-space-750 text-slate-100 border border-slate-700/60 hover:border-cobalt-500/50 backdrop-blur-md shadow-sm',
    outline:
      'bg-transparent hover:bg-cobalt-950/40 text-cobalt-300 hover:text-white border border-cobalt-500/40 hover:border-cobalt-400',
    ghost:
      'bg-transparent hover:bg-space-800/60 text-slate-300 hover:text-white border border-transparent',
  };

  const sizeStyles = {
    sm: 'text-xs md:text-sm px-3.5 py-1.5 gap-2',
    md: 'text-sm md:text-base px-5 py-2.5 gap-2.5',
    lg: 'text-base md:text-lg px-7 py-3.5 gap-3 font-semibold',
  };

  const content = (
    <>
      {icon && <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="transition-transform duration-200 group-hover:translate-x-0.5">{iconRight}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      {...props}
    >
      {content}
    </button>
  );
};

