import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-28 text-center sm:px-8">
      <h1 className="font-serif text-3xl font-medium text-[var(--foreground)]">
        Project not found
      </h1>
      <p className="mt-4 text-[var(--muted)]">
        This case study doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/projects"
        className="mt-10 inline-block text-sm font-medium tracking-wide text-[var(--accent)]"
      >
        ← Back to projects
      </Link>
    </div>
  );
}
