export const SITE_URL = 'https://www.jiyology.co.za'
export const SITE_NAME = 'Jiyology Building Construction & Plumbing'
export const SITE_DESCRIPTION =
  'Construction and plumbing experts in Soweto and Johannesburg. Roofing, renovations, tiling, paving, ceiling installation. SABS approved, BEE Level 1.'
export const SITE_LOGO = 'https://ik.imagekit.io/i6f6omrki/logo.png'
export const SITE_OG_IMAGE = '/images/hero-image.jpg'

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
    postalCode: '1868',
    addressCountry: 'ZA',
  },
  geo: {
    latitude: -26.2440811,
    longitude: 27.7709155,
  },
  sameAs: [
    'https://web.facebook.com/profile.php?id=100046841814394',
    'https://www.google.com/maps/place/?q=place_id:ChIJBc4R8EKjlR4REQJPKpFcSJU',
  ],
  openingHours: ['Mo-Fr 08:00-17:00', 'Sa 08:00-13:00'],
  priceRange: '$$',
}

export function siteSpineLdJson() {
  const org = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#org`,
    name: ORGANIZATION.name,
    url: SITE_URL,
    logo: SITE_LOGO,
    description:
      'Professional construction and plumbing services in Soweto, Johannesburg. Roofing, plumbing, tiling, paving, ceiling installation, and home renovations.',
    sameAs: ORGANIZATION.sameAs,
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      '@id': `${SITE_URL}/#org`,
    },
  }

  const local = localBusinessLdJson()

  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: SITE_URL },
  ])

  return [org, website, local, breadcrumb]
}

export function localBusinessLdJson() {
  return {
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: ORGANIZATION.name,
    url: SITE_URL,
    telephone: ORGANIZATION.telephone,
    email: ORGANIZATION.email,
    image: `${SITE_URL}${SITE_OG_IMAGE}`,
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
      { '@type': 'City', name: 'Protea Glen' },
      { '@type': 'City', name: 'Dobsonville' },
      { '@type': 'City', name: 'Diepkloof' },
      { '@type': 'City', name: 'Pimville' },
      { '@type': 'City', name: 'Meadowlands' },
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Emdeni' },
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
            description: 'Professional roofing including roof tiles, roof sheets, and roof erection',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plumbing Services',
            description: 'Complete plumbing maintenance, repairs, and installation services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Renovation',
            description: 'Interior and exterior home renovation and remodeling services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tiling and Painting',
            description: 'Professional tiling and painting for residential, commercial, and industrial clients',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Paving Services',
            description: 'Driveway paving, patio paving, and existing paving repair',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ceiling Installation',
            description: 'New ceiling installation and ceiling repair services',
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
      '@id': `${SITE_URL}/#org`,
    },
    areaServed: service.areaServed
      ? { '@type': 'Place', name: service.areaServed }
      : undefined,
  }
}

export function personLdJson(name: string, jobTitle: string, description: string, image?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    image,
    worksFor: { '@id': `${SITE_URL}/#org` },
  }
}

export function reviewLdJson(reviews: { author: string; body: string; rating: number; date: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: reviews.map((r, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        reviewBody: r.body,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: '5',
        },
        datePublished: r.date,
        itemReviewed: { '@id': `${SITE_URL}/#local-business` },
      },
    })),
  }
}

export function imageGalleryLdJson(images: { url: string; caption: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    image: images.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: img.url,
      caption: img.caption,
    })),
  }
}

export function blogLdJson(article: {
  title: string
  description: string
  body: string
  datePublished: string
  dateModified: string
  author: string
  url: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    articleBody: article.body,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    image: article.image ?? `${SITE_URL}${SITE_OG_IMAGE}`,
    publisher: {
      '@type': 'Organization',
      name: ORGANIZATION.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  }
}

export function locationServiceLdJson(area: string, url: string) {
  const services = [
    'Roofing', 'Plumbing', 'Home Renovation', 'Construction',
    'Paving', 'Tiling and Painting', 'Ceiling Installation', 'Emergency Plumbing',
  ]
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: ORGANIZATION.name,
    url,
    telephone: ORGANIZATION.telephone,
    areaServed: { '@type': 'Place', name: area },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Construction and Plumbing Services in ${area}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s },
      })),
    },
  }
}

export function aggregateRatingLdJson(ratingValue: number, reviewCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#local-business`,
    name: ORGANIZATION.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingValue.toFixed(1),
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
  }
}

export function breadcrumbLdJson(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
