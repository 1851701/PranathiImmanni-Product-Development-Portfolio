"use client";

import type { ReactNode } from "react";

/**
 * SkinWise — refined Figma-aligned UI: soft gradient, serif titles, tan accent,
 * labeled inputs, dashboard cards, 8px spacing system (4/8/16/24).
 */

/* ——— Design tokens (single accent: warm brown) ——— */
const ink = "text-[#2c2419]";
const sub = "text-[#5c5348]";
const muted = "text-[#8a8278]";
const accent = "#8b7355";
const accentBg = "bg-[#8b7355]";
const accentText = "text-[#8b7355]";
const accentSoft = "bg-[#8b7355]/12";

/** Softer vertical gradient (cream → mint), less saturated than raw Figma */
const pageBg =
  "min-h-full bg-gradient-to-b from-[#fcfaf7] via-[#f7faf6] to-[#edf4ef]";

const cardBase =
  "rounded-2xl bg-white shadow-[0_1px_3px_rgba(44,36,25,0.06)] ring-1 ring-[#2c2419]/[0.06]";

const sep = "border-[#2c2419]/[0.08]";

function ChevronRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M4.5 2.5L8 6l-3.5 3.5"
        stroke="#c4bbb0"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SwPrimaryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex h-12 w-full items-center justify-center rounded-full bg-[#c4b59a] px-4 font-sans text-[15px] font-semibold text-[#2c2419] shadow-[0_1px_2px_rgba(44,36,25,0.08)] transition active:scale-[0.99] active:opacity-95 ${className}`}
    >
      {children}
    </button>
  );
}

function SwSecondaryButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`flex h-12 w-full items-center justify-center rounded-full border border-[#2c2419]/12 bg-white/90 px-4 font-sans text-[15px] font-semibold text-[#2c2419] shadow-[0_1px_2px_rgba(44,36,25,0.04)] transition active:bg-black/[0.03] ${className}`}
    >
      {children}
    </button>
  );
}

function SwFieldLabel({ children }: { children: ReactNode }) {
  return (
    <label className={`mb-2 block font-sans text-[12px] font-medium leading-4 ${sub}`}>
      {children}
    </label>
  );
}

