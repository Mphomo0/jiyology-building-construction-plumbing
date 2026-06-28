'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-slate-950" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#33b6db]/10 mb-8">
              <Phone className="w-8 h-8 text-[#33b6db]" />
            </div>
            <h2
              id="cta-heading"
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Get in touch with our expert team today for a free consultation
              and quote. We&apos;re here to bring your construction and plumbing
              projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#33b6db] hover:bg-[#2aa8cc] text-slate-950 font-semibold text-base px-10 py-6 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-black hover:bg-white/10 hover:border-white/30 hover:text-white px-10 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="tel:+27119310157">
                  <Phone className="mr-2 w-5 h-5" />
                  Call (011) 931 0157
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
