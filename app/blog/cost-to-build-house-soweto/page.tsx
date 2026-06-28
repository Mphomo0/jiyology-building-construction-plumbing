import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Cost to Build in Soweto 2025 | Jiyology' },
  description:
    'Building a house in Soweto costs R8,500–R15,000/m² in 2025. Complete breakdown of construction costs including foundation, roofing, plumbing, tiling, permits and hidden fees.',
  openGraph: og({
    title: 'Cost to Build in Soweto 2025 | Jiyology',
    description:
      'Complete cost breakdown to build a house in Soweto: R8,500–R15,000/m². Includes materials, labour, plans, NHBRC fees, and hidden costs.',
    url: 'https://www.jiyology.co.za/blog/cost-to-build-house-soweto',
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
    canonical: 'https://www.jiyology.co.za/blog/cost-to-build-house-soweto',
  },
  keywords: ['cost to build house Soweto', 'building costs per square metre Johannesburg', 'house building price Soweto 2025', 'construction cost Gauteng', 'NHBRC registration cost', 'building budget Soweto'],
  twitter: twitter({
    title: 'Cost to Build in Soweto 2025 | Jiyology',
    description: "Complete cost breakdown to build a house in Soweto, Johannesburg: R8,500–R15,000/m². Includes materials, labour, plans, NHBRC fees, and hidden costs.",
  }),
}

