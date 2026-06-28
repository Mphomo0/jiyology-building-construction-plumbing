import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Tiling & Painting FAQ Soweto | Jiyology' },
  description:
    'Expert answers on tiling and painting in Soweto: cost per m², tile types, paint systems, prep work, and timelines. Get a free quote from Jiyology.',
  openGraph: og({
    title: 'Tiling & Painting FAQ Soweto | Jiyology',
    description:
      'Expert answers on tiling and painting in Soweto: cost per m², tile types, paint systems, prep work, and timelines. Get a free quote from Jiyology.',
    url: 'https://www.jiyology.co.za/faq/tiling-painting',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq/tiling-painting' },
}

const faqItems = [
  {
    q: 'How much does floor tiling cost in Soweto?',
    a: 'Floor tiling in Soweto costs R95–R140/m² for ceramic tiles and R140–R200/m² for porcelain. Labour is an additional R60–R120/m² depending on tile size, pattern complexity, and substrate preparation required. We provide free quotes including material supply if needed.',
  },
  {
    q: 'How much does interior painting cost in Soweto?',
    a: 'Interior wall painting in Soweto costs R35–R65/m² for standard rooms. Ceilings are priced separately at R25–R45/m². Price depends on surface condition, number of coats required, paint quality chosen, and whether preparation work (filling, sanding, priming) is included.',
  },
  {
    q: 'How long does tiling a bathroom take?',
    a: 'A standard bathroom tiling job in Soweto takes 1–3 working days. This includes wall tiles and floor tiles for an average 4–6m² bathroom. Larger bathrooms, complex patterns (herringbone, diagonal), or extensive preparation work will take longer.',
  },
  {
    q: 'What tile adhesive do you use?',
    a: 'We use SABS-approved flexible tile adhesive for wet areas like bathrooms, showers, and kitchen splashbacks, where movement and moisture are factors. Standard cement-based adhesive is used for dry areas. Using the correct adhesive prevents tiles from cracking or lifting over time.',
  },
  {
    q: 'Can you tile over existing tiles?',
    a: 'Sometimes yes — it depends on the substrate condition, how well the existing tiles are bonded, and the available floor or wall height. Tiling over existing tiles saves on demolition and disposal costs, but adds height. We assess the existing surface before recommending this approach.',
  },
  {
    q: 'What paint brands do you recommend for South African weather?',
    a: 'For exterior painting in Gauteng, we recommend Plascon Micatex, Dulux Weathershield, or Prominent Paints exterior systems — all formulated for SA&apos;s UV intensity and summer rains. For interiors, any quality PVA from these brands performs well. We supply paint or work with client-supplied materials.',
  },
  {
    q: 'How long does exterior paint last in Gauteng?',
    a: 'Quality exterior paint applied to a properly prepared surface lasts 5–8 years in Gauteng. Factors that reduce lifespan include poor surface prep, low-quality paint, harsh sun exposure, and moisture infiltration. We recommend repainting every 5–6 years to protect your walls.',
  },
  {
    q: 'Do you supply tiles or do we need to buy them?',
    a: 'Both options work. We can source and supply tiles for your project, or install tiles you have already purchased. If you supply tiles, ensure you buy 10% extra for cuts and breakages. We advise on quantities, grout colour, and layout before ordering.',
  },
  {
    q: 'How do you prepare walls for painting?',
    a: 'Proper preparation is what separates a lasting paint job from one that peels within a year. We fill cracks and holes, sand rough surfaces, apply a bonding primer to bare plaster, and use an alkali-resistant undercoat on new plaster. Skipping preparation is the single biggest cause of paint failure in South Africa.',
  },
  {
    q: 'Do you do epoxy floor coatings in Soweto?',
    a: 'Yes. We apply epoxy floor coatings for garages, workshops, commercial kitchens, and industrial floors across Soweto and Johannesburg. Epoxy is seamless, chemical-resistant, and easy to clean. Surface preparation (grinding or acid-etching the concrete) is critical for adhesion. Contact us for a quote.',
  },
]

export default function TilingPaintingFAQPage() {
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
              { name: 'Tiling & Painting FAQ', url: 'https://www.jiyology.co.za/faq/tiling-painting' },
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
            / <span className="text-neutral-400">Tiling &amp; Painting</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Tiling &amp; Painting FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers to the most common tiling and painting questions for Soweto homeowners and property developers.
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions About Tiling or Painting?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our team for a personalised answer about your specific project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services/tiling-painting"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Tiling &amp; Painting Services
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
