"use client";

import { Reveal } from "@/components/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import blogData from "@/data/json/blog/blogs.json";
import BlogCardV1, { IBlogPost } from "components/blog-card-v1";
import ButtonLink from "components/button-link";
import { Badge } from "components/ui/badge";
import { useEffect, useState } from "react";

const blogs: IBlogPost[] = blogData.slice(0, 3) as IBlogPost[];

// Hook to adjust delays for mobile (20% faster)
const useResponsiveDelay = (delay: number): number => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? delay * 0.8 : delay;
};

const Blog = () => {
  const badgeDelay = useResponsiveDelay(0.3);
  const titleDelay = useResponsiveDelay(0.4);
  const descDelay = useResponsiveDelay(0.5);
  const buttonDelay = useResponsiveDelay(0.9);
  return (
    <section
      className="bg-neutral-50 dark:bg-neutral-900 py-12 md:py-16 lg:py-20"
      aria-label="Blog posts and insights"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center md:mb-[70px]">
          <Reveal delay={badgeDelay}>
            <Badge variant="secondary" className="mb-3.5 md:mb-5">
              Blog
            </Badge>
          </Reveal>
          <Reveal delay={titleDelay}>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our recent{" "}
              <span className="text-primary inline-block">
                news &amp; insights
              </span>
            </h2>
          </Reveal>
          <Reveal delay={descDelay}>
            <p className="mx-auto max-w-[738px] text-neutral-600 dark:text-neutral-400">
              Our recent news and insights highlight the latest developments,
              achievements, and thought leadership shaping our journey forward.
              From product innovations and strategic partnerships to industry
              trends
            </p>
          </Reveal>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <Reveal delay={0.1 * index} direction="up" key={blog.slug}>
              <div>
                <BlogCardV1 blog={blog} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Mobile Carousel - Visible only on mobile */}
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full px-2"
          >
            <CarouselContent>
              {blogs.map((blog, index) => (
                <CarouselItem key={blog.slug} className="basis-[90%]">
                  <Reveal delay={useResponsiveDelay(0.1 * index)} direction="up">
                    <BlogCardV1 blog={blog} />
                  </Reveal>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex justify-center gap-3">
              <CarouselPrevious className="static translate-x-0 translate-y-0" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>

        <Reveal delay={buttonDelay}>
          <div className="mt-10 flex justify-center md:mt-14">
            <ButtonLink
              href="/blog"
              size="lg"
              className="mx-auto w-full md:mx-0 md:w-auto"
              aria-label="View all blog posts"
            >
              Explore all
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Blog;
