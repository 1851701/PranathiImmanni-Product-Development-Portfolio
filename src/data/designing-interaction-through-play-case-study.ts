/**
 * Designing Interaction Through Play — UX case study (Interactive Pattern Experience).
 */

import { cognitivePatternGameScreens } from "@/data/cognitive-pattern-game-assets";

export const INTERACTIVE_PATTERN_EXPERIENCE_LIVE =
  "https://game-six-psi-82.vercel.app/" as const;

export const designingInteractionThroughPlayCaseStudy = {
  hero: {
    /** Primary headline on the case study page */
    title: "Interactive Pattern Experience",
    subtitle: "UX/UI design · interaction systems",
    intro:
      "An interactive web experience exploring flow, feedback, and clarity through simple user interactions.",
    tags: ["Web", "Interaction Design", "UI", "UX"] as const,
  },
  overview: [
    "This project was created to explore UX and UI design through a live, browser-based experience — not to ship a game product, but to study how people understand systems when interaction, timing, and feedback are intentional. A simple pattern-based loop became the vehicle: it is easy to describe, easy to try, and demanding enough that small design choices show up immediately in behavior.",
    "The focus is how users build a mental model through flow and feedback. When each action produces a clear response, people learn the rules without reading a manual; when pacing is consistent, they trust what will happen next. Those ideas matter far beyond this prototype — they are the same levers that make dashboards, onboarding, and tools feel either effortless or opaque.",
    "Visually and structurally, the work prioritizes clarity, responsiveness, and engagement with restraint: minimal chrome, readable states, and interactions that read as one coherent system rather than a pile of screens. Decoration takes a back seat so that interaction design — what you do, what happens next — stays in front.",
  ],
  problem: {
    hmw:
      "How might we design an interactive system that feels intuitive and engaging, using minimal UI and clear feedback?",
    paragraphs: [
      "Many interfaces lean on visual complexity — dense layouts, ornament, or extra panels — to signal sophistication. That noise often works against comprehension: users must decode the frame before they can use the tool. For an experience meant to teach interaction principles, the risk was even higher, because the interface would compete with the very behaviors we wanted to observe.",
      "People benefit from systems that respond clearly and predictably. When feedback is delayed, ambiguous, or inconsistent, users hesitate, repeat actions, or assume the system is broken. Responsive, legible feedback is not a polish layer; it is how trust and understanding are built.",
      "Interaction design is easy to underweight next to visual design. Screens can look finished while the underlying states — loading, success, error, empty — remain fuzzy. This project treats interaction as the primary material: flow, timing, and feedback are designed with the same care as typography or color.",
    ],
  },
  solution: {
    paragraphs: [
      "The solution is a minimal interactive system built around a short loop: observe, act, see the result, continue. The UI carries only what supports that loop — no competing navigation model, no decorative chrome that distracts from cause and effect.",
      "Flow and responsiveness are central. Transitions between steps feel deliberate; input is acknowledged right away so users always know the system received their action. The experience is meant to feel calm and legible, not flashy for its own sake.",
      "Every action maps to a clear feedback state. Success and failure read differently at a glance, so users can correct course without guessing. The structure is simple on purpose: interaction carries meaning, not ornament.",
      "The layout stays spare so that interaction patterns stay memorable. Users are invited to learn through doing — repetition reinforces the model — while the surface remains visually quiet.",
    ],
  },
  designFocus: [
    {
      title: "Flow",
      points: [
        "Smooth progression between actions so the experience reads as one continuous path, not a series of disconnected screens.",
        "Predictable interaction patterns — the same inputs behave the same way — so users spend attention on the task, not on relearning controls.",
      ],
    },
    {
      title: "Feedback",
      points: [
        "Immediate response to user input: every tap or click should register visually without delay that feels like uncertainty.",
        "Feedback reinforces understanding — users learn what “correct” and “incorrect” look like from the system’s response, not from explanatory copy alone.",
      ],
    },
    {
      title: "Clarity",
      points: [
        "A minimal interface keeps cognitive load on the task, not on decoding the layout.",
        "Clear visual hierarchy: primary actions and states stand out; nothing competes for attention without purpose.",
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
      "The interaction model is built to guide behavior: input, timing, and state changes work together so users always know where they are in the loop.",
    items: [
      {
        title: "Input handling (click / tap)",
        body: "Discrete targets and a consistent input vocabulary reduce error and keep the focus on the pattern, not on wrestling with controls. The same gesture family repeats so the system feels learnable within seconds.",
      },
      {
        title: "Timing and response",
        body: "Pacing between states was tuned so the experience feels responsive, not frantic or sluggish. Timing communicates priority: when to watch, when to act, and when the system is ready for the next step.",
      },
      {
        title: "Visual feedback states",
        body: "Distinct visual treatments for neutral, active, success, and error states make outcomes scannable. Users should never need to infer whether their last action “counted.”",
      },
      {
        title: "Guiding behavior",
        body: "Taken together, input clarity and feedback shape what people try next — confident exploration when the system feels fair, hesitation when it does not. Interaction design here is the primary instructor.",
      },
    ],
  },
  designDecisions: [
    {
      title: "Minimal UI",
      points: [
        "Reduced distractions so attention stays on the loop.",
        "Focus on interaction as the main content, not background decoration.",
      ],
    },
    {
      title: "Feedback-first design",
      points: [
        "Every action has a visible response.",
        "Outcomes are legible without secondary labels or tooltips.",
      ],
    },
    {
      title: "Consistency",
      points: [
        "Predictable patterns help users learn quickly and transfer skill across rounds.",
        "Repeated structures reduce the need for new UI as complexity increases.",
      ],
    },
  ],
  finalProduct: {
    intro:
      "The live build runs in the browser. Explore the prototype below, or open it in a new tab for fullscreen. Static captures highlight a few interface states; a short screen recording would be a natural next step to showcase motion and timing.",
  },
  reflection: {
    paragraphs: [
      "This project deepened how I think about interaction design as the connective tissue between intent and outcome. Visual design sets tone, but feedback and flow determine whether people feel invited to explore or afraid to make a mistake. Simple systems can still feel rich when every state is considered.",
      "Feedback and flow are inseparable from good UX: feedback closes the loop between user and system, and flow determines whether that loop feels coherent or chaotic. Designing both deliberately — not only the “happy path” — is what separates prototypes that demo well from experiences that hold up in use.",
      "I was reminded that minimal interfaces are not empty interfaces; they are interfaces with fewer excuses. When there is less on screen, every transition and state has to work harder. That constraint was useful: it forced clarity about what each moment was for.",
      "If I continued the work, I would add motion studies and optional sound for accessibility, test difficulty and pacing with a wider group, and capture a short demo GIF or video of the full loop. Analytics on where users pause or repeat would validate whether the interaction model reads as clearly as intended.",
    ],
  },
  screenshots: {
    hero: cognitivePatternGameScreens.entrance,
    stateA: cognitivePatternGameScreens.swordman,
    stateB: cognitivePatternGameScreens.contact1,
  },
} as const;
