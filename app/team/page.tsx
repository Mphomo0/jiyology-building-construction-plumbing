import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Script from 'next/script'
import Image from 'next/image'
import CTA from '@/components/sections/home/CTA'
import { personLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Our Team | Jiyology Construction & Plumbing' },
  description:
    'Meet Vusi Jiya and Lerato Jiya, the founders of Jiyology Building Construction & Plumbing. Over 10 years of experience in Soweto and Johannesburg.',
  openGraph: og({
    title: 'Meet Our Team | Jiyology Construction & Plumbing',
    description:
      'Founded by Vusi and Lerato Jiya — experienced construction and plumbing professionals serving Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/team',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/team' },
  keywords: ['Jiyology team', 'Vusi Jiya Soweto builder', 'construction team Soweto', 'plumbing team Johannesburg'],
  twitter: twitter({
    title: 'Our Team | Jiyology Construction & Plumbing',
    description: 'Meet the Jiyology team — experienced builders and plumbers serving Soweto and Johannesburg. Led by founders Vusi and Lerato Jiya.',
  }),
}

const teamMembers = [
  {
    name: 'Vusi Jiya',
    role: 'Founder & Managing Director',
    description:
      'Vusi Jiya is the driving force behind Jiyology Building Construction & Plumbing. With over a decade of hands-on experience in the construction and plumbing industry, Vusi has built a company known for quality workmanship, SABS-approved materials, and exceptional client service across Soweto and Johannesburg.',
    bio: 'Vusi brings extensive expertise in construction project management, plumbing installations, roofing, renovations, and building maintenance. His commitment to using only SABS-approved materials and maintaining BEE Level 1 compliance has positioned Jiyology as a trusted contractor for both residential and commercial clients. Vusi personally oversees every project to ensure it meets the highest standards of quality and safety.',
    image: null,
  },
  {
    name: 'Lerato Jiya',
    role: 'Co-Founder & Operations Director',
    description:
      'Lerato Jiya co-founded Jiyology with a vision to create a construction and plumbing company that puts clients first. As a 50% black woman-owned enterprise, Jiyology reflects Lerato commitment to transformation and excellence in the South African building industry.',
    bio: 'Lerato manages daily operations, client relations, and ensures that every project runs smoothly from start to finish. Her dedication to customer satisfaction and attention to detail has earned Jiyology a reputation for reliability and trust. Lerato believes in treating every client as family and ensuring their vision is brought to life with quality craftsmanship.',
    image: null,
  },
]

export default function TeamPage() {
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za' },
    { name: 'Our Team', url: 'https://www.jiyology.co.za/team' },
  ])

  return (
    <>
      <Script id="team-breadcrumb" type="application/ld+json">
        {JSON.stringify(breadcrumb)}
      </Script>
      {teamMembers.map((member) => (
        <Script
          key={member.name}
          id={`person-${member.name}`}
          type="application/ld+json"
        >
          {JSON.stringify(
            personLdJson(member.name, member.role, member.description),
          )}
        </Script>
      ))}

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Our Team"
      >
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white font-medium" aria-current="page">
                Our Team
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            The experienced professionals behind Jiyology Building Construction
            & Plumbing, dedicated to delivering quality craftsmanship across
            Soweto and Johannesburg.
          </p>
        </div>
      </section>

      <section className="py-24 bg-background" aria-label="Team members">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="bg-muted/30 rounded-2xl p-8 border border-border/60"
              >
                <div className="w-24 h-24 rounded-full bg-[#33b6db]/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                  <span className="text-3xl font-bold text-[#33b6db]">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h2>
                <p className="text-[#33b6db] font-semibold text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {member.description}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/60">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Our Commitment
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl border border-border/60">
                <h3 className="font-bold text-lg mb-2">10+ Years Experience</h3>
                <p className="text-muted-foreground text-sm">
                  Over a decade of construction and plumbing expertise serving
                  Soweto and Johannesburg.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/60">
                <h3 className="font-bold text-lg mb-2">BEE Level 1</h3>
                <p className="text-muted-foreground text-sm">
                  135% BEE compliant, 50% black woman owned. Committed to
                  transformation.
                </p>
              </div>
              <div className="p-6 bg-background rounded-xl border border-border/60">
                <h3 className="font-bold text-lg mb-2">SABS Approved</h3>
                <p className="text-muted-foreground text-sm">
                  All materials meet South African Bureau of Standards quality
                  requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact Vusi or Lerato today for a free consultation and quote for
              your construction or plumbing project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-neutral-950 hover:bg-[#33b6db] text-white font-semibold rounded-lg transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:+27119310157"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-colors"
              >
                Call (011) 931 0157
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
