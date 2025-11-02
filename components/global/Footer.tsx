import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-start sm:justify-start">
              <Image
                src="https://ik.imagekit.io/i6f6omrki/logo-2.png?updatedAt=1762085094516?tr=w-100%,h-60,q-80,f-auto"
                alt="Jiyology Building Construction & Plumbing Logo"
                width={150}
                height={80}
                className="w-auto h-auto"
                unoptimized
              />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-neutral-300 sm:max-w-xs sm:text-left">
              Jiyology is a trusted construction and plumbing company committed
              to delivering reliable, high-quality services across residential
              and commercial projects.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <Link
                href="https://web.facebook.com/profile.php?id=100046841814394"
                rel="noreferrer"
                target="_blank"
              >
                <li className="transition hover:opacity-75">
                  <span className="sr-only">Facebook</span>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white">
                    <Image
                      src="/images/facebook.svg"
                      alt="Facebook Icon"
                      width={20}
                      height={20}
                      className="w-6 h-6"
                    />
                  </div>
                </li>
              </Link>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-neutral-300">
                Quick Links
              </p>

              <ul className="mt-8 text-sm space-y-4">
                <li>
                  <Link
                    href="/"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Our Services
                  </Link>
                </li>

                <li>
                  <Link
                    href="/contact"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-neutral-300">
                Our Services
              </p>

              <ul className="mt-8 text-sm space-y-4">
                <li>
                  <Link
                    href="/services"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Roofing
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Plumbing Service
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Tiling and Painting
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services"
                    className="text-neutral-50 hover:text-teal-600"
                  >
                    Home Renovation
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-neutral-300">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <Mail className="text-white" size={16} />
                  <span className="flex-1 text-neutral-50 hover:text-teal-600">
                    {' '}
                    vusi@jiyology.co.za
                  </span>
                </li>

                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <Mail className="text-white" size={16} />
                  <span className="flex-1 text-neutral-50 hover:text-teal-600">
                    {' '}
                    vusijiya26@gmail.com
                  </span>
                </li>

                <li className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <Phone className="text-white" size={16} />
                  <span className="flex-1 text-neutral-50 hover:text-teal-600">
                    011 931 0157
                  </span>
                </li>

                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                  <MapPin className="text-white" size={16} />
                  <address className="-mt-0.5 flex-1 text-neutral-50 hover:text-teal-600">
                    Ext 2, 65 Tsemeli St, Emdeni South, Soweto, 1861
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Jiyology Building Construction &
              Plumbing. Made by
              <a href="https://www.nostalgic-studio.c.za"> Nostalgic Studio</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
