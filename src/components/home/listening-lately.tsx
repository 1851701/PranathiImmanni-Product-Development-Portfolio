"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site";
import type { ListeningTrack } from "@/lib/spotify/types";

type ApiOk = { ok: true; track: ListeningTrack | null; message?: string };
type ApiNotConfigured = { ok: false; code: "not_configured" };
type ApiError = { ok: false; code: "error"; message: string };
type ApiResponse = ApiOk | ApiNotConfigured | ApiError;

function MusicNoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

/** Original static block when Spotify API is unavailable */
function StaticFavoriteMusic() {
  const g = siteConfig.getToKnowMe;
  return (
    <>
      <p className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-sky-100">
        <MusicNoteIcon className="h-4 w-4 shrink-0 text-sky-700/90 dark:text-sky-400/80" />
        <span className="uppercase">{g.favoriteMusicHeading}</span>
      </p>
      {g.favoriteMusicListenUrl ? (
        <a
          href={g.favoriteMusicListenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 flex flex-col gap-6 rounded-2xl p-1 -m-1 outline-offset-4 transition hover:bg-sky-900/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600 dark:hover:bg-white/[0.04] dark:focus-visible:outline-sky-400 sm:flex-row sm:items-start sm:gap-8"
          aria-label={`${g.favoriteMusicListenHint}: ${g.favoriteMusicDescription} Opens in a new tab.`}
        >
          <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/[0.08] transition duration-300 group-hover:shadow-lg group-hover:ring-sky-600/25 sm:mx-0 dark:bg-[#243a4a]/50 dark:ring-white/10 dark:group-hover:ring-sky-400/30">
            <Image
              src={g.favoriteMusicImage}
              alt=""
              fill
              className="object-cover"
              sizes="176px"
              aria-hidden
            />
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <p className="font-sans text-base leading-relaxed text-neutral-800/95 dark:text-[#d8ccd2]">
              <span className="transition group-hover:text-neutral-950 dark:group-hover:text-white">
                {g.favoriteMusicDescription}
              </span>
            </p>
            <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-wide text-sky-800/90 dark:text-sky-300/90">
              {g.favoriteMusicListenHint}{" "}
              <span aria-hidden className="inline-block transition group-hover:translate-x-0.5">
                ↗
              </span>
            </p>
          </div>
        </a>
      ) : (
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          <div className="relative mx-auto h-44 w-44 shrink-0 overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/[0.08] sm:mx-0 dark:bg-[#243a4a]/50 dark:ring-white/10">
            <Image
              src={g.favoriteMusicImage}
              alt={g.favoriteMusicImageAlt}
              fill
              className="object-cover"
              sizes="176px"
            />
          </div>
          <p className="text-center font-sans text-base leading-relaxed text-neutral-800/95 sm:flex-1 sm:text-left dark:text-[#d8ccd2]">
            {g.favoriteMusicDescription}
          </p>
        </div>
      )}
    </>
  );
}

function ListeningCard({ track }: { track: ListeningTrack }) {
  const statusLabel =
    track.status === "now_playing" ? "Now playing" : "Recently played";

  return (
    <div className="mt-6 rounded-2xl border border-black/[0.06] bg-white/70 p-5 shadow-[0_12px_40px_-16px_rgba(52,40,32,0.12)] ring-1 ring-black/[0.04] backdrop-blur-sm dark:border-white/[0.08] dark:bg-[#1a2836]/40 dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.35)] dark:ring-white/[0.06]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-xl shadow-md ring-1 ring-black/[0.08] sm:mx-0 dark:ring-white/10">
          {track.albumImageUrl ? (
            <Image
              src={track.albumImageUrl}
              alt=""
              width={160}
              height={160}
              className="h-full w-full object-cover"
              sizes="160px"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-neutral-200 text-xs text-neutral-500 dark:bg-neutral-800"
              aria-hidden
            >
              No art
            </div>
          )}
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-800/90 dark:text-sky-300/90">
            {statusLabel}
          </p>
          <p className="mt-2 font-sans text-lg font-semibold leading-snug text-neutral-950 dark:text-white">
            {track.trackName}
          </p>
          <p className="mt-1 font-sans text-sm text-neutral-700 dark:text-[#c5d4dc]">
            {track.artistName}
          </p>
          <p className="mt-1 font-sans text-sm text-neutral-600/90 dark:text-neutral-400">
            {track.albumName}
          </p>
          <a
            href={track.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wide text-sky-800/90 transition hover:text-sky-950 dark:text-sky-300/90 dark:hover:text-sky-100"
          >
            Open in Spotify
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ListeningLately() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [ready, setReady] = useState(false);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/spotify/listening", { cache: "no-store" });
      const json = (await res.json()) as ApiResponse;
      setData(json);
    } catch {
      setData({
        ok: false,
        code: "error",
        message: "Could not reach the listening API.",
      });
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    load();
    const id = setInterval(load, 60_000);
    return () => clearInterval(id);
  }, [load]);

  return (
    <div>
      <p className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 dark:text-sky-100">
        <MusicNoteIcon className="h-4 w-4 shrink-0 text-sky-700/90 dark:text-sky-400/80" />
        <span className="uppercase">Listening lately</span>
      </p>
      <p className="mt-2 max-w-md font-sans text-sm leading-relaxed text-neutral-700/95 dark:text-[#b8ccd8]">
        A small API-powered peek into what I&apos;ve been playing.
      </p>

      {!ready ? (
        <div
          className="mt-6 h-48 max-w-md animate-pulse rounded-2xl bg-neutral-200/80 dark:bg-white/[0.08]"
          aria-busy
          aria-label="Loading listening activity"
        />
      ) : null}

      {ready && data?.ok === true && data.track ? (
        <ListeningCard track={data.track} />
      ) : null}

      {ready && data?.ok === true && !data.track ? (
        <p className="mt-6 font-sans text-sm text-neutral-600 dark:text-neutral-400">
          {data.message ?? "No track to show right now."}
        </p>
      ) : null}

      {ready && data?.ok === false && data.code === "error" ? (
        <div className="mt-6 space-y-3">
          <p className="font-sans text-sm text-neutral-600 dark:text-neutral-400">
            Couldn&apos;t load live listening data ({data.message}). Showing a
            static pick instead.
          </p>
          <button
            type="button"
            onClick={async () => {
              setReady(false);
              await load();
            }}
            className="font-sans text-sm font-medium text-sky-800 underline-offset-4 hover:underline dark:text-sky-300"
          >
            Retry
          </button>
          <div className="border-t border-black/[0.06] pt-4 dark:border-white/[0.08]">
            <StaticFavoriteMusic />
          </div>
        </div>
      ) : null}

      {ready && data?.ok === false && data.code === "not_configured" ? (
        <div className="mt-6">
          <p className="mb-4 font-sans text-xs text-neutral-500 dark:text-neutral-500">
            Spotify API credentials aren&apos;t set in this environment — showing
            a favorite album instead.
          </p>
          <StaticFavoriteMusic />
        </div>
      ) : null}
    </div>
  );
}
