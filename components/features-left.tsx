"use client";

import splashImage from "@/assets/splash.png";
import { Reveal } from "@/components/animations";
import ButtonLink from "components/button-link";
import { Badge } from "components/ui/badge";
import Image from "next/image";

const FeaturesLeft = () => {
  return (
    <section className="section-spacing pt-20 md:pt-24 lg:pt-80 relative">
      <div className="relative z-10 bg-transparent dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col lg:flex-row items-start gap-y-24 gap-x-[140px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-[20%] lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left flex flex-col justify-start">
              <Reveal delay={0.2}>
                <Badge variant="secondary" className="mb-5">
                  Matcha Excellence
                </Badge>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="mb-3 max-w-[529px] text-3xl font-bold md:text-4xl lg:text-5xl text-white">
                  Why choose our matcha?
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mb-7 lg:max-w-[620px] text-white/90">
                  Experience the finest Japanese matcha with our carefully
                  curated collection. Each batch is authenticated for purity,
                  freshness, and traditional quality.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <div>
                  <ButtonLink
                    href="/shop"
                    size="lg"
                    className="w-[85%] md:w-auto mx-auto"
                  >
                    Explore Matcha
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <div className="w-full lg:flex-1 lg:max-w-full">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Left Column */}
                <div className="flex flex-col gap-4 md:gap-6">
                  <Reveal delay={0.6} direction="up">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={splashImage}
                        alt="Premium matcha tea"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={0.8} direction="up">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={splashImage}
                        alt="Ceremonial grade matcha"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                  </Reveal>
                </div>

                {/* Right Column - Offset */}
                <div className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-12">
                  <Reveal delay={0.7} direction="up">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={splashImage}
                        alt="Japanese matcha collection"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                  </Reveal>
                  <Reveal delay={0.9} direction="up">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={splashImage}
                        alt="Authentic matcha tea"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 400px"
                      />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLeft;
