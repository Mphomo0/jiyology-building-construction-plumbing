import type { Metadata } from 'next'
import AboutSection from '@/components/sections/home/AboutSection'
import CTA from '@/components/sections/home/CTA'
import Hero from '@/components/sections/home/Hero'
import ServicesSection from '@/components/sections/home/ServicesSection'
import FAQSection from '@/components/sections/home/FAQSection'

export const metadata: Metadata = {
  title: 'Home',
  description:
    "Jiyology Building Construction & Plumbing - Soweto's trusted contractor for roofing, plumbing, renovations, tiling, paving, and ceiling installation. SABS approved, BEE Level 1 compliant. Get your free quote today.",
  openGraph: {
    title: 'Jiyology | Professional Construction & Plumbing Services in Soweto',
    description:
      'Trusted construction and plumbing services in Soweto and Johannesburg. Quality workmanship, SABS-approved materials, and BEE Level 1 compliant.',
    type: 'website',
    url: 'https://www.jiyology.co.za',
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FAQSection />
      <CTA />
    </>
  )
}
