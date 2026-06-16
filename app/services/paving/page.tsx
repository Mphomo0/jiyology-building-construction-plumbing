import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Shield, Clock, Award, Phone, Car, TreePine, Building2, Wrench } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { serviceLdJson, faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Paving Services in Soweto & Johannesburg | Jiyology',
  description: 'Professional paving services in Soweto and Johannesburg. Driveway paving, patio paving, walkways and commercial paving. SABS approved, BEE Level 1. Free quote.',
  openGraph: {
    title: 'Paving Services Soweto & Johannesburg | Jiyology Construction',
    description: 'Quality paving for driveways, patios, walkways, and commercial spaces. Interlocking blocks, brick paving, and concrete slabs. Serving Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/services/paving',
  },
  alternates: { canonical: 'https://www.jiyology.co.za/services/paving' },
}

const faqs = [
  { q: 'What types of paving do you install in Soweto?', a: 'We install interlocking brick paving, concrete blocks, clay pavers, and concrete slabs. Each option offers different aesthetic and durability benefits, and we help you choose the best fit for your property.' },
  { q: 'How much does driveway paving cost in Johannesburg?', a: 'Costs depend on the area size, paving material chosen, and ground preparation required. We provide free, no-obligation quotes with full transparency. Contact us for an accurate estimate.' },
  { q: 'Do you repair existing paving?', a: 'Yes. We repair sunken, cracked, or uneven paving including block replacement, re-sanding, re-leveling, and full section replacements to restore your paved surfaces.' },
  { q: 'How long does paving take to install?', a: 'A standard driveway typically takes 2-4 days depending on size and site conditions. Larger commercial projects may take longer. We provide a timeline during quoting.' },
]

export default function PavingPage() {
  const service = {
    name: 'Paving Services',
    description: 'Professional paving installation and repair services for driveways, patios, walkways, and commercial spaces in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const pavingServices = [
    { icon: Car, title: 'Driveway Paving', desc: 'Enhance your home curb appeal with professionally paved driveways using durable interlocking blocks or concrete pavers designed to withstand vehicles.', items: ['Interlocking brick paving', 'Concrete block paving', 'Driveway design', 'Edging & kerbing'] },
    { icon: TreePine, title: 'Patio & Walkway Paving', desc: 'Create beautiful outdoor living spaces with custom patio paving and garden walkways. Perfect for entertaining, relaxation, and improving property flow.', items: ['Patio paving', 'Garden pathways', 'Pool surrounds', 'Outdoor entertainment areas'] },
    { icon: Building2, title: 'Commercial Paving', desc: 'Large-scale commercial paving solutions for retail centres, office parks, industrial sites, and public spaces. Durable materials for high-traffic areas.', items: ['Retail parking lots', 'Office park paving', 'Industrial flooring', 'Public walkways'] },
    { icon: Wrench, title: 'Paving Repairs', desc: 'Professional repair services for damaged, sunken, or uneven paved surfaces. We restore safety, appearance, and functionality to your existing paving.', items: ['Block replacement', 'Re-sanding & sealing', 'Re-leveling', 'Section restoration'] },
  ]

  return (
    <>
      <Script id="paving-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="paving-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="paving-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLdJson([
          { name: 'Home', url: 'https://www.jiyology.co.za' },
          { name: 'Services', url: 'https://www.jiyology.co.za/services' },
          { name: 'Paving', url: 'https://www.jiyology.co.za/services/paving' },
        ]))}
      </Script>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label="Paving Services">
        <div className="absolute inset-0">
          <Image src="/images/paving.jpg" alt="" fill className="object-cover opacity-15" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium" aria-current="page">Paving</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Professional Paving Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Transform your property with quality paving solutions. Driveways, patios, walkways, and commercial paving using durable interlocking blocks and concrete.
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

      <section className="py-20 bg-background" aria-label="Paving services overview">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Paving Services for Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            At Jiyology Building Construction & Plumbing, we specialise in professional paving solutions that enhance the beauty, functionality, and value of your property. Whether you need a new driveway, a patio for outdoor entertaining, or large-scale commercial paving, our team delivers precision and quality in every project across Soweto, Johannesburg, and Gauteng.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            We work with a variety of paving materials including interlocking concrete blocks, clay pavers, and concrete slabs to suit your aesthetic preferences and budget. Proper base preparation is critical for long-lasting paving, and our team follows strict installation protocols including correct excavation, compaction, sand bedding, and edge restraint to ensure your paved surfaces remain level and durable for years to come.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {pavingServices.map((svc) => (
              <div key={svc.title} className="bg-muted/30 rounded-2xl p-8 border border-border/60">
                <svc.icon className="w-10 h-10 text-[#33b6db] mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{svc.title}</h3>
                <p className="text-muted-foreground mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-[#33b6db]" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/60">
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Jiyology for Paving?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
                <p className="text-muted-foreground text-sm">We use only SABS-approved paving materials that are durable, fade-resistant, and designed to withstand South African weather conditions and heavy use.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Expert Installation</h3>
                <p className="text-muted-foreground text-sm">Our paving team follows strict installation standards including proper base preparation, compaction, and finishing to ensure long-lasting, level surfaces.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Free Quotes & Advice</h3>
                <p className="text-muted-foreground text-sm">We provide free consultations and quotes, helping you choose the right paving material and design for your property. No obligation, no pressure.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Paving Services Across Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide paving services across Soweto, Johannesburg, and all surrounding areas. Contact us for a free quote on your paving project.
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Paving</h2>
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
