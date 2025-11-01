"use client";

import latteImage from "@/assets/latte.jpg";
import { Reveal } from "@/components/animations";
import { Badge } from "components/ui/badge";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className="section-spacing relative">
      <div className="relative z-20 mx-auto max-w-7xl px-5">
        <div className="flex flex-col lg:flex-row items-start gap-y-24 gap-x-[140px]">
          {/* Image on the left */}
          <div className="w-full lg:flex-1 lg:max-w-full">
            <Reveal delay={0.1}>
              <div className="relative w-full max-w-[400px] h-[500px] rounded-[20px] overflow-hidden bg-neutral-200 mx-auto lg:mx-0">
                <Image
                  src={latteImage}
                  alt="Matcha latte"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </Reveal>
          </div>

          {/* Sticky content on the right */}
          <div className="w-full lg:flex-1 lg:sticky lg:top-1/2 lg:-translate-y-1/2 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left flex flex-col justify-center lg:pt-8">
            <Reveal delay={0.2}>
              <Badge variant="secondary" className="mb-5">
                Our Mission
              </Badge>
            </Reveal>
            <div className="space-y-3 md:max-w-[540px]">
              <Reveal delay={0.3}>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">
                  Bringing authentic Japanese{" "}
                  <span className="text-primary">matcha</span> to your cup
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-white/90">
                  We source the finest ceremonial grade matcha directly from
                  Japan's renowned tea farms, ensuring every cup delivers the
                  authentic taste and health benefits of premium matcha.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
