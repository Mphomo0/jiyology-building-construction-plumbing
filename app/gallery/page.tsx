import React from 'react'
import PageHeader from '@/components/global/PageHeader'
import GallerySection from '@/components/sections/gallery/GallerySection'

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
