'use client'

import { useEffect, useState } from 'react'
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
import ArtGallery from '@/components/ArtGallery'

export default function Home() {

  return (
    <main className="min-h-screen bg-[#fcfbf9]">
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
      <ScrollReveal>
        <ArtGallery />
      </ScrollReveal>
      <Footer />
    </main>
  )
}
