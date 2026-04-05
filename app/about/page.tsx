import type { Metadata } from 'next'
import PageHeader from '@/components/global/PageHeader'
import AboutCompany from '@/components/sections/about/AboutCompany'
import Vision from '@/components/sections/about/Vision'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Jiyology Building Construction & Plumbing - founded by Vusi and Lerato Jiya. SABS approved, BEE Level 1 compliant (50% black woman owned). Serving Soweto and Johannesburg with quality construction and plumbing services.',
  openGraph: {
    title: 'About Jiyology | Our Story & Values',
    description:
      'Discover the story behind Jiyology Construction & Plumbing. A BEE Level 1, SABS approved company committed to quality and client satisfaction in Soweto.',
    url: 'https://www.jiyology.co.za/about',
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za/about',
  },
}

const aboutFaqs = [
  {
    q: 'Who founded Jiyology Construction & Plumbing?',
    a: 'Jiyology was founded by Vusi Jiya and Lerato Jiya, who share a passion for helping customers and delivering quality construction and plumbing services in Soweto and surrounding areas.',
  },
  {
    q: 'Is Jiyology BEE compliant?',
    a: 'Yes, Jiyology is a Level One 135% BEE compliant company, 50% black woman owned, and an equal opportunity employer.',
  },
  {
    q: 'What quality standards does Jiyology follow?',
    a: 'We exclusively use SABS (South African Bureau of Standards) approved products and materials, ensuring the highest quality in every project we undertake.',
  },
]

export default function About() {
  const ldJson = faqLdJson(aboutFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <PageHeader
        title="About Us"
        subtitle="Getting to know the team behind Jiyology"
        image="/images/pageHeaderImage.jpg"
      />
      <AboutCompany />
      <Vision />
      <CTA />
    </>
  )
}
