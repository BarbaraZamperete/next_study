/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 'source.unsplash.com'
      }]
  }
}

module.exports = nextConfig
