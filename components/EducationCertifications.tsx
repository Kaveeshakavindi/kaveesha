'use client'

const education = {
  degree: 'BEng. Software Engineering (Hons) with Placement',
  university: 'University of Westminster',
  period: 'Sep 2021 – Oct 2026 (Part-time)',
}

const certifications = [
  'Python for Data Science, AI & Development — IBM',
  'Microsoft Azure for Data Engineering',
  'AWS Cloud Essentials',
  'IBM i (AS/400) ILE RPG/400 Programming — ESOFT',
  'Certified Scrum Master (CSM) — Scrum Alliance',
]

export default function EducationCertifications() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
        Education & Certifications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
        {/* Education */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-6 sm:mb-8">
            Education
          </h3>
          <div className="space-y-4">
            <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-light text-[#171717]">
              {education.degree}
            </h4>
            <p className="font-mono text-sm uppercase tracking-widest text-[#4338ca]">
              {education.university}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-[#737373]">
              {education.period}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-[#737373] mb-6 sm:mb-8">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {certifications.map((cert, index) => (
              <span
                key={index}
                className="font-mono text-[10px] sm:text-xs uppercase tracking-widest px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#e0e7ff] text-[#4338ca] rounded-full"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
