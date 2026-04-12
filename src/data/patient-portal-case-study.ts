/**
 * Patient Portal Redesign — web healthcare UX case study. Placeholder images; swap for /public assets.
 */
export const patientPortalImages = {
  heroFeatured: "https://picsum.photos/seed/ppr-hero-dash/1600/1000",
  mockA: "https://picsum.photos/seed/ppr-mock-a/1200/750",
  mockB: "https://picsum.photos/seed/ppr-mock-b/1200/750",
  mockC: "https://picsum.photos/seed/ppr-mock-c/1200/750",
  betweenProblem: "https://picsum.photos/seed/ppr-gap1/1600/900",
  betweenIa: "https://picsum.photos/seed/ppr-gap2/1600/900",
  solutionWide: "https://picsum.photos/seed/ppr-solution-wide/1600/1000",
  userFlow: "https://picsum.photos/seed/ppr-flows/1600/1000",
  wireframePaper: "https://picsum.photos/seed/ppr-wire-paper/1600/1000",
  wireframeLoFi: "https://picsum.photos/seed/ppr-wire-lofi/1600/1000",
  finalDashboard: "https://picsum.photos/seed/ppr-final-dash/1600/1000",
  finalLabs: "https://picsum.photos/seed/ppr-final-labs/1600/1000",
  finalAppointments: "https://picsum.photos/seed/ppr-final-appt/1600/1000",
  finalMessages: "https://picsum.photos/seed/ppr-final-msg/1600/1000",
  finalMedications: "https://picsum.photos/seed/ppr-final-med/1600/1000",
  finalMobile: "https://picsum.photos/seed/ppr-final-mobile/900/1400",
} as const;

const img = patientPortalImages;

