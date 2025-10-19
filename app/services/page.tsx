import React from 'react'
import PageHeader from '@/components/global/PageHeader'
import CTA from '@/components/sections/home/CTA'
import MainServices from '@/components/sections/services/MainServices'

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Discover our wide range of construction and plumbing services tailored to meet your needs."
        image="/images/pageHeaderImage.jpg"
      />
      <MainServices />
      <CTA />
    </>
  )
}
