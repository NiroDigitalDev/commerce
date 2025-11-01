'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Reveal } from '@/components/animations';

interface PageHeroProps {
  className?: string;
  title?: string;
  heading?: string;
  link?: string;
}

const PageHero = ({ className, title, heading, link }: PageHeroProps) => {
  return (
    <section
      className={cn('xl:pt-[180px] md:pt-42 sm:pt-36 pt-32', className)}
      aria-label="Page hero section"
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Hero content */}
        <div className="text-center space-y-2 pb-14 lg:pb-[72px]">
          <Reveal delay={0.1}>
            <div className="text-sm inline-block text-neutral-600 dark:text-neutral-400">
              <Link
                href="/"
                className="hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <span className="mx-2">-</span>
              <Link
                href={link || '/'}
                className="hover:text-primary transition-colors duration-300"
              >
                {title}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl">{heading}</h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default PageHero;

