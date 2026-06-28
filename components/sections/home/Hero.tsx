'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      className="relative min-h-dvh flex items-center overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0">
        <Image
          src="https://ik.imagekit.io/i6f6omrki/hero-image.jpg?updatedAt=1762086874764"
          alt="Construction site showcasing Jiyology building work"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-br from-slate-950/90 via-slate-900/85 to-slate-950/90" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#33b6db]/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.05, 0.12, 0.05] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-[#33b6db]/15 blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-6">
              Soweto&apos;s Trusted Builder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter mb-6"
          >
            Build With
            <br />
            <span className="text-[#33b6db]">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed mb-10"
          >
            Professional construction and plumbing services in Soweto and
            Johannesburg. From roofing to renovations, we deliver quality
            workmanship with SABS-approved materials and BEE Level 1 compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-[#33b6db] text-slate-950 hover:bg-[#2aa8cc] font-semibold shadow-lg shadow-[#33b6db]/20"
              asChild
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-black px-8 py-6 border-white/20 hover:bg-white/10 hover:border-white/30 hover:text-white font-semibold"
              asChild
            >
              <Link href="/services">
                <Phone className="mr-2 w-5 h-5" />
                Our Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-8 md:gap-12"
          >
            <div>
              <div className="text-3xl font-bold text-white">SABS</div>
              <div className="text-sm text-neutral-400">Approved Materials</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">BEE L1</div>
              <div className="text-sm text-neutral-400">Level 1 Compliant</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">NHBRC</div>
              <div className="text-sm text-neutral-400">Registered Builder</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/10" />
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-neutral-400">Projects Completed</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
