import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import { Check, Phone, MapPin, Shield, Star, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson, breadcrumbLdJson, locationServiceLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Builders in Dobsonville Soweto | Jiyology' },
  description:
    'Professional construction and plumbing in Dobsonville, Soweto. Roofing, renovations, paving & building services. SABS approved, BEE Level 1. Free quotes.',
  openGraph: og({
    title: 'Builders in Dobsonville Soweto | Jiyology',
    description:
      'Professional construction, plumbing, and renovation services in Dobsonville, Soweto. SABS approved materials, BEE Level 1. Free quotes.',
    url: 'https://www.jiyology.co.za/locations/dobsonville',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/locations/dobsonville' },
  keywords: ['builders Dobsonville', 'plumbers Dobsonville', 'construction Dobsonville Soweto', 'roofing Dobsonville', 'renovations Dobsonville'],
  twitter: twitter({
    title: 'Builders & Plumbers Dobsonville | Jiyology',
    description: 'Construction and plumbing services in Dobsonville, Soweto. Roofing, renovations, paving, tiling and ceiling installation. Free quotes.',
  }),
}

const faqs = [
  {
    q: 'Do you do residential construction in Dobsonville?',
    a: 'Yes. We build and renovate homes across Dobsonville including Dobsonville Gardens, Dobsonville Ext 1, and the older Dobsonville sections A through G.',
  },
  {
    q: 'Can you replace old galvanised pipes in Dobsonville homes?',
    a: 'Absolutely. Many Dobsonville homes still have galvanised plumbing. We specialise in re-piping with modern materials to prevent leaks and improve water pressure.',
  },
  {
    q: 'Do you offer roofing services in Dobsonville?',
    a: 'Yes. We install new roofs, replace old roof sheets, and repair leaks for both residential and commercial properties throughout Dobsonville.',
  },
  {
    q: 'How do I get a construction quote for my Dobsonville property?',
    a: 'Call us at (011) 931 0157 or email vusi@jiyology.co.za. We visit your site, assess the work, and provide a detailed written quote within one business day.',
  },
]

export default function DobsonvillePage() {
  return (
    <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(locationServiceLdJson('Dobsonville', 'https://www.jiyology.co.za/locations/dobsonville'))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqLdJson(faqs))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Locations', url: 'https://www.jiyology.co.za/locations' },
            {
              name: 'Dobsonville',
              url: 'https://www.jiyology.co.za/locations/dobsonville',
            },
          ]),
        )}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Dobsonville"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-white transition-colors"
                >
                  Locations
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white font-medium" aria-current="page">
                Dobsonville
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Building & Plumbing Services in Dobsonville, Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing is your trusted
            construction partner in Dobsonville. Quality workmanship,
            SABS-approved materials, BEE Level 1, and over 10 years serving the
            Soweto community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#33b6db] hover:bg-[#2aa8cc] text-slate-950 font-semibold rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+27119310157"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2 w-4 h-4" /> Call (011) 931 0157
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Star className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">200+ Projects</p>
              <p className="text-sm text-muted-foreground">Across Soweto</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">10+ Years</p>
              <p className="text-sm text-muted-foreground">
                Building experience
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">SABS Approved</p>
              <p className="text-sm text-muted-foreground">Quality materials</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">BEE Level 1</p>
              <p className="text-sm text-muted-foreground">50% woman owned</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-background"
        aria-label="About serving Dobsonville"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Local Builders in Dobsonville
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Dobsonville is a well-established Soweto suburb with a mix of
                older homes and new developments. Jiyology Building Construction
                & Plumbing has been active in Dobsonville for over a decade,
                helping homeowners maintain, renovate, and extend their
                properties.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our work in Dobsonville ranges from minor plumbing repairs in
                older Section A homes to full new-build projects in Dobsonville
                Gardens and the Ext 1 area. We are familiar with the local
                municipality requirements and ensure all work meets SABS
                standards and building regulations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Level One 135% BEE compliant company, 50% black woman
                owned, we take pride in contributing to Dobsonville growth.
                Whether you need a new roof, a bathroom renovation, or emergency
                plumbing, our team responds promptly and delivers quality
                results.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Services in Dobsonville
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    service: 'Plumbing',
                    href: '/services/plumbing',
                    desc: 'Maintenance, repairs & emergency callouts',
                  },
                  {
                    service: 'Construction',
                    href: '/services/construction',
                    desc: 'New builds, extensions & commercial',
                  },
                  {
                    service: 'Roofing',
                    href: '/services/roofing',
                    desc: 'Roof tiles, sheets, repairs & installation',
                  },
                  {
                    service: 'Renovations',
                    href: '/services/renovations',
                    desc: 'Kitchen, bathroom & full home makeovers',
                  },
                  {
                    service: 'Ceiling Installation',
                    href: '/services/ceiling-installation',
                    desc: 'New ceilings & ceiling repairs',
                  },
                  {
                    service: 'Paving',
                    href: '/services/paving',
                    desc: 'Driveways, patios & walkways',
                  },
                ].map((item) => (
                  <li key={item.service}>
                    <Link
                      href={item.href}
                      className="flex items-start gap-3 group"
                    >
                      <Check className="w-5 h-5 text-[#33b6db] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-foreground group-hover:text-[#33b6db] transition-colors">
                          {item.service}
                        </span>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
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
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            We Serve the Whole of Soweto Including Dobsonville
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Dobsonville is just one of the many Soweto suburbs we serve. Our
            team covers the entire township for all construction and plumbing
            projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Soweto', href: '/locations/soweto' },
              { name: 'Protea Glen', href: '/locations/protea-glen' },
              { name: 'Diepkloof', href: '/locations/diepkloof' },
              { name: 'Pimville', href: '/locations/pimville' },
              { name: 'Meadowlands', href: '/locations/meadowlands' },
              { name: 'Orlando', href: '/locations/orlando' },
              { name: 'Emdeni', href: '/locations/emdeni' },
              { name: 'Johannesburg', href: '/locations/johannesburg' },
            ].map((suburb) => (
              <Link
                key={suburb.name}
                href={suburb.href}
                className="bg-background rounded-xl p-5 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-md transition-all text-center"
              >
                <p className="font-semibold text-foreground">{suburb.name}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Construction & Plumbing
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Our Dobsonville Services
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-muted/30 rounded-xl border border-border/60 p-4 group"
              >
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
