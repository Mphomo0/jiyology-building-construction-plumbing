import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Construction & Plumbing FAQ | Jiyology' },
  description:
    'Find answers to common questions about construction, plumbing, roofing, and renovations in Soweto and Johannesburg. Get expert advice from Jiyology.',
  openGraph: og({
    title: 'Construction & Plumbing FAQ | Jiyology',
    description:
      'Find answers to common questions about construction, plumbing, roofing, and renovations in Soweto and Johannesburg. Get expert advice from Jiyology.',
    url: 'https://www.jiyology.co.za/faq',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq' },
  keywords: ['construction FAQ Soweto', 'plumbing questions Johannesburg', 'Jiyology FAQ', 'building contractor questions Soweto'],
  twitter: twitter({
    title: 'FAQs | Jiyology Construction & Plumbing',
    description: 'Answers to common questions about Jiyology construction and plumbing services in Soweto and Johannesburg. Quotes, pricing, BEE compliance, and more.',
  }),
}

const faqCategories = [
  {
    title: 'Roofing FAQs',
    desc: 'Common questions about roof installation, repairs, materials, and costs in Soweto.',
    href: '/faq/roofing',
  },
  {
    title: 'Plumbing FAQs',
    desc: 'Everything you need to know about plumbing services, emergency repairs, and geyser installations.',
    href: '/faq/plumbing',
  },
  {
    title: 'Tiling & Painting FAQs',
    desc: 'Costs, materials, timelines, and tips for tiling and painting projects in Soweto.',
    href: '/faq/tiling-painting',
  },
  {
    title: 'Paving FAQs',
    desc: 'Driveway paving costs, materials, installation timelines, and maintenance in Soweto.',
    href: '/faq/paving',
  },
  {
    title: 'Ceiling Installation FAQs',
    desc: 'Nutec, gypsum, PVC, and drop ceiling costs, materials, and repair questions for Soweto homes.',
    href: '/faq/ceiling-installation',
  },
  {
    title: 'Renovation FAQs',
    desc: 'Answers about home renovations, costs, timelines, and planning in South Africa.',
    href: '/faq/renovations',
  },
]

export default function FAQHubPage() {
  return (
    <>
      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="FAQ"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers to common questions about construction, plumbing,
            roofing, and renovations in Soweto and Johannesburg.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {faqCategories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="bg-muted/30 rounded-2xl p-8 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-lg transition-all group"
              >
                <h2 className="text-2xl font-bold text-foreground group-hover:text-[#33b6db] transition-colors mb-3">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
