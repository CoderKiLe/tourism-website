'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ParallaxSectionProps } from '@/types';
import { prefersReducedMotion } from '@/lib/utils';

const ParallaxSection = ({
  children,
  speed = 0.2,
  direction = 'up',
  className,
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    setReducedMotion(prefersReducedMotion());
  }, []);

  // Get scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate parallax effect based on direction and speed
  const getParallaxValues = () => {
    const multiplier = speed * 100; // Convert speed to pixels
    
    switch (direction) {
      case 'up':
        return useTransform(scrollYProgress, [0, 1], [0, -multiplier]);
      case 'down':
        return useTransform(scrollYProgress, [0, 1], [0, multiplier]);
      case 'left':
        return useTransform(scrollYProgress, [0, 1], [0, -multiplier]);
      case 'right':
        return useTransform(scrollYProgress, [0, 1], [0, multiplier]);
      default:
        return useTransform(scrollYProgress, [0, 1], [0, -multiplier]);
    }
  };

  const parallaxValue = getParallaxValues();
  const isVertical = direction === 'up' || direction === 'down';
  const transformProp = isVertical ? { y: parallaxValue } : { x: parallaxValue };

  return (
    <div ref={ref} className={cn('overflow-hidden', className)}>
      {reducedMotion ? (
        <div>{children}</div>
      ) : (
        <motion.div style={transformProp}>{children}</motion.div>
      )}
    </div>
  );
};

export default ParallaxSection;