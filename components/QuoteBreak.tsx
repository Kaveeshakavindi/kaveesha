'use client'

import { useEffect, useRef } from 'react'

export default function QuoteBreak() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <section ref={ref} className="py-32 px-6 lg:px-12 max-w-4xl mx-auto opacity-0 text-center space-y-8">
      <blockquote className="font-serif text-4xl lg:text-5xl italic font-light text-[#171717] leading-relaxed">
        "All that we are is the result of what we have thought."
      </blockquote>

      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
          — Gautama Buddha
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
          [ON THOUGHT & COGNITION]
        </p>
      </div>
    </section>
  )
}
