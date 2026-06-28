import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
    </svg>
  )
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-neutral-300" role="contentinfo">
      <div className="container mx-auto px-4 pt-16 pb-8 lg:pt-24">
        <div className="grid grid-cols-2 gap-8 md:gap-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Image
              src="https://ik.imagekit.io/i6f6omrki/logo-2.png?updatedAt=1762085094516"
              alt="Jiyology Building Construction and Plumbing logo"
              width={140}
              height={70}
              className="brightness-0 invert"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
            <p className="mt-6 text-sm leading-relaxed text-neutral-400 max-w-xs">
              Trusted construction and plumbing company delivering reliable,
              high-quality services across residential and commercial projects
              in Soweto and Johannesburg.
            </p>
            <ul className="mt-6 flex gap-4">
              <li>
                <Link
                  href="https://web.facebook.com/profile.php?id=100046841814394"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#33b6db] hover:text-slate-950 transition-colors duration-200"
                  aria-label="Follow Jiyology on Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/?q=place_id:ChIJBc4R8EKjlR4REQJPKpFcSJU"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white hover:bg-[#33b6db] hover:text-slate-950 transition-colors duration-200"
                  aria-label="View Jiyology on Google Maps"
                >
                  <GoogleIcon className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/roofing"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Roofing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/plumbing"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Plumbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovations"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Home Renovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/construction"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Construction
                </Link>
              </li>
              <li>
                <Link
                  href="/services/paving"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Paving
                </Link>
              </li>
              <li>
                <Link
                  href="/services/tiling-painting"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Tiling & Painting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ceiling-installation"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Ceiling Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/emergency-plumbing"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Emergency Plumbing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Service Areas
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/locations/soweto"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Soweto
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/protea-glen"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Protea Glen
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/dobsonville"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Dobsonville
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/diepkloof"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Diepkloof
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/pimville"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Pimville
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/meadowlands"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Meadowlands
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/orlando"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Orlando
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/emdeni"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Emdeni
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/johannesburg"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  Johannesburg
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#33b6db] mt-0.5 shrink-0" />
                <a
                  href="mailto:vusi@jiyology.co.za"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  vusi@jiyology.co.za
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#33b6db] mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+27119310157"
                    className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                  >
                    (011) 931 0157
                  </a>
                  <a
                    href="tel:+27731294401"
                    className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                  >
                    073 129 4401
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#33b6db] mt-0.5 shrink-0" />
                <a
                  href="https://www.google.com/maps/place/?q=place_id:ChIJBc4R8EKjlR4REQJPKpFcSJU"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                >
                  <address className="not-italic">
                    65 Tsemeli St, Ext 2, Emdeni South, Soweto, 1868
                  </address>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>All rights reserved.</p>
            <p>
              &copy; {new Date().getFullYear()} Jiyology Building Construction &
              Plumbing. Made by{' '}
              <a
                href="https://www.nostalgic-studio.co.za"
                className="text-neutral-400 hover:text-[#33b6db] transition-colors"
                rel="noopener noreferrer"
                target="_blank"
              >
                Nostalgic Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
