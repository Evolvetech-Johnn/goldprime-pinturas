import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'cta' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-8 py-4 rounded-xl font-sans font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 btn-premium shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold text-black hover:bg-gold-light border border-gold-dark/20",
    cta: "bg-white text-black hover:bg-gold hover:text-black border border-white/10",
    outline: "border-2 border-gold text-gold hover:bg-gold hover:text-black",
    ghost: "bg-transparent text-gray-400 hover:bg-white/5 hover:text-white"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
