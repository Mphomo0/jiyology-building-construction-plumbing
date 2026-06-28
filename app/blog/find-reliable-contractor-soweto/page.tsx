import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Find a Reliable Contractor Soweto | Jiyology' },
  description:
    'Hiring a builder or plumber in Soweto? These 10 checks help you avoid scams and ensure quality workmanship before you sign anything.',
  openGraph: og({
    title: 'Find a Reliable Contractor Soweto | Jiyology',
    description:
      '10 essential checks before hiring a contractor in Soweto: NHBRC registration, references, contracts, quotes, and red flags to avoid shoddy work.',
    url: 'https://www.jiyology.co.za/blog/find-reliable-contractor-soweto',
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
      'https://www.jiyology.co.za/blog/find-reliable-contractor-soweto',
  },
  keywords: ['reliable contractor Soweto', 'how to hire contractor Johannesburg', 'NHBRC registered contractor Soweto', 'avoid contractor scams Johannesburg', 'vetted builders Soweto', 'contractor checklist Gauteng'],
  twitter: twitter({
    title: 'Find a Reliable Contractor Soweto | Jiyology',
    description: "10 essential checks before hiring a contractor in Soweto: NHBRC registration, references, contracts, quotes, and red flags to avoid shoddy work.",
  }),
}

export default function FindContractorPage() {
  const body = `Hiring a contractor in Soweto can feel like a gamble. Every month, homeowners in Diepkloof, Pimville, and Meadowlands share stories of builders who took deposits and vanished, or work that had to be redone. This guide gives you 10 practical checks to find a contractor you can trust.

1. Verify NHBRC Registration
Every contractor building new homes or doing structural work must be registered with the National Home Builders Registration Council (NHBRC). Ask for their registration number and verify it on the NHBRC website. Jiyology is fully NHBRC registered — we proudly share our credentials.

2. Check References and Past Work
A reputable contractor has a portfolio of completed projects. Ask for at least three references from the past 12 months. Call them. Better yet, visit a completed project site if possible. Look for quality of finishes, adherence to timeline, and cleanliness.

3. Get Everything in Writing
A proper contract includes: full scope of work with materials specified, payment schedule (never pay more than 50% upfront), start and completion dates with penalty clauses for delays, and warranty terms (minimum 1 year on workmanship). Never accept verbal agreements.

4. Compare Multiple Quotes
Get at least three written quotes for any project over R20,000. Beware of quotes that are significantly lower than others — corners will be cut. A fair quote includes detailed line items for materials, labour, and profit margin. See our pricing guides for roofing and plumbing to understand fair market rates in Soweto.

5. Check Insurance Cover
Your contractor should have public liability insurance and workmen's compensation. Ask for proof. If a worker is injured on your property without cover, you could be liable. This is non-negotiable.

6. Look at Their Worksite
Visit an active project. Is the site organised? Are materials stored properly? Do workers appear skilled and supervised? A chaotic worksite predicts a chaotic project.

7. Confirm Subcontractor Management
Many contractors subcontract specialised work (plumbing, electrical, tiling). Ask who will do the work and verify their qualifications. At Jiyology, our team includes qualified plumbers, tilers, and builders — we rarely subcontract, which means consistent quality.

8. Trust Your Gut About Communication
A contractor who returns calls promptly, answers questions clearly, and provides written updates is likely to run your project well. If they are evasive about timelines or costs before you sign, it will only get worse once work begins.

9. Check for Material Warranties
Roof sheets, tiles, geysers, and paint all carry manufacturer warranties. Your contractor must provide warranty certificates for materials installed. Ask about this upfront. We provide full documentation for every project in Soweto and Johannesburg.

10. Don't Rush the Decision
A "special price available only today" is a red flag. Reliable contractors are busy. If someone can start tomorrow on a large project, ask why. Good contractors in Soweto are booked 2–6 weeks in advance.

Red Flags to Watch For:
- No physical address or office
- Only accepts cash payments
- Cannot provide a VAT number
- Pressures you to sign immediately
- Has no written contract
- Cannot explain their quote line items

At Jiyology, Vusi and Lerato Jiya personally oversee every project. We serve all Soweto suburbs including Protea Glen, Dobsonville, Orlando, and Emdeni with transparency, proper contracts, and guaranteed workmanship.`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          blogLdJson({
            title:
              'How to Find a Reliable Contractor in Soweto: 10 Checks to Make',
            description:
              'Avoid contractor scams and shoddy workmanship by making these 10 essential checks before hiring any builder or plumber in Soweto.',
            body,
            datePublished: '2025-06-02',
            dateModified: '2025-06-02',
            author: 'Lerato Jiya',
            url: 'https://www.jiyology.co.za/blog/find-reliable-contractor-soweto',
          }),
        )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
            {
              name: 'Find a Reliable Contractor in Soweto',
              url: 'https://www.jiyology.co.za/blog/find-reliable-contractor-soweto',
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
            <span className="text-neutral-400">Reliable Contractor Guide</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Advice
            </span>
            <span>2 June 2025</span>
            <span>10 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How to Find a Reliable Contractor in Soweto: 10 Checks to Make
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Lerato Jiya &mdash; Essential checks to avoid bad builders and
            find trusted contractors in Soweto.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (/^\d+\. /.test(p)) {
              const [title, ...rest] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-xl font-bold mt-6 mb-3">{title}</h2>
                  {rest.length > 0 && <p>{rest.join('\n')}</p>}
                </div>
              )
            }
            if (p.startsWith('Red Flags to Watch For:')) {
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
            return <p key={i}>{p}</p>
          })}
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl flex flex-wrap gap-4 justify-center">
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
          >
            About Jiyology
          </Link>
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all text-sm"
          >
            Read Reviews
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
