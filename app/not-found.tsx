import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-3xl font-semibold text-heading">Page not found</h1>
      <p className="max-w-sm text-sm text-muted">
        The book, author or page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        href="/browse"
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Back to Browse
      </Link>
    </div>
  );
}
