/* =========================
   Animation Configuration
   =========================
   
   Framer Motion animation presets and configurations.
   Theme-aware animations with automatic reduced motion support.
   ========================= */

import type { Variant, Transition } from 'framer-motion';

// ===== Animation Durations =====
export const durations = {
  instant: 0,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.7,
  slowest: 1,
} as const;

// ===== Animation Easings =====
export const easings = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.34, 1.56, 0.64, 1],
  bounce: [0.68, -0.55, 0.265, 1.55],
} as const;

// ===== Spring Configurations =====
export const springs = {
  gentle: {
    type: 'spring' as const,
    stiffness: 100,
    damping: 15,
    mass: 0.5,
  },
  smooth: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 14,
    mass: 0.4,
  },
  snappy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  },
  bouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 10,
    mass: 0.8,
  },
} as const;

// ===== Base Transitions =====
export const transitions = {
  fast: {
    duration: durations.fast,
    ease: easings.easeOut,
  },
  normal: {
    duration: durations.normal,
    ease: easings.easeOut,
  },
  slow: {
    duration: durations.slow,
    ease: easings.easeOut,
  },
  spring: springs.smooth,
} as const;

// ===== Direction Variants =====
export type AnimationDirection = 'up' | 'down' | 'left' | 'right';

export const getDirectionOffset = (
  direction: AnimationDirection,
  distance: number = 60
): { x: number; y: number } => {
  switch (direction) {
    case 'up':
      return { x: 0, y: distance };
    case 'down':
      return { x: 0, y: -distance };
    case 'left':
      return { x: distance, y: 0 };
    case 'right':
      return { x: -distance, y: 0 };
  }
};

// ===== Animation Variants =====

/**
 * Fade animation - Simple opacity transition
 */
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Slide animation - Movement with fade
 */
export const createSlideVariants = (
  direction: AnimationDirection = 'up',
  distance: number = 60
) => {
  const offset = getDirectionOffset(direction, distance);
  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

/**
 * Scale animation - Zoom in/out with fade
 */
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

/**
 * Reveal animation - Slide with blur (like current RevealAnimation)
 */
export const createRevealVariants = (
  direction: AnimationDirection = 'up',
  distance: number = 60,
  blur: number = 16
) => {
  const offset = getDirectionOffset(direction, distance);
  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      filter: `blur(${blur}px)`,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
    },
  };
};

/**
 * Stagger children animation
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

/**
 * Hover scale animation
 */
export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
};

/**
 * Hover lift animation
 */
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -2 },
};

// ===== Theme-Specific Animation Configurations =====

export type ThemeName = 'default' | 'brutalist' | 'custom';

export interface ThemeAnimationConfig {
  duration: number;
  distance: number;
  blur: number;
  useSpring: boolean;
  hoverScale: number;
  hoverLift: number;
}

export const themeAnimations: Record<ThemeName, ThemeAnimationConfig> = {
  default: {
    duration: durations.normal,
    distance: 60,
    blur: 16,
    useSpring: false,
    hoverScale: 1.02,
    hoverLift: -2,
  },
  brutalist: {
    duration: durations.instant,
    distance: 0,
    blur: 0,
    useSpring: false,
    hoverScale: 1,
    hoverLift: 0,
  },
  custom: {
    duration: durations.normal,
    distance: 60,
    blur: 16,
    useSpring: true,
    hoverScale: 1.05,
    hoverLift: -4,
  },
};

/**
 * Get animation config for a specific theme
 */
export const getAnimationConfig = (theme: ThemeName = 'default'): ThemeAnimationConfig => {
  return themeAnimations[theme];
};

/**
 * Get transition for a theme
 */
export const getThemeTransition = (
  theme: ThemeName = 'default',
  customDuration?: number
): Transition => {
  const config = getAnimationConfig(theme);
  
  if (config.useSpring) {
    return springs.smooth;
  }
  
  return {
    duration: customDuration ?? config.duration,
    ease: easings.easeOut,
  };
};

/**
 * Create reveal variants for a specific theme
 */
export const getThemeRevealVariants = (
  theme: ThemeName = 'default',
  direction: AnimationDirection = 'up'
) => {
  const config = getAnimationConfig(theme);
  return createRevealVariants(direction, config.distance, config.blur);
};

// ===== Scroll Animation Configurations =====

export interface ScrollAnimationConfig {
  once?: boolean;
  amount?: number | 'some' | 'all';
  margin?: string;
}

export const scrollConfigs = {
  default: {
    once: true,
    amount: 0.2,
    margin: '0px 0px -100px 0px',
  },
  immediate: {
    once: true,
    amount: 0,
    margin: '0px 0px 0px 0px',
  },
  delayed: {
    once: true,
    amount: 0.4,
    margin: '0px 0px -200px 0px',
  },
} as const;

// ===== Preset Animations =====

export const presetAnimations = {
  fadeIn: {
    initial: 'hidden',
    animate: 'visible',
    variants: fadeVariants,
    transition: transitions.normal,
  },
  slideUp: {
    initial: 'hidden',
    animate: 'visible',
    variants: createSlideVariants('up'),
    transition: transitions.normal,
  },
  slideDown: {
    initial: 'hidden',
    animate: 'visible',
    variants: createSlideVariants('down'),
    transition: transitions.normal,
  },
  slideLeft: {
    initial: 'hidden',
    animate: 'visible',
    variants: createSlideVariants('left'),
    transition: transitions.normal,
  },
  slideRight: {
    initial: 'hidden',
    animate: 'visible',
    variants: createSlideVariants('right'),
    transition: transitions.normal,
  },
  scaleIn: {
    initial: 'hidden',
    animate: 'visible',
    variants: scaleVariants,
    transition: transitions.spring,
  },
  reveal: {
    initial: 'hidden',
    animate: 'visible',
    variants: createRevealVariants('up'),
    transition: transitions.normal,
  },
} as const;

// ===== Reduced Motion Check =====

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get animation config with reduced motion support
 */
export const getAccessibleAnimation = <T extends Record<string, any>>(
  animation: T,
  fallback: Partial<T> = {}
): T => {
  if (prefersReducedMotion()) {
    return {
      ...animation,
      transition: { duration: 0 },
      ...fallback,
    } as T;
  }
  return animation;
};

/**
 * Conditional animation based on reduced motion preference
 */
export const conditionalAnimation = (
  normalAnimation: any,
  reducedAnimation: any = {}
) => {
  return prefersReducedMotion() ? reducedAnimation : normalAnimation;
};

// ===== Exit Animations =====

export const exitVariants = {
  fade: { opacity: 0 },
  slideUp: { opacity: 0, y: -20 },
  slideDown: { opacity: 0, y: 20 },
  scaleDown: { opacity: 0, scale: 0.9 },
};

// ===== Page Transition Animations =====

export const pageTransitions = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: transitions.fast,
  },
  slide: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: transitions.normal,
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: transitions.spring,
  },
};

// ===== Export Default Configuration =====

export const defaultAnimationConfig = {
  durations,
  easings,
  springs,
  transitions,
  variants: {
    fade: fadeVariants,
    slide: createSlideVariants,
    scale: scaleVariants,
    reveal: createRevealVariants,
    stagger: staggerContainer,
  },
  hover: {
    scale: hoverScale,
    lift: hoverLift,
  },
  scroll: scrollConfigs,
  presets: presetAnimations,
  exit: exitVariants,
  page: pageTransitions,
} as const;

export default defaultAnimationConfig;

