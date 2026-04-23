import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClasses = "rounded-full transition-all duration-500 ease-out active:scale-[0.98]";
  
  let variantClasses = "";
  if (variant === 'primary') {
    variantClasses = "bg-primary text-on-primary hover:opacity-90 font-['Inter'] tracking-tight text-sm font-medium px-4 py-2";
  } else if (variant === 'outline') {
    variantClasses = "flex items-center justify-center text-primary border border-primary px-8 py-4 hover:bg-surface-container-low hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]";
  } else if (variant === 'white') {
    variantClasses = "bg-white text-black px-6 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-variant transition-colors";
  } else {
    variantClasses = "bg-surface-container-lowest text-primary border border-outline-variant hover:bg-surface-container-low px-4 py-2";
  }

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
