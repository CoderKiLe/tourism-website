'use client';

import { forwardRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

const RippleButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    variant = 'primary',
    size = 'md',
    children,
    className,
    disabled = false,
    type = 'button',
    onClick,
    ...props
  }, ref) => {
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden relative';

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg',
      secondary: 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500 shadow-md hover:shadow-lg',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizes = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2.5 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const buttonClasses = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) return;

      // Get click coordinates relative to button
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Add ripple
      const id = Date.now();
      setRipples([...ripples, { x, y, id }]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(ripples => ripples.filter(ripple => ripple.id !== id));
      }, 1000);

      // Call original onClick
      if (onClick) onClick();
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        className={buttonClasses}
        disabled={disabled}
        onClick={handleClick}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {/* Ripple effects */}
        <AnimatePresence>
          {ripples.map(ripple => (
            <motion.span
              key={ripple.id}
              initial={{
                width: 0,
                height: 0,
                opacity: 0.5,
                x: ripple.x,
                y: ripple.y,
                borderRadius: '100%',
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
              }}
              animate={{
                width: 500,
                height: 500,
                opacity: 0
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </AnimatePresence>

        {/* Button content */}
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

RippleButton.displayName = 'RippleButton';

export default RippleButton;