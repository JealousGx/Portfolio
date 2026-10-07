import { withContentCollections } from "@content-collections/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    // Old blog tag pages no longer exist. Tag URLs only, nothing else is redirected here.
    return [{ source: "/blog/tag/:path*", destination: "/blog", statusCode: 301 }];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default withContentCollections(nextConfig);
