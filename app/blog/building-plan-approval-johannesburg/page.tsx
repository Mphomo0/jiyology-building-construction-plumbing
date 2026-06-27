import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Script from 'next/script'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Building Plan Approval Joburg | Jiyology' },
  description:
    'Do you need building plan approval for your Joburg renovation? Learn when permits are required, how to apply to the City of Johannesburg, and the risks of building without approval.',
  openGraph: og({
    title: 'Building Plan Approval Joburg | Jiyology',
    description:
      'When do you need building plan approval in Johannesburg? Guide to plan submission, costs, timeline, and penalties for unapproved work.',
    url: 'https://www.jiyology.co.za/blog/building-plan-approval-johannesburg',
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
      'https://www.jiyology.co.za/blog/building-plan-approval-johannesburg',
  },
  keywords: ['building plan approval Johannesburg', 'building permit Soweto', 'City of Johannesburg building plans', 'building plan submission Joburg', 'unapproved building Johannesburg', 'building regulations Gauteng'],
  twitter: twitter({
    title: 'Building Plan Approval Joburg | Jiyology',
    description: "When do you need building plan approval in Johannesburg? Guide to City of Johannesburg plan submission, costs, timeline, and penalties for unapproved work.",
  }),
}

export default function BuildingPlanApprovalPage() {
  const body = `One of the most common questions Soweto homeowners ask is: "Do I need a building plan to renovate my house?" The answer depends on what you are doing. This guide explains exactly when you need City of Johannesburg building plan approval, how the process works, and what happens if you skip it.

When You Need Building Plan Approval:
You must submit building plans for any structural work including: new buildings and extensions, altering or removing load-bearing walls, adding or modifying roofs, building carports or garages, constructing boundary walls over 1.8m, adding swimming pools or ponds, converting a garage into a living area, and erecting commercial or industrial structures.

When You Do NOT Need Plans:
Cosmetic work does not require approval: painting (interior and exterior), replacing kitchen cupboards (same layout), tiling floors and walls, replacing ceiling boards (same structure), installing new light fixtures and plugs (as long as no structural chasing), and replacing windows and doors in the same openings.

The Building Plan Submission Process:
1. Engage a qualified draftsman or architect to draw plans (R8,000–R20,000 for a standard home).
2. Submit plans to City of Johannesburg Building Development Management (BDM). You can submit at the nearest regional office serving Soweto — the Johannesburg Central office or the Roodepoort office for western Soweto areas like Dobsonville and Protea Glen.
3. Pay the plan examination fee (typically R2,000–R5,000 depending on floor area).
4. Approval takes 4–8 weeks. The municipality checks structural integrity, zoning compliance, fire safety, and setback requirements.

What Happens If You Build Without Approved Plans:
The City of Johannesburg can issue a compliance notice, impose fines of up to R250,000, demolish unauthorised structures, and prevent property transfer — no conveyancer can transfer a property with unapproved structures without a rectification application.

Can You Get Retrospective Approval?
Yes, the City of Johannesburg allows you to submit plans for existing unauthorised structures through the rectification process. You will need a structural engineer's report confirming the building is safe. Fines apply, but demolition is avoided if the structure meets building regulations.

How Jiyology Can Help:
As NHBRC-registered contractors serving all Soweto suburbs including Diepkloof, Pimville, Meadowlands, Orlando, and Emdeni, we handle the entire building plan process for our clients. We coordinate with the draftsman, submit to council, and ensure compliance throughout construction. This saves you the headache of municipal bureaucracy.

Our renovation services always include a compliance check. Before starting any project in Soweto or Johannesburg, we confirm whether building plan approval is required and handle all submissions.`

  return (
    <>
      <Script id="plans-blog-schema" type="application/ld+json">
        {JSON.stringify(
          blogLdJson({
            title:
              'Do I Need Building Plan Approval for Renovations in Johannesburg?',
            description:
              'Understand when you need approved building plans, the permit process with City of Johannesburg, and what happens if you build without approval.',
            body,
            datePublished: '2025-06-09',
            dateModified: '2025-06-09',
            author: 'Vusi Jiya',
            url: 'https://www.jiyology.co.za/blog/building-plan-approval-johannesburg',
          }),
        )}
      </Script>
      <Script id="plans-blog-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
            {
              name: 'Building Plan Approval Johannesburg',
              url: 'https://www.jiyology.co.za/blog/building-plan-approval-johannesburg',
            },
          ]),
        )}
      </Script>

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
            / <span className="text-neutral-400">Building Plan Approval</span>
          </nav>
          <div className="flex items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Renovations
            </span>
            <span>9 June 2025</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            Do I Need Building Plan Approval for Renovations in Johannesburg?
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; Your complete guide to building plan
            regulations in Soweto and Johannesburg.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('When You Need Building Plan Approval:')) {
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
            if (p.startsWith('When You Do NOT Need Plans:')) {
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
            if (p.startsWith('The Building Plan Submission Process:')) {
              const [title, ...items] = p.split('\n')
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    {title.replace(':', '')}
                  </h2>
                  <ol className="list-decimal pl-6 space-y-2">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s*/, '')}</li>
                    ))}
                  </ol>
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
            href="/services/renovations"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
          >
            Renovation Services
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
      </section>

      <CTA />
    </>
  )
}
