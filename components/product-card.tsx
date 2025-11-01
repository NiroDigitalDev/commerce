"use client";

import { cn } from "@/lib/utils";
import ButtonLink from "components/button-link";
import { Badge } from "components/ui/badge";
import type { Product } from "lib/shopify/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const price = product.priceRange.minVariantPrice;
  const maxPrice = product.priceRange.maxVariantPrice;
  const hasMultiplePrices = price.amount !== maxPrice.amount;

  return (
    <article>
      <div className={cn("product-card", className)}>
        <Link href={`/product/${product.handle}`} className="block">
          <figure className="product-card-image relative">
            <Image
              src={product.featuredImage.url}
              width={409}
              height={409}
              alt={product.featuredImage.altText || product.title}
              loading="lazy"
              className="h-full w-full object-contain"
              style={{ objectFit: "contain" }}
            />
          </figure>
        </Link>
        <div className="product-card-header">
          {product.tags && product.tags.length > 0 && (
            <Badge variant="secondary" className="product-card-badge">
              {product.tags[0]}
            </Badge>
          )}
          <span
            className={cn(
              "product-card-availability",
              product.availableForSale ? "in-stock" : "out-of-stock"
            )}
          >
            {product.availableForSale ? "In Stock" : "Out of Stock"}
          </span>
        </div>
        <div className="product-card-content">
          <div className="mb-4">
            <h3 className="product-card-title">
              <Link
                href={`/product/${product.handle}`}
                aria-label={`View ${product.title}`}
              >
                {product.title}
              </Link>
            </h3>
            <p className="product-card-description">{product.description}</p>
          </div>
          <div className="product-card-footer">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <p className="product-card-price">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </p>
                {hasMultiplePrices && (
                  <p className="product-card-price-range">
                    Up to {maxPrice.currencyCode}{" "}
                    {parseFloat(maxPrice.amount).toFixed(2)}
                  </p>
                )}
              </div>
              <div className="w-1/2">
                <ButtonLink
                  href={`/product/${product.handle}`}
                  variant="primary"
                  className="w-full"
                  aria-label={`Add ${product.title} to cart`}
                >
                  Add to Cart
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
