'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import roofing from '@/public/images/roofing.jpg'
import plumbingImage from '@/public/images/plumbing.jpg'
import paving from '@/public/images/paving.jpg'
import painting from '@/public/images/painting.jpg'
import ceiling from '@/public/images/ceiling.jpg'
import renovations from '@/public/images/renovations.jpg'
import Image from 'next/image'

const services = [
  {
    title: 'Roofing',
    description:
      'We do all kinds of roofing such as roof tiles, roof sheet and roof erection with professional quality and attention to detail.',
    image: roofing,
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
      'We offer a wide range of plumbing services including plumbing maintenance and repairs with reliable and efficient service.',
    image: plumbingImage,
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
      'We will help you complete a home with a paved driveway, or you need to redo your existing paving with quality materials.',
    image: paving,
    features: [
      'Driveway Paving',
      'Existing Paving Repair',
      'Quality Materials',
      'Professional Finish',
    ],
  },
  {
    title: 'Tiling and Painting',
    description:
      'We offer tiling and painting services to private, commercial and industrial clients with excellent craftsmanship.',
    image: painting,
    features: [
      'Private Clients',
      'Commercial Projects',
      'Industrial Services',
      'Professional Quality',
    ],
  },
  {
    title: 'Ceiling Installation',
    description:
      'We offer ceiling installation services, and we offer professional service to make any repairs to existing ceiling.',
    image: ceiling,
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
      'We can help you renovate your home interior or exterior with comprehensive renovation solutions.',
    image: renovations,
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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block p-2 bg-primary/10 rounded-full mb-4">
            <div className="w-12 h-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-construction mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional construction and plumbing services delivered with
            expertise and dedication
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/50 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-construction rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-6 h-6 bg-construction-foreground rounded-full"></div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary mb-3 group-hover:text-construction transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm font-medium text-foreground"
                    >
                      <div className="w-3 h-3 bg-construction rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
