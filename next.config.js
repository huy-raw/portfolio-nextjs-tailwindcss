/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'components'],
    ignoreDuringBuilds: false
  }
}

module.exports = nextConfig
