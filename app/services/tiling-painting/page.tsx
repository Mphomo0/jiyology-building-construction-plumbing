import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
  Shield,
  Clock,
  Award,
  Phone,
  Brush,
  Building2,
  Grid3x3,
  Paintbrush,
  PaintRoller,
  Palette,
} from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import {
  serviceLdJson,
  faqLdJson,
  breadcrumbLdJson,
} from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Tiling & Painting Services Soweto | Jiyology' },
  description:
    'Professional tiling and painting in Soweto and Johannesburg. Wall tiling, floor tiling, interior and exterior painting. SABS approved, BEE Level 1.',
  openGraph: og({
    title: 'Tiling & Painting Services Soweto | Jiyology',
    description:
      'Expert tiling and painting for residential and commercial properties. Ceramic, porcelain tiles, interior and exterior painting. Free quotes.',
    url: 'https://www.jiyology.co.za/services/tiling-painting',
    images: [
      {
        url: '/images/painting.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology tiling and painting services in Soweto and Johannesburg',
      },
    ],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/services/tiling-painting',
  },
  keywords: ['tiling services Soweto', 'floor tiling Johannesburg', 'wall tiling Soweto', 'painting contractors Johannesburg', 'interior painting Soweto', 'exterior painting Gauteng'],
  twitter: twitter({
    title: 'Tiling & Painting Services Soweto | Jiyology',
    description: 'Professional tiling and painting in Soweto and Johannesburg. Wall tiling, floor tiling, interior and exterior painting. SABS approved, BEE Level 1.',
    image: '/images/painting.jpg',
  }),
}

const faqs = [
  {
    q: 'Do you install bathroom tiles in Soweto?',
    a: 'Yes. We install ceramic, porcelain, and natural stone tiles in bathrooms, kitchens, and living areas. We handle waterproofing, substrate preparation, and grouting for a professional finish.',
  },
  {
    q: 'What painting services do you offer in Johannesburg?',
    a: 'We offer complete interior and exterior painting for residential and commercial properties. This includes wall painting, ceiling painting, woodwork, and industrial coating applications.',
  },
  {
    q: 'How much does tiling cost per square metre?',
    a: 'Costs vary based on tile type, area size, and surface preparation required. We provide transparent quotes with no hidden fees. Contact us for a free assessment and accurate pricing.',
  },
  {
    q: 'Do you paint exterior walls and roofs?',
    a: 'Yes. We specialise in exterior painting including wall painting, roof coatings, and weatherproofing. We use quality paints that withstand South African sun and weather conditions.',
  },
]

export default function TilingPaintingPage() {
  const service = {
    name: 'Tiling and Painting Services',
    description:
      'Comprehensive tiling and painting services for residential and commercial properties in Soweto and Johannesburg.',
    areaServed: 'Soweto, Johannesburg, Gauteng',
  }

  const tpServices = [
    {
      icon: Grid3x3,
      title: 'Wall & Floor Tiling',
      desc: 'Professional tile installation for walls and floors using ceramic, porcelain, and natural stone. Precision cutting and expert finishing for every project.',
      items: [
        'Bathroom tiling',
        'Kitchen splashbacks',
        'Floor tiling',
        'Natural stone installation',
      ],
    },
    {
      icon: Paintbrush,
      title: 'Interior Painting',
      desc: 'Transform your indoor spaces with high-quality interior painting. Clean lines, even coverage, and durable finishes for walls, ceilings, and trim.',
      items: [
        'Wall painting',
        'Ceiling painting',
        'Woodwork painting',
        'Feature walls',
      ],
    },
    {
      icon: PaintRoller,
      title: 'Exterior Painting',
      desc: 'Protect and beautify your property exterior with professional painting. Weather-resistant paints and proper surface preparation for lasting results.',
      items: [
        'External wall painting',
        'Roof coating',
        'Weatherproofing',
        'Commercial exteriors',
      ],
    },
    {
      icon: Building2,
      title: 'Commercial Projects',
      desc: 'Large-scale tiling and painting for commercial properties including offices, retail spaces, restaurants, and industrial facilities. Completed on schedule.',
      items: [
        'Office tiling & painting',
        'Retail fit-outs',
        'Industrial coating',
        'Multi-unit developments',
      ],
    },
  ]

  return (
    <>
      <Script id="tiling-painting-service-schema" type="application/ld+json">
        {JSON.stringify(serviceLdJson(service))}
      </Script>
      <Script id="tiling-painting-faq-schema" type="application/ld+json">
        {JSON.stringify(faqLdJson(faqs))}
      </Script>
      <Script id="tiling-painting-breadcrumb" type="application/ld+json">
        {JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Services', url: 'https://www.jiyology.co.za/services' },
            {
              name: 'Tiling & Painting',
              url: 'https://www.jiyology.co.za/services/tiling-painting',
            },
          ]),
        )}
      </Script>

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Tiling and Painting Services"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/painting.jpg"
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
                Tiling & Painting
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Tiling & Painting Services in Soweto & Johannesburg
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-3xl mx-auto">
            Professional tile installation and painting for homes and
            businesses. Quality finishes, durable materials, and expert
            craftsmanship across Soweto and Johannesburg.
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
        aria-label="Tiling and painting overview"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Tiling & Painting Services in Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            Jiyology Building Construction & Plumbing provides professional
            tiling and painting services for residential and commercial clients
            throughout Soweto, Johannesburg, and Gauteng. Our skilled tradesmen
            deliver flawless finishes that transform your spaces, whether you
            are renovating a bathroom, updating a kitchen, or painting an entire
            office building.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-4xl">
            We believe that quality finishes make all the difference in
            construction and renovation projects. Our tilers are experienced
            with ceramic, porcelain, and natural stone tiles, ensuring precise
            cuts and perfect alignment. Our painters use premium paints and
            proper surface preparation techniques to achieve smooth,
            long-lasting results. Every project is completed with attention to
            detail, clean lines, and client satisfaction.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {tpServices.map((svc) => (
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
              Why Choose Jiyology for Tiling & Painting?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Skilled Craftsmanship
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our tilers and painters are experienced professionals who take
                  pride in their work. Every tile is cut with precision, every
                  wall is painted with care.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Quality Materials</h3>
                <p className="text-muted-foreground text-sm">
                  We use premium tile adhesives, grouts, and paints from trusted
                  brands. This ensures your finishes remain beautiful and
                  durable for years.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">
                  Clean & Reliable Service
                </h3>
                <p className="text-muted-foreground text-sm">
                  We respect your home or business. Our team works cleanly,
                  protects surfaces, and leaves your space spotless after every
                  job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" aria-label="Service areas">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Tiling & Painting Services Across Soweto & Johannesburg
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            We offer tiling and painting services across Soweto, Johannesburg,
            and all surrounding suburbs. Contact us for a free quote.
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
            Frequently Asked Questions About Tiling & Painting
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
