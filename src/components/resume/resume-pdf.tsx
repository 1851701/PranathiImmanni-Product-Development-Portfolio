"use client";

import { useEffect, useState } from "react";

/**
 * Shows an embedded PDF when `public/resume.pdf` exists.
 * Add your file as `public/resume.pdf` to enable the viewer.
 */
export function ResumePdfEmbed() {
  const [hasPdf, setHasPdf] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("/resume.pdf", { method: "HEAD" })
      .then((res) => setHasPdf(res.ok))
      .catch(() => setHasPdf(false));
  }, []);

  if (hasPdf === null) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center rounded-[1.75rem] border border-dashed border-[var(--border)] bg-[var(--surface)]/50">
        <p className="text-sm tracking-wide text-[var(--muted)]">
          Checking for resume.pdf…
        </p>
      </div>
    );
  }

  if (!hasPdf) {
    return (
      <div className="rounded-[1.75rem] bg-[var(--surface)] p-10 [box-shadow:var(--shadow-card)]">
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          No PDF found at{" "}
          <code className="rounded-lg bg-[var(--surface-elevated)] px-2 py-0.5 text-xs">
            public/resume.pdf
          </code>
          . Add your file to enable the embedded viewer. The download button
          above will work once the file is in place.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] bg-[var(--surface)] [box-shadow:var(--shadow-card)]">
      <iframe
        title="Resume PDF"
        src="/resume.pdf"
        className="h-[min(75vh,900px)] w-full bg-[var(--background)]"
      />
    </div>
  );
}
