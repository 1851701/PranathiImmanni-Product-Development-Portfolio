/**
 * Spotify Web API — server-only. Uses refresh token flow; secrets never leave the server.
 * @see https://developer.spotify.com/documentation/web-api
 */

import type { ListeningTrack } from "@/lib/spotify/types";

export type { ListeningTrack } from "@/lib/spotify/types";

type SpotifyImage = { url: string; height: number | null; width: number | null };

function pickAlbumImage(images: SpotifyImage[] | undefined): string {
  if (!images?.length) return "";
  const sorted = [...images].sort(
    (a, b) => (b.width ?? 0) - (a.width ?? 0),
  );
  const mid = sorted.find((i) => (i.width ?? 0) <= 320) ?? sorted[sorted.length - 1];
  return mid?.url ?? "";
}

function mapTrack(
  track: {
    name: string;
    album: { name: string; images?: SpotifyImage[] };
    artists: { name: string }[];
    external_urls: { spotify: string };
  },
  status: ListeningTrack["status"],
): ListeningTrack {
  return {
    status,
    trackName: track.name,
    artistName: track.artists.map((a) => a.name).join(", "),
    albumName: track.album.name,
    albumImageUrl: pickAlbumImage(track.album.images),
    spotifyUrl: track.external_urls.spotify,
  };
}

async function refreshAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    throw new Error("SPOTIFY_NOT_CONFIGURED");
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
  });

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body,
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Spotify token error: ${res.status} ${text}`);
  }

  const data = (await res.json()) as { access_token: string };
  return data.access_token;
}

async function fetchJson<T>(url: string, accessToken: string): Promise<T | null> {
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
    next: { revalidate: 0 },
  });
  if (res.status === 204) {
    return null;
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Spotify API ${res.status}: ${text}`);
  }
  return res.json() as Promise<T>;
}

type CurrentlyPlayingResponse = {
  is_playing: boolean;
  item: Parameters<typeof mapTrack>[0] | null;
};

type RecentlyPlayedResponse = {
  items: { track: Parameters<typeof mapTrack>[0]; played_at: string }[];
};

/**
 * Returns currently playing track (only when actively playing), else most recently played.
 */
export async function getListeningTrack(): Promise<ListeningTrack | null> {
  const accessToken = await refreshAccessToken();

  const current = await fetchJson<CurrentlyPlayingResponse>(
    "https://api.spotify.com/v1/me/player/currently-playing",
    accessToken,
  );

  if (current?.item && current.is_playing) {
    return mapTrack(current.item, "now_playing");
  }

  const recent = await fetchJson<RecentlyPlayedResponse>(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    accessToken,
  );

  const first = recent?.items?.[0]?.track;
  if (!first) return null;

  return mapTrack(first, "recently_played");
}

export function isSpotifyConfigured(): boolean {
  return Boolean(
    process.env.SPOTIFY_CLIENT_ID &&
      process.env.SPOTIFY_CLIENT_SECRET &&
      process.env.SPOTIFY_REFRESH_TOKEN,
  );
}
