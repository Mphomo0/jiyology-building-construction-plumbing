import { NextRequest } from 'next/server'
import { submitUrl, submitBatch, submitSitemap } from '@/lib/indexnow'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (body.urls && Array.isArray(body.urls)) {
      const results = await submitBatch(body.urls)
      return Response.json({ results })
    }

    return Response.json({ error: 'Provide { urls: string[] }' }, { status: 400 })
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 })
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')
  const sitemap = searchParams.get('sitemap')

  if (sitemap === 'true') {
    const results = await submitSitemap()
    return Response.json({ results })
  }

  if (url) {
    const results = await submitUrl(url)
    return Response.json({ results })
  }

  return Response.json({
    usage: {
      GET: {
        '?url=https://...': 'Submit a single URL',
        '?sitemap=true': 'Submit the sitemap',
      },
      POST: {
        body: '{"urls": ["https://...", "https://..."]}',
      },
    },
  })
}
