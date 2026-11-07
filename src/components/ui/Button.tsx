import React from 'react';
import { cn } from '../../lib/utils';
import { Magnetic } from './Magnetic';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  magnetic?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  icon,
  iconRight,
  magnetic = false,
  className,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-space-950 disabled:opacity-50 disabled:pointer-events-none rounded-xl active:scale-[0.98] overflow-hidden';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-semibold shadow-[0_0_24px_rgba(245,158,11,0.32)] hover:shadow-[0_0_32px_rgba(251,191,36,0.48)] hover:brightness-105 border border-amber-300/60',
    secondary:
      'bg-space-850/90 hover:bg-space-800 text-slate-100 border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md shadow-sm',
    outline:
      'bg-transparent hover:bg-amber-950/40 text-amber-300 hover:text-white border border-amber-500/50 hover:border-amber-400',
    ghost:
      'bg-transparent hover:bg-space-850/70 text-slate-300 hover:text-white border border-transparent',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-2',
    md: 'text-xs md:text-sm px-5 py-2.5 gap-2.5',
    lg: 'text-sm md:text-base px-6 py-3.5 gap-3 font-semibold',
  };

  const content = (
    <>
      {/* Subtle shine reflection sweep across button on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
      {icon && <span className="transition-transform duration-200 group-hover:scale-110 shrink-0">{icon}</span>}
      <span className="tracking-wide relative z-10">{children}</span>
      {iconRight && <span className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 relative z-10">{iconRight}</span>}
    </>
  );

  const element = href ? (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
    >
      {content}
    </a>
  ) : (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], 'group', className)}
      {...props}
    >
      {content}
    </button>
  );

  if (magnetic) {
    return <Magnetic strength={0.3}>{element}</Magnetic>;
  }

  return element;
};
