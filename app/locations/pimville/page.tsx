import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import { Check, Phone, MapPin, Shield, Star, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Plumber & Builder in Pimville Soweto | Jiyology' },
  description:
    'Trusted plumber and builder in Pimville, Soweto. Plumbing, construction, roofing, renovations & emergency services. SABS approved, BEE Level 1. Free quotes.',
  openGraph: og({
    title: 'Plumber & Builder in Pimville Soweto | Jiyology',
    description:
      'Professional plumbing, construction, and renovation services in Pimville, Soweto. SABS approved materials, BEE Level 1. Free quotes for all projects.',
    url: 'https://www.jiyology.co.za/locations/pimville',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/locations/pimville' },
  keywords: ['builders Pimville', 'plumbers Pimville', 'construction Pimville Soweto', 'roofing Pimville', 'renovations Pimville'],
  twitter: twitter({
    title: 'Builders & Plumbers Pimville | Jiyology',
    description: 'Construction and plumbing services in Pimville, Soweto. Roofing, renovations, paving, tiling and ceiling installation. Free quotes.',
  }),
}

const faqs = [
  {
    q: 'Do you offer emergency plumbing in Pimville?',
    a: 'Yes. We provide 24/7 emergency plumbing in Pimville for burst pipes, blocked drains, overflowing toilets, and geyser failures. Call (011) 931 0157.',
  },
  {
    q: 'Can you build a granny flat in my Pimville backyard?',
    a: 'Absolutely. We design and build granny flats, backyard rooms, and rental units in Pimville. We handle all plans, approvals, and construction.',
  },
  {
    q: 'Do you replace old bathtubs with showers in Pimville?',
    a: 'Yes. Bathroom remodelling is one of our specialties. We can convert your old bathtub into a modern walk-in shower with tiling and plumbing included.',
  },
  {
    q: 'How long does a typical renovation take in Pimville?',
    a: 'Small bathroom renovations take about one week. Full kitchen remodels take two to three weeks. We provide a timeline with every quote.',
  },
]

export default function PimvillePage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Pimville"
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
                Pimville
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Plumbing & Construction Services in Pimville, Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing is Pimville trusted choice
            for plumbing repairs, home construction, and renovations.
            SABS-approved materials, BEE Level 1, and over 10 years of
            experience.
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
        aria-label="About serving Pimville"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Local Plumber & Builder in Pimville
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Pimville is one of Soweto oldest and most beloved suburbs, known
                for its strong community spirit and well-kept homes. Jiyology
                Building Construction & Plumbing has been serving Pimville
                residents for over 10 years, providing everything from small
                plumbing fixes to major home renovations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our plumbers are experienced with Pimville older plumbing
                systems, often replacing outdated galvanised pipes and cast-iron
                drainage with modern PVC and copper. We also handle new builds
                and extensions for families looking to add space and value to
                their Pimville properties.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you have a dripping tap, a blocked drain, or you want to
                build a new home from scratch, our team is ready to help. We are
                NHBRC registered, SABS approved, and Level One 135% BEE
                compliant. Quality and reliability come standard with every job
                in Pimville.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Services in Pimville
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
                    service: 'Renovations',
                    href: '/services/renovations',
                    desc: 'Kitchen, bathroom & full home makeovers',
                  },
                  {
                    service: 'Roofing',
                    href: '/services/roofing',
                    desc: 'Roof tiles, sheets, repairs & installation',
                  },
                  {
                    service: 'Tiling & Painting',
                    href: '/services/tiling-painting',
                    desc: 'Interior & exterior finishing',
                  },
                  {
                    service: 'Ceiling Installation',
                    href: '/services/ceiling-installation',
                    desc: 'New ceilings & ceiling repairs',
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
            We Serve the Whole of Soweto Including Pimville
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Pimville is just one of the many Soweto suburbs we serve. Our team
            covers the entire township for all plumbing, construction, and
            renovation projects.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Soweto', href: '/locations/soweto' },
              { name: 'Protea Glen', href: '/locations/protea-glen' },
              { name: 'Dobsonville', href: '/locations/dobsonville' },
              { name: 'Diepkloof', href: '/locations/diepkloof' },
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
            Frequently Asked Questions About Our Pimville Services
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
