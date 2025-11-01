"use client";

import { Reveal } from "@/components/animations";
import { cn } from "@/lib/utils";
import NewsletterChecklist from "components/newsletter-checklist";
import NewsletterForm from "components/newsletter-form";
import { Badge } from "components/ui/badge";

interface NewsletterSectionProps {
  className?: string;
}

const NewsletterSection = ({ className }: NewsletterSectionProps) => {
  return (
    <section
      className={cn(
        "section-spacing bg-neutral-50 dark:bg-neutral-900",
        className
      )}
      aria-label="Newsletter subscription"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col items-center justify-between gap-8 xl:flex-row xl:gap-0">
          <div className="mx-3 max-w-[649px] space-y-3 text-center sm:mx-0 md:w-full xl:text-left">
            <Reveal delay={0.3}>
              <Badge variant="secondary" className="mb-3.5 md:mb-5">
                Newsletter
              </Badge>
            </Reveal>

            <div className="space-y-3">
              <Reveal delay={0.4}>
                <h2
                  className="text-3xl font-bold md:text-4xl lg:text-5xl"
                  aria-label="newsletter-heading"
                >
                  Stay updated with{" "}
                  <span className="text-primary">our latest news</span>
                </h2>
              </Reveal>
              <Reveal delay={0.5}>
                <p
                  aria-label="newsletter-description"
                  className="text-neutral-600 dark:text-neutral-400"
                >
                  Subscribe to our newsletter and be the first to know about new
                  products, exclusive deals, and special offers.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Newsletter form */}
          <div className="w-full max-w-[562px] space-y-6 lg:pl-9 xl:pl-[96px] mt-[40px] lg:mt-[67px]">
            <Reveal delay={0.4}>
              <NewsletterForm ctaBtnText="Subscribe" />
            </Reveal>
            <Reveal delay={0.5}>
              <NewsletterChecklist
                className="xl:justify-start gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-0"
                items={[
                  {
                    id: "1",
                    text: "No spam, unsubscribe anytime",
                  },
                  {
                    id: "2",
                    text: "Exclusive deals & offers",
                  },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
