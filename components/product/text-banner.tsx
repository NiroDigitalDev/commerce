"use client";

interface TextBannerProps {
  texts: string[];
  speed?: number; // Duration in seconds for one complete cycle
}

export function TextBanner({ texts, speed = 20 }: TextBannerProps) {
  // Duplicate texts to create seamless loop
  const duplicatedTexts = [...texts, ...texts];

  return (
    <section className="text-banner-section">
      <div className="text-banner-container">
        <div className="text-banner-track" style={{ animationDuration: `${speed}s` }}>
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

