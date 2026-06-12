import type { Metadata } from 'next'
import PageHeader from '@/components/global/PageHeader'
import GallerySection from '@/components/sections/gallery/GallerySection'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'Browse our portfolio of completed roofing, plumbing, paving, tiling, and renovation projects in Soweto and Johannesburg. Quality workmanship on every job.',
  openGraph: {
    title: 'Project Gallery | Jiyology Construction & Plumbing',
    description:
      'Browse our portfolio of completed roofing, plumbing, paving, tiling, and renovation projects in Soweto and Johannesburg. Quality workmanship on every job.',
    url: 'https://www.jiyology.co.za/gallery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za/gallery',
  },
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
