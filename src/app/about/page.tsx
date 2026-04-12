"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/** `/about` sends visitors to the About scrapbook on the home page. */
export default function AboutRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#about-me");
  }, [router]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-[var(--background)] px-6">
      <p className="text-sm text-[var(--muted)]">Opening About…</p>
    </div>
  );
}
