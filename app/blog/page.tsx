import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Building & Plumbing Blog | Jiyology' },
  description:
    'Expert articles about construction, plumbing, roofing, and home renovations in Soweto and Johannesburg. Practical advice from experienced contractors.',
  keywords: [
    'construction blog Soweto',
    'plumbing tips Johannesburg',
    'roofing advice South Africa',
    'home renovation guide Soweto',
    'building costs Johannesburg',
    'contractor tips Gauteng',
  ],
  openGraph: og({
    title: 'Building & Plumbing Blog | Jiyology',
    description:
      'Expert articles about construction, plumbing, roofing, and home renovations in Soweto and Johannesburg. Practical advice from experienced contractors.',
    url: 'https://www.jiyology.co.za/blog',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  twitter: twitter({
    title: 'Building & Plumbing Blog | Jiyology',
    description:
      'Expert articles about construction, plumbing, roofing, and home renovations in Soweto and Johannesburg. Practical advice from experienced contractors.',
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/blog' },
}

const articles = [
  {
    title: 'How Much Does It Cost to Build a House in Soweto in 2025?',
    desc: 'Complete breakdown of building costs per square metre in Soweto, including materials, labour, plans, and permits.',
    href: '/blog/cost-to-build-house-soweto',
    date: '16 June 2025',
    readTime: '8 min read',
    category: 'Construction',
  },
  {
    title: 'Do I Need Building Plan Approval for Renovations in Johannesburg?',
    desc: 'Understand when you need approved building plans, the permit process with City of Johannesburg, and what happens if you build without approval.',
    href: '/blog/building-plan-approval-johannesburg',
    date: '9 June 2025',
    readTime: '7 min read',
    category: 'Renovations',
  },
  {
    title: 'How to Find a Reliable Contractor in Soweto: 10 Checks to Make',
    desc: 'Avoid contractor scams and shoddy workmanship. Learn the essential checks before hiring any builder or plumber in Soweto.',
    href: '/blog/find-reliable-contractor-soweto',
    date: '2 June 2025',
    readTime: '10 min read',
    category: 'Advice',
  },
  {
    title:
      'Concrete Roof Tiles vs IBR Sheeting: Which Is Best for Your Soweto Home?',
    desc: 'Compare costs, durability, insulation, and lifespan of concrete roof tiles versus IBR/Chromadek sheeting for Soweto homes.',
    href: '/blog/concrete-roof-tiles-vs-ibr-sheeting',
    date: '26 May 2025',
    readTime: '9 min read',
    category: 'Roofing',
  },
  {
    title: 'How Often Should You Service Your Geyser in South Africa?',
    desc: 'Essential geyser maintenance guide for South African homeowners. Prevent bursts, save electricity, and extend geyser lifespan.',
    href: '/blog/geyser-service-frequency-south-africa',
    date: '19 May 2025',
    readTime: '6 min read',
    category: 'Plumbing',
  },
  {
    title: 'How Much Does a New Roof Cost in Soweto?',
    desc: 'Full breakdown of roofing costs in Soweto: concrete tiles, IBR sheeting, labour, scaffolding, gutters, and hidden costs. Know what to budget before calling a contractor.',
    href: '/blog/how-much-does-roof-cost-soweto',
    date: '15 July 2025',
    readTime: '7 min read',
    category: 'Roofing',
  },
  {
    title: '8 Signs Your Geyser Needs Replacing in South Africa',
    desc: 'Rusty water, rumbling sounds, water pooling, no hot water — learn the 8 warning signs your geyser is about to fail and what to do before it bursts.',
    href: '/blog/signs-geyser-needs-replacing',
    date: '1 August 2025',
    readTime: '7 min read',
    category: 'Plumbing',
  },
]

export default function BlogHubPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Blog"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Construction &amp; Plumbing Blog
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Practical advice, cost guides, and expert tips for homeowners in
            Soweto and Johannesburg.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group bg-muted/20 rounded-2xl p-6 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-md transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
                    {a.category}
                  </span>
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-[#33b6db] transition-colors mb-2">
                  {a.title}
                </h2>
                <p className="text-muted-foreground">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
