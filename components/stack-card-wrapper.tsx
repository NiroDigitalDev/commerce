'use client';

import { useEffect, useRef, useState } from 'react';

interface StackCardWrapperProps {
  children: React.ReactNode;
  topOffset?: string;
  gap?: string;
  initDelay?: number;
  className?: string;
}

const StackCardWrapper = ({
  children,
  topOffset = '15vh',
  gap = '24px',
  initDelay = 100,
  className = ''
}: StackCardWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, initDelay);

    return () => clearTimeout(timer);
  }, [initDelay]);

  useEffect(() => {
    if (!isReady || !wrapperRef.current) return;

    const cards = Array.from(wrapperRef.current.children) as HTMLElement[];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const wrapperTop = wrapperRef.current?.getBoundingClientRect().top || 0;
      const wrapperOffsetTop = scrollY + wrapperTop;

      cards.forEach((card, index) => {
        const cardTop = parseFloat(topOffset) * window.innerHeight / 100;
        const gapValue = parseFloat(gap);
        const cardOffset = cardTop + (index * gapValue);
        const scrollOffset = scrollY - wrapperOffsetTop + window.innerHeight;

        if (scrollOffset > cardOffset) {
          const scale = Math.max(0.9, 1 - (index * 0.03));
          const translateY = Math.max(0, (scrollOffset - cardOffset) * 0.15);
          
          card.style.transform = `scale(${scale}) translateY(-${translateY}px)`;
          card.style.position = 'sticky';
          card.style.top = `${cardTop}px`;
        } else {
          card.style.transform = 'scale(1) translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isReady, topOffset, gap]);

  return (
    <div ref={wrapperRef} className={`space-y-6 ${className}`}>
      {children}
    </div>
  );
};

export default StackCardWrapper;

