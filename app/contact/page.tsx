import type { Metadata } from 'next'
import { og } from '@/lib/metadata'
import Address from '@/components/sections/contact/Address'
import MapSection from '@/components/sections/contact/MapSection'
import PageHeader from '@/components/global/PageHeader'
import { faqLdJson, breadcrumbLdJson } from '@/lib/structured-data'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get a free construction or plumbing quote. Call (011) 931 0157 or email vusi@jiyology.co.za. Based in Emdeni South, Soweto. Open Mon-Fri 8AM-5PM.',
  openGraph: og({
    title: 'Contact Us | Jiyology Construction & Plumbing',
    description:
      'Get a free construction or plumbing quote. Call (011) 931 0157 or email vusi@jiyology.co.za. Based in Emdeni South, Soweto. Open Mon-Fri 8AM-5PM.',
    url: 'https://www.jiyology.co.za/contact',
    images: [{ url: '/images/hero-image.jpg', width: 1200, height: 630, alt: 'Jiyology Building Construction & Plumbing' }],
  }),
  alternates: {
    canonical: 'https://www.jiyology.co.za/contact',
  },
}

const contactFaqs = [
  {
    q: 'How do I get a free quote from Jiyology?',
    a: 'You can get a free quote by calling us at (011) 931 0157, emailing vusi@jiyology.co.za, or filling out the contact form on our website. We respond promptly to all enquiries.',
  },
  {
    q: 'What are Jiyology business hours?',
    a: 'We are open Monday to Friday from 8:00 AM to 5:00 PM, and Saturday from 8:00 AM to 1:00 PM. We are closed on Sundays and public holidays.',
  },
  {
    q: 'Where is Jiyology located?',
    a: 'Jiyology is located at 65 Tsemeli St, Ext 2, Emdeni South, Soweto, 1861. We serve the entire Johannesburg metropolitan area and surrounding regions.',
  },
]

export default function ContactPage() {
  const ldJson = faqLdJson(contactFaqs)
  const breadcrumb = breadcrumbLdJson([
    { name: 'Home', url: 'https://www.jiyology.co.za/' },
    { name: 'Contact', url: 'https://www.jiyology.co.za/contact' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <PageHeader
        title="Contact"
        subtitle="We're here to help you with quality services and expert solutions."
        image="/images/pageHeaderImage.jpg"
      />
      <div className="h-137.5">
        <MapSection embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57256.66515439525!2d27.770915507047622!3d-26.244081100568184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a342f011ce05%3A0x95485c912a4f0211!2sJiyology%20Building%20Construction%20and%20Plumbing%20Pty%20Ltd!5e0!3m2!1sen!2sza!4v1760792221526!5m2!1sen!2sza" />
      </div>
      <Address />
    </>
  )
}
