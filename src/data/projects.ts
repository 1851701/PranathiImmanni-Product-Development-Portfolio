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
 * Display order: featured work first (home + `/projects`), then additional samples.
 * Featured order: Teddy → UI Game Portfolio → CareBridge → SkinWise.
 */
export const projects: Project[] = [
  {
    slug: "teddy",
    title: "Teddy",
    shortDescription:
      "A calm mental wellness app for reflection without performance: quick mood check ins, private journaling with prompts tucked out of the way, and weekly insights in plain language, so naming how you feel is a pause, not a report card.",
    tags: ["Mobile", "Wellness", "UI"],
    thumbnail: "https://picsum.photos/seed/teddy-thumb/1200/800",
    heroImage: "https://picsum.photos/seed/teddy-hero/1600/900",
    overview:
      "Teddy explores how visual and interaction design can support emotional safety: cream and beige surfaces, rounded components, calm typography, and copy that never rushes the user. Five screens cover home check in, mood capture, journaling, a simple mood trend, and gentle recommendations, built as live UI in the browser for portfolio presentation.",
    problem:
      "Many wellness apps overwhelm with charts, gamification, or cold clinical language. People seeking calm need hierarchy that whispers, not shouts, especially on small screens.",
    process:
      "Defined a warm design language (tokens for surfaces, accent brown, shadows), then iterated mobile layouts for thumb reach, readability, and optional inputs without friction.",
    solution:
      "A cohesive set of high fidelity mobile screens with a teddy inspired comfort metaphor: minimal chrome, generous whitespace, soft actions, and disclaimers where appropriate, demonstrating product thinking for mental health adjacent UX.",
    tools: ["Figma", "React", "Tailwind CSS", "Mobile UX"],
    showcaseStatus: {
      text: "Fully developed as an interactive prototype, exploring a future release on the App Store.",
      className:
        "mt-2 max-w-xl font-sans text-base font-medium leading-snug text-[var(--foreground-soft)] sm:text-[1.05rem]",
    },
  },
  {
    slug: "ui-game-portfolio",
    title: "UI Game Portfolio",
    shortDescription:
      "Interactive 3D narrative in the browser with physics-based interactions — React, Three.js, Framer Motion, and GSAP. Reached 10K+ unique users in the first 48 hours after launch.",
    tags: ["React", "Three.js", "Framer Motion", "Web", "UX"],
    thumbnail: "/projects/ui-game-portfolio/showcase-works-redefine-gaming.png",
    heroImage: "/projects/ui-game-portfolio/showcase-works-city-hero.png",
    overview:
      "A live web experience that pairs a cinematic 3D narrative shell with a learnable interaction loop. Built with React and Three.js, animated with Framer Motion and GSAP, it demonstrates how motion and feedback can teach a system without a manual — with strong early traction after release.",
    problem:
      "Spectacle without a model teaches mood but not method. The risk was a beautiful 3D shell with a fuzzy loop underneath, which would undercut the story about interaction craft.",
    process:
      "We framed a short repeatable path through the narrative, then tuned timing, physics cues, and feedback until users could explain what would happen on the next interaction. Visual noise dropped whenever it competed with clarity.",
    solution:
      "A shipped build with a clear contract: observe, act, see the result, continue — documented here with captures and a live embed so visitors can both see and try.",
    tools: [
      "React",
      "Three.js",
      "Framer Motion",
      "GSAP",
      "TypeScript",
      "Figma",
    ],
    live: "https://game-six-psi-82.vercel.app/",
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
    slug: "skinwise",
    title: "SkinWise",
    shortDescription:
      "An AI powered app that analyzes skin conditions and delivers personalized insights, making skincare more accessible and intuitive.",
    tags: ["AI", "Mobile", "UX and UI"],
    thumbnail: "https://picsum.photos/seed/skinwise/1200/800",
    heroImage: "https://picsum.photos/seed/skinwisehero/1600/900",
    overview:
      "SkinWise is an AI assisted mobile experience that helps users understand possible skin conditions through on device or uploaded imagery, then receive clear, personalized health insights powered by computer vision and generative models. The system was designed end to end with privacy as a first class requirement: Flask APIs orchestrate model calls and business logic, data lives in encrypted SQL storage, and authentication gates every sensitive action. Responsible handling of health adjacent data is central to my work as a data scientist. SkinWise reflects that commitment in both architecture and UX.",
    problem:
      "People often rely on generic search results for skin concerns, which increases anxiety and misinformation. Any product in this space must pair helpful AI output with transparent limitations, strong consent, and safeguards for photos and personal health signals.",
    process:
      "Mapped the journey from image capture through classification, insight generation, and follow-up education. Implemented Flask services for API composition, integrated computer vision and generative AI endpoints, and designed the persistence layer with encryption, least-privilege access, and auditable authentication flows.",
    solution:
      "A pipeline that classifies skin imagery, enriches results with careful, personalized copy via generative APIs, and keeps user data protected through encrypted storage and secure sessions, demonstrating that rigorous privacy engineering and a calm, trustworthy interface can coexist.",
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

/** Curated projects on the home “Works” strip and `/projects` (first N in `projects` above). */
export const PORTFOLIO_SHOWCASE_COUNT = 4;

export function getFeaturedProjects(
  count = PORTFOLIO_SHOWCASE_COUNT,
): Project[] {
  return projects.slice(0, count);
}

/** Same list as the home page — use for /projects listing only. */
export function getPortfolioShowcaseProjects(): Project[] {
  return getFeaturedProjects(PORTFOLIO_SHOWCASE_COUNT);
}
