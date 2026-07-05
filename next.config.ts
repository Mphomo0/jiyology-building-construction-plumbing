import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/about-us/:path*', destination: '/about/:path*', permanent: true },
      { source: '/services/roof-repair', destination: '/services/roof-repairs', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        // Local images rarely change; long-lived caching cuts edge requests
        // and origin transfer on repeat visits.
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  images: {
    // All transformations happen on ImageKit's CDN instead of Vercel's
    // image optimizer, which was exceeding the free-tier transformation
    // and cache-write quotas.
    loader: 'custom',
    loaderFile: './lib/imagekit-loader.ts',
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig
