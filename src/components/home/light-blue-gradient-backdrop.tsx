import Image from "next/image";

type LightBlueGradientBackdropProps = {
  /** Lighter overlay for tall sections (About / Contact) — keeps copy contrast */
  tone?: "hero" | "section";
  /** Pass-through for focal point (e.g. hero portrait alignment) */
  imageClassName?: string;
  priority?: boolean;
};

/**
 * Full-bleed soft blue gradient art (replaces flat baby-blue fills).
 */
export function LightBlueGradientBackdrop({
  tone = "section",
  imageClassName = "object-cover object-center",
  priority = false,
}: LightBlueGradientBackdropProps) {
  /* Cream-tinted veils so blue art reads warmer against site tan */
  const overlay =
    tone === "hero"
      ? "from-[#f5ebe0]/35 via-[#faf5ed]/10 to-[#f2e8dc]/32 dark:from-[#1a1511]/58 dark:via-[#1c1713]/68 dark:to-[#1e1915]/78"
      : "from-[#f3e9dd]/42 via-[#f7f0e6]/18 to-[#efe4d6]/38 dark:from-[#1a1511]/52 dark:via-[#1d1814]/60 dark:to-[#201b16]/72";

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Image
        src="/home-hero-blue-gradient.png"
        alt=""
        fill
        priority={priority}
        className={imageClassName}
        sizes="100vw"
        aria-hidden
      />
      <div
        className={`absolute inset-0 bg-gradient-to-b ${overlay}`}
        aria-hidden
      />
    </div>
  );
}
