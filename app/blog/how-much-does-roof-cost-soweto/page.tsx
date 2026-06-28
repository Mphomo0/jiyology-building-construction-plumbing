import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'How Much Does a New Roof Cost in Soweto? | Jiyology' },
  description:
    'New roof costs in Soweto: R85–R250/m² depending on materials. Full breakdown of tiles, IBR sheeting, labour, gutters, and what affects price. Free quotes.',
  openGraph: og({
    title: 'How Much Does a New Roof Cost in Soweto? | Jiyology',
    description:
      'New roof costs in Soweto: R85–R250/m² depending on materials. Full breakdown of concrete tiles, IBR sheeting, labour, gutters, and hidden costs.',
    url: 'https://www.jiyology.co.za/blog/how-much-does-roof-cost-soweto',
    type: 'article',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology roofing team installing concrete roof tiles in Soweto',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/blog/how-much-does-roof-cost-soweto' },
  keywords: ['roof cost Soweto', 'new roof price Johannesburg', 'roofing cost per square metre South Africa', 'concrete roof tiles cost Soweto', 'IBR sheeting price Gauteng', 'roof replacement cost'],
  twitter: twitter({
    title: 'How Much Does a New Roof Cost in Soweto? | Jiyology',
    description: 'New roof costs in Soweto: R85–R250/m². Full breakdown of tiles, IBR sheeting, labour, gutters, and what affects price.',
  }),
}

const body = `Replacing or installing a new roof is one of the biggest home improvement investments you will make — and one of the most important. In Soweto and Johannesburg, roofing costs range from R85 to R250 per square metre depending on material choice, roof complexity, and whether scaffolding is required. This guide breaks down every cost component so you can budget accurately before calling a contractor.

Concrete Roof Tiles: R150–R215/m² Installed

Concrete roof tiles remain the most popular choice in Soweto for good reason. They last 40–60 years, provide excellent thermal insulation, and hold up well against Gauteng's summer hailstorms. Material cost runs R85–R120/m², with labour adding R65–R95/m². Total installed cost: R150–R215/m².

Pros: Durability, insulation, noise reduction, fire resistance, long lifespan.
Cons: Heavy — requires a robust roof structure. Not suitable for very low-pitch roofs (below 17.5°).

IBR and Chromadek Sheeting: R95–R150/m² Installed

IBR (Inverted Box Rib) and Chromadek are the same product — Chromadek is the brand name for the pre-painted steel sheeting. This option is lighter, faster to install, and typically 30–40% cheaper than concrete tiles. Installed cost: R95–R150/m².

Pros: Lightweight, fast installation, suitable for low-pitch roofs, lower cost.
Cons: Noisier in rain, less insulation, shorter lifespan (20–30 years vs 50+ for tiles), can dent under heavy hail.

When to Replace vs Repair

Roof replacement makes sense when: your roof is over 25 years old with multiple leaks; tiles are cracking, crumbling, or missing in large sections; there is visible daylight through the roof structure; the roof deck or timber battens are rotting; or water stains cover large ceiling areas. If you have a single leak or a few damaged tiles, a targeted roof repair is almost always the better choice. Jiyology inspects your roof for free and recommends the most cost-effective solution honestly.

Hidden Costs to Budget For

Several costs catch homeowners off guard:

Scaffolding: R2,000–R5,000 for a standard home. Required when roof pitch or height makes ladder access unsafe.
Ceiling repair: If water damage has stained or rotted your ceiling boards, budget R80–R150/m² for ceiling replacement.
Gutter replacement: Old or undersized gutters need replacing when reroofing. New gutters cost R150–R250 per metre installed.
Waste removal: Demolishing an old roof generates significant waste. Skip hire costs R1,500–R3,000 depending on volume.
VAT: All prices above are ex-VAT. Add 15% for registered contractors.

What Affects Your Roof Price

Roof pitch: Steeper roofs are harder to work on and take longer — costs rise with pitch.
Roof shape: A simple gable roof is cheapest. Hip roofs, valleys, and dormers add complexity and cost.
Access difficulty: Double-storey homes and narrow site access increase scaffolding and handling costs.
Material availability: Global supply chain disruptions can affect Chromadek pricing — check current quotes.
VAT and contractor registration: Always ask whether your quote is VAT-inclusive.

How to Get an Accurate Quote

Get at least 3 written quotes before committing. Each quote should specify the material brand and specification, the scope of work (tear-off vs overlay), warranty terms, and payment schedule. Verify that your contractor is NHBRC-registered — this is mandatory for new residential roofing and gives you a 5-year structural defect warranty. Jiyology is NHBRC-registered and provides detailed written scopes on all quotes.

Call Jiyology on (011) 931 0157 for a free, no-obligation roof inspection and written quote anywhere in Soweto or Johannesburg.`

