"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface RecommendedBook {
  id: string;
  title: string;
  cover: string;
}

interface RecommendedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  books?: RecommendedBook[];
}

interface RecommendedSectionProps {
  items: RecommendedItem[];
}

export default function RecommendedSection({ items }: RecommendedSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    skipSnaps: false,
    dragFree: false,
  });

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!items || items.length === 0) return null;

  return (
    <section className="relative mt-8 sm:mt-10 overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[80%] lg:basis-[74%]"
            >
              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#fdf0e8] flex flex-col min-h-[200px] sm:min-h-[260px] sm:pb-10">
                <div className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 rounded-full bg-[#f9d5b8]/60" />
                <div className="pointer-events-none absolute top-6 right-24 h-12 w-12 rounded-full bg-[#f5c09a]/50" />

                <div className="px-5 pt-5 pb-3 sm:px-8 sm:pt-7 sm:pb-4 z-10 max-w-md">
                  <h3 className="text-[17px] sm:text-[20px] font-extrabold text-[#1a1a1a] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 sm:mt-2 text-[12px] sm:text-[13px] leading-relaxed text-[#5a5a5a]">
                    {item.description}
                  </p>
                </div>

                {item.books && item.books.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 sm:gap-3 px-4 sm:px-8 mt-auto z-10 pb-0">
                    {item.books.map((book, idx) => (
                      <div
                        key={book.id}
                        className="relative overflow-hidden rounded-lg sm:rounded-none"
                        style={{
                          width: "100%",
                          height: "140px",
                        }}
                      >
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          sizes="(max-width: 640px) 22vw, 90px"
                          className="object-cover w-full h-full sm:rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next recommended"
        className="absolute right-[10%] sm:right-[18%] top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors border border-gray-100"
      >
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#374151]" />
      </button>
    </section>
  );
}
