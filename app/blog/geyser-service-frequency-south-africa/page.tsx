import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'
import { breadcrumbLdJson, blogLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'How Often to Service Your Geyser | Jiyology' },
  description:
    'South African homeowners should service their geyser every 2–3 years. Learn what\'s checked, how to extend geyser life, and when to replace it.',
  openGraph: og({
    title: 'How Often to Service Your Geyser | Jiyology',
    description:
      'Essential geyser maintenance guide: service every 2 years, replace anode every 3-5 years. Prevent bursts and save electricity in Soweto and Johannesburg.',
    url: 'https://www.jiyology.co.za/blog/geyser-service-frequency-south-africa',
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
      'https://www.jiyology.co.za/blog/geyser-service-frequency-south-africa',
  },
  keywords: ['geyser service frequency South Africa', 'how often service geyser Johannesburg', 'geyser maintenance Soweto', 'geyser anode replacement', 'prevent geyser burst Johannesburg', 'geyser lifespan South Africa'],
  twitter: twitter({
    title: 'How Often to Service Your Geyser | Jiyology',
    description: "Essential geyser maintenance guide: service every 2 years, replace anode every 3-5 years. Prevent bursts and save electricity in Soweto and Johannesburg.",
  }),
}

export default function GeyserServicePage() {
  const body = `A geyser burst is every Soweto homeowner's nightmare. Flooded ceilings, damaged property, and emergency call-out fees running into thousands. Yet most geyser bursts are preventable with simple regular maintenance. This guide explains exactly how often you should service your geyser and what the service includes.

How Often Should You Service Your Geyser?
Every 2 years is the recommended service interval for electric geysers in South Africa. Gas geysers should be serviced annually. If your water has high mineral content (common in Gauteng), consider annual servicing — scale buildup accelerates wear.

What Happens During a Geyser Service:
A professional geyser service by a qualified plumber includes: checking and testing the thermostat (set to 55–60°C), testing and replacing the Pressure Control Valve (PCV) if faulty, inspecting the sacrificial anode for corrosion, flushing the geyser to remove sediment and scale, checking all pipe connections for leaks, and testing the element for proper operation.

The Sacrificial Anode: Your Geyser's Secret Lifesaver
Inside every geyser is a sacrificial anode rod made of magnesium or aluminium. This rod corrodes instead of the steel tank. Without a functioning anode, the tank rusts and bursts. Replace the anode every 3–5 years depending on water quality. This simple R500–R800 replacement extends your geyser's life by 5–10 years.

Signs Your Geyser Needs Immediate Servicing:
Rumbling or popping noises (scale buildup on the element), rusty or discoloured water, water leaking from the overflow pipe, geyser taking longer than usual to heat, inconsistent water temperature, tripping the electrical breaker, and visible rust on the geyser tank.

Why Geyser Servicing Saves Money:
A well-maintained geyser uses 15–25% less electricity. Scale buildup insulates the element, making it work harder and longer. Annual or bi-annual servicing pays for itself through electricity savings alone. With Eskom's ongoing tariff increases, this matters more every year.

How Long Should a Geyser Last?
With proper maintenance: 10–15 years. Without maintenance: 5–8 years. A R500 anode replacement every few years can double your geyser's lifespan. At R6,000–R9,500 for a new geyser installation, that is significant savings.

Common Geyser Myths:
Myth: "Turning the geyser off saves electricity." Fact: The geyser loses heat slowly and needs extra power to reheat from cold. A well-insulated geyser set at 55°C is most efficient.
Myth: "A burst geyser comes without warning." Fact: There are always warning signs — noise, rust, leaks. Most homeowners ignore them.
Myth: "Gas geysers don't need servicing." Fact: Gas geysers need annual servicing to check the burner, gas pressure, and ventilation for carbon monoxide safety.

Jiyology offers professional geyser servicing, repair, and installation across all Soweto suburbs including Protea Glen, Dobsonville, Diepkloof, Pimville, Meadowlands, Orlando, and Emdeni. Don't wait for a burst — schedule your geyser service today.`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          blogLdJson({
            title: 'How Often Should You Service Your Geyser in South Africa?',
            description:
              'Essential geyser maintenance guide for South African homeowners. Prevent bursts, save electricity, and extend your geyser lifespan.',
            body,
            datePublished: '2025-05-19',
            dateModified: '2025-05-19',
            author: 'Vusi Jiya',
            url: 'https://www.jiyology.co.za/blog/geyser-service-frequency-south-africa',
          }),
        )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(
          breadcrumbLdJson([
            { name: 'Home', url: 'https://www.jiyology.co.za' },
            { name: 'Blog', url: 'https://www.jiyology.co.za/blog' },
            {
              name: 'Geyser Service Frequency',
              url: 'https://www.jiyology.co.za/blog/geyser-service-frequency-south-africa',
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
            / <span className="text-neutral-400">Geyser Service Guide</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Plumbing
            </span>
            <span>19 May 2025</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            How Often Should You Service Your Geyser in South Africa?
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; Expert advice to prevent geyser bursts and
            extend your water heater's lifespan.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('How Often Should You Service Your Geyser?')) {
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    How Often Should You Service Your Geyser?
                  </h2>
                  <p>{p.split('\n')[1]}</p>
                </div>
              )
            }
            if (p.startsWith('What Happens During a Geyser Service:')) {
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
            if (p.startsWith('Common Geyser Myths:')) {
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
            if (p.startsWith('Signs Your Geyser Needs Immediate Servicing:')) {
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
            if (p.startsWith('The Sacrificial Anode:'))
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    The Sacrificial Anode: Your Geyser&rsquo;s Secret Lifesaver
                  </h2>
                  <p>{p.split('\n')[1]}</p>
                </div>
              )
            return <p key={i}>{p}</p>
          })}
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl flex flex-wrap gap-4 justify-center">
          <Link
            href="/services/geyser-installation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
          >
            Geyser Services
          </Link>
          <Link
            href="/services/plumbing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all text-sm"
          >
            Plumbing Services
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
