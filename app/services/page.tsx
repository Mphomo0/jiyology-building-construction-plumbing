import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import PageHeader from '@/components/global/PageHeader'
import CTA from '@/components/sections/home/CTA'
import MainServices from '@/components/sections/services/MainServices'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Roofing, plumbing, paving, tiling, ceiling installation and home renovations in Soweto and Johannesburg. SABS-approved materials, professional service.',
  openGraph: og({
    title: 'Our Services | Jiyology Construction & Plumbing',
    description:
      'Roofing, plumbing, paving, tiling, ceiling installation and home renovations in Soweto and Johannesburg. SABS-approved materials, professional service.',
    url: 'https://www.jiyology.co.za/services',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: 'Jiyology Building Construction & Plumbing' }],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/services',
  },
}

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Discover our wide range of construction and plumbing services tailored to meet your needs."
        image="/images/pageHeaderImage.jpg"
      />
      <MainServices />
      <CTA />
    </>
  )
}
