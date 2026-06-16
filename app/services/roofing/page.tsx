import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Shield, Clock, Award, Phone } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { serviceLdJson, faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Professional Roofing Services in Soweto & Johannesburg | Jiyology',
  description: 'Expert roofing contractors in Soweto and Johannesburg. Roof tiles, roof sheets, roof erection & repairs. SABS-approved materials, BEE Level 1. Free quote.',
  openGraph: {
    title: 'Roofing Contractors Soweto & Johannesburg | Jiyology Construction',
    description: 'Professional roofing installation, repairs, and maintenance. SABS-approved materials. Serving Soweto, Protea Glen, Dobsonville, Diepkloof, and Johannesburg.',
    url: 'https://www.jiyology.co.za/services/roofing',
  },
  alternates: { canonical: 'https://www.jiyology.co.za/services/roofing' },
}

const faqs = [
  { q: 'What types of roofing do you install in Soweto?', a: 'We install a wide range of roofing including concrete roof tiles, IBR sheets, Chromodek, corrugated iron, and flat roof waterproofing. All materials are SABS approved and suitable for the Johannesburg climate.' },
  { q: 'How much does a new roof cost in Soweto?', a: 'Costs depend on roof size, material choice, and complexity. We provide free, no-obligation quotes tailored to your specific project. Contact us for an accurate estimate.' },
  { q: 'Do you repair leaking roofs in Johannesburg?', a: 'Yes. We provide comprehensive roof leak detection and repair services across Soweto, Johannesburg, and all surrounding areas. Our team identifies the source and provides lasting repairs.' },
  { q: 'Are your roofing materials SABS approved?', a: 'Yes. We exclusively use SABS (South African Bureau of Standards) approved roofing materials. This guarantees quality, durability, and compliance with South African building regulations.' },
  { q: 'How long does a roof installation take?', a: 'A standard residential roof installation typically takes 1-2 weeks, depending on size and complexity. Commercial projects may take longer. We provide a detailed timeline during quoting.' },
  { q: 'Do you offer emergency roof repairs?', a: 'Yes. We respond quickly to emergency roof repairs including storm damage, leaks, and structural issues across Soweto and Johannesburg. Call us for immediate assistance.' },
]

export default function RoofingPage() {
  const service = {
    name: 'Roofing Services',
    description: 'Complete roofing solutions including roof tiles, roof sheets, and professional roof erection in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  return (
    <>
      <Script id="roofing-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="roofing-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="roofing-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLdJson([
          { name: 'Home', url: 'https://www.jiyology.co.za' },
          { name: 'Services', url: 'https://www.jiyology.co.za/services' },
          { name: 'Roofing', url: 'https://www.jiyology.co.za/services/roofing' },
        ]))}
      </Script>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label="Roofing Services">
        <div className="absolute inset-0">
          <Image src="/images/roofing.jpg" alt="" fill className="object-cover opacity-15" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium" aria-current="page">Roofing</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Professional Roofing Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Complete roofing solutions from installation to repairs. SABS-approved materials, expert craftsmanship, and free quotes for residential and commercial clients.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-[#33b6db] hover:bg-[#2aa8cc] text-slate-950 font-semibold rounded-lg transition-colors">
              Get Free Quote
            </Link>
            <a href="tel:+27119310157" className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="mr-2 w-4 h-4" /> Call (011) 931 0157
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: 'SABS Approved', desc: 'Quality materials' },
              { icon: Award, label: 'BEE Level 1', desc: '135% compliant' },
              { icon: Clock, label: '10+ Years', desc: 'Experience' },
              { icon: Check, label: '200+ Projects', desc: 'Completed' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
                <p className="font-bold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="Roofing services overview">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Roofing Solutions for Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            At Jiyology Building Construction & Plumbing, we provide comprehensive roofing services for residential and commercial properties across Soweto, Johannesburg, and all of Gauteng. Whether you need a new roof installation, roof repairs, or maintenance, our team delivers quality workmanship using SABS-approved materials.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold text-foreground mb-4">Roof Tiles</h3>
              <p className="text-muted-foreground mb-4">Concrete and clay roof tiles are a popular choice for homes in South Africa due to their durability, aesthetic appeal, and excellent insulation properties. We install a wide variety of roof tile styles and colours to match your home design.</p>
              <ul className="space-y-2">
                {['Concrete roof tiles', 'Clay tiles', 'Weatherproof installation', 'Colour matching'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-[#33b6db]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold text-foreground mb-4">Roof Sheets</h3>
              <p className="text-muted-foreground mb-4">IBR, Chromodek, and corrugated roof sheeting is ideal for both residential and commercial properties. Lightweight, durable, and cost-effective, roof sheets are a practical choice for projects across Soweto and Johannesburg.</p>
              <ul className="space-y-2">
                {['IBR sheeting', 'Chromodek installation', 'Corrugated iron', 'Insulated roof panels'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-[#33b6db]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold text-foreground mb-4">Roof Erection & New Builds</h3>
              <p className="text-muted-foreground mb-4">From new home construction to commercial buildings, our team handles complete roof erection projects. We manage everything from truss installation to final sheeting, ensuring your roof is structurally sound and weathertight.</p>
              <ul className="space-y-2">
                {['Truss installation', 'Full roof structure', 'New home roofing', 'Commercial roofing'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-[#33b6db]" />{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-2xl font-bold text-foreground mb-4">Roof Repairs & Maintenance</h3>
              <p className="text-muted-foreground mb-4">Leaking roofs, missing tiles, storm damage — our team provides fast, reliable roof repair services across Soweto and Johannesburg. We identify the root cause and provide lasting repairs to protect your property.</p>
              <ul className="space-y-2">
                {['Leak detection & repair', 'Tile replacement', 'Storm damage repair', 'Ridge & flashing repair'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-[#33b6db]" />{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/60">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Jiyology for Roofing in Soweto?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">SABS Approved Materials</h3>
                <p className="text-muted-foreground text-sm">All roofing materials meet South African Bureau of Standards specifications for quality and safety.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">BEE Level 1 Compliant</h3>
                <p className="text-muted-foreground text-sm">135% BEE compliant, 50% black woman owned. We meet all government and corporate procurement requirements.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Experienced Team</h3>
                <p className="text-muted-foreground text-sm">Over 10 years of roofing experience across residential and commercial projects in Soweto and Johannesburg.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Roofing Services Across Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide roofing services throughout the greater Soweto area and Johannesburg. No matter where you are, our team will get your roof sorted.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Soweto', 'Protea Glen', 'Dobsonville', 'Diepkloof', 'Pimville', 'Meadowlands', 'Orlando', 'Emdeni', 'Johannesburg'].map((area) => (
              <Link key={area} href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`} className="bg-background rounded-xl p-4 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-md transition-all">
                <p className="font-semibold text-foreground">{area}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Roofing</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-muted/30 rounded-xl border border-border/60 p-4 group">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition-transform">&#9660;</span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
