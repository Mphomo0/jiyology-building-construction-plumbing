import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Shield, Clock, Award, Phone, Building2, Warehouse, Home, Plus } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { serviceLdJson, faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Construction Services in Soweto & Johannesburg | Jiyology',
  description: 'Professional construction services in Soweto and Johannesburg. Residential construction, commercial builds, extensions and new builds. SABS approved, BEE Level 1.',
  openGraph: {
    title: 'Construction Services Soweto & Johannesburg | Jiyology',
    description: 'Quality construction services for residential and commercial projects. New builds, extensions, renovations. SABS approved materials, BEE Level 1 compliant.',
    url: 'https://www.jiyology.co.za/services/construction',
  },
  alternates: { canonical: 'https://www.jiyology.co.za/services/construction' },
}

const faqs = [
  { q: 'Do you build new homes in Soweto?', a: 'Yes. We specialise in new home construction across Soweto and Johannesburg. From foundation to finishing, we manage the entire building process including plans, permits, and inspections.' },
  { q: 'How much does it cost to build a house in Soweto?', a: 'Costs vary based on size, materials, and design complexity. We provide detailed, transparent quotes after assessing your requirements. Contact us for a free consultation and accurate estimate.' },
  { q: 'Can you handle commercial construction projects?', a: 'Yes. We have extensive experience in commercial construction including retail spaces, offices, warehouses, and industrial facilities. All projects are managed to SABS standards.' },
  { q: 'Do you do house extensions in Johannesburg?', a: 'Absolutely. We design and build house extensions including additional bedrooms, lounges, granny flats, and second-storey additions. We handle all structural and finishing work.' },
]

export default function ConstructionPage() {
  const service = {
    name: 'Construction Services',
    description: 'Complete construction services including residential, commercial, new builds, and extensions in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const constructionServices = [
    { icon: Home, title: 'Residential Construction', desc: 'Custom home building and residential construction projects tailored to your family needs and budget. We build quality homes that stand the test of time.', items: ['New home building', 'Custom home design', 'Residential developments', 'Project management'] },
    { icon: Building2, title: 'Commercial Construction', desc: 'Full-service commercial construction for retail, office, and industrial spaces. We deliver on time and within budget for businesses across Gauteng.', items: ['Retail construction', 'Office fit-outs', 'Industrial buildings', 'Warehouse construction'] },
    { icon: Warehouse, title: 'New Builds', desc: 'Complete new build solutions from site preparation to handover. We manage every stage including foundations, structural work, roofing, and interiors.', items: ['Site preparation', 'Foundation & slab', 'Structural framing', 'Interior finishing'] },
    { icon: Plus, title: 'Extensions & Additions', desc: 'Expand your living or working space with professionally designed and constructed extensions. Seamlessly integrated with your existing structure.', items: ['Room additions', 'Granny flats', 'Second storey', 'Commercial extensions'] },
  ]

  return (
    <>
      <Script id="construction-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="construction-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="construction-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLdJson([
          { name: 'Home', url: 'https://www.jiyology.co.za' },
          { name: 'Services', url: 'https://www.jiyology.co.za/services' },
          { name: 'Construction', url: 'https://www.jiyology.co.za/services/construction' },
        ]))}
      </Script>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label="Construction Services">
        <div className="absolute inset-0">
          <Image src="/images/construction.jpg" alt="" fill className="object-cover opacity-15" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium" aria-current="page">Construction</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Professional Construction Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            From custom homes to commercial developments, we deliver quality construction projects across Soweto and Johannesburg. SABS-approved materials, expert project management.
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

      <section className="py-20 bg-background" aria-label="Construction services overview">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Complete Construction Services for Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Jiyology Building Construction & Plumbing offers end-to-end construction services for residential and commercial clients across Soweto, Johannesburg, and all of Gauteng. Whether you are planning a new home, commercial development, or a home extension, our experienced team delivers quality craftsmanship, superior project management, and lasting results. We use only SABS-approved materials and adhere to all South African building regulations to ensure your project is built to the highest standards.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Our construction team brings over a decade of experience to every project. From initial consultation and design through to construction and handover, we keep you informed and involved. We understand the unique requirements of building in Soweto and Johannesburg, from local zoning regulations to climate considerations, and we tailor our approach accordingly. Our BEE Level 1 status makes us the ideal partner for both private and public sector projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {constructionServices.map((svc) => (
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
            <h2 className="text-2xl font-bold text-foreground mb-6">Why Choose Jiyology for Construction?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">SABS Approved Materials</h3>
                <p className="text-muted-foreground text-sm">All building materials meet South African Bureau of Standards specifications, ensuring structural integrity and longevity for every project we undertake.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Experienced Project Management</h3>
                <p className="text-muted-foreground text-sm">Our project managers oversee every phase of construction, coordinating subcontractors, timelines, and budgets to deliver on time and on budget.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Full Service Offering</h3>
                <p className="text-muted-foreground text-sm">From site clearing and foundations to roofing, plumbing, electrical, and finishes, we manage the complete construction process under one roof.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Construction Services Across Soweto & Johannesburg</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide construction services throughout Soweto, Johannesburg, and the greater Gauteng region. Contact us for a free consultation.
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Construction</h2>
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
