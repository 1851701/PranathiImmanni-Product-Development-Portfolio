/** Screenshots served by the live deployment (Vite public folder). */
export const COGNITIVE_PATTERN_GAME_ORIGIN =
  "https://ux-game-portfolio.vercel.app" as const;

export const cognitivePatternGameScreens = {
  /** Hero / landing frame */
  entrance: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/entrance.webp`,
  about: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/about.webp`,
  swordman: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/swordman.webp`,
  contact1: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/contact-1.webp`,
  contact2: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/contact-2.webp`,
  logo: `${COGNITIVE_PATTERN_GAME_ORIGIN}/img/logo.png`,
} as const;
