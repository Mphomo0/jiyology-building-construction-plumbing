import type { Metadata } from 'next'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import Navbar from '@/components/global/Navbar'
import Footer from '@/components/global/Footer'
import { siteSpineLdJson } from '@/lib/structured-data'
import FloatingPhone from '@/components/global/FloatingPhone'
import FloatingWhatsApp from '@/components/global/FloatingWhatsApp'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jiyology.co.za'),
  title: {
    default: 'Jiyology | Construction & Plumbing Services in Soweto',
    template: '%s | Jiyology Construction & Plumbing',
  },
  description:
    'Construction and plumbing experts in Soweto and Johannesburg. Roofing, renovations, tiling, paving, ceiling installation. SABS approved, BEE Level 1.',
  authors: [{ name: 'Jiyology Building Construction & Plumbing' }],
  creator: 'Jiyology Building Construction & Plumbing',
  publisher: 'Jiyology Building Construction & Plumbing',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.jiyology.co.za',
    siteName: 'Jiyology Construction & Plumbing',
    title: 'Jiyology | Construction & Plumbing Services in Soweto',
    description:
      'Construction and plumbing experts in Soweto and Johannesburg. Roofing, renovations, tiling, paving, ceiling installation. SABS approved, BEE Level 1.',
    images: [
      {
        url: '/images/hero-image.jpg',
        alt: 'Jiyology Building Construction & Plumbing — Soweto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jiyology | Construction & Plumbing Services in Soweto',
    description:
      'Construction and plumbing experts in Soweto and Johannesburg. Roofing, renovations, tiling, paving, ceiling installation. SABS approved, BEE Level 1.',
    images: ['/images/hero-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za',
  },
  category: 'Construction & Plumbing',
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'msvalidate.01': process.env.BING_SITE_VERIFICATION || '',
    'geo.region': 'ZA-GP',
    'geo.placename': 'Soweto',
    'geo.position': '-26.2440811;27.7709155',
    'ICBM': '-26.2440811, 27.7709155',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const spine = siteSpineLdJson()

  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': spine,
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingPhone />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.AHREFS_ANALYTICS_KEY}
          strategy="afterInteractive"
        />
      </body>
      {process.env.GA_TRACKING_ID && (
        <GoogleAnalytics gaId={process.env.GA_TRACKING_ID} />
      )}
    </html>
  )
}
