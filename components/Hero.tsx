'use client'

import { User } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-6 lg:px-12 overflow-hidden flex flex-col justify-center items-center bg-[#fcfbf9]">
      <div className="relative z-10 max-w-2xl text-center space-y-8">
        {/* Title */}
        <h1 className="font-serif text-4xl lg:text-5xl font-light text-[#171717] space-y-0">
          Hi! I&apos;m <span className="italic">Kaveesha</span> Fernando
        </h1>

        {/* Monospace Subtitle */}
        <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
          Researcher | Human-Centered AI | Theory of Mind | Human-Computer Interaction
        </p>

        {/* Profile Image Placeholder - Smaller */}
        <div className="flex justify-center pt-4">
          <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center">
            <User size={48} className="text-[#d4d4d4]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Body Text in JetBrains Mono */}
        <p className="font-mono text-sm leading-relaxed text-[#171717] text-pretty pt-4">
          I enjoy a bit of chaos, the kind that comes from different ideas, opinions and critiques colliding. I like to collect those perspectives, sit with them and connect them in beautiful ways. Sometimes they become research, sometimes software, sometimes writing or art and often they become questions about how we can build AI that understands people a little better without losing sight of what makes us human.
        </p>
      </div>
    </section>
  )
}