export default function RoofCostBlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            blogLdJson({
              title: 'How Much Does a New Roof Cost in Soweto?',
              description: 'Full cost breakdown for new roof installation in Soweto: concrete tiles, IBR sheeting, labour, scaffolding, gutters, and hidden costs.',
              body,
              datePublished: '2025-07-15',
              dateModified: '2025-07-15',
              author: 'Vusi Jiya',
              url: 'https://www.jiyology.co.za/blog/how-much-does-roof-cost-soweto',
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: 'Home', url: 'https://www.jiyology.co.za' },
              { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
              { name: 'How Much Does a New Roof Cost in Soweto?', url: 'https://www.jiyology.co.za/blog/how-much-does-roof-cost-soweto' },
            ]),
          ),
        }}
      />

      <article className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <nav className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#33b6db]">Home</Link>{' '}
            /{' '}
            <Link href="/blog" className="hover:text-[#33b6db]">Blog</Link>{' '}
            /{' '}
            <span className="text-neutral-400">Roof Cost in Soweto</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Roofing
            </span>
            <span>15 July 2025</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How Much Does a New Roof Cost in Soweto?
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; Complete cost breakdown for concrete tiles, IBR sheeting, labour, and hidden costs in Soweto and Johannesburg.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('Concrete Roof Tiles:') || p.startsWith('IBR and Chromadek Sheeting:') || p.startsWith('When to Replace vs Repair') || p.startsWith('How to Get an Accurate Quote')) {
              const colonIdx = p.indexOf('\n')
              const heading = colonIdx > -1 ? p.slice(0, colonIdx) : p
              const rest = colonIdx > -1 ? p.slice(colonIdx + 1) : ''
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{heading}</h2>
                  {rest && <p>{rest}</p>}
                </div>
              )
            }
            if (p.startsWith('Hidden Costs to Budget For') || p.startsWith('What Affects Your Roof Price')) {
              const [title, ...items] = p.split('\n')
              const listItems = items.filter((l) => l.trim())
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{title}</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {listItems.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                </div>
              )
            }
            if (p.includes('(011) 931 0157')) {
              const parts = p.split('(011) 931 0157')
              return (
                <p key={i}>
                  {parts[0]}
                  <a href="tel:+27119310157" className="text-[#33b6db] hover:underline">(011) 931 0157</a>
                  {parts[1]}
                </p>
              )
            }
            return <p key={i}>{p}</p>
          })}
          <p className="mt-8">
            See our full{' '}
            <Link href="/services/roofing" className="text-[#33b6db] hover:underline">roofing services</Link>{' '}
            page for more detail, or read our guide comparing{' '}
            <Link href="/blog/concrete-roof-tiles-vs-ibr-sheeting" className="text-[#33b6db] hover:underline">concrete tiles vs IBR sheeting</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/roofing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
            >
              Roofing Services
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Roofing Resources</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free quote for your roofing project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/roofing" className="inline-flex items-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all">
              Roofing Services
            </Link>
            <Link href="/services/roof-repairs" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Roof Repairs
            </Link>
            <Link href="/faq/roofing" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Roofing FAQ
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
