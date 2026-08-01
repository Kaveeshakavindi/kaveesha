'use client'

import { User } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-20 pb-20 sm:pt-32 px-4 sm:px-6 lg:px-12 overflow-hidden flex flex-col justify-center items-center bg-[#fcfbf9]">
      <div className="relative z-10 max-w-2xl text-center  sm:space-y-8">
        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#171717] space-y-0">
          Hi! I&apos;m <span className="italic">Kaveesha</span> Fernando
        </h1>

        {/* Monospace Subtitle */}
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373] leading-tight break-words">
          Researcher | Human-Centered AI | Theory of Mind | HCI
        </p>

        {/* Profile Image Placeholder - Smaller */}
        <div className="flex justify-center pt-2 sm:pt-4">
          <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full border border-[#e5e5e5] bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
            <User size={32} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#d4d4d4]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Body Text in JetBrains Mono */}
        <p className="font-mono text-xs sm:text-sm leading-relaxed text-[#171717] text-pretty pt-2 sm:pt-4">
          I enjoy a bit of chaos, the kind that comes from different ideas, opinions and critiques colliding. I like to collect those perspectives, sit with them and connect them in beautiful ways. Sometimes they become research, sometimes software, sometimes writing or art and often they become questions about how we can build AI that understands people a little better without losing sight of what makes us human.
        </p>
      </div>
    </section>
  )
}
