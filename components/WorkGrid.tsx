'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    title: 'PHQ & GAD Score Regression',
    category: 'ML / PSYCHOLOGY',
    description:
      'EDA and feature engineering on Experience Sampling Method data to predict anxiety (GAD) and depression (PHQ) scores from momentary thought patterns; Random Forest Regressor achieving R² = 0.7335 (10-fold CV).',
    link: 'https://github.com/Kaveeshakavindi/PHQ-GAD-Score-Regression',
    color: '#e0e7ff',
  },
  {
    title: 'Stellar Class Prediction',
    category: 'ML / ASTRONOMY',
    description:
      'Cleaned and preprocessed astronomical survey data (robust scaling, one-hot encoding); Random Forest classifier, 96% accuracy, 0.96 weighted F1 on Kaggle Playground Series S6E6.',
    link: 'https://github.com/Kaveeshakavindi/steller_class_prediction',
    color: '#fef3c7',
  },
]

export default function WorkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#171717] mb-12 sm:mb-20 text-balance">
        Recent Work
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="group cursor-pointer"
          >
            {/* Card */}
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <div
                className="aspect-video rounded-2xl overflow-hidden mb-6 transition-all duration-500 ease-out transform group-hover:-translate-y-4"
                style={{
                  backgroundColor: project.color,
                  boxShadow: hoveredIndex === index ? '0 20px 40px rgba(0, 0, 0, 0.1)' : 'none',
                }}
              >
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Animated background orb */}
                  <div
                    className="absolute w-32 h-32 rounded-full blur-3xl opacity-30 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      background: '#4338ca',
                    }}
                  />

                  {/* View Pill */}
                  <div
                    className="absolute bottom-4 right-4 px-4 py-2 bg-white text-[#171717] font-mono text-xs uppercase tracking-widest rounded-full font-bold transition-all duration-500"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(1rem)',
                    }}
                  >
                    View
                  </div>
                </div>
              </div>
            </Link>

            {/* Title & Category */}
            <div className="space-y-2">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-[#171717] group-hover:text-[#4338ca] transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#737373]">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
