import {
  cognitivePatternGameScreens,
} from "@/data/cognitive-pattern-game-assets";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  tags: string[];
  /** Remote image URL (see next.config remotePatterns) or /path in public */
  thumbnail: string;
  heroImage: string;
  overview: string;
  problem: string;
  process: string;
  solution: string;
  tools: string[];
  github?: string;
  live?: string;
  /** Status line on Works / project showcase cards (optional) */
  showcaseStatus?: {
    text: string;
    className: string;
  };
};

/**
 * Display order is intentional: empathy & emotional design → healthcare UX & systems
 * → technical depth — then additional work.
 */
export const projects: Project[] = [
  {
    slug: "teddy",
    title: "Teddy",
    shortDescription:
      "A calm mental wellness app for reflection without performance: quick mood check-ins, private journaling with prompts tucked out of the way, and weekly insights in plain language — so naming how you feel is a pause, not a report card.",
    tags: ["Mobile", "Wellness", "UI"],
    thumbnail: "https://picsum.photos/seed/teddy-thumb/1200/800",
    heroImage: "https://picsum.photos/seed/teddy-hero/1600/900",
    overview:
      "Teddy explores how visual and interaction design can support emotional safety: cream and beige surfaces, rounded components, calm typography, and copy that never rushes the user. Five screens cover home check-in, mood capture, journaling, a simple mood trend, and gentle recommendations — built as live UI in the browser for portfolio presentation.",
    problem:
      "Many wellness apps overwhelm with charts, gamification, or cold clinical language. People seeking calm need hierarchy that whispers, not shouts — especially on small screens.",
    process:
      "Defined a warm design language (tokens for surfaces, accent brown, shadows), then iterated mobile layouts for thumb reach, readability, and optional inputs without friction.",
    solution:
      "A cohesive set of high-fidelity mobile screens with a teddy-inspired comfort metaphor: minimal chrome, generous whitespace, soft actions, and disclaimers where appropriate — demonstrating product thinking for mental-health-adjacent UX.",
    tools: ["Figma", "React", "Tailwind CSS", "Mobile UX"],
    showcaseStatus: {
      text: "Fully developed as an interactive prototype — exploring a future release on the App Store.",
      className:
        "mt-2 max-w-xl font-sans text-base font-medium leading-snug text-[var(--foreground-soft)] sm:text-[1.05rem]",
    },
  },
  {
    slug: "carebridge",
    title: "CareBridge",
    shortDescription:
      "A web patient portal concept that pairs an AI-assisted symptom checker with labs, appointments, and messaging — clarity, trust, and accessibility first.",
    tags: ["Healthcare UX", "Web", "AI", "Accessibility"],
    thumbnail: "https://picsum.photos/seed/carebridge-thumb/1200/800",
    heroImage: "https://picsum.photos/seed/carebridge-hero/1600/900",
    overview:
      "CareBridge explores a unified patient experience: assistive triage language and transparent AI limits, plus the practical tools patients need in one calm dashboard — aligned with how enterprise portals like Epic aim to serve diverse users.",
    problem:
      "Patients often start with unreliable search, while portals bury tasks and show labs as raw data. The gap between “what might this be?” and “what do I do next?” widens anxiety and delays appropriate care.",
    process:
      "Mapped IA around patient goals, prototyped dashboard and symptom flows with accessibility-minded typography, and defined ethical-AI copy patterns for uncertainty and escalation.",
    solution:
      "A concept web app combining guided symptom intake, confidence-aware outputs, care-tier recommendations, simplified lab summaries, booking, and secure messaging — designed for older adults and high-trust clinical settings.",
    tools: ["Figma", "Healthcare UX", "IA", "Accessibility", "AI product ethics", "React concepts"],
  },
  {
    slug: "patient-portal-redesign",
    title: "Patient Portal Redesign",
    shortDescription:
      "A responsive web portal redesign that makes labs, appointments, messages, and medications easier to find — with stronger hierarchy and accessibility.",
    tags: ["Healthcare UX", "Web", "Accessibility"],
    thumbnail: "https://picsum.photos/seed/patientportal/1200/800",
    heroImage: "https://picsum.photos/seed/patientportalhero/1600/900",
    overview:
      "This project reimagines a patient-facing web portal so people can understand medical information, manage appointments, message providers, and track medications without fighting the UI. The focus is information architecture, readability, and patterns that work for older adults and infrequent users — priorities that align with enterprise healthcare products.",
    problem:
      "Legacy portals often bury labs, messages, and scheduling behind cluttered navigation and technical lab displays. Cognitive overload in sensitive moments weakens trust and completion rates.",
    process:
      "Research-informed IA, task-based dashboard design, iterative wireframes through hi-fi responsive layouts, and accessibility-minded components (contrast, type scale, focus, touch targets).",
    solution:
      "A calmer dashboard with clear priorities, simplified lab presentation, streamlined messaging and refill flows, and a reorganized nav across dashboard, appointments, results, messages, medications, billing, and settings.",
    tools: ["Figma", "IA mapping", "Prototyping", "Accessibility", "Healthcare UX"],
  },
  {
    slug: "skinwise",
    title: "SkinWise",
    shortDescription:
      "An AI-powered app that analyzes skin conditions and delivers personalized insights, making skincare more accessible and intuitive.",
    tags: ["AI", "Mobile", "UX/UI"],
    thumbnail: "https://picsum.photos/seed/skinwise/1200/800",
    heroImage: "https://picsum.photos/seed/skinwisehero/1600/900",
    overview:
      "SkinWise is an AI-assisted mobile experience that helps users understand possible skin conditions through on-device or uploaded imagery, then receive clear, personalized health insights powered by computer vision and generative models. The system was designed end-to-end with privacy as a first-class requirement: Flask APIs orchestrate model calls and business logic, data lives in encrypted SQL storage, and authentication gates every sensitive action. Responsible handling of health-adjacent data is central to my work as a data scientist — SkinWise reflects that commitment in both architecture and UX.",
    problem:
      "People often rely on generic search results for skin concerns, which increases anxiety and misinformation. Any product in this space must pair helpful AI output with transparent limitations, strong consent, and safeguards for photos and personal health signals.",
    process:
      "Mapped the journey from image capture through classification, insight generation, and follow-up education. Implemented Flask services for API composition, integrated computer vision and generative AI endpoints, and designed the persistence layer with encryption, least-privilege access, and auditable authentication flows.",
    solution:
      "A pipeline that classifies skin imagery, enriches results with careful, personalized copy via generative APIs, and keeps user data protected through encrypted storage and secure sessions — demonstrating that rigorous privacy engineering and a calm, trustworthy interface can coexist.",
    tools: [
      "Figma",
      "Python",
      "Flask",
      "Computer Vision",
      "Generative AI APIs",
      "SQL",
      "Encryption",
      "Auth",
      "Mobile",
    ],
    showcaseStatus: {
      text: "In Progress!",
      className: "mt-2 font-sans text-lg font-bold text-[var(--foreground)]",
    },
  },
  {
    slug: "designing-interaction-through-play",
    title: "Designing Interaction Through Play",
    shortDescription:
      "A web-based Interactive Pattern Experience exploring UX/UI through flow, feedback, and clarity — interaction and timing over decoration, with a simple pattern loop as the teaching surface.",
    tags: ["Web", "Interaction Design", "UI", "UX"],
    thumbnail: cognitivePatternGameScreens.entrance,
    heroImage: cognitivePatternGameScreens.about,
    overview:
      "This project studies how people understand interactive systems through feedback and flow. Built as a browser experience focused on pattern recognition and response, it uses a deliberately minimal surface so that timing, state changes, and clarity — not visual noise — drive engagement.",
    problem:
      "Dense or decorative interfaces often obscure the interaction model. For a piece meant to demonstrate UX thinking, the risk was that users would read the visuals before they understood the system — undermining the goal of showing how interaction design shapes behavior.",
    process:
      "Framed the work around a short user loop (observe, act, receive feedback), iterated on input affordances and visual states, and aligned copy with what the interface actually does — keeping the structure simple so principles stay visible.",
    solution:
      "A minimal interactive prototype with consistent patterns, immediate feedback for every action, and a calm layout that foregrounds flow and responsiveness — framed as a UX/UI interaction study rather than a gameplay showcase.",
    tools: ["HTML/CSS", "JavaScript", "Interaction design", "UX/UI", "Prototyping"],
    live: "https://game-six-psi-82.vercel.app/",
  },
  {
    slug: "design-system-refresh",
    title: "Design System Refresh",
    shortDescription:
      "A scalable UI kit and documentation site for a multi-product SaaS team.",
    tags: ["Design Systems", "React", "UX"],
    thumbnail: "https://picsum.photos/seed/dsr/800/600",
    heroImage: "https://picsum.photos/seed/dsrhero/1600/900",
    overview:
      "The team needed one source of truth for typography, color, and components across web apps. I led the visual refresh and implementation strategy.",
    problem:
      "Inconsistent buttons, spacing, and patterns slowed delivery and confused users moving between products.",
    process:
      "Audited existing screens, prioritized tokens (type, color, radius), built Figma libraries, and paired with engineers to ship components in Storybook and React.",
    solution:
      "A documented system with accessible defaults, dark mode, and migration guides. Adoption increased and design–dev handoff time dropped.",
    tools: ["Figma", "Storybook", "React", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://vercel.com",
  },
  {
    slug: "mobile-banking-flow",
    title: "Mobile Banking Onboarding",
    shortDescription:
      "Reducing drop-off in a multi-step KYC flow with clearer progress and trust cues.",
    tags: ["UX", "Research", "Mobile"],
    thumbnail: "https://picsum.photos/seed/mb/800/600",
    heroImage: "https://picsum.photos/seed/mbhero/1600/900",
    overview:
      "A case study in simplifying a regulated onboarding experience without sacrificing compliance.",
    problem:
      "Users abandoned the flow at identity verification; analytics showed confusion around required documents and timing.",
    process:
      "Ran 8 moderated tests, mapped failure points, iterated on copy and step grouping, and validated with a clickable prototype.",
    solution:
      "A linear flow with explicit progress, document examples, and reassurance at high-anxiety steps. Completion rate improved measurably.",
    tools: ["Figma", "Maze", "Principle", "Analytics"],
    live: "https://example.com",
  },
  {
    slug: "ai-search-assistant",
    title: "AI Search Assistant",
    shortDescription:
      "An assistant UI for natural-language queries over internal knowledge bases.",
    tags: ["AI", "Product", "Frontend"],
    thumbnail: "https://picsum.photos/seed/ai/800/600",
    heroImage: "https://picsum.photos/seed/aihero/1600/900",
    overview:
      "Explored how to present AI-generated answers with citations and recoverability when the model is wrong.",
    problem:
      "Employees distrusted black-box answers; support tickets spiked when citations were missing or vague.",
    process:
      "Defined interaction patterns for streaming responses, source cards, and feedback. Built a Next.js prototype against a mock API.",
    solution:
      "A side-by-side layout with grounded snippets, explicit uncertainty states, and thumbs feedback to improve the model loop.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    github: "https://github.com",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    shortDescription:
      "Dense data, calm UI — charts and tables for operations teams.",
    tags: ["UI", "Data Viz", "React"],
    thumbnail: "https://picsum.photos/seed/dash/800/600",
    heroImage: "https://picsum.photos/seed/dashhero/1600/900",
    overview:
      "Reimagined an internal dashboard for readability under time pressure and frequent filtering.",
    problem:
      "Operators struggled to compare periods and spot anomalies; the old UI overloaded a single page with competing widgets.",
    process:
      "Interviewed power users, simplified the information hierarchy, introduced saved views, and tested chart density.",
    solution:
      "A responsive grid with consistent chart language, keyboard-friendly filters, and export flows that matched team rituals.",
    tools: ["React", "D3", "TanStack Table", "Figma"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Curated projects on the home “Works” strip and `/projects` (order in `projects` above). */
export const PORTFOLIO_SHOWCASE_COUNT = 5;

export function getFeaturedProjects(
  count = PORTFOLIO_SHOWCASE_COUNT,
): Project[] {
  return projects.slice(0, count);
}

/** Same list as the home page — use for /projects listing only. */
export function getPortfolioShowcaseProjects(): Project[] {
  return getFeaturedProjects(PORTFOLIO_SHOWCASE_COUNT);
}
