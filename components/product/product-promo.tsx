"use client";

import promoImage from "@/assets/promo.png";
import { Reveal } from "@/components/animations";
import ButtonLink from "components/button-link";
import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
  {
    value: "137x",
    label: "More antioxidants than green tea",
  },
  {
    value: "70mg",
    label: "Natural caffeine - sustained energy without jitters",
  },
  {
    value: "100%",
    label: "Ceremonial grade matcha",
  },
  {
    value: "1",
    label: "Bowl of matcha = 10 cups of green tea benefits",
  },
  {
    value: "0",
    label: "No added sugars, preservatives, or artificial flavors",
  },
  {
    value: "100%",
    label: "Organic, stone-ground powder",
  },
];

export function ProductPromo() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="product-promo-section">
      <div className="product-promo-grid">
        <div 
          className="product-promo-content product-promo-content-mobile"
          style={isMobile ? {
            backgroundImage: `url(${promoImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          } : {}}
        >
          <div className="product-promo-inner">
            <Reveal delay={0.2} direction="up">
              <div className="product-promo-header">
                <h2 className="product-promo-title">
                  This is{" "}
                  <span className="product-promo-highlight">ceremonial</span>{" "}
                  grade matcha. Not just tea.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up">
              <div className="product-promo-description">
                <p>Ancient Japanese tradition meets modern wellness.</p>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="up">
              <div className="product-promo-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="product-promo-stat">
                    <div className="product-promo-stat-value">
                      <p>{stat.value}</p>
                    </div>
                    <p className="product-promo-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5} direction="up">
              <div className="product-promo-cta">
                <ButtonLink
                  href="/pages/health-benefits"
                  variant="primary"
                  className="hero-button product-promo-button"
                >
                  See all health benefits
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="product-promo-image-container md:block hidden">
          <Reveal delay={0.2} direction="up">
            <div className="product-promo-image-wrapper">
              <Image
                src={promoImage}
                alt="Matcha promotion"
                fill
                className="product-promo-image"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
