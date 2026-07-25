import type { Metadata } from 'next'
import { og, twitter } from '@/lib/metadata'
import Link from 'next/link'
import CTA from '@/components/sections/home/CTA'

export const metadata: Metadata = {
  title: { absolute: 'Signs Your Geyser Needs Replacing in South Africa | Jiyology' },
  description:
    'Is your geyser ready to burst? 8 warning signs you need a replacement. Costs, what to do in an emergency, and when to call a plumber in Soweto.',
  openGraph: og({
    title: 'Signs Your Geyser Needs Replacing in South Africa | Jiyology',
    description:
      'Is your geyser ready to burst? 8 warning signs you need a geyser replacement, costs, what to do in an emergency, and when to call a plumber in Soweto.',
    url: 'https://www.jiyology.co.za/blog/signs-geyser-needs-replacing',
    type: 'article',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology plumber inspecting a geyser in Soweto',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/blog/signs-geyser-needs-replacing' },
  keywords: ['geyser replacement signs South Africa', 'when to replace geyser Soweto', 'geyser failing signs', 'burst geyser Johannesburg', 'geyser cost replacement Soweto', 'geyser lifespan South Africa'],
  twitter: twitter({
    title: 'Signs Your Geyser Needs Replacing in South Africa | Jiyology',
    description: '8 warning signs your geyser is failing. Replacement costs, emergency steps, and when to call a plumber in Soweto.',
  }),
}

const body = `Most South African homeowners don't think about their geyser until it bursts — usually on a Monday morning, usually at the worst possible time. Electric geysers last 8–12 years under normal conditions. The warning signs of a failing geyser are often subtle, but catching them early can save you from a flooded ceiling, structural water damage, and the emergency call-out fee on top of a replacement. Here are 8 signs it's time to act.

Sign 1: Rusty or Discoloured Hot Water

If the hot water coming from your taps is brown, orange, or has a metallic taste, your geyser tank is corroding from the inside. The sacrificial anode rod — a magnesium or aluminium rod designed to corrode instead of the tank — has likely been depleted. Once the anode is gone, the tank itself starts rusting. Discoloured water is a sign you have months, not years, before failure.

Sign 2: Rumbling or Popping Sounds

Loud rumbling, popping, or banging sounds when the geyser heats up indicate scale and sediment buildup on the heating element. Mineral deposits (calcium carbonate from hard water) coat the element, forcing it to work harder and overheat. This reduces efficiency, increases your electricity bill, and shortens element lifespan significantly.

Sign 3: Water Pooling Around the Geyser

Water on the floor or ceiling near your geyser means one of three things: hairline cracks in the tank itself (replace immediately), a dripping temperature and pressure (T&P) relief valve (may indicate excessive pressure — investigate urgently), or a leaking inlet/outlet connection (usually a cheaper fix). Any water near a geyser warrants an urgent inspection.

Sign 4: No Hot Water or Inconsistent Temperature

If you suddenly have no hot water, the most common causes are a failed heating element, a tripped circuit breaker, or a faulty thermostat. Intermittent hot water — where the temperature fluctuates during a shower — usually points to a dying thermostat or an element that cuts in and out. Both are repairable, but in an older geyser it often signals the beginning of the end.

Sign 5: Age Over 10 Years

The South African geyser industry standard design life is 8–12 years. Beyond 10 years, the risk of failure rises sharply — anode rods are depleted, tanks have thinned from corrosion, and seals have hardened. If your geyser is over 10 years old and showing any of the other signs on this list, replacement is the most economical decision. A surprise burst geyser causes far more damage than a planned replacement.

Sign 6: Your Electricity Bill Has Increased

A geyser that's working harder than it should — due to scale on the element, a degraded insulation blanket, or a faulty thermostat cycling too frequently — will consume noticeably more electricity. If your bill has risen and you haven't changed your habits, have your geyser inspected. Adding an insulation blanket and timer can reduce geyser electricity use by 20–30%.

Sign 7: Visible Rust on the Tank Exterior

Surface rust on the outside of a geyser tank indicates moisture is getting in through the insulation — often from a slow leak or condensation around fittings. External rust almost always means the inside is in worse shape. Do not ignore visible rust on a geyser.

Sign 8: The Pressure Relief Valve Drips Constantly

The T&P (temperature and pressure) relief valve is a safety device designed to open when pressure or temperature exceeds safe limits and then reseat. If yours drips constantly, it's either failing (needs replacement) or your system pressure is genuinely too high (needs a pressure-reducing valve). A constantly dripping T&P valve is a safety issue, not just a maintenance one.

What to Do in a Geyser Emergency

If your geyser bursts: turn off the electricity supply to the geyser at the DB (distribution) board — there should be a dedicated isolator switch labelled "geyser". Turn off the cold water inlet using the isolation valve above or near the geyser. Then call Jiyology on (011) 931 0157 or 073 129 4401 for an emergency response. Do not attempt to work on a live electric geyser yourself.

Replacement Options and Costs

Electric geyser replacement in Soweto costs R4,500–R9,000 including the unit and installation. Solar geysers start from R12,000 installed and can reduce your geyser electricity cost by up to 80%. Heat pump geysers are the most energy-efficient option at R15,000–R25,000 installed, with payback periods of 3–5 years. We install Kwikot, Heat Tech, and other SABS-approved brands.

How Often to Service Your Geyser

Service your geyser every 2 years. A service includes flushing sediment, inspecting and replacing the anode rod (every 3–5 years), checking the T&P valve, and testing thermostat accuracy. Regular servicing can extend a geyser's life by 3–5 years and prevents the catastrophic failures that cause ceiling and structural damage. Jiyology provides same-day geyser inspections across Soweto and Johannesburg.`

export default function GeyserReplacingBlogPage() {
  return (
    <>
      <article className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <nav className="text-sm text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#33b6db]">Home</Link>{' '}
            /{' '}
            <Link href="/blog" className="hover:text-[#33b6db]">Blog</Link>{' '}
            /{' '}
            <span className="text-neutral-400">Signs Your Geyser Needs Replacing</span>
          </nav>
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 mb-4">
            <span className="bg-[#33b6db]/10 text-[#33b6db] px-3 py-1 rounded-full text-xs font-medium">
              Plumbing
            </span>
            <span>1 August 2025</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
            8 Signs Your Geyser Needs Replacing in South Africa
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            By Vusi Jiya &mdash; Don&apos;t wait for a burst geyser. Spot the warning signs early and replace before it causes ceiling and structural damage.
          </p>
        </div>
      </article>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl prose prose-neutral dark:prose-invert prose-lg">
          {body.split('\n\n').map((p, i) => {
            if (p.startsWith('Sign ') || p.startsWith('What to Do') || p.startsWith('Replacement Options') || p.startsWith('How Often')) {
              const newlineIdx = p.indexOf('\n')
              const heading = newlineIdx > -1 ? p.slice(0, newlineIdx) : p
              const rest = newlineIdx > -1 ? p.slice(newlineIdx + 1) : ''
              return (
                <div key={i}>
                  <h2 className="text-2xl font-bold mt-8 mb-4">{heading}</h2>
                  {rest && (
                    <p>
                      {rest.includes('(011) 931 0157') ? (
                        <>
                          {rest.split('(011) 931 0157')[0]}
                          <a href="tel:+27119310157" className="text-[#33b6db] hover:underline">(011) 931 0157</a>
                          {rest.split('(011) 931 0157')[1]?.replace('073 129 4401', '').split('or ')[0]}
                          {rest.includes('073 129 4401') && <>or <a href="tel:+27731294401" className="text-[#33b6db] hover:underline">073 129 4401</a>{rest.split('073 129 4401')[1]}</>}
                        </>
                      ) : rest}
                    </p>
                  )}
                </div>
              )
            }
            return <p key={i}>{p}</p>
          })}
          <p className="mt-8">
            For more geyser advice, read our guide on{' '}
            <Link href="/blog/geyser-service-frequency-south-africa" className="text-[#33b6db] hover:underline">how often to service your geyser</Link>,
            or see our{' '}
            <Link href="/services/geyser-installation" className="text-[#33b6db] hover:underline">geyser installation services</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/services/geyser-installation"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all text-sm"
            >
              Geyser Installation
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
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Geyser Resources</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Need a geyser replacement or repair? Contact us today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/services/geyser-installation" className="inline-flex items-center px-6 py-3 rounded-full bg-[#33b6db] text-white font-semibold hover:bg-[#33b6db]/90 transition-all">
              Geyser Services
            </Link>
            <Link href="/services/emergency-plumbing" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Emergency Plumbing
            </Link>
            <Link href="/faq/plumbing" className="inline-flex items-center px-6 py-3 rounded-full border border-[#33b6db] text-[#33b6db] font-semibold hover:bg-[#33b6db] hover:text-white transition-all">
              Plumbing FAQ
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
