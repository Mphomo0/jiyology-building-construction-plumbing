'use client'

import { motion } from 'framer-motion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Check } from 'lucide-react'

const services = [
  {
    title: 'Roofing',
    description:
      'Complete roofing solutions including roof tiles, roof sheets, and professional roof erection with quality materials and expert installation.',
    image: 'https://ik.imagekit.io/i6f6omrki/roofing.jpg',
    features: [
      'Roof Tiles',
      'Roof Sheets',
      'Roof Erection',
      'Professional Installation',
    ],
  },
  {
    title: 'Plumbing Services',
    description:
      'Comprehensive plumbing services including maintenance, repairs, installations, and emergency callouts with reliable and efficient service.',
    image: 'https://ik.imagekit.io/i6f6omrki/plumbing.jpg',
    features: [
      'Maintenance & Repairs',
      'Installation Services',
      'Emergency Plumbing',
      'Quality Fixtures',
    ],
  },
  {
    title: 'Paving',
    description:
      'Professional paving for driveways, patios, and walkways. We also repair and restore existing paving with quality materials.',
    image: 'https://ik.imagekit.io/i6f6omrki/paving.jpg',
    features: [
      'Driveway Paving',
      'Patio & Walkway Paving',
      'Quality Materials',
      'Professional Finish',
    ],
  },
  {
    title: 'Tiling and Painting',
    description:
      'Expert tiling and painting services for residential, commercial, and industrial clients with excellent craftsmanship and attention to detail.',
    image: 'https://ik.imagekit.io/i6f6omrki/painting.jpg',
    features: [
      'Residential Projects',
      'Commercial Projects',
      'Industrial Services',
      'Professional Quality',
    ],
  },
  {
    title: 'Ceiling Installation',
    description:
      'Professional ceiling installation for new builds and repairs to existing ceilings. Quality workmanship guaranteed on every project.',
    image: 'https://ik.imagekit.io/i6f6omrki/ceiling.jpg',
    features: [
      'New Installations',
      'Ceiling Repairs',
      'Professional Service',
      'Quality Workmanship',
    ],
  },
  {
    title: 'Home Renovation',
    description:
      'Comprehensive interior and exterior home renovation solutions. From single room updates to full home transformations.',
    image: 'https://ik.imagekit.io/i6f6omrki/renovations.jpg',
    features: [
      'Interior Renovation',
      'Exterior Renovation',
      'Complete Solutions',
      'Quality Results',
    ],
  },
]

export default function MainServices() {
  return (
    <section className="py-24 bg-muted/30" aria-labelledby="all-services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-3 block">
            Complete Solutions
          </span>
          <h2
            id="all-services-heading"
            className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
          >
            All Our Services
          </h2>
          <div className="w-16 h-1 bg-[#33b6db] mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From roof to foundation, we handle every aspect of your construction
            and plumbing needs with SABS-approved materials and professional
            expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="group h-full overflow-hidden border-border/60 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={`${service.image}?tr=w-600,h-400,q-80,f-auto`}
                    width={600}
                    height={400}
                    alt={`${service.title} service by Jiyology Construction`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[#33b6db] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm font-medium text-foreground"
                      >
                        <Check className="w-4 h-4 text-[#33b6db] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
