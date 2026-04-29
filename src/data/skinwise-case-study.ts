/**
 * SkinWise case study copy. App UI is fully component based (see `src/components/skinwise/`).
 */

/** Case study imagery in /public/projects/skinwise/ */
export const skinwiseCaseStudyImages = {
  backgroundFlatlay: "/projects/skinwise/background-flatlay.png",
} as const;

/** Design process milestones (structure only, not tied to any external project). */
export const skinwiseTimeline = [
  { n: 1, label: "Discover", note: "Research and listening" },
  { n: 2, label: "Frame", note: "Problem and principles" },
  { n: 3, label: "Design", note: "Flows and UI" },
  { n: 4, label: "Prototype", note: "Testable builds" },
  { n: 5, label: "Validate", note: "Feedback and iteration" },
] as const;

export const skinwiseTimelineIntro =
  "How the work moved from discovery through validation, always anchored in user needs and responsible framing.";

export const skinwiseCaseStudy = {
  hero: {
    subtitle: "AI powered skincare assistant",
    intro:
      "SkinWise uses computer vision and thoughtful UX to help people understand their skin with clear limits, honest language, and privacy at the center. The interface is built so advanced analysis never outruns comprehension: users always see what happens to their data, what the app can infer, and what still requires a human professional.",
    tags: ["Figma", "AI", "Mobile", "UX and UI"] as const,
  },
  projectOverview: {
    date: "2025 — 2026",
    scope:
      "Product design, UX research, prototyping, and privacy minded backend collaboration for an AI assisted mobile concept",
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
    paragraphs: [
      "SkinWise bridges a common gap: people want trustworthy guidance about their skin, but most online content is noisy, generic, or optimized for clicks, not for care. Search results and short video clips rarely hold enough context for a single face, so users bounce between contradictory routines and expensive mistakes.",
      "The product focuses on a simple promise: translate what the camera sees into calm, personalized education. Users stay in control of what they share and what they do next. Every screen reinforces that promise with progressive disclosure, plain language, and visible consent rather than buried legal text.",
      "From a design standpoint, the challenge was to pair advanced AI with an interface that feels editorial and human: never clinical, never alarmist. That meant slowing the tempo where other apps rush to results, and surfacing limitations before the model runs so trust is earned early.",
    ],
  },
  team: [
    { name: "Pranathi Immanni", role: "Product and User Experience Design" },
    {
      name: "Pranavi Immanni",
      role: "Data science & AI engineering",
      href: "https://pranaviimmanni.vercel.app/",
    },
  ] as const,
  info: [
    { label: "Project type", value: "Mobile app · AI-assisted health UX" },
    { label: "Duration", value: "2025 — 2026" },
    { label: "Context", value: "Portfolio / concept project" },
    { label: "Role", value: "Product and User Experience Design" },
    { label: "Tools", value: "Figma, Python, Flask, Computer Vision, generative AI APIs, SQL, encryption, auth" },
    { label: "Platform", value: "iOS-first mobile" },
    { label: "Focus", value: "Trust, consent, comprehension" },
  ],
  /** Personal origin: short paragraphs placed after Overview */
  background: {
    paragraphs: [
      "My mother has worked as a beautician for more than twenty years. Growing up around her practice, I spent a lot of time listening to how she spoke with clients: what confused them, what they tried before they sat in her chair, and how often they felt unsure whether a product or routine was right for their skin.",
      "Those conversations made something clear: skincare is deeply individual, and one size fits all advice rarely holds. Many of her clients struggled to understand how to treat their concerns with confidence, not because they lacked care, but because trustworthy, personalized guidance was hard to come by. That gap stayed with me. SkinWise is my attempt to make calmer, more accessible direction possible by pairing thoughtful UX with AI, always with clear limits, consent, and respect for how personal this topic is.",
    ],
  },
  problem: {
    paragraphs: [
      "People often begin their skincare journey in search results or short form video. Those formats reward strong opinions and fast hooks, not nuance, skin context, or safety.",
      "When something looks or feels “off,” anxiety spikes. Without a calm, structured path, users bounce between products, routines, and advice that conflict with each other.",
      "Photos and health adjacent questions also raise legitimate privacy concerns. Any credible solution must treat consent, data minimization, and clear limitations as product requirements, not footnotes.",
    ],
  },
  solution: {
    paragraphs: [
      "SkinWise proposes a guided flow: capture or upload imagery with clear instructions, analyze visual signals with models tuned for skincare use cases, and return insights as plain language guidance, always framed as supportive information, not diagnosis.",
      "The experience layers education with action: routines, habits, and when to consult a professional. Technical depth sits behind the scenes; the UI stays legible and restrained.",
    ],
    features: [
      "Guided capture & informed consent before analysis",
      "Results with context, limitations, and next-step suggestions",
      "Personalized routines aligned to goals and sensitivity",
      "Account controls for data, history, and permissions",
    ],
  },
  userResearch: {
    paragraphs: [
      "I combined desk research (how people search for skin concerns) with interviews among frequent skincare users. Sessions explored mental models: what “results” should look like, and what would feel exploitative or unsafe.",
      "I also reviewed adjacent products (telehealth, trackers, and consumer apps) to study tone, onboarding, and how successful experiences build trust without overclaiming.",
    ],
  },
  painPoints: [
    {
      title: "Uncertainty",
      body: "Users struggle to judge severity and appropriate next steps without a calm guide.",
    },
    {
      title: "Overload",
      body: "Too many products and conflicting routines create decision fatigue.",
    },
    {
      title: "Trust",
      body: "Discomfort sharing photos without clarity on retention, use, and deletion.",
    },
    {
      title: "Tone",
      body: "Fear-based messaging increases anxiety instead of clarity.",
    },
  ],
  competitiveAnalysis:
    "I audited direct and adjacent experiences to compare onboarding, consent language, and how results are framed. Patterns that felt credible consistently under-promised, explained tradeoffs, and surfaced limitations before asking for commitment.",
  userFlow: {
    intro:
      "The primary path moves from intent to capture, analysis, insight, and action. Branching keeps language non diagnostic, and users can exit or revisit consent at any time.",
    schematicCaption:
      "The same journey as the phone row above, drawn as one line so the main sequence stays easy to scan.",
    steps: [
      "Home",
      "Capture",
      "Analyze",
      "Results",
      "Care plan",
    ] as const,
    ribbonNote:
      "Users can pause before upload, read retention rules, or jump to profile and history without losing their place in the main path.",
  },
  diagramSection: {
    intro:
      "These diagrams compress how SkinWise behaves as a system: which colors anchor trust, how accessibility and plain language show up in layout, what I learned from research and prototyping, and what I would test or ship next.",
    paletteIntro:
      "The palette stays cool and paper like so the UI reads as editorial, not alarming. Olive green carries primary actions and focus; warm gray text keeps long reading comfortable.",
    accessibilityIntro:
      "Health adjacent UX has to work for tired eyes and rushed thumbs. Contrast, target size, reduced motion, and consent copy in everyday words were treated as product requirements from the first wireframes.",
    accessibilityHighlightTitle: "Clear and safe to use",
    accessibilityPillars: [
      {
        title: "Readable by default",
        body: "Type hierarchy and spacing stay legible on small screens and in bright light. Dense clinical layouts were avoided on purpose.",
      },
      {
        title: "Consent before capture",
        body: "Users see what happens to photos before the camera rolls. Plain language beats jargon for retention, deletion, and who can see what.",
      },
      {
        title: "Escalation paths",
        body: "Results stay framed as possibilities. When something might be serious, the UI points to professional care instead of false certainty.",
      },
    ],
    takeawaysIntro:
      "These takeaways are the through line from interviews to pixels: credibility comes from restraint, not from the smartest sounding model.",
    takeaways: [
      "Users forgive imperfect camera lighting faster than they forgive vague data policies. Transparency beat feature breadth in every session.",
      "Results landed when framed as possibilities and next questions, not as verdicts. Certainty without a clinician in the loop felt unsafe.",
      "Calm hierarchy beat dense dashboards. When the screen breathed, people spent more time reading disclaimers and routines.",
      "Pairing AI with visible human escalation paths (see a dermatologist) increased trust more than any single accuracy claim.",
    ],
    nextStepsIntro:
      "The concept is strong enough to prototype; the next phase is about evidence, governance, and longitudinal use.",
    nextSteps: [
      "Structured usability tests with diverse skin tones and lighting, validating capture guidance and result copy across devices.",
      "Privacy review with a documented data lifecycle: retention windows, deletion UX, and export if users churn.",
      "Clinical or dermatology advisor review of language, disclaimers, and escalation patterns for edge cases.",
      "If the product matures, explore gentle longitudinal tracking (symptoms over weeks) with explicit opt in and export.",
    ],
    takeawaysHub: {
      center: "Trust and clarity",
      branches: [
        {
          label: "Transparency",
          items: ["Data policy first", "Retention explained", "Deletion paths"],
        },
        {
          label: "Results",
          items: ["Possibilities not verdicts", "Clear limits"],
        },
        {
          label: "Education",
          items: ["Routines step by step", "Plain terms"],
        },
        {
          label: "Privacy engineering",
          items: ["Encryption", "Least data", "Secure sessions"],
        },
        {
          label: "Human care",
          items: ["Dermatologist path", "When to seek help"],
        },
      ],
    },
  },
  wireframes: {
    paper:
      "Early paper explorations prioritized hierarchy: what users see first, how disclaimers appear, and how dense information breaks into scannable chunks.",
    loFi:
      "Digital wireframes translated those principles into flows we could test. Sessions validated whether people could explain what the app would do with their data and what it would not do.",
    bullets: [
      "Home and capture",
      "Results and education",
      "Routine planning",
      "Profile and privacy",
    ],
  },
  finalVisuals: {
    intro:
      "High fidelity screens emphasize typography, whitespace, and progressive disclosure so the product feels premium and calm, not like a clinical dashboard.",
  },
  privacy: [
    {
      title: "Data protection",
      body: "Sensitive content is encrypted in transit and at rest; collection stays limited to what the experience needs.",
    },
    {
      title: "Access and sessions",
      body: "Authentication and session design help ensure only the account owner can view personal history and imagery.",
    },
    {
      title: "Responsible AI",
      body: "Outputs are scoped and paired with clear limitations; the product avoids language that could be read as medical certainty.",
    },
  ],
  reflection: [
    "SkinWise reinforced that AI UX is as much about restraint as capability: the right details, at the right tempo, with honest boundaries. The interface had to earn permission before the model ran, and every result had to sound like supportive information rather than a remote diagnosis.",
    "The hardest design tension was between reassurance and accuracy. Users wanted hope, but not false certainty. The screens that tested best paired gentle visuals with explicit limits, and they always offered a path to professional care when something looked severe or persistent.",
    "Next, I would explore longitudinal tracking with explicit opt in and stronger partnerships with clinical reviewers to refine language and safeguards as the product evolves. The goal is not a bigger feature set, but a safer, clearer contract with the person in front of the camera.",
  ],
} as const;
