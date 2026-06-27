import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import PageHeader from '@/components/global/PageHeader'
import GallerySection from '@/components/sections/gallery/GallerySection'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Browse our portfolio of completed roofing, plumbing, paving, tiling, and renovation projects in Soweto and Johannesburg. Quality workmanship on every job.',
  openGraph: og({
    title: 'Project Gallery | Jiyology Construction & Plumbing',
    description:
      'Browse our portfolio of completed roofing, plumbing, paving, tiling, and renovation projects in Soweto and Johannesburg. Quality workmanship on every job.',
    url: 'https://www.jiyology.co.za/gallery',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: 'Jiyology Building Construction & Plumbing' }],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/gallery',
  },
  keywords: ['construction gallery Soweto', 'roofing projects Johannesburg', 'Jiyology projects', 'building portfolio Soweto'],
  twitter: twitter({
    title: 'Project Gallery | Jiyology Construction & Plumbing',
    description: 'View completed construction and plumbing projects by Jiyology. Roofing, paving, tiling, ceiling installation, and home renovations in Soweto.',
  }),
}

export default function Gallery() {
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za/' },
    { name: 'Gallery', url: 'https://www.jiyology.co.za/gallery' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHeader
        title="Gallery"
        subtitle="Explore our portfolio of completed projects showcasing quality craftsmanship."
        image="/images/pageHeaderImage.jpg"
      />
      <GallerySection />
    </>
  )
}
