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
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [64, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async headers() {
    return [
      {
        // Next.js hashed JS/CSS chunks — safe to cache forever
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Optimised images from Next.js image pipeline
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Public folder assets (favicon, og images, local images)
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        // Favicon and root-level static files
        source: '/:file(favicon.*|robots.txt|sitemap.xml|manifest.json)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },
}

export default nextConfig
