import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  size?: 1 | 2 | 3; // 1 = small, 2 = medium (default), 3 = large
  children: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = 'neutral',
      size = 2,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses: Record<string, string> = {
      primary: 'bg-[#054a4e] text-white',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      danger: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
      neutral: 'bg-gray-100 text-gray-800',
    };

    const sizeClasses: Record<number, string> = {
      1: 'px-2 py-0.5 text-xs',
      2: 'px-3 py-1 text-sm',
      3: 'px-4 py-1.5 text-base',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
