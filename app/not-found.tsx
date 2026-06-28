import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Phone } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found | Jiyology Construction & Plumbing',
  description: 'The page you are looking for could not be found. Return to Jiyology Construction & Plumbing homepage.',
}

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-[#33b6db] text-8xl font-bold tracking-tighter mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#33b6db] hover:bg-[#2aa8cc] text-slate-950 font-semibold px-8 py-6 text-base"
            asChild
          >
            <Link href="/">
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold"
            asChild
          >
            <Link href="/contact">
              <Phone className="mr-2 w-5 h-5" />
              Contact Us
            </Link>
          </Button>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About Us', href: '/about' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Blog', href: '/blog' },
              { label: 'FAQ', href: '/faq' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#33b6db] hover:underline font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
