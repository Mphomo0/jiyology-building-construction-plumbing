import { NextResponse } from 'next/server'

interface ImageKitFile {
  fileId: string
  name: string
  url: string
}

export async function GET() {
  try {
    const folderPath = '/Gallery' // your ImageKit folder
    const res = await fetch(
      `https://api.imagekit.io/v1/files?path=${encodeURIComponent(folderPath)}`,
      {
        headers: {
          Authorization:
            'Basic ' +
            Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ':').toString(
              'base64'
            ),
        },
      }
    )

    if (!res.ok) {
      throw new Error(`ImageKit API error: ${res.status}`)
    }

    const files: ImageKitFile[] = await res.json()

    // Transform data for frontend
    const images = files.map((file) => ({
      id: file.fileId,
      title: file.name.replace(/\.[^/.]+$/, ''), // remove file extension
      src: file.url,
    }))

    return NextResponse.json(images)
  } catch (error) {
    console.error('Error fetching gallery:', error)
    const message =
      error instanceof Error ? error.message : String(error ?? 'Unknown error')
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
