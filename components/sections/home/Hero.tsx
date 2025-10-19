import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-4 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            Jiyology
          </h1>
          <div className="w-24 h-1 bg-construction mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-3xl mb-6 font-medium">
            Building Construction & Plumbing
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Client-Focused Building and Plumbing Solutions – At Jiyology, we
            treat every client with respect, professionalism, and care. Our
            value-added services in construction, plumbing, renovations,
            roofing, and tiling ensure reliable results and satisfied clients
            every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-neutral-950 text-white hover:bg-[#33b6db] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-white text-black hover:bg-text-black hover:text-white hover:bg-neutral-950  transition-all duration-300 hover:scale-105"
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-construction/20 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float animation-delay-1000 hidden lg:block"></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-construction/30 rounded-full animate-float animation-delay-2000 hidden lg:block"></div>
      </div>
    </section>
  )
}
