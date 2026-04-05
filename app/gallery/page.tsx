import type { Metadata } from 'next'
import PageHeader from '@/components/global/PageHeader'
import GallerySection from '@/components/sections/gallery/GallerySection'

export const metadata: Metadata = {
  title: 'Project Gallery',
  description:
    'View our portfolio of completed construction and plumbing projects in Soweto and Johannesburg. See our quality workmanship in roofing, plumbing, renovations, tiling, paving, and ceiling installation.',
  openGraph: {
    title: 'Project Gallery | Jiyology Construction & Plumbing',
    description:
      'Browse our gallery of completed projects showcasing quality construction and plumbing workmanship in Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/gallery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za/gallery',
  },
}

export default function Gallery() {
  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="Explore our portfolio of completed projects showcasing quality craftsmanship."
        image="/images/pageHeaderImage.jpg"
      />
      <GallerySection />
    </>
  )
}
