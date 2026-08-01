'use client'

const experiences = [
  {
    role: 'Junior Software Engineer',
    company: 'Seylan Bank PLC',
    period: 'Sep 2024 – Jun 2026',
    highlights: [
      'Built ETL pipeline for Credit Card Bureau (CRIB) data into MS SQL Server (+50% efficiency)',
      'Multithreaded reporting system integrating AS400 DB2 (+60% efficiency)',
      'Migrated VB.NET legacy payment system to React + ASP.NET MVC with JWT (+80% efficiency/usability)',
      'Maintained AS400 DB2 schemas for teller systems',
    ],
  },
  {
    role: 'Mobile Engineering Intern',
    company: 'Axiata Digital Labs',
    period: 'Jul 2023 – Jun 2024',
    highlights: [
      'Contributed to Celcom Life and DMS Sales apps (React Native, Redux)',
      'QA testing, UAT, API integration, and debugging for production deployments',
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="research" className="py-32 px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-5xl lg:text-6xl font-light text-[#171717] mb-20 text-balance">
        Experience
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-[#e5e5e5] pl-8 hover:border-[#4338ca] transition-colors duration-300 py-2">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-8 mb-4">
              <h3 className="font-serif text-2xl lg:text-3xl font-light text-[#171717] flex-1">
                {exp.role}
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-[#737373] mt-2 lg:mt-0">
                {exp.period}
              </p>
            </div>

            <p className="font-mono text-sm uppercase tracking-widest text-[#4338ca] mb-4">
              {exp.company}
            </p>

            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="font-sans text-base text-[#737373] leading-relaxed">
                  • {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
