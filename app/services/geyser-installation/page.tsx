import type { Metadata } from 'next'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  Shield,
  Clock,
  Award,
  Phone,
  Thermometer,
  RefreshCw,
  Wrench,
  Sun,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Geyser Installation Soweto | Jiyology' },
  description:
    'Professional geyser installation and repair in Soweto and Johannesburg. New geyser install, replacement, repairs, solar geyser. SABS approved, BEE Level 1.',
  openGraph: {
    title: 'Geyser Installation Soweto | Jiyology',
    description:
      'Expert geyser installation, replacement, and repair services. Kwikot, Heat Tech, Franke installations. Solar geyser systems. Serving Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/services/geyser-installation',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.jiyology.co.za/services/geyser-installation',
  },
}

const faqs = [
  {
    q: 'How much does a new geyser installation cost in Soweto?',
    a: 'Costs vary based on geyser size, brand, and installation complexity. A standard 150L geyser installation typically ranges from R6,000 to R12,000 including the unit and labour. Contact us for a free quote.',
  },
  {
    q: 'How long does a geyser installation take?',
    a: 'A standard geyser replacement typically takes 2-4 hours. A new installation with pipework may take 4-6 hours. Solar geyser installations take 1-2 days depending on the system type.',
  },
  {
    q: 'Do you install solar geysers in Johannesburg?',
    a: 'Yes. We install solar geyser systems including evacuated tube and flat plate collectors. Solar geysers can reduce your electricity bill by up to 50% and qualify for Eskom rebates.',
  },
  {
    q: 'Can you help with geyser insurance claims?',
    a: 'Yes. We assist with geyser insurance claims by providing detailed assessment reports, quotes, and completion certificates. Many insurers require professional installation for warranty validity.',
  },
]

export default function GeyserInstallationPage() {
  const service = {
    name: 'Geyser Installation and Repair Services',
    description:
      'Professional geyser installation, replacement, repair, and solar geyser installation services in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const geyserServices = [
    {
      icon: Thermometer,
      title: 'New Geyser Installation',
      desc: 'Complete new geyser installation for new homes, extensions, and renovations. We supply and install all major brands with full warranty and compliance.',
      items: [
        'New geyser supply & install',
        'All major brands',
        'Safety compliance',
        'Waste valve installation',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Geyser Replacement',
      desc: 'Fast, efficient geyser replacement when your old unit fails. We remove your old geyser and install a new one, often on the same day.',
      items: [
        'Like-for-like replacement',
        'Upgrade to larger size',
        'Same-day service',
        'Old unit disposal',
      ],
    },
    {
      icon: Wrench,
      title: 'Geyser Repairs',
      desc: 'Expert geyser repair for leaks, thermostat failure, element burnout, and tripping issues. We diagnose accurately and repair efficiently to restore hot water.',
      items: [
        'Leak repair',
        'Thermostat replacement',
        'Element replacement',
        'Pressure valve repair',
      ],
    },
    {
      icon: Sun,
      title: 'Solar Geyser Installation',
      desc: 'Eco-friendly solar geyser installation to reduce electricity costs. Evacuated tube and flat plate systems installed by certified professionals.',
      items: [
        'Evacuated tube systems',
        'Flat plate collectors',
        'Eskom rebate assistance',
        'Solar maintenance',
      ],
    },
  ]

  return (
    <>
      <Script id="geyser-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="geyser-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="geyser-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Services', url: 'https://www.jiyology.co.za/services' },
            {
              name: 'Geyser Installation',
              url: 'https://www.jiyology.co.za/services/geyser-installation',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Geyser Installation Services"
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
                Geyser Installation
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Geyser Installation & Repair in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Professional geyser installation, replacement, repair, and solar
            geyser solutions across Soweto and Johannesburg. Certified, insured,
            and reliable.
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
        aria-label="Geyser installation overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Geyser Installation & Repair in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            A reliable hot water supply is essential for every home and
            business. When your geyser fails, leaks, or needs upgrading,
            Jiyology Building Construction & Plumbing provides professional
            geyser installation, replacement, and repair services across Soweto,
            Johannesburg, and all of Gauteng. We work with all major brands
            including Kwikot, Heat Tech, Franke, and Solar geyser systems.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Our qualified technicians are experienced in all aspects of geyser
            work. Whether you need a like-for-like replacement, an upgrade to a
            larger unit, a complex new installation, or a solar geyser system to
            reduce your electricity bill, we deliver safe, compliant, and
            reliable solutions. All our installations include proper safety
            valves, drip trays, and bonding where required, ensuring compliance
            with South African electrical and plumbing regulations. We also
            assist with insurance claim documentation and warranty registration.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {geyserServices.map((svc) => (
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
              Why Choose Jiyology for Geyser Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Qualified Technicians
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our geyser installers are trained and experienced with all
                  major brands and system types. We follow manufacturer
                  specifications and safety standards for every installation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Full Compliance</h3>
                <p className="text-muted-foreground text-sm">
                  All installations comply with SANS 10054 (electrical) and SANS
                  10254 (plumbing) regulations. We install safety valves, drip
                  trays, and bonding as required by law.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Same-Day Service</h3>
                <p className="text-muted-foreground text-sm">
                  When your geyser fails, we aim to provide same-day replacement
                  or repair service. No one should go without hot water for
                  long. Call us for fast assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Geyser Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We provide geyser installation, replacement, and repair services
            throughout Soweto, Johannesburg, and all surrounding areas.
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
            Frequently Asked Questions About Geyser Installation
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
