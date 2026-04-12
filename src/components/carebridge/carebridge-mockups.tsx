import type { ReactNode } from "react";

const chrome =
  "flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-900/50";
const dot = "h-2 w-2 rounded-full";
const urlBar =
  "ml-2 flex-1 rounded-md bg-white py-1 text-center text-[0.65rem] text-slate-500 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-600";

export function CareBridgeBrowserFrame({
  children,
  url = "portal.carebridge.health",
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_12px_40px_-16px_rgba(15,23,42,0.15)] dark:border-slate-700 dark:bg-slate-950 ${className ?? ""}`}
    >
      <div className={chrome} aria-hidden>
        <span className={`${dot} bg-red-300/90`} />
        <span className={`${dot} bg-amber-300/90`} />
        <span className={`${dot} bg-emerald-300/90`} />
        <div className={urlBar}>{url}</div>
      </div>
      <div className="bg-[#f8fafc] dark:bg-slate-900">{children}</div>
    </div>
  );
}

function NavItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`rounded-lg px-2 py-1.5 text-[0.65rem] font-medium ${
        active
          ? "bg-blue-50 text-blue-800 dark:bg-blue-950/50 dark:text-blue-200"
          : "text-slate-600 hover:bg-slate-100 dark:text-slate-400"
      }`}
    >
      {label}
    </div>
  );
}

export function MockDashboard() {
  return (
    <div className="flex min-h-[200px] text-slate-800 dark:text-slate-100">
      <aside className="hidden w-[28%] shrink-0 border-r border-slate-200 bg-white p-2 sm:block dark:border-slate-700 dark:bg-slate-950">
        <p className="px-2 font-serif text-[0.7rem] font-semibold text-blue-900 dark:text-blue-200">
          CareBridge
        </p>
        <nav className="mt-2 space-y-0.5">
          <NavItem label="Dashboard" active />
          <NavItem label="Symptom Checker" />
          <NavItem label="Lab Results" />
          <NavItem label="Appointments" />
          <NavItem label="Messages" />
          <NavItem label="Medications" />
        </nav>
      </aside>
      <div className="min-w-0 flex-1 p-2 sm:p-3">
        <h2 className="text-[0.7rem] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Your care overview
        </h2>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <p className="text-[0.6rem] font-medium text-slate-500">Next visit</p>
            <p className="mt-1 text-[0.75rem] font-semibold">Dr. Chen — Tue 10:30 AM</p>
            <p className="mt-1 text-[0.6rem] text-blue-700 dark:text-blue-300">Prepare →</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-700 dark:bg-slate-950">
            <p className="text-[0.6rem] font-medium text-slate-500">New lab result</p>
            <p className="mt-1 text-[0.75rem] font-semibold">Metabolic panel</p>
            <p className="mt-1 text-[0.6rem] text-blue-700 dark:text-blue-300">View summary →</p>
          </div>
        </div>
        <div className="mt-2 rounded-lg border border-dashed border-slate-300 bg-blue-50/80 p-2 dark:border-slate-600 dark:bg-blue-950/30">
          <p className="text-[0.65rem] font-medium text-blue-900 dark:text-blue-100">
            Not feeling well?
          </p>
          <p className="mt-0.5 text-[0.6rem] text-slate-600 dark:text-slate-400">
            Start a guided symptom check — assistive guidance, not a diagnosis.
          </p>
          <button
            type="button"
            className="mt-2 w-full rounded-md bg-blue-700 py-1.5 text-[0.65rem] font-semibold text-white"
          >
            Start symptom check
          </button>
        </div>
      </div>
    </div>
  );
}

export function MockSymptomChecker() {
  return (
    <div className="min-h-[200px] p-3 text-slate-800 dark:text-slate-100">
      <div className="mb-3 flex gap-1">
        {[1, 2, 3, 4, 5].map((s) => (
          <div
            key={s}
            className={`h-1 flex-1 rounded-full ${s <= 2 ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"}`}
          />
        ))}
      </div>
      <p className="text-[0.65rem] font-medium uppercase tracking-wide text-slate-500">
        Question 2 of 5
      </p>
      <p className="mt-2 text-[0.85rem] font-medium leading-snug">
        How long have you had this symptom?
      </p>
      <div className="mt-3 space-y-1.5">
        {["Less than 24 hours", "1–3 days", "More than a week"].map((o) => (
          <button
            key={o}
            type="button"
            className="w-full rounded-lg border border-slate-200 bg-white py-2 text-left text-[0.7rem] pl-3 text-slate-700 shadow-sm hover:border-blue-300 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-200"
          >
            {o}
          </button>
        ))}
      </div>
      <p className="mt-3 text-[0.6rem] leading-relaxed text-slate-500">
        Your answers help suggest next steps. This tool does not diagnose.
      </p>
    </div>
  );
}

