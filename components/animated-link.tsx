import clsx from 'clsx';
import Link from 'next/link';
import { ComponentProps } from 'react';

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  className?: string;
  children: React.ReactNode;
}

export default function AnimatedLink({
  className,
  children,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        'relative inline-block text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
        'after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-out',
        'hover:after:w-full',
        className
      )}
    >
      {children}
    </Link>
  );
}

