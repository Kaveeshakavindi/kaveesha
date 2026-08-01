'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuoteBreak from '@/components/QuoteBreak'
import WorkGrid from '@/components/WorkGrid'
import ExperienceTimeline from '@/components/ExperienceTimeline'
import CoreCapabilities from '@/components/CoreCapabilities'
import PublicationsWriting from '@/components/PublicationsWriting'
import EducationCertifications from '@/components/EducationCertifications'
import Leadership from '@/components/Leadership'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-[#fcfbf9]">
      <Header />
      <Hero />
      <QuoteBreak />
      <ScrollReveal>
        <WorkGrid />
      </ScrollReveal>
      <ScrollReveal>
        <ExperienceTimeline />
      </ScrollReveal>
      <ScrollReveal>
        <CoreCapabilities />
      </ScrollReveal>
      <ScrollReveal>
        <PublicationsWriting />
      </ScrollReveal>
      <ScrollReveal>
        <EducationCertifications />
      </ScrollReveal>
      <ScrollReveal>
        <Leadership />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
