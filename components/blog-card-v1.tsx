'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from 'components/ui/badge';
import ButtonLink from 'components/button-link';

export interface IBlogPost {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  tag: string;
  author: string;
  publishDate: string;
}

interface BlogCardV1Props {
  blog: IBlogPost;
  className?: string;
}

const BlogCardV1 = ({ blog, className }: BlogCardV1Props) => {
  return (
    <article>
      <div
        className={cn(
          'bg-white dark:bg-neutral-800 relative scale-100 overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[102%] hover:transition-transform hover:duration-500 md:min-h-[552px] flex flex-col',
          className
        )}
      >
        <figure className="h-[260px] max-w-full overflow-hidden xl:max-w-[409px]">
          <Image
            src={blog?.thumbnail}
            width={409}
            height={250}
            alt={blog?.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </figure>
        <div className="flex flex-col flex-1 p-6">
          <div className="space-y-6 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="mr-1" asChild>
              <Link href={`/blog?category=${blog?.tag.toLowerCase()}`}>{blog?.tag}</Link>
            </Badge>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              {blog?.author}
            </span>
            <span className="h-[6px] w-[5px] rounded-full bg-neutral-300 dark:bg-neutral-600"> </span>
            <time dateTime={blog?.publishDate} className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              {blog?.publishDate}
            </time>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-2 font-semibold">
              <Link
                href={`/blog/${blog.slug}`}
                className="hover:text-primary transition-colors"
                aria-label={`Read more about ${blog?.title}`}
              >
                {blog?.title}
              </Link>
            </h3>
            <p className="text-base text-neutral-600 dark:text-neutral-400 line-clamp-2 font-normal">
              {blog?.description}
            </p>
          </div>
          </div>
          <div className="flex justify-start md:block mt-6">
            <ButtonLink 
              href={`/blog/${blog.slug}`}
              className="w-full sm:w-auto"
              aria-label={`Read full article about ${blog?.title}`}
            >
              Read more
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCardV1;

