'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'PHQ & GAD Score Regression',
    category: 'ML / PSYCHOLOGY',
    description:
      'Predicting baseline anxiety (GAD) and depression (PHQ) scores from momentary negative thought patterns using EMA data.',
    link: 'https://github.com/Kaveeshakavindi/PHQ-GAD-Score-Regression',
    color: '#e0e7ff',
  },
  {
    title: 'Stellar Class Prediction',
    category: 'ML / ASTRONOMY',
    description:
      'This model was built to classify steller class as a submission for the the www.kaggle.com Predicting Stellar Class Playground Series - Season 6 Episode 6 competition',
    link: 'https://github.com/Kaveeshakavindi/steller_class_prediction',
    color: '#fef3c7',
  },
]

export default function WorkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 sm:py-0 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
        Recent Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="group cursor-pointer h-full border border-[#e5e5e5]  p-5 sm:p-6 transition-all duration-500 ease-out transform hover:border-[#4338ca] hover:shadow-md hover:-translate-y-1 relative overflow-hidden"
              style={{
                backgroundColor: project.color,
              }}
            >
              {/* Animated background orb */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24  blur-2xl opacity-20 transition-transform duration-500 group-hover:scale-110"
                style={{
                  background: '#4338ca',
                  pointerEvents: 'none',
                }}
              />

              <div className="relative z-10 space-y-3 h-full flex flex-col">
                {/* Category Label */}
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#737373]">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="font-serif text-base sm:text-lg md:text-lg font-light text-[#171717] group-hover:text-[#4338ca] transition-colors">
                  {project.title}
                </h3>

                {/* One-line description */}
                <p className="font-sans text-xs sm:text-sm text-[#737373] line-clamp-2 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* View Pill */}
                <div
                  className="inline-flex w-fit mt-auto px-3 sm:px-4 py-1.5 bg-white text-[#171717] font-mono text-[10px] sm:text-xs uppercase tracking-widest  font-medium transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0.6,
                    transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(0.5rem)',
                  }}
                >
                  View
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
