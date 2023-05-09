/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // previous command here
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig
