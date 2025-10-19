import React from 'react'

type MapSectionProps = {
  embedUrl: string
  width?: string | number
  height?: string | number
}

export default function MapSection({
  embedUrl,
  width = '100%',
  height = '100%',
}: MapSectionProps) {
  return (
    <div className="map-container" style={{ width, height }}>
      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
