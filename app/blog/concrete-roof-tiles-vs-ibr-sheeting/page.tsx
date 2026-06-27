import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Script from 'next/script'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Concrete Tiles vs IBR Sheeting | Jiyology' },
  description:
    'Concrete tiles or IBR sheeting for your Soweto home? Compare cost, durability, insulation and lifespan to choose the right roof for your budget and climate.',
  openGraph: og({
    title: 'Concrete Tiles vs IBR Sheeting | Jiyology',
    description:
      'Compare concrete roof tiles vs IBR/Chromadek sheeting: cost, durability, insulation, noise, lifespan. Which is best for your Soweto home?',
    url: 'https://www.jiyology.co.za/blog/concrete-roof-tiles-vs-ibr-sheeting',
    type: 'article',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: {
    canonical:
      'https://www.jiyology.co.za/blog/concrete-roof-tiles-vs-ibr-sheeting',
  },
  keywords: ['concrete roof tiles vs IBR Soweto', 'roof tiles vs roof sheets Johannesburg', 'Chromadek vs concrete tiles', 'best roofing material Soweto', 'IBR sheeting Johannesburg', 'roofing comparison South Africa'],
  twitter: twitter({
    title: 'Concrete Tiles vs IBR Sheeting | Jiyology',
    description: "Compare concrete roof tiles vs IBR/Chromadek sheeting: cost, durability, insulation, noise, lifespan. Which is best for your Soweto home?",
  }),
}

export default function RoofTilesVsIbrPage() {
  const body = `Choosing between concrete roof tiles and IBR sheeting is one of the biggest decisions for Soweto homeowners building or replacing a roof. This comparison covers all the factors that matter: cost, durability, insulation, noise, appearance, and lifespan.

Cost Comparison (per square metre installed):
Concrete roof tiles: R120–R180/m². Tiles themselves cost R85–R120/m² and installation labour R35–R60/m². The roof structure must be stronger to support the weight (tiles weigh approximately 45–55 kg/m²).
IBR/Chromadek sheeting: R95–R150/m². Sheeting costs R70–R100/m² and installation R25–R50/m². The lighter weight means a lighter roof truss structure, saving on timber costs.

Winner for cost: IBR sheeting (15–20% cheaper overall, plus lighter roof structure savings)

Durability and Lifespan:
Concrete roof tiles last 50+ years with minimal maintenance. They withstand Gauteng hail well, resist fire, and do not rust. Individual damaged tiles can be replaced.
IBR sheeting lasts 20–30 years. Chromadek carries a 20-year colour warranty. Sheets can dent from large hail, and scratches must be touched up to prevent rust.

Winner for durability: Concrete roof tiles (2–3x longer lifespan)

Thermal Insulation:
Concrete roof tiles have better thermal mass — they absorb heat during the day and release it slowly at night. Homes stay cooler in summer and warmer in winter. This is significant for Soweto's climate with hot summers and cold Highveld winters.
IBR sheeting reflects heat but conducts it more readily. Ceiling insulation is essential with IBR roofs. A well-insulated IBR roof can perform adequately, but the natural insulation of tiles is superior.

Winner for insulation: Concrete roof tiles

Noise:
In summer storms, concrete roof tiles dampen the sound of rain and hail significantly. IBR sheeting is noticeably louder — rain sounds like drumming on a metal roof. If bedrooms are directly under the roof, tiles provide better sleep quality during Soweto thunderstorms.

Winner for noise: Concrete roof tiles

Appearance:
Concrete roof tiles offer more variety — terracotta, charcoal, brown, and blend colours. They give a traditional, solid look that suits Soweto homes well.
IBR sheeting has a modern, industrial appearance. Available in a wide colour range. Popular for contemporary designs and extensions where matching existing sheeting is needed.

Winner: Personal preference (tiles for traditional, IBR for modern)

Maintenance:
Concrete tiles: occasional replacement of broken tiles, gutter cleaning, moss removal in shaded areas.
IBR sheeting: check for loose screws (rubber washers degrade), repaint scratched areas to prevent rust, clean gutters more frequently in autumn.

Winner for low maintenance: Concrete roof tiles

Which Should You Choose?
Choose concrete roof tiles for: permanent homes you plan to live in long-term, bedrooms directly under the roof, areas prone to large hail, and traditional or Mediterranean architectural styles.
Choose IBR sheeting for: extensions needing to match existing IBR, budget-conscious projects, rental properties, garages and carports, and modern architectural designs.
Many Soweto homeowners choose tiles for the main house and IBR for garages, carports, and outbuildings — getting the best of both.

Jiyology installs both concrete roof tiles and IBR sheeting across all Soweto suburbs including Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, and Emdeni. We offer free roof consultations and can show you both materials at active project sites.`

  return (
    <>
      <Script id="roof-comparison-blog-schema" type="application/ld+json">
        {JSON.stringify(
          blogLdJson({
            title:
              'Concrete Roof Tiles vs IBR Sheeting: Which Is Best for Your Soweto Home?',
            description:
              'Compare costs, durability, insulation, noise, and lifespan of concrete roof tiles versus IBR/Chromadek sheeting for Soweto homes.',
            body,
            datePublished: '2025-05-26',
            dateModified: '2025-05-26',
            author: 'Vusi Jiya',
            url: 'https://www.jiyology.co.za/blog/concrete-roof-tiles-vs-ibr-sheeting',
          }),
        )}
      </Script>
      <Script id="roof-comparison-blog-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
            {
              name: 'Roof Tiles vs IBR Sheeting',
              url: 'https://www.jiyology.co.za/blog/concrete-roof-tiles-vs-ibr-sheeting',
            },
          ]),
        )}
      </Script>

      <article className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <nav className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#33b6db]">
              Home
            </Link>{' '}
            /{' '}
            <Link href="/blog" className="hover:text-[#33b6db]">
              Blog
            </Link>{' '}
            / <span className="text-neutral-400">Roof Tiles vs IBR</span>
          </nav>
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Roofing
            </span>
            <span>26 May 2025</span>
            <span>9 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Concrete Roof Tiles vs IBR Sheeting: Which Is Best for Your Soweto
            Home?
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; A complete comparison to help Soweto homeowners
            choose the right roofing material.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('Cost Comparison')) {
              const [title, ...rest] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{title}</h2>
                  {rest.map((r, j) => (
                    <p key={j}>{r}</p>
                  ))}
                </div>
              )
            }
            if (p.startsWith('Winner for'))
              return (
                <p key={i} className="font-semibold text-[#33b6db]">
                  {p}
                </p>
              )
            if (
              p.startsWith('Choose concrete roof tiles for:') ||
              p.startsWith('Choose IBR sheeting for:')
            ) {
              const [title, ...items] = p.split('\n')
              return (
                <div key={i}>
                  <p className="font-semibold">{title}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            return <p key={i}>{p}</p>
          })}
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl flex flex-wrap gap-4 justify-center">
          <Link
            href="/services/roofing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
          >
            Roofing Services
          </Link>
          <Link
            href="/services/roof-repairs"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all text-sm"
          >
            Roof Repairs
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-muted-foreground font-semibold hover:bg-muted transition-all text-sm"
          >
            More Articles
          </Link>
        </div>
      </section>

      <CTA />
    </>
  )
}
