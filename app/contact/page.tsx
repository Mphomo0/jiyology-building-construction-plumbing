import Address from '@/components/sections/contact/Address'
import MapSection from '@/components/sections/contact/MapSection'
import PageHeader from '@/components/global/PageHeader'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        subtitle="We're here to help you with quality services and expert solutions.  "
        image="/images/pageHeaderImage.jpg"
      />
      <div className="h-[550px]">
        <MapSection embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57256.66515439525!2d27.770915507047622!3d-26.244081100568184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a342f011ce05%3A0x95485c912a4f0211!2sJiyology%20Building%20Construction%20and%20Plumbing%20Pty%20Ltd!5e0!3m2!1sen!2sza!4v1760792221526!5m2!1sen!2sza" />
      </div>
      <Address />
    </>
  )
}
