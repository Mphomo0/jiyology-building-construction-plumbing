'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-19">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://ik.imagekit.io/i6f6omrki/logo.png?updatedAt=1762085106557?tr=w-100%,h-60,q-80,f-auto"
              alt="Jiyology Construction Logo"
              width={150}
              height={90}
              className="object-contain w-full h-auto"
              unoptimized
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-900 hover:text-neutral-800 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-900 hover:text-neutral-800 transition-colors duration-200"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-neutral-900 hover:text-neutral-800 transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="text-neutral-900 hover:text-neutral-800 transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/contact"
              className="text-neutral-900 hover:text-neutral-800 transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-neutral-950">
              <Phone className="w-4 h-4" />
              <span>
                <a href="tel:+27119310157">(011) 931 0157</a>
              </span>
            </div>
            <Button
              size="sm"
              className="shadow-md hover:shadow-lg transition-shadow duration-200"
              onClick={() => router.push('/contact')}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-left text-neutral-900 hover:text-neutral-800 transition-colors duration-200 py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-left text-neutral-900 hover:text-neutral-800 transition-colors duration-200 py-2"
              >
                About Us
              </Link>
              <Link
                href="/services"
                onClick={() => setIsOpen(false)}
                className="text-left text-neutral-900 hover:text-neutral-800 transition-colors duration-200 py-2"
              >
                Services
              </Link>
              <Link
                href="/gallery"
                onClick={() => setIsOpen(false)}
                className="text-left text-neutral-900 hover:text-neutral-800 transition-colors duration-200 py-2"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-left text-neutral-900 hover:text-neutral-800 transition-colors duration-200 py-2"
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border">
                <div className="flex items-center space-x-2 text-sm text-neutral-950 mb-3">
                  <Phone className="w-4 h-4" />
                  <span>
                    <a href="tel:+27119310157">(011) 931 0157</a>
                  </span>
                </div>
                <Button
                  size="sm"
                  className="shadow-md hover:shadow-lg transition-shadow duration-200 w-full"
                  onClick={() => router.push('/contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
