/** Edit this file to personalize your portfolio (name, links, bio snippets). */
export const siteConfig = {
  name: "Pranathi Immanni",
  tagline: "Product Designer",
  email: "pranathi@immanni.com",
  /** Shown in contact blocks */
  phone: "(858) 683-4266",
  location: "San Diego, CA",
  /** Resume + “Major and focus?” — keep in sync */
  educationDegree:
    "B.S. in Cognitive Science — University of California, Irvine",
  /** Used in metadata and Open Graph when NEXT_PUBLIC_SITE_URL is set */
  description:
    "Pranathi Immanni, product designer from San Diego. Human centered UX, Figma, and spaces that feel calm to use.",
  social: {
    linkedin: "https://www.linkedin.com/in/pranathi-immanni-7baa5b246/",
    github: "https://github.com/1851701",
    twitter: "https://twitter.com/yourhandle",
    /** Optional — leave empty to hide on the home “get in touch” row */
    instagram: "https://www.instagram.com/pranathiimmanni/",
    facebook: "",
  },
  /** Home page hero (minimal header) */
  hero: {
    heading: "Hi, I’m Pranathi Immanni.",
    subheading:
      "I design intuitive experiences grounded in how people think and feel.",
  },
  /** “Get to know me” / About copy (no hyphen style dashes in prose) */
  getToKnowMe: {
    /** Synced with hero subheading where a one-line summary is useful */
    heroTagline:
      "I design intuitive experiences grounded in how people think and feel.",
    /** Home “About Me” body (full paragraphs, top to bottom) */
    aboutParagraphs: [
      "I'm a product designer with a strong interest in UX/UI and human interaction design, focused on creating experiences that feel intuitive, thoughtful, and easy to trust.",
      "I believe good design should feel calm and obvious, reducing noise so people can focus on what matters. I'm drawn to interfaces that are clear, intentional, and respectful of the user's time, especially in moments where complexity or overwhelm already exists.",
      "I was born and raised in San Diego, where the ocean and open air continue to shape how I think about balance. I'm naturally drawn to slower, more intentional ways of moving through the world, whether that's noticing light and space, taking time to reset, or focusing on small details that often go overlooked.",
      "That mindset carries directly into my work. I approach design through careful observation and research, thinking about how people interact with systems, where friction appears, and how small decisions can make an experience feel either overwhelming or effortless. I'm especially interested in designing interactions that feel human, accessible, and supportive rather than purely functional.",
    ] as const,
    /** Scrapbook Q&A (edit to match your story) */
    educationLine: `B.S. in Cognitive Science at the University of California, Irvine, with human-centered research and design coursework that still shapes how I frame problems.`,
    /** Static “favorite music” card on the home About section (no API — link only) */
    favoriteMusicHeading: "Favorite singer / album",
    favoriteMusicDescription: "Taylor Swift — 1989 (Taylor’s Version)",
    /** Album art file: `src/assets/home/taylor-swift-1989-taylors-version.png` (imported in FavoriteSingerAlbum) */
    favoriteMusicImageAlt:
      "1989 (Taylor’s Version) album cover — Taylor Swift against a blue sky with seagulls",
    /** Opens the album in Spotify (web or app); linking out is the standard approach */
    favoriteMusicListenUrl:
      "https://open.spotify.com/album/64LU4c1nfjz1t4VnGhagcg",
    favoriteMusicListenHint: "Listen on Spotify",
    /** Featured narrative block (Teddy, comfort) */
    teddyNarrative: `Growing up, a worn teddy bear sat on my shelf, not as decoration, but as something to hold when words did not come easily. It was never really about the object. It was comfort without judgment, permission to be small, messy, or quiet, and still be okay. That feeling stayed with me. Today it shows up as the same instinct in my work: interfaces that meet people gently, especially when they are already overwhelmed.`,
    hobbies: [
      {
        title: "Baking",
        description:
          "Measured, hands on, a little imperfect. Small rituals that feel as good as the result.",
        image:
          "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=900&q=80",
        imageAlt: "Freshly baked bread and flour on a table",
      },
      {
        title: "Interior design",
        description:
          "Moving furniture and light until a room breathes. The same instinct guides how I structure a layout on screen.",
        image:
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
        imageAlt: "Sunlit living room with sofa and plants",
      },
      {
        title: "Being outdoors",
        description:
          "Beach walks, trails, sunsets. Space to think without a backlog, so my work stays human scaled.",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80",
        imageAlt: "Calm beach at sunset with gentle waves",
      },
      {
        title: "Time with Rynn (my dog)",
        description:
          "Daily walks and quiet company with Rynn. A reminder to design for real routines, not idealized users.",
        image: "/hobbies/dog.png",
        imageAlt: "Rynn, a small dog on coastal rocks in warm golden hour light",
      },
    ],
  },
  skills: [
    "UX Research",
    "UI Design",
    "Design Systems",
    "Figma",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Prototyping",
    "Accessibility",
  ],
  experience: [
    {
      role: "Product Designer",
      company: "Example Studio",
      period: "2023 — Present",
      summary:
        "Led end to end design for web apps, built a component library, and partnered with engineering on design QA.",
    },
    {
      role: "UX and Frontend Intern",
      company: "Sample Labs",
      period: "2022 — 2023",
      summary:
        "Contributed to user flows, usability tests, and React prototypes for a B2B dashboard.",
    },
  ],
};
