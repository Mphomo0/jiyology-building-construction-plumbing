export const SITE_URL = 'https://www.jiyology.co.za'
export const SITE_NAME = 'Jiyology Building Construction & Plumbing'
export const SITE_DESCRIPTION =
  'Professional construction and plumbing services in Soweto, Johannesburg. Roofing, plumbing, tiling, paving, ceiling installation, and home renovations. SABS approved, BEE Level 1 compliant.'
export const SITE_LOGO = '/images/logo.png'
export const SITE_OG_IMAGE = '/images/og-image.jpg'

export const ORGANIZATION = {
  name: 'Jiyology Building Construction and Plumbing Pty Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}${SITE_LOGO}`,
  telephone: '+27119310157',
  email: 'vusi@jiyology.co.za',
  address: {
    streetAddress: '65 Tsemeli St, Ext 2, Emdeni South',
    addressLocality: 'Soweto',
    addressRegion: 'Gauteng',
    postalCode: '1861',
    addressCountry: 'ZA',
  },
  geo: {
    latitude: -26.2440811,
    longitude: 27.7709155,
  },
  sameAs: ['https://web.facebook.com/profile.php?id=100046841814394'],
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 08:00-13:00'],
  priceRange: '$$',
}

export function organizationLdJson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}#organization`,
    name: ORGANIZATION.name,
    url: SITE_URL,
    logo: ORGANIZATION.logo,
    image: ORGANIZATION.logo,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressRegion: ORGANIZATION.address.addressRegion,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ORGANIZATION.geo.latitude,
      longitude: ORGANIZATION.geo.longitude,
    },
    sameAs: ORGANIZATION.sameAs,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    priceRange: ORGANIZATION.priceRange,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: ORGANIZATION.geo.latitude,
        longitude: ORGANIZATION.geo.longitude,
      },
      geoRadius: '50000',
    },
  }
}

export function websiteLdJson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  }
}

export function localBusinessLdJson() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': `${SITE_URL}#local-business`,
    name: ORGANIZATION.name,
    url: SITE_URL,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORGANIZATION.address.streetAddress,
      addressLocality: ORGANIZATION.address.addressLocality,
      addressRegion: ORGANIZATION.address.addressRegion,
      postalCode: ORGANIZATION.address.postalCode,
      addressCountry: ORGANIZATION.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ORGANIZATION.geo.latitude,
      longitude: ORGANIZATION.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Soweto' },
      { '@type': 'City', name: 'Johannesburg' },
      { '@type': 'State', name: 'Gauteng' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Construction and Plumbing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Roofing Services',
            description:
              'Professional roofing including roof tiles, roof sheets, and roof erection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Services',
            description:
              'Complete plumbing maintenance, repairs, and installation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Renovation',
            description:
              'Interior and exterior home renovation and remodeling services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tiling and Painting',
            description:
              'Professional tiling and painting for residential, commercial, and industrial clients',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paving Services',
            description:
              'Driveway paving, patio paving, and existing paving repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceiling Installation',
            description:
              'New ceiling installation and ceiling repair services',
          },
        },
      ],
    },
  }
}

export function faqLdJson(
  questions: { q: string; a: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

export function serviceLdJson(service: {
  name: string
  description: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@id': `${SITE_URL}#organization`,
    },
    areaServed: service.areaServed
      ? { '@type': 'Place', name: service.areaServed }
      : undefined,
  }
}
