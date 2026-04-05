'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqLdJson } from '@/lib/structured-data'

const faqs = [
  {
    q: 'What areas do you serve for construction and plumbing?',
    a: 'We primarily serve Soweto, Johannesburg, and the greater Gauteng metropolitan area. Our team is equipped to handle projects across the region, from residential renovations to commercial construction.',
  },
  {
    q: 'Are your construction materials SABS approved?',
    a: 'Yes, we exclusively use SABS (South African Bureau of Standards) approved products and materials. This ensures every project meets the highest quality and safety standards in South Africa.',
  },
  {
    q: 'How do I get a free quote for my project?',
    a: 'You can request a free quote by calling us at (011) 931 0157, emailing vusi@jiyology.co.za, or filling out the contact form on our website. We typically respond within one business day.',
  },
  {
    q: 'Is Jiyology a BEE compliant company?',
    a: 'Yes, Jiyology is a Level One 135% BEE compliant company, 50% black woman owned. We are committed to transformation and are an equal opportunity employer.',
  },
  {
    q: 'What types of roofing do you install?',
    a: 'We install all types of roofing including roof tiles, roof sheets (IBR, corrugated), and complete roof erection. We also handle roof repairs and maintenance for existing structures.',
  },
  {
    q: 'Do you handle emergency plumbing repairs?',
    a: 'Yes, we offer emergency plumbing services including burst pipe repairs, blocked drains, geyser repairs, and other urgent plumbing issues in the Soweto and Johannesburg area.',
  },
  {
    q: 'How long does a typical home renovation take?',
    a: 'Project timelines vary based on scope. A single room renovation may take 1-2 weeks, while a full home renovation can take 4-8 weeks. We provide detailed timelines during the quoting process.',
  },
  {
    q: 'What are your business hours?',
    a: 'We operate Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 8:00 AM to 1:00 PM. We are closed on Sundays and public holidays.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ldJson = faqLdJson(faqs)

  return (
    <section className="py-24 bg-muted/30" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold uppercase tracking-widest text-[#33b6db] mb-3"
            >
              FAQ
            </motion.p>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto"
            >
              Everything you need to know about our construction and plumbing
              services in Soweto and Johannesburg.
            </motion.p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-base font-semibold text-foreground pr-8">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
