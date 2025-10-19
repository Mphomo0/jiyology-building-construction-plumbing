import AboutSection from '@/components/sections/home/AboutSection'
import CTA from '@/components/sections/home/CTA'
import Hero from '@/components/sections/home/Hero'
import ServicesSection from '@/components/sections/home/ServicesSection'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <CTA />
    </>
  )
}
