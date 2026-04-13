import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

type ContactBody = {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  message?: string;
};

function displayName(body: ContactBody): string {
  const combined = [body.firstName, body.lastName].filter(Boolean).join(" ").trim();
  if (combined) return combined;
  return (body.name || "").trim();
}

/**
 * Fallback when the browser does not use EmailJS (optional).
 * Primary path: NEXT_PUBLIC_EMAILJS_* + `sendPortfolioContactEmailJs` in the client.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = displayName(body);
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL?.trim() || siteConfig.email;

    if (!apiKey) {
      if (process.env.NODE_ENV === "development") {
        console.info("[contact] API fallback (no RESEND_API_KEY)", {
          name,
          email,
          message: message.slice(0, 200) + (message.length > 200 ? "…" : ""),
        });
        return NextResponse.json({ ok: true, dev: true });
      }
      console.error("[contact] RESEND_API_KEY not set (EmailJS should run in the browser)");
      return NextResponse.json(
        { ok: false, error: "email_not_configured" },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const from =
      process.env.RESEND_FROM?.trim() ||
      `Portfolio contact <onboarding@resend.dev>`;

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Portfolio: message from ${name || email}`,
      text: [
        `Name: ${name || "(not provided)"}`,
        `Reply to: ${email}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true, via: "resend" });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}
