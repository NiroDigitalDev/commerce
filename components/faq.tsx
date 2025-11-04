"use client";

import { Reveal } from "@/components/animations";
import faqData from "@/data/json/faq/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/ui/accordion";
import { Badge } from "components/ui/badge";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const faqItems = faqData as FaqItem[];

  return (
    <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10 md:mb-14 space-y-3 text-center">
          <Reveal delay={0.1}>
            <Badge variant="secondary" className="mb-3.5 md:mb-5">
              FAQ
            </Badge>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-2xl sm:text-3xl font-bold md:text-4xl lg:text-5xl px-4">
              Commonly <span className="text-primary inline-block">asked</span>{" "}
              questions
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto text-neutral-500 dark:text-neutral-400 lg:max-w-[620px] text-sm md:text-base px-4">
              Everything you need to know about our premium Japanese matcha,
              from sourcing to brewing and storage
            </p>
          </Reveal>
        </div>
      </div>
      <Reveal delay={0.4}>
        <div className="mx-auto max-w-7xl px-5">
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-[850px] space-y-3 md:space-y-4"
            defaultValue="1"
          >
            {faqItems.map((item) => (
              <AccordionItem
                className="rounded-[16px] md:rounded-[20px] bg-white px-4 sm:px-6 dark:bg-neutral-800 md:px-8"
                key={item.id}
                value={item.id.toString()}
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-normal text-neutral-900 dark:text-neutral-100 md:text-lg py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
};

Faq.displayName = "Faq";
export default Faq;
