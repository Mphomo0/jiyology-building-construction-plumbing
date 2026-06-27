import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  Shield,
  Clock,
  Award,
  Phone,
  Sun,
  CloudRain,
  Replace,
  Building2,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Roof Repairs Soweto & Joburg | Jiyology' },
  description:
    'Expert roof repair services in Soweto and Johannesburg. Leaking roofs, storm damage, tile replacement, flat roof repairs. SABS approved, BEE L1. Free quote.',
  openGraph: og({
    title: 'Roof Repairs Soweto & Joburg | Jiyology',
    description:
      'Professional roof repair including leak detection, storm damage restoration, tile replacement, and flat roof waterproofing. Serving Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/services/roof-repairs',
    images: [
      {
        url: '/images/roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology roof repair services in Soweto and Johannesburg',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/services/roof-repairs' },
  keywords: ['roof repairs Soweto', 'leaking roof Johannesburg', 'roof repair contractor Soweto', 'storm damage roof repair', 'flat roof repair Johannesburg', 'roof tile replacement Soweto'],
  twitter: twitter({
    title: 'Roof Repairs Soweto & Joburg | Jiyology',
    description: 'Expert roof repair services in Soweto and Johannesburg. Leaking roofs, storm damage, tile replacement, flat roof repairs. SABS approved, BEE L1. Free quote.',
    image: '/images/roofing.jpg',
  }),
}

const faqs = [
  {
    q: 'How do I know if my roof is leaking in Soweto?',
    a: 'Common signs include water stains on ceilings, damp walls, mould growth, dripping water during rain, and missing or damaged roof tiles. If you suspect a leak, call us for a professional roof inspection.',
  },
  {
    q: 'Do you repair flat roofs in Johannesburg?',
    a: 'Yes. We specialise in flat roof repair and waterproofing using membrane systems and liquid-applied coatings. Flat roofs require specific expertise, and our team is trained in the latest repair techniques.',
  },
  {
    q: 'How much does roof storm damage repair cost?',
    a: 'Costs vary depending on the extent of damage. We provide free inspections and quotes for storm damage repairs. We also assist with insurance claims documentation for storm-related roof damage.',
  },
  {
    q: 'Can you replace individual roof tiles?',
    a: 'Yes. We replace cracked, broken, or missing roof tiles with matching tiles to maintain the aesthetic and weatherproof integrity of your roof. We carry a range of tile profiles and colours.',
  },
]

export default function RoofRepairsPage() {
  const service = {
    name: 'Roof Repair Services',
    description:
      'Comprehensive roof repair services including leaking roof repair, storm damage restoration, tile replacement, and flat roof waterproofing in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const roofRepairServices = [
    {
      icon: CloudRain,
      title: 'Leaking Roof Repair',
      desc: 'Expert leak detection and repair for all roof types. We identify the source of leaks and provide lasting repairs to protect your home from water damage.',
      items: [
        'Leak detection',
        'Ceiling water damage repair',
        'Flashing repair',
        'Valley & gutter repair',
      ],
    },
    {
      icon: Sun,
      title: 'Storm Damage Repair',
      desc: 'Rapid storm damage restoration for roofs affected by hail, wind, and heavy rain. We assess damage, secure your property, and complete repairs quickly.',
      items: [
        'Hail damage repair',
        'Wind damage repair',
        'Emergency tarping',
        'Insurance claim support',
      ],
    },
    {
      icon: Replace,
      title: 'Tile Replacement',
      desc: 'Professional replacement of cracked, broken, or missing roof tiles. We match existing tiles for seamless repairs that maintain your roof appearance and integrity.',
      items: [
        'Cracked tile replacement',
        'Broken tile repair',
        'Ridge tile fixing',
        'Tile colour matching',
      ],
    },
    {
      icon: Building2,
      title: 'Flat Roof Repair',
      desc: 'Specialised flat roof repair and waterproofing using high-quality membrane and coating systems. Ideal for extensions, garages, and commercial buildings.',
      items: [
        'Flat roof waterproofing',
        'Membrane repair',
        'Liquid coating application',
        'Flat roof inspections',
      ],
    },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(serviceLdJson(service))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqLdJson(faqs))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Services', url: 'https://www.jiyology.co.za/services' },
            {
              name: 'Roof Repairs',
              url: 'https://www.jiyology.co.za/services/roof-repairs',
            },
          ]),
        )}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Roof Repair Services"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/roofing.jpg"
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li className="text-white font-medium" aria-current="page">
                Roof Repairs
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Roof Repair Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Fast, reliable roof repair services across Soweto and Johannesburg.
            Leaking roofs, storm damage, tile replacement, and flat roof
            waterproofing. Free quotes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#33b6db] hover:bg-[#2aa8cc] text-slate-950 font-semibold rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+27119310157"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="mr-2 w-4 h-4" /> Call (011) 931 0157
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-b border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                label: 'SABS Approved',
                desc: 'Quality materials',
              },
              { icon: Award, label: 'BEE Level 1', desc: '135% compliant' },
              { icon: Clock, label: '10+ Years', desc: 'Experience' },
              { icon: Check, label: '200+ Projects', desc: 'Completed' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <item.icon className="w-8 h-8 text-[#33b6db] mx-auto mb-2" />
                <p className="font-bold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-background"
        aria-label="Roof repair overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Roof Repair Services in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Your roof is your property first line of defence against the
            elements. When it is damaged, quick and professional repair is
            essential to prevent further damage to your home or business. At
            Jiyology Building Construction & Plumbing, we provide comprehensive
            roof repair services across Soweto, Johannesburg, and all of
            Gauteng, addressing everything from minor leaks to major storm
            damage.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Our roof repair team has extensive experience with all types of
            roofing commonly found in South Africa including concrete roof
            tiles, clay tiles, IBR sheeting, Chromodek, and flat roofs. We use
            advanced leak detection methods to pinpoint the exact source of
            water ingress, ensuring we fix the root cause rather than just the
            symptom. For storm damage, we respond quickly to secure your
            property and prevent further deterioration. We also assist with
            insurance documentation to help process your claim smoothly.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {roofRepairServices.map((svc) => (
              <div
                key={svc.title}
                className="bg-muted/30 rounded-2xl p-8 border border-border/60"
              >
                <svc.icon className="w-10 h-10 text-[#33b6db] mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground mb-4">{svc.desc}</p>
                <ul className="space-y-2">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#33b6db]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border/60">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Why Choose Jiyology for Roof Repairs?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Accurate Leak Detection
                </h3>
                <p className="text-muted-foreground text-sm">
                  We use systematic inspection methods to accurately identify
                  leak sources without unnecessary dismantling. This saves time
                  and money while ensuring the repair is effective.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
                <p className="text-muted-foreground text-sm">
                  All repair materials including tiles, flashings, membranes,
                  and sealants are SABS-approved and selected for compatibility
                  with your existing roof system.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Insurance Assistance</h3>
                <p className="text-muted-foreground text-sm">
                  We provide detailed damage assessments and documentation to
                  support your insurance claim for storm damage, making the
                  process smoother and faster for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Roof Repair Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide roof repair services throughout Soweto, Johannesburg, and
            all surrounding areas. Fast response for emergencies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'Soweto',
              'Protea Glen',
              'Dobsonville',
              'Diepkloof',
              'Pimville',
              'Meadowlands',
              'Orlando',
              'Emdeni',
              'Johannesburg',
            ].map((area) => (
              <Link
                key={area}
                href={`/locations/${area.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-background rounded-xl p-4 border border-border/60 hover:border-[#33b6db]/30 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-foreground">{area}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Roof Repairs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="bg-muted/30 rounded-xl border border-border/60 p-4 group"
              >
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="transform group-open:rotate-180 transition-transform">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
