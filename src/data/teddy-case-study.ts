/**
 * Teddy UX case study copy.
 * Design inspiration reference imagery (Reflectly, Calm).
 */
export const teddyInspirationImages = {
  reflectly: "/images/teddy/inspiration/reflectly.png",
  calm: "/images/teddy/inspiration/calm.png",
} as const;

export const teddyCaseStudy = {
  hero: {
    subtitle: "Mental wellness · mobile UI",
    description:
      "A calm companion for checking in with yourself. Teddy is a mental wellness concept built around warmth, patience, and the kind of emotional safety we often forget to offer ourselves.",
    /** Shown as pills in the hero (aligned with project overview tools) */
    tags: ["Figma", "React", "Tailwind CSS", "Prototyping"] as const,
  },
  comingSoon:
    "Teddy is built end-to-end as a working prototype with live UI in the browser. The next step is additional polish and validation; I’m evaluating timing and requirements for a potential App Store release.",
  overview: {
    date: "2026",
    role: "Product design and UI concepts",
    tools: ["Figma", "React", "Tailwind CSS", "Prototyping"],
    paragraphs: [
      "Growing up, a worn teddy bear sat on my shelf, not as decoration, but as something to hold onto when words did not come easily. It was not about the object itself; it was about comfort without judgment. That memory stayed with me: the feeling of being allowed to be small, messy, or quiet, and still be okay.",
      "Teddy the app started from that same impulse. I wanted to design a space that could offer a fraction of that comfort on a phone, not to replace human connection or professional care, but to give people a gentler place to land when life feels loud. The name is a nod to something many of us understand without explaining it: softness, familiarity, and the permission to simply feel.",
      "The project is deeply personal, but the goal is universal. So many wellness tools ask us to perform: to streak, optimize, or prove we are “doing the work.” I kept asking what the opposite might look like: an experience that meets you where you are, asks little upfront, and never punishes you for skipping a day.",
      "Teddy is still a concept in motion: a place to practice emotional design, empathy in copy, and restraint in layout. Every screen is an argument for slowness: short check ins, private journaling, light insights, and suggestions that feel optional, not obligatory. If it succeeds, it should feel less like an app and more like a deep breath.",
    ],
  },
  team: [{ name: "Pranathi Immanni", role: "Product designer" }],
  problem: {
    hmw:
      "How might we help people notice and name how they feel, and build a sustainable emotional check in habit, without adding stress, shame, or cognitive overload?",
    body:
      "When you are already overwhelmed, another dashboard can feel like a mirror you did not ask for. Many wellness products speak the language of optimization: streaks, scores, and endless improvement, and for some of us, that language lands as pressure, not care. Real habit building, the kind that actually sticks, needs room to be imperfect. I held that tension at the center of this work: how to support growth without turning feelings into something to manage or measure into the ground.",
  },
  inspiration: {
    intro:
      "I studied apps that handle mood and emotional wellness with a light touch, looking at layout, color, and cognitive load so Teddy could borrow what works without copying any single product. The references below are for analysis and inspiration.",
    examples: [
      {
        title: "Reflectly",
        description:
          "An AI-powered mood tracker and journal with a soft, neumorphic feel: lilac and white, rounded surfaces, and mood input that stays low effort.",
        imageKey: "reflectly" as const,
        learned: [
          "Simple, low-effort mood input",
          "Soft gradients and calming colors",
          "Minimal UI",
          "Lightweight insights",
        ],
        applied: [
          "Emoji-first check-in with optional detail, so the first tap always feels achievable",
          "Warm neutrals and soft surfaces instead of loud accent colors",
          "One primary action per screen and progressive disclosure for depth",
          "Insights framed as gentle summaries: context without a scoreboard",
        ],
      },
      {
        title: "Calm",
        description:
          "A leading mental wellness app known for its immersive, calming experience and minimal design.",
        imageKey: "calm" as const,
        learned: [
          "Strong emotional atmosphere",
          "Minimal interface design",
          "Soft, immersive visuals",
          "Reduced cognitive load",
        ],
        applied: [
          "Breathing room in layout: fewer competing modules on home",
          "Restraint in chrome: typography and spacing carry the calm",
          "Soft shadows and rounded frames so the UI feels touchable, not clinical",
          "Copy and flow that never rush the user through a “perfect” session",
        ],
      },
    ],
  },
  userInsights: [
    "Safety comes first: people need to feel in charge of how much they share, how fast they move, and when they stop.",
    "The smallest interaction can be enough: one tap, one honest line, if the app does not demand more to make it “count.”",
    "When the interface stays calm and predictable, shame has less room to grow; coming back after a hard day feels possible.",
    "Trust lives in plain words and clear boundaries, not in clever empty promises about data or outcomes.",
  ],
  iteration: {
    intro:
      "The first drafts tried too hard: either too clinical, or too cute. The work became about finding a voice that felt human: warm without being childish, structured without being strict. Here are three places where listening to that tension changed the design.",
    mood: {
      title: "Mood input",
      before:
        "I started with long scales and multiple sliders on one screen: thorough on paper, exhausting in real life.",
      after:
        "Emoji came first, with a light fine-tune and an optional note tucked underneath. You can go deep, but you don’t have to.",
      why:
        "On a heavy day, precision feels like homework. I wanted the first gesture to be almost embarrassingly easy, because that is sometimes all someone can give.",
    },
    journal: {
      title: "Journaling",
      before:
        "Prompts and templates led the screen: helpful for some, but they quietly said: there is a right way to journal.",
      after:
        "The journal opened up: a soft headline, a wide field, prompts behind a single “Prompts” door, and autosave mentioned almost as an aside.",
      why:
        "Reflection shouldn’t feel like an assignment. Support should sit nearby, not on top of you.",
    },
    ui: {
      title: "UI simplification",
      before:
        "Home tried to do everything at once: tips, streaks, shortcuts, each one shouting for attention.",
      after:
        "Home learned to breathe: greeting, moods, one supportive line, one clear button. Everything else waits its turn.",
      why:
        "In emotional moments, hierarchy is a kind of kindness. Fewer demands mean more trust.",
    },
  },
  userFlow: {
    steps: [
      "Home",
      "Check in",
      "Journal",
      "Insights",
      "Recommendations",
    ] as const,
    caption:
      "The path reads as a line so nobody gets lost, but you are never trapped in it. Pause after a check in, skip the journal, come back tomorrow. The flow holds you lightly.",
    ribbonNote:
      "Side paths stay open: settings, help, and pausing streak logic so a missed day never reads as failure.",
    schematicCardCaption:
      "A compact read of the core loop from home through recommendations. The detailed diagram earlier shows the same path with full labels.",
  },
  diagramSection: {
    intro:
      "These visuals summarize how the product behaves at a system level: which colors carry meaning, how accessibility stayed concrete, what I learned from the work, and what I would validate next with people and partners.",
    paletteIntro:
      "The interface stays in a narrow warm range so nothing shouts. Accent color is used sparingly for primary actions and focus, not for decoration everywhere.",
    accessibilityIntro:
      "Accessibility was not a late checklist. Contrast, touch targets, motion sensitivity, and honest copy were part of how emotional safety showed up in the product.",
    accessibilityHighlightTitle: "Inclusive design",
    accessibilityPillars: [
      {
        title: "Contrast and type",
        body: "Readable body text and clear hierarchy so nobody has to lean in on a hard day. Color carries meaning sparingly so focus and links stay obvious.",
      },
      {
        title: "Touch and motion",
        body: "Primary actions meet comfortable target sizes. Motion and haptics stay subtle so people who prefer reduced motion never feel punished.",
      },
      {
        title: "Honest language",
        body: "Limits and consent show up in everyday words, not only in legal padding. The app says what it is and what it is not.",
      },
    ],
    takeawaysIntro:
      "These are the lessons I carry into other health adjacent work: restraint reads as care, and clarity about limits builds more trust than clever promises.",
    takeaways: [
      "Hierarchy is emotional: when the UI stops competing for attention, people have more room to notice how they actually feel.",
      "Insights work best when they describe patterns in plain language instead of ranking the user against a hidden ideal.",
      "Optional depth beats forced completeness. Every extra field is a tax on a hard day.",
      "Naming limits in copy (what the app is and is not) protects trust more than optimistic marketing language ever could.",
    ],
    takeawaysHub: {
      center: "Emotional safety",
      branches: [
        {
          label: "Visual calm",
          items: ["Warm cream palette", "Soft cards", "Single accent"],
        },
        {
          label: "Hierarchy",
          items: ["One primary action", "Breathing layout", "Optional depth"],
        },
        {
          label: "Insights",
          items: ["Plain language", "Patterns not scores"],
        },
        {
          label: "Trust in copy",
          items: ["Honest limits", "No streak guilt"],
        },
        {
          label: "Access",
          items: ["Contrast", "Touch targets", "Reduced motion"],
        },
      ],
    },
    nextStepsIntro:
      "Shipping the prototype was one milestone. The next phase is about evidence and partnership, not feature count.",
    nextSteps: [
      "Moderated sessions with people who use wellness apps sporadically, to stress test tone and guilt free flows.",
      "Light quantitative usage probes on completion rates without turning engagement into a scoreboard.",
      "Accessibility audit on real devices with VoiceOver and Dynamic Type, then fixes for any brittle layouts.",
      "If a release path forms, collaboration with a clinical or counseling advisor on language and escalation copy.",
    ],
  },
  beforeAfter: {
    intro:
      "Early layouts tried to be thorough: multiple sliders, streaks, and modules competing for attention. The iteration focused on emotional safety: one clear action at a time, with depth available but never required.",
    pairs: [
      {
        id: "mood" as const,
        title: "Mood input",
        why:
          "On a heavy day, precision feels like homework. Emoji first input with an optional fine tune keeps the first gesture embarrassingly easy, because that is sometimes all someone can give.",
      },
      {
        id: "home" as const,
        title: "Home screen layout",
        why:
          "In emotional moments, hierarchy is kindness. Home learned to breathe: greeting and moods first; everything else waits so the screen never shouts when someone is already overwhelmed.",
      },
    ],
  },
  insightsComparison: {
    intro:
      "Wellness apps often mirror fitness dashboards: dense charts, scores, and comparisons. Teddy deliberately resists that language: the goal is self noticing, not optimization.",
    complexLabel: "Typical analytics",
    complexHint: "Multiple metrics, competing charts, and scoreboard energy.",
    teddyLabel: "Teddy’s approach",
    teddyHint: "One soft trend line and plain language: context without ranking you.",
    reasoning:
      "Complex analytics imply there is a “right” trajectory. For mental health, that can land as failure. I kept insights lightweight: enough pattern to recognize yourself, never enough to compare yourself to a norm or a past self you can’t reach again.",
  },
  emotionalDesign: {
    intro:
      "Emotional design here is not decoration: it is how the product proves it will not punish you. These four pillars stayed non negotiable as the UI evolved.",
    pillars: [
      {
        title: "Color choices",
        body:
          "Warm cream surfaces, muted browns, and a single soft accent carry calm. I avoided high-saturation “success green” and alarm reds that read as judgment or urgency.",
        variant: "color" as const,
      },
      {
        title: "UI shapes",
        body:
          "Generous corner radii, soft shadows, and card silhouettes that feel touchable, closer to a journal than a clinical form. Sharp edges and dense grids read as scrutiny.",
        variant: "shapes" as const,
      },
      {
        title: "Tone of voice",
        body:
          "Short sentences, permission giving copy, honest limits. No streak guilt, no promises of transformation: language that respects what an app can and cannot do.",
        variant: "tone" as const,
      },
      {
        title: "Interaction design",
        body:
          "Primary actions are obvious; secondary paths are visible but quiet. Sliders and notes stay optional. Nothing times you out or celebrates “completion” in a way that could feel like a test.",
        variant: "interaction" as const,
      },
    ],
  },
  screenCallouts: {
    home: [
      {
        label: "Greeting-first hierarchy",
        detail:
          "The day opens with human language, not a dashboard, reducing the sense of being measured the moment you arrive.",
        pin: { top: "14%", left: "8%" },
      },
      {
        label: "Emoji-first moods",
        detail:
          "Five faces keep choice finite and fast; no scrolling scales before you’ve named how you feel.",
        pin: { top: "42%", left: "50%" },
      },
      {
        label: "Single primary action",
        detail:
          "One warm CTA so the path forward is obvious: supporting copy stays secondary.",
        pin: { top: "78%", left: "12%" },
      },
    ],
    mood: [
      {
        label: "Faces before precision",
        detail:
          "Emoji row establishes a mood anchor before any numeric fine tuning, meeting people where they are.",
        pin: { top: "28%", left: "10%" },
      },
      {
        label: "Fine-tune as optional",
        detail:
          "The slider refines the face, not the other way around: depth without a form like burden.",
        pin: { top: "52%", left: "8%" },
      },
      {
        label: "Private note",
        detail:
          "Optional text is clearly labeled and framed as yours alone on device: boundaries as UX.",
        pin: { top: "68%", left: "45%" },
      },
    ],
    journal: [
      {
        label: "Wide field, low chrome",
        detail:
          "The textarea dominates so writing feels like the main event, not a side task.",
        pin: { top: "22%", left: "12%" },
      },
      {
        label: "Prompts tucked away",
        detail:
          "“Prompts” stays a secondary door: help without dictating the “right” way to journal.",
        pin: { top: "18%", left: "78%" },
      },
    ],
    insights: [
      {
        label: "Soft trend, not a score",
        detail:
          "A single sparkline summarizes the week without league tables or percentile language.",
        pin: { top: "30%", left: "10%" },
      },
      {
        label: "Narrative summary",
        detail:
          "Plain language reflection connects dots gently: observation, not diagnosis.",
        pin: { top: "58%", left: "12%" },
      },
    ],
    recommendations: [
      {
        label: "Low-energy cards",
        detail:
          "Suggestions are sized like small rituals: never a wall of courses or homework.",
        pin: { top: "32%", left: "10%" },
      },
      {
        label: "Honest disclaimer",
        detail:
          "Footer copy sets expectations: supportive, not a substitute for care you need.",
        pin: { top: "82%", left: "8%" },
      },
    ],
  },
  finalScreens: {
    intro:
      "What you see here is Teddy built for real in the browser: living typography, spacing, and tone inside iPhone style frames. It is not a deck of static mocks; it is the thing itself, still growing.",
    screens: [
      {
        key: "home",
        label: "Home and daily check in",
        rationale:
          "The day starts with a greeting, not a metric. Mood sits front and center because naming how you feel is already a kind of care: the rest can wait.",
      },
      {
        key: "mood",
        label: "Mood check-in",
        rationale:
          "Faces and a gentle slider meet people faster than forms. The copy stays permissive: this is reflection, not diagnosis.",
      },
      {
        key: "journal",
        label: "Journal",
        rationale:
          "A quiet page for honest words. Prompts are one tap away so support never blocks the first sentence.",
      },
      {
        key: "insights",
        label: "Insights",
        rationale:
          "A soft look back at the week: enough pattern to notice yourself, not enough chart to compare yourself to anyone else.",
      },
      {
        key: "recommendations",
        label: "Recommendations",
        rationale:
          "Small cards for breath, writing, or a tiny ritual: suggestions sized for low energy, always framed as optional.",
      },
    ],
  },
  reflection: [
    "Teddy taught me that designing for wellbeing is as much about silence as it is about screens. The negative space is where someone is allowed to be incomplete. Reflection in this product had to stay low stakes: one honest gesture could count for the day, journaling could stay half a sentence, and looking back at the week was about noticing a pattern, not proving improvement.",
    "The hardest part was resisting dashboard instincts. Streaks, scores, and dense charts read as judgment the moment someone is already fragile. I am proudest of the restraint: fewer demands, clearer exits, and copy that admits what software can and cannot do.",
    "What comes next is validating those choices with real people: listening, revising, and letting the product grow up beside them.",
  ],
} as const;
