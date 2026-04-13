import Image from "next/image";
import { siteConfig } from "@/lib/site";

/** Static favorite album card — copy and art from `siteConfig.getToKnowMe` (no Spotify API). */
export function FavoriteSingerAlbum() {
  const m = siteConfig.getToKnowMe;
  const src = m.favoriteMusicImage;

  return (
    <div>
      <h3 className="flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-[0.28em] text-neutral-900 dark:text-sky-100">
        <span className="text-sky-600 dark:text-sky-400" aria-hidden>
          ♪
        </span>
        <span>{m.favoriteMusicHeading}</span>
      </h3>
      <a
        href={m.favoriteMusicListenUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex flex-col gap-4 rounded-2xl border border-sky-200/80 bg-white/60 p-4 shadow-sm transition hover:border-sky-300 hover:bg-white/90 dark:border-sky-800/60 dark:bg-sky-950/30 dark:hover:border-sky-700 dark:hover:bg-sky-950/50 sm:flex-row sm:items-center"
        aria-label={`${m.favoriteMusicListenHint}: ${m.favoriteMusicDescription}. Opens in a new tab.`}
      >
        <div className="relative mx-auto aspect-square w-full max-w-[200px] shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-100 shadow-inner dark:border-neutral-700 dark:bg-neutral-900 sm:mx-0 sm:w-[min(200px,40%)]">
          <Image
            src={src}
            alt={m.favoriteMusicImageAlt}
            width={768}
            height={768}
            className="h-full w-full object-cover"
            sizes="200px"
          />
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="font-serif text-lg font-medium text-neutral-950 dark:text-white">
            {m.favoriteMusicDescription}
          </p>
          <p className="mt-2 font-sans text-sm font-medium text-sky-700 underline-offset-2 dark:text-sky-400">
            {m.favoriteMusicListenHint}{" "}
            <span aria-hidden className="text-neutral-400">
              ↗
            </span>
          </p>
        </div>
      </a>
    </div>
  );
}