export const patientPortalCaseStudy = {
  hero: {
    subtitle: "Simplifying healthcare information and patient tasks",
    tagline:
      "A web portal redesign focused on making healthcare information clearer, more accessible, and easier to act on.",
    tags: ["Healthcare UX", "Web", "Accessibility"] as const,
    meta: [
      { label: "Project type", value: "Web app redesign" },
      { label: "Role", value: "Product designer" },
      {
        label: "Focus",
        value: "Healthcare UX, accessibility, information architecture",
      },
    ],
  },
  overview: [
    "Patient portals are often the main bridge between people and their care teams — labs, appointments, messages, and billing live behind a single login. When that experience is confusing, small tasks become stressful and important information gets missed.",
    "Many legacy portals were built feature-first: dense tables, overlapping menus, and jargon-heavy labels. Users arrive already carrying worry about their health; unclear hierarchy and weak wayfinding only add cognitive load.",
    "This project reframes the portal around tasks people actually need to complete and information they need to understand — with clearer structure, calmer presentation, and patterns that work across ages and comfort levels with technology.",
  ],
  problem: {
    paragraphs: [
      "A common pattern in older portals is visual clutter: every module competes for attention, and critical actions like upcoming visits or new lab results are easy to overlook.",
      "Lab results are frequently shown as raw data with minimal context. Without plain-language framing or trend context, patients may misread significance or feel forced to search elsewhere — often unreliable sources.",
      "Appointments, secure messages, and medication lists are often buried in different navigation models. Poor hierarchy increases time-on-task and stress, especially for older adults and people who use the portal infrequently.",
    ],
  },
  solution: {
    paragraphs: [
      "The redesign centers on a task-oriented dashboard: what needs attention now, what is coming soon, and where to go for common actions — each with clear labels and predictable placement.",
      "Lab results are presented with scannable summaries, reference ranges explained in human terms, and optional detail for those who want it. Messaging and medications use consistent patterns so repeat tasks feel familiar.",
      "Navigation was simplified into a small set of primary areas, with secondary items grouped under profile and billing. Responsive layouts preserve readability and touch targets on smaller screens without hiding core workflows.",
    ],
    features: [
      "Dashboard overview with prioritized alerts and next steps",
      "Upcoming appointments with reschedule and directions",
      "Lab results with simplified explanations and trends where available",
      "Secure provider messaging with clear thread status",
      "Medication list, dosing, and refill requests",
      "Billing and insurance summary with plain-language line items",
      "Health records access with consistent document types",
      "Mobile-responsive layouts and accessible components throughout",
    ],
  },
  userResearch: {
    paragraphs: [
      "I reviewed analytics and support themes from similar portals, then conducted interviews with patients and caregivers. Recurring themes included urgency around labs, frustration finding messages, and anxiety when terminology felt opaque.",
      "Card sorts and tree tests informed the new information architecture — validating that people grouped “my upcoming care,” “my results,” and “talk to my team” as distinct mental models worth reflecting in the nav.",
    ],
    insights: [
      "Users want the fastest path to what changed since last login — new results, messages, or appointment changes.",
      "Medical jargon increases mistrust; plain language and definitions reduce unnecessary calls and confusion.",
      "Patients look for reassurance that they understood correctly — microcopy and hierarchy can provide that without overpromising.",
      "Accessibility is not optional: larger default type, predictable focus order, and high contrast improve outcomes for older adults and vision differences.",
    ],
  },
  painPoints: [
    "Lab data that reads like a spreadsheet, not a story patients can interpret",
    "Navigation that exposes every feature at once instead of prioritizing tasks",
    "Too many competing actions above the fold with no clear “start here”",
    "Unclear terminology and abbreviations without inline help",
    "Low contrast, small targets, and dense tables that fail WCAG-minded use",
  ],
  informationArchitecture: {
    intro:
      "Content was reorganized around patient goals rather than backend modules. Each primary area maps to a clear job: plan care, understand results, communicate, manage medications, and handle administrative tasks.",
    areas: [
      {
        name: "Dashboard",
        description:
          "Snapshot of alerts, upcoming visits, recent results, and unread messages — the default landing view after sign-in.",
      },
      {
        name: "Appointments",
        description:
          "Schedule, reschedule, and prepare for visits; directions and visit instructions surfaced early.",
      },
      {
        name: "Test results",
        description:
          "Labs and imaging grouped chronologically with summaries first, technical detail on demand.",
      },
      {
        name: "Messages",
        description:
          "Secure threads with care team; status, attachments, and expected response cues.",
      },
      {
        name: "Medications",
        description:
          "Active list, instructions, refill workflow, and pharmacy context in one place.",
      },
      {
        name: "Billing",
        description:
          "Balances, statements, and insurance summary with definitions for common charges.",
      },
      {
        name: "Profile & settings",
        description:
          "Demographics, care team contacts, notification preferences, accessibility options, and linked accounts.",
      },
    ],
  },
  userFlows: {
    intro:
      "Key flows were mapped end-to-end so navigation, empty states, and error paths stayed consistent across the portal.",
    flows: [
      {
        title: "Checking lab results",
        steps: [
          "Land on dashboard → notice “new result” card",
          "Open test results → read summary and normal range in plain language",
          "Expand details or trends → use “message my care team” if questions remain",
        ],
      },
      {
        title: "Booking or viewing appointments",
        steps: [
          "Open appointments → see upcoming and past visits",
          "Select slot or request change → confirm location and instructions",
          "Add to calendar or get directions → optional pre-visit checklist",
        ],
      },
      {
        title: "Sending a provider message",
        steps: [
          "Open messages → choose thread or start new",
          "Select topic and compose → attach documents if needed",
          "Send → see confirmation and expected follow-up window",
        ],
      },
      {
        title: "Managing medications",
        steps: [
          "Open medications → review active list and dosing",
          "Request refill → pick pharmacy and confirm quantity",
          "Track status → receive pickup or delivery updates",
        ],
      },
    ],
  },
  wireframes: {
    paper:
      "Paper sketches explored dashboard priority: a single column of “needs attention” items versus a two-column layout for power users. Early decisions favored progressive disclosure over dense grids.",
    loFi:
      "Low-fidelity wireframes validated spacing, tab order, and responsive breakpoints. The same information architecture was tested at desktop and narrow widths to avoid mobile-only dead ends.",
  },
  finalVisuals: {
    intro:
      "High-fidelity screens apply a restrained healthcare palette, generous whitespace, and card-based layout — readable at arm’s length and calm under stress.",
    screens: [
      { caption: "Main dashboard", src: img.finalDashboard },
      { caption: "Lab results", src: img.finalLabs },
      { caption: "Appointments", src: img.finalAppointments },
      { caption: "Messages", src: img.finalMessages },
      { caption: "Medications", src: img.finalMedications },
      { caption: "Mobile responsive view", src: img.finalMobile, layout: "portrait" as const },
    ],
  },
  accessibility: [
    {
      title: "Readable typography",
      body: "Body text uses comfortable sizes and line height; headings are hierarchical without skipping levels. Users can scale type without breaking layout on major breakpoints.",
    },
    {
      title: "Strong contrast",
      body: "Text and interactive elements meet enhanced contrast targets where possible; charts and status badges pair color with text or icons — not color alone.",
    },
    {
      title: "Clear hierarchy",
      body: "Primary actions are visually distinct; secondary actions are present but de-emphasized. Dense clinical data is chunked with labels and spacing.",
    },
    {
      title: "Simplified language",
      body: "Abbreviations include expansions on first use; lab copy offers short definitions and links to education where appropriate.",
    },
    {
      title: "Accessible interaction patterns",
      body: "Focus states are visible, targets are large enough for touch and pointer, and forms use labels tied to inputs — not placeholder-only patterns.",
    },
    {
      title: "Support for older users",
      body: "Predictable navigation, minimal surprises, and optional density settings help infrequent users complete tasks without feeling rushed or judged.",
    },
  ],
  reflection: [
    "Healthcare software sits at the intersection of regulation, clinical accuracy, and human emotion. Design can’t fix every constraint — but it can reduce unnecessary friction and make the next right step obvious.",
    "If I continued this work, I would run moderated tests with older adults on real tasks, benchmark readability with standard health literacy measures, and partner with clinical stakeholders to validate lab and medication copy at scale.",
  ],
} as const;
