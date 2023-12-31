/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        
      },
    ],
  },
}