import React from 'react'
import ContactForm from './ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(011) 931 0157',
    description: 'Call us for immediate assistance',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'vusi@jiyology.co.za or vusijiya26@gmail.com',
    description: 'Send us your project details',
  },
  {
    icon: MapPin,
    title: 'Service Areas',
    details: 'Local & Surrounding Areas',
    description: 'We serve the entire metropolitan area',
  },
]

export default function Address() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-construction mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to start your construction or plumbing project? Contact us
              today for a free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <ContactForm />
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {info.title}
                        </h3>
                        <p className="text-xl font-semibold text-primary mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary text-primary-foreground border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-semibold">Closed</span>
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