function SwTextInput({
  icon,
  placeholder,
  type = "text",
}: {
  icon: ReactNode;
  placeholder: string;
  type?: string;
}) {
  return (
    <div
      className={`flex min-h-[48px] items-center gap-3 rounded-xl border border-[#2c2419]/10 bg-white px-3 shadow-[inset_0_1px_2px_rgba(44,36,25,0.04)] transition focus-within:border-[#8b7355]/35 focus-within:ring-2 focus-within:ring-[#8b7355]/15`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center text-[#8a8278]">
        {icon}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        readOnly
        className={`min-w-0 flex-1 bg-transparent py-3 font-sans text-[15px] leading-5 outline-none placeholder:text-[#b5aea4] ${ink}`}
      />
    </div>
  );
}

type TabId = "home" | "history" | "profile";

function IOSTabBar({ active }: { active: TabId }) {
  const Item = ({
    id,
    label,
    children,
  }: {
    id: TabId;
    label: string;
    children: ReactNode;
  }) => {
    const on = active === id;
    return (
      <button
        type="button"
        className="flex flex-1 flex-col items-center gap-0.5 py-1.5"
        aria-current={on ? "page" : undefined}
      >
        <span style={{ color: on ? accent : "#aeaeae" }}>{children}</span>
        <span
          className="font-sans text-[9px] font-medium"
          style={{ color: on ? accent : "#aeaeae" }}
        >
          {label}
        </span>
      </button>
    );
  };
  return (
    <div
      className={`mt-auto flex shrink-0 items-stretch border-t ${sep} bg-[#faf9f7]/95 pb-2 pt-1.5 backdrop-blur-[6px]`}
    >
      <Item id="home" label="Home">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 01-1 1h-5v-6H10v6H5a1 1 0 01-1-1v-9.5z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </Item>
      <Item id="history" label="History">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M12 8v4l2.5 2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </Item>
      <Item id="profile" label="Profile">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M6.5 19.5c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </Item>
    </div>
  );
}

/* ——— 1. Welcome / landing (reference screen 1) ——— */
export function SkinWiseWelcomeScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} px-4 pb-8 pt-10`}>
      <div className="flex flex-1 flex-col items-center text-center">
        <h1 className={`font-serif text-[28px] font-medium leading-[34px] tracking-tight ${ink}`}>
          SkinWise
        </h1>
        <p className={`mt-3 font-sans text-[13px] font-medium leading-[18px] ${sub}`}>
          AI-Powered Skin Health App
        </p>
        <p className={`mt-8 max-w-[15rem] font-sans text-[14px] leading-[22px] ${sub}`}>
          Scan. Learn. Care for your skin.
        </p>
      </div>
      <div className="mt-auto space-y-3">
        <SwPrimaryButton>Sign Up</SwPrimaryButton>
        <SwSecondaryButton>Sign In</SwSecondaryButton>
        <p className={`pt-2 text-center font-sans text-[11px] leading-[15px] ${muted}`}>
          Educational insights only ·{" "}
          <span className={`font-medium ${accentText}`}>Privacy</span>
        </p>
      </div>
    </div>
  );
}

/** Legal-first onboarding — compact; prefer Welcome for marketing hero */
export function SkinWiseOnboardingScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} px-4 pb-8 pt-8`}>
      <div className="flex flex-1 flex-col">
        <h1 className={`text-center font-serif text-[24px] font-medium leading-[30px] ${ink}`}>
          SkinWise
        </h1>
        <p className={`mt-6 text-left font-sans text-[14px] leading-[22px] ${sub}`}>
          Photo-based guidance for skin concerns. Not a substitute for professional
          care.
        </p>
        <div className={`mt-6 ${cardBase} p-4`}>
          <p className={`font-sans text-[12px] font-semibold ${ink}`}>Notice</p>
          <p className={`mt-2 font-sans text-[12px] leading-[18px] ${sub}`}>
            Not intended to diagnose or treat. Emergency? Call local emergency
            services.
          </p>
        </div>
      </div>
      <SwPrimaryButton className="mt-6">Continue</SwPrimaryButton>
      <button type="button" className={`mt-3 font-sans text-[15px] font-medium ${accentText}`}>
        Terms & Privacy
      </button>
    </div>
  );
}

