import { Reveal } from '@/components/animations';
import { SectionHeader } from '@/components/shared';
import ProductCard from 'components/product-card';
import ButtonLink from 'components/button-link';
import type { Product } from 'lib/shopify/types';

interface ProductsSectionProps {
  products: Product[];
}

const ProductsSection = ({ products }: ProductsSectionProps) => {
  if (!products?.length) return null;

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
          delay={0.3}
        />
        <div className="section-grid section-grid-3">
          {products.slice(0, 6).map((product, index) => (
            <Reveal delay={0.1 * index} direction="up" key={product.id}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={1.2}>
          <div className="section-actions">
            <ButtonLink
              href="/search"
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

