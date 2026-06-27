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
  ChevronUp,
  Grid3x3,
  Hammer,
  Layout,
  Lightbulb,
  Box,
  PanelTop,
  Fan,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Ceiling Installation Soweto | Jiyology' },
  description:
    'Professional ceiling installation and repair in Soweto and Johannesburg. New ceilings, drop ceilings, bulkheads, ceiling repairs. SABS approved, BEE Level 1.',
  openGraph: og({
    title: 'Ceiling Installation Soweto | Jiyology',
    description:
      'Expert ceiling installation and repair services. New ceilings, suspended ceilings, bulkhead installation, and ceiling repairs for residential and commercial properties.',
    url: 'https://www.jiyology.co.za/services/ceiling-installation',
    images: [
      {
        url: '/images/ceiling.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology ceiling installation and repair in Soweto',
      },
    ],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/services/ceiling-installation',
  },
  keywords: ['ceiling installation Soweto', 'drop ceiling Johannesburg', 'ceiling repair Soweto', 'bulkhead ceiling installation', 'suspended ceiling Johannesburg', 'gypsum ceiling Soweto'],
  twitter: twitter({
    title: 'Ceiling Installation Soweto | Jiyology',
    description: 'Professional ceiling installation and repair in Soweto and Johannesburg. New ceilings, drop ceilings, bulkheads, ceiling repairs. SABS approved, BEE Level 1.',
    image: '/images/ceiling.jpg',
  }),
}

const faqs = [
  {
    q: 'What ceiling materials do you install in Soweto?',
    a: 'We install a variety of ceiling materials including gypsum boards, PVC panels, ceiling boards, and suspended ceiling tiles. Each option offers different benefits for aesthetics, insulation, and budget.',
  },
  {
    q: 'How much does a new ceiling cost in Johannesburg?',
    a: 'Ceiling costs depend on the room size, material chosen, and whether any structural work is needed. We provide free quotes with full transparency on materials and labour.',
  },
  {
    q: 'Do you repair damaged ceilings?',
    a: 'Yes. We repair water-damaged, sagging, cracked, or hole-ridden ceilings. Our team restores your ceiling to look like new, matching existing textures and finishes.',
  },
  {
    q: 'What is a bulkhead ceiling?',
    a: 'A bulkhead is a boxed section of ceiling used to conceal ductwork, pipes, or wiring, or to create architectural interest. We design and install custom bulkheads for any space.',
  },
]

export default function CeilingInstallationPage() {
  const service = {
    name: 'Ceiling Installation Services',
    description:
      'Professional ceiling installation, repairs, drop ceilings, and bulkhead installation for residential and commercial properties in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const ceilingServices = [
    {
      icon: Layout,
      title: 'New Ceiling Installation',
      desc: 'Complete new ceiling installation for homes, offices, and commercial spaces. We handle everything from framework to board installation and finishing.',
      items: [
        'Gypsum ceiling installation',
        'PVC ceiling installation',
        'Ceiling board installation',
        'Framework & cornices',
      ],
    },
    {
      icon: Hammer,
      title: 'Ceiling Repairs',
      desc: 'Professional ceiling repair services for water damage, cracks, sagging, and holes. We restore your ceiling to its original condition with expert finishing.',
      items: [
        'Water damage repair',
        'Crack repair',
        'Sagging ceiling fix',
        'Texture matching',
      ],
    },
    {
      icon: PanelTop,
      title: 'Drop Ceilings',
      desc: 'Suspended ceiling systems ideal for offices, retail spaces, and commercial properties. Easy access to overhead services with a clean, professional appearance.',
      items: [
        'Suspended ceiling tiles',
        'Grid system installation',
        'Acoustic ceiling tiles',
        'Commercial drop ceilings',
      ],
    },
    {
      icon: Box,
      title: 'Bulkhead Installation',
      desc: 'Custom bulkhead installation for concealing services and creating architectural features. Designed to match your interior aesthetic and functional requirements.',
      items: [
        'Custom bulkheads',
        'Ductwork concealment',
        'Lighting integration',
        'Architectural features',
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
              name: 'Ceiling Installation',
              url: 'https://www.jiyology.co.za/services/ceiling-installation',
            },
          ]),
        )}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Ceiling Installation Services"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/ceiling.jpg"
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
                Ceiling Installation
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Ceiling Installation Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Expert ceiling installation, repairs, drop ceilings, and bulkheads
            for homes and businesses. Quality materials, professional finishing,
            free quotes.
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
        aria-label="Ceiling installation overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Ceiling Installation Services in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Whether you are building a new home, renovating an office, or need
            to replace a damaged ceiling, Jiyology Building Construction &
            Plumbing delivers professional ceiling installation and repair
            services across Soweto, Johannesburg, and all of Gauteng. Our team
            works with gypsum, PVC, ceiling boards, and suspended ceiling
            systems to achieve the perfect finish for your space.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            A well-installed ceiling not only enhances the aesthetic appeal of a
            room but also improves insulation, acoustics, and energy efficiency.
            Our ceiling installation experts ensure proper framework, level
            alignment, and seamless finishing. We also specialise in custom
            bulkheads that conceal ductwork and create modern architectural
            lines. For commercial properties, we offer suspended ceiling systems
            that provide easy access to overhead services while maintaining a
            clean, professional look.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {ceilingServices.map((svc) => (
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
              Why Choose Jiyology for Ceiling Installation?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Professional Installation
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our ceiling installers are experienced with all ceiling types
                  and materials. Every installation is done to manufacturer
                  specifications for optimal performance.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
                <p className="text-muted-foreground text-sm">
                  We use SABS-approved ceiling materials including gypsum, PVC,
                  and acoustic tiles. Our materials are sourced from trusted
                  suppliers for durability and finish quality.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground text-sm">
                  Whether you need a simple residential ceiling or a complex
                  commercial suspended system with integrated lighting, we
                  design and install custom solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Ceiling Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide ceiling installation and repair services across Soweto,
            Johannesburg, and all surrounding areas. Contact us for a free
            quote.
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
            Frequently Asked Questions About Ceiling Installation
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
