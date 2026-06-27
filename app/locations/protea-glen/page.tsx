import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import { Check, Phone, MapPin, Shield, Star, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson, breadcrumbLdJson, locationServiceLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Builders in Protea Glen Soweto | Jiyology' },
  description: 'Trusted builders and construction company in Protea Glen, Soweto. Plumbing, roofing, renovations, paving & building services. SABS approved, BEE Level 1.',
  openGraph: og({
    title: 'Builders in Protea Glen Soweto | Jiyology',
    description: 'Professional construction, plumbing, and renovation services in Protea Glen, Soweto. SABS approved materials, BEE Level 1. Free quotes.',
    url: 'https://www.jiyology.co.za/locations/protea-glen',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: 'Jiyology Building Construction & Plumbing' }],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/locations/protea-glen' },
  keywords: ['builders Protea Glen', 'plumbers Protea Glen', 'construction Protea Glen Soweto', 'roofing Protea Glen', 'renovations Protea Glen'],
  twitter: twitter({
    title: 'Builders & Plumbers Protea Glen | Jiyology',
    description: 'Construction and plumbing services in Protea Glen, Soweto. Roofing, renovations, paving, tiling and ceiling installation. Free quotes.',
  }),
}

const faqs = [
  { q: 'Do you offer new home builds in Protea Glen?', a: 'Yes. We construct new residential homes in Protea Glen Extensions 1 through 49. From slab to roof, we manage every phase using SABS-approved materials.' },
  { q: 'Can you do plumbing for a Protea Glen townhouse?', a: 'Absolutely. We handle full plumbing installations, maintenance, and emergency callouts for townhouse complexes and single-family homes in Protea Glen.' },
  { q: 'What is the average cost to build a house in Protea Glen?', a: 'Costs vary based on size and finishes. Contact us for a free, no-obligation quote tailored to your specific plot and requirements in Protea Glen.' },
  { q: 'Do you serve all Protea Glen extensions?', a: 'Yes. We work across all Protea Glen extensions including Ext 1, Ext 2, Ext 4, Ext 5, Ext 7, Ext 11, Ext 15, Ext 24, Ext 33, and Ext 49.' },
]

export default function ProteaGlenPage() {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(locationServiceLdJson('Protea Glen', 'https://www.jiyology.co.za/locations/protea-glen'))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqLdJson(faqs))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbLdJson([
          { name: 'Home', url: 'https://www.jiyology.co.za' },
          { name: 'Locations', url: 'https://www.jiyology.co.za/locations' },
          { name: 'Protea Glen', url: 'https://www.jiyology.co.za/locations/protea-glen' },
        ]))}} />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label="Protea Glen">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium" aria-current="page">Protea Glen</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Construction & Plumbing Services in Protea Glen, Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing delivers quality construction, plumbing, and renovation services throughout Protea Glen. SABS-approved materials, BEE Level 1, and over 10 years of local experience.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><Star className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">200+ Projects</p><p className="text-sm text-muted-foreground">Across Soweto</p></div>
            <div><Award className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">10+ Years</p><p className="text-sm text-muted-foreground">Building experience</p></div>
            <div><Shield className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">SABS Approved</p><p className="text-sm text-muted-foreground">Quality materials</p></div>
            <div><MapPin className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">BEE Level 1</p><p className="text-sm text-muted-foreground">50% woman owned</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="About serving Protea Glen">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Local Builders in Protea Glen</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Protea Glen is one of Soweto fastest-growing suburbs, with hundreds of new homes being built every year. Jiyology Building Construction & Plumbing has been part of this growth, providing reliable building and plumbing services to homeowners in Protea Glen for over a decade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                From laying foundations to installing roof trusses, from rough-in plumbing to final finishes, our team handles every stage of construction with precision and care. We understand the Protea Glen housing landscape intimately knowing which extensions are still developing and what materials suit the local soil and weather conditions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Level One 135% BEE compliant company with SABS-approved materials, we deliver quality that lasts. Whether you are building from scratch in Protea Glen Ext 33 or renovating an existing home in Ext 5, we bring professionalism and workmanship you can trust.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Services in Protea Glen</h3>
              <ul className="space-y-4">
                {[
                  { service: 'Construction', href: '/services/construction', desc: 'New builds, extensions & commercial' },
                  { service: 'Plumbing', href: '/services/plumbing', desc: 'Maintenance, repairs & emergency callouts' },
                  { service: 'Roofing', href: '/services/roofing', desc: 'Roof tiles, sheets, repairs & installation' },
                  { service: 'Renovations', href: '/services/renovations', desc: 'Kitchen, bathroom & full home makeovers' },
                  { service: 'Paving', href: '/services/paving', desc: 'Driveways, patios & walkways' },
                  { service: 'Tiling & Painting', href: '/services/tiling-painting', desc: 'Interior & exterior finishing' },
                ].map((item) => (
                  <li key={item.service}>
                    <Link href={item.href} className="flex items-start gap-3 group">
                      <Check className="w-5 h-5 text-[#33b6db] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-[#33b6db] transition-colors">{item.service}</span>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Soweto suburbs">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">We Serve the Whole of Soweto Including Protea Glen</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Protea Glen is just one of the many Soweto suburbs we serve. Our team is available across the township for all construction and plumbing needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Soweto', href: '/locations/soweto' },
              { name: 'Dobsonville', href: '/locations/dobsonville' },
              { name: 'Diepkloof', href: '/locations/diepkloof' },
              { name: 'Pimville', href: '/locations/pimville' },
              { name: 'Meadowlands', href: '/locations/meadowlands' },
              { name: 'Orlando', href: '/locations/orlando' },
              { name: 'Emdeni', href: '/locations/emdeni' },
              { name: 'Johannesburg', href: '/locations/johannesburg' },
            ].map((suburb) => (
              <Link key={suburb.name} href={suburb.href} className="bg-background rounded-xl p-5 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-md transition-all text-center">
                <p className="font-semibold text-foreground">{suburb.name}</p>
                <p className="text-xs text-muted-foreground mt-1">Construction & Plumbing</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Our Protea Glen Services</h2>
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
