import React from 'react'
import PageHeader from '@/components/global/PageHeader'
import AboutCompany from '@/components/sections/about/AboutCompany'
import Vision from '@/components/sections/about/Vision'
import CTA from '@/components/sections/home/CTA'

export default function About() {
  return (
    <>
      <PageHeader
        title="About"
        subtitle="Getting to know us"
        image="/images/pageHeaderImage.jpg"
      />
      <AboutCompany />
      <Vision />
      <CTA />
    </>
  )
}
