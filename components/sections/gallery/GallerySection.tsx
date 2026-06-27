'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

type GalleryItem = {
  id: string
  title: string
  src: string
}

export default function GallerySection({ items }: { items: GalleryItem[] }) {
  return (
    <section className="py-24 bg-background" aria-label="Project Gallery">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-3 block">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Project Gallery
            </h2>
            <div className="w-16 h-1 bg-[#33b6db] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of completed construction and plumbing
              projects showcasing quality craftsmanship across Soweto and
              Johannesburg.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`${item.src}?tr=w-600,q-80,f-auto`}
                        alt={`Jiyology ${item.title} project`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-foreground capitalize">
                        {item.title.replace(/[-_]/g, ' ')}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
