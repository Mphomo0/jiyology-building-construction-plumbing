'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const highlights = [
  'SABS Approved Materials',
  'BEE Level 1 Compliant',
  '50% Black Woman Owned',
  'Residential & Commercial',
]

export default function AboutSection() {
  return (
    <section className="py-24 bg-background" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-4">
                About Us
              </span>
              <h2
                id="about-heading"
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight leading-[1.1]"
              >
                Built on Trust,
                <br />
                Driven by Quality
              </h2>
              <div className="w-16 h-1 bg-[#33b6db] mb-6 rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Jiyology Building Construction & Plumbing is the brainchild and
                long-time dream of{' '}
                <span className="font-semibold text-foreground">
                  Vusi Jiya and Lerato Jiya
                </span>
                , who are passionate about delivering exceptional construction
                and plumbing services to every client.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We strive to be the benchmark in the building construction and
                plumbing industry, treating our clients as we would like to be
                treated.
              </p>

              <ul className="space-y-3 mb-8">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#33b6db] shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-neutral-950 text-white hover:bg-[#33b6db] hover:text-white transition-all duration-300"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://ik.imagekit.io/i6f6omrki/about-image.jpg?updatedAt=1762085902354"
                  alt="Jiyology construction team at work on a building project in Soweto"
                  width={600}
                  height={700}
                  className="object-cover w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#33b6db] text-slate-950 rounded-xl px-6 py-4 shadow-lg hidden md:block">
                <div className="text-2xl font-bold">
                  {new Date().getFullYear() - 2014}+
                </div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
