
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',
  basePath: '/TectrixWebsite',
  assetPrefix: '/TectrixWebsite',
  images: {
    unoptimized: true,
  },

};

export default nextConfig;

