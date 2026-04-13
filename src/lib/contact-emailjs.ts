/**
 * Contact mail via EmailJS from the browser (their supported flow).
 * Requires NEXT_PUBLIC_* vars so values are available in client bundles.
 * @see https://www.emailjs.com/docs/tutorial/create-contact-form/
 */

import emailjs from "@emailjs/browser";

export type PortfolioContactFields = {
  email: string;
  message: string;
  /** Home form */
  firstName?: string;
  lastName?: string;
  /** /contact page single name */
  fullName?: string;
};

function readIds() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() ?? "";
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() ?? "";
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() ?? "";
  return { serviceId, templateId, publicKey };
}

/** True when the three EmailJS env vars are set (after rebuild / dev restart). */
export function isPortfolioEmailJsConfigured(): boolean {
  const { serviceId, templateId, publicKey } = readIds();
  return Boolean(serviceId && templateId && publicKey);
}

let didInit = false;

function ensureInit(publicKey: string) {
  if (!didInit) {
    emailjs.init({ publicKey });
    didInit = true;
  }
}

function formatEmailJsError(err: unknown): string {
  if (err && typeof err === "object" && "text" in err) {
    const t = (err as { text?: string }).text;
    if (typeof t === "string" && t.trim()) return t.trim();
  }
  if (err instanceof Error) return err.message;
  return "Send failed. Check the browser console and your EmailJS template.";
}

/**
 * Sends one message. Template placeholders supported (match your EmailJS template):
 * {{title}} (subject line), {{name}}, {{email}}, {{message}}, {{time}},
 * plus {{from_name}}, {{first_name}}, {{last_name}}, {{user_email}}, {{reply_to}}.
 */
export async function sendPortfolioContactEmailJs(
  fields: PortfolioContactFields,
): Promise<void> {
  const { serviceId, templateId, publicKey } = readIds();
  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY to .env.local, then restart `npm run dev` or redeploy.",
    );
  }

  const combined = [fields.firstName, fields.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();
  const fromName =
    (fields.fullName?.trim() || combined || fields.email.trim()).trim();

  const templateParams: Record<string, string> = {
    // Default EmailJS "Contact Us" templates often use {{title}} in the subject
    title: fromName || "Portfolio contact form",
    from_name: fromName,
    first_name: fields.firstName?.trim() ?? "",
    last_name: fields.lastName?.trim() ?? "",
    name: fields.fullName?.trim() || fromName,
    email: fields.email.trim(),
    user_email: fields.email.trim(),
    reply_to: fields.email.trim(),
    message: fields.message.trim(),
    time: new Date().toISOString(),
  };

  ensureInit(publicKey);

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      { publicKey },
    );
    if (result.status < 200 || result.status >= 300) {
      throw new Error(result.text || `EmailJS status ${result.status}`);
    }
  } catch (err) {
    throw new Error(formatEmailJsError(err));
  }
}
