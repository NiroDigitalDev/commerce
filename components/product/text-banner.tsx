"use client";

import React from "react";

interface TextBannerProps {
  texts: string[];
  speed?: number; // Duration in seconds for one complete cycle
}

export function TextBanner({ texts, speed = 20 }: TextBannerProps) {
  // Duplicate texts to create seamless loop
  const duplicatedTexts = [...texts, ...texts];
  
  // Make ticker faster on mobile (reduce speed by 40%)
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const mobileSpeed = speed * 0.6; // 40% faster
  const animationSpeed = isMobile ? mobileSpeed : speed;

  return (
    <section className="text-banner-section">
      <div className="text-banner-container">
        <div className="text-banner-track" style={{ animationDuration: `${animationSpeed}s` }}>
          {duplicatedTexts.map((text, index) => (
            <div key={index} className="text-banner-item">
              <span className="text-banner-text">{text}</span>
              {index < duplicatedTexts.length - 1 && <span className="text-banner-separator">•</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

