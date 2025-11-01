"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const PageBackgroundWrapper = () => {
  const [bgColor, setBgColor] = useState("var(--bg-color-neutral)");
  const [blurAmount, setBlurAmount] = useState(0);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      // Find the CollectionsSection by its aria-label (comes after ProductsSection)
      const collectionsSection = document.querySelector(
        'section[aria-label="Collections"]'
      );
      // Find the AboutStore section
      const aboutStoreSection = document.querySelector(
        "section.section-spacing.bg-neutral-50"
      );

      let progress = 0;

      if (collectionsSection) {
        const rect = collectionsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        // Calculate how much of the section has been scrolled through
        // When section top is at viewport bottom, scrollProgress = 0
        // When section is 50% scrolled, scrollProgress = 0.5
        // When section bottom is at viewport top, scrollProgress = 1
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Start transition when 95% of Collections section has been scrolled
        const scrolledIntoView = windowHeight - sectionTop;
        const scrollProgress = scrolledIntoView / sectionHeight;

        // Two-phase transition:
        // Phase 1 (0-1): neutral-50 → matcha green
        // Phase 2 (1-2): matcha green → primary color
        const phase1Range = windowHeight * 1.5; // Matcha transition over 1.5 viewport heights
        const phase2Range = windowHeight * 3.0; // Primary transition over 3.0 viewport heights (slower)
        const totalRange = phase1Range + phase2Range;

        // Start transition at 95% scroll through Collections section
        if (scrollProgress >= 0.95) {
          const scrolledPast95Percent =
            (scrollProgress - 0.95) * sectionHeight + sectionHeight * 0.95;
          progress = Math.min(2, scrolledPast95Percent / (totalRange / 2)); // Progress goes 0 → 2
        } else {
          progress = 0;
        }

        progress = Math.max(0, Math.min(2, progress));
      } else {
        // Fallback: use scroll position relative to viewport
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 2;

        if (scrollY > triggerPoint) {
          const totalRange = windowHeight * 3;
          progress = Math.min(2, (scrollY - triggerPoint) / (totalRange / 2));
        }
      }

      // Get primary color from CSS variable
      const root = document.documentElement;
      const primaryColor = getComputedStyle(root)
        .getPropertyValue("--primary")
        .trim();

      // Convert oklch to rgb (simplified - assuming light mode primary is dark)
      // For oklch(0.205 0 0) = very dark gray/black ≈ rgb(33, 33, 33)
      // In dark mode oklch(0.922 0 0) = very light gray/white ≈ rgb(235, 235, 235)
      const isDark = root.classList.contains("dark");
      const primaryR = isDark ? 235 : 33;
      const primaryG = isDark ? 235 : 33;
      const primaryB = isDark ? 235 : 33;

      // Phase 1: neutral-50 → matcha green (progress 0 → 1)
      // Phase 2: matcha green → primary (progress 1 → 2)
      const neutralR = 250;
      const neutralG = 250;
      const neutralB = 249;

      const matchaR = 197; // #C5
      const matchaG = 213; // #D5
      const matchaB = 197; // #C5

      let r, g, b;

      if (progress <= 1) {
        // Phase 1: neutral → matcha
        const phase1Progress = progress;
        r = Math.round(neutralR + (matchaR - neutralR) * phase1Progress);
        g = Math.round(neutralG + (matchaG - neutralG) * phase1Progress);
        b = Math.round(neutralB + (matchaB - neutralB) * phase1Progress);
      } else {
        // Phase 2: matcha → primary
        const phase2Progress = progress - 1; // 0 to 1
        r = Math.round(matchaR + (primaryR - matchaR) * phase2Progress);
        g = Math.round(matchaG + (primaryG - matchaG) * phase2Progress);
        b = Math.round(matchaB + (primaryB - matchaB) * phase2Progress);
      }

      setBgColor(`rgb(${r}, ${g}, ${b})`);

      // Blur effect: increase blur during phase 1, decrease during phase 2
      let blurProgress = 0;
      if (progress <= 0.5) {
        // Increasing blur in first half of phase 1
        blurProgress = progress * 2;
      } else if (progress <= 1) {
        // Decreasing blur in second half of phase 1
        blurProgress = 1 - (progress - 0.5) * 2;
      } else {
        // No blur in phase 2
        blurProgress = 0;
      }
      setBlurAmount(blurProgress * 12);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="background-transition"
      style={{
        backgroundColor: bgColor,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
    />
  );
};

export default PageBackgroundWrapper;
