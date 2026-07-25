import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Ceiling Installation FAQ Soweto | Jiyology' },
  description:
    'Answers on ceiling installation costs, materials and timelines in Soweto. Nutec, gypsum, PVC, drop ceilings. BEE Level 1. Call (011) 931 0157.',
  openGraph: og({
    title: 'Ceiling Installation FAQ Soweto | Jiyology',
    description:
      'Answers on ceiling installation costs, materials and timelines in Soweto. Nutec, gypsum, PVC, drop ceilings. BEE Level 1. Call (011) 931 0157.',
    url: 'https://www.jiyology.co.za/faq/ceiling-installation',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq/ceiling-installation' },
}

const faqItems = [
  {
    q: 'How much does ceiling installation cost in Soweto?',
    a: 'Ceiling installation in Soweto costs R80–R150 per square metre for a suspended Nutec or gypsum board ceiling, including the hanger system and cornices. A standard 15m² bedroom ceiling costs R1,200–R2,250. Drop ceilings and bulkheads cost more due to additional framing. We provide free quotes across Soweto.',
  },
  {
    q: 'What ceiling types do you install?',
    a: 'We install: suspended Nutec (fibre-cement) ceilings — the most common in Soweto; gypsum board ceilings for smooth, paintable finishes; PVC ceilings for bathrooms and wet areas; drop ceilings (suspended grid systems with tiles); and bulkheads for concealing pipework or creating feature lighting. We advise on the best option for your budget and use.',
  },
  {
    q: 'How long does ceiling installation take?',
    a: 'A standard single room ceiling takes 1–2 working days including hanger installation, board fixing, jointing, and cornice fitting. A full home ceiling replacement typically takes 3–5 days. We work cleanly and protect your floors and furniture during installation.',
  },
  {
    q: 'What is a Nutec ceiling and is it good quality?',
    a: 'Nutec is a fibre-cement board (compressed cement and cellulose fibre) manufactured in South Africa. It is moisture-resistant, termite-proof, non-combustible, and very durable — which is why it has been the standard ceiling board in South African homes for decades. It paints well and holds screws without crumbling.',
  },
  {
    q: 'Can you repair a sagging or damaged ceiling?',
    a: 'Yes. We repair sagging ceilings, cracked boards, water-damaged sections, and collapsed ceiling areas across Soweto and Johannesburg. Importantly, we identify and fix the cause first — usually a roof leak or broken hanger — before repairing the ceiling board. Fixing only the cosmetic damage without addressing the cause leads to repeat failure.',
  },
  {
    q: 'What causes ceilings to sag in Soweto?',
    a: 'The most common causes are water damage from roof leaks (softening the board and rusting the hangers), broken or corroded ceiling hanger wire, old age of original boards (pre-1990 asbestos boards in older Soweto homes), and incorrect hanger spacing during the original installation.',
  },
  {
    q: 'Do you install ceilings in bathrooms?',
    a: 'Yes. For bathrooms and other wet areas we use PVC ceiling panels or moisture-resistant gypsum board (MR-board). Standard Nutec is not ideal in steam-heavy areas as it can absorb moisture over time. PVC panels are easy to clean, fully waterproof, and available in white and wood-grain finishes.',
  },
  {
    q: 'Can you add insulation when installing a ceiling?',
    a: 'Yes, and we strongly recommend it. Ceiling insulation (glasswool or polyester batts laid above the boards) dramatically reduces heat gain in summer and heat loss in winter — a major benefit in Soweto where summer temperatures can exceed 35°C. It also reduces noise transfer between floors. We include insulation fitting as part of any ceiling installation on request.',
  },
  {
    q: 'What is a drop ceiling and how much does it cost?',
    a: 'A drop ceiling (also called a suspended ceiling) uses a metal grid system hanging from the roof structure, with ceiling tiles sitting in the grid. It is popular for concealing pipework, cables, and ductwork while allowing easy access. Drop ceilings in Soweto cost R120–R200/m² depending on grid type and tile material.',
  },
  {
    q: 'Do you install cornices with the ceiling?',
    a: 'Yes. All our ceiling installations include cornice fitting as standard. We use plaster cornices (for a traditional look), PVC cornices (for wet areas), or polystyrene cornices (lightweight and affordable). Cornices finish the junction between wall and ceiling cleanly and are painted to match the ceiling.',
  },
]

export default function CeilingFAQPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#33b6db]">Home</Link>{' '}
            /{' '}
            <Link href="/faq" className="hover:text-[#33b6db]">FAQ</Link>{' '}
            / <span className="text-neutral-400">Ceiling Installation</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Ceiling Installation FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers to common ceiling installation questions for Soweto homeowners and property developers.
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
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Ceiling Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for a personalised answer and free quote for your ceiling project in Soweto.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/ceiling-installation"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Ceiling Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
