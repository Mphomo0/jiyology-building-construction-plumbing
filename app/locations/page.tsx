import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Service Areas | Jiyology Construction' },
  description:
    'Jiyology serves Soweto, Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, and Johannesburg. Construction, plumbing & renovations.',
  openGraph: {
    title: 'Service Areas | Jiyology Construction',
    description:
      'Jiyology serves Soweto, Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, and Johannesburg. Construction, plumbing & renovations.',
    url: 'https://www.jiyology.co.za/locations',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  },
  alternates: { canonical: 'https://www.jiyology.co.za/locations' },
}

const areas = [
  {
    name: 'Soweto',
    href: '/locations/soweto',
    desc: 'Complete construction and plumbing services across all Soweto suburbs.',
  },
  {
    name: 'Protea Glen',
    href: '/locations/protea-glen',
    desc: 'Quality building and plumbing services in Protea Glen, Soweto.',
  },
  {
    name: 'Dobsonville',
    href: '/locations/dobsonville',
    desc: 'Reliable construction and plumbing in Dobsonville.',
  },
  {
    name: 'Diepkloof',
    href: '/locations/diepkloof',
    desc: 'Professional building contractors serving Diepkloof.',
  },
  {
    name: 'Pimville',
    href: '/locations/pimville',
    desc: 'Home renovations and plumbing services in Pimville.',
  },
  {
    name: 'Meadowlands',
    href: '/locations/meadowlands',
    desc: 'Construction and plumbing in Meadowlands, Soweto.',
  },
  {
    name: 'Emdeni',
    href: '/locations/emdeni',
    desc: 'Construction and plumbing in Emdeni South, Soweto.',
  },
  {
    name: 'Orlando',
    href: '/locations/orlando',
    desc: 'Trusted builders and plumbers in Orlando, Soweto.',
  },
  {
    name: 'Johannesburg',
    href: '/locations/johannesburg',
    desc: 'Residential and commercial construction across Johannesburg.',
  },
]

export default function LocationsPage() {
  return (
    <>
      <Script id="locations-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            {
              name: 'Service Areas',
              url: 'https://www.jiyology.co.za/locations',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Service Areas"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Our Service Areas
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Providing quality construction, plumbing, and renovation services
            across Soweto, Johannesburg, and all of Gauteng.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="bg-muted/30 rounded-2xl p-8 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-lg transition-all group"
              >
                <h2 className="text-2xl font-bold text-foreground group-hover:text-[#33b6db] transition-colors mb-3">
                  {area.name}
                </h2>
                <p className="text-muted-foreground">{area.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
