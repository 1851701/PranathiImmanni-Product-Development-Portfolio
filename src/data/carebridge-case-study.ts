/**
 * CareBridge — AI-assisted patient portal UX case study (concept).
 */

export const carebridgeCaseStudy = {
  hero: {
    subtitle: "AI symptom tracking and patient experience",
    description:
      "A shipped web experience that helps patients track symptoms, review insights, and take clear next steps with calm language and accessible interaction design.",
    meta: [
      { label: "Project type", value: "Live web product" },
      { label: "Role", value: "Product designer" },
      {
        label: "Focus",
        value: "Healthcare UX, AI-assisted guidance, accessibility",
      },
    ],
  },
  projectOverview: {
    date: "2026",
    scope:
      "End to end product and UI design for a live symptom tracking platform, from information architecture and flow design to visual system and interaction patterns",
    tools: [
      "Figma",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Healthcare UX",
      "Accessibility",
      "UX writing",
    ],
    paragraphs: [
      "The finished CareBridge site presents a focused patient experience platform that connects symptom guidance with practical care tasks. It is designed to feel calm, readable, and trustworthy from the first screen to the final call to action.",
      "The product narrative is centered on one promise: reduce noise when people are already stressed. Instead of overwhelming users with technical language, CareBridge uses plain copy, clear hierarchy, and visible next actions.",
      "The live implementation demonstrates how AI-assisted guidance can coexist with accessibility and emotional clarity, while still feeling polished and modern as a branded product experience.",
    ],
  },
  team: [{ name: "Pranathi Immanni", role: "Product designer" }] as const,
  problem: {
    paragraphs: [
      "Many health experiences create friction at the exact moment people need clarity. Users start with concern, then encounter dense interfaces, technical language, and uncertain recommendations.",
      "Early patient journeys showed a repeated gap between identifying symptoms and deciding what to do next. People did not just need information, they needed understandable guidance and confidence in the next step.",
      "The design challenge was to create a healthcare interaction model that feels structured and clinically credible without becoming cold, noisy, or intimidating.",
    ],
  },
  solution: {
    paragraphs: [
      "CareBridge ships a complete narrative and product flow: users track symptoms, review AI-assisted insights, and move into clear recommendations. Every major section reinforces calm pacing and readability.",
      "The interface system uses strong visual hierarchy, predictable card patterns, and direct UX writing. Instead of presenting health data as static records, the product frames guidance as an active, step-by-step experience.",
    ],
    bullets: [
      "Clear next-step guidance in each stage of the flow",
      "Readable interfaces with accessible contrast and spacing",
      "Consistent structure across About, Features, Process, Product, and Feedback sections",
    ],
  },
  userResearch: {
    paragraphs: [
      "The final content and interaction model were informed by common healthcare UX patterns and repeated user needs: calm language, fast orientation, and explicit next actions. The live site translates those needs into a structured story with product evidence and social proof.",
    ],
    insights: [
      "Users respond better to guidance-oriented language than diagnostic-sounding copy.",
      "A clear stage model improves confidence in health decision flows.",
      "Accessibility and calm pacing are not visual polish, they are trust signals.",
      "Social proof and transparent framing help users feel safer adopting AI-assisted care tools.",
    ],
  },
  painPoints: [
    "Confusing medical language without inline context",
    "Lack of guidance after viewing results or reading about symptoms",
    "Overwhelming dashboards that surface everything at once",
    "Poor navigation and inconsistent labels across tasks",
    "Anxiety when interpreting results or comparing symptoms online",
  ],
  informationArchitecture: {
    intro:
      "The shipped IA keeps top-level navigation simple and story-driven: About, Features, Process, AI Intelligence, and Contact. Inside the product story, each section maps to a patient question and transitions naturally to the next.",
    tree: [
      "Hero and value proposition",
      "About CareBridge and product purpose",
      "Features and core capabilities",
      "Three-step process flow",
      "Product preview and guidance system",
      "Testimonials and final conversion",
    ],
  },
  userFlows: [
    {
      id: "symptom",
      title: "Flow 1 — Symptom checking",
      steps: [
        "Landing and value framing",
        "Track symptoms",
        "Review insights",
        "Receive recommendation",
        "Take the next step",
      ],
    },
    {
      id: "labs",
      title: "Flow 2 — Lab results",
      steps: [
        "Feature overview",
        "Product preview context",
        "Health status snapshot",
        "Guidance and labs indicators",
        "Actionable follow-up direction",
      ],
    },
    {
      id: "booking",
      title: "Flow 3 — Booking care",
      steps: [
        "Results and recommendation",
        "Care action prompt",
        "Contact or follow-up path",
        "Reassurance and continuity",
      ],
    },
  ],
  features: {
    symptomChecker: {
      title: "AI symptom checker",
      items: [
        "Structured symptom intake with clear prompts",
        "AI-assisted interpretation framed as guidance",
        "Calm recommendation language that avoids alarmism",
        "Direct next-step pathways for follow-up action",
      ],
    },
    dashboard: {
      title: "Patient dashboard",
      items: [
        "Health status snapshot at a glance",
        "Priority cards for key care information",
        "Visual consistency across all modules",
      ],
    },
    labs: {
      title: "Lab results redesign",
      items: [
        "Results context shown in plain language",
        "Status indicators that are readable and calm",
        "Guidance tied to each result state",
      ],
    },
    messaging: {
      title: "Messaging system",
      items: [
        "Team communication concept in product navigation",
        "Readable thread and update affordances",
      ],
    },
    medications: {
      title: "Medication tracking",
      items: [
        "Medication context integrated with overall health view",
        "Continuity between symptom insights and treatment actions",
      ],
    },
  },
  designDecisions: [
    {
      title: "Trust & clarity",
      body:
        "Copy emphasizes support and direction. Guidance language is specific, but avoids overconfident clinical claims.",
    },
    {
      title: "Accessibility",
      body:
        "The layout prioritizes readable type, strong contrast, and clear spacing so content remains legible across devices and stress levels.",
    },
    {
      title: "Reducing anxiety",
      body:
        "Visual rhythm avoids panic cues. Information is staged so users can process, understand, and act without feeling overloaded.",
    },
  ],
  finalScreens: [
    {
      key: "dashboard" as const,
      caption: "Dashboard — prioritized tasks and calm overview",
      annotation:
        "Cards are ordered by urgency and recency so the first screen answers “what changed?” Large type and generous spacing reduce scan effort for older users.",
    },
    {
      key: "symptom" as const,
      caption: "Symptom checker — guided intake",
      annotation:
        "One question per step keeps cognitive load low; progress is explicit so users know how much remains.",
    },
    {
      key: "symptomResults" as const,
      caption: "Symptom results — possibilities + care guidance",
      annotation:
        "Conditions are labeled as possibilities, not conclusions. Care tiers and emergency guidance are always visible below the fold.",
    },
    {
      key: "labs" as const,
      caption: "Lab results — simplified first",
      annotation:
        "A plain summary leads; technical ranges expand on demand so users aren’t confronted with tables on entry.",
    },
    {
      key: "appointments" as const,
      caption: "Appointments — book and prepare",
      annotation:
        "Primary action is obvious; location and preparation details are grouped to prevent last-minute confusion.",
    },
    {
      key: "messages" as const,
      caption: "Messages — secure threads",
      annotation:
        "Thread list shows last activity and unread state; composer stays simple to encourage timely communication.",
    },
  ],
  ethicalAi: {
    title: "Ethical AI & safety",
    items: [
      {
        title: "Assistive, not diagnostic",
        body:
          "Outputs are framed as triage support. The product encourages appropriate in-person evaluation and never replaces clinician judgment.",
      },
      {
        title: "Transparent limitations",
        body:
          "Users see what the model can and cannot infer; uncertainty is a first-class UI state, not an afterthought.",
      },
      {
        title: "Privacy-first design",
        body:
          "Data minimization, clear consent for symptom data, and alignment with how health systems expect PHI to be handled in real deployments.",
      },
      {
        title: "Secure handling",
        body:
          "Concept assumes encryption in transit and at rest, role-based access, and audit-friendly messaging consistent with enterprise EHR-adjacent products.",
      },
    ],
  },
  reflection: [
    "This final CareBridge build validated the core premise: people need calm, actionable direction more than raw medical detail when symptoms create uncertainty.",
    "The project also reinforced that AI in healthcare UX should be framed as assistive guidance, with clear limits and a human-centered tone at every decision point.",
    "If expanded further, the next step would be usability validation with caregivers and older adults, then iterative refinement of copy and care-path recommendations based on observed comprehension.",
  ],
} as const;
