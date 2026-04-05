'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="Jiyology Home">
            <Image
              src="https://ik.imagekit.io/i6f6omrki/logo.png?updatedAt=1762085106557"
              alt="Jiyology Building Construction and Plumbing logo"
              width={140}
              height={80}
              className="object-contain"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-[#33b6db] bg-[#33b6db]/5'
                    : 'text-neutral-700 hover:text-neutral-900 hover:bg-muted/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+27119310157"
              className="flex items-center space-x-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(011) 931 0157</span>
            </a>
            <Button
              size="sm"
              className="bg-neutral-950 hover:bg-[#33b6db] text-white shadow-sm"
              onClick={() => router.push('/contact')}
            >
              Get Quote
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-border/50 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-[#33b6db] bg-[#33b6db]/5'
                        : 'text-neutral-700 hover:bg-muted/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-border/50">
                  <a
                    href="tel:+27119310157"
                    className="flex items-center space-x-2 px-4 py-2 text-sm text-neutral-700"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(011) 931 0157</span>
                  </a>
                  <div className="px-4 pt-3">
                    <Button
                      size="sm"
                      className="w-full bg-neutral-950 hover:bg-[#33b6db]"
                      onClick={() => {
                        setIsOpen(false)
                        router.push('/contact')
                      }}
                    >
                      Get Quote
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
