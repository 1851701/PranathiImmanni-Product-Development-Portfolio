import { NextResponse } from "next/server";

/**
 * Demo endpoint: logs payload in development. Wire to Resend, SendGrid, or
 * Formspree in production.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const combinedName = [body.firstName, body.lastName]
      .filter(Boolean)
      .join(" ")
      .trim();
    const name = combinedName || body.name || "";
    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", { ...body, name });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
