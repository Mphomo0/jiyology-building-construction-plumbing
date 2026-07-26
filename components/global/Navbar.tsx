'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type NavLink =
  | { href: string; label: string }
  | { label: string; dropdown: { href: string; label: string }[] }

const serviceLinks: { href: string; label: string }[] = [
  { href: '/services/roofing', label: 'Roofing' },
  { href: '/services/plumbing', label: 'Plumbing' },
  { href: '/services/renovations', label: 'Renovations' },
  { href: '/services/construction', label: 'Construction' },
  { href: '/services/paving', label: 'Paving' },
  { href: '/services/tiling-painting', label: 'Tiling & Painting' },
  { href: '/services/ceiling-installation', label: 'Ceiling Installation' },
  { href: '/services/emergency-plumbing', label: 'Emergency Plumbing' },
  { href: '/services/roof-repairs', label: 'Roof Repairs' },
  { href: '/services/geyser-installation', label: 'Geyser Installation' },
]

const locationLinks = [
  { href: '/locations/soweto', label: 'Soweto' },
  { href: '/locations/protea-glen', label: 'Protea Glen' },
  { href: '/locations/dobsonville', label: 'Dobsonville' },
  { href: '/locations/diepkloof', label: 'Diepkloof' },
  { href: '/locations/pimville', label: 'Pimville' },
  { href: '/locations/meadowlands', label: 'Meadowlands' },
  { href: '/locations/orlando', label: 'Orlando' },
  { href: '/locations/emdeni', label: 'Emdeni' },
  { href: '/locations/johannesburg', label: 'Johannesburg' },
]

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  {
    label: 'Services',
    dropdown: serviceLinks,
  },
  {
    label: 'Locations',
    dropdown: locationLinks,
  },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setOpenDropdown(null)
    setIsOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border/50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Jiyology Home"
          >
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

          <div
            className="hidden lg:flex items-center space-x-1"
            ref={dropdownRef}
          >
            {navLinks.map((link) => {
              if ('dropdown' in link && link.dropdown) {
                const isOpen = openDropdown === link.label
                const firstHref = link.dropdown[0]?.href || '/'
                return (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : link.label)
                      }
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        pathname.startsWith(firstHref.replace(/\/[^/]+$/, ''))
                          ? 'text-[#33b6db] bg-[#33b6db]/5'
                          : 'text-neutral-700 hover:text-neutral-900 hover:bg-muted/50'
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border/60 py-2 z-50"
                        >
                          {link.dropdown.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`block px-4 py-2.5 text-sm transition-colors ${
                                pathname === subLink.href
                                  ? 'text-[#33b6db] bg-[#33b6db]/5 font-medium'
                                  : 'text-neutral-700 hover:bg-[#33b6db]/5 hover:text-[#33b6db]'
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              }
              if (!('href' in link)) return null
              return (
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
              )
            })}
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
              asChild
            >
              <Link href="/contact">Get Quote</Link>
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
                {navLinks.map((link) => {
                  if ('dropdown' in link && link.dropdown) {
                    return (
                      <div key={link.label}>
                        <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {link.label}
                        </p>
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2.5 pl-8 rounded-lg text-base transition-colors ${
                              pathname === subLink.href
                                ? 'text-[#33b6db] bg-[#33b6db]/5'
                                : 'text-neutral-700 hover:bg-muted/50'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )
                  }
                  if (!('href' in link)) return null
                  return (
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
                  )
                })}
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
                      asChild
                    >
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        Get Quote
                      </Link>
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