export function MockSymptomResults() {
  return (
    <div className="min-h-[220px] space-y-2 p-3 text-slate-800 dark:text-slate-100">
      <p className="text-[0.65rem] font-semibold text-slate-500">Possible explanations</p>
      <div className="rounded-lg border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950">
        <p className="text-[0.7rem] font-medium">Viral upper respiratory irritation</p>
        <p className="mt-1 text-[0.6rem] text-slate-500">Common · often self-limiting</p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-2 opacity-90 dark:border-slate-700 dark:bg-slate-950">
        <p className="text-[0.7rem] font-medium">Allergic rhinitis</p>
        <p className="mt-1 text-[0.6rem] text-slate-500">Seasonal pattern possible</p>
      </div>
      <div className="rounded-md bg-slate-100 p-2 text-[0.6rem] leading-relaxed text-slate-600 dark:bg-slate-800 dark:text-slate-400">
        <strong className="text-slate-700 dark:text-slate-300">Important:</strong> Many
        conditions share symptoms. Only a clinician can diagnose.
      </div>
      <div className="flex flex-wrap gap-1.5">
        <span className="rounded-md bg-emerald-50 px-2 py-1 text-[0.6rem] font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
          Self-care tips
        </span>
        <span className="rounded-md bg-blue-50 px-2 py-1 text-[0.6rem] font-medium text-blue-800 dark:bg-blue-950/50 dark:text-blue-200">
          Primary care
        </span>
        <span className="rounded-md bg-amber-50 px-2 py-1 text-[0.6rem] font-medium text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
          Urgent care
        </span>
      </div>
    </div>
  );
}

export function MockLabResults() {
  return (
    <div className="min-h-[200px] p-3 text-slate-800 dark:text-slate-100">
      <h3 className="text-[0.75rem] font-semibold">Lab results</h3>
      <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-slate-100 bg-slate-50 px-2 py-1.5 text-[0.55rem] font-semibold uppercase text-slate-500 dark:border-slate-800 dark:bg-slate-900">
          <span>Test</span>
          <span>Status</span>
          <span>Date</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 px-2 py-2 text-[0.65rem]">
          <span className="font-medium">Glucose (fasting)</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[0.55rem] font-medium text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
            In range
          </span>
          <span className="text-slate-500">Apr 2</span>
        </div>
        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-t border-slate-100 px-2 py-2 text-[0.65rem] dark:border-slate-800">
          <span className="font-medium">Vitamin D</span>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[0.55rem] font-medium text-amber-900 dark:bg-amber-950/40 dark:text-amber-200">
            Review
          </span>
          <span className="text-slate-500">Apr 2</span>
        </div>
      </div>
      <p className="mt-2 text-[0.6rem] leading-relaxed text-slate-600 dark:text-slate-400">
        <strong className="text-slate-800 dark:text-slate-200">Summary:</strong> Most values
        look stable. One marker may warrant discussion — not an emergency by itself.
      </p>
    </div>
  );
}

