
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',  // Enables static exports
  basePath: '/your-repo-name', // Replace with your repository name
  images: {
    unoptimized: true,
  },

};

export default nextConfig;

