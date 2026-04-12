import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/teddy", destination: "/projects/teddy", permanent: true },
      {
        source: "/projects/cognitive-pattern-game",
        destination: "/projects/designing-interaction-through-play",
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
        hostname: "i.scdn.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "game-six-psi-82.vercel.app",
        pathname: "/img/**",
      },
    ],
  },
};

export default nextConfig;
