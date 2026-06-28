import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import { Star } from 'lucide-react'
import CTA from '@/components/sections/home/CTA'
import { reviewLdJson, breadcrumbLdJson, aggregateRatingLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: { absolute: 'Client Testimonials | Jiyology Construction & Plumbing' },
  description:
    'Read what our clients say about Jiyology Building Construction & Plumbing. Trusted construction and plumbing services in Soweto and Johannesburg.',
  openGraph: og({
    title: 'Client Testimonials | Jiyology Construction & Plumbing',
    description:
      'Hear from our satisfied clients across Soweto and Johannesburg. Quality construction, plumbing, and renovation services you can trust.',
    url: 'https://www.jiyology.co.za/testimonials',
    images: [
      {
        url: '/images/hero-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jiyology Building Construction & Plumbing',
      },
    ],
  }),
  alternates: { canonical: 'https://www.jiyology.co.za/testimonials' },
}

const testimonials = [
  {
    author: 'Simangele Mhlanga',
    body: 'Vusi is very friendly. Treated me as I was the only client.',
    rating: 5,
    date: '2020-03-15',
    location: 'Soweto',
    service: 'General',
    source: 'Google',
  },
  {
    author: 'Merry Sikobane',
    body: 'The best ever. Keep it up with the good. Excellent service to the customer.',
    rating: 5,
    date: '2024-09-10',
    location: 'Soweto',
    service: 'General',
    source: 'Google',
  },
  {
    author: 'Elsie Manyane',
    body: 'I had someone from the company to replace a tap. They are neat and diligent, and give constructive advice where necessary. They are good actually.',
    rating: 4,
    date: '2021-06-22',
    location: 'Soweto',
    service: 'Plumbing',
    source: 'Google',
  },
  {
    author: 'Heidi de Beer',
    body: 'Got them called out by the insurance. Replaced a burst geyser.',
    rating: 3,
    date: '2021-02-22',
    location: 'Soweto',
    service: 'Plumbing',
    source: 'Google',
  },
]

export default function TestimonialsPage() {
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za' },
    { name: 'Testimonials', url: 'https://www.jiyology.co.za/testimonials' },
  ])

  const reviewData = testimonials.map((t) => ({
    author: t.author,
    body: t.body,
    rating: t.rating,
    date: t.date,
  }))

  const avgRatingNum =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  const avgRating = avgRatingNum.toFixed(1)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(reviewLdJson(reviewData))}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(aggregateRatingLdJson(avgRatingNum, testimonials.length))}} />

      <section
        className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden"
        aria-label="Testimonials"
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
                Testimonials
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            What Our Clients Say
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Soweto and Johannesburg
            for quality construction, plumbing, and renovation services.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 bg-white/5 rounded-full px-5 py-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(Number(avgRating)) ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-600'}`}
                />
              ))}
            </div>
            <span className="text-white font-semibold">
              {avgRating} out of 5
            </span>
            <span className="text-neutral-400">
              ({testimonials.length} reviews)
            </span>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background" aria-label="Client reviews">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-muted/30 rounded-2xl p-8 border border-border/60"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-neutral-300'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.body}&rdquo;
                </p>
                <div className="border-t border-border/60 pt-4">
                  <p className="font-bold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location} &middot; {testimonial.service}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center bg-muted/30 rounded-2xl p-6 sm:p-8 md:p-12 border border-border/60">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Leave Us a Review
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We value your feedback. If we&apos;ve worked with you, please
              leave a review on Google to help other Soweto homeowners find
              trusted builders and plumbers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJBc4R8EKjlR4REQJPKpFcSJU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-neutral-950 hover:bg-[#33b6db] text-white font-semibold rounded-lg transition-colors"
              >
                Write a Google Review
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-semibold rounded-lg hover:bg-muted/50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