export function MockAppointments() {
  return (
    <div className="min-h-[200px] p-3 text-slate-800 dark:text-slate-100">
      <h3 className="text-[0.75rem] font-semibold">Book an appointment</h3>
      <p className="mt-1 text-[0.6rem] text-slate-500">Primary care · in-network clinic</p>
      <div className="mt-2 flex gap-1 overflow-x-auto pb-1">
        {["Mon 14", "Tue 15", "Wed 16", "Thu 17"].map((d, i) => (
          <button
            key={d}
            type="button"
            className={`shrink-0 rounded-lg border px-2 py-1.5 text-[0.6rem] font-medium ${
              i === 1
                ? "border-blue-600 bg-blue-50 text-blue-900 dark:bg-blue-950/40 dark:text-blue-100"
                : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950"
            }`}
          >
            {d}
          </button>
        ))}
      </div>
      <p className="mt-2 text-[0.55rem] font-medium uppercase text-slate-500">
        Available times
      </p>
      <div className="mt-1 flex flex-wrap gap-1.5">
        {["9:00", "10:30", "1:15"].map((t) => (
          <button
            key={t}
            type="button"
            className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[0.65rem] dark:border-slate-600 dark:bg-slate-950"
          >
            {t}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-3 w-full rounded-md bg-blue-700 py-2 text-[0.7rem] font-semibold text-white"
      >
        Confirm appointment
      </button>
    </div>
  );
}

export function MockMessages() {
  return (
    <div className="flex min-h-[200px] text-slate-800 dark:text-slate-100">
      <div className="w-[38%] border-r border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-950">
        <p className="text-[0.55rem] font-semibold uppercase text-slate-500">Inbox</p>
        <div className="mt-2 space-y-1">
          <div className="rounded-md bg-blue-50 p-1.5 dark:bg-blue-950/40">
            <p className="text-[0.65rem] font-medium">Nurse line</p>
            <p className="text-[0.55rem] text-slate-500">Re: lab follow-up</p>
          </div>
          <div className="rounded-md p-1.5 hover:bg-slate-50 dark:hover:bg-slate-900">
            <p className="text-[0.65rem] font-medium">Dr. Chen</p>
            <p className="text-[0.55rem] text-slate-500">Visit instructions</p>
          </div>
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-2">
        <div className="flex-1 rounded-lg bg-white p-2 text-[0.65rem] shadow-sm ring-1 ring-slate-100 dark:bg-slate-950 dark:ring-slate-800">
          <p className="text-slate-600 dark:text-slate-400">
            Thanks for uploading your readings. Let&apos;s review at your visit Tuesday.
          </p>
        </div>
        <div className="mt-2 flex gap-1">
          <label className="sr-only" htmlFor="cb-msg">
            Message
          </label>
          <input
            id="cb-msg"
            readOnly
            className="min-w-0 flex-1 rounded-md border border-slate-200 bg-white px-2 py-1.5 text-[0.65rem] dark:border-slate-600 dark:bg-slate-950"
            placeholder="Write a secure message…"
          />
          <button
            type="button"
            className="rounded-md bg-blue-700 px-2 text-[0.6rem] font-semibold text-white"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

const SCREEN_MAP = {
  dashboard: MockDashboard,
  symptom: MockSymptomChecker,
  symptomResults: MockSymptomResults,
  labs: MockLabResults,
  appointments: MockAppointments,
  messages: MockMessages,
} as const;

export function CareBridgeScreenPreview({
  screenKey,
}: {
  screenKey: keyof typeof SCREEN_MAP;
}) {
  const Comp = SCREEN_MAP[screenKey];
  return (
    <CareBridgeBrowserFrame>
      <Comp />
    </CareBridgeBrowserFrame>
  );
}

export function CareBridgeFlowPills({ steps }: { steps: readonly string[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 py-2 text-[0.65rem] text-slate-600 dark:text-slate-400">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          {i > 0 ? (
            <span className="text-slate-300 dark:text-slate-600" aria-hidden>
              →
            </span>
          ) : null}
          <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-medium text-slate-700 shadow-sm dark:border-slate-600 dark:bg-slate-950 dark:text-slate-200">
            {step}
          </span>
        </span>
      ))}
    </div>
  );
}