/* ——— Sign up (reference screen 2) ——— */
export function SkinWiseSignUpScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col overflow-y-auto ${pageBg} px-4 pb-8 pt-8`}>
      <h1 className={`text-center font-serif text-[22px] font-semibold ${ink}`}>Sign Up</h1>
      <p className={`mt-2 text-center font-sans text-[13px] leading-[18px] ${sub}`}>
        Healthy skin starts here
      </p>
      <div className="mt-8 space-y-4">
        <div>
          <SwFieldLabel>Email</SwFieldLabel>
          <SwTextInput
            placeholder="you@email.com"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
        <div>
          <SwFieldLabel>Password</SwFieldLabel>
          <SwTextInput
            type="password"
            placeholder="••••••••"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 10V8a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
        <div>
          <SwFieldLabel>Confirm password</SwFieldLabel>
          <SwTextInput
            type="password"
            placeholder="••••••••"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 10V8a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
      <label className="mt-6 flex cursor-pointer items-start gap-3 text-left">
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2c2419]/20 bg-white shadow-sm" />
        <span className={`font-sans text-[12px] leading-[16px] ${sub}`}>
          I agree to the <span className={`font-medium ${accentText}`}>privacy policy</span>
        </span>
      </label>
      <div className="mt-8">
        <SwPrimaryButton>Sign Up</SwPrimaryButton>
      </div>
    </div>
  );
}

/* ——— Login (reference screen 3) ——— */
export function SkinWiseLoginScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} px-4 pb-8 pt-8`}>
      <h1 className={`text-center font-serif text-[22px] font-semibold ${ink}`}>
        Welcome to SkinWise
      </h1>
      <p className={`mt-2 text-center font-sans text-[14px] ${sub}`}>Hi, Pranathi</p>
      <div className="mt-8 space-y-4">
        <div>
          <SwFieldLabel>Email</SwFieldLabel>
          <SwTextInput
            placeholder="you@email.com"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
        <div>
          <SwFieldLabel>Password</SwFieldLabel>
          <SwTextInput
            type="password"
            placeholder="••••••••"
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
                <path d="M8 10V8a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            }
          />
        </div>
      </div>
      <label className="mt-4 flex cursor-pointer items-center gap-3">
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[#2c2419]/20 bg-white shadow-sm" />
        <span className={`font-sans text-[12px] ${sub}`}>Remember me</span>
      </label>
      <div className="mt-8 flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <SwPrimaryButton>Sign In</SwPrimaryButton>
        </div>
        <button
          type="button"
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2c2419]/10 bg-white shadow-sm ${accentText}`}
          aria-label="Sign in with Face ID"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3C9.5 3 7.5 5 7.5 7.5V9M7.5 15v1.5C7.5 19 9.5 21 12 21s4.5-2 4.5-4.5V15M16.5 7.5V9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </div>
      <button type="button" className={`mt-4 w-full font-sans text-[13px] font-medium ${accentText}`}>
        Forgot password?
      </button>
    </div>
  );
}

/* ——— Dashboard / Home (reference screen 4 — tab bar omitted; nav via menu) ——— */
export function SkinWiseHomeScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-2">
        <header className="flex items-center justify-between py-2">
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg active:bg-black/[0.04]" aria-label="Menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className="font-serif text-[17px] font-semibold">Dashboard</h1>
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg active:bg-black/[0.04]" aria-label="Profile">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 19c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>
        <div className="mt-6 flex flex-col items-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#e8ddd0] to-[#c4b59a] ring-2 ring-white shadow-[0_2px_8px_rgba(44,36,25,0.1)]" />
          <p
            className={`mt-4 max-w-[16rem] text-center font-serif text-[16px] font-semibold leading-snug sm:text-[17px] ${ink}`}
          >
            Pranathi Immanni
          </p>
        </div>
        <div className="mt-8 grid min-w-0 grid-cols-3 gap-1.5 sm:gap-2">
          <div
            className={`${cardBase} flex min-h-0 min-w-0 flex-col items-center justify-center overflow-hidden px-1.5 py-2.5 text-center sm:px-2 sm:py-3`}
          >
            <p
              className={`max-w-full break-words font-sans text-[9px] font-medium uppercase leading-tight tracking-wide ${muted}`}
            >
              Last scan
            </p>
            <p
              className={`mt-1 max-w-full break-words font-sans text-[11px] font-semibold leading-snug sm:text-[12px] ${ink}`}
            >
              Oct 3, 2023
            </p>
          </div>
          <div
            className={`${cardBase} ${accentSoft} flex min-h-0 min-w-0 flex-col items-center justify-center overflow-hidden px-1.5 py-2.5 text-center sm:px-2 sm:py-3`}
          >
            <svg className="h-3.5 w-3.5 shrink-0 text-[#8b7355] sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className={`mt-1 max-w-full break-words font-sans text-[12px] font-bold leading-tight sm:text-[13px] ${ink}`}>
              Healthy
            </p>
            <p
              className={`mt-0.5 max-w-full break-words font-sans text-[8px] leading-tight sm:text-[9px] ${sub}`}
            >
              Detected condition
            </p>
          </div>
          <div
            className={`${cardBase} flex min-h-0 min-w-0 flex-col items-center justify-center overflow-hidden bg-[#e8eef0] px-1.5 py-2.5 text-center ring-[#2c2419]/[0.04] sm:px-2 sm:py-3`}
          >
            <svg className="h-3.5 w-3.5 shrink-0 text-[#5a6d72] sm:h-4 sm:w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 18V6M8 14V10M12 16V8M16 12v4M20 8v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <p className={`mt-1 max-w-full break-words font-sans text-[12px] font-bold leading-tight sm:text-[13px] ${ink}`}>
              87%
            </p>
            <p className={`mt-0.5 max-w-full break-words font-sans text-[8px] leading-tight sm:text-[9px] ${sub}`}>
              Confidence
            </p>
          </div>
        </div>
        <div className="mt-8">
          <p className={`mb-2 font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
            Quick actions
          </p>
          <div className={`overflow-hidden rounded-xl ${cardBase}`}>
            <button
              type="button"
              className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-black/[0.03]"
            >
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${accentBg} text-white`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M20 9V7a2 2 0 00-2-2h-2M4 9V7a2 2 0 012-2h2m0 12h2a2 2 0 002-2v-2M4 15v2a2 2 0 002 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-sans text-[15px] font-semibold">New scan</span>
                <span className={`block font-sans text-[12px] ${sub}`}>Camera or library</span>
              </span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-5 pt-2">
        <button
          type="button"
          className={`flex h-14 w-14 items-center justify-center rounded-full ${accentBg} text-white shadow-[0_4px_12px_rgba(139,115,85,0.35)]`}
          aria-label="Start scan"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 5C8 5 5 8 5 12s3 7 7 7 7-3 7-7-3-7-7-7z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </button>
      </div>
    </div>
  );
}

