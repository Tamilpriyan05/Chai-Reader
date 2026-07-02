import Image from "next/image";
import type { HeroBannerContent } from "@/types";
import Button from "@/components/common/Button";

interface HeroBannerProps {
  content: HeroBannerContent;
}

export default function HeroBanner({ content }: HeroBannerProps) {
  return (
    <section className="flex items-center justify-between gap-6 overflow-hidden rounded-card bg-sidebar px-6 py-6 sm:px-10">
      <div className="max-w-xl">
        <h1 className="text-2xl font-semibold text-heading sm:text-3xl">
          {content.title}
        </h1>
        <p className="mt-2 text-sm text-muted sm:text-base">
          {content.description}
        </p>
        <Button href="#new-arrivals" variant="outline" className="mt-4 bg-background">
          {content.ctaLabel}
        </Button>
      </div>
      <div className="relative hidden h-40 w-32 shrink-0 overflow-hidden rounded-card sm:block">
        <Image src={content.image} alt="" fill sizes="128px" className="object-cover" />
      </div>
    </section>
  );
}
