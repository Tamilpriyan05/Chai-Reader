import Image from "next/image";
import type { Review } from "@/types";

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section className="mt-10 max-w-2xl">
      <h2 className="text-lg font-semibold text-heading">Reviews</h2>
      <ul className="mt-3 space-y-5">
        {reviews.map((review) => (
          <li key={review.id} className="flex gap-3">
            <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
              <Image src={review.avatar} alt={review.name} fill sizes="36px" className="object-cover" />
            </span>
            <div>
              <p className="text-sm font-semibold text-heading">{review.name}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{review.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
