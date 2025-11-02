import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Remote images (ImageKit)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '**', // allow all subpaths
      },
    ],
    // Local images with optional query strings
    localPatterns: [
      {
        // matches all files under /public/images
        pathname: '/images/**', // matches all files under /public/images
      },
    ],
  },
}

export default nextConfig
