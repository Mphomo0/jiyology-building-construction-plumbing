import type { Metadata } from 'next'
import PageHeader from '@/components/global/PageHeader'
import CTA from '@/components/sections/home/CTA'
import MainServices from '@/components/sections/services/MainServices'
import { faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Roofing, plumbing, paving, tiling, ceiling installation and home renovations in Soweto and Johannesburg. SABS-approved materials, professional service.',
  openGraph: {
    title: 'Our Services | Jiyology Construction & Plumbing',
    description:
      'Roofing, plumbing, paving, tiling, ceiling installation and home renovations in Soweto and Johannesburg. SABS-approved materials, professional service.',
    url: 'https://www.jiyology.co.za/services',
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za/services',
  },
}

const serviceFaqs = [
  {
    q: 'What roofing services does Jiyology offer?',
    a: 'We provide complete roofing solutions including roof tile installation, roof sheeting, roof erection, and roof repairs. All work is done using SABS approved materials with professional installation.',
  },
  {
    q: 'Do you offer emergency plumbing services in Soweto?',
    a: 'Yes, Jiyology offers emergency plumbing services in Soweto and surrounding areas. We handle plumbing maintenance, repairs, installations, and use quality fixtures for lasting results.',
  },
  {
    q: 'What areas do you serve for home renovations?',
    a: 'We serve Soweto, Johannesburg, and the greater Gauteng metropolitan area for home renovation projects, both interior and exterior.',
  },
  {
    q: 'Are your materials SABS approved?',
    a: 'Yes, we exclusively use SABS (South African Bureau of Standards) approved products and materials for all our construction and plumbing services.',
  },
]

export default function Services() {
  const ldJson = faqLdJson(serviceFaqs)
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za/' },
    { name: 'Services', url: 'https://www.jiyology.co.za/services' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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
