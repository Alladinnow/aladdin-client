import React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      error,
      hint,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const checkboxId = id || generatedId;

    return (
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            className={cn(
              'w-4 h-4 text-[#054a4e] bg-white border-gray-300 rounded',
              'focus:ring-2 focus:ring-[#054a4e] focus:ring-offset-0',
              'cursor-pointer transition-colors',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={error ? `${checkboxId}-error` : hint ? `${checkboxId}-hint` : undefined}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className="text-sm font-medium text-gray-700 cursor-pointer select-none">
              {label}
            </label>
          )}
        </div>

        {error && (
          <p id={`${checkboxId}-error`} className="text-sm text-red-600">
            {error}
          </p>
        )}

        {hint && !error && (
          <p id={`${checkboxId}-hint`} className="text-sm text-gray-500">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
