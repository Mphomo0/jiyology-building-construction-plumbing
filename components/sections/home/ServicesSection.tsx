'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Home, Wrench, Building2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const featuredServices = [
  {
    icon: Home,
    title: 'Roofing',
    href: '/services/roofing',
    description:
      'Complete roofing solutions including roof tiles, roof sheets, and professional roof erection.',
  },
  {
    icon: Wrench,
    title: 'Plumbing',
    href: '/services/plumbing',
    description:
      'Full plumbing services including maintenance, repairs, and emergency callouts.',
  },
  {
    icon: Building2,
    title: 'Home Renovation',
    href: '/services/renovations',
    description:
      'Transform your space with comprehensive interior and exterior renovation services.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-muted/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-4">
              What We Do
            </span>
            <h2
              id="services-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            >
              Our Core Services
            </h2>
            <div className="w-16 h-1 bg-[#33b6db] mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional construction and plumbing services delivered with
              expertise, quality materials, and a commitment to your satisfaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={service.href}>
                  <Card className="h-full border-border/60 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-14 h-14 bg-[#33b6db]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#33b6db]/20 transition-colors duration-300">
                        <service.icon className="w-7 h-7 text-[#33b6db]" />
                      </div>
                      <CardTitle className="text-xl font-bold">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-neutral-950 hover:bg-[#33b6db] text-white hover:text-white"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
