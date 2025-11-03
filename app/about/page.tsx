"use client";

import latteImage from "@/assets/latte.jpg";
import { Reveal } from "@/components/animations";
import { SectionHeader } from "@/components/shared";
import ButtonLink from "components/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Heart,
  Leaf,
  Users,
  ShieldCheck,
  BookOpen,
  Check,
} from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We source only ceremonial grade matcha from Japan's most prestigious tea farms in Uji and Nishio.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    description:
      "Every batch is verified for authenticity and tested to meet traditional Japanese standards.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description:
      "Supporting eco-friendly farming methods and sustainable tea cultivation for future generations.",
  },
  {
    icon: Heart,
    title: "Passion for Tea",
    description:
      "Our love for matcha drives us to share the finest Japanese tea culture with the world.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our tea specialists provide personalized recommendations and brewing techniques.",
  },
  {
    icon: BookOpen,
    title: "Tea Education",
    description:
      "We believe in educating our customers about matcha's rich history and health benefits.",
  },
];

const stats = [
  {
    number: "10+",
    label: "Years of Experience",
    description: "Serving matcha enthusiasts",
  },
  {
    number: "50+",
    label: "Tea Farm Partners",
    description: "Across Japan's tea regions",
  },
  {
    number: "1000+",
    label: "Happy Customers",
    description: "Worldwide matcha lovers",
  },
  {
    number: "100%",
    label: "Quality Guarantee",
    description: "On every purchase",
  },
];

const missions = [
  {
    icon: Leaf,
    title: "Preserve Tradition",
    description:
      "Honor and maintain the centuries-old Japanese tea ceremony traditions while making matcha accessible to modern enthusiasts.",
  },
  {
    icon: Heart,
    title: "Share Wellness",
    description:
      "Promote the health benefits of premium matcha and support healthier lifestyles through authentic Japanese tea.",
  },
  {
    icon: Users,
    title: "Build Community",
    description:
      "Create a global community of matcha lovers who appreciate quality, authenticity, and the art of tea.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Reveal delay={0.1}>
              <Badge variant="secondary" className="mb-3.5 md:mb-5">
                About Us
              </Badge>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                Crafting Authentic Matcha Experiences{" "}
                <span className="text-primary">Since 2014</span>
              </h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                Bringing the finest Japanese matcha tradition to tea lovers
                worldwide through direct partnerships with renowned tea farms in
                Uji, Kyoto, and beyond.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Image */}
            <div className="w-full lg:flex-1">
              <Reveal delay={0.2}>
                <div className="relative w-full max-w-[500px] h-[500px] rounded-3xl overflow-hidden mx-auto lg:mx-0">
                  <Image
                    src={latteImage}
                    alt="Premium matcha preparation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              </Reveal>
            </div>

            {/* Content */}
            <div className="w-full lg:flex-1 space-y-6">
              <Reveal delay={0.3}>
                <Badge variant="secondary" className="mb-3.5">
                  Our Story
                </Badge>
              </Reveal>
              <Reveal delay={0.4}>
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  A Journey to{" "}
                  <span className="text-primary">Authentic Matcha</span>
                </h2>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="space-y-4 text-neutral-600 dark:text-neutral-400">
                  <p>
                    Our story began over a decade ago when our founder traveled
                    to Uji, Kyoto—the birthplace of Japanese green tea. Amazed
                    by the vibrant color, delicate sweetness, and rich umami of
                    authentic ceremonial matcha, a vision was born: to share
                    this exceptional tea with the world.
                  </p>
                  <p>
                    Through years of building relationships with traditional tea
                    farmers and masters, we've established direct partnerships
                    with some of Japan's most respected tea estates. These
                    connections ensure that every batch of our matcha meets the
                    highest standards of quality and authenticity.
                  </p>
                  <p>
                    Today, we're proud to be a trusted source for premium
                    Japanese matcha, committed to educating our customers about
                    tea culture while delivering an unparalleled matcha
                    experience.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            badge="Our Mission"
            title="What Drives"
            titleHighlight="Our Purpose"
            description="We're dedicated to three core principles that guide everything we do"
            align="center"
          />

          <Reveal delay={0.5}>
            <div className="grid md:grid-cols-3 gap-8">
              {missions.map((mission, index) => {
                const Icon = mission.icon;
                return (
                  <div
                    key={index}
                    className="bg-neutral-50 dark:bg-neutral-900 rounded-3xl p-8 space-y-4 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {mission.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {mission.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-neutral-50 dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader
            badge="Why Choose Us"
            title="What Makes Us"
            titleHighlight="Different"
            description="Our commitment to quality and authenticity sets us apart"
            align="center"
          />

          <Reveal delay={0.5}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-neutral-800 rounded-2xl p-6 space-y-4"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-spacing bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-5">
          <Reveal delay={0.3}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl p-8 text-center space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-black text-primary">
                    {stat.number}
                  </div>
                  <div className="text-lg font-bold text-neutral-900 dark:text-white">
                    {stat.label}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="2xl:max-w-[1440px] xl:max-w-[1270px] max-w-[1140px] mx-auto xl:px-0 px-5">
          <div className="z-10 md:rounded-[32px] rounded-[20px] bg-primary overflow-hidden md:px-[42px] px-5 sm:px-8 py-14 md:py-[72px] relative">
            {/* Background gradient */}
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
                        Start Your Journey
                      </Badge>
                    </Reveal>
                    <div className="space-y-3">
                      <Reveal delay={0.3}>
                        <h2 className="text-white text-3xl font-bold md:text-4xl lg:text-5xl">
                          Experience the finest{" "}
                          <span className="text-white">Japanese matcha</span>
                        </h2>
                      </Reveal>
                      <Reveal delay={0.4}>
                        <p className="text-white/80">
                          Discover our curated collection of premium ceremonial
                          grade matcha, carefully selected from Japan's most
                          renowned tea farms.
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
                        Explore Our Collection
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
                          Direct sourcing from Uji, Kyoto's finest tea estates
                        </p>
                      </li>
                    </Reveal>

                    <Reveal delay={0.7}>
                      <li className="flex items-center gap-3">
                        <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                          <Check className="size-4 text-white" strokeWidth={3} />
                        </span>
                        <p className="text-white/80">
                          Ceremonial grade quality in every batch
                        </p>
                      </li>
                    </Reveal>

                    <Reveal delay={0.8}>
                      <li className="flex items-center gap-3">
                        <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                          <Check className="size-4 text-white" strokeWidth={3} />
                        </span>
                        <p className="text-white/80">
                          Expert guidance on brewing and selection
                        </p>
                      </li>
                    </Reveal>

                    <Reveal delay={0.9}>
                      <li className="flex items-center gap-3">
                        <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                          <Check className="size-4 text-white" strokeWidth={3} />
                        </span>
                        <p className="text-white/80">
                          Sustainable and ethical tea farming practices
                        </p>
                      </li>
                    </Reveal>

                    <Reveal delay={1.0}>
                      <li className="flex items-center gap-3">
                        <span className="size-6 flex items-center justify-center bg-white/20 backdrop-blur-[15px] rounded-full shrink-0">
                          <Check className="size-4 text-white" strokeWidth={3} />
                        </span>
                        <p className="text-white/80">
                          100% satisfaction guarantee on all products
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
    </>
  );
}

