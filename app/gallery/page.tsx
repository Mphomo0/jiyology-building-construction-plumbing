import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import PageHeader from '@/components/global/PageHeader'
import GallerySection from '@/components/sections/gallery/GallerySection'
import { breadcrumbLdJson } from '@/lib/structured-data'
import { cache } from 'react'

interface ImageKitFile {
  fileId: string
  name: string
  url: string
}

const getGalleryItems = cache(async () => {
  try {
    const res = await fetch(
      `https://api.imagekit.io/v1/files?path=${encodeURIComponent('/Gallery')}`,
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(
              (process.env.IMAGEKIT_PRIVATE_KEY ?? '') + ':'
            ).toString('base64'),
        },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return []
    const files: ImageKitFile[] = await res.json()
    return files.map((f) => ({
      id: f.fileId,
      title: f.name.replace(/\.[^/.]+$/, ''),
      src: f.url,
    }))
  } catch {
    return []
  }
})

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

export default async function Gallery() {
  const [items, breadcrumb] = await Promise.all([
    getGalleryItems(),
    Promise.resolve(
      breadcrumbLdJson([
        { name: 'Home', url: 'https://www.jiyology.co.za/' },
        { name: 'Gallery', url: 'https://www.jiyology.co.za/gallery' },
      ])
    ),
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
      <GallerySection items={items} />
    </>
  )
}
