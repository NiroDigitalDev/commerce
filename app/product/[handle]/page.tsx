import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import { GridTileImage } from "components/grid/tile";
import { Gallery } from "components/product/gallery";
import { ProductBenefits } from "components/product/product-benefits";
import { ProductProvider } from "components/product/product-context";
import { ProductDescription } from "components/product/product-description";
import { ProductPromo } from "components/product/product-promo";
import { ProductTestimonials } from "components/product/testimonials";
import { TextBanner } from "components/product/text-banner";
import ProductsSection from "components/products-section";
import { HIDDEN_PRODUCT_TAG } from "lib/constants";
import {
  getProduct,
  getProductRecommendations,
  getProducts,
} from "lib/shopify";
import { Image } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";

export async function generateMetadata(props: {
  params: Promise<{ handle: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable,
      },
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt,
            },
          ],
        }
      : null,
  };
}

export default async function ProductPage(props: {
  params: Promise<{ handle: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.featuredImage.url,
    offers: {
      "@type": "AggregateOffer",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      highPrice: product.priceRange.maxVariantPrice.amount,
      lowPrice: product.priceRange.minVariantPrice.amount,
    },
  };

  return (
    <ProductProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <section className="product-detail-section">
        <div className="product-detail-container">
          <Reveal delay={0.1} direction="up">
            <div className="product-detail-card">
              <div className="product-detail-image-wrapper">
                <Suspense
                  fallback={
                    <div className="relative aspect-square h-full max-h-[550px] w-full overflow-hidden" />
                  }
                >
                  <Gallery
                    images={product.images.slice(0, 5).map((image: Image) => ({
                      src: image.url,
                      altText: image.altText,
                    }))}
                  />
                </Suspense>
              </div>

              <div className="product-detail-content-wrapper">
                <Suspense fallback={null}>
                  <ProductDescription product={product} />
                </Suspense>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <ProductPromo />
      <BestSellers />

      <TextBanner
        texts={[
          "Free shipping on orders over $50",
          "30-day money-back guarantee",
          "Premium quality ingredients",
          "Scientifically proven benefits",
          "Sustainably sourced",
          "100% organic certified",
        ]}
        speed={25}
      />
      <ProductBenefits />
      <RelatedProducts id={product.id} />
      <ProductTestimonials />
    </ProductProvider>
  );
}

async function BestSellers() {
  const bestSellers = await getProducts({
    sortKey: "BEST_SELLING",
  });

  if (!bestSellers.length) return null;

  return <ProductsSection products={bestSellers.slice(0, 3)} />;
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <section className="section-wrapper section-bg-gray">
      <div className="section-container">
        <SectionHeader
          title="You May Also"
          titleHighlight="Like"
          description="Discover more premium products from our carefully curated collection"
          delay={0.2}
        />
        <Reveal delay={0.3} direction="up">
          <ul className="related-products-wrapper">
            {relatedProducts.map((product) => (
              <li key={product.handle} className="related-product-item">
                <Link
                  className="related-product-link"
                  href={`/product/${product.handle}`}
                  prefetch={true}
                >
                  <GridTileImage
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.priceRange.maxVariantPrice.amount,
                      currencyCode:
                        product.priceRange.maxVariantPrice.currencyCode,
                    }}
                    src={product.featuredImage?.url}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
