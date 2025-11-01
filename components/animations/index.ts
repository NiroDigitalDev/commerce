/* =========================
   Animation Components - Index
   =========================
   
   Central export for all animation components.
   ========================= */

export { Reveal, type RevealProps } from './reveal';
export { ScrollReveal, type ScrollRevealProps, type AnimationType } from './scroll-reveal';
export { MotionWrapper, type MotionWrapperProps } from './motion-wrapper';

// Re-export commonly used types from animation config
export type {
  AnimationDirection,
  ThemeName,
  ThemeAnimationConfig,
} from '@/lib/animation-config';

