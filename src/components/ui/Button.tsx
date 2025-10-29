import React from 'react';
import { cn } from '@/lib/utils';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 1 | 2 | 3; // 1 = small, 2 = medium (default), 3 = large
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 2,
      fullWidth = false,
      loading = false,
      className = '',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses: Record<string, string> = {
      primary: 'bg-[#054a4e] text-white hover:bg-[#043a3d] focus:ring-[#054a4e] shadow-sm',
      secondary: 'bg-[#02c4cb] text-white hover:bg-[#02b0b6] focus:ring-[#02c4cb] shadow-sm',
      outline: 'border-2 border-[#054a4e] text-[#054a4e] hover:bg-[#054a4e] hover:text-white focus:ring-[#054a4e]',
      ghost: 'text-[#054a4e] hover:bg-gray-100 focus:ring-[#054a4e]',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-600 shadow-sm',
    };

    const sizeClasses: Record<number, string> = {
      1: 'px-3 py-1.5 text-sm',
      2: 'px-4 py-2 text-base',
      3: 'px-6 py-3 text-lg',
    };

    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && 'w-full',
      className
    );

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
