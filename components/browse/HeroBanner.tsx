import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HeroBannerContent } from "@/types";

interface HeroBannerProps {
  content: HeroBannerContent;
}

export default function HeroBanner({ content }: HeroBannerProps) {
  const renderTitle = (title: string) => {
    const target = "Silent Pages";
    const index = title.indexOf(target);
    if (index !== -1) {
      return (
        <>
          {title.substring(0, index)}
          <span className="text-[#3c2a4d] font-bold">{target}</span>
          {title.substring(index + target.length)}
        </>
      );
    }
    return title;
  };

  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-white border border-gray-100 px-5 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10 mt-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden">
      <div className="w-full sm:w-[60%] sm:max-w-xl">
        <h1 className="text-[22px] font-semibold tracking-tight text-[#374151] sm:text-[28px] lg:text-[32px] leading-tight mb-3">
          {renderTitle(content.title)}
        </h1>
        <p className="text-[14px] text-[#6B7280] leading-relaxed sm:text-[15px] max-w-[480px]">
          {content.description}
        </p>
        <Link
          href="#new-arrivals"
          className="mt-5 inline-flex items-center gap-2 text-[14px] sm:text-[15px] font-semibold text-[#4B5563] hover:text-[#111827] transition-colors group"
        >
          Explore More
          <ArrowRight className="h-4 w-4 stroke-[1.5] text-[#9CA3AF] transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="hidden sm:block relative shrink-0 w-[40%] h-[200px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[460px] opacity-95 pointer-events-none">
          <Image
            src={content.bgImage}
            alt=""
            fill
            sizes="256px"
            className="object-contain"
            loading="lazy"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[320px] rotate-[15deg] transition-all duration-300 hover:rotate-[12deg] hover:scale-110 scale-105 z-10 origin-center">
          <Image
            src={content.image}
            alt="Book cover"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
