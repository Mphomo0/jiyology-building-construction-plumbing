import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE: TEXT CONTENT */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                About Jiyology
              </h2>
              <div className="w-24 h-1 bg-construction mb-6"></div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jiyology building construction & plumbing is a brainchild and
                long-time dream of
                <span className="font-semibold text-primary">
                  {' '}
                  Vusi Jiya and Lerato Jiya
                </span>{' '}
                who are very passionate about helping and dealing with
                customers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We strive to be a benchmark and leader in the building
                construction and plumbing industry, treating our clients as we
                would like to be treated.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-[#33b6db] hover:text-white transition-all duration-300 hover:scale-105 p-6 w-full sm:w-auto"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* RIGHT SIDE: IMAGE WITH STYLED BORDER */}
            <div className="relative w-full max-w-md mx-auto animate-slide-in-left">
              <div className="p-4 border-4 border-construction rounded-xl">
                <Image
                  src="/images/about-image.jpg" // Change to your actual image path
                  alt="About Jiyology"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
