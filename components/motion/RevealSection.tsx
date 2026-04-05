'use client'

import { motion } from 'framer-motion'
import { type ReactNode } from 'react'

interface RevealSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
}

export default function RevealSection({
  children,
  className = '',
  delay = 0,
  id,
}: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
