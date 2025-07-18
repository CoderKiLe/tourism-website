'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SlideInSectionProps } from '@/types';
import { prefersReducedMotion } from '@/lib/utils';

const SlideInSection = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className,
}: SlideInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    setReducedMotion(prefersReducedMotion());

    // If user prefers reduced motion, show content immediately
    if (reducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger animation once
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element is fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, hasAnimated, reducedMotion]);

  // Set initial and animate values based on direction
  const getDirectionValues = () => {
    switch (direction) {
      case 'left':
        return { initial: { x: -100 }, animate: { x: 0 } };
      case 'right':
        return { initial: { x: 100 }, animate: { x: 0 } };
      case 'up':
        return { initial: { y: 100 }, animate: { y: 0 } };
      case 'down':
        return { initial: { y: -100 }, animate: { y: 0 } };
      default:
        return { initial: { x: -100 }, animate: { x: 0 } };
    }
  };

  const { initial, animate } = getDirectionValues();

  const variants = {
    hidden: { opacity: 0, ...initial },
    visible: {
      opacity: 1,
      ...animate,
      transition: {
        duration,
        delay,
        ease: [0.0, 0.0, 0.2, 1], // Smooth easing
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible || reducedMotion ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideInSection;