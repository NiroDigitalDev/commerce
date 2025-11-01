"use client";

import heroBg from "@/assets/minimalbg.png";
import { Reveal } from "@/components/animations";
import ButtonLink from "components/button-link";
import { Check, Package, Shield, Truck } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const heroHeight = sectionRef.current.offsetHeight;
        const heroTop = sectionRef.current.offsetTop;
        const scrollPosition = scrolled - heroTop;

        // Very subtle parallax: image moves slightly with scroll
        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${scrolled * 0.1}px)`;
        }

        // Hide hero background when scrolled past hero section
        // Calculate opacity based on scroll position
        const hideStart = heroHeight * 0.5; // Start hiding at 50% of hero height
        const hideEnd = heroHeight * 0.9; // Fully hidden after 90% of hero height

        let opacity = 1;
        if (scrollPosition > hideStart) {
          const progress = Math.min(
            1,
            (scrollPosition - hideStart) / (hideEnd - hideStart)
          );
          opacity = 1 - progress;
        }

        const appliedOpacity = Math.max(0, opacity);

        if (bgRef.current) {
          bgRef.current.style.opacity = appliedOpacity.toString();
        }

        if (contentRef.current) {
          contentRef.current.style.opacity = appliedOpacity.toString();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="hero-section">
      {/* Content - Fixed Position */}
      <div ref={contentRef} className="hero-content">
        <div className="hero-content-wrapper">
          <Reveal delay={0.2}>
            <h1 className="hero-title">
              Premium Japanese{" "}
              <span className="hero-title-highlight">Matcha Tea</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="hero-subtitle">
              Experience authentic ceremonial grade matcha sourced directly from
              Japan. Free shipping on orders over $50.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="hero-buttons">
              <ButtonLink
                href="/search"
                variant="primary"
                className="hero-button"
              >
                Shop Matcha
              </ButtonLink>
              <ButtonLink
                href="/search"
                variant="primary"
                className="hero-button"
              >
                Learn More
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="hero-features">
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Check />
                </div>
                <span className="hero-feature-text">Ceremonial Grade</span>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Package />
                </div>
                <span className="hero-feature-text">From Japan</span>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Shield />
                </div>
                <span className="hero-feature-text">100% Organic</span>
              </div>
              <div className="hero-feature">
                <div className="hero-feature-icon">
                  <Truck />
                </div>
                <span className="hero-feature-text">Free Shipping</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Background Image with Reverse Parallax - In Front */}
      <div
        ref={bgRef}
        className="hero-background"
        style={{
          backgroundImage: `url(${heroBg.src || heroBg})`,
          willChange: "transform",
        }}
      />
    </section>
  );
};

export default HeroSection;
