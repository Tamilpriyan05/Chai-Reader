import type { Book } from "@/types";

interface ProductDetailsProps {
  book: Book;
}

export default function ProductDetails({ book }: ProductDetailsProps) {
  const details: Array<[string, string]> = [
    ["Publisher", book.publisher],
    ["Publication date", book.publicationDate],
    ["Language", book.language],
    ["Print length", book.printLength],
  ];

  return (
    <section className="mt-10 max-w-2xl">
      <h2 className="text-lg font-semibold text-heading">Product Details</h2>
      <dl className="mt-3 space-y-2">
        {details.map(([label, value]) => (
          <div key={label} className="flex gap-2 text-sm">
            <dt className="w-40 shrink-0 font-medium text-heading">{label} :</dt>
            <dd className="text-muted">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
