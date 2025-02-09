// @ts-check
// this fixes the development server assets
import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    experimental: {
      forceSwcTransforms: true,
    },
    output: "export",
    basePath: isDev ? undefined : "/TectrixWebsite",
    assetPrefix: isDev ? undefined : "/TectrixWebsite",
    images: {
      unoptimized: true,
    },
  };
  return nextConfig;
};
