import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/global/Navbar'), {
  ssr: true,
})
const Footer = dynamic(() => import('@/components/global/Footer'), {
  ssr: true,
})
import { siteSpineLdJson } from '@/lib/structured-data'

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
  keywords: [
    'construction company Soweto',
    'plumbing services Johannesburg',
    'roofing contractors Gauteng',
    'home renovation Soweto',
    'tiling and painting services',
    'ceiling installation Johannesburg',
    'paving services Gauteng',
    'BEE compliant construction',
    'SABS approved building materials',
    'Jiyology construction',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': spine,
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_TRACKING_ID}');
            `,
          }}
        />
        <script
          async
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.AHREFS_ANALYTICS_KEY}
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
      </body>
    </html>
  )
}
