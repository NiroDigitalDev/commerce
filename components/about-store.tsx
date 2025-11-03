"use client";

import { Reveal } from "@/components/animations";
import ButtonLink from "components/button-link";
import { Badge } from "components/ui/badge";
import { Check } from "lucide-react";

const AboutStore = () => {
  return (
    <section className="section-spacing">
      <div className="2xl:max-w-[1440px] xl:max-w-[1270px] max-w-[1140px] mx-auto xl:px-0 px-5">
        <div className="z-10 md:rounded-[32px] rounded-[20px] bg-primary overflow-hidden md:px-[42px] px-5 sm:px-8 py-14 md:py-[72px] relative">
          {/* bg gradient */}
          <Reveal delay={0.7} distance={100} direction="right">
            <div className="absolute -z-10 xl:-top-[142%] md:-top-[110%] -top-[125%] -right-[15%] xl:-right-[39%] md:-right-[20%] md:rotate-[68deg] rotate-[10deg] size-[1060px] select-none pointer-events-none opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full blur-3xl" />
            </div>
          </Reveal>

          <div className="grid grid-cols-12 items-center xl:gap-[115px] gap-y-8 md:gap-y-14">
            <div className="col-span-12 xl:col-span-6">
              <div className="max-w-[508px] xl:mx-0 mx-auto space-y-8 md:space-y-14 xl:text-left text-center">
                <div className="space-y-5">
                  <Reveal delay={0.2}>
                    <Badge variant="secondary" className="mb-3.5 md:mb-5">
                      About Us
                    </Badge>
                  </Reveal>
                  <div className="space-y-3">
                    <Reveal delay={0.3}>
                      <h2 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
                        Your trusted source for{" "}
                        <span className="text-primary">premium matcha</span>
                      </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                      <p className="text-white/80">
                        We're committed to bringing you the finest Japanese
                        matcha with exceptional quality and service. Every batch
                        is carefully selected to ensure authentic taste and
                        traditional quality.
                      </p>
                    </Reveal>
                  </div>
                </div>
                <Reveal delay={0.5}>
                  <div>
                    <ButtonLink
                      href="/shop"
                      size="lg"
                      className="w-full md:w-auto bg-white text-primary hover:bg-white/90 border-white"
                    >
                      Shop Matcha
                    </ButtonLink>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="col-span-12 xl:col-span-6">
              <div className="flex flex-col items-center xl:items-start">
                <ul className="space-y-5">
                  <Reveal delay={0.6}>
                    <li className="flex items-center gap-3">
                      <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                        <Check className="size-4 text-white" strokeWidth={3} />
                      </span>
                      <p className="text-white/80">
                        Authentic ceremonial grade matcha sourced from Japan's
                        finest tea farms
                      </p>
                    </li>
                  </Reveal>

                  <Reveal delay={0.7}>
                    <li className="flex items-center gap-3">
                      <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                        <Check className="size-4 text-white" strokeWidth={3} />
                      </span>
                      <p className="text-white/80">
                        Fresh matcha delivered with care and proper storage
                        methods
                      </p>
                    </li>
                  </Reveal>

                  <Reveal delay={0.8}>
                    <li className="flex items-center gap-3">
                      <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                        <Check className="size-4 text-white" strokeWidth={3} />
                      </span>
                      <p className="text-white/80">
                        Expert guidance on matcha selection and brewing
                        techniques
                      </p>
                    </li>
                  </Reveal>

                  <Reveal delay={0.9}>
                    <li className="flex items-center gap-3">
                      <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                        <Check className="size-4 text-white" strokeWidth={3} />
                      </span>
                      <p className="text-white/80">
                        Quality guarantee on every matcha purchase
                      </p>
                    </li>
                  </Reveal>

                  <Reveal delay={1.0}>
                    <li className="flex items-center gap-3">
                      <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                        <Check className="size-4 text-white" strokeWidth={3} />
                      </span>
                      <p className="text-white/80">
                        Exclusive access to limited edition matcha collections
                      </p>
                    </li>
                  </Reveal>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStore;
