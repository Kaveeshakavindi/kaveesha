'use client'

export default function QuoteBreak() {
  return (
    <section className="py-20 sm:py-32 px-10 sm:px-10 lg:px-12 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
      <blockquote className="font-serif text-l sm:text-3xl md:text-4xl lg:text-5xl italic font-light text-[#171717] leading-relaxed">
        "If the doors of perception were cleansed everything would appear to man as it is, infinite."
      </blockquote>

      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
          — William Blake
        </p>
      </div>
    </section>
  )
}
