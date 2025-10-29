import React from 'react';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 1 | 2 | 3; // 1 = small (16px), 2 = medium (24px), 3 = large (40px)
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 2,
  color = 'var(--color-primary)',
  className = '',
  ...props
}) => {
  const sizeMap: Record<number, string> = {
    1: '16px',
    2: '24px',
    3: '40px',
  };

  return (
    <div
      className={`spinner ${className}`}
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        borderColor: `${color}20`,
        borderTopColor: color,
      }}
      role="status"
      aria-label="Loading"
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Spinner.displayName = 'Spinner';
