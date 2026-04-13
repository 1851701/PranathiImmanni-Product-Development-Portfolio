import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/teddy", destination: "/projects/teddy", permanent: true },
      {
        source: "/projects/cognitive-pattern-game",
        destination: "/projects/ui-game-portfolio",
        permanent: true,
      },
      {
        source: "/projects/designing-interaction-through-play",
        destination: "/projects/ui-game-portfolio",
        permanent: true,
      },
      {
        source: "/projects/patient-portal-redesign",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/projects/design-system-refresh",
        destination: "/projects",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "game-six-psi-82.vercel.app",
        pathname: "/img/**",
      },
      {
        protocol: "https",
        hostname: "ai-symptom-tracker-sdd9.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
