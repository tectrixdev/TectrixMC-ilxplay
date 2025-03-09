/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
