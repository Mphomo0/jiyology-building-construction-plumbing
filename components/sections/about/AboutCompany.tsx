'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: 'SABS Approved Products',
    description:
      'We only supply and utilise high quality products approved by SABS, ensuring excellence in every project.',
  },
  {
    title: 'BEE Level One Compliant',
    description:
      'We are a Level One 135% BEE compliant company, 50% black woman owned and an equal opportunity employer.',
  },
  {
    title: 'Professional Team',
    description:
      'We have a well-trained and competent team who continue striving to learn and keep up with the changing world.',
  },
  {
    title: 'We Focus On You',
    description:
      'We treat our clients as we would like to be treated, providing value-added services to each client.',
  },
]

export default function AboutCompany() {
  return (
    <section className="py-24 bg-background" aria-labelledby="about-company-heading">
      <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db]">
              About Us
            </span>
            <h2
              id="about-company-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 tracking-tight leading-tight"
            >
              Building Dreams, Delivering Excellence
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Jiyology Building Construction & Plumbing is the brainchild and
              long-time dream of Vusi Jiya and Lerato Jiya, who are passionate
              about helping customers and delivering quality service. Their
              vision was to build a company that would be a benchmark and leader
              in both the building construction and plumbing industry.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl border border-border/60 hover:border-[#33b6db]/30 transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#33b6db] mb-2" />
                  <h3 className="text-base font-bold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://ik.imagekit.io/i6f6omrki/Gallery/IMG-20201018-WA0024.jpg?updatedAt=1762082551293"
                alt="Jiyology construction team working on a building project"
                width={600}
                height={700}
                className="object-cover w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
