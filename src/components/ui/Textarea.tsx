import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  fullWidth?: boolean;
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      fullWidth = false,
      resize = 'vertical',
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={`form-group ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label htmlFor={textareaId} className="label">
            {label}
            {props.required && <span style={{ color: 'var(--color-danger)' }}> *</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={`input ${error ? 'input-error' : ''} ${className}`}
          style={{ resize }}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined}
          {...props}
        />

        {error && (
          <span id={`${textareaId}-error`} className="error-message">
            {error}
          </span>
        )}

        {hint && !error && (
          <span id={`${textareaId}-hint`} className="hint-text">
            {hint}
          </span>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
