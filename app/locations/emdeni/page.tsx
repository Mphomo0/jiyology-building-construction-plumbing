import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import { Check, Phone, Shield, Award, MapPin } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Builder & Plumber in Emdeni Soweto | Jiyology' },
  description:
    'Trusted construction and plumbing services in Emdeni, Soweto. Based on Tsemeli Street, Ext 2. Roofing, renovations, plumbing & more. SABS approved, BEE Level 1.',
  openGraph: og({
    title: 'Builder & Plumber in Emdeni Soweto | Jiyology',
    description:
      'Your local builder and plumber in Emdeni South, Soweto. Professional construction, plumbing, and renovation services. Free quotes.',
    url: 'https://www.jiyology.co.za/locations/emdeni',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/locations/emdeni' },
  keywords: ['builders Emdeni Soweto', 'plumbers Emdeni', 'construction Emdeni Soweto', 'roofing Emdeni'],
  twitter: twitter({
    title: 'Builders & Plumbers Emdeni Soweto | Jiyology',
    description: 'Construction and plumbing services in Emdeni, Soweto. Jiyology headquarters. Roofing, renovations, paving, tiling and ceiling installation.',
  }),
}

const faqs = [
  {
    q: 'Where is Jiyology based in Emdeni?',
    a: 'Our office is at 65 Tsemeli St, Ext 2, Emdeni South, Soweto, 1868. We are a local construction and plumbing company serving Emdeni and all surrounding Soweto suburbs.',
  },
  {
    q: 'What services do you offer in Emdeni?',
    a: 'We offer roofing, plumbing, renovations, paving, tiling and painting, ceiling installation, and general construction services to homes and businesses in Emdeni.',
  },
  {
    q: 'How do I get a free quote in Emdeni?',
    a: 'Call us at (011) 931 0157, email vusi@jiyology.co.za, or visit our office at 65 Tsemeli St, Ext 2, Emdeni South. We provide free no-obligation quotes.',
  },
  {
    q: 'Do you offer emergency plumbing in Emdeni?',
    a: 'Yes. As your local Emdeni plumber, we provide emergency plumbing services for burst pipes, blocked drains, geyser failures, and other urgent issues.',
  },
]

export default function EmdeniPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Emdeni"
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
                Emdeni
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Builder & Plumber in Emdeni, Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Based at 65 Tsemeli Street, Ext 2, Emdeni South — Jiyology is your
            local construction and plumbing company serving Emdeni and all
            surrounding Soweto suburbs. SABS-approved materials, BEE Level 1.
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
              <MapPin className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">Emdeni South</p>
              <p className="text-sm text-muted-foreground">Based locally</p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">SABS Approved</p>
              <p className="text-sm text-muted-foreground">Quality materials</p>
            </div>
            <div>
              <Award className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">BEE Level 1</p>
              <p className="text-sm text-muted-foreground">50% woman owned</p>
            </div>
            <div>
              <Check className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">200+ Projects</p>
              <p className="text-sm text-muted-foreground">Completed</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-background"
        aria-label="About serving Emdeni"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Local Construction & Plumbing Experts in Emdeni
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jiyology Building Construction & Plumbing is proud to be based
                in Emdeni South, Soweto. From our office at 65 Tsemeli St, Ext
                2, we have been providing quality construction and plumbing
                services to the Emdeni community and surrounding Soweto suburbs
                for over 10 years.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Being a local Emdeni business means we understand the needs of
                our community. Whether you need a roof repair, new plumbing
                installation, home renovation, or a complete new build, our team
                delivers professional service with SABS-approved materials.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Level One 135% BEE compliant company, 50% black woman
                owned, we are committed to quality and transformation. We treat
                our Emdeni neighbours as family, providing the same care and
                attention we would want in our own homes.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Services in Emdeni
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    service: 'Roofing',
                    href: '/services/roofing',
                    desc: 'Roof tiles, sheets, repairs & installation',
                  },
                  {
                    service: 'Plumbing',
                    href: '/services/plumbing',
                    desc: 'Maintenance, repairs & emergency callouts',
                  },
                  {
                    service: 'Renovations',
                    href: '/services/renovations',
                    desc: 'Kitchen, bathroom & full home makeovers',
                  },
                  {
                    service: 'Construction',
                    href: '/services/construction',
                    desc: 'New builds, extensions & commercial',
                  },
                  {
                    service: 'Paving',
                    href: '/services/paving',
                    desc: 'Driveways, patios & walkways',
                  },
                  {
                    service: 'Tiling & Painting',
                    href: '/services/tiling-painting',
                    desc: 'Interior & exterior finishing',
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
            Serving All Soweto Suburbs
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Based in Emdeni, we provide services across Soweto and beyond.
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

      <section
        className="py-20 bg-background"
        aria-label="Contact Emdeni office"
      >
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Visit Our Emdeni Office
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We are located at 65 Tsemeli St, Ext 2, Emdeni South, Soweto, 1868.
            Call or visit us for a free consultation.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-muted/30 rounded-xl p-6 border border-border/60">
              <Phone className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Call Us</p>
              <a
                href="tel:+27119310157"
                className="text-[#33b6db] hover:underline"
              >
                (011) 931 0157
              </a>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 border border-border/60">
              <MapPin className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Address</p>
              <p className="text-sm text-muted-foreground">
                65 Tsemeli St, Emdeni South
              </p>
            </div>
            <div className="bg-muted/30 rounded-xl p-6 border border-border/60">
              <Check className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground">
                Mon-Fri 8AM-5PM, Sat 8AM-1PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-background rounded-xl border border-border/60 p-4 group"
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
