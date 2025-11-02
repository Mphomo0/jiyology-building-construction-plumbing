import { NextResponse } from 'next/server'

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

    const files = await res.json()

    // Transform data for frontend
    const images = files.map((file: any) => ({
      id: file.fileId,
      title: file.name.replace(/\.[^/.]+$/, ''), // remove file extension
      src: file.url,
    }))

    return NextResponse.json(images)
  } catch (error: any) {
    console.error('Error fetching gallery:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
