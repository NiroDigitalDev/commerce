/* =========================
   Section Header Component
   =========================
   
   Reusable section header with badge, title, and description.
   Uses motion components for animations.
   ========================= */

import { Reveal } from '@/components/animations';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'outline' | 'destructive';
  title: ReactNode;
  titleHighlight?: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  animate?: boolean;
  delay?: number;
}

/**
 * Standardized section header component
 * 
 * @param badge - Optional badge/eyebrow text
 * @param badgeVariant - Badge styling variant
 * @param title - Main section title
 * @param titleHighlight - Highlighted portion of title (will be styled with text-primary)
 * @param description - Optional description text
 * @param align - Text alignment (left, center, right)
 * @param className - Additional CSS classes
 * @param animate - Whether to animate the header
 * @param delay - Animation delay
 */
export function SectionHeader({
  badge,
  badgeVariant = 'secondary',
  title,
  titleHighlight,
  description,
  align = 'center',
  className,
  animate = true,
  delay = 0.3,
}: SectionHeaderProps) {
  const headerClasses = cn('section-header', align, className);

  if (!animate) {
    return (
      <div className={headerClasses}>
        {badge && (
          <div className="section-eyebrow">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
        <h2 className="section-title">
          {title}
          {titleHighlight && (
            <> <span className="section-title-highlight">{titleHighlight}</span></>
          )}
        </h2>
        {description && (
          <p className="section-description">{description}</p>
        )}
      </div>
    );
  }

  return (
    <div className={headerClasses}>
      {badge && (
        <Reveal delay={delay} direction="down" distance={20}>
          <div className="section-eyebrow">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        </Reveal>
      )}
      <Reveal delay={delay + 0.1} direction="up">
        <h2 className="section-title">
          {title}
          {titleHighlight && (
            <> <span className="section-title-highlight">{titleHighlight}</span></>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={delay + 0.2} direction="up">
          <p className="section-description">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeader;

