export function og(opts: {
  title: string
  description: string
  url: string
  type?: 'website' | 'article'
  images?: { url: string; width?: number; height?: number; alt?: string }[]
}) {
  return {
    type: (opts.type ?? 'website') as 'website' | 'article',
    locale: 'en_ZA' as const,
    siteName: 'Jiyology Construction & Plumbing' as const,
    title: opts.title,
    description: opts.description,
    url: opts.url,
    images:
      opts.images ?? [
        {
          url: '/images/hero-image.jpg',
          alt: 'Jiyology Building Construction & Plumbing — Soweto',
        },
      ],
  }
}

export function twitter(opts: { title: string; description: string; image?: string }) {
  return {
    card: 'summary_large_image' as const,
    title: opts.title,
    description: opts.description,
    images: [opts.image ?? '/images/hero-image.jpg'],
  }
}