export default function CostToBuildPage() {
  const body = `Building a house in Soweto in 2025 costs between R8,500 and R15,000 per square metre, depending on finishes, size, and complexity. For a standard 80m² home, expect R680,000 to R1,200,000 total. This article breaks down every cost component so you can budget accurately.

Foundation and Structure: R1,800–R2,500/m². Includes concrete slab or strip footing, brickwork, and plastering. Slab foundations are standard in Soweto due to the soil conditions in areas like Protea Glen and Dobsonville.

Roofing: R850–R1,500/m². Concrete roof tiles cost R85–R120/m² installed, while IBR/Chromadek sheeting costs R95–R150/m². See our roofing services for detailed pricing.

Ceilings: R80–R150/m². Suspended Nutec or gypsum boards with cornices. PVC ceilings in wet areas cost slightly more. We handle ceiling installation across Soweto.

Plumbing and Electrical: R500–R800/m² for rough-in installations, plus fixtures. A full plumbing fit-out for a 3-bedroom house costs R25,000–R50,000.

Plastering and Painting: R120–R200/m² for plaster, R35–R65/m² for interior paint. Exterior painting adds R45–R80/m² depending on wall texture and paint quality.

Flooring and Tiling: R150–R300/m² depending on tile choice. Ceramic tiles R95–R140/m², porcelain R140–R200/m². Labour is additional R60–R120/m².

Windows and Doors: R25,000–R60,000 for a standard 3-bedroom house. Aluminium windows are most popular in Soweto for durability and security.

Building Plans and Approval: R8,000–R20,000 depending on house size and architect involvement. City of Johannesburg building plan approval takes 4–8 weeks. As NHBRC-registered contractors, we handle the approval process for our clients.

NHBRC Registration and Enrolment: R3,500–R7,000, mandatory for all new homes. This gives you a 5-year structural defect warranty.

Hidden Costs to Budget For:
- Geotechnical survey (soil testing): R3,000–R6,000
- Municipal connection fees (water, sewer, electricity): R5,000–R15,000
- Occupation certificate application: R2,000–R5,000
- Project contingency (10-15%): R68,000–R180,000

Cost Comparison by Soweto Suburb:
Building costs are relatively consistent across Soweto, but access fees and material delivery charges vary. Diepkloof and Orlando have easier access for delivery trucks, while deeper Soweto areas like Meadowlands and Emdeni may incur small delivery surcharges.

Save Money Without Sacrificing Quality:
- Build a simpler roofline (gable instead of hip) saves R20,000–R50,000
- Use standard-size windows instead of custom
- Choose ceramic tiles over porcelain for bathrooms
- Paint interior walls yourself if you have time
- Build in winter when contractors offer off-peak discounts

We offer free building consultations across Soweto, including Pimville, Protea Glen, Dobsonville, and all surrounding areas. Contact our team for a detailed quote based on your specific house plan.`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          blogLdJson({
            title: 'How Much Does It Cost to Build a House in Soweto in 2025?',
            description:
              'Complete breakdown of building costs per square metre in Soweto, including materials, labour, plans, and permits.',
            body,
            datePublished: '2025-06-16',
            dateModified: '2025-06-16',
            author: 'Vusi Jiya',
            url: 'https://www.jiyology.co.za/blog/cost-to-build-house-soweto',
          }),
        )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
            {
              name: 'Cost to Build in Soweto',
              url: 'https://www.jiyology.co.za/blog/cost-to-build-house-soweto',
            },
          ]),
        )}} />

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
            /{' '}
            <span className="text-neutral-400">
              Cost to Build a House in Soweto
            </span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Construction
            </span>
            <span>16 June 2025</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How Much Does It Cost to Build a House in Soweto in 2025?
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; Complete cost breakdown per square metre for
            building in Soweto and Johannesburg.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('Cost Comparison by Soweto Suburb:')) {
              const [title, ...rest] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    {title.replace(':', '')}
                  </h2>
                  <p>{rest.join('\n')}</p>
                </div>
              )
            }
            if (p.startsWith('Hidden Costs to Budget For:')) {
              const [title, ...items] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    {title.replace(':', '')}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            if (p.startsWith('Save Money Without Sacrificing Quality:')) {
              const [title, ...items] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    {title.replace(':', '')}
                  </h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                </div>
              )
            }
            if (p.startsWith('Roofing:')) {
              const [label, ...rest] = p.split('. See our roofing services for detailed pricing.')
              return (
                <p key={i}>
                  {label}. See our{' '}
                  <Link href="/services/roofing" className="text-[#33b6db] hover:underline">
                    roofing services
                  </Link>{' '}
                  for detailed pricing.{rest.join('')}
                </p>
              )
            }
            if (p.startsWith('Ceilings:')) {
              const parts = p.split('We handle ceiling installation across Soweto.')
              return (
                <p key={i}>
                  {parts[0]}We handle{' '}
                  <Link href="/services/ceiling-installation" className="text-[#33b6db] hover:underline">
                    ceiling installation
                  </Link>{' '}
                  across Soweto.{parts[1] ?? ''}
                </p>
              )
            }
            if (p.startsWith('Plumbing and Electrical:')) {
              const [before, after] = p.split('A full plumbing fit-out')
              return (
                <p key={i}>
                  {before}A full{' '}
                  <Link href="/services/plumbing" className="text-[#33b6db] hover:underline">
                    plumbing
                  </Link>{' '}
                  fit-out{after}
                </p>
              )
            }
            if (p.startsWith('Flooring and Tiling:')) {
              const [before, after] = p.split('Labour is additional')
              return (
                <p key={i}>
                  {before.replace('Flooring and Tiling:', '')}
                  <Link href="/services/tiling-painting" className="text-[#33b6db] hover:underline">
                    Flooring and Tiling:
                  </Link>
                  {before.slice('Flooring and Tiling:'.length)}Labour is additional{after}
                </p>
              )
            }
            if (p.startsWith('Building Plans and Approval:')) {
              const parts = p.split('we handle the approval process for our clients.')
              return (
                <p key={i}>
                  {parts[0]}we handle the approval process for{' '}
                  <Link href="/contact" className="text-[#33b6db] hover:underline">
                    our clients
                  </Link>
                  .{parts[1] ?? ''}
                </p>
              )
            }
            if (
              p.startsWith('Foundation and Structure:') ||
              p.startsWith('Plastering and Painting:') ||
              p.startsWith('Windows and Doors:') ||
              p.startsWith('NHBRC Registration and Enrolment:')
            ) {
              return <p key={i}>{p}</p>
            }
            return <p key={i}>{p}</p>
          })}
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/construction"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
            >
              Construction Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all text-sm"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-muted-foreground font-semibold hover:bg-muted transition-all text-sm"
            >
              More Articles
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
