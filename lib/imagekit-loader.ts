'use client'

const IMAGEKIT_HOST = 'https://ik.imagekit.io'

// Serves images straight from ImageKit's CDN with its own transformations,
// bypassing Vercel Image Optimization (billed per transformation/cache write).
export default function imageKitLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  if (src.startsWith(IMAGEKIT_HOST)) {
    const url = new URL(src)
    url.searchParams.set('tr', `w-${width},q-${quality ?? 75},f-auto,c-at_max`)
    return url.toString()
  }
  // Local /public images are served as static assets without optimization.
  return src
}
