'use client';

import { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MicroInteractionProps {
  children: ReactNode;
  type?: 'scale' | 'pulse' | 'highlight';
  className?: string;
}

const MicroInteraction = ({ 
  children, 
  type = 'scale',
  className 
}: MicroInteractionProps) => {
  const [isActive, setIsActive] = useState(false);
  
  // Define animation variants based on type
  const getAnimationProps = () => {
    switch (type) {
      case 'scale':
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
      case 'pulse':
        return {
          whileHover: { scale: [1, 1.05, 1.03] },
          whileTap: { scale: 0.95 },
          transition: { duration: 0.3 },
        };
      case 'highlight':
        return {
          whileHover: { boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.5)' },
          whileTap: { boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.7)' },
        };
      default:
        return {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
        };
    }
  };

  return (
    <motion.div
      className={cn('inline-block', className)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      {...getAnimationProps()}
    >
      {children}
    </motion.div>
  );
};

export default MicroInteraction;