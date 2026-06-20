const INDEXNOW_KEY = 'dgny43xypje76v2q92jjtse31kbjdq9w'
const INDEXNOW_ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://searchadvisor.naver.com/indexnow',
  'https://yandex.com/indexnow',
  'https://www.seznam.cz/indexnow',
  'https://www.elastic.co/indexnow',
]

const SITE_HOST = 'www.jiyology.co.za'

interface IndexNowPayload {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

async function submit(payload: IndexNowPayload): Promise<{ ok: boolean; status: number; body: string }[]> {
  return Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        })
        const body = await res.text()
        return { ok: res.ok, status: res.status, body }
      } catch {
        return { ok: false, status: 0, body: 'Network error' }
      }
    })
  )
}

export async function submitUrl(url: string) {
  return submit({
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: [url],
  })
}

export async function submitBatch(urls: string[]) {
  const batchSize = 10000
  const results = []
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize)
    const res = await submit({
      host: SITE_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
      urlList: batch,
    })
    results.push(...res)
  }
  return results
}

export async function submitSitemap() {
  return submit({
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: [`https://${SITE_HOST}/sitemap.xml`],
  })
}

export { INDEXNOW_KEY }
