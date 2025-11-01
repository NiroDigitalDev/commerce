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
        <div className="mb-14 space-y-3 text-center md:mb-[70px]">
          <Reveal delay={0.1}>
            <Badge variant="secondary" className="mb-3.5 md:mb-5">
              FAQ
            </Badge>
          </Reveal>
          <Reveal delay={0.2}>
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Commonly <span className="text-primary inline-block">asked</span>{" "}
              questions
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mx-auto text-neutral-500 dark:text-neutral-400 lg:max-w-[620px]">
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
            className="mx-auto w-full max-w-[850px] space-y-4"
            defaultValue="1"
          >
            {faqItems.map((item) => (
              <AccordionItem
                className="rounded-[20px] bg-white px-6 dark:bg-neutral-800 sm:px-8"
                key={item.id}
                value={item.id.toString()}
              >
                <AccordionTrigger className="text-left text-base font-normal text-neutral-900 dark:text-neutral-100 sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 dark:text-neutral-400">
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
