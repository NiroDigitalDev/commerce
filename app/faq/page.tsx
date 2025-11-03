"use client";

import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import ButtonLink from "components/button-link";
import {
  CreditCard,
  Globe,
  Mail,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", name: "All Questions", icon: Sparkles },
  { id: "products", name: "Products", icon: Package },
  { id: "shipping", name: "Shipping", icon: Truck },
  { id: "legal", name: "Legal", icon: ShieldCheck },
  { id: "payment", name: "Payment", icon: CreditCard },
  { id: "general", name: "General", icon: Globe },
];

const faqs = [
  {
    id: 1,
    category: "shipping",
    question: "How long does shipping take?",
    answer:
      "We offer fast shipping. Most orders arrive within 3-5 business days. Express shipping options are available for urgent orders, typically arriving within 1-2 business days.",
    popular: true,
  },
  {
    id: 2,
    category: "products",
    question: "What is your product quality guarantee?",
    answer:
      "All our products are carefully curated and quality-checked. We stand behind every item we sell and offer a satisfaction guarantee on all purchases.",
    popular: true,
  },
  {
    id: 3,
    category: "general",
    question: "What's your return policy?",
    answer:
      "We offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact our support team for assistance. Unopened products can be returned for a full refund within 30 days.",
    popular: true,
  },
  {
    id: 4,
    category: "payment",
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit cards (Visa, Mastercard, American Express), PayPal, and other secure payment options for your convenience.",
    popular: false,
  },
  {
    id: 5,
    category: "shipping",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally to most countries. Shipping costs and delivery times vary by location. Check our shipping page for the full list of supported regions and rates.",
    popular: false,
  },
  {
    id: 6,
    category: "products",
    question: "How do I choose the right product?",
    answer:
      "Each product page includes detailed descriptions, specifications, and customer reviews to help you make an informed decision. Feel free to contact our customer service team if you need personalized recommendations.",
    popular: false,
  },
  {
    id: 7,
    category: "products",
    question: "How should I care for my products?",
    answer:
      "Care instructions are included with each product. Generally, follow the label instructions and store items properly to ensure longevity. Contact us for specific product care questions.",
    popular: false,
  },
  {
    id: 8,
    category: "shipping",
    question: "Can I track my order?",
    answer:
      "Yes! Once your order ships, you'll receive a tracking number via email. You can use this to track your package in real-time through our website or the courier's tracking portal.",
    popular: false,
  },
  {
    id: 9,
    category: "payment",
    question: "Do you offer bulk discounts?",
    answer:
      "Yes! We offer tiered discounts for bulk orders. The more you buy, the more you save. Contact our customer service team for custom bulk order quotes and special wholesale pricing.",
    popular: false,
  },
  {
    id: 10,
    category: "legal",
    question: "How do you protect my personal information?",
    answer:
      "We take data security seriously. All transactions are encrypted using SSL technology. We never share your personal information with third parties. See our Privacy Policy for complete details.",
    popular: false,
  },
  {
    id: 11,
    category: "general",
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email, phone, or live chat. We typically respond within 24 hours on business days. Check our Contact page for all available support channels.",
    popular: false,
  },
  {
    id: 12,
    category: "payment",
    question: "Is it safe to shop on your website?",
    answer:
      "Absolutely! Our website uses industry-standard SSL encryption to protect your data. We're PCI-DSS compliant and use secure payment gateways to process all transactions safely.",
    popular: false,
  },
  {
    id: 13,
    category: "shipping",
    question: "What if my order arrives damaged?",
    answer:
      "If your order arrives damaged, please contact us immediately with photos of the damage. We'll arrange for a replacement or refund as quickly as possible at no additional cost to you.",
    popular: false,
  },
  {
    id: 14,
    category: "general",
    question: "Do you have a newsletter?",
    answer:
      "Yes! Subscribe to our newsletter to receive exclusive offers, new product announcements, and helpful tips. You can sign up at the bottom of any page on our website.",
    popular: false,
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* FAQ Section */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked"
            titleHighlight="Questions"
            description="Find instant answers to the most common questions about our products, shipping, and policies"
            align="center"
          />

          {/* Search Bar */}
          <Reveal delay={0.4}>
            <div className="mb-10 mx-auto max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-[52px] pr-4"
                />
              </div>
            </div>
          </Reveal>

          {/* Category Pills */}
          <Reveal delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      group flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm
                      transition-all duration-300 hover:scale-105
                      ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-primary"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* FAQ Accordion */}
          <Reveal delay={0.7}>
            <div className="mx-auto max-w-[850px]">
              {filteredFaqs.length > 0 ? (
                <Accordion
                  type="single"
                  collapsible
                  className="space-y-4"
                  defaultValue="1"
                >
                  {filteredFaqs.map((item) => (
                    <AccordionItem
                      id={`faq-${item.id}`}
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
              ) : (
                <div className="text-center py-12">
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg">
                    No questions found matching your search.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal delay={0.3}>
            <div className="rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                Still Need Help?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is ready to
                assist you.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <ButtonLink href="/contact" variant="primary" size="lg">
                  Contact Support
                </ButtonLink>
                <ButtonLink
                  href="/policies/privacy-policy"
                  variant="accent"
                  size="lg"
                >
                  View Policies
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
