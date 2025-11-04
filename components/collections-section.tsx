'use client';

import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import ButtonLink from "components/button-link";
import type { Collection } from "lib/shopify/types";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CollectionsSectionProps {
  collections: Collection[];
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

const CollectionsSection = ({ collections }: CollectionsSectionProps) => {
  // Filter out "All" collection and hidden collections, take first 6
  const displayCollections = collections
    .filter(
      (collection) =>
        collection.handle !== "" && !collection.handle.startsWith("hidden")
    )
    .slice(0, 6);

  if (!displayCollections?.length) return null;

  const headerDelay = useResponsiveDelay(0.3);
  const buttonDelay = useResponsiveDelay(0.8);

  // Grid size classes for bento layout
  const gridSizeClasses = [
    "collection-card-hero", // Hero - Large square (2x2)
    "collection-card-tall", // Tall vertical (1x2)
    "collection-card-small", // Small square (1x1)
    "collection-card-tall", // Tall vertical (1x2)
    "collection-card-wide", // Wide (2x1)
    "collection-card-small", // Small square (1x1)
  ];

  // Gradient class names (defined in collections.css)
  const gradientClasses = [
    "collection-gradient-1",
    "collection-gradient-2",
    "collection-gradient-3",
    "collection-gradient-4",
    "collection-gradient-5",
    "collection-gradient-6",
  ];

  return (
    <section
      className="section-wrapper section-bg-gray"
      aria-label="Collections"
    >
      <div className="section-container">
        <SectionHeader
          badge="Shop by Category"
          title="Explore Our"
          titleHighlight="Collections"
          description="Discover our curated collections, each carefully selected to bring you the finest matcha experiences."
          delay={headerDelay}
        />

        {/* Responsive Bento Grid - Works on all screen sizes */}
        <div className="collection-grid">
          {displayCollections.map((collection, index) => {
            const isHero = index === 0;
            return (
              <Reveal
                delay={useResponsiveDelay(0.1 * index)}
                direction="up"
                key={collection.handle}
                className={gridSizeClasses[index]}
              >
                <Link
                  href={collection.path}
                  className={`group collection-card ${gradientClasses[index]}`}
                >
                  {/* Gradient overlay */}
                  <div className="collection-card-overlay" />

                  {/* Decorative circle blur */}
                  <div className="collection-card-blur" />

                  <div className="collection-card-content">
                    <div>
                      <div className="collection-card-badge">
                        <span className="collection-card-badge-text">
                          Collection
                        </span>
                      </div>
                      <h3
                        className={`collection-card-title ${isHero ? "collection-card-title-hero md:collection-card-title-hero" : "collection-card-title-regular"}`}
                      >
                        {collection.title}
                      </h3>
                      {collection.description && (
                        <p
                          className={`collection-card-description ${isHero ? "collection-card-description-hero md:collection-card-description-hero" : "collection-card-description-regular"}`}
                        >
                          {collection.description}
                        </p>
                      )}
                    </div>
                    <div className="collection-card-action">
                      <span className="collection-card-action-text">
                        Shop Now
                      </span>
                      <svg
                        className="collection-card-arrow"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={buttonDelay}>
          <div className="section-actions">
            <ButtonLink
              href="/shop"
              size="lg"
              className="mx-auto w-full md:mx-0 md:w-auto"
              aria-label="View all collections"
            >
              View All Collections
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CollectionsSection;
