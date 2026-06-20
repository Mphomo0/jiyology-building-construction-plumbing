import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  Shield,
  Clock,
  Award,
  Phone,
  AlertTriangle,
  Droplet,
  Droplets,
  Thermometer,
  Ban,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Emergency Plumbing Soweto | Jiyology' },
  description:
    '24/7 emergency plumbing in Soweto and Johannesburg. Burst pipe repair, blocked drains, geyser emergencies, sewer backups. Fast response. Call now.',
  openGraph: og({
    title: 'Emergency Plumbing Soweto | Jiyology',
    description:
      '24/7 emergency plumbing services. Burst pipes, blocked drains, geyser failures, sewer backups. Rapid response across Soweto and Johannesburg. Call (011) 931 0157.',
    url: 'https://www.jiyology.co.za/services/emergency-plumbing',
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
    canonical: 'https://www.jiyology.co.za/services/emergency-plumbing',
  },
}

const faqs = [
  {
    q: 'Do you offer 24/7 emergency plumbing in Soweto?',
    a: 'Yes. Our emergency plumbing service operates 24 hours a day, 7 days a week across Soweto and Johannesburg. Call us anytime for urgent plumbing issues and we will dispatch a plumber immediately.',
  },
  {
    q: 'How quickly can you respond to a burst pipe?',
    a: 'We aim to respond within 60 minutes for emergency calls in Soweto and surrounding areas. Our team is on standby to handle burst pipes, major leaks, and other plumbing emergencies.',
  },
  {
    q: 'What should I do while waiting for an emergency plumber?',
    a: 'Turn off your main water supply at the stopcock, switch off your geyser at the circuit breaker if the leak is near electrical fittings, and clear the area around the problem. Call us immediately for professional assistance.',
  },
  {
    q: 'Do you charge extra for emergency callouts?',
    a: 'We charge a standard callout fee for emergency services after hours and on weekends. All pricing is transparent and quoted upfront. Contact us for emergency service pricing.',
  },
]

export default function EmergencyPlumbingPage() {
  const service = {
    name: 'Emergency Plumbing Services',
    description:
      '24/7 emergency plumbing services including burst pipe repair, blocked drains, geyser emergencies, and sewer backup solutions in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const emergencyServices = [
    {
      icon: Droplet,
      title: 'Burst Pipe Repair',
      desc: 'Immediate response for burst pipes that are causing water damage to your property. We repair or replace damaged sections and restore your water supply.',
      items: [
        'Emergency pipe repair',
        'Water shut-off',
        'Pipe replacement',
        'Water damage control',
      ],
    },
    {
      icon: Ban,
      title: 'Blocked Drains',
      desc: 'Fast, effective drain unblocking for kitchen sinks, bathroom drains, toilets, and main sewer lines using professional equipment and techniques.',
      items: [
        'Kitchen drain blockages',
        'Toilet blockages',
        'Main sewer line clearing',
        'CCTV drain inspection',
      ],
    },
    {
      icon: Thermometer,
      title: 'Geyser Emergencies',
      desc: 'Urgent geyser repairs for leaks, thermostat failures, element burnout, and complete geyser failures. We handle emergency callouts across Soweto.',
      items: [
        'Geyser leak repair',
        'Thermostat replacement',
        'Element replacement',
        'Geyser safety valve',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Sewer Backups',
      desc: 'Emergency sewer backup services to prevent health hazards and property damage. We clear blockages and restore proper drainage quickly.',
      items: [
        'Sewer line clearing',
        'Backup prevention',
        'Drain jetting',
        'Sanitary sewer repairs',
      ],
    },
  ]

  return (
    <>
      <Script id="emergency-plumbing-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="emergency-plumbing-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="emergency-plumbing-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Services', url: 'https://www.jiyology.co.za/services' },
            {
              name: 'Emergency Plumbing',
              url: 'https://www.jiyology.co.za/services/emergency-plumbing',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Emergency Plumbing Services"
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
                Emergency Plumbing
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Emergency Plumbing Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            24/7 emergency plumbing response across Soweto and Johannesburg.
            Burst pipes, blocked drains, geyser failures, and sewer backups.
            Call us now for immediate assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+27119310157"
              className="inline-flex items-center justify-center px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" /> Call (011) 931 0157
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Send a Message
            </Link>
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
        aria-label="Emergency plumbing overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            24/7 Emergency Plumbing Services in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Plumbing emergencies can happen at any time. A burst pipe in the
            middle of the night, a blocked toilet overflowing, a geyser that
            suddenly leaks, or a sewer backup that threatens your health and
            property. At Jiyology Building Construction & Plumbing, we provide
            24-hour emergency plumbing services across Soweto, Johannesburg, and
            all of Gauteng to handle these urgent situations.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Our emergency plumbers are on standby and ready to respond quickly.
            We arrive fully equipped to diagnose and resolve your plumbing
            emergency on the spot. We understand that plumbing emergencies are
            stressful and often cause disruption to your household or business
            operations. That is why we prioritise rapid response, transparent
            pricing, and effective solutions that get your plumbing back to
            normal as fast as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {emergencyServices.map((svc) => (
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

      <section className="py-20 bg-background" aria-label="Emergency callout">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 md:p-12 border border-red-200 dark:border-red-900/30 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Plumbing Emergency? Call Us Now
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Burst pipe flooding your home? Geyser leaking? Drains blocked? Do
              not wait. Call our emergency plumbing team for immediate
              assistance. We respond 24/7 across Soweto and Johannesburg.
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

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Emergency Plumbing Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We respond to plumbing emergencies across all of Soweto,
            Johannesburg, and surrounding areas. Call us anytime, anywhere.
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
            Frequently Asked Questions About Emergency Plumbing
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
