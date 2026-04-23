import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <div className={`font-label-sm text-label-sm uppercase tracking-widest ${className}`}>
      {children}
    </div>
  );
};
