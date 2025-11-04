'use client';

import { Reveal } from '@/components/animations';
import { SectionHeader } from '@/components/shared';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ButtonLink from 'components/button-link';
import ProductCard from 'components/product-card';
import type { Product } from 'lib/shopify/types';
import { useEffect, useState } from 'react';

interface ProductsSectionProps {
  products: Product[];
}

// Hook to adjust delays for mobile (20% faster)
const useResponsiveDelay = (delay: number): number => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? delay * 0.8 : delay;
};

const ProductsSection = ({ products }: ProductsSectionProps) => {
  if (!products?.length) return null;

  const displayProducts = products.slice(0, 6);
  const headerDelay = useResponsiveDelay(0.3);
  const getItemDelay = (index: number) => useResponsiveDelay(0.1 * index);
  const buttonDelay = useResponsiveDelay(1.2);

  return (
    <section
      className="section-wrapper section-bg-white"
      aria-label="Featured products"
    >
      <div className="section-container">
        <SectionHeader
          badge="Matcha Collection"
          title="Premium"
          titleHighlight="Matcha Selection"
          description="Explore our handpicked collection of authentic Japanese matcha, sourced directly from renowned tea farms in Japan. Each grade is carefully selected for its unique flavor profile and ceremonial quality."
          delay={headerDelay}
        />
        
        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid section-grid section-grid-3">
          {displayProducts.map((product, index) => (
            <Reveal delay={0.1 * index} direction="up" key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        {/* Mobile Carousel - Hidden on desktop */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full px-4"
          >
            <CarouselContent>
              {displayProducts.map((product, index) => (
                <CarouselItem key={product.id} className="basis-full">
                  <Reveal delay={useResponsiveDelay(0.1 * index)} direction="up">
                    <div className="scale-95 sm:scale-100">
                      <ProductCard product={product} />
                    </div>
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        <Reveal delay={buttonDelay}>
          <div className="section-actions">
            <ButtonLink
              href="/shop"
              size="lg"
              className="mx-auto w-full md:mx-0 md:w-auto"
              aria-label="View all matcha products"
            >
              View All Matcha
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProductsSection;

