'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square relative overflow-hidden w-full rounded-lg">
                <Image
                  src={image.src}
                  alt={image.altText}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </>
        )}
      </Carousel>
    </div>
  );
}
