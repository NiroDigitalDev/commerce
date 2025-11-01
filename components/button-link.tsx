/* =========================
   Button Link Component
   =========================
   
   Link component styled as a button.
   All styling is handled in CSS using design tokens.
   ========================= */

import { cn } from '@/lib/utils';
import Link from 'next/link';
import type * as React from 'react';

interface ButtonLinkProps extends React.ComponentProps<typeof Link> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'lg';
  variant?: 'default' | 'accent' | 'primary';
}

// Button class lookup map for cleaner code
const BUTTON_CLASSES = {
  'default-default': 'button-link',
  'default-accent': 'button-link-accent',
  'default-primary': 'button-link-primary',
  'lg-default': 'button-link-lg',
  'lg-accent': 'button-link-lg', // lg overrides variant
  'lg-primary': 'button-link-lg', // lg overrides variant
} as const;

const ButtonLink = ({ 
  children, 
  className, 
  size = 'default', 
  variant = 'default', 
  ...props 
}: ButtonLinkProps) => {
  const key = `${size}-${variant}` as keyof typeof BUTTON_CLASSES;
  const buttonClass = BUTTON_CLASSES[key] || 'button-link';
  
  return (
    <Link className={cn(buttonClass, className)} {...props}>
      <span>{children}</span>
    </Link>
  );
};

export default ButtonLink;

