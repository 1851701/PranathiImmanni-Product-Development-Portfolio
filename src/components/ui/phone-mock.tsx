import Image from "next/image";

type PhoneMockProps = {
  src: string;
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function PhoneMock({ src, className, priority, alt }: PhoneMockProps) {
  return (
    <div className={`relative shrink-0 ${className ?? ""}`}>
      <div className="relative aspect-[9/19] overflow-hidden rounded-[1.35rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_16px_44px_-12px_rgba(58,46,42,0.22)] ring-1 ring-black/[0.04] dark:shadow-[0_16px_44px_-12px_rgba(0,0,0,0.45)] dark:ring-white/[0.06]">
        <Image
          src={src}
          alt={alt ?? ""}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 30vw, 200px"
          priority={priority}
        />
      </div>
    </div>
  );
}
