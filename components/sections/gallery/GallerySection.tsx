import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function GallerySection() {
  const galleryItems = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    height: [300, 400, 350, 450, 320, 380][i % 6], // Varied heights for masonry effect
  }))

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
                craftsmanship
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {galleryItems.map((item, index) => (
                <Card
                  key={item.id}
                  className="break-inside-avoid overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CardContent className="p-0">
                    <div
                      className="bg-muted flex items-center justify-center"
                      style={{ height: `${item.height}px` }}
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-construction/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <div className="w-8 h-8 bg-construction rounded-full"></div>
                        </div>
                        <p className="text-muted-foreground font-medium">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
