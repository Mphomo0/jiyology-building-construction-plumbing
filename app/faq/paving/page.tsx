import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Paving FAQ Soweto | Jiyology' },
  description:
    'Answers on paving costs, materials and timelines in Soweto. Driveways, patios, interlocking brick, concrete. BEE Level 1. Free quote: (011) 931 0157.',
  openGraph: og({
    title: 'Paving FAQ Soweto | Jiyology',
    description:
      'Answers on paving costs, materials and timelines in Soweto. Driveways, patios, interlocking brick, concrete. BEE Level 1. Free quote: (011) 931 0157.',
    url: 'https://www.jiyology.co.za/faq/paving',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq/paving' },
}

const faqItems = [
  {
    q: 'How much does driveway paving cost in Soweto?',
    a: 'Driveway paving in Soweto costs R350–R650 per square metre for interlocking brick or concrete paving. A standard double driveway (40–50m²) costs R14,000–R32,500. Price varies by paving type, sub-base depth required, and site accessibility. Call Jiyology on (011) 931 0157 for a free site quote.',
  },
  {
    q: 'What types of paving do you install in Soweto?',
    a: 'We install interlocking brick paving (the most popular in Soweto), exposed aggregate concrete, cobblestone, plain concrete paving, and commercial-grade paving for parking areas and loading bays. We advise on the best type for your budget, traffic load, and aesthetic preference.',
  },
  {
    q: 'How long does driveway paving take?',
    a: 'A standard residential driveway (30–60m²) takes 2–4 working days including sub-base preparation, edging installation, laying, and joint sand compaction. Larger driveways or complex patterns take proportionally longer. We provide detailed timelines with every quote.',
  },
  {
    q: 'How long does paving last in Soweto?',
    a: 'Quality paving installed on a properly compacted sub-base lasts 15–25 years in Soweto&apos;s climate. Interlocking brick is particularly durable because individual bricks can be replaced if damaged. Longevity depends on sub-base preparation, drainage design, and maintenance.',
  },
  {
    q: 'Do you repair sunken or cracked paving?',
    a: 'Yes. We lift and relay sunken paving sections, re-bed displaced bricks, re-point joints, and repair cracked concrete paving across Soweto and Johannesburg. Fixing sunken paving early prevents water pooling near your foundation and progressive deterioration.',
  },
  {
    q: 'What causes paving to sink in Soweto?',
    a: 'The most common causes are poor sub-base compaction during installation, inadequate drainage causing the base to wash out, expansive clay soils (common in parts of Soweto and Johannesburg), tree root intrusion, and heavy vehicle loads exceeding the design specification.',
  },
  {
    q: 'Do you seal paving after installation?',
    a: 'We recommend sealing interlocking brick paving 4–6 weeks after installation. Sealing protects against oil stains, enhances colour, reduces weed growth in joints, and makes cleaning easier. We offer sealing as part of our paving service or as a standalone treatment.',
  },
  {
    q: 'Can you pave a sloped driveway in Soweto?',
    a: 'Yes. Sloped driveways require soldier course edging at the bottom, cross-fall grading to direct water to the sides, and channel drains at the base to capture runoff. We design drainage into every paving quote — improper drainage is the leading cause of paving failure in Soweto.',
  },
  {
    q: 'Do you do commercial paving in Soweto?',
    a: 'Yes. We lay commercial-grade paving for parking areas, loading bays, access roads, and large paved surfaces across Soweto and Johannesburg. Commercial paving uses thicker bricks (80mm instead of 60mm) and a deeper compacted sub-base to handle heavy vehicle loads.',
  },
  {
    q: 'How do I clean and maintain my paving?',
    a: 'Pressure wash annually to remove dirt and moss. Re-sand joints with kiln-dried sand every 2–3 years as it washes out over time. Apply a paving sealer every 3–5 years. Remove oil stains promptly using a degreaser — old oil stains are much harder to remove. Avoid using salt or harsh acid cleaners.',
  },
]

export default function PavingFAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLdJson([
              { name: 'Home', url: 'https://www.jiyology.co.za' },
              { name: 'FAQ', url: 'https://www.jiyology.co.za/faq' },
              { name: 'Paving FAQ', url: 'https://www.jiyology.co.za/faq/paving' },
            ]),
          ),
        }}
      />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#33b6db]">Home</Link>{' '}
            /{' '}
            <Link href="/faq" className="hover:text-[#33b6db]">FAQ</Link>{' '}
            / <span className="text-neutral-400">Paving</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Paving FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers to common paving questions for Soweto homeowners, landlords, and property developers.
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Paving Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for a personalised answer and free site inspection for your paving project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/paving"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Paving Services
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
