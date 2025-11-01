"use client";

import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: string;
  name: string;
  videoUrl: string;
  thumbnail?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    videoUrl: "/assets/bgvideo.mp4",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    videoUrl: "/assets/bgvideo.mp4",
  },
  {
    id: "3",
    name: "Emily Johnson",
    videoUrl: "/assets/bgvideo.mp4",
  },
  {
    id: "4",
    name: "David Kim",
    videoUrl: "/assets/bgvideo.mp4",
  },
  {
    id: "5",
    name: "Jessica Martinez",
    videoUrl: "/assets/bgvideo.mp4",
  },
];

export function ProductTestimonials() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  useEffect(() => {
    // Play videos on hover
    if (hoveredId && videoRefs.current[hoveredId]) {
      videoRefs.current[hoveredId]?.play();
    }

    // Pause videos when not hovered
    Object.keys(videoRefs.current).forEach((id) => {
      if (id !== hoveredId && videoRefs.current[id]) {
        videoRefs.current[id]?.pause();
        if (videoRefs.current[id]) {
          videoRefs.current[id]!.currentTime = 0;
        }
      }
    });
  }, [hoveredId]);

  const getTransformStyle = (index: number) => {
    // Base offsets from center: -480px, -240px, 0, 240px, 480px (desktop)
    // Base offsets adjust via CSS media queries for tablet
    const baseOffsets = [-480, -240, 0, 240, 480];
    const baseOffset = baseOffsets[index] ?? 0;
    const baseTransform = `translateX(calc(-50% + ${baseOffset}px))`;

    if (!hoveredId) {
      return {
        transform: baseTransform,
      };
    }

    const hoveredIndex = testimonials.findIndex((t) => t.id === hoveredId);
    const currentIndex = index;

    // Hovered video stays in place and scales
    if (currentIndex === hoveredIndex) {
      return {
        transform: `${baseTransform} scale(1.05)`,
      };
    }

    // Move videos to the left if they're before the hovered one
    if (currentIndex < hoveredIndex) {
      const offset = (hoveredIndex - currentIndex) * 120;
      return {
        transform: `translateX(calc(-50% + ${baseOffset - offset}px))`,
      };
    }

    // Move videos to the right if they're after the hovered one
    if (currentIndex > hoveredIndex) {
      const offset = (currentIndex - hoveredIndex) * 120;
      return {
        transform: `translateX(calc(-50% + ${baseOffset + offset}px))`,
      };
    }

    return {
      transform: baseTransform,
    };
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <SectionHeader
          title="What Our"
          titleHighlight="Customers Say"
          description="Real stories from real people who love our products"
          delay={0.2}
        />
        <Reveal delay={0.3} direction="up">
          <div className="testimonials-videos-wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-video-container ${
                  hoveredId === testimonial.id ? "hovered" : ""
                } ${hoveredId && hoveredId !== testimonial.id ? "other-hovered" : ""}`}
                onMouseEnter={() => setHoveredId(testimonial.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  zIndex: hoveredId === testimonial.id ? 50 : testimonials.length - index,
                  ...getTransformStyle(index),
                }}
              >
                <div className="testimonial-video-wrapper">
                  <video
                    ref={(el) => {
                      videoRefs.current[testimonial.id] = el;
                    }}
                    src={testimonial.videoUrl}
                    className="testimonial-video"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                  <div className="testimonial-overlay">
                    <div className="testimonial-info">
                      <h3 className="testimonial-name">{testimonial.name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

