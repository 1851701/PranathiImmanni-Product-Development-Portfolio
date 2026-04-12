/**
 * SkinWise — case study copy. App UI is fully component-based (see `src/components/skinwise/`).
 */

/** Design-process milestones (structure only — not tied to any external project). */
export const skinwiseTimeline = [
  { n: 1, label: "Discover", note: "Research & listening" },
  { n: 2, label: "Frame", note: "Problem & principles" },
  { n: 3, label: "Design", note: "Flows & UI" },
  { n: 4, label: "Prototype", note: "Testable builds" },
  { n: 5, label: "Validate", note: "Feedback & iteration" },
] as const;

export const skinwiseTimelineIntro =
  "How the work moved from discovery through validation — always anchored in user needs and responsible framing.";

export const skinwiseCaseStudy = {
  hero: {
    subtitle: "AI-powered skincare assistant",
    intro:
      "SkinWise uses computer vision and thoughtful UX to help people understand their skin — with clear limits, honest language, and privacy at the center.",
    tags: ["Figma", "AI", "Mobile", "UX/UI"] as const,
  },
  overview: [
    "SkinWise bridges a common gap: people want trustworthy guidance about their skin, but most online content is noisy, generic, or optimized for clicks — not for care.",
    "The product focuses on a simple promise: translate what the camera sees into calm, personalized education. Users stay in control of what they share and what they do next.",
    "From a design standpoint, the challenge was to pair advanced AI with an interface that feels editorial and human — never clinical, never alarmist.",
  ],
  info: [
    { label: "Project type", value: "Mobile app · AI-assisted health UX" },
    { label: "Duration", value: "2024" },
    { label: "Context", value: "Portfolio / concept project" },
    { label: "Role", value: "Product design, UX research, prototyping" },
    { label: "Tools", value: "Figma, Python, Flask, Computer Vision, generative AI APIs, SQL, encryption, auth" },
    { label: "Platform", value: "iOS-first mobile" },
    { label: "Focus", value: "Trust, consent, comprehension" },
  ],
  /** Personal origin — 1–2 short paragraphs, placed after Overview */
  background: {
    paragraphs: [
      "My mother has worked as a beautician for more than twenty years. Growing up around her practice, I spent a lot of time listening to how she spoke with clients: what confused them, what they tried before they sat in her chair, and how often they felt unsure whether a product or routine was right for their skin.",
      "Those conversations made something clear — skincare is deeply individual, and one-size-fits-all advice rarely holds. Many of her clients struggled to understand how to treat their concerns with confidence, not because they lacked care, but because trustworthy, personalized guidance was hard to come by. That gap stayed with me. SkinWise is my attempt to make calmer, more accessible direction possible by pairing thoughtful UX with AI — always with clear limits, consent, and respect for how personal this topic is.",
    ],
  },
  problem: {
    paragraphs: [
      "People often begin their skincare journey in search results or short-form video. Those formats reward strong opinions and fast hooks — not nuance, skin context, or safety.",
      "When something looks or feels “off,” anxiety spikes. Without a calm, structured path, users bounce between products, routines, and advice that conflict with each other.",
      "Photos and health-adjacent questions also raise legitimate privacy concerns. Any credible solution must treat consent, data minimization, and clear limitations as product requirements — not footnotes.",
    ],
  },
  solution: {
    paragraphs: [
      "SkinWise proposes a guided flow: capture or upload imagery with clear instructions, analyze visual signals with models tuned for skincare use cases, and return insights as plain-language guidance — always framed as supportive information, not diagnosis.",
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
      "I also reviewed adjacent products — telehealth, trackers, and consumer apps — to study tone, onboarding, and how successful experiences build trust without overclaiming.",
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
      "The primary path moves from intent → capture → analysis → insight → action. Branching keeps language non-diagnostic, and users can exit or revisit consent at any time.",
  },
  wireframes: {
    paper:
      "Early paper explorations prioritized hierarchy: what users see first, how disclaimers appear, and how dense information breaks into scannable chunks.",
    loFi:
      "Digital wireframes translated those principles into flows we could test. Sessions validated whether people could explain what the app would do with their data — and what it would not do.",
    bullets: [
      "Home & capture",
      "Results & education",
      "Routine planning",
      "Profile & privacy",
    ],
  },
  finalVisuals: {
    intro:
      "High-fidelity screens emphasize typography, whitespace, and progressive disclosure — so the product feels premium and calm, not like a clinical dashboard.",
  },
  privacy: [
    {
      title: "Data protection",
      body: "Sensitive content is encrypted in transit and at rest; collection stays limited to what the experience needs.",
    },
    {
      title: "Access & sessions",
      body: "Authentication and session design help ensure only the account owner can view personal history and imagery.",
    },
    {
      title: "Responsible AI",
      body: "Outputs are scoped and paired with clear limitations; the product avoids language that could be read as medical certainty.",
    },
  ],
  reflection: [
    "SkinWise reinforced that AI UX is as much about restraint as capability: the right details, at the right tempo, with honest boundaries.",
    "Next, I’d explore longitudinal tracking and stronger partnerships with clinical reviewers to refine language and safeguards as the product evolves.",
  ],
} as const;
