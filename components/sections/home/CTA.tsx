import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 bg-[#33b6db]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="p-12 md:p-16 text-center">
            <div className="inline-block p-4 bg-black text-whte rounded-full mb-6">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed opacity-95">
              Get in touch with our expert team today for a free consultation
              and quote. We&lsquo;re here to help bring your construction and
              plumbing projects to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-black hover:bg-white text-white hover:text-black text-lg px-10 py-6 w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-black hover:text-white text-lg px-10 py-6 w-full sm:w-auto"
                asChild
              >
                <a href="tel:5551234567">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
