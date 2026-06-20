import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Script from 'next/script'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Renovation FAQ Soweto | Jiyology' },
  description:
    'Expert answers to home renovation questions in Soweto: costs, permits, timelines, general building, tiling, painting, ceilings, and project planning.',
  openGraph: og({
    title: 'Renovation FAQ Soweto | Jiyology',
    description:
      'Expert answers to home renovation questions in Soweto: costs, permits, timelines, general building, tiling, painting, ceilings, and project planning.',
    url: 'https://www.jiyology.co.za/faq/renovations',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq/renovations' },
}

const faqItems = [
  {
    q: 'How much does a home renovation cost in Soweto?',
    a: 'Renovation costs vary widely by scope. Budget roughly: kitchen renovation R45,000–R120,000, bathroom renovation R35,000–R85,000, single room makeover R15,000–R40,000, full house renovation R150,000–R500,000+. Jiyology provides free itemised quotations so you know exactly where every rand goes.',
  },
  {
    q: 'Do I need a building plan for renovations in Soweto?',
    a: 'Yes, structural renovations — walls, roof changes, extensions, or altering the building footprint — require approved building plans from the City of Johannesburg. Cosmetic changes (painting, tiling, kitchen cabinet replacement) typically don&rsquo;t. Jiyology handles the permit process for all structural work.',
  },
  {
    q: 'How long does a bathroom renovation take?',
    a: 'A full bathroom renovation (retiling, new fixtures, plumbing, paint) takes 10 to 14 working days. A cosmetic refresh — new vanity, mirror, paint, accessories — takes 3 to 5 days. Our <Link href="/services/renovations">renovation services</Link> include project management to keep timelines on track.',
  },
  {
    q: 'How much does it cost to tile a house in Soweto?',
    a: 'Tiling costs range from R95 to R250 per square metre depending on tile type. Ceramic tiles: R95–R140/m², porcelain: R140–R200/m², large-format: R180–R250/m². Floor preparation and skirting are extra. For accurate pricing, our <Link href="/services/tiling-painting">tiling and painting services</Link> include a free measure-and-quote.',
  },
  {
    q: 'What is the best type of ceiling for a Soweto home?',
    a: 'Suspended ceiling boards (Nutec or gypsum) are the most popular for Soweto homes due to affordability and easy access to roof space. Rhino board is moisture-resistant and ideal for kitchens and bathrooms. PVC ceilings work well in wet areas. We install <Link href="/services/ceiling-installation">all ceiling types</Link> including cornices and downlight installation.',
  },
  {
    q: 'Do I need to move out during renovations?',
    a: 'For minor renovations (tiling, painting, single room), you can stay in the house. For major structural work, kitchen demolition, or full house renovations, we recommend vacating for 2–4 weeks. Dust, noise, and limited water/electricity access make living onsite difficult. We&rsquo;ll advise based on your specific plan.',
  },
  {
    q: 'How much does interior painting cost in Soweto?',
    a: 'Interior painting costs R35–R65 per square metre including materials. A standard 3-bedroom house (wall area ~300–400m²) costs R12,000–R26,000 for a full interior paint job. This includes surface preparation, primer, and two coats of quality water-based paint.',
  },
  {
    q: 'Can you build a new room or extension?',
    a: 'Yes. Jiyology handles room additions, garage conversions, carports, and house extensions. Our <Link href="/services/construction">construction services</Link> include foundations, bricklaying, plastering, roofing, and finishing. Building plan approval and NHBRC registration are included.',
  },
  {
    q: 'What is the paving cost per square metre in Soweto?',
    a: 'Paving costs depend on material: concrete pavers R120–R180/m², clay brick paving R180–R280/m², and interlocking block paving R150–R220/m². Installation includes excavation, compacted base layer, sand bedding, and edge restraints. See our <Link href="/services/paving">paving services</Link> for details.',
  },
  {
    q: 'How do I choose between a contractor and a handyman?',
    a: 'For projects over R30,000 or involving structural work, electrical, or plumbing — always use a registered contractor like Jiyology (NHBRC registered). Handymen are suitable for minor repairs, painting one room, or assembling furniture. Using an unregistered builder for major work risks NHBRC warranty invalidation.',
  },
  {
    q: 'What renovations add the most value to a Soweto home?',
    a: 'The top ROI renovations in Soweto: kitchen modernization (70–80% ROI), bathroom renovation (60–75% ROI), ceiling replacement (high perceived value), fresh interior/exterior paint, and driveway paving. These improvements directly impact resale value and rental income potential.',
  },
  {
    q: 'Do you do single-room renovations?',
    a: 'Absolutely. We handle projects of any size, from a single bedroom or bathroom to full house renovations. Every project gets the same quality standards, workmanship guarantee, and project management attention regardless of scope.',
  },
]

export default function RenovationsFAQPage() {
  return (
    <>
      <Script id="renovations-faq-schema" type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.q.replace(/<[^>]*>/g, ''),
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.a.replace(/<[^>]*>/g, ''),
            },
          })),
        })}
      </Script>
      <Script id="renovations-faq-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'FAQ', url: 'https://www.jiyology.co.za/faq' },
            {
              name: 'Renovations FAQ',
              url: 'https://www.jiyology.co.za/faq/renovations',
            },
          ]),
        )}
      </Script>

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav
            aria-label="Breadcrumb"
            className="text-sm text-neutral-500 mb-6"
          >
            <Link href="/" className="hover:text-[#33b6db]">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/faq" className="hover:text-[#33b6db]">
              FAQ
            </Link>{' '}
            / <span className="text-neutral-400">Renovations</span>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Renovation FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers about home renovations, building costs, permits, and
            project planning for Soweto homeowners.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="divide-y divide-border/40">
            {faqItems.map((item, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-start justify-between cursor-pointer list-none">
                  <h2 className="text-lg font-semibold text-foreground pr-8 group-open:text-[#33b6db]">
                    {item.q}
                  </h2>
                  <span className="text-[#33b6db] shrink-0 mt-1 transition-transform group-open:rotate-180">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <div
                  className="mt-4 text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.a }}
                />
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Planning a Renovation?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your home renovation project in
            Soweto.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services/renovations"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Renovation Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
