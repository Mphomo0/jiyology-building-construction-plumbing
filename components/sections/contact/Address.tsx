import React from 'react'
import ContactForm from './ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(011) 931 0157',
    description: 'Call us for immediate assistance',
    href: 'tel:+27119310157',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'vusi@jiyology.co.za',
    description: 'Send us your project details',
    href: 'mailto:vusi@jiyology.co.za',
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '65 Tsemeli St, Emdeni South',
    description: 'Soweto, 1861, Gauteng',
    href: 'https://maps.google.com/?q=Jiyology+Building+Construction+and+Plumbing+Pty+Ltd',
  },
]

export default function Address() {
  return (
    <section className="py-24 bg-muted/30" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#33b6db] mb-3 block">
              Get In Touch
            </span>
            <h2
              id="contact-heading"
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight"
            >
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-[#33b6db] mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your construction or plumbing project? Contact us
              today for a free consultation and quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ContactForm />
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="border-border/60 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-5">
                    <a
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-[#33b6db]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#33b6db]/20 transition-colors">
                        <info.icon className="w-6 h-6 text-[#33b6db]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-base font-medium text-[#33b6db] group-hover:underline">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {info.description}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-slate-950 text-white border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-[#33b6db]" />
                    <h3 className="text-lg font-bold">Business Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Saturday</span>
                      <span className="font-semibold">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-400">Sunday</span>
                      <span className="font-semibold text-red-400">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
