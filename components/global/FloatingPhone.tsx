import { Phone } from 'lucide-react'

export default function FloatingPhone() {
  return (
    <a
      href="tel:+27119310157"
      aria-label="Call Jiyology now"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#33b6db] text-white shadow-lg shadow-[#33b6db]/40 hover:bg-[#2aa8cc] hover:scale-110 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#33b6db]/50"
    >
      <Phone className="w-6 h-6" strokeWidth={2.5} />
    </a>
  )
}
