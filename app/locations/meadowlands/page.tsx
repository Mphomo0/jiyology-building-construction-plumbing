import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { Check, Phone, MapPin, Shield, Star, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Builders in Meadowlands Soweto | Jiyology' },
  description:
    'Professional builders and construction in Meadowlands, Soweto. Plumbing, roofing, renovations, paving & building services. SABS approved, BEE Level 1.',
  openGraph: {
    title: 'Builders in Meadowlands Soweto | Jiyology',
    description:
      'Professional construction, plumbing, and renovation services in Meadowlands, Soweto. SABS approved materials, BEE Level 1. Free quotes for all projects.',
    url: 'https://www.jiyology.co.za/locations/meadowlands',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  },
  alternates: { canonical: 'https://www.jiyology.co.za/locations/meadowlands' },
}

const faqs = [
  {
    q: 'Do you build houses in Meadowlands Zone 5?',
    a: 'Yes. We construct new homes in Meadowlands Zone 5 and all other zones. From foundation to finishing, we manage every phase of construction.',
  },
  {
    q: 'Can you fix leaking roofs in Meadowlands old houses?',
    a: 'Absolutely. Many older Meadowlands homes need roof repairs. We replace damaged roof sheets, fix flashing, and treat leaks to protect your home from weather damage.',
  },
  {
    q: 'Do you install ceilings in Meadowlands?',
    a: 'Yes. We install new ceilings using quality materials and repair existing damaged ceilings. We serve both residential and commercial clients in Meadowlands.',
  },
  {
    q: 'What are your payment terms for Meadowlands projects?',
    a: 'We offer flexible payment plans. A deposit is required upfront, with progress payments tied to project milestones. Final payment is due on completion and satisfaction.',
  },
]

export default function MeadowlandsPage() {
  return (
    <>
      <Script id="meadowlands-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="meadowlands-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Locations', url: 'https://www.jiyology.co.za/locations' },
            {
              name: 'Meadowlands',
              url: 'https://www.jiyology.co.za/locations/meadowlands',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Meadowlands"
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
                Meadowlands
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Construction Services in Meadowlands, Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing delivers quality
            construction, maintenance, and plumbing services in Meadowlands.
            SABS-approved materials, BEE Level 1, and over 10 years serving
            Soweto.
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
        aria-label="About serving Meadowlands"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Local Builders in Meadowlands
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meadowlands holds a special place in Soweto history, and its
                homes reflect generations of family pride. Jiyology Building
                Construction & Plumbing has been privileged to serve Meadowlands
                homeowners, helping them maintain, renovate, and build
                properties across all zones.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Meadowlands has a mix of older council-built houses and newer
                private developments. We are equally skilled at upgrading
                existing structures replacing old plumbing, installing new
                ceilings, reinforcing roofs and building brand-new homes on
                vacant plots. Our team understands the specific challenges of
                working in Meadowlands, from soil conditions to municipal
                compliance.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a simple plumbing repair at your home in Zone 3
                or a complete house build in Zone 5, Jiyology delivers
                professional workmanship. We are Level One 135% BEE compliant,
                SABS approved, and committed to quality on every project.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Services in Meadowlands
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    service: 'Construction',
                    href: '/services/construction',
                    desc: 'New builds, extensions & commercial',
                  },
                  {
                    service: 'Plumbing',
                    href: '/services/plumbing',
                    desc: 'Maintenance, repairs & emergency callouts',
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
            We Serve the Whole of Soweto Including Meadowlands
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Meadowlands is just one of the many Soweto suburbs we serve. Our
            team is available across the township for all construction and
            plumbing needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Soweto', href: '/locations/soweto' },
              { name: 'Protea Glen', href: '/locations/protea-glen' },
              { name: 'Dobsonville', href: '/locations/dobsonville' },
              { name: 'Diepkloof', href: '/locations/diepkloof' },
              { name: 'Pimville', href: '/locations/pimville' },
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
            Frequently Asked Questions About Our Meadowlands Services
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
