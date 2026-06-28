import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/:path*', destination: '/about/:path*', permanent: true },
      { source: '/services/roof-repair', destination: '/services/roof-repairs', permanent: true },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        pathname: '/**',
      },
    ],
    localPatterns: [
      {
        pathname: '/images/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
