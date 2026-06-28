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
  Droplets,
  Wrench,
  Thermometer,
  AlertTriangle,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Plumbing Services Soweto | Jiyology' },
  description:
    'Professional plumbing services in Soweto and Johannesburg. Maintenance, repairs, installations, emergency callouts. SABS approved, BEE Level 1. Free quote.',
  openGraph: og({
    title: 'Plumbing Services Soweto | Jiyology',
    description:
      'Reliable plumbing services including maintenance, repairs, emergency callouts, and installations. Serving Soweto, Protea Glen, Dobsonville, and Johannesburg.',
    url: 'https://www.jiyology.co.za/services/plumbing',
    images: [
      {
        url: '/images/plumbing.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology plumbing services in Soweto and Johannesburg',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/services/plumbing' },
  keywords: ['plumbing services Soweto', 'plumber Johannesburg', 'plumbing repairs Soweto', 'plumbing installation Johannesburg', 'plumber Protea Glen', 'plumbing company Gauteng'],
  twitter: twitter({
    title: 'Plumbing Services Soweto | Jiyology',
    description: 'Professional plumbing services in Soweto and Johannesburg. Maintenance, repairs, installations, emergency callouts. SABS approved, BEE Level 1. Free quote.',
    image: '/images/plumbing.jpg',
  }),
}

const faqs = [
  {
    q: 'Do you offer emergency plumbing services in Soweto?',
    a: 'Yes. We provide 24/7 emergency plumbing services across Soweto and Johannesburg. Call us immediately for burst pipes, blocked drains, geyser failures, or any urgent plumbing issue.',
  },
  {
    q: 'How much does a plumber cost in Soweto?',
    a: 'Costs vary based on the job. We provide transparent, upfront pricing with free quotes. Contact us for an accurate estimate for your specific plumbing needs.',
  },
  {
    q: 'Can you install a new geyser in Soweto?',
    a: 'Yes. We install all major geyser brands including Kwikot, Heat Tech, and Franke. We handle the full installation including safety compliance and can assist with insurance claims.',
  },
  {
    q: 'Do you fix blocked drains?',
    a: 'Yes. We clear blocked drains, toilets, and sewers using professional equipment. We also offer CCTV drain inspections for accurate diagnosis.',
  },
  {
    q: 'Are you registered plumbers?',
    a: 'Yes, our team consists of qualified, experienced plumbers who comply with all South African plumbing regulations and safety standards.',
  },
  {
    q: 'What areas do you cover for plumbing?',
    a: 'We cover all of Soweto including Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, Emdeni, and the greater Johannesburg area.',
  },
]

export default function PlumbingPage() {
  const service = {
    name: 'Plumbing Services',
    description:
      'Comprehensive plumbing services including maintenance, repairs, installations, and emergency callouts in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const plumbingServices = [
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      desc: 'Fixing leaking taps, running toilets, low water pressure, and general plumbing maintenance for homes and businesses in Soweto.',
      items: [
        'Leaking tap repair',
        'Toilet repairs',
        'Low pressure fixes',
        'Pipe repairs',
      ],
    },
    {
      icon: Droplets,
      title: 'Installation Services',
      desc: 'Professional installation of plumbing fixtures, geysers, water heaters, and complete bathroom plumbing systems.',
      items: [
        'Geyser installation',
        'Bathroom plumbing',
        'Kitchen plumbing',
        'Fixture installation',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Plumbing',
      desc: '24/7 emergency response for burst pipes, blocked drains, sewer backups, and urgent plumbing issues across Soweto.',
      items: [
        'Burst pipe repair',
        'Blocked drains',
        'Sewer backups',
        'Emergency callout',
      ],
    },
    {
      icon: Thermometer,
      title: 'Geyser Services',
      desc: 'Complete geyser services including new installations, replacements, repairs, and maintenance. All major brands supported.',
      items: [
        'New geyser install',
        'Geyser replacement',
        'Geyser repairs',
        'Insurance claims',
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
              name: 'Plumbing',
              url: 'https://www.jiyology.co.za/services/plumbing',
            },
          ]),
        )}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Plumbing Services"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/plumbing.jpg"
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
                Plumbing
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Professional Plumbing Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Reliable plumbing maintenance, repairs, installations, and emergency
            services. Serving homes and businesses across Soweto and
            Johannesburg with quality workmanship.
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
        aria-label="Plumbing services overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Plumbing Services for Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Whether you need a leaking tap fixed, a new geyser installed, or
            emergency plumbing assistance, Jiyology Building Construction &
            Plumbing delivers reliable, professional plumbing services across
            Soweto, Johannesburg, and all of Gauteng. Our qualified plumbers use
            quality materials and provide lasting solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {plumbingServices.map((svc) => (
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

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Plumbing Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Fast, reliable plumbing services available throughout Soweto and
            Johannesburg. Call us for emergency or scheduled plumbing work.
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

      <section className="py-20 bg-background" aria-label="Emergency plumbing">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 md:p-12 border border-red-200 dark:border-red-900/30 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Emergency Plumbing? Call Us Now
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Burst pipe? Blocked drain? Geyser leaking? We provide rapid
              emergency plumbing response across Soweto and Johannesburg.
            </p>
            <a
              href="tel:+27119310157"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" /> Call (011) 931 0157
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background" aria-label="FAQs">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Plumbing
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
