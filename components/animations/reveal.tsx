'use client';

/* =========================
   Reveal Animation Component
   =========================
   
   Framer Motion-based reveal animation component.
   Replacement for the GSAP-based RevealAnimation.
   Supports scroll-triggered animations with reduced motion.
   ========================= */

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import {
  type AnimationDirection,
  createRevealVariants,
  getAccessibleAnimation,
  getThemeTransition,
  type ThemeName,
} from '@/lib/animation-config';

export interface RevealProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  blur?: number;
  className?: string;
  theme?: ThemeName;
  once?: boolean;
  amount?: number | 'some' | 'all';
}

/**
 * Reveal animation component using Framer Motion
 * 
 * @param direction - Direction of the reveal animation ('up', 'down', 'left', 'right')
 * @param delay - Delay before animation starts (in seconds)
 * @param duration - Duration of animation (in seconds)
 * @param distance - Distance to travel during animation (in pixels)
 * @param blur - Amount of blur at start (in pixels)
 * @param theme - Theme to use for animation config
 * @param once - Whether animation should only happen once
 * @param amount - Amount of element that should be visible before animating
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration,
  distance = 60,
  blur = 16,
  className,
  theme = 'default',
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    amount,
    margin: '0px 0px -100px 0px',
  });

  const variants = createRevealVariants(direction, distance, blur);
  const transition = getThemeTransition(theme, duration);

  const animation = getAccessibleAnimation({
    initial: 'hidden',
    animate: isInView ? 'visible' : 'hidden',
    variants,
    transition: {
      ...transition,
      delay,
    },
  });

  return (
    <motion.div ref={ref} className={className} {...animation}>
      {children}
    </motion.div>
  );
}

export default Reveal;

