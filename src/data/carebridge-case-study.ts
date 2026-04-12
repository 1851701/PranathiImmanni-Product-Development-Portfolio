/**
 * CareBridge — AI-assisted patient portal UX case study (concept).
 */

export const carebridgeCaseStudy = {
  hero: {
    subtitle: "AI-assisted patient portal",
    description:
      "A web platform that helps patients understand symptoms, navigate care decisions, and manage their health with clarity and confidence.",
    meta: [
      { label: "Project type", value: "Web application" },
      { label: "Role", value: "Product designer" },
      {
        label: "Focus",
        value: "Healthcare UX, AI-assisted decision support, accessibility",
      },
    ],
  },
  overview: [
    "Healthcare systems are fragmented: scheduling, labs, messaging, and education often live in different mental models — and sometimes different logins. Patients arrive already worried; when portals feel like internal tools, small tasks become high-stakes navigation problems.",
    "Many people start with search or social threads when symptoms appear, which can amplify anxiety and misinformation. Traditional patient portals excel at document storage but rarely guide someone from “I don’t feel right” to a sensible next step. AI tools can help with triage language, yet they often sit outside the trusted systems where appointments and results already live.",
    "CareBridge is a concept for a unified web experience: an assistive symptom flow that speaks in plain language, plus the practical tools patients expect — labs, visits, messages, and medications — organized to reduce cognitive load and support older adults and infrequent users.",
  ],
  problem: {
    paragraphs: [
      "When symptoms appear, patients frequently turn to open web search or forums. The results are inconsistent, alarmist, or overly confident — which increases anxiety without improving decision-making.",
      "Legacy patient portals are often organized around hospital departments, not patient goals. Labs read like raw data tables, navigation labels hide critical tasks, and users can’t tell what changed since last login.",
      "Even when results are available, they may be too technical to interpret without a provider — and portals rarely answer the next question: what should I do now? For older adults, small text, low contrast, and inconsistent patterns make an already stressful experience harder.",
    ],
  },
  solution: {
    paragraphs: [
      "CareBridge combines an AI-assisted symptom checker with a structured patient dashboard. The symptom flow is designed as guidance, not diagnosis: possible explanations are framed with uncertainty, paired with transparent disclaimers and care recommendations from self-care through emergency.",
      "The dashboard prioritizes what needs attention — upcoming visits, new labs, unread messages — using predictable cards and large type. Users move from uncertainty toward action: book appropriate care, read a plain-language lab summary, or message their team without hunting through menus.",
    ],
    bullets: [
      "Understandable insights with plain-language summaries",
      "Clear next steps at every stage (what to do, not just what to read)",
      "Integrated health management: appointments, labs, messaging, medications",
    ],
  },
  userResearch: {
    paragraphs: [
      "Synthesis from healthcare UX literature, analogous portal evaluations, and triage best practices informed this concept: people want clarity before detail, and they evaluate trust through wording, transparency, and whether the UI admits limits.",
    ],
    insights: [
      "Users want clarity, not medical jargon — definitions and “what this means for you” reduce unnecessary calls and fear.",
      "Trust is critical: assistive AI must never sound omniscient; language should reflect uncertainty and encourage appropriate escalation.",
      "Information alone isn’t enough — users want clear next steps (self-care, call primary care, seek urgent or emergency care).",
      "Accessibility is essential: larger default text, high contrast, simple navigation, and predictable patterns support older adults and vision differences.",
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
      "Information architecture is organized around a single home base (Dashboard) and a shallow primary navigation. Each area maps to one patient goal, reducing the need to memorize where tasks live.",
    tree: [
      "Dashboard — snapshot of health tasks, alerts, and entry points",
      "Symptom Checker — guided intake and assistive output + care guidance",
      "Lab Results — chronological results with simplified summaries first",
      "Appointments — schedule, prepare, and manage visits",
      "Messages — secure threads with the care team",
      "Medications — active medications, instructions, refills",
    ],
  },
  userFlows: [
    {
      id: "symptom",
      title: "Flow 1 — Symptom checking",
      steps: [
        "Home / Dashboard",
        "Start symptom check",
        "Guided questions (adaptive follow-ups)",
        "Possible explanations (confidence-aware language)",
        "Care recommendation + next steps",
      ],
    },
    {
      id: "labs",
      title: "Flow 2 — Lab results",
      steps: [
        "Dashboard",
        "Lab results list",
        "Simplified view (summary + status)",
        "Plain-language explanation",
        "Next steps (message provider, retest schedule, what to watch for)",
      ],
    },
    {
      id: "booking",
      title: "Flow 3 — Booking care",
      steps: [
        "Results or symptom output",
        "Recommended care level",
        "Book appointment (primary / urgent as appropriate)",
        "Confirmation + preparation checklist",
      ],
    },
  ],
  features: {
    symptomChecker: {
      title: "AI symptom checker",
      items: [
        "Guided question flow with adaptive follow-ups",
        "AI-generated possible conditions with uncertainty framing",
        "Confidence-aware language — never presented as certainty",
        "Persistent disclaimers: assistive, not diagnostic",
        "Care recommendations: self-care, primary care, urgent care, emergency",
      ],
    },
    dashboard: {
      title: "Patient dashboard",
      items: [
        "Overview of what needs attention and what’s coming next",
        "Upcoming appointments with clear actions",
        "Alerts and reminders without alarmist styling",
      ],
    },
    labs: {
      title: "Lab results redesign",
      items: [
        "Simplified explanations above technical detail",
        "Visual indicators: normal / attention needed (calm palette)",
        "Plain-language summaries tied to each result",
      ],
    },
    messaging: {
      title: "Messaging system",
      items: [
        "Secure communication with providers",
        "Clear thread structure and read/unread status",
      ],
    },
    medications: {
      title: "Medication tracking",
      items: ["Active medication list with dosing context", "Refill reminders and pharmacy links"],
    },
  },
  designDecisions: [
    {
      title: "Trust & clarity",
      body:
        "Avoid definitive diagnoses; use soft, precise language about possibilities. Disclaimers are visible and repeated where outputs could be misread as certainty.",
    },
    {
      title: "Accessibility",
      body:
        "Large default text sizes, high-contrast neutrals and blues, simple navigation with persistent wayfinding. Components sized for motor and vision variance common in older adults.",
    },
    {
      title: "Reducing anxiety",
      body:
        "Calm white/light surfaces; no wall of red warnings. Urgent information uses structure and wording before color. Every critical view ends with next steps.",
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
    "Designing for healthcare means accepting responsibility: every line of copy and every hierarchy choice can change how safe someone feels. CareBridge was an exercise in pairing ambition — better guidance — with restraint: transparent limits, calm visuals, and pathways that respect real clinical workflows.",
    "Balancing AI capabilities with trust required language design as much as UI: possibilities instead of verdicts, confidence without theater, and next steps that match how care actually works in the U.S. system — primary, urgent, emergency.",
    "Accessibility and simplicity aren’t extras; they determine whether a portal is usable in the moment someone is scared. If I continued this work, I’d validate flows with older adults and caregivers, pressure-test content with clinical advisors, and ship a documented pattern library aligned with WCAG AA across components.",
  ],
} as const;
