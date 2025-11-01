'use client';

/* =========================
   Scroll Reveal Component
   =========================
   
   Advanced scroll-triggered animations with stagger support.
   Uses Framer Motion's useInView hook for performance.
   ========================= */

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import {
  type AnimationDirection,
  createSlideVariants,
  fadeVariants,
  scaleVariants,
  getAccessibleAnimation,
  transitions,
  staggerContainer,
} from '@/lib/animation-config';

export type AnimationType = 'fade' | 'slide' | 'scale';

export interface ScrollRevealProps {
  children: ReactNode;
  type?: AnimationType;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
  stagger?: boolean;
  staggerDelay?: number;
}

/**
 * Scroll reveal animation component
 * 
 * Triggers animations when elements enter the viewport.
 * Supports multiple animation types and staggered children.
 * 
 * @param type - Type of animation ('fade', 'slide', 'scale')
 * @param direction - Direction for slide animations
 * @param delay - Delay before animation starts
 * @param duration - Duration of animation
 * @param distance - Distance for slide animations
 * @param once - Whether animation should only happen once
 * @param amount - Amount of element visible before animating (0-1 or 'some'/'all')
 * @param stagger - Whether to stagger child animations
 * @param staggerDelay - Delay between staggered children
 */
export function ScrollReveal({
  children,
  type = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.3,
  distance = 60,
  className,
  once = true,
  amount = 0.2,
  stagger = false,
  staggerDelay = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -100px 0px',
  });

  // Get variants based on type
  let variants;
  switch (type) {
    case 'slide':
      variants = createSlideVariants(direction, distance);
      break;
    case 'scale':
      variants = scaleVariants;
      break;
    case 'fade':
    default:
      variants = fadeVariants;
      break;
  }

  // Handle stagger container
  if (stagger) {
    const animation = getAccessibleAnimation({
      initial: 'hidden',
      animate: isInView ? 'visible' : 'hidden',
      variants: staggerContainer,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    });

    return (
      <motion.div ref={ref} className={className} {...animation}>
        {children}
      </motion.div>
    );
  }

  // Regular animation
  const animation = getAccessibleAnimation({
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants,
    transition: {
      duration,
      ease: transitions.normal.ease,
      delay,
    },
  });

  return (
    <motion.div ref={ref} className={className} {...animation}>
      {children}
    </motion.div>
  );
}

export default ScrollReveal;

