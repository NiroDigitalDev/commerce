'use client';

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NewsletterChecklistProps {
  items: Array<{ id: string; text: string }>;
  className?: string;
  listTextClass?: string;
  variant?: 'default' | 'gray';
}

const NewsletterChecklist = ({
  items,
  className,
  listTextClass,
  variant = 'default'
}: NewsletterChecklistProps) => {
  return (
    <ul className={cn('flex flex-wrap items-center gap-x-4 gap-y-3', className)}>
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-2">
          <div className="flex items-center justify-center size-5 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0">
            <Check className="size-3 text-primary" strokeWidth={3} />
          </div>
          <span
            className={cn(
              'text-sm text-neutral-600 dark:text-neutral-400',
              variant === 'gray' && 'text-neutral-500 dark:text-neutral-500',
              listTextClass
            )}
          >
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default NewsletterChecklist;

