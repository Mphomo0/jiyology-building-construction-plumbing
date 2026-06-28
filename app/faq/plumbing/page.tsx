import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Plumbing FAQ Soweto & Joburg | Jiyology' },
  description:
    'Expert plumbing answers for Soweto and Johannesburg: burst pipes, blocked drains, geyser repairs, water pressure, costs, and emergency services.',
  openGraph: og({
    title: 'Plumbing FAQ Soweto & Joburg | Jiyology',
    description:
      'Expert plumbing answers for Soweto and Johannesburg: burst pipes, blocked drains, geyser repairs, water pressure, costs, and emergency services.',
    url: 'https://www.jiyology.co.za/faq/plumbing',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/faq/plumbing' },
}

const faqItems = [
  {
    q: 'How much does a plumber cost in Soweto per hour?',
    a: 'Jiyology charges a standard call-out fee of R350–R650 depending on location, plus hourly labour of R250–R450. Emergency after-hours call-outs are a flat rate of R850 including the first hour. We provide free quotations for larger jobs like geyser installations or repiping.',
  },
  {
    q: 'Do you offer 24/7 emergency plumbing in Soweto?',
    a: 'Yes. Jiyology operates a 24-hour emergency plumbing service across all Soweto suburbs including Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, and Emdeni. Our team typically arrives within 60–90 minutes for burst pipes, overflowing drains, and geyser leaks. Call us on 060 643 6664.',
  },
  {
    q: 'How do I fix a blocked drain at home?',
    a: 'For minor blockages, try boiling water followed by a plunger. Avoid chemical drain cleaners — they damage PVC pipes. If the blockage persists, the issue is likely deeper in the main sewer line. Jiyology uses high-pressure water jetting and drain cameras to clear and diagnose stubborn blockages — no guesswork, no damage.',
  },
  {
    q: 'How long does a geyser last in South Africa?',
    a: 'A standard electric geyser in South Africa lasts 8 to 12 years with proper maintenance. Signs your geyser needs replacing: rusty water, strange noises (rumbling indicates scale buildup), water leaking from the overflow pipe, or the geyser taking longer to heat. We install all major brands — Kwikot, Solar Heat, and Dux.',
  },
  {
    q: 'How much does a new geyser installation cost?',
    a: 'Geyser installation costs in Soweto range from R4,500 to R9,500 including the unit and labour. A 150L Kwikot geyser installed is approximately R5,500–R6,500. A 200L unit ranges R6,500–R8,500. Solar geyser systems start from R12,000. All Jiyology installations include a 5-year workmanship guarantee.',
  },
  {
    q: 'What causes low water pressure in my house?',
    a: 'Common causes: partially closed main valve, clogged pipes (mineral buildup), faulty pressure regulator, leaking pipes, or municipal supply issues. In Soweto, municipal pressure fluctuations are common. We install pressure pumps and check valve systems to stabilise water pressure throughout your home.',
  },
  {
    q: 'Can you repipe an entire house?',
    a: 'Yes. We do full house repiping using SABS-approved copper or PEX piping. Repiping a standard 3-bedroom Soweto home (80–100m²) costs between R15,000 and R35,000 depending on access and material choice. Repiping eliminates recurring leaks, low pressure, and rusty water issues.',
  },
  {
    q: 'How do I prevent burst pipes in winter?',
    a: 'Insulate exposed pipes in the ceiling and under the house. Let taps drip slightly on freezing nights to relieve pressure. Ensure your geyser thermostat is set to 55–60°C — higher temperatures increase pressure buildup. If you&rsquo;re away for extended periods, partially close the main water valve.',
  },
  {
    q: 'What causes a geyser to burst?',
    a: 'Geyser bursts are most often caused by a faulty thermostat or pressure control valve (PCV) that fails to release excess pressure. Lack of maintenance — especially not replacing the sacrificial anode every 3–5 years — leads to internal rust and sudden failure. Annual geyser servicing prevents this.',
  },
  {
    q: 'Do you install gas geysers in Soweto?',
    a: 'Yes, we install gas geysers and solar geyser systems throughout Soweto and Johannesburg. Gas geysers offer instant hot water and lower electricity bills. All installations comply with SANS 10087-1 safety standards and are done by qualified gas-certified plumbers.',
  },
  {
    q: 'How do I know if my toilet is leaking internally?',
    a: 'A silent toilet leak can waste up to 30,000 litres of water per year. Add a few drops of food colouring to the cistern — if colour appears in the bowl within 15 minutes without flushing, you have a leak. The fix is usually a worn flapper valve or faulty inlet valve, which we replace affordably.',
  },
  {
    q: 'Does Jiyology do commercial plumbing too?',
    a: 'Yes. We handle commercial plumbing for businesses, schools, churches, and rental properties in Soweto and Johannesburg. Services include industrial drain cleaning, grease trap installation, commercial geyser banks, and new building plumbing installations.',
  },
]

export default function PlumbingFAQPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'FAQ', url: 'https://www.jiyology.co.za/faq' },
            {
              name: 'Plumbing FAQ',
              url: 'https://www.jiyology.co.za/faq/plumbing',
            },
          ]),
        )}} />

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
            / <span className="text-neutral-400">Plumbing</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Plumbing FAQ
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert answers about plumbing emergencies, geyser installation,
            drain cleaning, and water pressure for Soweto homeowners.
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
            Have a Plumbing Emergency?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Burst pipe? Blocked drain? Leaking geyser? We&rsquo;re available
            24/7 across Soweto.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/services/plumbing"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all"
            >
              Plumbing Services
            </Link>
            <a
              href="tel:0606436664"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all"
            >
              Call 060 643 6664
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-border text-muted-foreground font-semibold hover:bg-muted transition-all"
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
