import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Roofing FAQ Soweto | Jiyology' },
  description:
    'Expert answers to roofing questions in Soweto: costs, materials (tiles, sheets, thatch), repairs, leaks, maintenance, NHBRC warranty, and more.',
  openGraph: {
    title: 'Roofing FAQ Soweto | Jiyology',
    description:
      'Expert answers to roofing questions in Soweto: costs, materials (tiles, sheets, thatch), repairs, leaks, maintenance, NHBRC warranty, and more.',
    url: 'https://www.jiyology.co.za/faq/roofing',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  },
  alternates: { canonical: 'https://www.jiyology.co.za/faq/roofing' },
}

const faqItems = [
  {
    q: 'How much does a new roof cost in Soweto?',
    a: 'Roofing costs in Soweto typically range from R85 to R250 per square metre depending on materials. Concrete roof tiles cost R85–R120/m², Chromadek/IBR sheeting R95–R150/m², and waterproofing R65–R120/m². For an accurate quote, Jiyology offers free onsite inspections across Soweto, including Protea Glen, Dobsonville, and Diepkloof.',
  },
  {
    q: 'What type of roof is best for a Soweto home?',
    a: 'Concrete roof tiles are the most popular choice in Soweto for their durability, thermal insulation, and longevity (50+ years). IBR/Chromadek sheeting is lighter, faster to install, and more affordable. We also install thatch roofs for heritage homes. Our <Link href="/services/roofing">roofing services</Link> cover all material options.',
  },
  {
    q: 'How long does it take to replace a roof?',
    a: 'A full roof replacement for an average Soweto home (80–120m²) takes 5 to 10 working days. Re-roofing over existing tiles takes 3 to 5 days. Emergency leak repairs are often completed within 24 hours. Timelines depend on weather and material availability.',
  },
  {
    q: 'Does Jiyology offer NHBRC warranty on roofing?',
    a: 'Yes. Jiyology is fully registered with the National Home Builders Registration Council (NHBRC). All our roofing installations carry the standard NHBRC defect warranty, giving you peace of mind for structural work. We also provide a workmanship guarantee on all repairs.',
  },
  {
    q: 'How do I know if my roof needs repair or replacement?',
    a: 'Signs you need a roof replacement: multiple leaks, sagging roofline, tiles cracking or crumbling, daylight visible through the roof, water stains on ceilings, and roof age exceeding 25 years. If only a few tiles are damaged or a single leak exists, a targeted <Link href="/services/roof-repairs">roof repair</Link> is likely sufficient.',
  },
  {
    q: 'Can you install a roof over an existing one?',
    a: 'Yes, re-roofing over existing tiles is possible in many Soweto homes provided the roof structure is sound and weight load permits. This saves on demolition and disposal costs. We assess the existing structure during our free inspection to determine feasibility.',
  },
  {
    q: 'What roofing material is best for rain and hail?',
    a: 'Concrete roof tiles offer excellent impact resistance against hail, which is common in Gauteng. Chromadek sheeting with proper gauge thickness (0.47mm+) also performs well. We reinforce all new roofs to withstand severe weather — our team serves all Soweto suburbs including Meadowlands and Orlando where summer storms can be intense.',
  },
  {
    q: 'Do you do gutter installation with new roofs?',
    a: 'Absolutely. Every new roof installation includes gutter and downpipe assessment. We install seamless aluminium or PVC gutters matched to your roof colour and pitch. Proper gutter systems prevent foundation damage and wall dampness.',
  },
  {
    q: 'How do I maintain my roof?',
    a: 'Inspect your roof after every heavy storm season. Clear gutters and downpipes quarterly. Trim overhanging branches. Replace cracked tiles immediately to prevent water ingress. For professional maintenance, Jiyology offers annual roof inspection and cleaning services across Soweto, Diepkloof, Pimville, and Emdeni.',
  },
  {
    q: 'Does homeowners insurance cover roof replacement?',
    a: 'Most South African homeowners insurance policies cover roof replacement if caused by an insured event like storm damage, hail, or fire. Normal wear and tear is not covered. We provide detailed quotation documents that your insurer can use for claim assessment.',
  },
  {
    q: 'What is the difference between IBR and Chromadek roofing?',
    a: 'IBR (Inverted Box Rib) describes the profile shape of the sheeting — it has wide pans and narrow ribs. Chromadek is the brand name for a pre-painted steel product that can be supplied in IBR profile. In practice, &ldquo;IBR&rdquo; and &ldquo;Chromadek&rdquo; are used interchangeably in South Africa. Both offer durability, light weight, and a 20-year colour warranty.',
  },
  {
    q: 'Do you offer financing for roof replacement?',
    a: 'Yes, we offer flexible payment plans through our partner financing机构. Payment can be split over 3 to 6 months for qualifying customers. Contact us for details specific to your project scope.',
  },
]

export default function RoofingFAQPage() {
  return (
    <>
      <Script id="roofing-faq-schema" type="application/ld+json">
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
      <Script id="roofing-faq-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'FAQ', url: 'https://www.jiyology.co.za/faq' },
            {
              name: 'Roofing FAQ',
              url: 'https://www.jiyology.co.za/faq/roofing',
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
            / <span className="text-neutral-400">Roofing</span>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Roofing FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers to the most common roofing questions for Soweto
            homeowners, landlords, and property developers.
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
            Still Have Roofing Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Not every question fits a FAQ. Contact our team for a personalised
            answer about your specific roof.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/services/roofing"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Roofing Services
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
