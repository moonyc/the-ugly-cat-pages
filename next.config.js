/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: ''
      }
    ]
  }
}


module.exports = nextConfig

