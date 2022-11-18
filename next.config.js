const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    deviceSizes: [425, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    // fontLoaders: [
    //   { loader: '@next/font/google', options: { subsets: ['latin'] } },
    // ],
  },
};

module.exports = nextConfig
