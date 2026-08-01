'use client'

import { useEffect, useState } from 'react'

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

      <div className="relative z-10 max-w-4xl text-center space-y-12">
        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="font-serif text-6xl lg:text-7xl xl:text-8xl font-light leading-tight text-[#171717]" style={{ lineHeight: 0.85 }}>
            Designing intelligence that <span className="italic">understands</span> people.
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base lg:text-lg text-[#737373] max-w-3xl mx-auto">
            Data Scientist exploring Human-Centered AI, Theory of Mind & HCI
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-3 justify-center pt-6">
          {['PYTHON', 'PYTORCH', 'TENSORFLOW', 'SCIKIT-LEARN', 'SQL'].map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs lg:text-sm uppercase tracking-widest px-4 py-2 border border-[#e5e5e5] rounded-full text-[#171717]"
            >
              {tech}
            </span>
          ))}
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
