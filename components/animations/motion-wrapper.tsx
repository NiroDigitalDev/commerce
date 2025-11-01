'use client';

/* =========================
   Motion Wrapper Component
   =========================
   
   Flexible wrapper for Framer Motion animations.
   Supports preset animations or custom variants.
   Theme-aware with automatic reduced motion support.
   ========================= */

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';
import {
  presetAnimations,
  getAccessibleAnimation,
  type ThemeName,
} from '@/lib/animation-config';

type PresetAnimation = keyof typeof presetAnimations;

export interface MotionWrapperProps extends Omit<HTMLMotionProps<'div'>, 'initial' | 'animate' | 'variants'> {
  children: ReactNode;
  preset?: PresetAnimation;
  delay?: number;
  duration?: number;
  theme?: ThemeName;
  className?: string;
}

/**
 * Generic motion wrapper component
 * 
 * Use this for simple animations with preset configurations.
 * For more control, use the specific animation components (Reveal, ScrollReveal).
 * 
 * @param preset - Preset animation type ('fadeIn', 'slideUp', 'slideDown', 'slideLeft', 'slideRight', 'scaleIn', 'reveal')
 * @param delay - Delay before animation starts
 * @param duration - Custom duration override
 * @param theme - Theme for animation config
 */
export function MotionWrapper({
  children,
  preset = 'fadeIn',
  delay = 0,
  duration,
  theme = 'default',
  className,
  ...motionProps
}: MotionWrapperProps) {
  const animation = presetAnimations[preset];

  const accessibleAnimation = getAccessibleAnimation({
    ...animation,
    transition: {
      ...animation.transition,
      delay,
      ...(duration && { duration }),
    },
  });

  return (
    <motion.div className={className} {...accessibleAnimation} {...motionProps}>
      {children}
    </motion.div>
  );
}

export default MotionWrapper;

