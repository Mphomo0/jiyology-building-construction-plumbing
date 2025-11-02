'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'

type GalleryItem = {
  id: string
  title: string
  src: string
}

export default function GallerySection() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        setGalleryItems(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load gallery:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen pt-16">
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                Our Gallery
              </h1>
              <div className="w-24 h-1 bg-construction mx-auto mb-6"></div>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our portfolio of completed projects showcasing quality
                craftsmanship.
              </p>
            </div>

            {loading ? (
              <p className="text-center text-muted-foreground">
                Loading gallery...
              </p>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-5 gap-6 space-y-6">
                {galleryItems.map((item, index) => (
                  <Card
                    key={item.id}
                    className="break-inside-avoid overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <CardContent className="p-0">
                      <div className=" w-full overflow-hidden">
                        <Image
                          src={`${item.src}?tr=q-80,f-auto`}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                          unoptimized
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