/* ——— Capture (reference screen 5) ——— */
export function SkinWiseCaptureScreen() {
  return (
    <div className="flex h-full min-h-0 flex-col bg-[#0c0c0c]">
      <div className="flex shrink-0 flex-col px-4 pt-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1 pt-1 text-left">
            <h1 className="font-serif text-[20px] font-semibold text-white">Scan skin</h1>
            <p className={`mt-1 font-sans text-[12px] leading-[16px] text-white/65`}>
              Take a clear photo in good natural lighting.
            </p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-lg px-2 py-2 font-sans text-[15px] text-[#a8c4ff]"
          >
            Cancel
          </button>
        </div>
      </div>
      <div className="relative mx-4 mt-4 flex min-h-0 flex-1">
        <div className="aspect-square w-full max-w-[min(100%,280px)] self-center overflow-hidden rounded-xl bg-[#121212] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          {/* Soft face-like gradient — reads as live preview without stock photography */}
          <div
            className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-br from-[#3d2a22] via-[#1e1814] to-[#0f1218] pb-6 text-center"
            aria-hidden
          >
            <div className="mb-3 h-16 w-16 rounded-full bg-gradient-to-b from-[#c9a090]/35 to-[#6b4a3d]/25 blur-[0.5px] ring-1 ring-white/[0.08]" />
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-white/40">
              Align face in frame
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-4">
        <div className="h-1 w-full rounded-full bg-white/10">
          <div className="h-full w-[40%] rounded-full bg-white/35" />
        </div>
        <p className={`mt-2 text-center font-sans text-[11px] text-white/40`}>Zoom</p>
      </div>
      <div className="mt-4 flex items-center justify-center gap-10 pb-6">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white/90"
          aria-label="Library"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.4" />
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" fillOpacity="0.85" />
          </svg>
        </button>
        <button
          type="button"
          className="flex h-[68px] w-[68px] items-center justify-center rounded-full border-[3px] border-white/35 bg-white p-1 shadow-lg"
          aria-label="Shutter"
        >
          <span className="h-[54px] w-[54px] rounded-full bg-white" />
        </button>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-white/90"
          aria-label="Flip"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M7 16h10M7 16l2-2m-2 2l2 2M17 8H7m10 0l-2 2m2-2l-2-2" stroke="currentColor" strokeOpacity="0.85" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="pb-6 text-center">
        <button type="button" className="font-sans text-[13px] font-medium text-[#a8c4ff]">
          View examples
        </button>
      </div>
    </div>
  );
}

/* ——— Analyzing ——— */
export function SkinWiseAnalyzingScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col items-center justify-center ${pageBg} px-6 ${ink}`}>
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-[#e5e5e5] border-t-[#8b7355]"
        aria-hidden
      />
      <p className="mt-8 text-center font-serif text-[20px] font-semibold leading-[26px]">
        Processing
      </p>
      <p className={`mt-3 max-w-[16rem] text-left font-sans text-[13px] leading-[20px] ${sub}`}>
        Analyzing your image. Results are educational only — not a medical decision.
      </p>
      <div className="mt-8 h-1 w-full max-w-[13rem] overflow-hidden rounded-full bg-black/[0.06]">
        <div className="h-full w-[38%] animate-pulse rounded-full bg-[#8b7355]/90" />
      </div>
    </div>
  );
}

/* ——— Results (reference screen 6 — filled) ——— */
export function SkinWiseResultsScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <header className={`flex shrink-0 items-center justify-between border-b ${sep} px-2 py-2`}>
        <button type="button" className={`min-h-[44px] px-3 font-sans text-[15px] font-medium ${accentText}`}>
          Close
        </button>
        <span className="font-serif text-[15px] font-semibold">Results</span>
        <button type="button" className={`min-h-[44px] px-3 text-right font-sans text-[15px] font-medium ${accentText}`}>
          Share
        </button>
      </header>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-8 pt-6">
        <h2 className={`text-left font-serif text-[22px] font-semibold leading-[28px]`}>
          Your skin scan result
        </h2>
        <p className={`mt-2 font-sans text-[14px] leading-[20px] ${sub}`}>
          Here&apos;s what we found
        </p>

        <div className={`mt-6 ${cardBase} p-4`}>
          <p className={`font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
            Primary read
          </p>
          <p className={`mt-2 font-serif text-[18px] font-semibold`}>Dryness / barrier stress</p>
          <p className={`mt-2 font-sans text-[13px] leading-[20px] ${sub}`}>
            Visual pattern suggests reduced hydration. This is not a diagnosis.
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className={`${cardBase} p-3`}>
            <p className={`font-sans text-[10px] font-medium uppercase tracking-wide ${muted}`}>
              Confidence
            </p>
            <p className="mt-1 font-sans text-[22px] font-semibold tabular-nums">87%</p>
          </div>
          <div className={`${cardBase} p-3`}>
            <p className={`font-sans text-[10px] font-medium uppercase tracking-wide ${muted}`}>
              Risk flag
            </p>
            <p className={`mt-1 font-sans text-[15px] font-semibold ${accentText}`}>None</p>
          </div>
        </div>

        <p className={`mt-6 font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
          Explanation
        </p>
        <ul className={`mt-2 space-y-2 font-sans text-[13px] leading-[20px] ${sub}`}>
          <li className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8b7355]" />
            Even tone with mild dullness consistent with dry skin
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#8b7355]" />
            No features in this frame suggest urgent referral
          </li>
        </ul>

        <div className={`mt-6 rounded-xl border border-[#c4b59a]/40 bg-[#faf6ef] p-4`}>
          <p className="font-sans text-[12px] font-semibold text-[#5c4a38]">Disclaimer</p>
          <p className={`mt-1.5 font-sans text-[12px] leading-[17px] text-[#5c5348]`}>
            General wellness information only. See a clinician for diagnosis or if
            symptoms worsen.
          </p>
        </div>

        <SwPrimaryButton className="mt-6">View care tips</SwPrimaryButton>
      </div>
    </div>
  );
}

/* ——— Insights ——— */
export function SkinWisePersonalizedInsightsScreen() {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <div className={`border-b ${sep} px-4 py-3`}>
        <p className="text-center font-serif text-[17px] font-semibold">Care tips</p>
      </div>
      <div className="min-h-0 flex-1 space-y-4 overflow-y-auto px-4 pb-6 pt-4">
        <div>
          <p className={`mb-2 px-1 font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
            Routine
          </p>
          <div className={`${cardBase} p-4`}>
            <p className="font-sans text-[15px] font-semibold">Barrier care</p>
            <p className={`mt-2 font-sans text-[13px] leading-[20px] ${sub}`}>
              Gentle cleanser, ceramide moisturizer, daily SPF. Patch-test new products.
            </p>
          </div>
        </div>
        <div>
          <p className={`mb-2 px-1 font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
            When to see a clinician
          </p>
          <div className={`${cardBase} p-4`}>
            <p className={`font-sans text-[13px] leading-[20px] ${sub}`}>
              Persistent pain, bleeding, spreading rash, or fever — seek in-person
              care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ——— History ——— */
export function SkinWiseHistoryScreen({ activeTab = "history" }: { activeTab?: TabId }) {
  const items = [
    { date: "Apr 8, 2026", line: "Dryness · moderate confidence" },
    { date: "Mar 22, 2026", line: "Texture · low concern" },
    { date: "Mar 1, 2026", line: "Reviewed" },
  ];
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-3">
        <h1 className="font-serif text-[28px] font-bold leading-[34px]">History</h1>
        <p className={`mt-1 font-sans text-[14px] ${sub}`}>Saved on this device</p>
        <div className="mt-5 space-y-2">
          {items.map((row) => (
            <button
              key={row.date}
              type="button"
              className={`flex w-full items-center gap-3 rounded-xl ${cardBase} px-4 py-3 text-left active:bg-black/[0.02]`}
            >
              <div className="h-11 w-11 shrink-0 rounded-lg bg-[#e8e4de]" aria-hidden />
              <div className="min-w-0 flex-1 text-left">
                <p className="font-sans text-[15px] font-semibold">{row.date}</p>
                <p className={`font-sans text-[12px] ${sub}`}>{row.line}</p>
              </div>
              <ChevronRight />
            </button>
          ))}
        </div>
      </div>
      <IOSTabBar active={activeTab} />
    </div>
  );
}

/* ——— Profile ——— */
export function SkinWiseProfileScreen({ activeTab = "profile" }: { activeTab?: TabId }) {
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <div className="min-h-0 flex-1 overflow-y-auto px-4 pt-3">
        <h1 className="font-serif text-[28px] font-bold leading-[34px]">Profile</h1>
        <div className={`mt-5 flex items-center gap-3 rounded-xl ${cardBase} p-4`}>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d4ccc0] font-sans text-[17px] font-semibold text-white">
            PI
          </div>
          <div className="min-w-0 text-left">
            <p className="font-sans text-[17px] font-semibold">Pranathi Immanni</p>
            <p className={`font-sans text-[13px] ${sub}`}>pranathi@email.com</p>
          </div>
        </div>
        <p className={`mb-2 mt-8 px-1 font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
          Privacy
        </p>
        <div className={`overflow-hidden rounded-xl ${cardBase}`}>
          {[
            ["Photos & analysis", "Stored on device"],
            ["Export data", ""],
            ["Delete account", ""],
          ].map(([t, s], i) => (
            <button
              key={String(t)}
              type="button"
              className={`flex w-full items-center justify-between px-4 py-3 text-left active:bg-black/[0.03] ${i > 0 ? `border-t ${sep}` : ""}`}
            >
              <span>
                <span className="block text-left font-sans text-[15px]">{t}</span>
                {s ? <span className={`mt-0.5 block text-left font-sans text-[12px] ${sub}`}>{s}</span> : null}
              </span>
              <ChevronRight />
            </button>
          ))}
        </div>
        <div className="mt-6">
          <div className={`overflow-hidden rounded-xl ${cardBase}`}>
            <div className={`flex items-center justify-between px-4 py-3`}>
              <span className="font-sans text-[15px]">Notifications</span>
              <div className="relative h-[31px] w-[51px] rounded-full bg-[#8b7355]" aria-hidden>
                <span className="absolute right-[2px] top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md" />
              </div>
            </div>
          </div>
        </div>
        <p className={`mt-8 text-center font-sans text-[10px] leading-[14px] ${muted}`}>
          SkinWise v1.4.2 (284)
        </p>
      </div>
      <IOSTabBar active={activeTab} />
    </div>
  );
}

/* ——— Routine ——— */
export function SkinWiseRoutineScreen() {
  const steps = [
    { t: "Cleanser", d: "Fragrance-free", when: "AM / PM" },
    { t: "Moisturizer", d: "Ceramide formula", when: "AM / PM" },
    { t: "Sunscreen", d: "SPF 30+", when: "AM" },
  ];
  return (
    <div className={`flex h-full min-h-0 flex-col ${pageBg} ${ink}`}>
      <header className={`flex items-center border-b ${sep} px-2 py-2`}>
        <button type="button" className={`min-w-[56px] px-2 font-sans text-[15px] font-medium ${accentText}`}>
          Back
        </button>
        <span className="flex-1 text-center font-serif text-[15px] font-semibold">Care plan</span>
        <span className="min-w-[56px]" />
      </header>
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {steps.map((s, i) => (
          <div key={s.t} className={`${cardBase} p-4`}>
            <p className={`font-sans text-[11px] font-semibold uppercase tracking-wide ${muted}`}>
              Step {i + 1}
            </p>
            <p className="mt-1 font-sans text-[16px] font-semibold">{s.t}</p>
            <p className={`mt-1 font-sans text-[13px] ${sub}`}>{s.d}</p>
            <p className={`mt-2 font-sans text-[11px] ${muted}`}>{s.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Legacy export names */
export const SkinWiseScreenHome = SkinWiseHomeScreen;
export const SkinWiseScreenScan = SkinWiseCaptureScreen;
export const SkinWiseScreenInsights = SkinWisePersonalizedInsightsScreen;
export const SkinWiseScreenRoutine = SkinWiseRoutineScreen;
