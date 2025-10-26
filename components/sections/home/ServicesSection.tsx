import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HomeIcon, Wrench, Shield } from 'lucide-react'

const featuredServices = [
  {
    icon: HomeIcon,
    title: 'Roofing',
    description:
      'We do all kinds of roofing such as roof tiles, roof sheet and roof erection.',
  },
  {
    icon: Wrench,
    title: 'Plumbing',
    description:
      'We offer a wide range of plumbing services including plumbing maintanance and repairs.',
  },
  {
    icon: Shield,
    title: 'Home Renovation',
    description: 'We can help you renovation your home interior or exterior.',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-construction mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional construction and plumbing services delivered with
              expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-500 hover:scale-105  shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-20 h-20 bg-[#33b6db] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <service.icon className="w-10 h-10 text-black" />
                  </div>
                  <CardTitle className="text-2xl font-bold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-neutral-950 hover:bg-[#33b6db] p-6 w-full sm:w-auto"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
