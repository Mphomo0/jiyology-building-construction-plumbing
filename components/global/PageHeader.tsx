import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface PageHeaderProps {
  title: string
  subtitle: string
  image: string
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 overflow-hidden" aria-label={title}>
      <div className="absolute inset-0">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-linear-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-[#33b6db]/10 blur-3xl animate-pulse opacity-10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-neutral-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4" />
              </li>
              <li className="text-white font-medium" aria-current="page">
                {title}
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}
