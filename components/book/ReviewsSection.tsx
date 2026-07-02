import Image from "next/image";
import type { Review } from "@/types";

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section>
      <h2 className="text-xl font-bold text-[#1f2937]">Reviews</h2>
      <ul className="mt-6 space-y-6">
        {reviews.map((review) => (
          <li key={review.id} className="flex gap-4">
            <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-sm">
              <Image src={review.avatar} alt={review.name} fill sizes="40px" className="object-cover" />
            </span>
            <div>
              <p className="text-sm font-semibold text-heading">{review.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

