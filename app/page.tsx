import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import AboutSection from '@/components/sections/home/AboutSection'
import CTA from '@/components/sections/home/CTA'
import Hero from '@/components/sections/home/Hero'
import ServicesSection from '@/components/sections/home/ServicesSection'
import FAQSection from '@/components/sections/home/FAQSection'

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
