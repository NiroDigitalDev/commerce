"use client";

import { Reveal } from "@/components/animations";
import blogData from "@/data/json/blog/blogs.json";
import BlogCardV1, { IBlogPost } from "components/blog-card-v1";
import ButtonLink from "components/button-link";
import { Badge } from "components/ui/badge";

const blogs: IBlogPost[] = blogData.slice(0, 3) as IBlogPost[];

const Blog = () => {
  return (
    <section
      className="bg-neutral-50 dark:bg-neutral-900 py-12 md:py-16 lg:py-20"
      aria-label="Blog posts and insights"
    >
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-14 text-center md:mb-[70px]">
          <Reveal delay={0.3}>
            <Badge variant="secondary" className="mb-3.5 md:mb-5">
              Blog
            </Badge>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl lg:text-5xl">
              Our recent{" "}
              <span className="text-primary inline-block">
                news &amp; insights
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="mx-auto max-w-[738px] text-neutral-600 dark:text-neutral-400">
              Our recent news and insights highlight the latest developments,
              achievements, and thought leadership shaping our journey forward.
              From product innovations and strategic partnerships to industry
              trends
            </p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-10 xl:grid-cols-3">
          {blogs.map((blog, index) => (
            <Reveal delay={0.1 * index} direction="up" key={blog.slug}>
              <div>
                <BlogCardV1 blog={blog} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.9}>
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
