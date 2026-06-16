import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Check, Phone, MapPin, Shield, Star, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Building Contractors in Johannesburg | Jiyology Construction',
  description: 'Trusted building contractors in Johannesburg. Construction, plumbing, roofing, renovations & commercial building services. SABS approved, BEE Level 1. Free quotes citywide.',
  openGraph: {
    title: 'Best Building Contractors in Johannesburg | Jiyology',
    description: 'Professional construction, plumbing, and renovation services across Johannesburg. SABS approved materials, BEE Level 1. Free quotes for residential and commercial projects.',
    url: 'https://www.jiyology.co.za/locations/johannesburg',
  },
  alternates: { canonical: 'https://www.jiyology.co.za/locations/johannesburg' },
}

const faqs = [
  { q: 'Do you handle commercial construction in Johannesburg?', a: 'Yes. We undertake commercial construction projects in Johannesburg including office fit-outs, retail renovations, and light industrial building work.' },
  { q: 'Can you work on heritage properties in Johannesburg CBD?', a: 'Yes. We have experience with heritage and listed buildings in the Johannesburg CBD and suburbs like Parktown and Houghton, working within preservation guidelines.' },
  { q: 'Do you serve Johannesburg northern suburbs?', a: 'Yes. We serve all Johannesburg areas including the northern suburbs such as Fourways, Sandton, Midrand, Randburg, and Roodepoort.' },
  { q: 'Are you insured for Johannesburg construction projects?', a: 'Yes. We carry full public liability insurance and all our work complies with Johannesburg building regulations and safety standards.' },
]

export default function JohannesburgPage() {
  return (
    <>
      <Script id="johannesburg-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="johannesburg-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumbLdJson([
          { name: 'Home', url: 'https://www.jiyology.co.za' },
          { name: 'Locations', url: 'https://www.jiyology.co.za/locations' },
          { name: 'Johannesburg', url: 'https://www.jiyology.co.za/locations/johannesburg' },
        ]))}
      </Script>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label="Johannesburg">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><span className="mx-2">/</span></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><span className="mx-2">/</span></li>
              <li className="text-white font-medium" aria-current="page">Johannesburg</li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Construction & Plumbing Services in Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing provides professional building, plumbing, and renovation services across greater Johannesburg. SABS-approved materials, BEE Level 1, and over 10 years of experience.
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
            <div><Star className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">200+ Projects</p><p className="text-sm text-muted-foreground">Across Johannesburg</p></div>
            <div><Award className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">10+ Years</p><p className="text-sm text-muted-foreground">Building experience</p></div>
            <div><Shield className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">SABS Approved</p><p className="text-sm text-muted-foreground">Quality materials</p></div>
            <div><MapPin className="w-8 h-8 text-[#33b6db] mx-auto mb-2" /><p className="font-bold text-foreground">BEE Level 1</p><p className="text-sm text-muted-foreground">50% woman owned</p></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="About serving Johannesburg">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Your Local Building Contractors in Johannesburg</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Johannesburg is a city of opportunity, and Jiyology Building Construction & Plumbing is proud to serve homeowners and businesses across the greater Johannesburg area. While our roots are in Soweto, our expertise extends to every corner of the city, from the northern suburbs to the south, and from the CBD to the western areas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We handle a wide variety of projects in Johannesburg, including residential home builds and renovations, commercial fit-outs, retail space upgrades, and industrial maintenance work. Every project is managed to Johannesburg building standards using SABS-approved materials, with full compliance to municipal regulations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Level One 135% BEE compliant company, 50% black woman owned, we are well positioned for government and private sector projects. Our team has the experience and capacity to deliver projects of any scale across Johannesburg. Contact us for a free site assessment and detailed quote.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">Our Services in Johannesburg</h3>
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
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">We Serve the Whole of Soweto Including Johannesburg</h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Johannesburg is just one of the many areas we serve. Our team is available across the city for all construction and plumbing needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Soweto', href: '/locations/soweto' },
              { name: 'Protea Glen', href: '/locations/protea-glen' },
              { name: 'Dobsonville', href: '/locations/dobsonville' },
              { name: 'Diepkloof', href: '/locations/diepkloof' },
              { name: 'Pimville', href: '/locations/pimville' },
              { name: 'Meadowlands', href: '/locations/meadowlands' },
              { name: 'Orlando', href: '/locations/orlando' },
              { name: 'Emdeni', href: '/locations/emdeni' },
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
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions About Our Johannesburg Services</h2>
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
