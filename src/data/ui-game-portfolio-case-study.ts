/**
 * UI Game Portfolio — web experience case study (flow, feedback, clarity).
 */

export const UI_GAME_PORTFOLIO_LIVE =
  "https://game-six-psi-82.vercel.app/" as const;

/** Local screenshots under /public/projects/ui-game-portfolio/ */
export const uiGamePortfolioImages = {
  /** “REDEFINE GAMING” hero — cinematic landing capture */
  showcaseRedefineGaming: "/projects/ui-game-portfolio/showcase-works-redefine-gaming.png",
  /** City / Metagame sky scene — second marquee capture */
  showcaseCityHero: "/projects/ui-game-portfolio/showcase-works-city-hero.png",
} as const;

export const uiGamePortfolioCaseStudy = {
  hero: {
    title: "UI Game Portfolio",
    subtitle: "Web experience, game influenced art direction, and interaction systems",
    intro:
      "The live build is an interactive 3D narrative with physics-based interactions: motion, contrast, and feedback teach the system without a manual. This case study documents how we paired that spectacle with a tight interaction loop so visitors learn a model they can explain, not only a mood.",
    tags: ["React", "Three.js", "Framer Motion", "Web", "UX"] as const,
  },
  /** Matches the in-experience “Game intro” panel on the live site */
  gameIntro: {
    sectionTitle: "Game intro",
    description:
      "Interactive 3D narrative experience with physics-based interactions.",
    impactLine: "10K+ unique users within 48 hours of launch",
    techStack: ["React", "Three.js", "Framer Motion", "GSAP"] as const,
    launchCtaLabel: "Launch experience",
    /** Set when the game repo is public; empty hides the orange source button */
    sourceCodeUrl: "",
    sourceCtaLabel: "Get source code",
  },
  projectOverview: {
    date: "2026",
    scope:
      "Product design and UX research for the 3D narrative shell, interaction loop, and motion stack on the shipped web build",
    tools: [
      "React",
      "Three.js",
      "Framer Motion",
      "GSAP",
      "Figma",
      "TypeScript",
    ] as const,
    paragraphs: [
      "We set out to build a living portfolio argument: that interaction design is a language. The screen can whisper or shout, rush or wait, celebrate or correct. When those choices line up, people feel oriented. When they do not, even a beautiful layout feels untrustworthy.",
      "The experience pairs a cinematic landing world with a tight interaction loop underneath. That contrast is intentional. It lets viewers feel the tone of the product before they touch the mechanics, then it hands them something small and repeatable to learn from.",
      "Along the way we kept returning to the same questions. Does the user always know what just happened? Does the next step feel predictable? Could someone explain the rules to a friend after one pass through? Those questions became our review rubric for every build.",
    ],
  },
  team: [
    {
      name: "Pranathi Immanni",
      role: "Product designer",
    },
    {
      name: "Kushal Kongara",
      role: "Software engineer",
      href: "https://kushalkongara.vercel.app/",
    },
  ],
  problem: {
    hmw:
      "How might we design an interactive system that feels intuitive and engaging while using minimal chrome and unmistakable feedback?",
    paragraphs: [
      "Many marketing sites borrow game language without teaching interaction. Users see spectacle first and mechanics second, so they leave with a mood but not a model. For a portfolio piece about UX craft, that order had to flip. The interaction model needed to be honest, legible, and fast to learn.",
      "People also suffer when systems respond slowly or vaguely. A half second of ambiguity reads as uncertainty, and uncertainty kills the kind of playful exploration we wanted to invite. Feedback had to arrive as soon as the finger lifted.",
      "Visual design often gets the spotlight while states like loading, success, error, and empty stay fuzzy. This project treats those states as the real story. If we could not describe what each moment was for, we cut it.",
    ],
  },
  solution: {
    paragraphs: [
      "The solution is a minimal loop with a clear contract: watch, act, see the result, continue. Navigation stays shallow so the user never rebuilds a mental map between rounds.",
      "Responsiveness is part of the concept, not a polish pass. Inputs acknowledge immediately, outcomes read differently at a glance, and pacing between steps stays steady so the experience feels fair.",
      "Visually we kept surfaces quiet so the interaction could stay loud in the ways that matter: motion, contrast, and timing. Decoration supports the lesson instead of competing with it.",
      "The shipped build lives on the web so anyone can try it without an install. That choice matches the goal: reduce friction between curiosity and understanding.",
    ],
  },
  designFocus: [
    {
      title: "Flow",
      points: [
        "Steps connect in a single path so users always know where they are.",
        "Inputs repeat the same vocabulary round to round so learning transfers.",
      ],
    },
    {
      title: "Feedback",
      points: [
        "Every action returns a visible response without a lag that feels like doubt.",
        "Success and failure look different enough to scan in a blink.",
      ],
    },
    {
      title: "Clarity",
      points: [
        "The layout removes extras so attention stays on the task.",
        "Hierarchy keeps the sequence primary and the chrome secondary.",
      ],
    },
  ],
  flowSteps: [
    "Start",
    "Observe",
    "Interact",
    "Receive feedback",
    "Continue",
  ] as const,
  interactionDesign: {
    intro:
      "Input, timing, and state changes are designed as one system so users can predict what comes next.",
    items: [
      {
        title: "Clicks and taps",
        body: "Targets stay large and consistent so motor error stays low and attention stays on the pattern instead of the control.",
      },
      {
        title: "Timing and response",
        body: "Rhythm between states matches the mental model: watch, then act, then learn, without dead air that feels broken.",
      },
      {
        title: "Visual feedback states",
        body: "Neutral, active, success, and error each carry distinct cues so users never guess whether the last action counted.",
      },
      {
        title: "Guiding behavior",
        body: "Clear feedback invites another try. Confusing feedback trains hesitation. We optimized for the first outcome.",
      },
    ],
  },
  designDecisions: [
    {
      title: "Minimal UI",
      points: [
        "Fewer panels mean fewer distractions from the core loop.",
        "Interaction is the content, not wallpaper.",
      ],
    },
    {
      title: "Feedback first",
      points: [
        "Every gesture earns a response users can name.",
        "Outcomes do not rely on tiny captions to be understood.",
      ],
    },
    {
      title: "Consistency",
      points: [
        "Patterns repeat so skill transfers across rounds.",
        "Complexity grows in the task, not in new chrome.",
      ],
    },
  ],
  finalProduct: {
    intro:
      "Below you can open the live build, then walk through still frames from the experience. Together they show both the cinematic landing tone and the quieter moments inside the loop.",
  },
  reflection: {
    paragraph:
      "This project sharpened my instinct for interaction as a contract: people forgive visual taste differences far more easily than they forgive unclear outcomes, and designing the feedback layer first made the rest of the layout easier to defend. Flow and feedback are two sides of the same coin (flow sets expectation, feedback confirms reality), and when they diverge users feel tricked, so keeping them aligned is most of the craft. If I push this further, I would add optional sound design that reinforces correct and incorrect without punishing volume, run moderated sessions to watch where people hesitate, and publish a short screen recording so motion reads even when the embed does not.",
  },
} as const;
