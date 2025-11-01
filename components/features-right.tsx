"use client";

import { Reveal } from "@/components/animations";
import ButtonLink from "components/button-link";
import StackCardItem from "components/stack-card-item";
import StackCardWrapper from "components/stack-card-wrapper";
import { Badge } from "components/ui/badge";
import { Award, RefreshCcw, Star, TrendingUp } from "lucide-react";

const FeaturesRight = () => {
  return (
    <section className="section-spacing">
      <div className="bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-y-24 gap-x-[140px]">
            <div className="w-full lg:flex-1 lg:sticky lg:top-28 lg:max-w-full max-w-[520px] lg:mx-0 mx-auto text-center lg:text-left">
              <Reveal delay={0.2}>
                <Badge variant="secondary" className="mb-5">
                  Quality Promise
                </Badge>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="mb-3 max-w-[529px] text-3xl font-bold md:text-4xl lg:text-5xl">
                  Our commitment to{" "}
                  <span className="text-primary">excellence</span>
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="mb-7 lg:max-w-[620px] text-neutral-600 dark:text-neutral-400">
                  We stand behind every product we sell with our quality
                  guarantee and exceptional customer service.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <div>
                  <ButtonLink
                    href="/search"
                    size="lg"
                    className="w-[85%] md:w-auto mx-auto"
                  >
                    Learn More
                  </ButtonLink>
                </div>
              </Reveal>
            </div>

            <StackCardWrapper
              topOffset="15vh"
              gap="24px"
              initDelay={100}
              className="w-full lg:flex-1 lg:max-w-full md:max-w-[50%] sm:max-w-[60%] lg:mx-0 mx-auto max-w-full"
            >
              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full">
                  <div className="bg-white dark:bg-neutral-800 rounded-[20px] border border-neutral-200 dark:border-neutral-700 shadow-lg transition-transform duration-500 hover:scale-[102%] p-8 min-h-[200px] flex items-center relative overflow-hidden">
                    <div className="flex items-start gap-5 w-full relative z-10">
                      <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0 ring-4 ring-primary/5 dark:ring-primary/10 relative">
                        <TrendingUp className="size-7 text-primary relative z-10" />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <h5 className="text-xl font-semibold">
                          Trending Products
                        </h5>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          Stay ahead with the latest trends and most popular
                          items.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StackCardItem>

              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full">
                  <div className="bg-white dark:bg-neutral-800 rounded-[20px] border border-neutral-200 dark:border-neutral-700 shadow-lg transition-transform duration-500 hover:scale-[102%] p-8 min-h-[200px] flex items-center relative overflow-hidden">
                    <div className="flex items-start gap-5 w-full relative z-10">
                      <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0 ring-4 ring-primary/5 dark:ring-primary/10 relative">
                        <Award className="size-7 text-primary relative z-10" />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <h5 className="text-xl font-semibold">Award Winning</h5>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          Recognized for our outstanding service and product
                          quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StackCardItem>

              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full">
                  <div className="bg-white dark:bg-neutral-800 rounded-[20px] border border-neutral-200 dark:border-neutral-700 shadow-lg transition-transform duration-500 hover:scale-[102%] p-8 min-h-[200px] flex items-center relative overflow-hidden">
                    <div className="flex items-start gap-5 w-full relative z-10">
                      <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0 ring-4 ring-primary/5 dark:ring-primary/10 relative">
                        <RefreshCcw className="size-7 text-primary relative z-10" />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <h5 className="text-xl font-semibold">Easy Returns</h5>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          Not satisfied? We offer hassle-free returns within 30
                          days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StackCardItem>

              <StackCardItem>
                <div className="lg:max-w-[483px] max-w-full">
                  <div className="bg-white dark:bg-neutral-800 rounded-[20px] border border-neutral-200 dark:border-neutral-700 shadow-lg transition-transform duration-500 hover:scale-[102%] p-8 min-h-[200px] flex items-center relative overflow-hidden">
                    <div className="flex items-start gap-5 w-full relative z-10">
                      <div className="flex items-center justify-center size-14 rounded-full bg-primary/10 dark:bg-primary/20 shrink-0 ring-4 ring-primary/5 dark:ring-primary/10 relative">
                        <Star className="size-7 text-primary relative z-10" />
                      </div>
                      <div className="space-y-2.5 flex-1">
                        <h5 className="text-xl font-semibold">
                          5-Star Reviews
                        </h5>
                        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          Join thousands of satisfied customers who love our
                          products.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StackCardItem>
            </StackCardWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesRight;
