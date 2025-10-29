import React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: SelectOption[];
  placeholder?: string;
  fullWidth?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      options,
      placeholder,
      fullWidth = false,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`form-group ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={selectId} className="label">
            {label}
            {props.required && <span style={{ color: 'var(--color-danger)' }}> *</span>}
          </label>
        )}

        <select
          ref={ref}
          id={selectId}
          className={`select ${error ? 'select-error' : ''} ${className}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {error && (
          <span id={`${selectId}-error`} className="error-message">
            {error}
          </span>
        )}

        {hint && !error && (
          <span id={`${selectId}-hint`} className="hint-text">
            {hint}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
