'use client'

import { motion } from 'framer-motion'
import { Eye, GraduationCap, Landmark } from 'lucide-react'

const objectives = [
  {
    icon: Landmark,
    title: 'Mission',
    description:
      'To provide clients with the best quality products and excellent services which exceed customer expectations in the plumbing and construction industry, and to create long-term relationships with our clients.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To provide clients with professional, fast, and reliable solutions that best suit their needs and their budget, addressing pressing issues and improving people\'s lives.',
  },
  {
    icon: GraduationCap,
    title: 'Values',
    description:
      'Our values are complemented by personal experiences, which is the core of our business delivery and reliable client service. We treat our clients as we would like to be treated, providing expert service and advice to every client.',
  },
]

export default function Vision() {
  return (
    <section className="py-24 bg-muted/30" aria-labelledby="objectives-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-3 block">
            What Drives Us
          </span>
          <h2
            id="objectives-heading"
            className="text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Our Objectives
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-background rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#33b6db]/10 text-[#33b6db]">
                <item.icon size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mt-5 mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
