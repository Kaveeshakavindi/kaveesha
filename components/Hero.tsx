'use client'

import { useEffect, useState } from 'react'
import { User } from 'lucide-react'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen pt-20 pb-32 px-6 lg:px-12 overflow-hidden flex flex-col justify-center items-center">
      {/* Mesh Gradient Background */}
      <div
        className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(67, 56, 202, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)`,
        }}
      />

      <div className="relative z-10 max-w-2xl text-center space-y-12">
        {/* Profile Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center">
            <User size={80} className="text-[#d4d4d4]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Subtitle */}
        <div>
          <p className="font-sans text-base lg:text-lg text-[#737373] tracking-wide">
            Researcher | Human Centered AI | Theory of Mind
          </p>
        </div>

        {/* Intro Text */}
        <div className="space-y-6">
          <p className="font-sans text-base leading-relaxed text-[#171717] text-pretty">
            Hi! I&apos;m Kaveesha Fernando, a researcher working on Human-Centered AI, Theory of Mind, and Human-Computer Interaction. I&apos;m drawn to conversations with people from different backgrounds because they constantly reshape how I see the world.
          </p>

          <p className="font-sans text-base leading-relaxed text-[#171717] text-pretty">
            I enjoy a bit of chaos, the kind that comes from different ideas, opinions and critiques colliding. I like to collect those perspectives, sit with them and connect them in beautiful ways. Sometimes they become research, sometimes software, sometimes writing or art and often they become questions about how we can build AI that understands people a little better without losing sight of what makes us human.
          </p>
        </div>
      </div>

      {/* Wave Transition Container */}
      <div className="absolute bottom-0 left-0 w-full h-48 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q300,60 600,30 T1200,30 L1200,120 L0,120 Z"
            fill="#fcfbf9"
          />
        </svg>

        {/* Initialize Button */}
        <button
          onClick={scrollToWork}
          className="absolute left-1/2 -translate-x-1/2 bottom-24 lg:bottom-32 px-8 py-3 font-mono text-sm uppercase tracking-widest bg-[#4338ca] text-white rounded-full pulse-button hover:bg-[#342da8] transition-colors"
        >
          Initialize
        </button>
      </div>
    </section>
  )
}
