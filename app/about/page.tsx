import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/global/PageHeader'
import AboutCompany from '@/components/sections/about/AboutCompany'
import Vision from '@/components/sections/about/Vision'
import CTA from '@/components/sections/home/CTA'
import { Button } from '@/components/ui/button'
import { faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Founded by Vusi and Lerato Jiya in Soweto. SABS approved, BEE Level 1, 50% black woman owned. Quality construction and plumbing you can trust.',
  openGraph: og({
    title: 'About Us | Jiyology Construction & Plumbing',
    description:
      'Founded by Vusi and Lerato Jiya in Soweto. SABS approved, BEE Level 1, 50% black woman owned. Quality construction and plumbing you can trust.',
    url: 'https://www.jiyology.co.za/about',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: 'Jiyology Building Construction & Plumbing' }],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/about',
  },
  keywords: ['about Jiyology', 'construction company Soweto founders', 'BEE Level 1 contractor Soweto', 'SABS approved builder Soweto'],
  twitter: twitter({
    title: 'About Us | Jiyology Construction & Plumbing',
    description: 'Founded by Vusi and Lerato Jiya in Soweto. SABS approved, BEE Level 1, 50% black woman owned. Quality construction and plumbing you can trust.',
  }),
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
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za/' },
    { name: 'About Us', url: 'https://www.jiyology.co.za/about' },
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
        title="About Us"
        subtitle="Getting to know the team behind Jiyology"
        image="/images/pageHeaderImage.jpg"
      />
      <AboutCompany />
      <Vision />
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get to know the experienced professionals behind Jiyology.
          </p>
          <Link href="/team">
            <Button size="lg" className="bg-neutral-950 hover:bg-[#33b6db] text-white">
              View Our Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
      <CTA />
    </>
  )
}
