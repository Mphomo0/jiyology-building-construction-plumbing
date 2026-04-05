'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHeader({
  title,
  subtitle,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label={title}>
      <div className="absolute inset-0">
        {image && (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#33b6db]/10 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-white font-medium" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
