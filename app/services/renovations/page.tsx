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
  Home,
  PaintBucket,
  Bath,
  Building2,
  Hammer,
  Wrench,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Home Renovations Soweto | Jiyology' },
  description:
    'Home renovation specialists in Soweto. Kitchens, bathrooms, interior & exterior upgrades. SABS materials, BEE Level 1. Free quote.',
  openGraph: og({
    title: 'Home Renovations Soweto | Jiyology',
    description:
      'Transform your home with professional renovation services. Kitchen remodeling, bathroom upgrades, interior & exterior renovations. Free quotes.',
    url: 'https://www.jiyology.co.za/services/renovations',
    images: [
      {
        url: '/images/renovations.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology home renovation services in Soweto and Johannesburg',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/services/renovations' },
  keywords: ['home renovations Soweto', 'kitchen renovation Johannesburg', 'bathroom renovation Soweto', 'interior renovations Gauteng', 'house remodeling Soweto', 'renovation contractors Johannesburg'],
  twitter: twitter({
    title: 'Home Renovations Soweto | Jiyology',
    description: 'Expert home renovation services in Soweto and Johannesburg. Kitchen, bathroom, interior & exterior renovations. SABS approved, BEE Level 1. Free quote.',
    image: '/images/renovations.jpg',
  }),
}

const faqs = [
  {
    q: 'How much does a kitchen renovation cost in Soweto?',
    a: 'Kitchen renovations in Soweto range from R15,000 for a basic refresh to R80,000+ for a full remodel including new cabinets, tiling, and plumbing. Contact us for a free quote.',
  },
  {
    q: 'How long does a home renovation take in Soweto?',
    a: 'A single room takes 1–2 weeks. A full home renovation typically takes 4–8 weeks depending on scope and materials.',
  },
  {
    q: 'Do you handle bathroom renovations in Soweto?',
    a: 'Yes. We do full bathroom renovations including tiling, plumbing, fixtures, and painting across Soweto and Johannesburg.',
  },
  {
    q: 'What areas do you serve for home renovations?',
    a: 'We serve all Soweto suburbs including Emdeni, Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, and Orlando, as well as broader Johannesburg.',
  },
]

export default function RenovationsPage() {
  const service = {
    name: 'Home Renovation Services',
    description:
      'Comprehensive interior and exterior home renovation solutions in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const renovationServices = [
    {
      icon: Home,
      title: 'Kitchen Renovations',
      desc: 'Complete kitchen remodeling including cabinetry, countertops, tiling, plumbing, and modern finishes that transform your cooking space.',
      items: [
        'Custom cabinetry',
        'Countertop installation',
        'Kitchen tiling',
        'Plumbing & electrical',
      ],
    },
    {
      icon: Hammer,
      title: 'Bathroom Renovations',
      desc: 'Full bathroom upgrades from simple refresh to complete remodel. Waterproofing, tiling, fixtures, and modern design.',
      items: [
        'Bathroom remodeling',
        'Waterproofing',
        'Tiling & grouting',
        'Fixture installation',
      ],
    },
    {
      icon: Building2,
      title: 'Interior Renovations',
      desc: 'Comprehensive interior renovations including room conversions, ceiling installation, painting, flooring, and structural changes.',
      items: [
        'Room conversions',
        'Ceiling installation',
        'Painting & finishing',
        'Flooring solutions',
      ],
    },
    {
      icon: PaintBucket,
      title: 'Exterior Renovations',
      desc: 'Enhance your property curb appeal with exterior painting, paving, roof repairs, and structural improvements.',
      items: [
        'Exterior painting',
        'Paving & driveways',
        'Roof repairs',
        'Structural changes',
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
              name: 'Renovations',
              url: 'https://www.jiyology.co.za/services/renovations',
            },
          ]),
        )}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Renovation Services"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/renovations.jpg"
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
                Renovations
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Home Renovations in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Transform your living space with professional renovation services.
            From kitchen and bathroom remodels to full home makeovers, we
            deliver quality craftsmanship.
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
        aria-label="Renovation services overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Home Renovation Services in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            At Jiyology Building Construction & Plumbing, we transform houses
            into dream homes. Whether you need a kitchen renovation, bathroom
            upgrade, or complete home makeover, our experienced team delivers
            exceptional results across Soweto, Protea Glen, Dobsonville,
            Diepkloof, Johannesburg, and all of Gauteng.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {renovationServices.map((svc) => (
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
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Renovation process">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Our Renovation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Consultation',
                desc: 'We discuss your vision, budget, and timeline during a free consultation.',
              },
              {
                step: '2',
                title: 'Design & Quote',
                desc: 'We provide detailed plans, material selections, and a transparent quote.',
              },
              {
                step: '3',
                title: 'Renovation',
                desc: 'Our team executes the renovation with minimal disruption to your daily life.',
              },
              {
                step: '4',
                title: 'Handover',
                desc: 'We complete a final inspection, clean up, and hand over your transformed space.',
              },
            ].map((phase) => (
              <div
                key={phase.step}
                className="bg-background rounded-xl p-6 border border-border/60 text-center"
              >
                <div className="w-12 h-12 bg-[#33b6db]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-[#33b6db]">
                    {phase.step}
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Renovations
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

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Renovation Resources</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our renovation guides and FAQ for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq/renovations" className="inline-flex items-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all">
              Renovation FAQ
            </Link>
            <Link href="/services/construction" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Construction Services
            </Link>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
