'use client'

const leadership = [
  { role: 'Marketing Executive', org: 'Women In Tech® Sri Lanka', period: 'Feb 2026 – Jun 2026' },
  { role: 'Creative Designer/Moderator', org: 'Teens in AI Sri Lanka', period: 'Dec 2025 – Mar 2026' },
  { role: 'Volunteer', org: 'Women In Tech® Sri Lanka', period: 'Oct 2025 – Feb 2026' },
  { role: 'Zone Director', org: 'Leo District 306A1', period: '2023–24' },
  { role: 'Secretary', org: 'Leo Club of IIT', period: '2022–23 — "Top 5 Secretary" award' },
  { role: 'IT & Marketing Director', org: 'Leo Club of IIT', period: '2021–22' },
  { role: 'Media Head', org: 'Mozilla Campus Club of IIT', period: '2022–23' },
]

export default function Leadership() {
  return (
    <section className="py-20 sm:py-32 px-10 sm:px-10 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
        Leadership & Volunteering
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {leadership.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 md:gap-8 pb-4 sm:pb-6 border-b border-[#e5e5e5] last:border-b-0">
            <div className="flex-1">
              <h3 className="font-serif text-base sm:text-lg md:text-xl lg:text-2xl font-light text-[#171717] mb-1 sm:mb-2">
                {item.role}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-[#4338ca]">
                {item.org}
              </p>
            </div>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373] mt-2 sm:mt-0 flex-shrink-0">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
