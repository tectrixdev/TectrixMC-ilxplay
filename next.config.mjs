
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',

  images: {
    unoptimized: true,
  },

};

export default nextConfig;

