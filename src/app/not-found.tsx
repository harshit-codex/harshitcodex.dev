import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-foreground">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Back to home
      </Link>
    </div>
  );
}
