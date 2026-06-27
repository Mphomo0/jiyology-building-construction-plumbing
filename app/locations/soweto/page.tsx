import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Script from 'next/script'
import Link from 'next/link'
import { Check, Phone, MapPin, Star, Shield, Award } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { faqLdJson, breadcrumbLdJson, locationServiceLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Builders & Construction Soweto | Jiyology' },
  description:
    'Trusted builders and construction company in Soweto. Plumbing, roofing, renovations & building services. SABS approved, BEE Level 1. Free quotes.',
  openGraph: og({
    title: 'Builders & Construction Soweto | Jiyology',
    description:
      'Professional construction, plumbing, and renovation services in Soweto. SABS approved materials, BEE Level 1. Free quotes for all projects.',
    url: 'https://www.jiyology.co.za/locations/soweto',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/locations/soweto' },
}

const faqs = [
  {
    q: 'Are you a registered construction company in Soweto?',
    a: 'Yes. Jiyology Building Construction & Plumbing is a fully registered company based in Emdeni, Soweto. We are BEE Level 1 compliant and use SABS-approved materials.',
  },
  {
    q: 'What construction services do you offer in Soweto?',
    a: 'We offer roofing, plumbing, renovations, paving, tiling and painting, ceiling installation, and general building construction across all Soweto suburbs.',
  },
  {
    q: 'How do I get a free quote in Soweto?',
    a: 'Call us at (011) 931 0157, email vusi@jiyology.co.za, or use the contact form on our website. We typically respond within one business day.',
  },
  {
    q: 'Do you serve all areas of Soweto?',
    a: 'Yes. We serve all Soweto areas including Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, Emdeni, and more.',
  },
  {
    q: 'Are you BEE compliant for government projects?',
    a: 'Yes. We are Level One 135% BEE compliant and 50% black woman owned. We meet all government procurement requirements.',
  },
  {
    q: 'Do you offer emergency plumbing in Soweto?',
    a: 'Yes. We provide emergency plumbing services across all Soweto areas. Call us for burst pipes, blocked drains, or geyser emergencies.',
  },
]

export default function SowetoPage() {
  return (
    <>
            <Script id="soweto-service-schema" type="application/ld+json">
        {JSON.stringify(locationServiceLdJson('Soweto', 'https://www.jiyology.co.za/locations/soweto'))}
      </Script>
      <Script id="soweto-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="soweto-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Locations', url: 'https://www.jiyology.co.za/locations' },
            {
              name: 'Soweto',
              url: 'https://www.jiyology.co.za/locations/soweto',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Soweto"
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
                Soweto
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Trusted Builders & Construction Company in Soweto
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Jiyology Building Construction & Plumbing is Soweto trusted choice
            for quality construction, plumbing, roofing, and renovation
            services. SABS-approved materials, BEE Level 1, and over 10 years of
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
              <MapPin className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">Based in Emdeni</p>
              <p className="text-sm text-muted-foreground">Soweto, 1861</p>
            </div>
            <div>
              <Star className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
              <p className="font-bold text-foreground">200+ Projects</p>
              <p className="text-sm text-muted-foreground">Across Soweto</p>
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
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-background"
        aria-label="About serving Soweto"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Your Local Construction & Plumbing Experts in Soweto
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jiyology Building Construction & Plumbing is proud to call
                Soweto home. Based in Emdeni South, we have been serving the
                Soweto community for over 10 years, providing quality
                construction, plumbing, and renovation services to homeowners
                and businesses across the township.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by Vusi Jiya and Lerato Jiya, our company was built on
                the vision of delivering professional, reliable, and affordable
                building services to the people of Soweto. We understand the
                unique needs of Soweto homeowners and take pride in contributing
                to the growth and development of our community.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a Level One 135% BEE compliant company, 50% black woman
                owned, we are committed to transformation and excellence. We use
                only SABS-approved materials and employ skilled, trained
                professionals who take pride in their work.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Our Services in Soweto
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
            We provide construction, plumbing, and renovation services across
            all Soweto suburbs. Wherever you are, our team is ready to help.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Protea Glen', href: '/locations/protea-glen' },
              { name: 'Dobsonville', href: '/locations/dobsonville' },
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

      <section className="py-20 bg-background" aria-label="Why choose us">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Why Soweto Chooses Jiyology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Local Expertise
              </h3>
              <p className="text-muted-foreground">
                We are based in Soweto and understand the local building
                regulations, weather conditions, and architectural styles. Our
                team knows Soweto inside out.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Quality Guaranteed
              </h3>
              <p className="text-muted-foreground">
                All materials are SABS approved. Our workmanship is guaranteed.
                We stand behind every project we complete in Soweto and
                surrounding areas.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-8 border border-border/60">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Community Trust
              </h3>
              <p className="text-muted-foreground">
                With over 200 projects completed and 10+ years of service, we
                are one of Soweto most trusted construction and plumbing
                companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Contact Soweto office">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Contact Our Soweto Office
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Visit us at 65 Tsemeli St, Ext 2, Emdeni South, Soweto, 1861. Call
            or email us for a free consultation and quote.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-background rounded-xl p-6 border border-border/60">
              <Phone className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Call Us</p>
              <a
                href="tel:+27119310157"
                className="text-[#33b6db] hover:underline"
              >
                (011) 931 0157
              </a>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/60">
              <MapPin className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Visit Us</p>
              <p className="text-sm text-muted-foreground">
                65 Tsemeli St, Emdeni South, Soweto
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 border border-border/60">
              <Star className="w-6 h-6 text-[#33b6db] mx-auto mb-3" />
              <p className="font-semibold text-foreground">Hours</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 8AM-5PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Our Soweto Services
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
