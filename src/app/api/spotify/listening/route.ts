import { NextResponse } from "next/server";
import { getListeningTrack, isSpotifyConfigured } from "@/lib/spotify/server";

export const dynamic = "force-dynamic";

/**
 * Public JSON for the portfolio “Listening lately” card.
 * No secrets exposed — server uses env-only refresh token flow.
 */
export async function GET() {
  if (!isSpotifyConfigured()) {
    return NextResponse.json(
      { ok: false as const, code: "not_configured" as const },
      { status: 200 },
    );
  }

  try {
    const track = await getListeningTrack();
    if (!track) {
      return NextResponse.json({
        ok: true as const,
        track: null,
        message: "No recent listening activity returned from Spotify.",
      });
    }
    return NextResponse.json({ ok: true as const, track });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    console.error("[spotify/listening]", message);
    return NextResponse.json(
      { ok: false as const, code: "error" as const, message },
      { status: 200 },
    );
  }
}
