
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',
  basePath: '/TectrixWebsite',
  images: {
    unoptimized: true,
  },

};

export default nextConfig;

