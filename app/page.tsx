import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import AboutSection from '@/components/sections/home/AboutSection'
import CTA from '@/components/sections/home/CTA'
import Hero from '@/components/sections/home/Hero'
import ServicesSection from '@/components/sections/home/ServicesSection'
import FAQSection from '@/components/sections/home/FAQSection'
import { faqLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: {
    absolute: 'Construction & Plumbing Services Soweto | Jiyology',
  },
  description:
    "Soweto's trusted construction & plumbing contractor. Roofing, renovations, tiling, paving & ceiling installation. SABS approved, BEE Level 1. Free quote.",
  openGraph: og({
    title: 'Construction & Plumbing Services Soweto | Jiyology',
    description:
      "Soweto's trusted construction & plumbing contractor. Roofing, renovations, tiling, paving & ceiling installation. SABS approved, BEE Level 1. Free quote.",
    url: 'https://www.jiyology.co.za',
  }),
  keywords: [
    'construction company Soweto',
    'plumbing services Johannesburg',
    'roofing contractors Soweto',
    'home renovation Johannesburg',
    'BEE Level 1 contractor Gauteng',
    'SABS approved building contractor',
  ],
  twitter: twitter({
    title: 'Construction & Plumbing Services Soweto | Jiyology',
    description:
      "Soweto's trusted construction & plumbing contractor. Roofing, renovations, tiling, paving & ceiling installation. SABS approved, BEE Level 1. Free quote.",
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za',
  },
}

const homeFaqs = [
  {
    q: 'What construction and plumbing services do you offer in Soweto?',
    a: 'Jiyology offers roofing, plumbing, home renovations, construction, paving, tiling, painting, and ceiling installation across Soweto and Johannesburg.',
  },
  {
    q: 'Are you BEE Level 1 compliant?',
    a: 'Yes. Jiyology is Level One 135% BEE compliant and 50% black woman-owned, meeting all government and corporate procurement requirements.',
  },
  {
    q: 'Do you use SABS-approved materials?',
    a: 'Yes, we exclusively use SABS (South African Bureau of Standards) approved products and materials on every project.',
  },
  {
    q: 'How do I get a free quote?',
    a: 'Call us at (011) 931 0157, email vusi@jiyology.co.za, or fill in the contact form. We respond within one business day.',
  },
  {
    q: 'Do you offer emergency plumbing in Soweto?',
    a: 'Yes, we provide 24/7 emergency plumbing across Soweto and Johannesburg for burst pipes, blocked drains, and geyser failures.',
  },
]

export default function Home() {
  const faqSchema = faqLdJson(homeFaqs)
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <CTA />
    </>
  )
}
